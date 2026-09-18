export const ENGINE_VERSION = "0.0.0";

export { UNIT_CLASSES, isUnitClass, type UnitClass } from "./variables/units";
export type {
  VariableDefinition,
  VariableConstraints,
  VariableStorage,
  VariableUi,
  LocaleCode,
  ValueKind,
} from "./variables/types";
export { variableRegistry, variableIds } from "./variables/generated/registry";
export { getVariable, requireVariable, allVariables, labelFor } from "./variables/registry";
export * from "./format";
