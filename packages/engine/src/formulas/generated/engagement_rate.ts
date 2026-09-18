/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "engagement_rate",
  structuralClass: "C1",
  validation: {
    structuralClass: "C1",
    engineRule: "assert 0 <= result <= 1 else raise DomainViolation",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["followers", "result"],
  },
  inputs: ["engagements", "followers"],
  output: null,
  forward: (env) => (env.num("engagements") / env.num("followers")),
  inverses: {
    "engagements": (env) => (env.num("result") * env.num("followers")),
    "followers": (env) => (env.num("engagements") / env.num("result")),
  },
};
