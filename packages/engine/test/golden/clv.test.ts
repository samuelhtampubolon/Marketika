/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "clv",
  "inputs": {
    "aov": 125000,
    "purchase_frequency": 2.4,
    "gross_margin": 0.6,
    "retention_rate": 0.88,
    "discount_rate": 0.1,
    "horizon_t": 5
  },
  "expected": 484070.39999999997,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "aov"
    },
    {
      "solveFor": "gross_margin"
    },
    {
      "solveFor": "purchase_frequency"
    }
  ],
  "resultVar": "clv",
  "output": "clv",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
