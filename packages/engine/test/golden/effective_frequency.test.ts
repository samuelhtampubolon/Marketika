/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "effective_frequency",
  "inputs": {
    "reach_at_threshold": 782000,
    "total_reach": 1320000
  },
  "expected": 0.5924242424242424,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "total_reach"
  },
  "inverses": [
    {
      "solveFor": "reach_at_threshold"
    },
    {
      "solveFor": "total_reach"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
