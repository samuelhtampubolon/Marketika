/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "clv_simple",
  structuralClass: "C6",
  validation: {
    structuralClass: "C6",
    engineRule: "discount_rate and horizon are mandatory output annotations, never optional",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["churn_rate", "gross_margin", "arpu", "result"],
  },
  inputs: ["arpu", "gross_margin", "churn_rate"],
  output: null,
  forward: (env) => ((env.num("arpu") * env.num("gross_margin")) / env.num("churn_rate")),
  inverses: {
    "arpu": (env) => (env.num("result") * env.num("churn_rate") / env.num("gross_margin")),
    "gross_margin": (env) => (env.num("result") * env.num("churn_rate") / env.num("arpu")),
    "churn_rate": (env) => ((env.num("arpu") * env.num("gross_margin")) / env.num("result")),
  },
};
