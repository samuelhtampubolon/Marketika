// Emits packages/engine/src/variables/generated/registry.ts from the spec.
// Phase P01: canonical variable registry.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { repoRoot, type SpecDocument } from "./spec";

interface SpecVariableRaw {
  id: string;
  label: { id: string; en: string };
  unit_class: string;
  value_kind: string;
  constraints: {
    min: number | null;
    max: number | null;
    decimals: number | null;
    allow_zero: boolean;
    nullable: boolean;
  };
  definition_id: string;
  storage: { precision: string; serialize_as: string };
  ui: {
    widget: string;
    step_hint: string;
    thousand_separator: boolean;
    suffix: string;
  };
}

const outPath = join(repoRoot, "packages", "engine", "src", "variables", "generated", "registry.ts");

function literal(value: unknown): string {
  return JSON.stringify(value, null, 2).replace(/\\u([\dA-Fa-f]{4})/g, (_m, hex: string) =>
    String.fromCharCode(parseInt(hex, 16)),
  );
}

export function emitRegistry(spec: SpecDocument): number {
  const variables = spec.canonical_variables as SpecVariableRaw[];
  const entries = variables.map((v) => ({
    id: v.id,
    label: { id: v.label.id, en: v.label.en },
    unitClass: v.unit_class,
    valueKind: v.value_kind,
    constraints: {
      min: v.constraints.min,
      max: v.constraints.max,
      decimals: v.constraints.decimals,
      allowZero: v.constraints.allow_zero,
      nullable: v.constraints.nullable,
    },
    definition: v.definition_id,
    storage: { precision: v.storage.precision, serializeAs: v.storage.serialize_as },
    ui: {
      widget: v.ui.widget,
      stepHint: v.ui.step_hint,
      thousandSeparator: v.ui.thousand_separator,
      suffix: v.ui.suffix,
    },
  }));

  const byId: Record<string, unknown> = {};
  for (const e of entries) {
    byId[e.id] = e;
  }

  const body = [
    "/* GENERATED FILE - do not edit. */",
    "/* Emitted by @metrika/codegen from spec/metrika.spec.json. */",
    "/* eslint-disable */",
    `import type { VariableDefinition } from "../types";`,
    "",
    `export const variableRegistry = ${literal(byId)} as const satisfies Record<`,
    "  string,",
    "  VariableDefinition",
    ">;",
    "",
    "export const variableIds: string[] = Object.keys(variableRegistry);",
    "",
  ].join("\n");

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, body, "utf8");
  return entries.length;
}
