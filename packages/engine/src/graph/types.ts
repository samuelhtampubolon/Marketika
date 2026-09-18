export type Origin = "user" | "derived" | "assumed" | "scenario";
export type Confidence = "exact" | "estimated" | "assumed";
export type Period = "daily" | "weekly" | "monthly" | "quarterly" | "annual";

export interface Value {
  variableId: string;
  magnitude: number | number[] | number[][];
  unitClass: string;
  origin: Origin;
  derivedBy: string | null;
  derivedFrom: string[];
  confidence: Confidence;
  timestamp: string;
  depth: number;
  period?: Period;
}

export interface DerivationStep {
  formulaId: string;
  direction: "forward" | "inverse";
  target: string;
  inputsUsed: string[];
  generation: number;
}

export interface BlockedStep {
  formulaId: string;
  reason: "guard" | "non_finite";
  detail?: string;
}

export interface Conflict {
  variableId: string;
  userValue: number;
  derivedValue: number;
  derivedBy: string;
  derivedFrom: string[];
}

export interface PropagationOptions {
  maxGenerations: number;
  locale: "id" | "en";
  unitClassOf?: (variableId: string) => string;
}

export interface PropagationResult {
  values: Map<string, Value>;
  trail: DerivationStep[];
  blocked: BlockedStep[];
  conflicts: Conflict[];
  generations: number;
  reachable: number;
}

export function makeUserValue(
  variableId: string,
  magnitude: Value["magnitude"],
  unitClass: string,
  period?: Period,
): Value {
  return {
    variableId,
    magnitude,
    unitClass,
    origin: "user",
    derivedBy: null,
    derivedFrom: [],
    confidence: "exact",
    timestamp: new Date().toISOString(),
    depth: 0,
    ...(period !== undefined ? { period } : {}),
  };
}
