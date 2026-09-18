/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "cpc",
  "inputs": {
    "spend": 24000000,
    "clicks": 41600
  },
  "expected": 576.9230769230769,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "clicks"
  },
  "inverses": [
    {
      "solveFor": "spend"
    },
    {
      "solveFor": "clicks"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
