// Emits packages/engine/test/golden/<id>.test.ts from the spec's worked examples.
// Phase P05 (hard gate). Expected values are produced here by evaluating the RAW
// spec expression string in a sandbox; the generated test then asserts the
// COMPILED relation reproduces it. Two independent code paths, one source.
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { repoRoot, type SpecDocument } from "./spec";
import { evalExpression, type EvalValue } from "./evaluator";

interface SpecInputRef {
  variable_id: string;
}

interface SpecFormula {
  id: string;
  expression: { javascript: string };
  inputs: SpecInputRef[];
  output: { canonical_variable_id: string | null } | null;
  inverse_solutions: { solve_for: string }[];
  validation: {
    structural_class: string;
    guard_zero_denominator: boolean;
    reject_negative_counts: boolean;
  };
  worked_example: { inputs: Record<string, EvalValue> };
}

const HELPER_NAMES = ["series_sum", "npv_calc", "irr_solve", "black_scholes_call", "vw_intersection", "dot", "matvec"];

function denominatorVars(js: string, inputIds: Set<string>): string[] {
  const found: string[] = [];
  const re = /\/\s*\(?([A-Za-z_][A-Za-z0-9_]*)\)?/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(js)) !== null) {
    const name = m[1];
    if (!name || name === "Math" || HELPER_NAMES.includes(name)) continue;
    if (inputIds.has(name) && !found.includes(name)) found.push(name);
  }
  return found;
}

export function emitGoldenTests(spec: SpecDocument): { files: number; cases: number } {
  const formulas = spec.formula_registry as unknown as SpecFormula[];
  const variables = spec.canonical_variables as { id: string; unit_class: string }[];
  const unitOf = new Map(variables.map((v) => [v.id, v.unit_class]));

  const outDir = join(repoRoot, "packages", "engine", "test", "golden");
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  // Copy the harness (hand-authored) into place is not needed; it lives beside
  // the emitted files already. We only (re)write the per-formula data modules.
  let files = 0;
  let cases = 0;

  for (const f of formulas) {
    const inputIds = new Set(f.inputs.map((i) => i.variable_id));
    const scope: Record<string, EvalValue> = {};
    for (const id of inputIds) {
      const worked = f.worked_example.inputs[id];
      if (worked !== undefined) scope[id] = worked;
    }

    let expected: unknown = null;
    try {
      expected = evalExpression(f.expression.javascript, scope);
    } catch {
      expected = null;
    }

    // rejection kind
    let rejection: { kind: string; variable?: string } | null = null;
    const denoms = denominatorVars(f.expression.javascript, inputIds).filter((d) =>
      typeof scope[d] === "number",
    );
    if (f.validation.guard_zero_denominator && denoms.length > 0) {
      rejection = { kind: "zero_denominator", variable: denoms[0] };
    } else if (f.validation.reject_negative_counts) {
      const countVar = f.inputs
        .map((i) => i.variable_id)
        .find((id) => unitOf.get(id) === "count" && typeof scope[id] === "number");
      if (countVar) rejection = { kind: "negative_count", variable: countVar };
    }
    if (rejection === null && f.validation.structural_class === "C1") {
      rejection = { kind: "c1_range" };
    }

    const outputId = f.output?.canonical_variable_id ?? null;
    const resultVar = outputId ?? "result";

    const inverseCases = f.inverse_solutions
      .filter((inv) => typeof scope[inv.solve_for] === "number")
      .map((inv) => ({ solveFor: inv.solve_for }));

    const caseCount =
      1 + (rejection ? 1 : 0) + 1 + (expected !== null && typeof expected === "number" ? inverseCases.length : 0);
    cases += caseCount;
    files += 1;

    const golden = {
      id: f.id,
      inputs: scope,
      expected,
      toleranceDigits: 12,
      rejection,
      inverses: inverseCases,
      resultVar,
      output: outputId,
      forwardReturnsResult: true,
    };

    const body = [
      "/* GENERATED FILE - do not edit. */",
      "/* Emitted by @metrika/codegen from spec/metrika.spec.json (P05 golden). */",
      "/* eslint-disable */",
      'import { runGoldenSuite, type GoldenCase } from "../goldenHarness";',
      "",
      `const golden = ${JSON.stringify(golden, null, 2)} satisfies GoldenCase;`,
      "",
      "runGoldenSuite(golden);",
      "",
    ].join("\n");
    writeFileSync(join(outDir, `${f.id}.test.ts`), body, "utf8");
  }

  return { files, cases };
}
