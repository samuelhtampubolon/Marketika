/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "gabor_granger",
  "inputs": {
    "buyers_at_p": 168,
    "total_respondents": 420
  },
  "expected": 0.4,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "total_respondents"
  },
  "inverses": [
    {
      "solveFor": "buyers_at_p"
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
