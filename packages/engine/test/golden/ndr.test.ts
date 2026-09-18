/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "ndr",
  "inputs": {
    "start_mrr": 173900000,
    "expansion_mrr": 14800000,
    "contraction_mrr": 2600000,
    "churned_mrr": 4200000
  },
  "expected": 1.0460034502587694,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "start_mrr"
  },
  "inverses": [
    {
      "solveFor": "expansion_mrr"
    },
    {
      "solveFor": "contraction_mrr"
    },
    {
      "solveFor": "churned_mrr"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
