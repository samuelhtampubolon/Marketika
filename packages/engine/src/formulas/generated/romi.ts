/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "romi",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["marketing_cost"],
  },
  inputs: ["incremental_revenue", "marketing_cost"],
  output: null,
  forward: (env) => ((env.num("incremental_revenue") - env.num("marketing_cost")) / env.num("marketing_cost")),
  inverses: {
    "incremental_revenue": (env) => (env.num("marketing_cost") * (1 + env.num("result"))),
    "marketing_cost": (env) => (env.num("incremental_revenue") / (1 + env.num("result"))),
  },
};
