/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "aov",
  structuralClass: "C2",
  inputs: ["revenue", "orders"],
  output: "aov",
  forward: (env) => (env.num("revenue") / env.num("orders")),
  inverses: {
    "revenue": (env) => (env.num("aov") * env.num("orders")),
    "orders": (env) => (env.num("revenue") / env.num("aov")),
  },
};
