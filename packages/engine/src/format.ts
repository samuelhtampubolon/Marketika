import type { LocaleCode } from "./variables/types";
import type { UnitClass } from "./variables/units";

const THOUSAND: Record<LocaleCode, string> = { id: ".", en: "," };
const DECIMAL: Record<LocaleCode, string> = { id: ",", en: "." };
const CURRENCY_PREFIX: Record<LocaleCode, string> = { id: "Rp ", en: "Rp " };

export interface FormatOptions {
  locale: LocaleCode;
  decimals?: number;
  thousandSeparator?: boolean;
}

export function formatNumber(value: number, options: FormatOptions): string {
  const { locale, decimals = 2, thousandSeparator = true } = options;
  const fixed = Math.abs(value).toFixed(decimals);
  const [intPart, fracPart] = fixed.split(".");
  const integer = intPart ?? "0";
  let grouped = "";
  for (let i = 0; i < integer.length; i++) {
    if (thousandSeparator && i > 0 && (integer.length - i) % 3 === 0) {
      grouped += THOUSAND[locale];
    }
    grouped += integer[i];
  }
  const sign = value < 0 ? "-" : "";
  const frac = fracPart ? DECIMAL[locale] + fracPart : "";
  return sign + grouped + frac;
}

export function formatCurrency(value: number, locale: LocaleCode): string {
  return CURRENCY_PREFIX[locale] + formatNumber(value, { locale, decimals: 2 });
}

function pluralPeriod(n: number, locale: LocaleCode): string {
  const rounded = Math.round(n);
  if (locale === "id") return `${formatNumber(rounded, { locale, decimals: 0 })} periode`;
  const word = rounded === 1 ? "period" : "periods";
  return `${formatNumber(rounded, { locale, decimals: 0 })} ${word}`;
}

export function formatByUnitClass(
  value: number | null,
  unitClass: UnitClass,
  locale: LocaleCode,
): string {
  if (value === null || Number.isNaN(value)) return "N/A";
  switch (unitClass) {
    case "count":
      return formatNumber(value, { locale, decimals: 0 });
    case "currency":
      return formatCurrency(value, locale);
    case "percent":
      return formatNumber(value, { locale, decimals: 2 }) + "%";
    case "ratio":
      return formatNumber(value, { locale, decimals: 4 });
    case "score":
      return formatNumber(value, { locale, decimals: 2 });
    case "utils":
      return formatNumber(value, { locale, decimals: 4 });
    case "person_month":
      return formatNumber(value, { locale, decimals: 2 }) + " PM";
    case "period":
      return pluralPeriod(value, locale);
    case "vector":
    case "matrix":
      throw new Error(`formatByUnitClass: ${unitClass} values are rendered by their editor widget`);
  }
}

export function formatVector(values: readonly number[], locale: LocaleCode, decimals = 4): string {
  return values.map((v) => formatNumber(v, { locale, decimals })).join(", ");
}
