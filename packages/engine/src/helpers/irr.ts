import { DomainViolation } from "../validate/domain";

export interface IrrResult {
  roots: number[];
  unique: boolean;
  converged: boolean;
}

const LOW = -0.9999;
const HIGH = 10;
const SCAN_STEP = 0.005;

function npvAt(rate: number, full: number[]): number {
  let sum = 0;
  for (let t = 0; t < full.length; t++) {
    sum += (full[t] ?? 0) / Math.pow(1 + rate, t);
  }
  return sum;
}

function brent(f: (x: number) => number, aIn: number, bIn: number): number | null {
  let a = aIn;
  let b = bIn;
  let fa = f(a);
  let fb = f(b);
  if (fa * fb > 0) return null;
  let c = a;
  let fc = fa;
  let d = a;
  let mflag = true;
  let s = b;
  const tol = 1e-10;
  let iter = 0;
  while (Math.abs(fb) > tol && Math.abs(b - a) > tol) {
    if (iter++ > 200) return null;
    if (fa !== fc && fb !== fc) {
      s =
        (a * fb * fc) / ((fa - fb) * (fa - fc)) +
        (b * fa * fc) / ((fb - fa) * (fb - fc)) +
        (c * fa * fb) / ((fc - fa) * (fc - fb));
    } else {
      s = b - (fb * (b - c)) / (fb - fc);
    }
    const lo = Math.min((3 * a + b) / 4, b);
    const hi = Math.max((3 * a + b) / 4, b);
    const inRange = s > lo && s < hi;
    if (
      !inRange ||
      (mflag && Math.abs(s - b) >= Math.abs(b - c) / 2) ||
      (!mflag && Math.abs(s - b) >= Math.abs(c - d) / 2)
    ) {
      s = (a + b) / 2;
      mflag = true;
    } else {
      mflag = false;
    }
    const fs = f(s);
    d = c;
    c = b;
    fc = fb;
    if (fa * fs < 0) {
      b = s;
      fb = fs;
    } else {
      a = s;
      fa = fs;
    }
    if (Math.abs(fa) < Math.abs(fb)) {
      [a, b] = [b, a];
      [fa, fb] = [fb, fa];
    }
  }
  return s;
}

export function irrSolve(cashFlows: number[], investment0: number): IrrResult {
  const full = [-investment0, ...cashFlows];
  let signChanges = 0;
  for (let i = 1; i < full.length; i++) {
    const prev = full[i - 1] ?? 0;
    const cur = full[i] ?? 0;
    if (prev !== 0 && cur !== 0 && Math.sign(prev) !== Math.sign(cur)) signChanges++;
  }
  if (signChanges < 1) {
    throw new DomainViolation(
      "irr_sign_change",
      "irrSolve: a sign change in the cash flow series is required",
    );
  }

  const roots: number[] = [];
  let x = LOW;
  let fx = npvAt(x, full);
  for (let i = 1; i <= Math.ceil((HIGH - LOW) / SCAN_STEP); i++) {
    const next = Math.min(LOW + i * SCAN_STEP, HIGH);
    if (next <= x) break;
    const fn = npvAt(next, full);
    if (fx === 0) roots.push(x);
    else if (fx * fn < 0) {
      const r = brent((rate) => npvAt(rate, full), x, next);
      if (r !== null) roots.push(r);
    }
    x = next;
    fx = fn;
  }
  if (fx === 0) roots.push(x);

  const deduped: number[] = [];
  for (const r of roots.sort((a, b) => a - b)) {
    if (!deduped.some((d) => Math.abs(d - r) < 1e-6)) deduped.push(r);
  }
  return {
    roots: deduped,
    unique: deduped.length === 1,
    converged: deduped.length >= 1 && signChanges >= 1,
  };
}
