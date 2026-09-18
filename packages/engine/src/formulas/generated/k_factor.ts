/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { Relation } from "../../relation";

export const relation: Relation = {
  formulaId: "k_factor",
  structuralClass: "C4",
  validation: {
    structuralClass: "C4",
    engineRule: "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
    guardZeroDenominator: true,
    rejectNegativeCounts: true,
    warnOnExtreme: true,
    denominatorVars: ["invite_conversion", "invites_per_user"],
  },
  inputs: ["invites_per_user", "invite_conversion"],
  output: null,
  forward: (env) => (env.num("invites_per_user") * env.num("invite_conversion")),
  inverses: {
    "invites_per_user": (env) => (env.num("result") / env.num("invite_conversion")),
    "invite_conversion": (env) => (env.num("result") / env.num("invites_per_user")),
  },
};
