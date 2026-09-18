/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "wtp",
  structuralClass: "C2",
  inputs: ["delta_u", "beta_price"],
  output: null,
  forward: (env) => (env.num("delta_u") / Math.abs(env.num("beta_price"))),
  inverses: {
    "delta_u": (env) => (env.num("result") * Math.abs(env.num("beta_price"))),
    "beta_price": (env) => (env.num("delta_u") / env.num("result")),
  },
};
