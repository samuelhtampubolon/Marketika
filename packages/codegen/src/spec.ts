import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

export const repoRoot = resolve(here, "..", "..", "..");
export const specPath = join(repoRoot, "spec", "metrika.spec.json");

export type SpecDocument = Record<string, unknown>;

export function readSpec(): SpecDocument {
  return JSON.parse(readFileSync(specPath, "utf8")) as SpecDocument;
}
