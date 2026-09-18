/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "penetration_rate",
  structuralClass: "C1",
  inputs: ["customers", "tam_population"],
  output: null,
  forward: (env) => (env.num("customers") / env.num("tam_population")),
  inverses: {
    "customers": (env) => (env.num("result") * env.num("tam_population")),
    "tam_population": (env) => (env.num("customers") / env.num("result")),
  },
};
