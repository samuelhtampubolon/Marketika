/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "bass_n",
  "inputs": {
    "bass_p": 0.021,
    "bass_q": 0.38,
    "bass_m": 180000,
    "bass_nt": 42000
  },
  "expected": 15134,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "bass_m"
  },
  "inverses": [
    {
      "solveFor": "bass_p"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
