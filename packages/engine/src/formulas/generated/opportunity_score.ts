/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "opportunity_score",
  structuralClass: "C3",
  validation: {
    structuralClass: "C3",
    engineRule: "null is not zero; distinguish None from 0.0 in the store and in the renderer",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: [],
  },
  inputs: ["importance", "satisfaction"],
  output: null,
  forward: (env) => (env.num("importance") + Math.max(0, env.num("importance") - env.num("satisfaction"))),
  inverses: {
    "satisfaction": (env) => (2 * env.num("importance") - env.num("result")),
  },
};
