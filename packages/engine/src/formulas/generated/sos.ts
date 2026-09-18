/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "sos",
  structuralClass: "C1",
  inputs: ["brand_searches", "category_searches"],
  output: null,
  forward: (env) => (env.num("brand_searches") / env.num("category_searches")),
  inverses: {
    "brand_searches": (env) => (env.num("result") * env.num("category_searches")),
    "category_searches": (env) => (env.num("brand_searches") / env.num("result")),
  },
};
