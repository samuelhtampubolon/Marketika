/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "weighted_screening",
  "inputs": {
    "w_vector": [
      0.35,
      0.25,
      0.25,
      0.15
    ],
    "r_vector": [
      8,
      6,
      9,
      4
    ]
  },
  "expected": 7.1499999999999995,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
