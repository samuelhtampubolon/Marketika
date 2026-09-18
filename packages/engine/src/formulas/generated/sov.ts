/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "sov",
  structuralClass: "C1",
  inputs: ["brand_mentions", "market_mentions"],
  output: null,
  forward: (env) => (env.num("brand_mentions") / env.num("market_mentions")),
  inverses: {
    "brand_mentions": (env) => (env.num("result") * env.num("market_mentions")),
    "market_mentions": (env) => (env.num("brand_mentions") / env.num("result")),
  },
};
