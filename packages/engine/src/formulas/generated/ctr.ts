/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "ctr",
  structuralClass: "C1",
  inputs: ["clicks", "impressions"],
  output: "ctr_out",
  forward: (env) => (env.num("clicks") / env.num("impressions")),
  inverses: {
    "clicks": (env) => (env.num("ctr_out") * env.num("impressions")),
    "impressions": (env) => (env.num("clicks") / env.num("ctr_out")),
  },
};
