/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "bass_f",
  "inputs": {
    "bass_p": 0.021,
    "bass_q": 0.38,
    "time_t": 6
  },
  "expected": 0.3457118338013339,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "bass_p"
  },
  "inverses": [],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
