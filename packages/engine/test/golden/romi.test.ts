/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "romi",
  "inputs": {
    "incremental_revenue": 68000000,
    "marketing_cost": 42000000
  },
  "expected": 0.6190476190476191,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "marketing_cost"
  },
  "inverses": [
    {
      "solveFor": "incremental_revenue"
    },
    {
      "solveFor": "marketing_cost"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
