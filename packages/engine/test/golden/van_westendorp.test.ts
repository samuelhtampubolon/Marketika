/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */
/* eslint-disable */
import { runGoldenSuite, type GoldenCase } from "../goldenHarness";

const golden = {
  "id": "van_westendorp",
  "inputs": {
    "too_cheap": 45000,
    "cheap": 78000,
    "expensive": 135000,
    "too_expensive": 195000
  },
  "expected": {
    "opp": 73125,
    "ipp": 98873.23943661971,
    "pmc": 57073.170731707316,
    "pme": 159545.45454545456,
    "curves": [
      {
        "name": "too_cheap",
        "points": [
          {
            "price": 0,
            "value": 1
          },
          {
            "price": 90000,
            "value": 0
          }
        ]
      },
      {
        "name": "cheap",
        "points": [
          {
            "price": 0,
            "value": 0
          },
          {
            "price": 156000,
            "value": 1
          }
        ]
      },
      {
        "name": "expensive",
        "points": [
          {
            "price": 0,
            "value": 1
          },
          {
            "price": 270000,
            "value": 0
          }
        ]
      },
      {
        "name": "too_expensive",
        "points": [
          {
            "price": 0,
            "value": 0
          },
          {
            "price": 390000,
            "value": 1
          }
        ]
      }
    ]
  },
  "toleranceDigits": 12,
  "rejection": null,
  "inverses": [],
  "resultVar": "result",
  "output": null,
  "forwardReturnsResult": true
} satisfies GoldenCase;

runGoldenSuite(golden);
