/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";
import { matvec } from "../../helpers/linalg";

export const relation: Relation = {
  formulaId: "qfd_technical_importance",
  structuralClass: "C5",
  inputs: ["customer_importance", "relationship_matrix"],
  output: null,
  forward: (env) => (matvec(env.mat("relationship_matrix"), env.vec("customer_importance"))),
  inverses: {
  },
};
