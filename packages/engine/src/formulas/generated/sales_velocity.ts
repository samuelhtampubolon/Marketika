/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "sales_velocity",
  structuralClass: "C4",
  validation: {
    structuralClass: "C4",
    engineRule: "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["cycle_length", "deal_value", "opportunities", "result"],
  },
  inputs: ["opportunities", "deal_value", "win_rate", "cycle_length"],
  output: null,
  forward: (env) => ((env.num("opportunities") * env.num("deal_value") * env.num("win_rate")) / env.num("cycle_length")),
  inverses: {
    "opportunities": (env) => (env.num("result") * env.num("cycle_length") / (env.num("deal_value") * env.num("win_rate"))),
    "deal_value": (env) => (env.num("result") * env.num("cycle_length") / (env.num("opportunities") * env.num("win_rate"))),
    "win_rate": (env) => (env.num("result") * env.num("cycle_length") / (env.num("opportunities") * env.num("deal_value"))),
    "cycle_length": (env) => ((env.num("opportunities") * env.num("deal_value") * env.num("win_rate")) / env.num("result")),
  },
};
