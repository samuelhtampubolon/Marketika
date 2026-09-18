/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "ltv_cac_ratio",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["cac", "result"],
  },
  inputs: ["clv", "cac"],
  output: null,
  forward: (env) => (env.num("clv") / env.num("cac")),
  inverses: {
    "clv": (env) => (env.num("result") * env.num("cac")),
    "cac": (env) => (env.num("clv") / env.num("result")),
  },
};
