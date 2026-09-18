/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "evpi",
  "inputs": {
    "ev_perfect": 412000000,
    "ev_base": 289000000
  },
  "expected": 123000000,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "ev_perfect"
    },
    {
      "solveFor": "ev_base"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
