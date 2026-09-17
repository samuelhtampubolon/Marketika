import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { emitFormulas } from "./emitFormulas";
import { emitLocale } from "./emitLocale";
import { emitCurriculum } from "./emitCurriculum";

const here = dirname(fileURLToPath(import.meta.url));
export const repoRoot = resolve(here, "..", "..", "..");
export const specPath = join(repoRoot, "spec", "metrika.spec.json");

export function readSpec(): Record<string, unknown> {
  return JSON.parse(readFileSync(specPath, "utf8")) as Record<string, unknown>;
}

export function main(): void {
  const spec = readSpec();
  emitFormulas(spec);
  emitLocale(spec);
  emitCurriculum(spec);
  console.log("codegen: complete");
}

main();
