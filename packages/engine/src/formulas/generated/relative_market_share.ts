/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "relative_market_share",
  structuralClass: "C2",
  inputs: ["company_share", "largest_competitor_share"],
  output: null,
  forward: (env) => (env.num("company_share") / env.num("largest_competitor_share")),
  inverses: {
    "company_share": (env) => (env.num("result") * env.num("largest_competitor_share")),
    "largest_competitor_share": (env) => (env.num("company_share") / env.num("result")),
  },
};
