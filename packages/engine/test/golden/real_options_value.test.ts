/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "real_options_value",
  "inputs": {
    "opt_s": 640000000,
    "opt_x": 480000000,
    "opt_r": 0.055,
    "opt_t": 2,
    "opt_sigma": 0.45
  },
  "expected": 262598062.11514112,
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
