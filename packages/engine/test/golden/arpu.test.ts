/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "arpu",
  "inputs": {
    "revenue": 185000000,
    "users": 52000
  },
  "expected": 3557.6923076923076,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "users"
  },
  "inverses": [
    {
      "solveFor": "revenue"
    },
    {
      "solveFor": "users"
    }
  ],
  "resultVar": "arpu",
  "output": "arpu",
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
