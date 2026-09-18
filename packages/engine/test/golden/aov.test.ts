/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "aov",
  "inputs": {
    "revenue": 185000000,
    "orders": 1480
  },
  "expected": 125000,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "orders"
  },
  "inverses": [
    {
      "solveFor": "revenue"
    },
    {
      "solveFor": "orders"
    }
  ],
  "resultVar": "aov",
  "output": "aov",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
