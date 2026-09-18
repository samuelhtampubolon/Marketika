/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "rfm_score",
  "inputs": {
    "rfm_r": 4,
    "rfm_f": 3,
    "rfm_m": 5,
    "rfm_wr": 0.4,
    "rfm_wf": 0.3,
    "rfm_wm": 0.3
  },
  "expected": 4,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [
    {
      "solveFor": "rfm_r"
    },
    {
      "solveFor": "rfm_f"
    },
    {
      "solveFor": "rfm_m"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
