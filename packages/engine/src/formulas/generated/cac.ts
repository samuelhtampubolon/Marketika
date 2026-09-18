/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cac",
  structuralClass: "C2",
  inputs: ["total_acquisition_cost", "new_customers"],
  output: "cac",
  forward: (env) => (env.num("total_acquisition_cost") / env.num("new_customers")),
  inverses: {
    "total_acquisition_cost": (env) => (env.num("cac") * env.num("new_customers")),
    "new_customers": (env) => (env.num("total_acquisition_cost") / env.num("cac")),
  },
};
