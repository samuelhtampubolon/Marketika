/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "retention_rate",
  "inputs": {
    "end_customers": 1015,
    "new_customers": 113,
    "start_customers": 940
  },
  "expected": 0.9595744680851064,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "start_customers"
  },
  "inverses": [
    {
      "solveFor": "end_customers"
    },
    {
      "solveFor": "new_customers"
    },
    {
      "solveFor": "start_customers"
    }
  ],
  "resultVar": "retention_rate",
  "output": "retention_rate",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
