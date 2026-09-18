/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "mrr_churn_rate",
  "inputs": {
    "churned_mrr": 4200000,
    "total_mrr": 173900000
  },
  "expected": 0.024151811385853938,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "total_mrr"
  },
  "inverses": [
    {
      "solveFor": "churned_mrr"
    },
    {
      "solveFor": "total_mrr"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
