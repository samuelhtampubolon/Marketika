export type MessageKey =
  | "zero_denominator"
  | "negative_count"
  | "c1_range"
  | "non_finite"
  | "period_mismatch"
  | "naive_annualization"
  | "irr_no_sign_change";

type Bilingual = { id: string; en: string };

export const VALIDATION_MESSAGES: Record<MessageKey, Bilingual> = {
  zero_denominator: {
    id: "Penyebut '{denom}' bernilai nol. Hasil tidak terdefinisi. Masukkan nilai penyebut lebih besar dari nol.",
    en: "The denominator '{denom}' is zero. The result is undefined. Enter a denominator greater than zero.",
  },
  negative_count: {
    id: "'{var}' tidak boleh negatif karena merupakan hitungan. Periksa sumber datanya.",
    en: "'{var}' cannot be negative because it is a count. Check its data source.",
  },
  c1_range: {
    id: "Hasil {value} berada di luar rentang sah nol sampai satu. Periksa apakah pembilang bagian dari penyebut dan periode keduanya sama.",
    en: "The result {value} lies outside the valid range of zero to one. Check that the numerator is a subset of the denominator and that both cover the same period.",
  },
  non_finite: {
    id: "Perhitungan menghasilkan nilai tak hingga. Periksa apakah pembagi mendekati nol.",
    en: "The computation produced a non-finite value. Check whether a divisor approaches zero.",
  },
  period_mismatch: {
    id: "'{a}' berskala {pa} sedangkan '{b}' berskala {pb}. Konversikan salah satunya melalui tindakan eksplisit sebelum menghitung.",
    en: "'{a}' is stated in {pa} while '{b}' is stated in {pb}. Convert one of them through an explicit action before computing.",
  },
  naive_annualization: {
    id: "Tingkat periodik tidak boleh dikalikan jumlah periode. Gunakan pengompaunan: tahunan = 1 dikurangi (1 dikurangi tingkat bulanan) pangkat dua belas.",
    en: "A periodic rate must not be multiplied by the number of periods. Use compounding: annual = one minus (one minus the monthly rate) to the twelfth.",
  },
  irr_no_sign_change: {
    id: "Deretan arus kas tidak memiliki perubahan tanda, sehingga tingkat pengembalian internal tidak terdefinisi.",
    en: "The cash flow series has no sign change, so an internal rate of return is not defined.",
  },
};

export function message(
  key: MessageKey,
  locale: "id" | "en",
  params: Record<string, string> = {},
): string {
  const template = VALIDATION_MESSAGES[key][locale];
  return template.replace(/\{(\w+)\}/g, (m, name: string) => params[name] ?? m);
}
