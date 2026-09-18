/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";
import { dot } from "../../helpers/linalg";

export const relation: Relation = {
  formulaId: "weighted_screening",
  structuralClass: "C5",
  inputs: ["w_vector", "r_vector"],
  output: null,
  forward: (env) => (dot(env.vec("w_vector"), env.vec("r_vector"))),
  inverses: {
  },
};
