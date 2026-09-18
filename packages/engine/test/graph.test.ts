import { describe, it, expect } from "vitest";
import { relations } from "../src/formulas/index";
import { variableRegistry } from "../src/variables/generated/registry";
import type { VariableDefinition } from "../src/variables/types";
import { makeUserValue, type Value } from "../src/graph/types";
import { propagate } from "../src/graph/propagate";
import { underdetermined, describeUnderdetermined, derivationProse } from "../src/graph/explain";

const reg = variableRegistry as Record<string, VariableDefinition>;

describe("graph invariants", () => {
  it("every relation input is a canonical variable", () => {
    for (const rel of relations) {
      for (const i of rel.inputs) expect(reg[i], `${rel.formulaId} input ${i}`).toBeDefined();
    }
  });

  it("every relation output (when published) is a canonical variable", () => {
    for (const rel of relations) {
      if (rel.output !== null) expect(reg[rel.output], `${rel.formulaId} output ${rel.output}`).toBeDefined();
    }
  });

  it("every inverse target is in the relation's own set (inputs, output, or result)", () => {
    for (const rel of relations) {
      const own = new Set<string>([...rel.inputs, "result"]);
      if (rel.output !== null) own.add(rel.output);
      for (const target of Object.keys(rel.inverses)) {
        expect(own.has(target), `${rel.formulaId} inverse ${target}`).toBe(true);
      }
    }
  });

  it("no two relations share a formula id", () => {
    const ids = relations.map((r) => r.formulaId);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("underdetermination and explanation", () => {
  const opts = { maxGenerations: 12, locale: "id" as const };

  it("names missing variables that would unlock an unreachable target", () => {
    const known = new Map<string, Value>();
    known.set("clicks", makeUserValue("clicks", 100, "count"));
    const report = underdetermined("clv", known, relations);
    expect(report.frontiers.length).toBeGreaterThan(0);
    const prose = describeUnderdetermined(report, "id");
    expect(prose).toContain("belum dapat dihitung");
  });

  it("derivation prose lists the chain for a computed target", () => {
    const known = new Map<string, Value>();
    known.set("clicks", makeUserValue("clicks", 500, "count"));
    known.set("impressions", makeUserValue("impressions", 10000, "count"));
    const r = propagate(known, relations, opts);
    const lines = derivationProse("ctr_out", r, "id");
    expect(lines.some((l) => l.includes("ctr"))).toBe(true);
    expect(lines.some((l) => l.includes("clicks"))).toBe(true);
  });
});
