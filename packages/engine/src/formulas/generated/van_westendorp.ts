/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";
import { vwFromFourPrices } from "../../helpers/vanWestendorp";

export const relation: Relation = {
  formulaId: "van_westendorp",
  structuralClass: "C10",
  validation: {
    structuralClass: "C10",
    engineRule: "run sign-change scan before solving; report all roots found, never silently pick one",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: [],
  },
  inputs: ["too_cheap", "cheap", "expensive", "too_expensive"],
  output: null,
  forward: (env) => (vwFromFourPrices(env.num("too_cheap"), env.num("cheap"), env.num("expensive"), env.num("too_expensive"))),
  inverses: {
  },
};
