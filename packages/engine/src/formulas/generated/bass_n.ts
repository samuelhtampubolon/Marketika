/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "bass_n",
  structuralClass: "C9",
  validation: {
    structuralClass: "C9",
    engineRule: "require calibration_source; always render at least three parameter scenarios",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["bass_m"],
  },
  inputs: ["bass_p", "bass_q", "bass_m", "bass_nt"],
  output: null,
  forward: (env) => ((env.num("bass_p") + (env.num("bass_q") / env.num("bass_m")) * env.num("bass_nt")) * (env.num("bass_m") - env.num("bass_nt"))),
  inverses: {
    "bass_p": (env) => (env.num("result") / (env.num("bass_m") - env.num("bass_nt")) - (env.num("bass_q") / env.num("bass_m")) * env.num("bass_nt")),
  },
};
