/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "effective_frequency",
  structuralClass: "C1",
  validation: {
    structuralClass: "C1",
    engineRule: "assert 0 <= result <= 1 else raise DomainViolation",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["total_reach", "result"],
  },
  inputs: ["reach_at_threshold", "total_reach"],
  output: null,
  forward: (env) => (env.num("reach_at_threshold") / env.num("total_reach")),
  inverses: {
    "reach_at_threshold": (env) => (env.num("result") * env.num("total_reach")),
    "total_reach": (env) => (env.num("reach_at_threshold") / env.num("result")),
  },
};
