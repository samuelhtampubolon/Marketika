/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "arr",
  structuralClass: "C4",
  inputs: ["mrr"],
  output: null,
  forward: (env) => (env.num("mrr") * 12),
  inverses: {
    "mrr": (env) => (env.num("result") / 12),
  },
};
