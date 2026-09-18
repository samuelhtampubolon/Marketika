/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "fmea_rpn",
  "inputs": {
    "severity": 8,
    "occurrence": 4,
    "detection": 6
  },
  "expected": 192,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "severity"
    },
    {
      "solveFor": "occurrence"
    },
    {
      "solveFor": "detection"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
