/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "sos",
  "inputs": {
    "brand_searches": 27000,
    "category_searches": 310000
  },
  "expected": 0.08709677419354839,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "category_searches"
  },
  "inverses": [
    {
      "solveFor": "brand_searches"
    },
    {
      "solveFor": "category_searches"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
