/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "npv",
  "inputs": {
    "cash_flows": [
      120000000,
      180000000,
      240000000,
      260000000,
      280000000
    ],
    "discount_rate": 0.12,
    "investment_0": 480000000
  },
  "expected": 265579234.5637232,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "investment_0"
    }
  ],
  "resultVar": "npv_out",
  "output": "npv_out",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
