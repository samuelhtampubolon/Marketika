/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "arppu",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["paying_users", "result"],
  },
  inputs: ["revenue", "paying_users"],
  output: null,
  forward: (env) => (env.num("revenue") / env.num("paying_users")),
  inverses: {
    "revenue": (env) => (env.num("result") * env.num("paying_users")),
    "paying_users": (env) => (env.num("revenue") / env.num("result")),
  },
};
