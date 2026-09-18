/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "clv_simple",
  "inputs": {
    "arpu": 185000,
    "gross_margin": 0.6,
    "churn_rate": 0.04
  },
  "expected": 2775000,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "churn_rate"
  },
  "inverses": [
    {
      "solveFor": "arpu"
    },
    {
      "solveFor": "gross_margin"
    },
    {
      "solveFor": "churn_rate"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
