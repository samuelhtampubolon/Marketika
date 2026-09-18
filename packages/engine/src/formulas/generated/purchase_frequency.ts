/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "purchase_frequency",
  structuralClass: "C2",
  inputs: ["orders", "unique_customers"],
  output: "purchase_frequency",
  forward: (env) => (env.num("orders") / env.num("unique_customers")),
  inverses: {
    "orders": (env) => (env.num("purchase_frequency") * env.num("unique_customers")),
    "unique_customers": (env) => (env.num("orders") / env.num("purchase_frequency")),
  },
};
