import { DomainViolation } from "../validate/domain";

export function seriesSum(retention: number, discount: number, horizon: number): number {
  if (!(horizon >= 1)) {
    throw new DomainViolation("horizon", "seriesSum: horizon must be >= 1");
  }
  if (!(discount > -1)) {
    throw new DomainViolation("discount", "seriesSum: discount must be > -1");
  }
  if (!(retention >= 0 && retention <= 1)) {
    throw new DomainViolation("retention", "seriesSum: retention must be in [0, 1]");
  }
  let sum = 0;
  for (let t = 1; t <= horizon; t++) {
    sum += Math.pow(retention, t) / Math.pow(1 + discount, t);
  }
  return sum;
}
