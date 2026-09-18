/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "opportunity_score",
  "inputs": {
    "importance": 8.6,
    "satisfaction": 4.2
  },
  "expected": 13,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "satisfaction"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
