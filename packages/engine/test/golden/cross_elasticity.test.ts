/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "cross_elasticity",
  "inputs": {
    "qx1": 1200,
    "qx2": 1380,
    "py1": 98000,
    "py2": 115000
  },
  "expected": 0.8741450068399452,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "negative_count",
    "variable": "qx1"
  },
  "inverses": [],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
