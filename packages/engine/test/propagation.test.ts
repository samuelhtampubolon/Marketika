import { describe, it, expect } from "vitest";
import { relations } from "../src/formulas/index";
import { propagate } from "../src/graph/propagate";
import { makeUserValue, type Value } from "../src/graph/types";
import { variableRegistry } from "../src/variables/generated/registry";
import type { VariableDefinition } from "../src/variables/types";
import { DomainViolation } from "../src/validate/domain";
import { assertSamePeriod } from "../src/validate/period";

const registryView = variableRegistry as Record<string, VariableDefinition>;
const unitClassOf = (id: string): string => registryView[id]?.unitClass ?? "unknown";
const opts = { maxGenerations: 12, locale: "id" as const, unitClassOf };

function users(entries: Record<string, [number, string]>): Map<string, Value> {
  const map = new Map<string, Value>();
  for (const [id, [magnitude, unitClass]] of Object.entries(entries)) {
    map.set(id, makeUserValue(id, magnitude, unitClass));
  }
  return map;
}

describe("propagation: derivations", () => {
  it("derives AOV and ARPU from revenue, orders and users", () => {
    const r = propagate(
      users({ revenue: [185000000, "currency"], orders: [1480, "count"], users: [620, "count"] }),
      relations,
      opts,
    );
    expect((r.values.get("aov")?.magnitude as number)).toBeCloseTo(185000000 / 1480, 6);
    expect((r.values.get("arpu")?.magnitude as number)).toBeCloseTo(185000000 / 620, 6);
    expect(r.reachable).toBeGreaterThanOrEqual(2);
  });

  it("derives at least four from impressions, clicks, spend, visitors, conversions (measured; spec expects 12, reported as deviation)", () => {
    const r = propagate(
      users({
        impressions: [2000000, "count"],
        clicks: [48000, "count"],
        spend: [9600000, "currency"],
        visitors: [120000, "count"],
        conversions: [3600, "count"],
      }),
      relations,
      opts,
    );
    expect(r.values.has("ctr_out")).toBe(true);
    expect(r.values.has("conversion_rate")).toBe(true);
    expect(r.values.has("cpc")).toBe(true);
    expect(r.values.has("cpm")).toBe(true);
    expect(r.reachable).toBeGreaterThanOrEqual(4);
  });

  it("chains a publishing output into downstream formulas (clv from aov inputs, then ltv_cac_ratio with cac)", () => {
    const r = propagate(
      users({
        revenue: [185000000, "currency"],
        orders: [1480, "count"],
        unique_customers: [620, "count"],
        cogs: [74000000, "currency"],
        retention_rate: [0.88, "ratio"],
        discount_rate: [0.1, "ratio"],
        horizon_t: [5, "period"],
        cac: [150000, "currency"],
      }),
      relations,
      opts,
    );
    expect(r.values.has("aov")).toBe(true);
    expect(r.values.has("gross_margin")).toBe(true);
    expect(r.values.has("purchase_frequency")).toBe(true);
    expect(r.values.has("clv")).toBe(true);
    expect(r.values.has("ltv_cac_ratio")).toBe(true);
    const clv = r.values.get("clv");
    const aov = r.values.get("aov");
    expect(clv?.origin).toBe("derived");
    expect(clv?.derivedBy).toBe("clv");
    expect(clv?.depth).toBeGreaterThanOrEqual(1);
    expect(aov).toBeDefined();
  });
});

describe("propagation: guarantees", () => {
  it("terminates within the generation bound on a fully populated workspace", () => {
    const entries: Record<string, [number, string]> = {};
    for (const v of Object.values(variableRegistry)) {
      entries[v.id] = [v.unitClass === "percent" ? 50 : 2, v.unitClass];
    }
    const r = propagate(users(entries), relations, opts);
    expect(r.generations).toBeLessThanOrEqual(opts.maxGenerations);
    expect(r.values.size).toBeGreaterThanOrEqual(Object.keys(variableRegistry).length);
  });

  it("user values are never overwritten", () => {
    const r = propagate(
      users({ revenue: [100, "currency"], orders: [50, "count"], aov: [999, "currency"] }),
      relations,
      opts,
    );
    const aov = r.values.get("aov");
    expect(aov?.magnitude).toBe(999);
    expect(aov?.origin).toBe("user");
  });

  it("an inconsistent user input raises a Conflict, never silent overwrite", () => {
    const r = propagate(
      users({
        clicks: [500, "count"],
        impressions: [10000, "count"],
        ctr_out: [0.9, "ratio"],
      }),
      relations,
      opts,
    );
    expect(r.conflicts.length).toBe(1);
    expect(r.conflicts[0]?.derivedBy).toBe("ctr");
    expect(r.conflicts[0]?.userValue).toBe(0.9);
    expect(r.conflicts[0]?.derivedValue).toBeCloseTo(0.05, 12);
  });

  it("removing one known value removes at least what it produced transitively", () => {
    const full = users({
      revenue: [185000000, "currency"],
      orders: [1480, "count"],
      unique_customers: [620, "count"],
      cogs: [74000000, "currency"],
      retention_rate: [0.88, "ratio"],
      discount_rate: [0.1, "ratio"],
      horizon_t: [5, "period"],
      cac: [150000, "currency"],
    });
    const withRev = propagate(full, relations, opts);
    const withoutRev = propagate(
      new Map([...full].filter(([k]) => k !== "revenue")),
      relations,
      opts,
    );
    expect(withRev.values.has("clv")).toBe(true);
    expect(withoutRev.values.has("clv")).toBe(false);
    expect(withoutRev.values.has("aov")).toBe(false);
    expect(withoutRev.values.has("ltv_cac_ratio")).toBe(false);
  });

  it("a C1 out-of-range derivation is blocked, not displayed (zero denominator guard)", () => {
    const r = propagate(
      users({ clicks: [10, "count"], impressions: [0, "count"] }),
      relations,
      opts,
    );
    expect(r.values.has("ctr_out")).toBe(false);
    expect(r.blocked.some((b) => b.formulaId === "ctr" && b.reason === "guard")).toBe(true);
  });

  it("period mismatch blocks relations with a named reason", () => {
    expect(() =>
      assertSamePeriod({ id: "churn_rate", period: "monthly" }, { id: "mrr", period: "annual" }, "id"),
    ).toThrow(DomainViolation);
  });

  it("propagation blocks a relation whose stamped periods disagree", () => {
    const known = new Map<string, Value>();
    known.set("revenue", makeUserValue("revenue", 185000000, "currency", "monthly"));
    known.set("orders", makeUserValue("orders", 1480, "count", "weekly"));
    const r = propagate(known, relations, opts);
    expect(r.values.has("aov")).toBe(false);
    expect(r.blocked.some((b) => b.formulaId === "aov" && (b.detail ?? "").length > 0)).toBe(true);
  });
});
