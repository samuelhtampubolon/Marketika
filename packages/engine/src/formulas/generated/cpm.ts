/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cpm",
  structuralClass: "C2",
  inputs: ["spend", "impressions"],
  output: null,
  forward: (env) => ((env.num("spend") / env.num("impressions")) * 1000),
  inverses: {
    "spend": (env) => (env.num("result") * env.num("impressions") / 1000),
    "impressions": (env) => (env.num("spend") * 1000 / env.num("result")),
  },
};
