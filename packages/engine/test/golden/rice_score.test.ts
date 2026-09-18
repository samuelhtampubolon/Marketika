/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "rice_score",
  "inputs": {
    "rice_reach": 4200,
    "rice_impact": 2,
    "rice_confidence": 80,
    "rice_effort": 3
  },
  "expected": 2240,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "rice_effort"
  },
  "inverses": [
    {
      "solveFor": "rice_effort"
    },
    {
      "solveFor": "rice_reach"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
