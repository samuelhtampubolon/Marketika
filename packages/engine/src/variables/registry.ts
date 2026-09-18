import type { VariableDefinition } from "./types";
import { variableRegistry } from "./generated/registry";

const asRecord: Record<string, VariableDefinition> = variableRegistry;

export function getVariable(id: string): VariableDefinition | undefined {
  return asRecord[id];
}

export function requireVariable(id: string): VariableDefinition {
  const v = asRecord[id];
  if (v === undefined) {
    throw new Error(`requireVariable: unknown variable id '${id}'`);
  }
  return v;
}

export function allVariables(): VariableDefinition[] {
  return Object.values(asRecord);
}

export function labelFor(variableId: string, locale: "id" | "en"): string {
  return requireVariable(variableId).label[locale];
}
