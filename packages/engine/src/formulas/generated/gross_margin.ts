/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "gross_margin",
  structuralClass: "C1",
  validation: {
    structuralClass: "C1",
    engineRule: "assert 0 <= result <= 1 else raise DomainViolation",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["revenue"],
  },
  inputs: ["revenue", "cogs"],
  output: "gross_margin",
  forward: (env) => ((env.num("revenue") - env.num("cogs")) / env.num("revenue")),
  inverses: {
    "cogs": (env) => (env.num("revenue") * (1 - env.num("gross_margin"))),
    "revenue": (env) => (env.num("cogs") / (1 - env.num("gross_margin"))),
  },
};
