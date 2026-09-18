/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "arpu",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["users", "arpu"],
  },
  inputs: ["revenue", "users"],
  output: "arpu",
  forward: (env) => (env.num("revenue") / env.num("users")),
  inverses: {
    "revenue": (env) => (env.num("arpu") * env.num("users")),
    "users": (env) => (env.num("revenue") / env.num("arpu")),
  },
};
