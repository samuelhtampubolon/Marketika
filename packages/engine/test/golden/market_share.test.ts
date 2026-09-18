/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "market_share",
  "inputs": {
    "company_sales": 4200000000,
    "market_sales": 38000000000
  },
  "expected": 0.11052631578947368,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "market_sales"
  },
  "inverses": [
    {
      "solveFor": "company_sales"
    },
    {
      "solveFor": "market_sales"
    }
  ],
  "resultVar": "company_share",
  "output": "company_share",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
