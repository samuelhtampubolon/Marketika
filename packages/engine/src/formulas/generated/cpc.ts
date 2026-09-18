/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cpc",
  structuralClass: "C2",
  inputs: ["spend", "clicks"],
  output: null,
  forward: (env) => (env.num("spend") / env.num("clicks")),
  inverses: {
    "spend": (env) => (env.num("result") * env.num("clicks")),
    "clicks": (env) => (env.num("spend") / env.num("result")),
  },
};
