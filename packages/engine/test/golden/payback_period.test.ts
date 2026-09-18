/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "payback_period",
  "inputs": {
    "cac": 371681,
    "arpu": 185000,
    "gross_margin": 0.6
  },
  "expected": 3.3484774774774775,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "arpu"
  },
  "inverses": [
    {
      "solveFor": "cac"
    },
    {
      "solveFor": "arpu"
    },
    {
      "solveFor": "gross_margin"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
