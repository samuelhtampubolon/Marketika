import { describe, it, expect } from "vitest";
import { relationsById } from "../src/formulas/index";
import { checkInputs, checkOutputRange } from "../src/validate/sanity";
import { DomainViolation } from "../src/validate/domain";
import { assertSamePeriod, compoundMonthlyToAnnual, refuseNaiveAnnualization } from "../src/validate/period";
import type { Env } from "../src/relation";

function envOf(values: Record<string, number>): Env {
  return {
    num: (name) => {
      const v = values[name];
      if (v === undefined) throw new Error(`missing ${name}`);
      return v;
    },
    vec: () => {
      throw new Error("not used");
    },
    mat: () => {
      throw new Error("not used");
    },
  };
}

describe("zero denominator guard", () => {
  it("blocks CTR when impressions is zero (id message)", () => {
    const ctr = relationsById["ctr"]!;
    const res = checkInputs(ctr, envOf({ clicks: 5, impressions: 0 }), "id");
    expect(res.ok).toBe(false);
    expect(res.reason).toContain("Penyebut");
  });

  it("blocks AOV when orders is zero (en message)", () => {
    const aov = relationsById["aov"]!;
    const res = checkInputs(aov, envOf({ revenue: 100, orders: 0 }), "en");
    expect(res.ok).toBe(false);
    expect(res.reason).toMatch(/denominator/i);
  });
});

describe("negative count guard", () => {
  it("rejects a negative clicks count", () => {
    const ctr = relationsById["ctr"]!;
    const res = checkInputs(ctr, envOf({ clicks: -1, impressions: 10 }), "en");
    expect(res.ok).toBe(false);
    expect(res.reason).toMatch(/cannot be negative/i);
  });

  it("allows negatives for gap-difference classes (C3)", () => {
    const evpi = relationsById["evpi"]!;
    expect(checkInputs(evpi, envOf({ ev_perfect: 5, ev_base: 10 }), "en").ok).toBe(true);
  });
});

describe("C1 range assertion", () => {
  it("rejects a proportion above one with a diagnostic", () => {
    const ctr = relationsById["ctr"]!;
    const res = checkOutputRange(ctr, 1.4, "en");
    expect(res.ok).toBe(false);
    expect(res.reason).toMatch(/outside the valid range/i);
  });

  it("accepts an in-range proportion", () => {
    const ctr = relationsById["ctr"]!;
    expect(checkOutputRange(ctr, 0.0125, "en").ok).toBe(true);
  });

  it("flags a non-finite result", () => {
    const ctr = relationsById["ctr"]!;
    expect(checkOutputRange(ctr, Infinity, "en").ok).toBe(false);
  });
});

describe("period discipline", () => {
  it("blocks a period mismatch with a named DomainViolation", () => {
    expect(() =>
      assertSamePeriod({ id: "churn_rate", period: "monthly" }, { id: "purchase_frequency", period: "annual" }),
    ).toThrow(DomainViolation);
    try {
      assertSamePeriod({ id: "churn_rate", period: "monthly" }, { id: "purchase_frequency", period: "annual" });
    } catch (e) {
      expect((e as DomainViolation).code).toBe("period_mismatch");
    }
  });

  it("allows matching periods", () => {
    expect(() =>
      assertSamePeriod({ id: "churn_rate", period: "monthly" }, { id: "mrr", period: "monthly" }),
    ).not.toThrow();
  });

  it("compounds monthly churn correctly, never naive multiply", () => {
    expect(compoundMonthlyToAnnual(0.02)).toBeCloseTo(1 - Math.pow(0.98, 12), 12);
    expect(() => refuseNaiveAnnualization()).toThrow(DomainViolation);
  });
});
