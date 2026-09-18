/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "gabor_granger",
  structuralClass: "C1",
  validation: {
    structuralClass: "C1",
    engineRule: "assert 0 <= result <= 1 else raise DomainViolation",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["total_respondents", "result"],
  },
  inputs: ["buyers_at_p", "total_respondents"],
  output: null,
  forward: (env) => (env.num("buyers_at_p") / env.num("total_respondents")),
  inverses: {
    "buyers_at_p": (env) => (env.num("result") * env.num("total_respondents")),
    "total_respondents": (env) => (env.num("buyers_at_p") / env.num("result")),
  },
};
