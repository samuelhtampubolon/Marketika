/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "conjoint_utility",
  "inputs": {
    "beta_vector": [
      0.42,
      -0.31,
      0.18,
      0.55
    ],
    "x_vector": [
      1,
      1,
      0,
      1
    ]
  },
  "expected": 0.66,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
