/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "irr",
  "inputs": {
    "cash_flows": [
      120000000,
      180000000,
      240000000,
      260000000,
      280000000
    ],
    "investment_0": 480000000
  },
  "expected": {
    "roots": [
      0.29484542560959043
    ],
    "unique": true,
    "converged": true
  },
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
