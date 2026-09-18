/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "break_even_quantity",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["price", "result"],
  },
  inputs: ["fixed_cost", "price", "variable_cost"],
  output: null,
  forward: (env) => (env.num("fixed_cost") / (env.num("price") - env.num("variable_cost"))),
  inverses: {
    "fixed_cost": (env) => (env.num("result") * (env.num("price") - env.num("variable_cost"))),
    "price": (env) => (env.num("fixed_cost") / env.num("result") + env.num("variable_cost")),
    "variable_cost": (env) => (env.num("price") - env.num("fixed_cost") / env.num("result")),
  },
};
