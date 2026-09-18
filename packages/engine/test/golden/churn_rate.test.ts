/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "churn_rate",
  "inputs": {
    "lost_customers": 38,
    "start_customers": 940
  },
  "expected": 0.04042553191489362,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "start_customers"
  },
  "inverses": [
    {
      "solveFor": "lost_customers"
    },
    {
      "solveFor": "start_customers"
    }
  ],
  "resultVar": "churn_rate",
  "output": "churn_rate",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
