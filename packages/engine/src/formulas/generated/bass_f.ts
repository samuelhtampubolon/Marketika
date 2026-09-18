/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "bass_f",
  structuralClass: "C9",
  inputs: ["bass_p", "bass_q", "time_t"],
  output: null,
  forward: (env) => ((1 - Math.exp(-(env.num("bass_p") + env.num("bass_q")) * env.num("time_t"))) / (1 + (env.num("bass_q") / env.num("bass_p")) * Math.exp(-(env.num("bass_p") + env.num("bass_q")) * env.num("time_t")))),
  inverses: {
  },
};
