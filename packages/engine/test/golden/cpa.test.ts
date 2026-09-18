/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "cpa",
  "inputs": {
    "spend": 24000000,
    "acquisitions": 312
  },
  "expected": 76923.07692307692,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "acquisitions"
  },
  "inverses": [
    {
      "solveFor": "spend"
    },
    {
      "solveFor": "acquisitions"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
