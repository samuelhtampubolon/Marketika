/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "wsjf_score",
  "inputs": {
    "user_value": 8,
    "time_value": 5,
    "risk_reduction": 3,
    "job_size": 5
  },
  "expected": 3.2,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "job_size"
  },
  "inverses": [
    {
      "solveFor": "job_size"
    },
    {
      "solveFor": "user_value"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
