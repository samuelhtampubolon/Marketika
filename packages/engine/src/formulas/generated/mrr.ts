/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "mrr",
  structuralClass: "C4",
  validation: {
    structuralClass: "C4",
    engineRule: "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["subscribers", "arpu"],
  },
  inputs: ["arpu", "subscribers"],
  output: "mrr",
  forward: (env) => (env.num("arpu") * env.num("subscribers")),
  inverses: {
    "arpu": (env) => (env.num("mrr") / env.num("subscribers")),
    "subscribers": (env) => (env.num("mrr") / env.num("arpu")),
  },
};
