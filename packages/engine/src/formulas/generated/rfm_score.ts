/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "rfm_score",
  structuralClass: "C5",
  inputs: ["rfm_r", "rfm_f", "rfm_m", "rfm_wr", "rfm_wf", "rfm_wm"],
  output: null,
  forward: (env) => (env.num("rfm_wr") * env.num("rfm_r") + env.num("rfm_wf") * env.num("rfm_f") + env.num("rfm_wm") * env.num("rfm_m")),
  inverses: {
    "rfm_r": (env) => ((env.num("result") - env.num("rfm_wf") * env.num("rfm_f") - env.num("rfm_wm") * env.num("rfm_m")) / env.num("rfm_wr")),
    "rfm_f": (env) => ((env.num("result") - env.num("rfm_wr") * env.num("rfm_r") - env.num("rfm_wm") * env.num("rfm_m")) / env.num("rfm_wf")),
    "rfm_m": (env) => ((env.num("result") - env.num("rfm_wr") * env.num("rfm_r") - env.num("rfm_wf") * env.num("rfm_f")) / env.num("rfm_wm")),
  },
};
