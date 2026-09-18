/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "ces",
  structuralClass: "C5",
  inputs: ["effort_sum", "total_responses"],
  output: null,
  forward: (env) => (env.num("effort_sum") / env.num("total_responses")),
  inverses: {
    "effort_sum": (env) => (env.num("result") * env.num("total_responses")),
    "total_responses": (env) => (env.num("effort_sum") / env.num("result")),
  },
};
