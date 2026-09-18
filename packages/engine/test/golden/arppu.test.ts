/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "arppu",
  "inputs": {
    "revenue": 185000000,
    "paying_users": 7300
  },
  "expected": 25342.465753424658,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "paying_users"
  },
  "inverses": [
    {
      "solveFor": "revenue"
    },
    {
      "solveFor": "paying_users"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
