/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "nps",
  structuralClass: "C3",
  inputs: ["promoters", "detractors", "total_respondents"],
  output: null,
  forward: (env) => (((env.num("promoters") - env.num("detractors")) / env.num("total_respondents")) * 100),
  inverses: {
    "promoters": (env) => (env.num("result") * env.num("total_respondents") / 100 + env.num("detractors")),
    "detractors": (env) => (env.num("promoters") - env.num("result") * env.num("total_respondents") / 100),
    "total_respondents": (env) => ((env.num("promoters") - env.num("detractors")) * 100 / env.num("result")),
  },
};
