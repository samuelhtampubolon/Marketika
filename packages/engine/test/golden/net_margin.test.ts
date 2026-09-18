/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "net_margin",
  "inputs": {
    "net_profit": 16650000,
    "revenue": 185000000
  },
  "expected": 0.09,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "revenue"
  },
  "inverses": [
    {
      "solveFor": "net_profit"
    },
    {
      "solveFor": "revenue"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
