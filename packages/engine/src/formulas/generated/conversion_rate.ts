/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "conversion_rate",
  structuralClass: "C1",
  inputs: ["conversions", "visitors"],
  output: "conversion_rate",
  forward: (env) => (env.num("conversions") / env.num("visitors")),
  inverses: {
    "conversions": (env) => (env.num("conversion_rate") * env.num("visitors")),
    "visitors": (env) => (env.num("conversions") / env.num("conversion_rate")),
  },
};
