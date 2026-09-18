/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "contribution_margin",
  structuralClass: "C3",
  validation: {
    structuralClass: "C3",
    engineRule: "null is not zero; distinguish None from 0.0 in the store and in the renderer",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: [],
  },
  inputs: ["price", "variable_cost"],
  output: null,
  forward: (env) => (env.num("price") - env.num("variable_cost")),
  inverses: {
    "price": (env) => (env.num("result") + env.num("variable_cost")),
    "variable_cost": (env) => (env.num("price") - env.num("result")),
  },
};
