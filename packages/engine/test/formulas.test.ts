import { describe, it, expect } from "vitest";
import { relations, relationsById } from "../src/formulas/index";
import { variableRegistry } from "../src/variables/generated/registry";
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

describe("formula relation registry", () => {
  it("holds exactly 76 relations", () => {
    expect(relations.length).toBe(76);
  });

  it("every relation id is unique and every output exists in the variable registry", () => {
    const ids = new Set<string>();
    for (const r of relations) {
      expect(ids.has(r.formulaId), `dup ${r.formulaId}`).toBe(false);
      ids.add(r.formulaId);
      if (r.output !== null) {
        expect(
          Object.prototype.hasOwnProperty.call(variableRegistry, r.output),
          `${r.formulaId} output ${r.output}`,
        ).toBe(true);
      }
    }
  });

  it("computes CTR forward", () => {
    const ctr = relationsById["ctr"];
    expect(ctr).toBeDefined();
    const result = ctr?.forward(
      envOf({ clicks: 1250, impressions: 100000 }),
    );
    expect(result).toBeCloseTo(0.0125, 10);
  });

  it("round trips CTR inverses", () => {
    const ctr = relationsById["ctr"];
    if (!ctr) throw new Error("ctr missing");
    const env = envOf({ ctr_out: 0.0125, impressions: 100000 });
    expect(ctr.inverses["clicks"]?.(env)).toBeCloseTo(1250, 6);
    const env2 = envOf({ clicks: 1250, ctr_out: 0.0125 });
    expect(ctr.inverses["impressions"]?.(env2)).toBeCloseTo(100000, 6);
  });
});
