/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "income_elasticity",
  structuralClass: "C8",
  validation: {
    structuralClass: "C8",
    engineRule: "store observed range; grey out extrapolated region in the chart",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: [],
  },
  inputs: ["q1", "q2", "i1", "i2"],
  output: null,
  forward: (env) => (((env.num("q2") - env.num("q1")) / ((env.num("q1") + env.num("q2")) / 2)) / ((env.num("i2") - env.num("i1")) / ((env.num("i1") + env.num("i2")) / 2))),
  inverses: {
  },
};
