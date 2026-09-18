import { describe, it, expect } from "vitest";
import { variableRegistry, variableIds, UNIT_CLASSES } from "../src/index";

const entries = Object.values(variableRegistry);

describe("canonical variable registry", () => {
  it("has at least 150 variables", () => {
    expect(entries.length).toBeGreaterThanOrEqual(150);
  });

  it("keys match definition ids (unique ids)", () => {
    expect(variableIds.length).toBe(entries.length);
    for (const v of entries) {
      expect(variableIds).toContain(v.id);
    }
    expect(new Set(variableIds).size).toBe(variableIds.length);
  });

  it("every variable has a label in both locales", () => {
    for (const v of entries) {
      expect(v.label.id.length, `${v.id}: Indonesian label`).toBeGreaterThan(0);
      expect(v.label.en.length, `${v.id}: English label`).toBeGreaterThan(0);
    }
  });

  it("every variable has a known unit class", () => {
    for (const v of entries) {
      expect(UNIT_CLASSES, `${v.id}: unit class`).toContain(v.unitClass);
    }
  });

  it("every variable has a definition and storage precision", () => {
    for (const v of entries) {
      expect(v.definition.length, `${v.id}: definition`).toBeGreaterThan(0);
      expect(v.storage.precision.length, `${v.id}: precision`).toBeGreaterThan(0);
    }
  });

  it("integer variables declare zero decimals", () => {
    for (const v of entries) {
      if (v.valueKind === "integer") {
        expect(v.constraints.decimals, `${v.id}: integer decimals`).toBe(0);
      }
    }
  });
});
