/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "evpi",
  structuralClass: "C7",
  validation: {
    structuralClass: "C7",
    engineRule: "render distribution alongside point value; require probability_source field",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: [],
  },
  inputs: ["ev_perfect", "ev_base"],
  output: null,
  forward: (env) => (env.num("ev_perfect") - env.num("ev_base")),
  inverses: {
    "ev_perfect": (env) => (env.num("result") + env.num("ev_base")),
    "ev_base": (env) => (env.num("ev_perfect") - env.num("result")),
  },
};
