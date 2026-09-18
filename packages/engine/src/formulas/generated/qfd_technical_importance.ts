/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";
import { matvec } from "../../helpers/linalg";

export const relation: Relation = {
  formulaId: "qfd_technical_importance",
  structuralClass: "C5",
  validation: {
    structuralClass: "C5",
    engineRule: "require weight_provenance field; run rank-stability perturbation test",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: [],
  },
  inputs: ["customer_importance", "relationship_matrix"],
  output: null,
  forward: (env) => (matvec(env.mat("relationship_matrix"), env.vec("customer_importance"))),
  inverses: {
  },
};
