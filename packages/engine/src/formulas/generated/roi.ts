/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "roi",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["cost"],
  },
  inputs: ["gain", "cost"],
  output: null,
  forward: (env) => ((env.num("gain") - env.num("cost")) / env.num("cost")),
  inverses: {
    "gain": (env) => (env.num("cost") * (1 + env.num("result"))),
    "cost": (env) => (env.num("gain") / (1 + env.num("result"))),
  },
};
