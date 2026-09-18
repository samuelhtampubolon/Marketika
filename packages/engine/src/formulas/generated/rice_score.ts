/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "rice_score",
  structuralClass: "C4",
  inputs: ["rice_reach", "rice_impact", "rice_confidence", "rice_effort"],
  output: null,
  forward: (env) => ((env.num("rice_reach") * env.num("rice_impact") * (env.num("rice_confidence") / 100)) / env.num("rice_effort")),
  inverses: {
    "rice_effort": (env) => ((env.num("rice_reach") * env.num("rice_impact") * (env.num("rice_confidence") / 100)) / env.num("result")),
    "rice_reach": (env) => (env.num("result") * env.num("rice_effort") / (env.num("rice_impact") * (env.num("rice_confidence") / 100))),
  },
};
