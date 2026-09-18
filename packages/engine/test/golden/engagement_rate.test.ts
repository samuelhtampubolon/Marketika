/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "engagement_rate",
  "inputs": {
    "engagements": 2400,
    "followers": 85000
  },
  "expected": 0.02823529411764706,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "followers"
  },
  "inverses": [
    {
      "solveFor": "engagements"
    },
    {
      "solveFor": "followers"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
