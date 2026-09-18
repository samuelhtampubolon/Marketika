import { describe, it, expect } from "vitest";
import { formatNumber, formatCurrency, formatByUnitClass, formatVector } from "../src/format";

describe("formatNumber", () => {
  it("uses dot thousands and comma decimal in Indonesian", () => {
    expect(formatNumber(185000000, { locale: "id", decimals: 2 })).toBe("185.000.000,00");
  });

  it("uses comma thousands and dot decimal in English", () => {
    expect(formatNumber(185000000, { locale: "en", decimals: 2 })).toBe("185,000,000.00");
  });

  it("handles negatives", () => {
    expect(formatNumber(-1234.5, { locale: "id", decimals: 1 })).toBe("-1.234,5");
  });

  it("groups without separator when asked", () => {
    expect(formatNumber(1234.5, { locale: "id", decimals: 1, thousandSeparator: false })).toBe(
      "1234,5",
    );
  });
});

describe("formatCurrency", () => {
  it("matches the specification example (id)", () => {
    expect(formatCurrency(185000000, "id")).toBe("Rp 185.000.000,00");
  });

  it("matches the specification example (en)", () => {
    expect(formatCurrency(185000000, "en")).toBe("Rp 185,000,000.00");
  });
});

describe("formatByUnitClass", () => {
  it("count: integer grouping", () => {
    expect(formatByUnitClass(1480, "count", "id")).toBe("1.480");
  });

  it("percent: two decimals and percent sign", () => {
    expect(formatByUnitClass(62.5, "percent", "id")).toBe("62,50%");
  });

  it("ratio: four decimals, no percent sign", () => {
    expect(formatByUnitClass(0.6, "ratio", "id")).toBe("0,6000");
  });

  it("period: unit word in locale", () => {
    expect(formatByUnitClass(5, "period", "id")).toBe("5 periode");
    expect(formatByUnitClass(1, "period", "en")).toBe("1 period");
    expect(formatByUnitClass(3, "period", "en")).toBe("3 periods");
  });

  it("null renders N/A, not zero", () => {
    expect(formatByUnitClass(null, "count", "id")).toBe("N/A");
    expect(formatByUnitClass(0, "count", "id")).toBe("0");
  });

  it("vector and matrix are refused by the scalar formatter", () => {
    expect(() => formatByUnitClass([1] as unknown as number, "vector", "id")).toThrow();
    expect(() => formatByUnitClass(1, "matrix", "id")).toThrow();
  });

  it("formatVector joins with locale decimals", () => {
    expect(formatVector([0.5, -1.25], "id")).toBe("0,5000, -1,2500");
  });
});
