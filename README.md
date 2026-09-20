# Marketika

**Kalkulator dan workbench analisis kuantitatif pemasaran yang langsung bisa dipakai.**

Hitung CTR, conversion rate, CAC, ROI, AOV, ROAS, LTV, dan puluhan metrik lain dari satu aplikasi berbahasa Indonesia.

## Pilih cara pakai

| Kebutuhan | Tautan | Cara mulai |
| --- | --- | --- |
| Pakai sekarang di browser | **[BUKA WEBSITE MARKETIKA](https://samuelhtampubolon.github.io/Marketika/)** | Klik, lalu langsung gunakan. Tidak perlu instalasi. |
| Pakai lokal tanpa internet | **[DOWNLOAD MARKETIKA OFFLINE - ZIP](https://github.com/samuelhtampubolon/Marketika/actions/runs/35506198971/artifacts/10604241106  ; https://github.com/samuelhtampubolon/Marketika/releases/download/v1/Marketika-0.1.0-offline.zip)** | Ekstrak ZIP, lalu buka `index.html`. |
| Lihat versi dan berkas resmi | [Buka halaman Releases](https://github.com/samuelhtampubolon/Marketika/releases) | Pilih versi yang ingin digunakan. |

> **Belum yakin?** Buka Website untuk mencoba dalam hitungan detik. Pilih Offline ZIP bila aplikasi perlu tetap tersedia di komputer tanpa koneksi internet.

## Yang langsung tersedia

- **76 rumus** dan **161 variabel kanonik** untuk analisis kuantitatif pemasaran.
- Kalkulator, Workbench, Belajar, Latihan, Kemajuan, Sensitivitas, dan Laporan.
- Perhitungan berjalan lokal di aplikasi; tidak perlu akun, API key, atau layanan server.
- Website dapat dipasang sebagai aplikasi dan menyimpan app shell untuk penggunaan offline setelah kunjungan pertama.
- ZIP offline berisi build statis Marketika. Tidak membutuhkan installer atau hak administrator.

## Privasi dan batasan akses

Marketika tidak mengunggah angka input atau hasil perhitungan ke server. Aplikasi tidak meminta akses ke folder pribadi, shell, kamera, mikrofon, atau perangkat jaringan. Website hanya membutuhkan koneksi saat pertama kali mengambil berkas aplikasi; paket offline tidak memerlukannya.

## Mulai dalam tiga langkah

1. Pilih **[Website](https://samuelhtampubolon.github.io/Marketika/)** atau **[Offline ZIP](https://github.com/samuelhtampubolon/Marketika/releases/download/v1/Marketika-0.1.0-offline.zip)** di atas.
2. Pilih metrik, masukkan angka yang tersedia, lalu tekan **Hitung**.
3. Buka **Workbench** bila ingin menyimpan alur perhitungan dan menelusuri input yang belum lengkap.

## Tentang proyek

Marketika memisahkan mesin perhitungan dari antarmuka. Spesifikasi sumber berada di `spec/metrika.spec.json`; kode hasil generate dan katalog Marketika berasal dari spesifikasi tersebut.

| Path | Isi |
| --- | --- |
| `spec/` | Spesifikasi sumber dan catatan perubahannya |
| `packages/engine` | Mesin perhitungan murni tanpa impor UI |
| `packages/codegen` | Membaca spesifikasi, membuat sumber typed, dan memverifikasi |
| `packages/ui` | Paket widget dan token antarmuka |
| `packages/app` | Layar dan state aplikasi |
| `packages/desktop` | Shell Windows berbasis Tauri |

## Menjalankan dari source

```bash
pnpm install
pnpm dev             # jalankan Workbench di komputer lokal
pnpm build           # hasil static site ke docs/
pnpm verify          # verifikasi spesifikasi dan hasil generate
pnpm typecheck
pnpm test
pnpm lint
```

## Versi desktop Windows

Shell Tauri sudah tersedia di `packages/desktop`, tetapi installer `.exe` belum dilampirkan ke release karena build Windows memerlukan Rust, Microsoft C++ Build Tools, dan WebView2. Setelah toolchain tersedia:

```bash
pnpm install
pnpm desktop:build
```

Hasil installer berada di `packages/desktop/src-tauri/target/release/bundle/`.

Generated files ditandai di header-nya dan tidak boleh diedit manual.
