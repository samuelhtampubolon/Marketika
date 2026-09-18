/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "price_elasticity",
  structuralClass: "C8",
  validation: {
    structuralClass: "C8",
    engineRule: "store observed range; grey out extrapolated region in the chart",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: [],
  },
  inputs: ["q1", "q2", "p1", "p2"],
  output: null,
  forward: (env) => (((env.num("q2") - env.num("q1")) / ((env.num("q1") + env.num("q2")) / 2)) / ((env.num("p2") - env.num("p1")) / ((env.num("p1") + env.num("p2")) / 2))),
  inverses: {
    "q2": (env) => (env.num("q1") * (1 + env.num("result") * ((env.num("p2") - env.num("p1")) / ((env.num("p1") + env.num("p2")) / 2))) / (1 - 0.5 * env.num("result") * ((env.num("p2") - env.num("p1")) / ((env.num("p1") + env.num("p2")) / 2)))),
  },
};
