/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "tam",
  "inputs": {
    "population": 410000,
    "need_percent": 38,
    "arpu": 1800000
  },
  "expected": 280440000000,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "negative_count",
    "variable": "population"
  },
  "inverses": [
    {
      "solveFor": "population"
    },
    {
      "solveFor": "need_percent"
    },
    {
      "solveFor": "arpu"
    }
  ],
  "resultVar": "tam",
  "output": "tam",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
