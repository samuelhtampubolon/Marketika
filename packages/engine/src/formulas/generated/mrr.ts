/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "mrr",
  structuralClass: "C4",
  inputs: ["arpu", "subscribers"],
  output: "mrr",
  forward: (env) => (env.num("arpu") * env.num("subscribers")),
  inverses: {
    "arpu": (env) => (env.num("mrr") / env.num("subscribers")),
    "subscribers": (env) => (env.num("mrr") / env.num("arpu")),
  },
};
