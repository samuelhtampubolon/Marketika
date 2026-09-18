/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "engagement_rate",
  structuralClass: "C1",
  inputs: ["engagements", "followers"],
  output: null,
  forward: (env) => (env.num("engagements") / env.num("followers")),
  inverses: {
    "engagements": (env) => (env.num("result") * env.num("followers")),
    "followers": (env) => (env.num("engagements") / env.num("result")),
  },
};
