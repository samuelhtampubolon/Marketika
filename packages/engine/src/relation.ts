import type { IrrResult } from "./helpers/irr";
import type { VwResult } from "./helpers/vanWestendorp";

export interface Env {
  num(name: string): number;
  vec(name: string): number[];
  mat(name: string): number[][];
}

export type CalcResult = number | number[] | IrrResult | VwResult;

export interface RelationValidation {
  structuralClass: string;
  engineRule: string;
  guardZeroDenominator: boolean;
  rejectNegativeCounts: boolean;
  warnOnExtreme: boolean;
  denominatorVars: readonly string[];
}

export interface Relation {
  formulaId: string;
  structuralClass: string;
  validation: RelationValidation;
  inputs: readonly string[];
  output: string | null;
  forward: (env: Env) => CalcResult;
  inverses: Readonly<Record<string, (env: Env) => number>>;
}
