import { describe, it, expect } from "vitest";
import { seriesSum } from "../src/helpers/series";
import { npvCalc } from "../src/helpers/npv";
import { dot, matvec } from "../src/helpers/linalg";
import { phi } from "../src/helpers/normal";
import { blackScholesCall } from "../src/helpers/blackScholes";
import { irrSolve } from "../src/helpers/irr";
import { vwIntersection, vwFromFourPrices } from "../src/helpers/vanWestendorp";

describe("seriesSum", () => {
  it("sums retention/discount powers per specification", () => {
    const s = seriesSum(0.88, 0.1, 5);
    const expected = 0.88 / 1.1 + Math.pow(0.88, 2) / Math.pow(1.1, 2) + Math.pow(0.88, 3) / Math.pow(1.1, 3) + Math.pow(0.88, 4) / Math.pow(1.1, 4) + Math.pow(0.88, 5) / Math.pow(1.1, 5);
    expect(s).toBeCloseTo(expected, 12);
  });

  it("bounds by horizon when retention is one and discount is zero", () => {
    expect(seriesSum(1, 0, 5)).toBeCloseTo(5, 12);
  });

  it("rejects invalid guards", () => {
    expect(() => seriesSum(0.9, 0.1, 0)).toThrow(/horizon/);
    expect(() => seriesSum(0.9, -1, 5)).toThrow(/discount/);
    expect(() => seriesSum(1.5, 0.1, 5)).toThrow(/retention/);
    expect(() => seriesSum(-0.1, 0.1, 5)).toThrow(/retention/);
  });
});

describe("npvCalc", () => {
  it("discounts each flow by one plus rate to the period", () => {
    expect(npvCalc([100, 100], 0.1)).toBeCloseTo(100 / 1.1 + 100 / 1.21, 12);
  });

  it("rejects invalid guards", () => {
    expect(() => npvCalc([], 0.1)).toThrow(/cashFlows/);
    expect(() => npvCalc([100], -1)).toThrow(/rate/);
  });
});

describe("dot and matvec", () => {
  it("computes the inner product", () => {
    expect(dot([1, 2, 3], [4, 5, 6])).toBe(32);
  });

  it("computes matrix vector product", () => {
    expect(matvec([[1, 2], [3, 4]], [5, 6])).toEqual([17, 39]);
  });

  it("rejects mismatched dimensions", () => {
    expect(() => dot([1, 2], [1, 2, 3])).toThrow(/length/);
    expect(() => dot([], [])).toThrow(/length/);
    expect(() => matvec([[1, 2]], [1])).toThrow(/row/);
  });
});

describe("phi", () => {
  it("is the standard normal CDF", () => {
    expect(phi(0)).toBeCloseTo(0.5, 8);
    expect(phi(1.96)).toBeCloseTo(0.975002, 6);
    expect(phi(-1.96)).toBeCloseTo(0.024998, 6);
    expect(phi(2.5)).toBeCloseTo(0.99379, 5);
    expect(phi(-3)).toBeCloseTo(0.00135, 5);
  });

  it("is symmetric", () => {
    for (const z of [0.5, 1.5, 3]) {
      expect(phi(z) + phi(-z)).toBeCloseTo(1, 9);
    }
  });
});

describe("blackScholesCall", () => {
  it("matches the textbook value", () => {
    expect(blackScholesCall(100, 100, 0.05, 1, 0.2)).toBeCloseTo(10.4506, 3);
  });

  it("approaches intrinsic value as sigma tends to zero", () => {
    const v = blackScholesCall(100, 95, 0.05, 1, 1e-6);
    expect(v).toBeCloseTo(Math.max(100 - 95 * Math.exp(-0.05), 0), 4);
  });

  it("rejects invalid guards", () => {
    expect(() => blackScholesCall(-1, 100, 0.05, 1, 0.2)).toThrow(/S/);
    expect(() => blackScholesCall(100, 0, 0.05, 1, 0.2)).toThrow(/X/);
    expect(() => blackScholesCall(100, 100, 0.05, 0, 0.2)).toThrow(/T/);
    expect(() => blackScholesCall(100, 100, 0.05, 1, 0)).toThrow(/sigma/);
  });
});

describe("irrSolve", () => {
  it("finds the single root of a simple project", () => {
    const r = irrSolve([110], 100);
    expect(r.converged).toBe(true);
    expect(r.unique).toBe(true);
    expect(r.roots[0]).toBeCloseTo(0.1, 6);
  });

  it("reports both roots when the series changes sign twice", () => {
    const r = irrSolve([5000, -4500], 1000);
    expect(r.roots.length).toBe(2);
    expect(r.unique).toBe(false);
    expect(r.roots[0]).toBeCloseTo(0.17712, 4);
    expect(r.roots[1]).toBeCloseTo(2.82288, 4);
  });

  it("rejects a series without a sign change", () => {
    expect(() => irrSolve([100, 100], 0)).toThrow(/sign/);
  });
});

describe("vwIntersection", () => {
  const responses = [
    { price: 4000, tooCheap: 40, cheap: 40, expensive: 15, tooExpensive: 5 },
    { price: 6000, tooCheap: 10, cheap: 45, expensive: 30, tooExpensive: 15 },
    { price: 8000, tooCheap: 2, cheap: 28, expensive: 45, tooExpensive: 25 },
    { price: 10000, tooCheap: 1, cheap: 9, expensive: 40, tooExpensive: 50 },
    { price: 12000, tooCheap: 0, cheap: 3, expensive: 17, tooExpensive: 80 },
  ];

  it("returns four price points and four curves", () => {
    const r = vwIntersection(responses);
    expect(r.curves).toHaveLength(4);
    expect(r.opp).not.toBeNull();
    expect(r.ipp).not.toBeNull();
    expect(r.pmc).not.toBeNull();
    expect(r.pme).not.toBeNull();
    expect(r.opp).toBeGreaterThan(r.pmc!);
    expect(r.pme!).toBeGreaterThan(r.opp!);
  });

  it("rejects a degenerate grid", () => {
    expect(() => vwIntersection([{ price: 100, tooCheap: 0, cheap: 0, expensive: 0, tooExpensive: 0 }])).toThrow(/price points|responses/);
  });
});

describe("vwFromFourPrices", () => {
  it("matches the specification worked example anchors", () => {
    const r = vwFromFourPrices(45000, 78000, 135000, 195000);
    expect(r.opp).toBeCloseTo(73125, 0);
    expect(r.ipp).toBeCloseTo(98873.24, 2);
    expect(r.pmc).toBeCloseTo(57073.17, 2);
    expect(r.pme).toBeCloseTo(159545.45, 2);
    expect(r.pmc!).toBeLessThan(r.opp!);
    expect(r.opp!).toBeLessThan(r.ipp!);
    expect(r.ipp!).toBeLessThan(r.pme!);
  });

  it("rejects unsorted anchors", () => {
    expect(() => vwFromFourPrices(80, 50, 90, 100)).toThrow(/tooCheap/);
  });
});
