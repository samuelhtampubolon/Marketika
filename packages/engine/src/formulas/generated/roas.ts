/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "roas",
  structuralClass: "C2",
  inputs: ["ad_revenue", "ad_cost"],
  output: null,
  forward: (env) => (env.num("ad_revenue") / env.num("ad_cost")),
  inverses: {
    "ad_revenue": (env) => (env.num("result") * env.num("ad_cost")),
    "ad_cost": (env) => (env.num("ad_revenue") / env.num("result")),
  },
};
