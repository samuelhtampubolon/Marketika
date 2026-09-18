import { DomainViolation } from "./domain";
import { message } from "./messages";
import { labelFor } from "../variables/registry";
import type { LocaleCode } from "../variables/types";

export type Period = "daily" | "weekly" | "monthly" | "quarterly" | "annual";

export const PERIODS: readonly Period[] = ["daily", "weekly", "monthly", "quarterly", "annual"];

export function periodsPerYear(p: Period): number {
  switch (p) {
    case "daily":
      return 365;
    case "weekly":
      return 52;
    case "monthly":
      return 12;
    case "quarterly":
      return 4;
    case "annual":
      return 1;
  }
}

export function assertSamePeriod(
  a: { id: string; period: Period },
  b: { id: string; period: Period },
  locale: LocaleCode = "id",
): void {
  if (a.period !== b.period) {
    throw new DomainViolation(
      "period_mismatch",
      message("period_mismatch", locale, {
        a: labelFor(a.id, locale),
        pa: a.period,
        b: labelFor(b.id, locale),
        pb: b.period,
      }),
    );
  }
}

export function compoundMonthlyToAnnual(monthlyRate: number): number {
  if (!(monthlyRate >= 0 && monthlyRate <= 1)) {
    throw new DomainViolation("rate_range", "compoundMonthlyToAnnual: monthlyRate must be in [0, 1]");
  }
  return 1 - Math.pow(1 - monthlyRate, 12);
}

export function refuseNaiveAnnualization(): never {
  throw new DomainViolation("naive_annualization", message("naive_annualization", "id"));
}
