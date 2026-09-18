/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";
import { npvCalc } from "../../helpers/npv";

export const relation: Relation = {
  formulaId: "npv",
  structuralClass: "C6",
  inputs: ["cash_flows", "discount_rate", "investment_0"],
  output: "npv_out",
  forward: (env) => (npvCalc(env.vec("cash_flows"), env.num("discount_rate")) - env.num("investment_0")),
  inverses: {
    "investment_0": (env) => (npvCalc(env.vec("cash_flows"), env.num("discount_rate")) - env.num("npv_out")),
  },
};
