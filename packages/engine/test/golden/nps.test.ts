/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "nps",
  "inputs": {
    "promoters": 186,
    "detractors": 74,
    "total_respondents": 420
  },
  "expected": 26.666666666666668,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "total_respondents"
  },
  "inverses": [
    {
      "solveFor": "promoters"
    },
    {
      "solveFor": "detractors"
    },
    {
      "solveFor": "total_respondents"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
