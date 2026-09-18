/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";
import { dot } from "../../helpers/linalg";

export const relation: Relation = {
  formulaId: "conjoint_utility",
  structuralClass: "C5",
  inputs: ["beta_vector", "x_vector"],
  output: null,
  forward: (env) => (dot(env.vec("beta_vector"), env.vec("x_vector"))),
  inverses: {
  },
};
