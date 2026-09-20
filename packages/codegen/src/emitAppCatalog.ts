import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { repoRoot, type SpecDocument } from "./spec";

interface SpecDocumentShape {
  canonical_variables: unknown[];
  formula_registry: unknown[];
  curriculum: unknown[];
}

export function emitAppCatalog(spec: SpecDocument): void {
  const source = spec as unknown as SpecDocumentShape;
  const outDir = join(repoRoot, "packages", "app", "src", "generated");
  mkdirSync(outDir, { recursive: true });
  const body = [
    "/* GENERATED FILE - do not edit. */",
    "/* Emitted by @metrika/codegen from spec/metrika.spec.json. */",
    "",
    `export const catalog = ${JSON.stringify({
      variables: source.canonical_variables,
      formulas: source.formula_registry,
      curriculum: source.curriculum,
    }, null, 2)} as const;`,
    "",
    "export type AppCatalog = typeof catalog;",
    "",
  ].join("\n");
  writeFileSync(join(outDir, "catalog.ts"), body, "utf8");
}
