/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";
import { dot } from "../../helpers/linalg";

export const relation: Relation = {
  formulaId: "ev",
  structuralClass: "C7",
  inputs: ["prob_vector", "payoff_vector"],
  output: "ev_out",
  forward: (env) => (dot(env.vec("prob_vector"), env.vec("payoff_vector"))),
  inverses: {
  },
};
