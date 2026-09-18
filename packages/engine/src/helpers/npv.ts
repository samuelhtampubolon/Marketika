import { DomainViolation } from "../validate/domain";

export function npvCalc(cashFlows: number[], rate: number): number {
  if (cashFlows.length < 1) {
    throw new DomainViolation("cashFlows", "npvCalc: cashFlows must have length >= 1");
  }
  if (!(rate > -1)) {
    throw new DomainViolation("rate", "npvCalc: rate must be > -1");
  }
  let sum = 0;
  for (let t = 1; t <= cashFlows.length; t++) {
    sum += (cashFlows[t - 1] ?? 0) / Math.pow(1 + rate, t);
  }
  return sum;
}
