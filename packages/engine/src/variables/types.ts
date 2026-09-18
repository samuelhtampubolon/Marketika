import type { UnitClass } from "./units";

export type LocaleCode = "id" | "en";

export type ValueKind = "integer" | "number" | "array";

export interface VariableConstraints {
  min: number | null;
  max: number | null;
  decimals: number | null;
  allowZero: boolean;
  nullable: boolean;
}

export interface VariableStorage {
  precision: string;
  serializeAs: string;
}

export interface VariableUi {
  widget: string;
  stepHint: string;
  thousandSeparator: boolean;
  suffix: string;
}

export interface VariableDefinition {
  id: string;
  label: Record<LocaleCode, string>;
  unitClass: UnitClass;
  valueKind: ValueKind;
  constraints: VariableConstraints;
  definition: string;
  storage: VariableStorage;
  ui: VariableUi;
}
