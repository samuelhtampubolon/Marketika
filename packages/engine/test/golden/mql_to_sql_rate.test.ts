/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "mql_to_sql_rate",
  "inputs": {
    "sql": 168,
    "mql": 840
  },
  "expected": 0.2,
  "toleranceDigits": 12,
  "rejection": {
    "kind": "zero_denominator",
    "variable": "mql"
  },
  "inverses": [
    {
      "solveFor": "sql"
    },
    {
      "solveFor": "mql"
    }
  ],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
