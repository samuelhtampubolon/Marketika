/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "som",
  "inputs": {
    "sam": 98154000000,
    "capture_percent": 8
  },
  "expected": 7852320000,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "sam"
    },
    {
      "solveFor": "capture_percent"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
