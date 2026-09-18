/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "pipeline_coverage",
  "inputs": {
    "pipeline_value": 1120000000,
    "quota": 320000000
  },
  "expected": 3.5,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "quota"
  },
  "inverses": [
    {
      "solveFor": "pipeline_value"
    },
    {
      "solveFor": "quota"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
