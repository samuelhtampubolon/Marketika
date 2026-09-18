/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "penetration_rate",
  "inputs": {
    "customers": 6200,
    "tam_population": 410000
  },
  "expected": 0.015121951219512195,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "tam_population"
  },
  "inverses": [
    {
      "solveFor": "customers"
    },
    {
      "solveFor": "tam_population"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
