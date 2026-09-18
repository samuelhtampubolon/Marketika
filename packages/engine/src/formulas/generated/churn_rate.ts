/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "churn_rate",
  structuralClass: "C1",
  inputs: ["lost_customers", "start_customers"],
  output: "churn_rate",
  forward: (env) => (env.num("lost_customers") / env.num("start_customers")),
  inverses: {
    "lost_customers": (env) => (env.num("churn_rate") * env.num("start_customers")),
    "start_customers": (env) => (env.num("lost_customers") / env.num("churn_rate")),
  },
};
