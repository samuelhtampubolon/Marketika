/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "cart_abandonment_rate",
  "inputs": {
    "carts_created": 9500,
    "carts_purchased": 1900
  },
  "expected": 0.8,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "carts_created"
  },
  "inverses": [
    {
      "solveFor": "carts_purchased"
    },
    {
      "solveFor": "carts_created"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
