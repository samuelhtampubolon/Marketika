import {
  seriesSum,
  npvCalc,
  irrSolve,
  blackScholesCall,
  vwFromFourPrices,
  dot,
  matvec,
} from "@metrika/engine";
import type { IrrResult, VwResult } from "@metrika/engine";

const HELPERS: Record<string, unknown> = {
  series_sum: seriesSum,
  npv_calc: npvCalc,
  irr_solve: irrSolve,
  black_scholes_call: blackScholesCall,
  vw_intersection: vwFromFourPrices,
  dot,
  matvec,
};

export type EvalValue = number | number[] | number[][] | IrrResult | VwResult;

const helperNames = Object.keys(HELPERS);
const helperValues = Object.values(HELPERS);

export function evalExpression(js: string, scope: Record<string, EvalValue>): EvalValue {
  const names = Object.keys(scope);
  const values = names.map((n) => scope[n]);
  const fn = new Function(...helperNames, ...names, `"use strict"; return (${js});`);
  return fn(...helperValues, ...values) as EvalValue;
}

export function isScalar(v: EvalValue | undefined): v is number {
  return typeof v === "number" && Number.isFinite(v);
}
