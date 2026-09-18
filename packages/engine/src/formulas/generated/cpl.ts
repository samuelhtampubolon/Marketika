/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cpl",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["leads", "result"],
  },
  inputs: ["spend", "leads"],
  output: null,
  forward: (env) => (env.num("spend") / env.num("leads")),
  inverses: {
    "spend": (env) => (env.num("result") * env.num("leads")),
    "leads": (env) => (env.num("spend") / env.num("result")),
  },
};
