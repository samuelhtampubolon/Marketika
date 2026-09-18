/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "fmea_rpn",
  structuralClass: "C4",
  inputs: ["severity", "occurrence", "detection"],
  output: null,
  forward: (env) => (env.num("severity") * env.num("occurrence") * env.num("detection")),
  inverses: {
    "severity": (env) => (env.num("result") / (env.num("occurrence") * env.num("detection"))),
    "occurrence": (env) => (env.num("result") / (env.num("severity") * env.num("detection"))),
    "detection": (env) => (env.num("result") / (env.num("severity") * env.num("occurrence"))),
  },
};
