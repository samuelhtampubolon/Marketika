/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "csat",
  "inputs": {
    "satisfied_count": 342,
    "total_responses": 420
  },
  "expected": 81.42857142857143,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "total_responses"
  },
  "inverses": [
    {
      "solveFor": "satisfied_count"
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
