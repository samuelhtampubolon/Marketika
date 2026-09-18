/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "bounce_rate",
  "inputs": {
    "single_page_sessions": 6800,
    "sessions": 11000
  },
  "expected": 0.6181818181818182,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "sessions"
  },
  "inverses": [
    {
      "solveFor": "single_page_sessions"
    },
    {
      "solveFor": "sessions"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
