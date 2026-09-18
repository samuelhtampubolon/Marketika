/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "roas",
  "inputs": {
    "ad_revenue": 96000000,
    "ad_cost": 24000000
  },
  "expected": 4,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "ad_cost"
  },
  "inverses": [
    {
      "solveFor": "ad_revenue"
    },
    {
      "solveFor": "ad_cost"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
