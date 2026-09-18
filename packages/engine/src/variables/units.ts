export const UNIT_CLASSES = [
  "count",
  "currency",
  "ratio",
  "score",
  "vector",
  "percent",
  "period",
  "utils",
  "person_month",
  "matrix",
] as const;

export type UnitClass = (typeof UNIT_CLASSES)[number];

export function isUnitClass(value: string): value is UnitClass {
  return (UNIT_CLASSES as readonly string[]).includes(value);
}
