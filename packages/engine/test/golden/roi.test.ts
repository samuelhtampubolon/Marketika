/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "roi",
  "inputs": {
    "gain": 96000000,
    "cost": 42000000
  },
  "expected": 1.2857142857142858,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "cost"
  },
  "inverses": [
    {
      "solveFor": "gain"
    },
    {
      "solveFor": "cost"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
