/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "retention_rate",
  structuralClass: "C1",
  inputs: ["end_customers", "new_customers", "start_customers"],
  output: "retention_rate",
  forward: (env) => ((env.num("end_customers") - env.num("new_customers")) / env.num("start_customers")),
  inverses: {
    "end_customers": (env) => (env.num("retention_rate") * env.num("start_customers") + env.num("new_customers")),
    "new_customers": (env) => (env.num("end_customers") - env.num("retention_rate") * env.num("start_customers")),
    "start_customers": (env) => ((env.num("end_customers") - env.num("new_customers")) / env.num("retention_rate")),
  },
};
