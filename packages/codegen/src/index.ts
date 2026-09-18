import { emitFormulas } from "./emitFormulas";
import { emitGoldenTests } from "./emitGoldenTests";
import { emitLocale } from "./emitLocale";
import { emitCurriculum } from "./emitCurriculum";
import { emitRegistry } from "./emitRegistry";
import { readSpec } from "./spec";

function main(): void {
  const spec = readSpec();
  const n = emitRegistry(spec);
  console.log(`codegen: emitted variable registry (${n} variables)`);
  const f = emitFormulas(spec);
  console.log(`codegen: emitted ${f} formula relation modules`);
  const g = emitGoldenTests(spec);
  console.log(`codegen: emitted ${g.files} golden test files (${g.cases} cases)`);
  emitLocale(spec);
  emitCurriculum(spec);
  console.log("codegen: complete");
}

main();
