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
export { DomainViolation } from "./validate/domain";
export { seriesSum } from "./helpers/series";
export { npvCalc } from "./helpers/npv";
export { dot, matvec } from "./helpers/linalg";
export { phi } from "./helpers/normal";
export { blackScholesCall } from "./helpers/blackScholes";
export { irrSolve, type IrrResult } from "./helpers/irr";
export {
  vwIntersection,
  type PriceResponse,
  type VwCurve,
  type VwResult,
} from "./helpers/vanWestendorp";
export * from "./format";
