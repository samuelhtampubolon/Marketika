/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "ndr",
  structuralClass: "C3",
  validation: {
    structuralClass: "C3",
    engineRule: "null is not zero; distinguish None from 0.0 in the store and in the renderer",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["start_mrr"],
  },
  inputs: ["start_mrr", "expansion_mrr", "contraction_mrr", "churned_mrr"],
  output: null,
  forward: (env) => ((env.num("start_mrr") + env.num("expansion_mrr") - env.num("contraction_mrr") - env.num("churned_mrr")) / env.num("start_mrr")),
  inverses: {
    "expansion_mrr": (env) => (env.num("start_mrr") * env.num("result") - env.num("start_mrr") + env.num("contraction_mrr") + env.num("churned_mrr")),
    "contraction_mrr": (env) => (env.num("start_mrr") + env.num("expansion_mrr") - env.num("churned_mrr") - env.num("start_mrr") * env.num("result")),
    "churned_mrr": (env) => (env.num("start_mrr") + env.num("expansion_mrr") - env.num("contraction_mrr") - env.num("start_mrr") * env.num("result")),
  },
};
