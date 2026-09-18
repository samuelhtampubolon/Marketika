/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "kano_better",
  structuralClass: "C3",
  validation: {
    structuralClass: "C3",
    engineRule: "null is not zero; distinguish None from 0.0 in the store and in the renderer",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["kano_a"],
  },
  inputs: ["kano_a", "kano_o", "kano_m", "kano_i"],
  output: null,
  forward: (env) => ((env.num("kano_a") + env.num("kano_o")) / (env.num("kano_a") + env.num("kano_o") + env.num("kano_m") + env.num("kano_i"))),
  inverses: {
  },
};
