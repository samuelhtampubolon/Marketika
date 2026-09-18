/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "sales_velocity",
  "inputs": {
    "opportunities": 84,
    "deal_value": 18000000,
    "win_rate": 0.22,
    "cycle_length": 45
  },
  "expected": 7392000,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "cycle_length"
  },
  "inverses": [
    {
      "solveFor": "opportunities"
    },
    {
      "solveFor": "deal_value"
    },
    {
      "solveFor": "win_rate"
    },
    {
      "solveFor": "cycle_length"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
