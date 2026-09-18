/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";
import { seriesSum } from "../../helpers/series";

export const relation: Relation = {
  formulaId: "clv",
  structuralClass: "C6",
  validation: {
    structuralClass: "C6",
    engineRule: "discount_rate and horizon are mandatory output annotations, never optional",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["purchase_frequency", "aov"],
  },
  inputs: ["aov", "purchase_frequency", "gross_margin", "retention_rate", "discount_rate", "horizon_t"],
  output: "clv",
  forward: (env) => (env.num("aov") * env.num("purchase_frequency") * env.num("gross_margin") * seriesSum(env.num("retention_rate"), env.num("discount_rate"), env.num("horizon_t"))),
  inverses: {
    "aov": (env) => (env.num("clv") / (env.num("purchase_frequency") * env.num("gross_margin") * seriesSum(env.num("retention_rate"), env.num("discount_rate"), env.num("horizon_t")))),
    "gross_margin": (env) => (env.num("clv") / (env.num("aov") * env.num("purchase_frequency") * seriesSum(env.num("retention_rate"), env.num("discount_rate"), env.num("horizon_t")))),
    "purchase_frequency": (env) => (env.num("clv") / (env.num("aov") * env.num("gross_margin") * seriesSum(env.num("retention_rate"), env.num("discount_rate"), env.num("horizon_t")))),
  },
};
