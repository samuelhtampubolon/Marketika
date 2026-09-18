/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "lead_to_customer_rate",
  structuralClass: "C1",
  validation: {
    structuralClass: "C1",
    engineRule: "assert 0 <= result <= 1 else raise DomainViolation",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["leads", "result"],
  },
  inputs: ["customers", "leads"],
  output: null,
  forward: (env) => (env.num("customers") / env.num("leads")),
  inverses: {
    "customers": (env) => (env.num("result") * env.num("leads")),
    "leads": (env) => (env.num("customers") / env.num("result")),
  },
};
