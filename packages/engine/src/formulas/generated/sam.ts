/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "sam",
  structuralClass: "C4",
  inputs: ["tam", "reachable_percent"],
  output: "sam",
  forward: (env) => (env.num("tam") * (env.num("reachable_percent") / 100)),
  inverses: {
    "tam": (env) => (env.num("sam") / (env.num("reachable_percent") / 100)),
    "reachable_percent": (env) => ((env.num("sam") / env.num("tam")) * 100),
  },
};
