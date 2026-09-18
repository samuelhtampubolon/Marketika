/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "arppu",
  structuralClass: "C2",
  inputs: ["revenue", "paying_users"],
  output: null,
  forward: (env) => (env.num("revenue") / env.num("paying_users")),
  inverses: {
    "revenue": (env) => (env.num("result") * env.num("paying_users")),
    "paying_users": (env) => (env.num("revenue") / env.num("result")),
  },
};
