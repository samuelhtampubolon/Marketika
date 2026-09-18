/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "kano_better",
  "inputs": {
    "kano_a": 148,
    "kano_o": 96,
    "kano_m": 112,
    "kano_i": 64
  },
  "expected": 0.580952380952381,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "kano_a"
  },
  "inverses": [],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
