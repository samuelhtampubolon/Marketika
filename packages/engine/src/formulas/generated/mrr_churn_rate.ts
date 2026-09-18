/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "mrr_churn_rate",
  structuralClass: "C1",
  validation: {
    structuralClass: "C1",
    engineRule: "assert 0 <= result <= 1 else raise DomainViolation",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["total_mrr", "result"],
  },
  inputs: ["churned_mrr", "total_mrr"],
  output: null,
  forward: (env) => (env.num("churned_mrr") / env.num("total_mrr")),
  inverses: {
    "churned_mrr": (env) => (env.num("result") * env.num("total_mrr")),
    "total_mrr": (env) => (env.num("churned_mrr") / env.num("result")),
  },
};
