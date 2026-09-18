/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cpa",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["acquisitions", "result"],
  },
  inputs: ["spend", "acquisitions"],
  output: null,
  forward: (env) => (env.num("spend") / env.num("acquisitions")),
  inverses: {
    "spend": (env) => (env.num("result") * env.num("acquisitions")),
    "acquisitions": (env) => (env.num("spend") / env.num("result")),
  },
};
