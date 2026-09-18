/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "mql_to_sql_rate",
  structuralClass: "C1",
  inputs: ["sql", "mql"],
  output: null,
  forward: (env) => (env.num("sql") / env.num("mql")),
  inverses: {
    "sql": (env) => (env.num("result") * env.num("mql")),
    "mql": (env) => (env.num("sql") / env.num("result")),
  },
};
