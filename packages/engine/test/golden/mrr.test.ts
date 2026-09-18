/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "mrr",
  "inputs": {
    "arpu": 185000,
    "subscribers": 940
  },
  "expected": 173900000,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "negative_count",
    "variable": "subscribers"
  },
  "inverses": [
    {
      "solveFor": "arpu"
    },
    {
      "solveFor": "subscribers"
    }
  ],
  "resultVar": "mrr",
  "output": "mrr",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
