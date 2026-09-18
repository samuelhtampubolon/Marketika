/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cart_abandonment_rate",
  structuralClass: "C1",
  inputs: ["carts_created", "carts_purchased"],
  output: null,
  forward: (env) => (1 - (env.num("carts_purchased") / env.num("carts_created"))),
  inverses: {
    "carts_purchased": (env) => (env.num("carts_created") * (1 - env.num("result"))),
    "carts_created": (env) => (env.num("carts_purchased") / (1 - env.num("result"))),
  },
};
