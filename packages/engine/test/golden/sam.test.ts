/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "sam",
  "inputs": {
    "tam": 280440000000,
    "reachable_percent": 35
  },
  "expected": 98154000000,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "tam"
    },
    {
      "solveFor": "reachable_percent"
    }
  ],
  "resultVar": "sam",
  "output": "sam",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
