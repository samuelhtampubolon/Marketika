/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cross_elasticity",
  structuralClass: "C8",
  validation: {
    structuralClass: "C8",
    engineRule: "store observed range; grey out extrapolated region in the chart",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: [],
  },
  inputs: ["qx1", "qx2", "py1", "py2"],
  output: null,
  forward: (env) => (((env.num("qx2") - env.num("qx1")) / ((env.num("qx1") + env.num("qx2")) / 2)) / ((env.num("py2") - env.num("py1")) / ((env.num("py1") + env.num("py2")) / 2))),
  inverses: {
  },
};
