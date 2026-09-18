/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "ev",
  "inputs": {
    "prob_vector": [
      0.25,
      0.45,
      0.3
    ],
    "payoff_vector": [
      820000000,
      240000000,
      -180000000
    ]
  },
  "expected": 259000000,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [],
  "resultVar": "ev_out",
  "output": "ev_out",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
