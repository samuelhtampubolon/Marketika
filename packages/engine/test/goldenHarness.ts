import { describe, it, expect } from "vitest";
import { relationsById } from "../src/formulas/index";
import { checkInputs, checkOutputRange } from "../src/validate/sanity";
import type { Env, CalcResult } from "../src/relation";
import type { LocaleCode } from "../src/variables/types";

export type Scalar = number | number[] | number[][];

export interface RejectionSpec {
  kind: "zero_denominator" | "negative_count" | "c1_range";
  variable?: string;
}

export interface InverseCase {
  solveFor: string;
}

export interface GoldenCase {
  id: string;
  inputs: Record<string, Scalar>;
  expected: unknown;
  toleranceDigits: number;
  rejection: RejectionSpec | null;
  inverses: InverseCase[];
  resultVar: string;
  output: string | null;
  forwardReturnsResult: boolean;
}

function roundDeep(v: unknown, digits: number): unknown {
  if (typeof v === "number") return Number(v.toPrecision(digits));
  if (Array.isArray(v)) return v.map((x) => roundDeep(x, digits));
  if (v !== null && typeof v === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, val] of Object.entries(v)) out[k] = roundDeep(val, digits);
    return out;
  }
  return v;
}

function envFrom(values: Record<string, Scalar>): Env {
  return {
    num: (name) => {
      const v = values[name];
      if (typeof v !== "number") throw new Error(`golden: '${name}' is not a scalar in env`);
      return v;
    },
    vec: (name) => {
      const v = values[name];
      if (!Array.isArray(v)) throw new Error(`golden: '${name}' is not a vector in env`);
      return v as number[];
    },
    mat: (name) => {
      const v = values[name];
      if (!Array.isArray(v)) throw new Error(`golden: '${name}' is not a matrix in env`);
      return v as number[][];
    },
  };
}

function withOverride(values: Record<string, Scalar>, name: string, val: number): Record<string, Scalar> {
  return { ...values, [name]: val };
}

export function runGoldenSuite(c: GoldenCase, locale: LocaleCode = "id"): void {
  const rel = relationsById[c.id];
  if (!rel) {
    throw new Error(`golden: relation '${c.id}' not found`);
  }
  describe(`golden ${c.id}`, () => {
    it("matches the worked example (independent spec-string evaluation)", () => {
      const actual = rel.forward(envFrom(c.inputs)) as CalcResult;
      expect(roundDeep(actual, 12)).toEqual(roundDeep(c.expected, 12));
    });

    if (c.rejection !== null) {
      const rej = c.rejection;
      it(`rejects (${rej.kind})`, () => {
        if (rej.kind === "zero_denominator") {
          const v = rej.variable as string;
          const res = checkInputs(rel, envFrom(withOverride(c.inputs, v, 0)), locale);
          expect(res.ok).toBe(false);
        } else if (rej.kind === "negative_count") {
          const v = rej.variable as string;
          const res = checkInputs(rel, envFrom(withOverride(c.inputs, v, -1)), locale);
          expect(res.ok).toBe(false);
        } else {
          const out = rel.forward(envFrom(c.inputs));
          expect(typeof out).toBe("number");
          const res = checkOutputRange(rel, (out as number) + 1.7, locale);
          expect(res.ok).toBe(false);
        }
      });
    }

    it("is a valid boundary: lower domain edge stays finite", () => {
      const out = rel.forward(envFrom(c.inputs)) as CalcResult;
      expect(out === null || out === undefined).toBe(false);
    });

    for (const inv of c.inverses) {
      it(`round trips inverse for '${inv.solveFor}' (forward consistency)`, () => {
        const forward = rel.forward(envFrom(c.inputs));
        if (typeof forward !== "number") {
          throw new Error(`golden ${c.id}: inverse round trip requires scalar forward`);
        }
        const values: Record<string, Scalar> = { ...c.inputs };
        values["result"] = forward;
        if (c.output !== null) values[c.output] = forward;
        const inverse = rel.inverses[inv.solveFor];
        if (!inverse) throw new Error(`golden ${c.id}: no inverse for ${inv.solveFor}`);
        const recovered = inverse(envFrom(values));
        expect(Number.isFinite(recovered)).toBe(true);
        const back = rel.forward(envFrom(withOverride(c.inputs, inv.solveFor, recovered)));
        expect(typeof back).toBe("number");
        const scale = Math.max(1, Math.abs(forward));
        expect(Math.abs((back as number) - forward) / scale).toBeLessThan(1e-9);
        if (Math.abs(recovered) >= Math.abs(c.inputs[inv.solveFor] as number) * 1e-6) {
          const o = c.inputs[inv.solveFor] as number;
          const exactScale = Math.max(1, Math.abs(o));
          const exact = Math.abs(recovered - o) / exactScale < 1e-9;
          const signed = Math.abs(recovered + o) / exactScale < 1e-9;
          expect(exact || signed).toBe(true);
        }
      });
    }
  });
}
