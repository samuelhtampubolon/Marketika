/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "cpa",
  structuralClass: "C2",
  inputs: ["spend", "acquisitions"],
  output: null,
  forward: (env) => (env.num("spend") / env.num("acquisitions")),
  inverses: {
    "spend": (env) => (env.num("result") * env.num("acquisitions")),
    "acquisitions": (env) => (env.num("spend") / env.num("result")),
  },
};
