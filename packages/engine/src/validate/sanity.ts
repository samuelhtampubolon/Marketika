import type { Relation, Env } from "../relation";
import { message } from "./messages";
import { labelFor } from "../variables/registry";
import { formatNumber } from "../format";
import type { LocaleCode } from "../variables/types";

export interface GuardResult {
  ok: boolean;
  reason?: string;
}

export function checkInputs(
  rel: Relation,
  env: Env,
  locale: LocaleCode = "id",
): GuardResult {
  if (rel.validation.guardZeroDenominator) {
    for (const denom of rel.validation.denominatorVars) {
      let value: number | undefined;
      try {
        value = env.num(denom);
      } catch {
        continue;
      }
      if (value === 0) {
        return { ok: false, reason: message("zero_denominator", locale, { denom: labelFor(denom, locale) }) };
      }
    }
  }
  if (rel.validation.rejectNegativeCounts) {
    for (const input of rel.inputs) {
      let value: number;
      try {
        value = env.num(input);
      } catch {
        continue;
      }
      if (value < 0) {
        return {
          ok: false,
          reason: message("negative_count", locale, { var: labelFor(input, locale) }),
        };
      }
    }
  }
  return { ok: true };
}

export function checkOutputRange(
  rel: Relation,
  result: number,
  locale: LocaleCode = "id",
): GuardResult {
  if (rel.structuralClass === "C1") {
    if (!(result >= 0 && result <= 1)) {
      return {
        ok: false,
        reason: message("c1_range", locale, {
          value: formatNumber(result, { locale, decimals: 4 }),
        }),
      };
    }
  }
  if (!Number.isFinite(result)) {
    return { ok: false, reason: message("non_finite", locale) };
  }
  return { ok: true };
}
