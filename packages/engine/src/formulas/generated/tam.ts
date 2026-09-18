/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "tam",
  structuralClass: "C4",
  inputs: ["population", "need_percent", "arpu"],
  output: "tam",
  forward: (env) => (env.num("population") * (env.num("need_percent") / 100) * env.num("arpu")),
  inverses: {
    "population": (env) => (env.num("tam") / ((env.num("need_percent") / 100) * env.num("arpu"))),
    "need_percent": (env) => ((env.num("tam") / (env.num("population") * env.num("arpu"))) * 100),
    "arpu": (env) => (env.num("tam") / (env.num("population") * (env.num("need_percent") / 100))),
  },
};
