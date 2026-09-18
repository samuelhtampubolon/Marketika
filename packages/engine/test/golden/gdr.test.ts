/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "gdr",
  "inputs": {
    "start_mrr": 173900000,
    "contraction_mrr": 2600000,
    "churned_mrr": 4200000
  },
  "expected": 0.960897067280046,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "start_mrr"
  },
  "inverses": [
    {
      "solveFor": "contraction_mrr"
    },
    {
      "solveFor": "churned_mrr"
    },
    {
      "solveFor": "start_mrr"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
