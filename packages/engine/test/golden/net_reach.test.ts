/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "net_reach",
  "inputs": {
    "gross_reach": 1840000,
    "duplication": 520000
  },
  "expected": 1320000,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "negative_count",
    "variable": "gross_reach"
  },
  "inverses": [
    {
      "solveFor": "gross_reach"
    },
    {
      "solveFor": "duplication"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
