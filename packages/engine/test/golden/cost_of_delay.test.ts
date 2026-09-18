/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "cost_of_delay",
  "inputs": {
    "delta_value": 240000000,
    "delta_time": 3
  },
  "expected": 80000000,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "delta_time"
  },
  "inverses": [
    {
      "solveFor": "delta_value"
    },
    {
      "solveFor": "delta_time"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
