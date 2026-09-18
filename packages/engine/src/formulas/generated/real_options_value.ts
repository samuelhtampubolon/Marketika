/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";
import { blackScholesCall } from "../../helpers/blackScholes";

export const relation: Relation = {
  formulaId: "real_options_value",
  structuralClass: "C7",
  validation: {
    structuralClass: "C7",
    engineRule: "render distribution alongside point value; require probability_source field",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: [],
  },
  inputs: ["opt_s", "opt_x", "opt_r", "opt_t", "opt_sigma"],
  output: null,
  forward: (env) => (blackScholesCall(env.num("opt_s"), env.num("opt_x"), env.num("opt_r"), env.num("opt_t"), env.num("opt_sigma"))),
  inverses: {
  },
};
