/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "bounce_rate",
  structuralClass: "C1",
  inputs: ["single_page_sessions", "sessions"],
  output: null,
  forward: (env) => (env.num("single_page_sessions") / env.num("sessions")),
  inverses: {
    "single_page_sessions": (env) => (env.num("result") * env.num("sessions")),
    "sessions": (env) => (env.num("single_page_sessions") / env.num("result")),
  },
};
