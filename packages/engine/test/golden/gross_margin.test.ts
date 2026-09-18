/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "gross_margin",
  "inputs": {
    "revenue": 185000000,
    "cogs": 74000000
  },
  "expected": 0.6,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "revenue"
  },
  "inverses": [
    {
      "solveFor": "cogs"
    },
    {
      "solveFor": "revenue"
    }
  ],
  "resultVar": "gross_margin",
  "output": "gross_margin",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
