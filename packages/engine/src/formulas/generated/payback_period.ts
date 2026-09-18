/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "payback_period",
  structuralClass: "C2",
  validation: {
    structuralClass: "C2",
    engineRule: "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["arpu", "result"],
  },
  inputs: ["cac", "arpu", "gross_margin"],
  output: null,
  forward: (env) => (env.num("cac") / (env.num("arpu") * env.num("gross_margin"))),
  inverses: {
    "cac": (env) => (env.num("result") * env.num("arpu") * env.num("gross_margin")),
    "arpu": (env) => (env.num("cac") / (env.num("result") * env.num("gross_margin"))),
    "gross_margin": (env) => (env.num("cac") / (env.num("result") * env.num("arpu"))),
  },
};
