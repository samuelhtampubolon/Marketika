/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "ctr",
  "inputs": {
    "clicks": 1250,
    "impressions": 100000
  },
  "expected": 0.0125,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "impressions"
  },
  "inverses": [
    {
      "solveFor": "clicks"
    },
    {
      "solveFor": "impressions"
    }
  ],
  "resultVar": "ctr_out",
  "output": "ctr_out",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
