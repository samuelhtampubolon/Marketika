/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "wtp",
  "inputs": {
    "delta_u": 0.55,
    "beta_price": -0.000012
  },
  "expected": 45833.333333333336,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "delta_u"
    },
    {
      "solveFor": "beta_price"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
