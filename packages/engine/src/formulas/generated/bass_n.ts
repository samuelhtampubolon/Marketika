/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "bass_n",
  structuralClass: "C9",
  inputs: ["bass_p", "bass_q", "bass_m", "bass_nt"],
  output: null,
  forward: (env) => ((env.num("bass_p") + (env.num("bass_q") / env.num("bass_m")) * env.num("bass_nt")) * (env.num("bass_m") - env.num("bass_nt"))),
  inverses: {
    "bass_p": (env) => (env.num("result") / (env.num("bass_m") - env.num("bass_nt")) - (env.num("bass_q") / env.num("bass_m")) * env.num("bass_nt")),
  },
};
