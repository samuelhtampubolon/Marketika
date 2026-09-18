/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";
import { irrSolve } from "../../helpers/irr";

export const relation: Relation = {
  formulaId: "irr",
  structuralClass: "C10",
  validation: {
    structuralClass: "C10",
    engineRule: "run sign-change scan before solving; report all roots found, never silently pick one",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: [],
  },
  inputs: ["cash_flows", "investment_0"],
  output: null,
  forward: (env) => (irrSolve(env.vec("cash_flows"), env.num("investment_0"))),
  inverses: {
  },
};
