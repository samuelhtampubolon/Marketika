/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "relative_market_share",
  "inputs": {
    "company_share": 0.11,
    "largest_competitor_share": 0.29
  },
  "expected": 0.37931034482758624,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "largest_competitor_share"
  },
  "inverses": [
    {
      "solveFor": "company_share"
    },
    {
      "solveFor": "largest_competitor_share"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
