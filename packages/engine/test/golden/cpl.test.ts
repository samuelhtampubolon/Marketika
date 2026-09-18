/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "cpl",
  "inputs": {
    "spend": 24000000,
    "leads": 960
  },
  "expected": 25000,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "leads"
  },
  "inverses": [
    {
      "solveFor": "spend"
    },
    {
      "solveFor": "leads"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
