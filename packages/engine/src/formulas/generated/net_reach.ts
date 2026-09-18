/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "net_reach",
  structuralClass: "C4",
  inputs: ["gross_reach", "duplication"],
  output: null,
  forward: (env) => (env.num("gross_reach") - env.num("duplication")),
  inverses: {
    "gross_reach": (env) => (env.num("result") + env.num("duplication")),
    "duplication": (env) => (env.num("gross_reach") - env.num("result")),
  },
};
