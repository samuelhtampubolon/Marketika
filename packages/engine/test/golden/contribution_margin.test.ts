/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "contribution_margin",
  "inputs": {
    "price": 125000,
    "variable_cost": 74000
  },
  "expected": 51000,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "price"
    },
    {
      "solveFor": "variable_cost"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
