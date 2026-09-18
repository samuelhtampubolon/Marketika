/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "cac",
  "inputs": {
    "total_acquisition_cost": 42000000,
    "new_customers": 113
  },
  "expected": 371681.41592920356,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "new_customers"
  },
  "inverses": [
    {
      "solveFor": "total_acquisition_cost"
    },
    {
      "solveFor": "new_customers"
    }
  ],
  "resultVar": "cac",
  "output": "cac",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
