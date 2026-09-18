/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "penetration_rate",
  structuralClass: "C1",
  validation: {
    structuralClass: "C1",
    engineRule: "assert 0 <= result <= 1 else raise DomainViolation",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["tam_population", "result"],
  },
  inputs: ["customers", "tam_population"],
  output: null,
  forward: (env) => (env.num("customers") / env.num("tam_population")),
  inverses: {
    "customers": (env) => (env.num("result") * env.num("tam_population")),
    "tam_population": (env) => (env.num("customers") / env.num("result")),
  },
};
