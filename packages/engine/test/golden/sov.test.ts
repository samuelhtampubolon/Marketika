/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "sov",
  "inputs": {
    "brand_mentions": 4800,
    "market_mentions": 52000
  },
  "expected": 0.09230769230769231,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "market_mentions"
  },
  "inverses": [
    {
      "solveFor": "brand_mentions"
    },
    {
      "solveFor": "market_mentions"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
