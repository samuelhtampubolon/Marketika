/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "cpm",
  "inputs": {
    "spend": 24000000,
    "impressions": 3200000
  },
  "expected": 7500,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "impressions"
  },
  "inverses": [
    {
      "solveFor": "spend"
    },
    {
      "solveFor": "impressions"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
