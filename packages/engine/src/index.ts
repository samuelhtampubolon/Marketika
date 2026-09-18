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
export { relations, relationsById } from "./formulas/index";
export { type Relation, type Env, type CalcResult } from "./relation";
export { DomainViolation } from "./validate/domain";
export { checkInputs, checkOutputRange, type GuardResult } from "./validate/sanity";
export { message, VALIDATION_MESSAGES, type MessageKey } from "./validate/messages";
export {
  PERIODS,
  periodsPerYear,
  assertSamePeriod,
  compoundMonthlyToAnnual,
  refuseNaiveAnnualization,
  type Period,
} from "./validate/period";
export { propagate } from "./graph/propagate";
export {
  makeUserValue,
  type Value,
  type Origin,
  type Confidence,
  type DerivationStep,
  type BlockedStep,
  type Conflict,
  type PropagationOptions,
  type PropagationResult,
} from "./graph/types";
export { buildGraph, type GraphIndex } from "./graph/build";
export {
  underdetermined,
  describeUnderdetermined,
  derivationProse,
  type Frontier,
  type UnderdeterminedReport,
} from "./graph/explain";
export { seriesSum } from "./helpers/series";
export { npvCalc } from "./helpers/npv";
export { dot, matvec } from "./helpers/linalg";
export { phi } from "./helpers/normal";
export { blackScholesCall } from "./helpers/blackScholes";
export { irrSolve, type IrrResult } from "./helpers/irr";
export {
  vwIntersection,
  vwFromFourPrices,
  type PriceResponse,
  type VwCurve,
  type VwResult,
} from "./helpers/vanWestendorp";
export * from "./format";
