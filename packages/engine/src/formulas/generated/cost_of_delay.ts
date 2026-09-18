/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cost_of_delay",
  structuralClass: "C3",
  validation: {
    structuralClass: "C3",
    engineRule: "null is not zero; distinguish None from 0.0 in the store and in the renderer",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["delta_time", "result"],
  },
  inputs: ["delta_value", "delta_time"],
  output: null,
  forward: (env) => (env.num("delta_value") / env.num("delta_time")),
  inverses: {
    "delta_value": (env) => (env.num("result") * env.num("delta_time")),
    "delta_time": (env) => (env.num("delta_value") / env.num("result")),
  },
};
