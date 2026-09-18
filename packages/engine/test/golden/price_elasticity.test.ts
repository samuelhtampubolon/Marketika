/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "price_elasticity",
  "inputs": {
    "q1": 1200,
    "q2": 1450,
    "p1": 125000,
    "p2": 110000
  },
  "expected": -1.477987421383648,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "negative_count",
    "variable": "q1"
  },
  "inverses": [
    {
      "solveFor": "q2"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
