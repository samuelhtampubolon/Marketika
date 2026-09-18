/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "grp",
  structuralClass: "C4",
  inputs: ["reach_pct", "frequency"],
  output: null,
  forward: (env) => (env.num("reach_pct") * env.num("frequency")),
  inverses: {
    "reach_pct": (env) => (env.num("result") / env.num("frequency")),
    "frequency": (env) => (env.num("result") / env.num("reach_pct")),
  },
};
