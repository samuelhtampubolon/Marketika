/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "qfd_technical_importance",
  "inputs": {
    "customer_importance": [
      9,
      7,
      5,
      8
    ],
    "relationship_matrix": [
      [
        9,
        3,
        0,
        1
      ],
      [
        3,
        9,
        1,
        0
      ],
      [
        0,
        3,
        9,
        3
      ],
      [
        9,
        0,
        3,
        9
      ]
    ]
  },
  "expected": [
    110,
    95,
    90,
    168
  ],
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
