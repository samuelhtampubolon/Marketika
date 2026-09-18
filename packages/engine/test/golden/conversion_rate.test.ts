/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "conversion_rate",
  "inputs": {
    "conversions": 420,
    "visitors": 14000
  },
  "expected": 0.03,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "visitors"
  },
  "inverses": [
    {
      "solveFor": "conversions"
    },
    {
      "solveFor": "visitors"
    }
  ],
  "resultVar": "conversion_rate",
  "output": "conversion_rate",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
