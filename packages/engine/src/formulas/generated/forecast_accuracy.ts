/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "forecast_accuracy",
  structuralClass: "C3",
  inputs: ["forecast", "actual"],
  output: null,
  forward: (env) => (1 - Math.abs(env.num("forecast") - env.num("actual")) / Math.abs(env.num("actual"))),
  inverses: {
    "forecast": (env) => (env.num("actual") * (2 - env.num("result"))),
    "actual": (env) => (env.num("forecast") / (2 - env.num("result"))),
  },
};
