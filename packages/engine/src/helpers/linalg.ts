import { DomainViolation } from "../validate/domain";

export function dot(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new DomainViolation("dot_length", "dot: vectors must have equal length");
  }
  if (a.length < 1) {
    throw new DomainViolation("dot_empty", "dot: vectors must have length >= 1");
  }
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    s += (a[i] ?? 0) * (b[i] ?? 0);
  }
  return s;
}

export function matvec(m: number[][], v: number[]): number[] {
  return m.map((row, i) => {
    if (row.length !== v.length) {
      throw new DomainViolation(
        "matvec_row",
        `matvec: row ${i} length ${row.length} != vector length ${v.length}`,
      );
    }
    return dot(row, v);
  });
}
