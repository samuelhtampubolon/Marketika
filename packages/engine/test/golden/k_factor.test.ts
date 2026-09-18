/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "k_factor",
  "inputs": {
    "invites_per_user": 3.2,
    "invite_conversion": 0.18
  },
  "expected": 0.576,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "invites_per_user"
    },
    {
      "solveFor": "invite_conversion"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
