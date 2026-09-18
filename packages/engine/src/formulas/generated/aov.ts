/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "aov",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["orders", "aov"],
  },
  inputs: ["revenue", "orders"],
  output: "aov",
  forward: (env) => (env.num("revenue") / env.num("orders")),
  inverses: {
    "revenue": (env) => (env.num("aov") * env.num("orders")),
    "orders": (env) => (env.num("revenue") / env.num("aov")),
  },
};
