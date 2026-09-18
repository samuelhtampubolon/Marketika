/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cart_abandonment_rate",
  structuralClass: "C1",
  validation: {
    structuralClass: "C1",
    engineRule: "assert 0 <= result <= 1 else raise DomainViolation",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["carts_created"],
  },
  inputs: ["carts_created", "carts_purchased"],
  output: null,
  forward: (env) => (1 - (env.num("carts_purchased") / env.num("carts_created"))),
  inverses: {
    "carts_purchased": (env) => (env.num("carts_created") * (1 - env.num("result"))),
    "carts_created": (env) => (env.num("carts_purchased") / (1 - env.num("result"))),
  },
};
