/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "grp",
  "inputs": {
    "reach_pct": 62,
    "frequency": 4.8
  },
  "expected": 297.59999999999997,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "reach_pct"
    },
    {
      "solveFor": "frequency"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
