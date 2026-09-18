/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cac",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["new_customers", "cac"],
  },
  inputs: ["total_acquisition_cost", "new_customers"],
  output: "cac",
  forward: (env) => (env.num("total_acquisition_cost") / env.num("new_customers")),
  inverses: {
    "total_acquisition_cost": (env) => (env.num("cac") * env.num("new_customers")),
    "new_customers": (env) => (env.num("total_acquisition_cost") / env.num("cac")),
  },
};
