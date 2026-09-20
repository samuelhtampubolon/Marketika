import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  checkInputs,
  checkOutputRange,
  formatByUnitClass,
  formatNumber,
  makeUserValue,
  propagate,
  relationsById,
  type Env,
  type PropagationResult,
} from "@metrika/engine";
import { APP_NAME, APP_VERSION } from "./index";
import { catalog } from "./generated/catalog";

type Screen = "calc" | "solver" | "learn" | "practice" | "progress" | "sensitivity" | "report";
type Locale = "id" | "en";

interface VariableMeta {
  id: string;
  label: { id: string; en: string };
  unit_class: string;
  ui: { suffix: string };
}

interface FormulaMeta {
  id: string;
  symbol: string;
  name: { id: string; en: string };
  taxonomy: { axis_a: { stratum_name: { id: string; en: string } }; axis_b: { phase_name: { id: string; en: string } }; axis_c: { class_name: { id: string; en: string } }; axis_d: { domain_name: { id: string; en: string } } };
  expression: { latex: string };
  inputs: { variable_id: string }[];
  output: { canonical_variable_id: string } | null;
  interpretation_bands: { lower: number; upper: number; label: string; guidance_id: string }[];
  failure_modes: { description_id: string }[];
  worked_example: { inputs: Record<string, number | number[] | number[][]> };
  definition: { id: string; en: string };
}

const variables = catalog.variables as readonly VariableMeta[];
const formulas = catalog.formulas as unknown as readonly FormulaMeta[];
const curriculum = catalog.curriculum as unknown as readonly { name: { id: string; en: string }; formula_ids: readonly string[] }[];
const variableById = new Map(variables.map((variable) => [variable.id, variable]));
const formulaById = new Map(formulas.map((formula) => [formula.id, formula]));

function label(variableId: string, locale: Locale = "id"): string {
  return variableById.get(variableId)?.label[locale] ?? variableId;
}

function display(variableId: string, value: unknown, locale: Locale = "id"): string {
  const variable = variableById.get(variableId);
  if (typeof value === "number" && variable !== undefined) {
    try {
      return formatByUnitClass(value, variable.unit_class as never, locale);
    } catch {
      return formatNumber(value, { locale, decimals: 4 });
    }
  }
  if (Array.isArray(value)) return JSON.stringify(value);
  return String(value ?? "N/A");
}

function numericEnv(values: Record<string, string>): Env {
  const read = (name: string): number => Number(values[name]);
  return {
    num: read,
    vec: (name) => JSON.parse(values[name] ?? "[]") as number[],
    mat: (name) => JSON.parse(values[name] ?? "[]") as number[][],
  };
}

