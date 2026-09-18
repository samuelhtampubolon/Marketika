/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "wsjf_score",
  structuralClass: "C4",
  validation: {
    structuralClass: "C4",
    engineRule: "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["job_size", "result"],
  },
  inputs: ["user_value", "time_value", "risk_reduction", "job_size"],
  output: null,
  forward: (env) => ((env.num("user_value") + env.num("time_value") + env.num("risk_reduction")) / env.num("job_size")),
  inverses: {
    "job_size": (env) => ((env.num("user_value") + env.num("time_value") + env.num("risk_reduction")) / env.num("result")),
    "user_value": (env) => (env.num("result") * env.num("job_size") - env.num("time_value") - env.num("risk_reduction")),
  },
};
