/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "break_even_quantity",
  "inputs": {
    "fixed_cost": 480000000,
    "price": 125000,
    "variable_cost": 74000
  },
  "expected": 9411.764705882353,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "price"
  },
  "inverses": [
    {
      "solveFor": "fixed_cost"
    },
    {
      "solveFor": "price"
    },
    {
      "solveFor": "variable_cost"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
