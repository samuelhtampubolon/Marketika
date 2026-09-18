/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "ces",
  "inputs": {
    "effort_sum": 1218,
    "total_responses": 420
  },
  "expected": 2.9,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "total_responses"
  },
  "inverses": [
    {
      "solveFor": "effort_sum"
    },
    {
      "solveFor": "total_responses"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
