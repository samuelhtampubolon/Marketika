/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "purchase_frequency",
  "inputs": {
    "orders": 1480,
    "unique_customers": 620
  },
  "expected": 2.3870967741935485,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "unique_customers"
  },
  "inverses": [
    {
      "solveFor": "orders"
    },
    {
      "solveFor": "unique_customers"
    }
  ],
  "resultVar": "purchase_frequency",
  "output": "purchase_frequency",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
