/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "market_share",
  structuralClass: "C1",
  inputs: ["company_sales", "market_sales"],
  output: "company_share",
  forward: (env) => (env.num("company_sales") / env.num("market_sales")),
  inverses: {
    "company_sales": (env) => (env.num("company_share") * env.num("market_sales")),
    "market_sales": (env) => (env.num("company_sales") / env.num("company_share")),
  },
};
