// Emits packages/engine/src/formulas/generated/*.ts from the spec.
// Phase P03: formula codegen. Expressions compile here, never at runtime (ADR-003).
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { repoRoot, type SpecDocument } from "./spec";

interface SpecInputRef {
  variable_id: string;
}

interface SpecFormula {
  id: string;
  expression: { javascript: string; requires_helper: string | null };
  inputs: SpecInputRef[];
  output: { canonical_variable_id: string | null } | null;
  inverse_solutions: { solve_for: string; javascript: string }[];
  validation: { structural_class: string };
}

interface SpecVariableRaw {
  id: string;
  unit_class: string;
}

const HELPER_JS: Record<string, { js: string; module: string }> = {
  series_sum: { js: "seriesSum", module: "../../helpers/series" },
  npv_calc: { js: "npvCalc", module: "../../helpers/npv" },
  irr_solve: { js: "irrSolve", module: "../../helpers/irr" },
  black_scholes_call: { js: "blackScholesCall", module: "../../helpers/blackScholes" },
  vw_intersection: { js: "vwFromFourPrices", module: "../../helpers/vanWestendorp" },
  dot: { js: "dot", module: "../../helpers/linalg" },
  matvec: { js: "matvec", module: "../../helpers/linalg" },
};

type Accessor = "num" | "vec" | "mat";

function compileExpression(
  js: string,
  accessorFor: Map<string, Accessor>,
  formulaId: string,
): { code: string; helpersUsed: Set<string> } {
  const helpersUsed = new Set<string>();
  const code = js.replace(/(\.)?\b([A-Za-z_][A-Za-z0-9_]*)\b/g, (match, dot: string | undefined, name: string) => {
    if (dot !== undefined && dot !== "") return match;
    if (name === "Math") return name;
    const helper = HELPER_JS[name];
    if (helper !== undefined) {
      helpersUsed.add(name);
      return helper.js;
    }
    const accessor = accessorFor.get(name);
    if (accessor === undefined) {
      throw new Error(`codegen: formula '${formulaId}' references unknown identifier '${name}' in '${js}'`);
    }
    return `env.${accessor}("${name}")`;
  });
  return { code, helpersUsed };
}

function buildFormula(f: SpecFormula, kinds: Map<string, string>): string {
  const accessorFor = new Map<string, Accessor>();
  for (const input of f.inputs) {
    const unit = kinds.get(input.variable_id) ?? "number";
    accessorFor.set(input.variable_id, unit === "vector" ? "vec" : unit === "matrix" ? "mat" : "num");
  }
  const outputId = f.output?.canonical_variable_id ?? null;
  if (outputId !== null) {
    accessorFor.set(outputId, "num");
  }
  accessorFor.set("result", "num");

  const { code: forwardCode, helpersUsed } = compileExpression(
    f.expression.javascript,
    accessorFor,
    f.id,
  );

  const inverseLines = f.inverse_solutions.map((inv) => {
    const { code: invCode, helpersUsed: invHelpers } = compileExpression(
      inv.javascript,
      accessorFor,
      f.id,
    );
    for (const h of invHelpers) helpersUsed.add(h);
    return `    ${JSON.stringify(inv.solve_for)}: (env) => (${invCode}),`;
  });

  const imports = [
    '/* GENERATED FILE - do not edit. */',
    '/* Emitted by @metrika/codegen from spec/metrika.spec.json. */',
    '/* eslint-disable */',
    'import type { Relation } from "../../relation";',
  ];
  const helperImports = new Map<string, string[]>();
  for (const h of helpersUsed) {
    const def = HELPER_JS[h];
    if (!def) continue;
    const list = helperImports.get(def.module) ?? [];
    list.push(def.js);
    helperImports.set(def.module, list);
  }
  for (const [mod, names] of [...helperImports.entries()].sort()) {
    imports.push(`import { ${names.sort().join(", ")} } from "${mod}";`);
  }

  const body = [
    ...imports,
    "",
    "export const relation: Relation = {",
    `  formulaId: ${JSON.stringify(f.id)},`,
    `  structuralClass: ${JSON.stringify(f.validation.structural_class)},`,
    `  inputs: [${f.inputs.map((i) => JSON.stringify(i.variable_id)).join(", ")}],`,
    `  output: ${outputId === null ? "null" : JSON.stringify(outputId)},`,
    `  forward: (env) => (${forwardCode}),`,
    "  inverses: {",
    ...inverseLines,
    "  },",
    "};",
    "",
  ].join("\n");
  return body;
}

export function emitFormulas(spec: SpecDocument): number {
  const formulas = spec.formula_registry as unknown as SpecFormula[];
  const variables = spec.canonical_variables as SpecVariableRaw[];
  const kinds = new Map(variables.map((v) => [v.id, v.unit_class]));

  const outDir = join(repoRoot, "packages", "engine", "src", "formulas", "generated");
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  const indexLines = [
    "/* GENERATED FILE - do not edit. */",
    "/* Emitted by @metrika/codegen from spec/metrika.spec.json. */",
    "/* eslint-disable */",
    'import type { Relation } from "../../relation";',
  ];
  const modules: string[] = [];
  for (const f of formulas) {
    writeFileSync(join(outDir, `${f.id}.ts`), buildFormula(f, kinds), "utf8");
    indexLines.push(`import { relation as r_${f.id} } from "./${f.id}";`);
    modules.push(`r_${f.id}`);
  }
  indexLines.push(
    "",
    `export const relations: readonly Relation[] = Object.freeze([${modules.join(", ")}]);`,
    "",
    "export const relationsById: Readonly<Record<string, Relation>> = Object.freeze(",
    "  Object.fromEntries(relations.map((r) => [r.formulaId, r])),",
    ");",
    "",
  );
  writeFileSync(join(outDir, "index.ts"), indexLines.join("\n"), "utf8");
  return formulas.length;
}
