/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "csat",
  structuralClass: "C1",
  inputs: ["satisfied_count", "total_responses"],
  output: null,
  forward: (env) => ((env.num("satisfied_count") / env.num("total_responses")) * 100),
  inverses: {
    "satisfied_count": (env) => (env.num("result") * env.num("total_responses") / 100),
    "total_responses": (env) => (env.num("satisfied_count") * 100 / env.num("result")),
  },
};