function expressionText(latex: string): string {
  return latex
    .replace(/\\dfrac\{([^{}]+)\}\{([^{}]+)\}/g, "$1 / $2")
    .replace(/\\times/g, " x ")
    .replace(/\\cdot/g, " x ")
    .replace(/\\text\{([^{}]+)\}/g, "$1")
    .replace(/[{}\\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formulaResult(formula: FormulaMeta, inputs: Record<string, string>): { value?: unknown; error?: string } {
  const relation = relationsById[formula.id];
  if (relation === undefined) return { error: "Relasi tidak ditemukan." };
  const env = numericEnv(inputs);
  const guard = checkInputs(relation, env, "id");
  if (!guard.ok) return { error: guard.reason ?? "Masukan tidak sah." };
  try {
    const value = relation.forward(env);
    if (typeof value === "number") {
      const range = checkOutputRange(relation, value, "id");
      if (!range.ok) return { error: range.reason ?? "Hasil berada di luar rentang." };
    }
    return { value };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Perhitungan gagal." };
  }
}

function useKeyboard(setScreen: (screen: Screen) => void, toggleDetails: () => void, calculate: () => void): void {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F9") {
        event.preventDefault();
        toggleDetails();
      } else if (event.key === "F1") {
        event.preventDefault();
        setScreen("learn");
      } else if (event.ctrlKey && event.key.toLowerCase() === "p") {
        event.preventDefault();
        window.print();
      } else if (event.key === "Enter" && event.target instanceof HTMLInputElement) {
        calculate();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [calculate, setScreen, toggleDetails]);
}

function RaisedButton({ children, onClick, disabled = false, className = "" }: { children: ReactNode; onClick?: () => void; disabled?: boolean; className?: string }) {
  return <button className={`raised-button ${className}`} onClick={onClick} disabled={disabled}>{children}</button>;
}

function GroupBox({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return <section className={`groupbox ${className}`}><h2>{title}</h2>{children}</section>;
}

function Calculator({ onOpenSolver, onResult, locale }: { onOpenSolver: (values: Record<string, string>) => void; onResult: (value: string) => void; locale: Locale }) {
  const [selectedId, setSelectedId] = useState("ctr");
  const [search, setSearch] = useState("");
  const [grouping, setGrouping] = useState("stratum");
  const [details, setDetails] = useState(false);
  const formula = formulaById.get(selectedId) ?? formulas[0];
  const initialInputs = Object.fromEntries(Object.entries(formula?.worked_example.inputs ?? {}).map(([key, value]) => [key, String(value)]));
  const [inputs, setInputs] = useState<Record<string, string>>(initialInputs);
  const [result, setResult] = useState<{ value?: unknown; error?: string }>(() => formula === undefined ? {} : formulaResult(formula, initialInputs));

  useEffect(() => {
    const next = Object.fromEntries(Object.entries(formula?.worked_example.inputs ?? {}).map(([key, value]) => [key, String(value)]));
    setInputs(next);
    setResult(formula === undefined ? {} : formulaResult(formula, next));
  }, [formula]);

  const filtered = formulas.filter((item) => {
    const query = search.toLowerCase();
    return `${item.symbol} ${item.name.id} ${item.name.en}`.toLowerCase().includes(query);
  });
  const grouped = [...filtered].sort((a, b) => {
    const group = (item: FormulaMeta): string => {
      if (grouping === "phase") return item.taxonomy.axis_b.phase_name.id;
      if (grouping === "class") return item.taxonomy.axis_c.class_name.id;
      if (grouping === "domain") return item.taxonomy.axis_d.domain_name.id;
      if (grouping === "alpha") return item.symbol;
      return item.taxonomy.axis_a.stratum_name.id;
    };
    return `${group(a)} ${a.symbol}`.localeCompare(`${group(b)} ${b.symbol}`, "id");
  });
  const calculate = () => {
    if (formula !== undefined) {
      const next = formulaResult(formula, inputs);
      setResult(next);
      if (next.value !== undefined) onResult(display(outputId, next.value, locale));
    }
  };
  useKeyboard(() => undefined, () => setDetails((open) => !open), calculate);

  const outputId = formula?.output?.canonical_variable_id ?? "result";
  const numericResult = typeof result.value === "number" ? result.value : undefined;
  const band = numericResult === undefined ? undefined : formula?.interpretation_bands.find((item, index, all) => numericResult >= item.lower && (numericResult < item.upper || index === all.length - 1));
  return <div className="calculator-layout">
    <aside className="formula-sidebar">
      <GroupBox title="Rumus">
        <input aria-label="Cari rumus" className="sunken-input" placeholder="Cari simbol atau nama" value={search} onChange={(event) => setSearch(event.target.value)} />
        <select aria-label="Pengelompokan" className="sunken-input" value={grouping} onChange={(event) => setGrouping(event.target.value)}>
          <option value="stratum">Menurut strata</option><option value="phase">Menurut fase</option><option value="class">Menurut kelas struktur</option><option value="domain">Menurut domain keputusan</option><option value="alpha">Menurut abjad</option>
        </select>
        <div className="formula-list" role="tree" aria-label="Daftar rumus">
          {grouped.map((item) => <button key={item.id} className={`formula-row ${item.id === selectedId ? "selected" : ""}`} onClick={() => setSelectedId(item.id)} role="treeitem">
            <strong>{item.symbol}</strong><span>{item.name.id}</span>
          </button>)}
        </div>
      </GroupBox>
      <p className="sidebar-count">{filtered.length} dari {formulas.length} rumus</p>
    </aside>
    <main className="calculator-center">
      <GroupBox title={`${formula?.symbol ?? ""} - ${formula?.name.id ?? ""}`} className="input-group">
        <p className="formula-strip">{formula === undefined ? "" : expressionText(formula.expression.latex)}</p>
        <div className="input-grid">
          {formula?.inputs.map((input) => {
            const variable = variableById.get(input.variable_id);
            return <label key={input.variable_id} className="numeric-label"><span>{variable?.label.id ?? input.variable_id}</span><input className="numeric-field" inputMode="decimal" value={inputs[input.variable_id] ?? ""} onChange={(event) => setInputs((current) => ({ ...current, [input.variable_id]: event.target.value }))} /><small>{variable?.ui.suffix}</small></label>;
          })}
        </div>
        <div className="button-row"><RaisedButton onClick={calculate}>Hitung</RaisedButton><RaisedButton onClick={() => onOpenSolver(inputs)}>Kirim ke Workbench</RaisedButton></div>
        {result.error && <p className="error-line" role="alert">{result.error}</p>}
      </GroupBox>
      <GroupBox title="Definisi" className="definition-box"><p>{locale === "id" ? formula?.definition.id : formula?.definition.en}</p><p className="taxonomy-line">{formula?.taxonomy.axis_a.stratum_name.id} / {formula?.taxonomy.axis_b.phase_name.id} / {formula?.taxonomy.axis_c.class_name.id}</p></GroupBox>
    </main>
    <aside className="result-sidebar">
      <GroupBox title="Hasil" className="result-box">
        <div className="result-field" aria-live="polite">{result.value === undefined ? "-" : display(outputId, result.value, locale)}</div>
        {band && <div className="band"><strong>{band.label}</strong><span>{band.guidance_id}</span></div>}
      </GroupBox>
      <GroupBox title="Penelusuran">
        <RaisedButton onClick={() => setDetails((open) => !open)}>{details ? "Sembunyikan rincian" : "Tampilkan rincian"} (F9)</RaisedButton>
        {details && <pre className="derivation">{result.value === undefined ? "Masukan belum menghasilkan nilai." : `${formula === undefined ? "" : expressionText(formula.expression.latex)}\n\n${Object.entries(inputs).map(([id, value]) => `${label(id)} = ${value}`).join("\n")}\n\n${formula?.symbol} = ${display(outputId, result.value, locale)}`}</pre>}
      </GroupBox>
      <GroupBox title="Hal yang perlu diperiksa"><ul className="plain-list">{formula?.failure_modes.map((mode) => <li key={mode.description_id}>{mode.description_id}</li>)}</ul></GroupBox>
    </aside>
  </div>;
}

function Solver({ initialValues }: { initialValues: Record<string, string> }) {
  const [known, setKnown] = useState<Record<string, string>>({ clicks: "41600", impressions: "3200000", spend: "24000000", visitors: "38400", conversions: "1120", ...initialValues });
  const [selected, setSelected] = useState("revenue");
  const [value, setValue] = useState("");
  const [propagation, setPropagation] = useState<PropagationResult | null>(null);
  const derive = () => {
    const map = new Map(Object.entries(known).filter(([, raw]) => raw !== "").map(([id, raw]) => [id, makeUserValue(id, Number(raw), variableById.get(id)?.unit_class ?? "unknown", "monthly")]));
    setPropagation(propagate(map, Object.values(relationsById), { maxGenerations: 12, locale: "id", unitClassOf: (id) => variableById.get(id)?.unit_class ?? "unknown" }));
  };
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        derive();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });
  return <div className="solver-layout">
    <GroupBox title="Nilai yang diketahui" className="solver-known">
      <div className="add-row"><select className="sunken-input" value={selected} onChange={(event) => setSelected(event.target.value)}>{variables.filter((item) => item.unit_class !== "vector" && item.unit_class !== "matrix").map((item) => <option key={item.id} value={item.id}>{item.label.id}</option>)}</select><input className="numeric-field" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Nilai" /><RaisedButton onClick={() => { if (value !== "") { setKnown((current) => ({ ...current, [selected]: value })); setValue(""); } }}>Tambah</RaisedButton></div>
      <div className="known-list">{Object.entries(known).map(([id, raw]) => <div className="known-row" key={id}><span>{label(id)}</span><strong>{raw}</strong><button aria-label={`Hapus ${label(id)}`} onClick={() => setKnown((current) => { const next = { ...current }; delete next[id]; return next; })}>x</button></div>)}</div>
      <RaisedButton onClick={derive} className="derive-button">Turunkan semua (Ctrl+Enter)</RaisedButton>
    </GroupBox>
    <GroupBox title="Nilai turunan" className="solver-derived">
      <div className="counter-line">diketahui {knownCount(known)} | turunan {propagation?.reachable ?? 0} | tertahan {propagation?.blocked.length ?? 0}</div>
      {propagation === null ? <p className="empty-state">Masukkan nilai yang diketahui lalu jalankan penurunan.</p> : <><div className="table-wrap"><table><thead><tr><th>Variabel</th><th>Nilai</th><th>Melalui</th><th>Generasi</th></tr></thead><tbody>{[...propagation.values.values()].filter((item) => item.origin === "derived").sort((a, b) => a.depth - b.depth).map((item) => <tr key={item.variableId}><td>{label(item.variableId)}</td><td className="mono">{display(item.variableId, item.magnitude)}</td><td>{item.derivedBy}</td><td>{item.depth}</td></tr>)}</tbody></table></div><h3>Relasi tertahan</h3><ul className="plain-list">{propagation.blocked.slice(0, 8).map((item) => <li key={item.formulaId}>{item.formulaId}: {item.detail ?? item.reason}</li>)}</ul></>}
    </GroupBox>
  </div>;
}

function knownCount(values: Record<string, string>): number { return Object.values(values).filter((value) => value !== "").length; }

function Learn() {
  const [selected, setSelected] = useState(0);
  const module = curriculum[selected];
  return <div className="learn-layout"><aside className="module-list">{curriculum.map((item, index) => <button className={index === selected ? "selected" : ""} key={item.name.id} onClick={() => setSelected(index)}><span>{index + 1}</span>{item.name.id}</button>)}</aside><main className="reading-pane"><p className="eyebrow">Modul {selected + 1} dari {curriculum.length}</p><h2>{module?.name.id}</h2><p>Pelajari hubungan antarvariabel, masukkan angka yang memiliki periode sama, lalu buka kembali rumusnya di Kalkulator. Setiap rumus pada modul ini memiliki contoh kerja yang dapat diuji.</p><GroupBox title="Rumus dalam modul"><div className="module-formulas">{module?.formula_ids.map((id) => { const item = formulaById.get(id); return <div key={id}><strong>{item?.symbol}</strong><span>{item?.name.id}</span></div>; })}</div></GroupBox><GroupBox title="Latihan terarah"><p>Gunakan satu contoh kerja dari daftar ini, lalu bandingkan hasil Anda dengan panel penelusuran.</p><RaisedButton>Mulai penilaian</RaisedButton></GroupBox></main></div>;
}

function Practice() {
  const [formulaId, setFormulaId] = useState("ctr");
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const formula = formulaById.get(formulaId) ?? formulas[0];
  const inputs = Object.fromEntries(Object.entries(formula?.worked_example.inputs ?? {}).map(([id, value]) => [id, String(value)]));
  const expected = formula === undefined ? undefined : formulaResult(formula, inputs).value;
  const correct = typeof expected === "number" && Math.abs(Number(answer) - expected) <= Math.max(1e-9, Math.abs(expected) * 0.001);
  return <div className="practice-panel"><p className="eyebrow">Satu soal</p><label>Rumus<select className="sunken-input" value={formulaId} onChange={(event) => { setFormulaId(event.target.value); setChecked(false); setAnswer(""); }}>{formulas.map((item) => <option key={item.id} value={item.id}>{item.symbol} - {item.name.id}</option>)}</select></label><h2>Hitung {formula?.symbol}</h2><p>{Object.entries(inputs).map(([id, value]) => `${label(id)} = ${value}`).join("; ")}</p><input className="numeric-field answer-field" value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder="Jawaban" /><RaisedButton onClick={() => setChecked(true)}>Periksa</RaisedButton>{checked && <GroupBox title={correct ? "Jawaban sesuai" : "Periksa kembali"}><p>Nilai rujukan: <strong>{typeof expected === "number" ? display(formula?.output?.canonical_variable_id ?? "result", expected) : String(expected)}</strong></p><p>{formula?.expression.latex}</p></GroupBox>}</div>;
}

function Progress() {
  return <div className="progress-screen"><GroupBox title="Ringkasan"><div className="summary-grid"><div><span>Tingkat</span><strong>T1</strong></div><div><span>XP</span><strong>0 / 250</strong></div><div><span>Rumus dikuasai</span><strong>0 / {formulas.length}</strong></div></div><div className="segmented"><i /><i /><i /><i /><i /></div></GroupBox><GroupBox title="Daftar rumus"><div className="table-wrap"><table><thead><tr><th>Simbol</th><th>Nama</th><th>Strata</th><th>Fase</th><th>Status</th></tr></thead><tbody>{formulas.map((item) => <tr key={item.id}><td className="mono">{item.symbol}</td><td>{item.name.id}</td><td>{item.taxonomy.axis_a.stratum_name.id}</td><td>{item.taxonomy.axis_b.phase_name.id}</td><td>Belum mulai</td></tr>)}</tbody></table></div></GroupBox></div>;
}

function Sensitivity() {
  const [formulaId, setFormulaId] = useState("ctr");
  const [percent, setPercent] = useState("10");
  const formula = formulaById.get(formulaId) ?? formulas[0];
  const base = Object.fromEntries(Object.entries(formula?.worked_example.inputs ?? {}).map(([id, value]) => [id, String(value)]));
  const baseValue = formula === undefined ? undefined : formulaResult(formula, base).value;
  const swings = formula?.inputs.map((input) => { const p = Number(percent) / 100; const up = { ...base, [input.variable_id]: String(Number(base[input.variable_id]) * (1 + p)) }; const down = { ...base, [input.variable_id]: String(Number(base[input.variable_id]) * (1 - p)) }; const high = formulaResult(formula, up).value; const low = formulaResult(formula, down).value; return { id: input.variable_id, swing: typeof high === "number" && typeof low === "number" ? Math.abs(high - low) : 0 }; }).sort((a, b) => b.swing - a.swing) ?? [];
  return <div className="sensitivity-layout"><GroupBox title="Parameter"><label>Rumus<select className="sunken-input" value={formulaId} onChange={(event) => setFormulaId(event.target.value)}>{formulas.map((item) => <option key={item.id} value={item.id}>{item.symbol}</option>)}</select></label><label>Perubahan (%)<input className="numeric-field" value={percent} onChange={(event) => setPercent(event.target.value)} /></label><p>Nilai dasar: {typeof baseValue === "number" ? display(formula?.output?.canonical_variable_id ?? "result", baseValue) : "-"}</p></GroupBox><GroupBox title="Dampak"><div className="swing-list">{swings.map((item) => <div key={item.id} className="swing-row"><span>{label(item.id)}</span><div><b style={{ width: `${Math.min(100, item.swing * 1000)}%` }} /></div><strong>{formatNumber(item.swing, { locale: "id", decimals: 4 })}</strong></div>)}</div></GroupBox></div>;
}

function Report({ selectedId, result }: { selectedId: string; result: string }) {
  const formula = formulaById.get(selectedId) ?? formulas[0];
  return <div className="report-page"><div className="report-actions"><RaisedButton onClick={() => window.print()}>Cetak</RaisedButton><RaisedButton onClick={() => navigator.clipboard?.writeText(`${formula?.symbol}: ${result}`)}>Salin Markdown</RaisedButton></div><article className="print-sheet"><h1>Marketika</h1><p>Ruang kerja analisis kuantitatif pemasaran</p><hr /><h2>{formula?.symbol} - {formula?.name.id}</h2><p>{formula?.definition.id}</p><p className="mono">Hasil: {result}</p><h3>Catatan</h3><p>Perhitungan dibuat secara lokal. Laporan ini tidak diverifikasi oleh institusi mana pun.</p></article></div>;
}

export function App() {
  const [screen, setScreen] = useState<Screen>("calc");
  const [locale, setLocale] = useState<Locale>("id");
  const [solverInputs, setSolverInputs] = useState<Record<string, string>>({});
  const [about, setAbout] = useState(false);
  const [lastResult, setLastResult] = useState("-");
  const screenTitle = { calc: "Kalkulator", solver: "Workbench", learn: "Belajar", practice: "Latihan", progress: "Kemajuan", sensitivity: "Sensitivitas", report: "Laporan" }[screen];
  const nav = (next: Screen) => setScreen(next);
  const reportFormula = useMemo(() => formulaById.get("ctr")?.symbol ?? "CTR", []);
  return <div className="app-shell">
    <header className="titlebar"><strong>{APP_NAME}</strong><span>Analisis kuantitatif pemasaran</span><span className="title-version">v{APP_VERSION}</span></header>
    <nav className="menubar" aria-label="Menu utama">{([ ["calc", "Kalkulator"], ["solver", "Workbench"], ["learn", "Belajar"], ["practice", "Latihan"], ["progress", "Kemajuan"], ["sensitivity", "Sensitivitas"], ["report", "Laporan"] ] as [Screen, string][]).map(([id, text]) => <button key={id} className={screen === id ? "active" : ""} onClick={() => nav(id)}>{text}</button>)}<button onClick={() => setAbout(true)}>Tentang</button></nav>
    <div className="toolbar"><RaisedButton onClick={() => nav("calc")}>Baru</RaisedButton><RaisedButton onClick={() => window.print()}>Cetak</RaisedButton><span className="toolbar-separator" /><span className="toolbar-context">{screenTitle}</span><button className="locale-button" onClick={() => setLocale(locale === "id" ? "en" : "id")}>{locale === "id" ? "ID" : "EN"}</button></div>
    <div className="workspace">{screen === "calc" && <Calculator locale={locale} onResult={setLastResult} onOpenSolver={(values) => { setSolverInputs(values); nav("solver"); }} />}{screen === "solver" && <Solver initialValues={solverInputs} />}{screen === "learn" && <Learn />}{screen === "practice" && <Practice />}{screen === "progress" && <Progress />}{screen === "sensitivity" && <Sensitivity />}{screen === "report" && <Report selectedId="ctr" result={lastResult === "-" ? reportFormula : lastResult} />}</div>
    <footer className="statusbar"><span>Siap. Semua perhitungan berlangsung di perangkat ini.</span><span>{formulas.length} rumus | {variables.length} variabel</span><span>Marketika</span></footer>
    {about && <div className="modal-backdrop" role="presentation"><div className="modal" role="dialog" aria-modal="true" aria-labelledby="about-title"><h2 id="about-title">Tentang Marketika</h2><p>Marketika menghitung metrik pemasaran kuantitatif dari rumus yang dapat ditelusuri.</p><p>{formulas.length} rumus dan {variables.length} variabel kanonik dari spesifikasi proyek.</p><p>Tidak ada data yang dikirim keluar dari perangkat.</p><div className="modal-actions"><RaisedButton onClick={() => setAbout(false)}>OK</RaisedButton></div></div></div>}
  </div>;
}
