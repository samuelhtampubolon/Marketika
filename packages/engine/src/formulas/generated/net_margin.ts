/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "net_margin",
  structuralClass: "C1",
  inputs: ["net_profit", "revenue"],
  output: null,
  forward: (env) => (env.num("net_profit") / env.num("revenue")),
  inverses: {
    "net_profit": (env) => (env.num("result") * env.num("revenue")),
    "revenue": (env) => (env.num("net_profit") / env.num("result")),
  },
};
