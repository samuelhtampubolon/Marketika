/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "ltv_cac_ratio",
  "inputs": {
    "clv": 2775000,
    "cac": 371681
  },
  "expected": 7.466079783470234,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "cac"
  },
  "inverses": [
    {
      "solveFor": "clv"
    },
    {
      "solveFor": "cac"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
