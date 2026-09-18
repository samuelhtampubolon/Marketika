/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "pipeline_coverage",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["quota", "result"],
  },
  inputs: ["pipeline_value", "quota"],
  output: null,
  forward: (env) => (env.num("pipeline_value") / env.num("quota")),
  inverses: {
    "pipeline_value": (env) => (env.num("result") * env.num("quota")),
    "quota": (env) => (env.num("pipeline_value") / env.num("result")),
  },
};
