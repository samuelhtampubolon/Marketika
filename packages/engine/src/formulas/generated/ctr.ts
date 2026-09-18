/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "ctr",
  structuralClass: "C1",
  validation: {
    structuralClass: "C1",
    engineRule: "assert 0 <= result <= 1 else raise DomainViolation",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["impressions", "ctr_out"],
  },
  inputs: ["clicks", "impressions"],
  output: "ctr_out",
  forward: (env) => (env.num("clicks") / env.num("impressions")),
  inverses: {
    "clicks": (env) => (env.num("ctr_out") * env.num("impressions")),
    "impressions": (env) => (env.num("clicks") / env.num("ctr_out")),
  },
};
