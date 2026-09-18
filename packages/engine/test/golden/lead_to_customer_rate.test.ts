/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "lead_to_customer_rate",
  "inputs": {
    "customers": 92,
    "leads": 840
  },
  "expected": 0.10952380952380952,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "leads"
  },
  "inverses": [
    {
      "solveFor": "customers"
    },
    {
      "solveFor": "leads"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
