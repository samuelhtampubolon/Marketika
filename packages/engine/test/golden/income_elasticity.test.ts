/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "income_elasticity",
  "inputs": {
    "q1": 1200,
    "q2": 1560,
    "i1": 4800000,
    "i2": 5600000
  },
  "expected": 1.6956521739130432,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "negative_count",
    "variable": "q1"
  },
  "inverses": [],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
