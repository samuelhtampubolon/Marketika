/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "forecast_accuracy",
  "inputs": {
    "forecast": 340000000,
    "actual": 318000000
  },
  "expected": 0.9308176100628931,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "forecast"
    },
    {
      "solveFor": "actual"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
