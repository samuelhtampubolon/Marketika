# Marketika

**Workbench kuantitatif pemasaran & kalkulator 76 metrik bisnis berbahasa Indonesia yang berjalan 100% lokal di perangkat Anda.**

Hitung CTR, Conversion Rate, CAC, ROI, AOV, ROAS, LTV, Payback Period, Elastisitas Harga, hingga valuasi TAM/SAM/SOM dari satu aplikasi yang cepat, aman, dan tanpa iklan.

![Lisensi MIT](https://img.shields.io/badge/licence-MIT-3da639)
![100% Client-Side](https://img.shields.io/badge/privasi-100%25%20lokal%20tanpa%20server-3da639)
![76 Rumus](https://img.shields.io/badge/rumus-76%20kanonik%20teruji-8957e5)
![161 Variabel](https://img.shields.io/badge/variabel-161%20metrik-8957e5)
![413 Tes Unit](https://img.shields.io/badge/tes%20unit-413%20lolos-3da639)
![Windows .exe](https://img.shields.io/badge/windows-installer%20.exe%20(3.68%20MB)-3da639)
![PWA Offline](https://img.shields.io/badge/offline-PWA%20%2B%20Desktop-4c9fff)
![Zero Telemetry](https://img.shields.io/badge/keamanan-0%20telemetri%20%7C%20aman-3da639)

---

> **▶ Pakai sekarang di peramban (tanpa instalasi):**  
> [**https://samuelhtampubolon.github.io/Marketika/**](https://samuelhtampubolon.github.io/Marketika/)  
> *(Buka tautan, langsung pakai. Tidak perlu login, tidak perlu akun, dan data Anda tidak pernah meninggalkan peramban).*
>
> **⬇ Unduh Aplikasi Desktop Windows (.exe offline):**  
> [**Unduh Installer Windows (.exe langsung via Artifacts)**](https://github.com/samuelhtampubolon/Marketika/actions/runs/35506198971/artifacts/10604241106) atau pantau di [**GitHub Actions**](https://github.com/samuelhtampubolon/Marketika/actions/workflows/build-desktop.yml)  
> — Ambil berkas `Marketika_0.1.0_x64-setup.exe` (hanya **3.68 MB**), pasang, dan jalankan langsung dari laptop/PC Anda secara offline tanpa butuh koneksi internet sama sekali.
>
> **📦 Unduh Arsip Mandiri (Offline ZIP):**  
> [**Marketika-0.1.0-offline.zip**](https://github.com/samuelhtampubolon/Marketika/releases/download/v1/Marketika-0.1.0-offline.zip)  
> — Cukup ekstrak berkas `.zip` ke folder mana saja di komputer Anda, lalu buka `index.html`. Tidak membutuhkan hak administrator dan tidak memerlukan instalasi.
>
> **🔒 Keamanan & Privasi Penuh:**  
> Marketika menghitung seluruh metrik langsung di memori perangkat Anda. Tidak ada data angka bisnis, anggaran iklan, margin profit, atau strategi pemasaran yang dikirim ke internet.

---

## Apa itu Marketika dalam 30 Detik?

Sebagian besar praktisi pemasaran, founder startup, analis bisnis, dan mahasiswa masih menghitung metrik pemasaran menggunakan spreadsheet yang rawan salah rumus (*formula error*) atau kalkulator daring yang penuh iklan dan pelacak (*tracker*).

**Marketika hadir menyelesaikan masalah tersebut:**
1. **76 Rumus Kanonik Terverifikasi**: Disusun dari standar literatur pemasaran kuantitatif internasional dan praktik terbaik industri (bukan rumus asal-asalan).
2. **Saling Terhubung (Graph Propagation)**: Bila Anda mengubah biaya iklan atau target konversi, semua metrik turunannya (CAC, ROAS, LTV/CAC ratio, Payback Period) akan langsung tersinkronisasi otomatis seketika.
3. **Multi-Platform & Selalu Tersedia**: Tersedia sebagai aplikasi Web instan, Progressive Web App (PWA), maupun aplikasi Desktop Windows native (`.exe`) berbasis Tauri.

---

## Fitur Utama & Ruang Kerja

| Modul | Apa yang Diberikan kepada Anda | Cocok Untuk |
|---|---|---|
| **⚡ Kalkulator Cepat** | Masukkan angka input yang Anda ketahui, tekan Hitung, dan dapatkan jawaban akurat beserta satuan dan penjelasannya dalam hitungan detik. | Pengecekan cepat metrik harian (CPC, CTR, ROAS, ROI). |
| **🕸️ Workbench Graf** | Rangkai variabel input dalam graf ketergantungan. Mengisi variabel di hulu otomatis memperbarui seluruh hasil perhitungan di hilir secara multi-arah. | Simulasi kampanye utuh dan perencanaan anggaran pemasaran tahunan. |
| **📚 Ruang Belajar** | Katalog edukasi lengkap untuk 76 metrik: definisi, formula matematika standar, interpretasi hasil, dan contoh kasus riil berbahasa Indonesia. | Mahasiswa, praktisi pemula, dan referensi kerja tim pemasaran. |
| **🎯 Latihan & Kuis** | Skenario soal bisnis interaktif untuk menguji kemahiran analisis kuantitatif Anda secara mandiri. | Belajar mandiri, pelatihan internal tim, dan persiapan studi kasus. |
| **📈 Analisis Sensitivitas** | Simulasi *"What-If"*: Bagaimana jika CAC naik 15%? Bagaimana jika konversi turun 2%? Lihat dampaknya langsung ke profitabilitas. | Pengambilan keputusan manajemen dan mitigasi risiko budget. |
| **📄 Laporan & Ringkasan** | Kumpulkan seluruh hasil kalkulasi menjadi ringkasan yang rapi dan siap dipresentasikan. | Rapat evaluasi kinerja marketing mingguan / bulanan. |

---

## 76 Rumus yang Langsung Tersedia

Seluruh rumus diuji dengan **413 tes unit otomatis** dan terbagi ke dalam 6 domain kuantitatif:

### 1. Iklan & Akuisisi (*Acquisition & Traffic*)
* **CTR** (Click-Through Rate), **CPC** (Cost per Click), **CPM** (Cost per Mille), **CPA** (Cost per Acquisition), **CPL** (Cost per Lead).
* **CAC** (Customer Acquisition Cost), **ROAS** (Return on Ad Spend), **ROMI** (Return on Marketing Investment).
* **Lead-to-Customer Rate**, **MQL-to-SQL Conversion Rate**, **Net Reach**, **GRP** (Gross Rating Points), **SOS** (Share of Spend), **SOV** (Share of Voice).

### 2. Retensi & Nilai Pelanggan (*Retention & Unit Economics*)
* **LTV / CLV** (Customer Lifetime Value - Simple & Predictive), **LTV:CAC Ratio**.
* **Payback Period** (Waktu Balik Modal Pelanggan), **Purchase Frequency** (Frekuensi Pembelian).
* **Churn Rate**, **Retention Rate**, **AOV** (Average Order Value), **ARPU** (Average Revenue per User), **ARPPU** (Average Revenue per Paying User).

### 3. Finansial & Profitabilitas (*Finance & Growth*)
* **ROI** (Return on Investment), **Gross Margin**, **Net Profit Margin**, **Contribution Margin**.
* **Break-Even Point** (Titik Impas Unit & Rupiah), **Sales Velocity**.
* **MRR** (Monthly Recurring Revenue), **ARR** (Annual Recurring Revenue), **MRR Churn Rate**.
* **NDR** (Net Dollar Retention), **GDR** (Gross Dollar Retention).

### 4. Riset Pasar & Penetapan Harga (*Market Research & Pricing*)
* **Elastisitas Harga Permintaan** (*Price Elasticity of Demand*), **Elastisitas Silang** (*Cross-Price Elasticity*), **Elastisitas Pendapatan** (*Income Elasticity*).
* **TAM** (Total Addressable Market), **SAM** (Serviceable Addressable Market), **SOM** (Serviceable Obtainable Market).
* **Market Share**, **Relative Market Share**, **Penetration Rate**.
* **Willingness to Pay (WTP)**, **Van Westendorp Price Sensitivity Meter (PSM)**, **Gabor-Granger Pricing Model**, **Bass Diffusion Model**.

### 5. Prioritisasi & Keputusan (*Prioritization & Decision Analysis*)
* **RICE Score** (Reach, Impact, Confidence, Effort), **WSJF Score** (Weighted Shortest Job First).
* **Cost of Delay**, **Opportunity Score**, **FMEA RPN** (Risk Priority Number).
* **Kano Model** (Better vs Worse Satisfaction Metrics), **NPV** (Net Present Value), **IRR** (Internal Rate of Return), **Expected Value (EV)**, **EVPI** (Expected Value of Perfect Information).

### 6. Pengalaman Pelanggan (*Customer Experience & Viral*)
* **NPS** (Net Promoter Score), **CSAT** (Customer Satisfaction Score), **CES** (Customer Effort Score).
* **Bounce Rate**, **Cart Abandonment Rate**, **K-Factor** (Tingkat Viralitas Pertumbuhan Organik).

---

## Keamanan, Keselamatan & Privasi (*Security & Safety First*)

Marketika dirancang dengan prinsip **Zero Harm & Strict Privacy**:

1. 🛡️ **100% Client-Side (Lokal Penuh)**:  
   Semua komputasi dan matematika berjalan langsung di CPU/peramban perangkat Anda. Tidak ada data input, angka penjualan, anggaran iklan, margin keuntungan, atau strategi yang dikirimkan ke server eksternal.
2. 🛡️ **Tanpa Pelacak & Telemetri**:  
   Bebas Google Analytics, Facebook Pixel, tracking scripts, beacon, atau cookie pihak ketiga. Hak privasi Anda dan data bisnis Anda dihormati sepenuhnya.
3. 🛡️ **Bebas Eksekusi Kode Berbahaya (*No Dynamic Eval*)**:  
   Aplikasi ini **tidak** menggunakan `eval()`, `new Function()`, atau `dangerouslySetInnerHTML`. Seluruh logika rumus di-*generate* secara statis dan terverifikasi dengan sistem *type safety* TypeScript.
4. 🛡️ **Content Security Policy (CSP) Ketat**:  
   Diverifikasi dengan CSP yang melarang skrip dari pihak luar yang tidak dikenal, mencegah serangan XSS (*Cross-Site Scripting*) dan *clickjacking*.
5. 🛡️ **Berkas Biner Desktop Terverifikasi**:  
   Installer Windows `.exe` dibangun secara transparan menggunakan GitHub Actions resmi dengan toolchain Rust & MSVC, tanpa modifikasi manual pada berkas binary.

---

## Struktur Repositori (Monorepo)

Marketika memisahkan logika matematika inti (*pure engine*) dari antarmuka pengguna:

| Direktori | Fungsi & Tanggung Jawab |
|---|---|
| `spec/` | Spesifikasi kanonik sumber kebenaran (`metrika.spec.json`) untuk seluruh rumus dan variabel. |
| `packages/engine/` | Mesin perhitungan matematika murni, graph propagation, dan validator (bebas dependensi UI, 413 tes lolos). |
| `packages/codegen/` | Alat bantu baca spesifikasi, otomatisasi pembuatan kode TypeScript typed, dan audit verifikasi. |
| `packages/ui/` | Pustaka widget antarmuka, komponen input, dan token desain yang reusable. |
| `packages/app/` | Aplikasi web React, manajemen state, routing modul, dan manifest PWA. |
| `packages/desktop/` | Shell aplikasi Windows native berbasis framework Tauri v2 (Rust + WebView2). |
| `docs/` | Berkas siap saji statis untuk GitHub Pages dan deployment hosting. |

---

## Menjalankan dari Kode Sumber (*Development*)

Pastikan Anda telah memasang **Node.js 20+** dan **pnpm 12+**.

```bash
# 1. Pasang seluruh dependensi monorepo
pnpm install

# 2. Jalankan aplikasi web di browser lokal (http://localhost:5173)
pnpm dev

# 3. Jalankan seluruh pengujian unit otomatis
pnpm test

# 4. Verifikasi konsistensi spesifikasi rumus dan kode
pnpm verify

# 5. Pengecekan tipe TypeScript dan linter
pnpm typecheck
pnpm lint

# 6. Bangun berkas web statis ke folder docs/
pnpm build

# 7. Bangun installer aplikasi Desktop Windows (.exe)
pnpm desktop:build
```

---

## Lisensi

Proyek ini dirilis di bawah lisensi terbuka **[MIT License](LICENSE)**. Bebas digunakan, dipelajari, dan dimanfaatkan oleh siapa saja untuk kebutuhan belajar, profesional, maupun komersial.
