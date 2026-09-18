/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "som",
  structuralClass: "C4",
  inputs: ["sam", "capture_percent"],
  output: null,
  forward: (env) => (env.num("sam") * (env.num("capture_percent") / 100)),
  inverses: {
    "sam": (env) => (env.num("result") / (env.num("capture_percent") / 100)),
    "capture_percent": (env) => ((env.num("result") / env.num("sam")) * 100),
  },
};
