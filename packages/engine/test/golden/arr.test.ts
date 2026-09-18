/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "arr",
  "inputs": {
    "mrr": 173900000
  },
  "expected": 2086800000,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "mrr"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
