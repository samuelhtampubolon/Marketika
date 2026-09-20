/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */

export const catalog = {
  "variables": [
    {
      "id": "impressions",
      "label": {
        "id": "Total Tayangan",
        "en": "Impressions"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah penayangan iklan atau konten, termasuk penayangan berulang kepada orang yang sama.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "reach",
      "label": {
        "id": "Jangkauan",
        "en": "Reach"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah individu unik yang terpapar. Selalu lebih kecil atau sama dengan tayangan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "gross_reach",
      "label": {
        "id": "Jangkauan Kotor",
        "en": "Gross Reach"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Penjumlahan jangkauan seluruh kanal sebelum koreksi tumpang tindih.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "duplication",
      "label": {
        "id": "Duplikasi Audiens",
        "en": "Audience Duplication"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah individu yang terhitung lebih dari satu kali lintas kanal.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "frequency",
      "label": {
        "id": "Frekuensi Terpaan",
        "en": "Frequency"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Rata-rata jumlah terpaan per individu terjangkau.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "reach_at_threshold",
      "label": {
        "id": "Jangkauan pada Ambang",
        "en": "Reach at Threshold"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah individu yang menerima terpaan minimal sebanyak ambang efektif.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "total_reach",
      "label": {
        "id": "Total Jangkauan",
        "en": "Total Reach"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jangkauan bersih seluruh kampanye.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "reach_pct",
      "label": {
        "id": "Jangkauan Persen",
        "en": "Reach Percent"
      },
      "unit_class": "percent",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 100,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jangkauan sebagai persentase populasi sasaran. Dipakai pada GRP.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": "%"
      }
    },
    {
      "id": "clicks",
      "label": {
        "id": "Total Klik",
        "en": "Clicks"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah klik pada tautan iklan atau konten.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "visitors",
      "label": {
        "id": "Total Pengunjung",
        "en": "Visitors"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah pengunjung yang masuk ke halaman tujuan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "unique_visitors",
      "label": {
        "id": "Pengunjung Unik",
        "en": "Unique Visitors"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah individu unik yang mengunjungi situs dalam satu periode.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "sessions",
      "label": {
        "id": "Total Sesi",
        "en": "Total Sessions"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah sesi kunjungan. Satu pengunjung dapat menghasilkan banyak sesi.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "single_page_sessions",
      "label": {
        "id": "Sesi Satu Halaman",
        "en": "Single Page Sessions"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Sesi yang berakhir tanpa interaksi kedua.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "engagements",
      "label": {
        "id": "Total Interaksi",
        "en": "Engagements"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Penjumlahan suka, komentar, bagikan, simpan, dan klik profil.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "followers",
      "label": {
        "id": "Total Pengikut",
        "en": "Followers"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah pengikut akun pada akhir periode.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "conversions",
      "label": {
        "id": "Total Konversi",
        "en": "Conversions"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah tindakan sasaran yang tercapai.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "acquisitions",
      "label": {
        "id": "Total Akuisisi",
        "en": "Acquisitions"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah pelanggan baru yang diperoleh dari kampanye.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "leads",
      "label": {
        "id": "Total Prospek",
        "en": "Leads"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah prospek yang menyerahkan data kontak.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "mql",
      "label": {
        "id": "Prospek Berkualitas Pemasaran",
        "en": "Marketing Qualified Leads"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Prospek yang lolos kriteria penilaian pemasaran.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "sql",
      "label": {
        "id": "Prospek Berkualitas Penjualan",
        "en": "Sales Qualified Leads"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Prospek yang diterima tim penjualan untuk ditindaklanjuti.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "carts_created",
      "label": {
        "id": "Keranjang Dibuat",
        "en": "Carts Created"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah keranjang belanja yang diisi sedikitnya satu barang.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "carts_purchased",
      "label": {
        "id": "Keranjang Diselesaikan",
        "en": "Carts Purchased"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah keranjang yang berakhir pada pembayaran berhasil.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "spend",
      "label": {
        "id": "Belanja Iklan",
        "en": "Ad Spend"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Belanja media murni, tidak termasuk gaji, perkakas, dan biaya produksi.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "ad_cost",
      "label": {
        "id": "Biaya Iklan",
        "en": "Ad Cost"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Biaya iklan yang dipakai sebagai penyebut ROAS.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "marketing_cost",
      "label": {
        "id": "Biaya Pemasaran",
        "en": "Marketing Cost"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Seluruh biaya pemasaran termasuk perkakas, produksi, dan jasa pihak ketiga.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "total_acquisition_cost",
      "label": {
        "id": "Total Biaya Akuisisi",
        "en": "Total Acquisition Cost"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Biaya penjualan dan pemasaran gabungan. Lingkup ini yang membedakan CAC dari CPA.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "cost",
      "label": {
        "id": "Biaya",
        "en": "Cost"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Biaya umum pada perhitungan ROI tingkat entitas.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "investment_0",
      "label": {
        "id": "Investasi Awal",
        "en": "Initial Investment"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pengeluaran modal pada periode nol.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "fixed_cost",
      "label": {
        "id": "Biaya Tetap",
        "en": "Fixed Cost"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Biaya yang tidak berubah terhadap volume dalam rentang relevan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "variable_cost",
      "label": {
        "id": "Biaya Variabel per Unit",
        "en": "Variable Cost per Unit"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Biaya yang melekat pada setiap unit tambahan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "cogs",
      "label": {
        "id": "Harga Pokok Penjualan",
        "en": "Cost of Goods Sold"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Biaya langsung yang melekat pada barang atau jasa yang terjual.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "revenue",
      "label": {
        "id": "Total Pendapatan",
        "en": "Revenue"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pendapatan kotor sebelum dikurangi biaya apa pun.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "ad_revenue",
      "label": {
        "id": "Pendapatan Teratribusi Iklan",
        "en": "Attributed Ad Revenue"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pendapatan yang diatribusikan kepada iklan menurut model atribusi yang dipakai.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "incremental_revenue",
      "label": {
        "id": "Pendapatan Inkremental",
        "en": "Incremental Revenue"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Selisih pendapatan kelompok perlakuan terhadap kelompok kendali. Hanya sahih bila ada desain uji.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "gain",
      "label": {
        "id": "Keuntungan Kotor",
        "en": "Gain"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai yang diperoleh sebelum dikurangi biaya, pada perhitungan ROI.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "net_profit",
      "label": {
        "id": "Laba Bersih",
        "en": "Net Profit"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Laba setelah seluruh biaya, termasuk biaya tetap dan pajak.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "price",
      "label": {
        "id": "Harga Jual per Unit",
        "en": "Unit Price"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Harga yang dibayarkan pelanggan per unit.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "deal_value",
      "label": {
        "id": "Nilai Rata-rata Transaksi",
        "en": "Average Deal Value"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai rata-rata satu kesepakatan penjualan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "pipeline_value",
      "label": {
        "id": "Nilai Pipeline",
        "en": "Pipeline Value"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Total nilai peluang terbuka pada saluran penjualan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "quota",
      "label": {
        "id": "Target Penjualan",
        "en": "Sales Quota"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Target pendapatan yang harus dicapai pada periode berjalan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "orders",
      "label": {
        "id": "Jumlah Pesanan",
        "en": "Orders"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah transaksi selesai dalam satu periode.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "users",
      "label": {
        "id": "Jumlah Pengguna",
        "en": "Users"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Seluruh pengguna aktif, berbayar maupun tidak.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "paying_users",
      "label": {
        "id": "Pengguna Berbayar",
        "en": "Paying Users"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Bagian dari pengguna yang menghasilkan pendapatan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "unique_customers",
      "label": {
        "id": "Pelanggan Unik",
        "en": "Unique Customers"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah individu berbeda yang bertransaksi dalam satu periode.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "customers",
      "label": {
        "id": "Jumlah Pelanggan",
        "en": "Customers"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah pelanggan pada konteks perhitungan yang bersangkutan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "new_customers",
      "label": {
        "id": "Pelanggan Baru",
        "en": "New Customers"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pelanggan yang pertama kali bertransaksi dalam periode berjalan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "start_customers",
      "label": {
        "id": "Pelanggan Awal Periode",
        "en": "Customers at Period Start"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah pelanggan aktif pada hari pertama periode.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "end_customers",
      "label": {
        "id": "Pelanggan Akhir Periode",
        "en": "Customers at Period End"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah pelanggan aktif pada hari terakhir periode.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "lost_customers",
      "label": {
        "id": "Pelanggan Hilang",
        "en": "Lost Customers"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pelanggan yang berhenti dalam periode berjalan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "subscribers",
      "label": {
        "id": "Jumlah Pelanggan Berlangganan",
        "en": "Subscribers"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah akun berlangganan aktif.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "start_mrr",
      "label": {
        "id": "MRR Awal Periode",
        "en": "Starting MRR"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pendapatan berulang bulanan pada awal periode.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "expansion_mrr",
      "label": {
        "id": "MRR Ekspansi",
        "en": "Expansion MRR"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Tambahan pendapatan dari pelanggan lama melalui peningkatan paket.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "contraction_mrr",
      "label": {
        "id": "MRR Kontraksi",
        "en": "Contraction MRR"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Penurunan pendapatan dari pelanggan lama yang menurunkan paket.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "churned_mrr",
      "label": {
        "id": "MRR Hilang",
        "en": "Churned MRR"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pendapatan yang hilang karena pelanggan berhenti sepenuhnya.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "total_mrr",
      "label": {
        "id": "Total MRR",
        "en": "Total MRR"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Basis MRR yang dipakai sebagai penyebut tingkat churn nilai.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "promoters",
      "label": {
        "id": "Jumlah Promotor",
        "en": "Promoters"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Responden yang memberi skor sembilan atau sepuluh.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "detractors",
      "label": {
        "id": "Jumlah Detraktor",
        "en": "Detractors"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Responden yang memberi skor nol sampai enam.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "total_respondents",
      "label": {
        "id": "Total Responden",
        "en": "Total Respondents"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 1,
        "max": null,
        "decimals": 0,
        "allow_zero": false,
        "nullable": true
      },
      "definition_id": "Seluruh responden yang menjawab, termasuk yang netral.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "satisfied_count",
      "label": {
        "id": "Jumlah Responden Puas",
        "en": "Satisfied Count"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Responden yang memilih kategori puas atau sangat puas.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "total_responses",
      "label": {
        "id": "Total Jawaban",
        "en": "Total Responses"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 1,
        "max": null,
        "decimals": 0,
        "allow_zero": false,
        "nullable": true
      },
      "definition_id": "Seluruh jawaban sah yang masuk.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "effort_sum",
      "label": {
        "id": "Jumlah Skor Upaya",
        "en": "Sum of Effort Scores"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Penjumlahan seluruh skor tingkat kesulitan yang dilaporkan responden.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "kano_a",
      "label": {
        "id": "Kano Menarik",
        "en": "Kano Attractive"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah responden yang mengkategorikan fitur sebagai menarik.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "kano_o",
      "label": {
        "id": "Kano Satu Dimensi",
        "en": "Kano One-Dimensional"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah responden yang mengkategorikan fitur sebagai kinerja utama.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "kano_m",
      "label": {
        "id": "Kano Wajib",
        "en": "Kano Must-Be"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah responden yang mengkategorikan fitur sebagai kebutuhan dasar.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "kano_i",
      "label": {
        "id": "Kano Netral",
        "en": "Kano Indifferent"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah responden yang tidak terpengaruh oleh keberadaan fitur.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "importance",
      "label": {
        "id": "Tingkat Kepentingan",
        "en": "Importance"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 10,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Skor kepentingan hasil tugas menurut pelanggan, skala nol sampai sepuluh.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "satisfaction",
      "label": {
        "id": "Tingkat Kepuasan",
        "en": "Satisfaction"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 10,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Skor kepuasan atas hasil tugas saat ini, skala nol sampai sepuluh.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "buyers_at_p",
      "label": {
        "id": "Pembeli pada Harga P",
        "en": "Buyers at Price P"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Responden yang menyatakan bersedia membeli pada titik harga yang diuji.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "too_cheap",
      "label": {
        "id": "Ambang Terlalu Murah",
        "en": "Too Cheap Threshold"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Harga yang membuat responden meragukan mutu produk.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "cheap",
      "label": {
        "id": "Ambang Murah",
        "en": "Cheap Threshold"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Harga yang dinilai menguntungkan namun masih wajar.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "expensive",
      "label": {
        "id": "Ambang Mahal",
        "en": "Expensive Threshold"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Harga yang dinilai mahal namun masih dipertimbangkan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "too_expensive",
      "label": {
        "id": "Ambang Terlalu Mahal",
        "en": "Too Expensive Threshold"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Harga yang membuat responden menolak membeli sama sekali.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "population",
      "label": {
        "id": "Populasi Sasaran",
        "en": "Target Population"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah seluruh individu atau lembaga dalam wilayah sasaran.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "need_percent",
      "label": {
        "id": "Persentase Berkebutuhan",
        "en": "Need Percent"
      },
      "unit_class": "percent",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 100,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Proporsi populasi yang benar benar memiliki kebutuhan yang dilayani produk.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": "%"
      }
    },
    {
      "id": "reachable_percent",
      "label": {
        "id": "Persentase Terjangkau",
        "en": "Reachable Percent"
      },
      "unit_class": "percent",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 100,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Proporsi TAM yang dapat dijangkau oleh model distribusi dan kanal yang dimiliki.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": "%"
      }
    },
    {
      "id": "capture_percent",
      "label": {
        "id": "Persentase Tertangkap",
        "en": "Capture Percent"
      },
      "unit_class": "percent",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 100,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Proporsi SAM yang realistis diraih dalam horizon perencanaan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": "%"
      }
    },
    {
      "id": "tam_population",
      "label": {
        "id": "Populasi TAM",
        "en": "TAM Population"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah individu dalam pasar total, dipakai sebagai penyebut tingkat penetrasi.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "company_sales",
      "label": {
        "id": "Penjualan Perusahaan",
        "en": "Company Sales"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai penjualan perusahaan dalam satu kategori dan periode.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "market_sales",
      "label": {
        "id": "Penjualan Pasar",
        "en": "Market Sales"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai penjualan seluruh pemain dalam kategori dan periode yang sama.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "company_share",
      "label": {
        "id": "Pangsa Perusahaan",
        "en": "Company Share"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pangsa pasar perusahaan dalam bentuk proporsi.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "largest_competitor_share",
      "label": {
        "id": "Pangsa Pesaing Terbesar",
        "en": "Largest Competitor Share"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pangsa pasar pesaing terbesar, bukan pangsa rata rata pesaing.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "brand_mentions",
      "label": {
        "id": "Sebutan Merek",
        "en": "Brand Mentions"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah penyebutan merek pada kanal yang dipantau.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "market_mentions",
      "label": {
        "id": "Sebutan Kategori",
        "en": "Category Mentions"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah penyebutan seluruh merek dalam kategori.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "brand_searches",
      "label": {
        "id": "Pencarian Merek",
        "en": "Brand Searches"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Volume pencarian kata kunci bermerek.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "category_searches",
      "label": {
        "id": "Pencarian Kategori",
        "en": "Category Searches"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Volume pencarian seluruh kata kunci kategori.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "q1",
      "label": {
        "id": "Kuantitas Awal",
        "en": "Quantity Before"
      },
      "unit_class": "count",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Kuantitas permintaan sebelum perubahan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "q2",
      "label": {
        "id": "Kuantitas Akhir",
        "en": "Quantity After"
      },
      "unit_class": "count",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Kuantitas permintaan setelah perubahan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "p1",
      "label": {
        "id": "Harga Awal",
        "en": "Price Before"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Harga sebelum perubahan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "p2",
      "label": {
        "id": "Harga Akhir",
        "en": "Price After"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Harga setelah perubahan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "qx1",
      "label": {
        "id": "Kuantitas Barang X Awal",
        "en": "Quantity of X Before"
      },
      "unit_class": "count",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Kuantitas barang X sebelum harga barang Y berubah.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "qx2",
      "label": {
        "id": "Kuantitas Barang X Akhir",
        "en": "Quantity of X After"
      },
      "unit_class": "count",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Kuantitas barang X setelah harga barang Y berubah.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "py1",
      "label": {
        "id": "Harga Barang Y Awal",
        "en": "Price of Y Before"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Harga barang pembanding sebelum perubahan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "py2",
      "label": {
        "id": "Harga Barang Y Akhir",
        "en": "Price of Y After"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Harga barang pembanding setelah perubahan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "i1",
      "label": {
        "id": "Pendapatan Awal",
        "en": "Income Before"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pendapatan konsumen sebelum perubahan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "i2",
      "label": {
        "id": "Pendapatan Akhir",
        "en": "Income After"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Pendapatan konsumen setelah perubahan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "bass_p",
      "label": {
        "id": "Koefisien Inovasi",
        "en": "Coefficient of Innovation"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 5,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Kecenderungan mengadopsi karena pengaruh luar seperti iklan. Nilai lazim 0,01 sampai 0,03.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "bass_q",
      "label": {
        "id": "Koefisien Imitasi",
        "en": "Coefficient of Imitation"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 2,
        "decimals": 5,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Kecenderungan mengadopsi karena pengaruh sesama pemakai. Nilai lazim 0,3 sampai 0,5.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "bass_m",
      "label": {
        "id": "Potensi Pasar Akhir",
        "en": "Ultimate Market Potential"
      },
      "unit_class": "count",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah pengadopsi total pada akhir siklus. Lazimnya diambil dari SOM atau SAM.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "bass_nt",
      "label": {
        "id": "Adopsi Kumulatif",
        "en": "Cumulative Adopters"
      },
      "unit_class": "count",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah pengadopsi sampai waktu t.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "time_t",
      "label": {
        "id": "Periode Waktu",
        "en": "Time Period"
      },
      "unit_class": "period",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Indeks waktu dalam satuan yang konsisten dengan parameter model.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "beta_vector",
      "label": {
        "id": "Vektor Koefisien",
        "en": "Coefficient Vector"
      },
      "unit_class": "vector",
      "value_kind": "array",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Koefisien utilitas parsial hasil estimasi konjoin.",
      "storage": {
        "precision": "float64",
        "serialize_as": "array"
      },
      "ui": {
        "widget": "vector_editor",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "x_vector",
      "label": {
        "id": "Vektor Tingkat Atribut",
        "en": "Attribute Level Vector"
      },
      "unit_class": "vector",
      "value_kind": "array",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Indikator tingkat atribut pada profil yang dievaluasi.",
      "storage": {
        "precision": "float64",
        "serialize_as": "array"
      },
      "ui": {
        "widget": "vector_editor",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "delta_u",
      "label": {
        "id": "Selisih Utilitas",
        "en": "Utility Difference"
      },
      "unit_class": "utils",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Selisih utilitas antara dua profil produk.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": "util"
      }
    },
    {
      "id": "beta_price",
      "label": {
        "id": "Koefisien Harga",
        "en": "Price Coefficient"
      },
      "unit_class": "utils",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": 0,
        "decimals": 5,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Koefisien harga hasil konjoin. Bernilai negatif pada model yang benar.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": "util"
      }
    },
    {
      "id": "w_vector",
      "label": {
        "id": "Vektor Bobot",
        "en": "Weight Vector"
      },
      "unit_class": "vector",
      "value_kind": "array",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Bobot kriteria. Penjumlahan seharusnya sama dengan satu.",
      "storage": {
        "precision": "float64",
        "serialize_as": "array"
      },
      "ui": {
        "widget": "vector_editor",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "r_vector",
      "label": {
        "id": "Vektor Skor",
        "en": "Rating Vector"
      },
      "unit_class": "vector",
      "value_kind": "array",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Skor alternatif pada setiap kriteria.",
      "storage": {
        "precision": "float64",
        "serialize_as": "array"
      },
      "ui": {
        "widget": "vector_editor",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "customer_importance",
      "label": {
        "id": "Vektor Kepentingan Pelanggan",
        "en": "Customer Importance Vector"
      },
      "unit_class": "vector",
      "value_kind": "array",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Bobot kepentingan kebutuhan pelanggan pada matriks QFD.",
      "storage": {
        "precision": "float64",
        "serialize_as": "array"
      },
      "ui": {
        "widget": "vector_editor",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "relationship_matrix",
      "label": {
        "id": "Matriks Relasi",
        "en": "Relationship Matrix"
      },
      "unit_class": "matrix",
      "value_kind": "array",
      "constraints": {
        "min": 0,
        "max": 9,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Kekuatan hubungan kebutuhan terhadap karakteristik teknis, lazimnya 0, 1, 3, atau 9.",
      "storage": {
        "precision": "float64",
        "serialize_as": "array"
      },
      "ui": {
        "widget": "vector_editor",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "rfm_r",
      "label": {
        "id": "Skor Kebaruan",
        "en": "Recency Score"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 1,
        "max": 5,
        "decimals": 2,
        "allow_zero": false,
        "nullable": true
      },
      "definition_id": "Skor kebaruan transaksi terakhir.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "rfm_f",
      "label": {
        "id": "Skor Frekuensi",
        "en": "Frequency Score"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 1,
        "max": 5,
        "decimals": 2,
        "allow_zero": false,
        "nullable": true
      },
      "definition_id": "Skor frekuensi transaksi.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "rfm_m",
      "label": {
        "id": "Skor Moneter",
        "en": "Monetary Score"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 1,
        "max": 5,
        "decimals": 2,
        "allow_zero": false,
        "nullable": true
      },
      "definition_id": "Skor nilai belanja kumulatif.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "rfm_wr",
      "label": {
        "id": "Bobot Kebaruan",
        "en": "Recency Weight"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 3,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Bobot untuk komponen kebaruan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "rfm_wf",
      "label": {
        "id": "Bobot Frekuensi",
        "en": "Frequency Weight"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 3,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Bobot untuk komponen frekuensi.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "rfm_wm",
      "label": {
        "id": "Bobot Moneter",
        "en": "Monetary Weight"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 3,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Bobot untuk komponen moneter.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "rice_reach",
      "label": {
        "id": "Jangkauan RICE",
        "en": "RICE Reach"
      },
      "unit_class": "count",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah pengguna yang terdampak per periode.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "rice_impact",
      "label": {
        "id": "Dampak RICE",
        "en": "RICE Impact"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 3,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Skor dampak, lazimnya 0,25 sampai 3.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "rice_confidence",
      "label": {
        "id": "Keyakinan RICE",
        "en": "RICE Confidence"
      },
      "unit_class": "percent",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 100,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Tingkat keyakinan atas estimasi, dalam persen.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": "%"
      }
    },
    {
      "id": "rice_effort",
      "label": {
        "id": "Usaha RICE",
        "en": "RICE Effort"
      },
      "unit_class": "person_month",
      "value_kind": "number",
      "constraints": {
        "min": 0.1,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Usaha dalam satuan orang bulan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": "orang-bulan"
      }
    },
    {
      "id": "user_value",
      "label": {
        "id": "Nilai bagi Pengguna",
        "en": "User Business Value"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Komponen nilai pada Cost of Delay.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "time_value",
      "label": {
        "id": "Nilai Kritikalitas Waktu",
        "en": "Time Criticality"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Seberapa cepat nilai meluruh bila ditunda.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "risk_reduction",
      "label": {
        "id": "Pengurangan Risiko",
        "en": "Risk Reduction Value"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai pembukaan peluang dan pengurangan ketidakpastian.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "job_size",
      "label": {
        "id": "Ukuran Pekerjaan",
        "en": "Job Size"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 0.1,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Estimasi ukuran relatif pekerjaan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "severity",
      "label": {
        "id": "Keparahan",
        "en": "Severity"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 1,
        "max": 10,
        "decimals": 0,
        "allow_zero": false,
        "nullable": true
      },
      "definition_id": "Skor keparahan dampak kegagalan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "occurrence",
      "label": {
        "id": "Kekerapan",
        "en": "Occurrence"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 1,
        "max": 10,
        "decimals": 0,
        "allow_zero": false,
        "nullable": true
      },
      "definition_id": "Skor kemungkinan terjadinya kegagalan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "detection",
      "label": {
        "id": "Deteksi",
        "en": "Detection"
      },
      "unit_class": "score",
      "value_kind": "number",
      "constraints": {
        "min": 1,
        "max": 10,
        "decimals": 0,
        "allow_zero": false,
        "nullable": true
      },
      "definition_id": "Skor kesulitan mendeteksi. Nilai tinggi berarti sulit terdeteksi.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "delta_value",
      "label": {
        "id": "Selisih Nilai",
        "en": "Value Delta"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai yang hilang atau diperoleh akibat pergeseran waktu.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "delta_time",
      "label": {
        "id": "Selisih Waktu",
        "en": "Time Delta"
      },
      "unit_class": "period",
      "value_kind": "number",
      "constraints": {
        "min": 0.01,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Durasi penundaan dalam satuan periode yang konsisten.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "cash_flows",
      "label": {
        "id": "Arus Kas",
        "en": "Cash Flow Series"
      },
      "unit_class": "vector",
      "value_kind": "array",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Deret arus kas bersih per periode, dimulai dari periode satu.",
      "storage": {
        "precision": "float64",
        "serialize_as": "array"
      },
      "ui": {
        "widget": "vector_editor",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "discount_rate",
      "label": {
        "id": "Tingkat Diskonto",
        "en": "Discount Rate"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Biaya modal per periode dalam bentuk desimal.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "horizon_t",
      "label": {
        "id": "Horizon Waktu",
        "en": "Time Horizon"
      },
      "unit_class": "period",
      "value_kind": "integer",
      "constraints": {
        "min": 1,
        "max": null,
        "decimals": 0,
        "allow_zero": false,
        "nullable": true
      },
      "definition_id": "Jumlah periode yang diperhitungkan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "prob_vector",
      "label": {
        "id": "Vektor Probabilitas",
        "en": "Probability Vector"
      },
      "unit_class": "vector",
      "value_kind": "array",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Probabilitas setiap keadaan. Penjumlahan harus sama dengan satu.",
      "storage": {
        "precision": "float64",
        "serialize_as": "array"
      },
      "ui": {
        "widget": "vector_editor",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "payoff_vector",
      "label": {
        "id": "Vektor Hasil",
        "en": "Payoff Vector"
      },
      "unit_class": "vector",
      "value_kind": "array",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai hasil pada setiap keadaan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "array"
      },
      "ui": {
        "widget": "vector_editor",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "ev_perfect",
      "label": {
        "id": "Nilai Harapan Informasi Sempurna",
        "en": "EV with Perfect Information"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai harapan bila keadaan diketahui sebelum memilih.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "ev_base",
      "label": {
        "id": "Nilai Harapan Dasar",
        "en": "EV of Base Decision"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai harapan keputusan terbaik tanpa informasi tambahan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "opt_s",
      "label": {
        "id": "Nilai Aset Mendasari",
        "en": "Underlying Asset Value"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai sekarang arus kas proyek bila diluncurkan sekarang.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "opt_x",
      "label": {
        "id": "Harga Pelaksanaan",
        "en": "Exercise Price"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Biaya investasi peluncuran penuh.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "opt_r",
      "label": {
        "id": "Suku Bunga Bebas Risiko",
        "en": "Risk-Free Rate"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Suku bunga bebas risiko per tahun.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "opt_t",
      "label": {
        "id": "Waktu Kedaluwarsa Opsi",
        "en": "Time to Expiry"
      },
      "unit_class": "period",
      "value_kind": "number",
      "constraints": {
        "min": 0.01,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Lama jendela keputusan dalam tahun.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "opt_sigma",
      "label": {
        "id": "Volatilitas",
        "en": "Volatility"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0.001,
        "max": null,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Simpangan baku pengembalian tahunan proyek.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "opportunities",
      "label": {
        "id": "Jumlah Peluang",
        "en": "Opportunities"
      },
      "unit_class": "count",
      "value_kind": "integer",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 0,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Jumlah peluang aktif dalam pipeline.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": ""
      }
    },
    {
      "id": "win_rate",
      "label": {
        "id": "Tingkat Kemenangan",
        "en": "Win Rate"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Proporsi peluang yang berakhir menang.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "cycle_length",
      "label": {
        "id": "Panjang Siklus",
        "en": "Sales Cycle Length"
      },
      "unit_class": "period",
      "value_kind": "number",
      "constraints": {
        "min": 0.01,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Rata rata durasi dari peluang dibuka sampai tertutup, dalam hari.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "forecast",
      "label": {
        "id": "Nilai Prakiraan",
        "en": "Forecast Value"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai yang diperkirakan sebelum periode berjalan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "actual",
      "label": {
        "id": "Nilai Aktual",
        "en": "Actual Value"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Nilai yang benar benar terealisasi.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "invites_per_user",
      "label": {
        "id": "Undangan per Pengguna",
        "en": "Invites per User"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Rata rata jumlah ajakan yang dikirim satu pengguna.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "invite_conversion",
      "label": {
        "id": "Konversi Undangan",
        "en": "Invite Conversion Rate"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Proporsi undangan yang berubah menjadi pengguna aktif.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "aov",
      "label": {
        "id": "Nilai Pesanan Rata-rata",
        "en": "Average Order Value"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus AOV yang menjadi masukan bagi CLV dan lainnya.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "arpu",
      "label": {
        "id": "Pendapatan Rata-rata per Pengguna",
        "en": "Average Revenue per User"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus ARPU yang menjadi masukan bagi MRR, CLV sederhana, TAM, dan Payback.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "purchase_frequency",
      "label": {
        "id": "Frekuensi Pembelian",
        "en": "Purchase Frequency"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 3,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus frekuensi pembelian yang menjadi masukan CLV.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "gross_margin",
      "label": {
        "id": "Marjin Kotor",
        "en": "Gross Margin"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus marjin kotor dalam bentuk desimal.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "churn_rate",
      "label": {
        "id": "Tingkat Churn",
        "en": "Churn Rate"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus churn yang menjadi masukan CLV sederhana.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "retention_rate",
      "label": {
        "id": "Tingkat Retensi",
        "en": "Retention Rate"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus retensi yang menjadi masukan CLV berhorizon.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "clv",
      "label": {
        "id": "Nilai Seumur Hidup Pelanggan",
        "en": "Customer Lifetime Value"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus CLV yang menjadi masukan rasio LTV terhadap CAC.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "cac",
      "label": {
        "id": "Biaya Akuisisi Pelanggan",
        "en": "Customer Acquisition Cost"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus CAC yang menjadi masukan rasio LTV terhadap CAC dan Payback.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "tam",
      "label": {
        "id": "Pasar Total",
        "en": "Total Addressable Market"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus TAM yang menjadi masukan SAM.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "sam",
      "label": {
        "id": "Pasar Terlayani",
        "en": "Serviceable Available Market"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus SAM yang menjadi masukan SOM.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "mrr",
      "label": {
        "id": "Pendapatan Berulang Bulanan",
        "en": "Monthly Recurring Revenue"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus MRR yang menjadi masukan ARR.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "conversion_rate",
      "label": {
        "id": "Tingkat Konversi",
        "en": "Conversion Rate"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 4,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus tingkat konversi.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "ctr_out",
      "label": {
        "id": "Tingkat Klik Tayang",
        "en": "Click-Through Rate"
      },
      "unit_class": "ratio",
      "value_kind": "number",
      "constraints": {
        "min": 0,
        "max": 1,
        "decimals": 6,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus CTR.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": false,
        "suffix": ""
      }
    },
    {
      "id": "npv_out",
      "label": {
        "id": "Nilai Sekarang Bersih",
        "en": "Net Present Value"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus NPV.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    },
    {
      "id": "ev_out",
      "label": {
        "id": "Nilai Harapan",
        "en": "Expected Value"
      },
      "unit_class": "currency",
      "value_kind": "number",
      "constraints": {
        "min": null,
        "max": null,
        "decimals": 2,
        "allow_zero": true,
        "nullable": true
      },
      "definition_id": "Keluaran rumus nilai harapan.",
      "storage": {
        "precision": "float64",
        "serialize_as": "number"
      },
      "ui": {
        "widget": "numeric_spinner",
        "step_hint": "auto",
        "thousand_separator": true,
        "suffix": "Rp"
      }
    }
  ],
  "formulas": [
    {
      "index": 1,
      "id": "ctr",
      "symbol": "CTR",
      "name": {
        "id": "Tingkat Klik Tayang",
        "en": "Click-Through Rate"
      },
      "slug": "ctr",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B3",
          "phase_name": {
            "id": "Ketertarikan dan Interaksi",
            "en": "Interest and Engagement"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D3",
          "domain_name": {
            "id": "Keputusan komunikasi dan pembelian media",
            "en": "Communication and media decisions"
          },
          "decision_owner": "Manajer Media",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 1,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Tingkat Klik Tayang. Menghubungkan 2 besaran masukan (clicks, impressions) menjadi satu angka yang menjawab keputusan komunikasi dan pembelian media pada fase ketertarikan dan interaksi. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Click-Through Rate. Combines 2 input quantities (clicks, impressions) into one number serving communication and media decisions at the interest and engagement phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CTR = \\dfrac{Clicks}{Impressions}",
        "javascript": "clicks / impressions",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "clicks",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "impressions",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "ctr_out",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "clicks",
          "javascript": "ctr_out * impressions",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "impressions",
          "javascript": "clicks / ctr_out",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.005,
          "label": "Rendah",
          "guidance_id": "Kreatif atau penargetan tidak relevan bagi audiens."
        },
        {
          "lower": 0.005,
          "upper": 0.02,
          "label": "Wajar",
          "guidance_id": "Berada pada rentang lazim kampanye display dan sosial."
        },
        {
          "lower": 0.02,
          "upper": 0.1,
          "label": "Baik",
          "guidance_id": "Relevansi pesan tinggi. Periksa apakah audiens terlalu sempit."
        },
        {
          "lower": 0.1,
          "upper": 1,
          "label": "Curiga",
          "guidance_id": "Periksa lalu lintas tidak sah atau penghitungan ganda."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "CTR tinggi tanpa kenaikan konversi menandakan janji kreatif tidak sesuai halaman tujuan."
        },
        {
          "source": "formula_specific",
          "description_id": "Membandingkan CTR lintas format iklan tanpa penyetaraan posisi tayang menghasilkan simpulan palsu."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "clicks": 1250,
          "impressions": 100000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_ctr",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B3",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "engagement_rate",
          "bounce_rate",
          "cpc",
          "cpl",
          "mql_to_sql_rate"
        ],
        "same_structural_class": [
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 2,
      "id": "conversion_rate",
      "symbol": "Conversion_Rate",
      "name": {
        "id": "Tingkat Konversi",
        "en": "Conversion Rate"
      },
      "slug": "conversion-rate",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B4",
          "phase_name": {
            "id": "Konversi dan Akuisisi",
            "en": "Conversion and Acquisition"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D4",
          "domain_name": {
            "id": "Keputusan saluran digital dan konversi",
            "en": "Digital channel and conversion decisions"
          },
          "decision_owner": "Manajer Pertumbuhan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 1,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Tingkat Konversi. Menghubungkan 2 besaran masukan (conversions, visitors) menjadi satu angka yang menjawab keputusan saluran digital dan konversi pada fase konversi dan akuisisi. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Conversion Rate. Combines 2 input quantities (conversions, visitors) into one number serving digital channel and conversion decisions at the conversion and acquisition phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CVR = \\dfrac{Conversions}{Visitors}",
        "javascript": "conversions / visitors",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "conversions",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "visitors",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "conversion_rate",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "conversions",
          "javascript": "conversion_rate * visitors",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "visitors",
          "javascript": "conversions / conversion_rate",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.01,
          "label": "Rendah",
          "guidance_id": "Periksa kecocokan penawaran dan hambatan pada formulir."
        },
        {
          "lower": 0.01,
          "upper": 0.03,
          "label": "Wajar",
          "guidance_id": "Rentang lazim ritel daring."
        },
        {
          "lower": 0.03,
          "upper": 0.1,
          "label": "Baik",
          "guidance_id": "Kecocokan penawaran kuat."
        },
        {
          "lower": 0.1,
          "upper": 1,
          "label": "Sangat tinggi",
          "guidance_id": "Lazim hanya pada audiens yang sudah sangat tersaring."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Penyebut harus pengunjung, bukan tayangan. Kekeliruan ini mengecilkan angka sepuluh kali lipat."
        },
        {
          "source": "formula_specific",
          "description_id": "Konversi mikro dan makro tidak boleh dijumlahkan dalam satu angka."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "conversions": 420,
          "visitors": 14000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_conversion_rate",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B4",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "cart_abandonment_rate",
          "cpa",
          "lead_to_customer_rate",
          "cac",
          "sales_velocity",
          "pipeline_coverage"
        ],
        "same_structural_class": [
          "ctr",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 3,
      "id": "engagement_rate",
      "symbol": "Engagement_Rate",
      "name": {
        "id": "Tingkat Interaksi",
        "en": "Engagement Rate"
      },
      "slug": "engagement-rate",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B3",
          "phase_name": {
            "id": "Ketertarikan dan Interaksi",
            "en": "Interest and Engagement"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D3",
          "domain_name": {
            "id": "Keputusan komunikasi dan pembelian media",
            "en": "Communication and media decisions"
          },
          "decision_owner": "Manajer Media",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 1,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Tingkat Interaksi. Menghubungkan 2 besaran masukan (engagements, followers) menjadi satu angka yang menjawab keputusan komunikasi dan pembelian media pada fase ketertarikan dan interaksi. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Engagement Rate. Combines 2 input quantities (engagements, followers) into one number serving communication and media decisions at the interest and engagement phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "ER = \\dfrac{Engagements}{Followers}",
        "javascript": "engagements / followers",
        "requires_helper": null,
        "alternate_forms": [
          {
            "key": "by_reach",
            "javascript": "engagements / reach",
            "note_id": "Varian berbasis jangkauan, lebih adil bagi akun besar."
          }
        ]
      },
      "inputs": [
        {
          "variable_id": "engagements",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "followers",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "engagements",
          "javascript": "result * followers",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "followers",
          "javascript": "engagements / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.01,
          "label": "Rendah",
          "guidance_id": "Konten tidak menjangkau bahkan pengikut sendiri."
        },
        {
          "lower": 0.01,
          "upper": 0.035,
          "label": "Wajar",
          "guidance_id": "Rentang lazim akun merek."
        },
        {
          "lower": 0.035,
          "upper": 0.08,
          "label": "Baik",
          "guidance_id": "Kelekatan audiens kuat."
        },
        {
          "lower": 0.08,
          "upper": 1,
          "label": "Luar biasa",
          "guidance_id": "Periksa apakah pengikut terlalu sedikit sehingga penyebut kecil."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Penyebut dapat berupa pengikut, jangkauan, atau tayangan. Tiga pilihan ini menghasilkan tiga angka berbeda dan tidak boleh dicampur."
        },
        {
          "source": "formula_specific",
          "description_id": "Pertumbuhan pengikut menurunkan angka ini meskipun jumlah interaksi naik."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "engagements": 2400,
          "followers": 85000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_engagement_rate",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B3",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "ctr",
          "bounce_rate",
          "cpc",
          "cpl",
          "mql_to_sql_rate"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 4,
      "id": "bounce_rate",
      "symbol": "Bounce_Rate",
      "name": {
        "id": "Tingkat Pentalan",
        "en": "Bounce Rate"
      },
      "slug": "bounce-rate",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B3",
          "phase_name": {
            "id": "Ketertarikan dan Interaksi",
            "en": "Interest and Engagement"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D4",
          "domain_name": {
            "id": "Keputusan saluran digital dan konversi",
            "en": "Digital channel and conversion decisions"
          },
          "decision_owner": "Manajer Pertumbuhan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 1,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Tingkat Pentalan. Menghubungkan 2 besaran masukan (single_page_sessions, sessions) menjadi satu angka yang menjawab keputusan saluran digital dan konversi pada fase ketertarikan dan interaksi. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Bounce Rate. Combines 2 input quantities (single_page_sessions, sessions) into one number serving digital channel and conversion decisions at the interest and engagement phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "BR = \\dfrac{SinglePageSessions}{TotalSessions}",
        "javascript": "single_page_sessions / sessions",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "single_page_sessions",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "sessions",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "single_page_sessions",
          "javascript": "result * sessions",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "sessions",
          "javascript": "single_page_sessions / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.3,
          "label": "Sangat rendah",
          "guidance_id": "Periksa pemasangan ganda kode pelacak."
        },
        {
          "lower": 0.3,
          "upper": 0.55,
          "label": "Baik",
          "guidance_id": "Halaman mendorong penjelajahan lanjutan."
        },
        {
          "lower": 0.55,
          "upper": 0.75,
          "label": "Wajar",
          "guidance_id": "Rentang lazim halaman arahan."
        },
        {
          "lower": 0.75,
          "upper": 1,
          "label": "Tinggi",
          "guidance_id": "Kecocokan kata kunci dan isi halaman perlu diperiksa."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Pentalan tinggi tidak selalu buruk. Halaman yang menjawab pertanyaan secara tuntas memang tidak memerlukan klik kedua."
        },
        {
          "source": "formula_specific",
          "description_id": "Pentalan nol persen hampir selalu berarti kesalahan teknis, bukan keberhasilan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "single_page_sessions": 6800,
          "sessions": 11000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_bounce_rate",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B3",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "ctr",
          "engagement_rate",
          "cpc",
          "cpl",
          "mql_to_sql_rate"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 5,
      "id": "cart_abandonment_rate",
      "symbol": "Cart_Abandonment_Rate",
      "name": {
        "id": "Tingkat Pengabaian Keranjang",
        "en": "Cart Abandonment Rate"
      },
      "slug": "cart-abandonment-rate",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B4",
          "phase_name": {
            "id": "Konversi dan Akuisisi",
            "en": "Conversion and Acquisition"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D4",
          "domain_name": {
            "id": "Keputusan saluran digital dan konversi",
            "en": "Digital channel and conversion decisions"
          },
          "decision_owner": "Manajer Pertumbuhan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 1,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Tingkat Pengabaian Keranjang. Menghubungkan 2 besaran masukan (carts_created, carts_purchased) menjadi satu angka yang menjawab keputusan saluran digital dan konversi pada fase konversi dan akuisisi. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Cart Abandonment Rate. Combines 2 input quantities (carts_created, carts_purchased) into one number serving digital channel and conversion decisions at the conversion and acquisition phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CAR = 1 - \\dfrac{CartsPurchased}{CartsCreated}",
        "javascript": "1 - (carts_purchased / carts_created)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "carts_created",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "carts_purchased",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "carts_purchased",
          "javascript": "carts_created * (1 - result)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "carts_created",
          "javascript": "carts_purchased / (1 - result)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.5,
          "label": "Sangat baik",
          "guidance_id": "Alur pembayaran sangat mulus."
        },
        {
          "lower": 0.5,
          "upper": 0.7,
          "label": "Baik",
          "guidance_id": "Di bawah rata rata industri."
        },
        {
          "lower": 0.7,
          "upper": 0.85,
          "label": "Wajar",
          "guidance_id": "Rentang lazim ritel daring."
        },
        {
          "lower": 0.85,
          "upper": 1,
          "label": "Kritis",
          "guidance_id": "Periksa biaya kirim tersembunyi dan kewajiban membuat akun."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Sebagian pengabaian adalah perilaku menyimpan barang untuk nanti, bukan kegagalan."
        },
        {
          "source": "formula_specific",
          "description_id": "Angka ini kerap menandakan cacat produk atau harga, bukan cacat kampanye. Rujuk domain keputusan produk."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "carts_created": 9500,
          "carts_purchased": 1900
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_cart_abandonment_rate",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B4",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "conversion_rate",
          "cpa",
          "lead_to_customer_rate",
          "cac",
          "sales_velocity",
          "pipeline_coverage"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 6,
      "id": "aov",
      "symbol": "AOV",
      "name": {
        "id": "Nilai Pesanan Rata-rata",
        "en": "Average Order Value"
      },
      "slug": "aov",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B5",
          "phase_name": {
            "id": "Monetisasi",
            "en": "Monetisation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 2,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Nilai Pesanan Rata-rata. Menghubungkan 2 besaran masukan (revenue, orders) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase monetisasi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata I pada tangga kecanggihan.",
        "en": "Average Order Value. Combines 2 input quantities (revenue, orders) into one number serving pricing and margin decisions at the monetisation phase. Structural class C2 (Unbounded intensity ratio), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "AOV = \\dfrac{Revenue}{Orders}",
        "javascript": "revenue / orders",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "revenue",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "orders",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "aov",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "revenue",
          "javascript": "aov * orders",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "orders",
          "javascript": "revenue / aov",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Nilai rata rata menyembunyikan sebaran. Sajikan median berdampingan bila distribusi menjulur."
        },
        {
          "source": "formula_specific",
          "description_id": "Pengembalian barang harus dikurangkan dari pendapatan, atau AOV akan terlalu tinggi."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "revenue": 185000000,
          "orders": 1480
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_aov",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B5",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "arpu",
          "arppu",
          "purchase_frequency",
          "gross_margin",
          "net_margin",
          "mrr",
          "arr"
        ],
        "same_structural_class": [
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": [
          "clv"
        ]
      }
    },
    {
      "index": 7,
      "id": "arpu",
      "symbol": "ARPU",
      "name": {
        "id": "Pendapatan Rata-rata per Pengguna",
        "en": "Average Revenue per User"
      },
      "slug": "arpu",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B5",
          "phase_name": {
            "id": "Monetisasi",
            "en": "Monetisation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 2,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Pendapatan Rata-rata per Pengguna. Menghubungkan 2 besaran masukan (revenue, users) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase monetisasi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata I pada tangga kecanggihan.",
        "en": "Average Revenue per User. Combines 2 input quantities (revenue, users) into one number serving customer, retention and loyalty decisions at the monetisation phase. Structural class C2 (Unbounded intensity ratio), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "ARPU = \\dfrac{Revenue}{Users}",
        "javascript": "revenue / users",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "revenue",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "users",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "arpu",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "revenue",
          "javascript": "arpu * users",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "users",
          "javascript": "revenue / arpu",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "ARPU memakai seluruh pengguna sebagai penyebut. Bila hanya pengguna berbayar yang dihitung, yang dihasilkan adalah ARPPU, bukan ARPU."
        },
        {
          "source": "formula_specific",
          "description_id": "ARPU pada perhitungan TAM adalah asumsi proyeksi, bukan angka aktual. Keduanya tidak boleh saling menggantikan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "revenue": 185000000,
          "users": 52000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_arpu",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B5",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "aov",
          "arppu",
          "purchase_frequency",
          "gross_margin",
          "net_margin",
          "mrr",
          "arr"
        ],
        "same_structural_class": [
          "aov",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": [
          "clv_simple",
          "mrr",
          "payback_period",
          "tam"
        ]
      }
    },
    {
      "index": 8,
      "id": "arppu",
      "symbol": "ARPPU",
      "name": {
        "id": "Pendapatan Rata-rata per Pengguna Berbayar",
        "en": "Average Revenue per Paying User"
      },
      "slug": "arppu",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B5",
          "phase_name": {
            "id": "Monetisasi",
            "en": "Monetisation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 2,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Pendapatan Rata-rata per Pengguna Berbayar. Menghubungkan 2 besaran masukan (revenue, paying_users) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase monetisasi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata I pada tangga kecanggihan.",
        "en": "Average Revenue per Paying User. Combines 2 input quantities (revenue, paying_users) into one number serving pricing and margin decisions at the monetisation phase. Structural class C2 (Unbounded intensity ratio), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "ARPPU = \\dfrac{Revenue}{PayingUsers}",
        "javascript": "revenue / paying_users",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "revenue",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "paying_users",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "revenue",
          "javascript": "result * paying_users",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "paying_users",
          "javascript": "revenue / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Rasio ARPPU terhadap ARPU adalah kebalikan tingkat konversi berbayar. Hubungan ini berguna sebagai pemeriksaan silang."
        },
        {
          "source": "formula_specific",
          "description_id": "Kenaikan ARPPU yang disertai penurunan ARPU menandakan basis pengguna gratis membengkak tanpa monetisasi."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "revenue": 185000000,
          "paying_users": 7300
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_arppu",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B5",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "aov",
          "arpu",
          "purchase_frequency",
          "gross_margin",
          "net_margin",
          "mrr",
          "arr"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 9,
      "id": "purchase_frequency",
      "symbol": "Purchase_Frequency",
      "name": {
        "id": "Frekuensi Pembelian",
        "en": "Purchase Frequency"
      },
      "slug": "purchase-frequency",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B5",
          "phase_name": {
            "id": "Monetisasi",
            "en": "Monetisation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 2,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Frekuensi Pembelian. Menghubungkan 2 besaran masukan (orders, unique_customers) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase monetisasi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata I pada tangga kecanggihan.",
        "en": "Purchase Frequency. Combines 2 input quantities (orders, unique_customers) into one number serving customer, retention and loyalty decisions at the monetisation phase. Structural class C2 (Unbounded intensity ratio), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "PF = \\dfrac{Orders}{UniqueCustomers}",
        "javascript": "orders / unique_customers",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "orders",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "unique_customers",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "purchase_frequency",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "orders",
          "javascript": "purchase_frequency * unique_customers",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "unique_customers",
          "javascript": "orders / purchase_frequency",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 1.2,
          "label": "Sekali beli",
          "guidance_id": "Model bisnis bergantung pada akuisisi terus menerus."
        },
        {
          "lower": 1.2,
          "upper": 2.5,
          "label": "Berulang lemah",
          "guidance_id": "Ada pengulangan namun belum menjadi kebiasaan."
        },
        {
          "lower": 2.5,
          "upper": 6,
          "label": "Berulang kuat",
          "guidance_id": "Basis pelanggan memiliki kebiasaan membeli."
        },
        {
          "lower": 6,
          "upper": 1000,
          "label": "Sangat sering",
          "guidance_id": "Lazim pada kategori konsumsi harian."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Frekuensi harus dihitung pada jendela waktu yang sama dengan CLV, atau nilai seumur hidup akan salah skala."
        },
        {
          "source": "formula_specific",
          "description_id": "Pelanggan baru yang masuk di akhir periode menurunkan angka ini secara artifisial."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "orders": 1480,
          "unique_customers": 620
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_purchase_frequency",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B5",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "aov",
          "arpu",
          "arppu",
          "gross_margin",
          "net_margin",
          "mrr",
          "arr"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": [
          "clv"
        ]
      }
    },
    {
      "index": 10,
      "id": "cpm",
      "symbol": "CPM",
      "name": {
        "id": "Biaya per Seribu Tayangan",
        "en": "Cost per Mille"
      },
      "slug": "cpm",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B2",
          "phase_name": {
            "id": "Eksposur dan Kesadaran",
            "en": "Exposure and Awareness"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D3",
          "domain_name": {
            "id": "Keputusan komunikasi dan pembelian media",
            "en": "Communication and media decisions"
          },
          "decision_owner": "Manajer Media",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 2,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Biaya per Seribu Tayangan. Menghubungkan 2 besaran masukan (spend, impressions) menjadi satu angka yang menjawab keputusan komunikasi dan pembelian media pada fase eksposur dan kesadaran. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata I pada tangga kecanggihan.",
        "en": "Cost per Mille. Combines 2 input quantities (spend, impressions) into one number serving communication and media decisions at the exposure and awareness phase. Structural class C2 (Unbounded intensity ratio), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CPM = \\dfrac{Spend}{Impressions} \\times 1000",
        "javascript": "(spend / impressions) * 1000",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "spend",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "impressions",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "spend",
          "javascript": "result * impressions / 1000",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "impressions",
          "javascript": "spend * 1000 / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Faktor seribu kerap terlupa, menghasilkan angka yang keliru seribu kali lipat."
        },
        {
          "source": "formula_specific",
          "description_id": "CPM naik ketika audiens dipersempit. Kenaikan CPM karena itu belum tentu pemborosan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "spend": 24000000,
          "impressions": 3200000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_cpm",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B2",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "sov",
          "sos",
          "grp",
          "net_reach",
          "effective_frequency"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 11,
      "id": "cpc",
      "symbol": "CPC",
      "name": {
        "id": "Biaya per Klik",
        "en": "Cost per Click"
      },
      "slug": "cpc",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B3",
          "phase_name": {
            "id": "Ketertarikan dan Interaksi",
            "en": "Interest and Engagement"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D3",
          "domain_name": {
            "id": "Keputusan komunikasi dan pembelian media",
            "en": "Communication and media decisions"
          },
          "decision_owner": "Manajer Media",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 2,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Biaya per Klik. Menghubungkan 2 besaran masukan (spend, clicks) menjadi satu angka yang menjawab keputusan komunikasi dan pembelian media pada fase ketertarikan dan interaksi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata I pada tangga kecanggihan.",
        "en": "Cost per Click. Combines 2 input quantities (spend, clicks) into one number serving communication and media decisions at the interest and engagement phase. Structural class C2 (Unbounded intensity ratio), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CPC = \\dfrac{Spend}{Clicks}",
        "javascript": "spend / clicks",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "spend",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "clicks",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "spend",
          "javascript": "result * clicks",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "clicks",
          "javascript": "spend / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "CPC adalah hasil bagi CPM terhadap CTR. Menurunkan CPC dapat dicapai lewat kreatif, bukan hanya lewat tawaran."
        },
        {
          "source": "formula_specific",
          "description_id": "CPC murah pada audiens yang tidak pernah membeli adalah pemborosan yang tampak efisien."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "spend": 24000000,
          "clicks": 41600
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_cpc",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B3",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "ctr",
          "engagement_rate",
          "bounce_rate",
          "cpl",
          "mql_to_sql_rate"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 12,
      "id": "cpl",
      "symbol": "CPL",
      "name": {
        "id": "Biaya per Prospek",
        "en": "Cost per Lead"
      },
      "slug": "cpl",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B3",
          "phase_name": {
            "id": "Ketertarikan dan Interaksi",
            "en": "Interest and Engagement"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D3",
          "domain_name": {
            "id": "Keputusan komunikasi dan pembelian media",
            "en": "Communication and media decisions"
          },
          "decision_owner": "Manajer Media",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 2,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Biaya per Prospek. Menghubungkan 2 besaran masukan (spend, leads) menjadi satu angka yang menjawab keputusan komunikasi dan pembelian media pada fase ketertarikan dan interaksi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata I pada tangga kecanggihan.",
        "en": "Cost per Lead. Combines 2 input quantities (spend, leads) into one number serving communication and media decisions at the interest and engagement phase. Structural class C2 (Unbounded intensity ratio), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CPL = \\dfrac{Spend}{Leads}",
        "javascript": "spend / leads",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "spend",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "leads",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "spend",
          "javascript": "result * leads",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "leads",
          "javascript": "spend / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Definisi prospek harus tertulis. Tanpa itu CPL antartim tidak dapat dibandingkan."
        },
        {
          "source": "formula_specific",
          "description_id": "Menurunkan CPL dengan melonggarkan definisi prospek memindahkan biaya ke tim penjualan, bukan menghapusnya."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "spend": 24000000,
          "leads": 960
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_cpl",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B3",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "ctr",
          "engagement_rate",
          "bounce_rate",
          "cpc",
          "mql_to_sql_rate"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 13,
      "id": "cpa",
      "symbol": "CPA",
      "name": {
        "id": "Biaya per Akuisisi",
        "en": "Cost per Acquisition"
      },
      "slug": "cpa",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B4",
          "phase_name": {
            "id": "Konversi dan Akuisisi",
            "en": "Conversion and Acquisition"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D4",
          "domain_name": {
            "id": "Keputusan saluran digital dan konversi",
            "en": "Digital channel and conversion decisions"
          },
          "decision_owner": "Manajer Pertumbuhan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 2,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Biaya per Akuisisi. Menghubungkan 2 besaran masukan (spend, acquisitions) menjadi satu angka yang menjawab keputusan saluran digital dan konversi pada fase konversi dan akuisisi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata I pada tangga kecanggihan.",
        "en": "Cost per Acquisition. Combines 2 input quantities (spend, acquisitions) into one number serving digital channel and conversion decisions at the conversion and acquisition phase. Structural class C2 (Unbounded intensity ratio), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CPA = \\dfrac{Spend}{Acquisitions}",
        "javascript": "spend / acquisitions",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "spend",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "acquisitions",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "spend",
          "javascript": "result * acquisitions",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "acquisitions",
          "javascript": "spend / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "CPA memakai belanja kampanye. CAC memakai seluruh biaya penjualan dan pemasaran. Menyamakan keduanya adalah kekeliruan paling sering dalam pelaporan."
        },
        {
          "source": "formula_specific",
          "description_id": "CPA hanya bermakna bila dibandingkan dengan marjin kontribusi per pelanggan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "spend": 24000000,
          "acquisitions": 312
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_cpa",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B4",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "conversion_rate",
          "cart_abandonment_rate",
          "lead_to_customer_rate",
          "cac",
          "sales_velocity",
          "pipeline_coverage"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 14,
      "id": "churn_rate",
      "symbol": "Churn_Rate",
      "name": {
        "id": "Tingkat Berhenti Pelanggan",
        "en": "Churn Rate"
      },
      "slug": "churn-rate",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 4,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Tingkat Berhenti Pelanggan. Menghubungkan 2 besaran masukan (lost_customers, start_customers) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase retensi dan ekspansi. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Churn Rate. Combines 2 input quantities (lost_customers, start_customers) into one number serving customer, retention and loyalty decisions at the retention and expansion phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "Churn = \\dfrac{LostCustomers}{StartCustomers}",
        "javascript": "lost_customers / start_customers",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "lost_customers",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "start_customers",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "churn_rate",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "lost_customers",
          "javascript": "churn_rate * start_customers",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "start_customers",
          "javascript": "lost_customers / churn_rate",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.02,
          "label": "Sangat baik",
          "guidance_id": "Basis pelanggan sangat lekat."
        },
        {
          "lower": 0.02,
          "upper": 0.05,
          "label": "Baik",
          "guidance_id": "Rentang sehat bagi langganan bulanan."
        },
        {
          "lower": 0.05,
          "upper": 0.1,
          "label": "Waspada",
          "guidance_id": "Nilai seumur hidup tertekan."
        },
        {
          "lower": 0.1,
          "upper": 1,
          "label": "Kritis",
          "guidance_id": "Akuisisi tidak akan mampu mengejar kebocoran."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Churn bulanan tidak dikalikan dua belas untuk memperoleh churn tahunan. Gunakan satu dikurangi retensi bulanan pangkat dua belas."
        },
        {
          "source": "formula_specific",
          "description_id": "Pelanggan baru yang masuk di tengah periode tidak boleh masuk ke penyebut."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "lost_customers": 38,
          "start_customers": 940
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_churn_rate",
        "unlocks_after_module": 3,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "retention_rate",
          "csat",
          "ces",
          "mrr_churn_rate",
          "payback_period",
          "clv_simple",
          "clv",
          "rfm_score",
          "gdr",
          "ndr"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": [
          "clv_simple"
        ]
      }
    },
    {
      "index": 15,
      "id": "retention_rate",
      "symbol": "Retention_Rate",
      "name": {
        "id": "Tingkat Retensi Pelanggan",
        "en": "Retention Rate"
      },
      "slug": "retention-rate",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 4,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Tingkat Retensi Pelanggan. Menghubungkan 3 besaran masukan (end_customers, new_customers, start_customers) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase retensi dan ekspansi. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Retention Rate. Combines 3 input quantities (end_customers, new_customers, start_customers) into one number serving customer, retention and loyalty decisions at the retention and expansion phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "RR = \\dfrac{EndCustomers - NewCustomers}{StartCustomers}",
        "javascript": "(end_customers - new_customers) / start_customers",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "end_customers",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "new_customers",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "start_customers",
          "role": "operand",
          "required": true,
          "position": 2
        }
      ],
      "output": {
        "canonical_variable_id": "retention_rate",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "end_customers",
          "javascript": "retention_rate * start_customers + new_customers",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "new_customers",
          "javascript": "end_customers - retention_rate * start_customers",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "start_customers",
          "javascript": "(end_customers - new_customers) / retention_rate",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.7,
          "label": "Rendah",
          "guidance_id": "Model bisnis bergantung pada akuisisi tanpa henti."
        },
        {
          "lower": 0.7,
          "upper": 0.9,
          "label": "Wajar",
          "guidance_id": "Ada basis yang bertahan namun kebocoran nyata."
        },
        {
          "lower": 0.9,
          "upper": 0.98,
          "label": "Baik",
          "guidance_id": "Rentang sehat langganan bulanan."
        },
        {
          "lower": 0.98,
          "upper": 1,
          "label": "Sangat baik",
          "guidance_id": "Periksa apakah definisi aktif terlalu longgar."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Pengurangan pelanggan baru pada pembilang adalah inti rumus ini. Tanpa itu pertumbuhan menyamarkan kebocoran."
        },
        {
          "source": "formula_specific",
          "description_id": "Retensi dan churn berjumlah satu hanya bila basis penyebutnya sama persis."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "end_customers": 1015,
          "new_customers": 113,
          "start_customers": 940
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_retention_rate",
        "unlocks_after_module": 3,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "churn_rate",
          "csat",
          "ces",
          "mrr_churn_rate",
          "payback_period",
          "clv_simple",
          "clv",
          "rfm_score",
          "gdr",
          "ndr"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": [
          "clv"
        ]
      }
    },
    {
      "index": 16,
      "id": "mql_to_sql_rate",
      "symbol": "MQL_to_SQL_Rate",
      "name": {
        "id": "Tingkat MQL ke SQL",
        "en": "MQL to SQL Rate"
      },
      "slug": "mql-to-sql-rate",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B3",
          "phase_name": {
            "id": "Ketertarikan dan Interaksi",
            "en": "Interest and Engagement"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D6",
          "domain_name": {
            "id": "Keputusan penjualan dan pipeline",
            "en": "Sales and pipeline decisions"
          },
          "decision_owner": "Manajer Penjualan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 1,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Tingkat MQL ke SQL. Menghubungkan 2 besaran masukan (sql, mql) menjadi satu angka yang menjawab keputusan penjualan dan pipeline pada fase ketertarikan dan interaksi. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "MQL to SQL Rate. Combines 2 input quantities (sql, mql) into one number serving sales and pipeline decisions at the interest and engagement phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "M2S = \\dfrac{SQL}{MQL}",
        "javascript": "sql / mql",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "sql",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "mql",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "sql",
          "javascript": "result * mql",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "mql",
          "javascript": "sql / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.1,
          "label": "Rendah",
          "guidance_id": "Kriteria penilaian pemasaran terlalu longgar."
        },
        {
          "lower": 0.1,
          "upper": 0.3,
          "label": "Wajar",
          "guidance_id": "Rentang lazim penjualan berbasis prospek."
        },
        {
          "lower": 0.3,
          "upper": 0.6,
          "label": "Baik",
          "guidance_id": "Keselarasan pemasaran dan penjualan kuat."
        },
        {
          "lower": 0.6,
          "upper": 1,
          "label": "Sangat tinggi",
          "guidance_id": "Periksa apakah kriteria MQL terlalu ketat sehingga volume hilang."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Angka rendah bukan selalu kegagalan pemasaran. Dapat pula berarti tim penjualan menolak prospek karena kapasitas."
        },
        {
          "source": "formula_specific",
          "description_id": "Tanpa kesepakatan definisi tertulis antara dua tim, metrik ini menjadi alat saling menyalahkan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "sql": 168,
          "mql": 840
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_mql_to_sql_rate",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B3",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "ctr",
          "engagement_rate",
          "bounce_rate",
          "cpc",
          "cpl"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 17,
      "id": "lead_to_customer_rate",
      "symbol": "Lead_to_Customer_Rate",
      "name": {
        "id": "Tingkat Prospek ke Pelanggan",
        "en": "Lead to Customer Rate"
      },
      "slug": "lead-to-customer-rate",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B4",
          "phase_name": {
            "id": "Konversi dan Akuisisi",
            "en": "Conversion and Acquisition"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D6",
          "domain_name": {
            "id": "Keputusan penjualan dan pipeline",
            "en": "Sales and pipeline decisions"
          },
          "decision_owner": "Manajer Penjualan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 1,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Tingkat Prospek ke Pelanggan. Menghubungkan 2 besaran masukan (customers, leads) menjadi satu angka yang menjawab keputusan penjualan dan pipeline pada fase konversi dan akuisisi. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Lead to Customer Rate. Combines 2 input quantities (customers, leads) into one number serving sales and pipeline decisions at the conversion and acquisition phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "L2C = \\dfrac{Customers}{Leads}",
        "javascript": "customers / leads",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "customers",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "leads",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "customers",
          "javascript": "result * leads",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "leads",
          "javascript": "customers / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.05,
          "label": "Rendah",
          "guidance_id": "Kualitas prospek atau proses tindak lanjut lemah."
        },
        {
          "lower": 0.05,
          "upper": 0.15,
          "label": "Wajar",
          "guidance_id": "Rentang lazim."
        },
        {
          "lower": 0.15,
          "upper": 0.4,
          "label": "Baik",
          "guidance_id": "Prospek tersaring dengan baik."
        },
        {
          "lower": 0.4,
          "upper": 1,
          "label": "Sangat tinggi",
          "guidance_id": "Volume prospek kemungkinan terlalu kecil."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Jeda waktu antara prospek masuk dan pelanggan jadi membuat perhitungan per bulan kalender menyesatkan. Gunakan analisis kohort."
        },
        {
          "source": "formula_specific",
          "description_id": "Prospek dari kanal berbeda memiliki tingkat konversi berbeda. Angka gabungan menyembunyikan ini."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "customers": 92,
          "leads": 840
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_lead_to_customer_rate",
        "unlocks_after_module": 1,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B4",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "conversion_rate",
          "cart_abandonment_rate",
          "cpa",
          "cac",
          "sales_velocity",
          "pipeline_coverage"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 18,
      "id": "market_share",
      "symbol": "Market_Share",
      "name": {
        "id": "Pangsa Pasar",
        "en": "Market Share"
      },
      "slug": "market-share",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D7",
          "domain_name": {
            "id": "Keputusan pasar sasaran dan posisi kompetitif",
            "en": "Target market and positioning decisions"
          },
          "decision_owner": "Direktur Strategi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 7,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Pangsa Pasar. Menghubungkan 2 besaran masukan (company_sales, market_sales) menjadi satu angka yang menjawab keputusan pasar sasaran dan posisi kompetitif pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Market Share. Combines 2 input quantities (company_sales, market_sales) into one number serving target market and positioning decisions at the market definition and understanding phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "MS = \\dfrac{CompanySales}{MarketSales}",
        "javascript": "company_sales / market_sales",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "company_sales",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "market_sales",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "company_share",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "company_sales",
          "javascript": "company_share * market_sales",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "market_sales",
          "javascript": "company_sales / company_share",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.05,
          "label": "Pemain kecil",
          "guidance_id": "Strategi ceruk lazimnya lebih tepat daripada konfrontasi langsung."
        },
        {
          "lower": 0.05,
          "upper": 0.15,
          "label": "Penantang",
          "guidance_id": "Pertumbuhan pangsa masih mungkin melalui diferensiasi."
        },
        {
          "lower": 0.15,
          "upper": 0.4,
          "label": "Pemimpin bersama",
          "guidance_id": "Perhatikan pangsa relatif terhadap pesaing terbesar."
        },
        {
          "lower": 0.4,
          "upper": 1,
          "label": "Dominan",
          "guidance_id": "Pertumbuhan lebih mudah diperoleh dari perluasan kategori."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Definisi pasar menentukan hasil. Mempersempit definisi adalah cara termudah membuat pangsa tampak besar."
        },
        {
          "source": "formula_specific",
          "description_id": "Pangsa berbasis nilai dan pangsa berbasis volume dapat bergerak berlawanan arah pada kategori dengan disparitas harga."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "company_sales": 4200000000,
          "market_sales": 38000000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_market_share",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "penetration_rate",
          "sov",
          "sos"
        ],
        "same_phase": [
          "penetration_rate",
          "relative_market_share",
          "tam",
          "sam",
          "som",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity",
          "bass_f",
          "bass_n"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": [
          "relative_market_share"
        ]
      }
    },
    {
      "index": 19,
      "id": "penetration_rate",
      "symbol": "Penetration_Rate",
      "name": {
        "id": "Tingkat Penetrasi",
        "en": "Penetration Rate"
      },
      "slug": "penetration-rate",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D7",
          "domain_name": {
            "id": "Keputusan pasar sasaran dan posisi kompetitif",
            "en": "Target market and positioning decisions"
          },
          "decision_owner": "Direktur Strategi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 7,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Tingkat Penetrasi. Menghubungkan 2 besaran masukan (customers, tam_population) menjadi satu angka yang menjawab keputusan pasar sasaran dan posisi kompetitif pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Penetration Rate. Combines 2 input quantities (customers, tam_population) into one number serving target market and positioning decisions at the market definition and understanding phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "PR = \\dfrac{Customers}{TAMPopulation}",
        "javascript": "customers / tam_population",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "customers",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "tam_population",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "customers",
          "javascript": "result * tam_population",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "tam_population",
          "javascript": "customers / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.01,
          "label": "Awal",
          "guidance_id": "Pasar masih hampir seluruhnya belum tersentuh."
        },
        {
          "lower": 0.01,
          "upper": 0.1,
          "label": "Bertumbuh",
          "guidance_id": "Ruang pertumbuhan masih sangat besar."
        },
        {
          "lower": 0.1,
          "upper": 0.35,
          "label": "Matang awal",
          "guidance_id": "Pertumbuhan mulai menuntut biaya akuisisi lebih tinggi."
        },
        {
          "lower": 0.35,
          "upper": 1,
          "label": "Jenuh",
          "guidance_id": "Prioritas bergeser ke retensi dan perluasan nilai per pelanggan."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Penyebut harus populasi yang benar benar berkebutuhan, bukan seluruh penduduk wilayah."
        },
        {
          "source": "formula_specific",
          "description_id": "Penetrasi rendah dapat berarti peluang besar atau dapat berarti pasar tidak menginginkan produk. Rumus ini tidak membedakan keduanya."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "customers": 6200,
          "tam_population": 410000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_penetration_rate",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "sov",
          "sos"
        ],
        "same_phase": [
          "market_share",
          "relative_market_share",
          "tam",
          "sam",
          "som",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity",
          "bass_f",
          "bass_n"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 20,
      "id": "sov",
      "symbol": "SOV",
      "name": {
        "id": "Pangsa Suara",
        "en": "Share of Voice"
      },
      "slug": "sov",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B2",
          "phase_name": {
            "id": "Eksposur dan Kesadaran",
            "en": "Exposure and Awareness"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D3",
          "domain_name": {
            "id": "Keputusan komunikasi dan pembelian media",
            "en": "Communication and media decisions"
          },
          "decision_owner": "Manajer Media",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 7,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Pangsa Suara. Menghubungkan 2 besaran masukan (brand_mentions, market_mentions) menjadi satu angka yang menjawab keputusan komunikasi dan pembelian media pada fase eksposur dan kesadaran. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Share of Voice. Combines 2 input quantities (brand_mentions, market_mentions) into one number serving communication and media decisions at the exposure and awareness phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "SOV = \\dfrac{BrandMentions}{MarketMentions}",
        "javascript": "brand_mentions / market_mentions",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "brand_mentions",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "market_mentions",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "brand_mentions",
          "javascript": "result * market_mentions",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "market_mentions",
          "javascript": "brand_mentions / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.05,
          "label": "Nyaris tidak terdengar",
          "guidance_id": "Merek belum masuk percakapan kategori."
        },
        {
          "lower": 0.05,
          "upper": 0.15,
          "label": "Hadir",
          "guidance_id": "Merek dikenal namun bukan rujukan utama."
        },
        {
          "lower": 0.15,
          "upper": 0.35,
          "label": "Menonjol",
          "guidance_id": "Merek menjadi salah satu rujukan kategori."
        },
        {
          "lower": 0.35,
          "upper": 1,
          "label": "Dominan",
          "guidance_id": "Periksa apakah sebagian sebutan bernada negatif."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Rumus ini menghitung volume, bukan sentimen. Krisis reputasi menaikkan SOV."
        },
        {
          "source": "formula_specific",
          "description_id": "Selisih SOV terhadap pangsa pasar adalah indikator arah pertumbuhan yang berguna, namun bukan bagian dari rumus ini."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "brand_mentions": 4800,
          "market_mentions": 52000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_sov",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B2",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sos"
        ],
        "same_phase": [
          "cpm",
          "sos",
          "grp",
          "net_reach",
          "effective_frequency"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 21,
      "id": "sos",
      "symbol": "SOS",
      "name": {
        "id": "Pangsa Pencarian",
        "en": "Share of Search"
      },
      "slug": "sos",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "I",
          "stratum_name": {
            "id": "Rasio Operasional Dasar",
            "en": "Basic Operational Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B2",
          "phase_name": {
            "id": "Eksposur dan Kesadaran",
            "en": "Exposure and Awareness"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D3",
          "domain_name": {
            "id": "Keputusan komunikasi dan pembelian media",
            "en": "Communication and media decisions"
          },
          "decision_owner": "Manajer Media",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 7,
        "dashboard_tier": "operational",
        "reporting_cadence": "harian ke mingguan"
      },
      "definition": {
        "id": "Pangsa Pencarian. Menghubungkan 2 besaran masukan (brand_searches, category_searches) menjadi satu angka yang menjawab keputusan komunikasi dan pembelian media pada fase eksposur dan kesadaran. Termasuk kelas struktur C1 (Proporsi terbatas), strata I pada tangga kecanggihan.",
        "en": "Share of Search. Combines 2 input quantities (brand_searches, category_searches) into one number serving communication and media decisions at the exposure and awareness phase. Structural class C1 (Bounded proportion), stratum I.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "SOS = \\dfrac{BrandSearches}{CategorySearches}",
        "javascript": "brand_searches / category_searches",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "brand_searches",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "category_searches",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "brand_searches",
          "javascript": "result * category_searches",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "category_searches",
          "javascript": "brand_searches / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.05,
          "label": "Rendah",
          "guidance_id": "Permintaan bermerek belum terbentuk."
        },
        {
          "lower": 0.05,
          "upper": 0.2,
          "label": "Bertumbuh",
          "guidance_id": "Merek mulai dicari secara langsung."
        },
        {
          "lower": 0.2,
          "upper": 0.45,
          "label": "Kuat",
          "guidance_id": "Permintaan bermerek menopang penjualan."
        },
        {
          "lower": 0.45,
          "upper": 1,
          "label": "Sangat kuat",
          "guidance_id": "Merek nyaris identik dengan kategori."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "SOS cenderung mendahului pangsa pasar beberapa bulan. Itulah nilai utamanya, dan itu pula sebabnya angka ini tidak boleh dibandingkan dengan pangsa pasar periode yang sama."
        },
        {
          "source": "formula_specific",
          "description_id": "Kampanye berbayar meningkatkan pencarian bermerek untuk sementara. Pisahkan periode kampanye saat menafsirkan tren."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "brand_searches": 27000,
          "category_searches": 310000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 10,
        "xp_award_repeat": 2,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_sos",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B2",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov"
        ],
        "same_phase": [
          "cpm",
          "sov",
          "grp",
          "net_reach",
          "effective_frequency"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 22,
      "id": "csat",
      "symbol": "CSAT",
      "name": {
        "id": "Skor Kepuasan Pelanggan",
        "en": "Customer Satisfaction Score"
      },
      "slug": "csat",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "II",
          "stratum_name": {
            "id": "Metrik Persepsi Berbasis Survei",
            "en": "Survey-Based Perception Metrics"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 5,
        "dashboard_tier": "operational",
        "reporting_cadence": "bulanan"
      },
      "definition": {
        "id": "Skor Kepuasan Pelanggan. Menghubungkan 2 besaran masukan (satisfied_count, total_responses) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase retensi dan ekspansi. Termasuk kelas struktur C1 (Proporsi terbatas), strata II pada tangga kecanggihan.",
        "en": "Customer Satisfaction Score. Combines 2 input quantities (satisfied_count, total_responses) into one number serving customer, retention and loyalty decisions at the retention and expansion phase. Structural class C1 (Bounded proportion), stratum II.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CSAT = \\dfrac{SatisfiedCount}{TotalResponses} \\times 100",
        "javascript": "(satisfied_count / total_responses) * 100",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "satisfied_count",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "total_responses",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "satisfied_count",
          "javascript": "result * total_responses / 100",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "total_responses",
          "javascript": "satisfied_count * 100 / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 60,
          "label": "Rendah",
          "guidance_id": "Masalah mendasar pada pengalaman layanan."
        },
        {
          "lower": 60,
          "upper": 75,
          "label": "Wajar",
          "guidance_id": "Cukup namun tidak membedakan merek."
        },
        {
          "lower": 75,
          "upper": 90,
          "label": "Baik",
          "guidance_id": "Pengalaman layanan menjadi kekuatan."
        },
        {
          "lower": 90,
          "upper": 100,
          "label": "Sangat baik",
          "guidance_id": "Periksa bias responden yang hanya menjawab bila puas."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "CSAT mengukur satu interaksi, bukan hubungan. Jangan dipakai sebagai pengganti NPS."
        },
        {
          "source": "formula_specific",
          "description_id": "Tingkat respons rendah menghasilkan bias pemilihan diri yang kuat. Laporkan tingkat respons berdampingan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "satisfied_count": 342,
          "total_responses": 420
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 15,
        "xp_award_repeat": 3,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_csat",
        "unlocks_after_module": 4,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "nps",
          "ces"
        ],
        "same_phase": [
          "churn_rate",
          "retention_rate",
          "ces",
          "mrr_churn_rate",
          "payback_period",
          "clv_simple",
          "clv",
          "rfm_score",
          "gdr",
          "ndr"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 23,
      "id": "nps",
      "symbol": "NPS",
      "name": {
        "id": "Skor Promotor Bersih",
        "en": "Net Promoter Score"
      },
      "slug": "nps",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "II",
          "stratum_name": {
            "id": "Metrik Persepsi Berbasis Survei",
            "en": "Survey-Based Perception Metrics"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B7",
          "phase_name": {
            "id": "Advokasi dan Pertumbuhan Endogen",
            "en": "Advocacy and Endogenous Growth"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C3",
          "class_name": {
            "id": "Selisih dan indeks kesenjangan",
            "en": "Difference and gap index"
          },
          "structural_signature": "may be negative; zero carries substantive meaning",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 5,
        "dashboard_tier": "operational",
        "reporting_cadence": "bulanan"
      },
      "definition": {
        "id": "Skor Promotor Bersih. Menghubungkan 3 besaran masukan (promoters, detractors, total_respondents) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase advokasi dan pertumbuhan endogen. Termasuk kelas struktur C3 (Selisih dan indeks kesenjangan), strata II pada tangga kecanggihan.",
        "en": "Net Promoter Score. Combines 3 input quantities (promoters, detractors, total_respondents) into one number serving customer, retention and loyalty decisions at the advocacy and endogenous growth phase. Structural class C3 (Difference and gap index), stratum II.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "NPS = \\left(\\dfrac{Promoters - Detractors}{TotalRespondents}\\right) \\times 100",
        "javascript": "((promoters - detractors) / total_respondents) * 100",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "promoters",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "detractors",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "total_respondents",
          "role": "operand",
          "required": true,
          "position": 2
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "promoters",
          "javascript": "result * total_respondents / 100 + detractors",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "detractors",
          "javascript": "promoters - result * total_respondents / 100",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "total_respondents",
          "javascript": "(promoters - detractors) * 100 / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C3",
        "engine_rule": "null is not zero; distinguish None from 0.0 in the store and in the renderer",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -100,
          "upper": 0,
          "label": "Negatif",
          "guidance_id": "Detraktor lebih banyak daripada promotor."
        },
        {
          "lower": 0,
          "upper": 30,
          "label": "Wajar",
          "guidance_id": "Rentang lazim banyak kategori."
        },
        {
          "lower": 30,
          "upper": 60,
          "label": "Baik",
          "guidance_id": "Basis advokasi mulai terbentuk."
        },
        {
          "lower": 60,
          "upper": 100,
          "label": "Sangat baik",
          "guidance_id": "Pertumbuhan dari rujukan seharusnya terlihat pada K faktor."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Rata rata atas selisih menutupi polarisasi; nilai nol dibaca sebagai ketiadaan data."
        },
        {
          "source": "formula_specific",
          "description_id": "Responden netral pada skor tujuh dan delapan tetap masuk penyebut namun tidak masuk pembilang. Melewatkan hal ini menaikkan skor secara keliru."
        },
        {
          "source": "formula_specific",
          "description_id": "Dua sebaran yang sangat berbeda dapat menghasilkan NPS identik. Sajikan komposisi tiga kelompok, bukan hanya angka tunggal."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan sebaran komponen, bukan hanya nilai tengah. Bedakan nol dari nilai kosong pada penyimpanan dan pada tampilan."
        }
      ],
      "worked_example": {
        "inputs": {
          "promoters": 186,
          "detractors": 74,
          "total_respondents": 420
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 15,
        "xp_award_repeat": 3,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_nps",
        "unlocks_after_module": 4,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B7",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "csat",
          "ces"
        ],
        "same_phase": [
          "k_factor"
        ],
        "same_structural_class": [
          "contribution_margin",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "cost_of_delay"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 24,
      "id": "ces",
      "symbol": "CES",
      "name": {
        "id": "Skor Upaya Pelanggan",
        "en": "Customer Effort Score"
      },
      "slug": "ces",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "II",
          "stratum_name": {
            "id": "Metrik Persepsi Berbasis Survei",
            "en": "Survey-Based Perception Metrics"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C5",
          "class_name": {
            "id": "Agregasi linear berbobot",
            "en": "Weighted linear aggregation"
          },
          "structural_signature": "validity rests entirely on the provenance of the weights",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 5,
        "dashboard_tier": "operational",
        "reporting_cadence": "bulanan"
      },
      "definition": {
        "id": "Skor Upaya Pelanggan. Menghubungkan 2 besaran masukan (effort_sum, total_responses) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase retensi dan ekspansi. Termasuk kelas struktur C5 (Agregasi linear berbobot), strata II pada tangga kecanggihan.",
        "en": "Customer Effort Score. Combines 2 input quantities (effort_sum, total_responses) into one number serving customer, retention and loyalty decisions at the retention and expansion phase. Structural class C5 (Weighted linear aggregation), stratum II.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CES = \\dfrac{\\sum EffortScores}{TotalResponses}",
        "javascript": "effort_sum / total_responses",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "effort_sum",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "total_responses",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "effort_sum",
          "javascript": "result * total_responses",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "total_responses",
          "javascript": "effort_sum / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C5",
        "engine_rule": "require weight_provenance field; run rank-stability perturbation test",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 1,
          "upper": 3,
          "label": "Upaya rendah",
          "guidance_id": "Proses terasa mudah. Prediktor loyalitas yang kuat."
        },
        {
          "lower": 3,
          "upper": 5,
          "label": "Sedang",
          "guidance_id": "Ada gesekan yang dapat dihilangkan."
        },
        {
          "lower": 5,
          "upper": 7,
          "label": "Tinggi",
          "guidance_id": "Upaya tinggi adalah prediktor churn terkuat di antara metrik persepsi."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Bobot ditetapkan tanpa dasar namun hasilnya tampak objektif."
        },
        {
          "source": "formula_specific",
          "description_id": "Arah skala harus dinyatakan. Sebagian instrumen memberi skor tinggi untuk kemudahan, sebagian untuk kesulitan."
        },
        {
          "source": "formula_specific",
          "description_id": "Skor rata rata menyembunyikan responden yang mengalami hambatan berat. Periksa ekor sebaran."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Wajibkan pencatatan asal bobot. Jalankan uji stabilitas peringkat terhadap gangguan bobot sebesar lima persen."
        }
      ],
      "worked_example": {
        "inputs": {
          "effort_sum": 1218,
          "total_responses": 420
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 15,
        "xp_award_repeat": 3,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_ces",
        "unlocks_after_module": 4,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "csat",
          "nps"
        ],
        "same_phase": [
          "churn_rate",
          "retention_rate",
          "csat",
          "mrr_churn_rate",
          "payback_period",
          "clv_simple",
          "clv",
          "rfm_score",
          "gdr",
          "ndr"
        ],
        "same_structural_class": [
          "rfm_score",
          "conjoint_utility",
          "qfd_technical_importance",
          "weighted_screening"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 25,
      "id": "gross_margin",
      "symbol": "Gross_Margin",
      "name": {
        "id": "Marjin Kotor",
        "en": "Gross Margin"
      },
      "slug": "gross-margin",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "III",
          "stratum_name": {
            "id": "Struktur Biaya, Marjin, dan Pendapatan Berulang",
            "en": "Cost Structure, Margin, and Recurring Revenue"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B5",
          "phase_name": {
            "id": "Monetisasi",
            "en": "Monetisation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 3,
        "dashboard_tier": "operational",
        "reporting_cadence": "bulanan"
      },
      "definition": {
        "id": "Marjin Kotor. Menghubungkan 2 besaran masukan (revenue, cogs) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase monetisasi. Termasuk kelas struktur C1 (Proporsi terbatas), strata III pada tangga kecanggihan.",
        "en": "Gross Margin. Combines 2 input quantities (revenue, cogs) into one number serving pricing and margin decisions at the monetisation phase. Structural class C1 (Bounded proportion), stratum III.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "GM = \\dfrac{Revenue - COGS}{Revenue}",
        "javascript": "(revenue - cogs) / revenue",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "revenue",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "cogs",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "gross_margin",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "cogs",
          "javascript": "revenue * (1 - gross_margin)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "revenue",
          "javascript": "cogs / (1 - gross_margin)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.2,
          "label": "Tipis",
          "guidance_id": "Model padat biaya langsung. Ruang pemasaran sangat terbatas."
        },
        {
          "lower": 0.2,
          "upper": 0.45,
          "label": "Sedang",
          "guidance_id": "Lazim pada ritel dan manufaktur."
        },
        {
          "lower": 0.45,
          "upper": 0.75,
          "label": "Tebal",
          "guidance_id": "Ruang investasi pemasaran luas."
        },
        {
          "lower": 0.75,
          "upper": 1,
          "label": "Sangat tebal",
          "guidance_id": "Lazim pada perangkat lunak dan konten digital."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Marjin kotor adalah pengali pada CLV. Kekeliruan di sini merambat ke seluruh keputusan investasi akuisisi."
        },
        {
          "source": "formula_specific",
          "description_id": "Biaya server dan dukungan pelanggan pada model langganan lazimnya masuk harga pokok, bukan biaya operasional."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "revenue": 185000000,
          "cogs": 74000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 20,
        "xp_award_repeat": 4,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_gross_margin",
        "unlocks_after_module": 2,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B5",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "net_margin",
          "contribution_margin",
          "break_even_quantity",
          "mrr",
          "arr",
          "mrr_churn_rate"
        ],
        "same_phase": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "net_margin",
          "mrr",
          "arr"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": [
          "clv",
          "clv_simple",
          "payback_period"
        ]
      }
    },
    {
      "index": 26,
      "id": "net_margin",
      "symbol": "Net_Margin",
      "name": {
        "id": "Marjin Bersih",
        "en": "Net Margin"
      },
      "slug": "net-margin",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "III",
          "stratum_name": {
            "id": "Struktur Biaya, Marjin, dan Pendapatan Berulang",
            "en": "Cost Structure, Margin, and Recurring Revenue"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B5",
          "phase_name": {
            "id": "Monetisasi",
            "en": "Monetisation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 3,
        "dashboard_tier": "operational",
        "reporting_cadence": "bulanan"
      },
      "definition": {
        "id": "Marjin Bersih. Menghubungkan 2 besaran masukan (net_profit, revenue) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase monetisasi. Termasuk kelas struktur C1 (Proporsi terbatas), strata III pada tangga kecanggihan.",
        "en": "Net Margin. Combines 2 input quantities (net_profit, revenue) into one number serving pricing and margin decisions at the monetisation phase. Structural class C1 (Bounded proportion), stratum III.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "NM = \\dfrac{NetProfit}{Revenue}",
        "javascript": "net_profit / revenue",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "net_profit",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "revenue",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "net_profit",
          "javascript": "result * revenue",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "revenue",
          "javascript": "net_profit / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -1,
          "upper": 0,
          "label": "Rugi",
          "guidance_id": "Biaya melampaui pendapatan."
        },
        {
          "lower": 0,
          "upper": 0.05,
          "label": "Tipis",
          "guidance_id": "Sedikit ruang bagi kesalahan."
        },
        {
          "lower": 0.05,
          "upper": 0.15,
          "label": "Sehat",
          "guidance_id": "Rentang lazim usaha mapan."
        },
        {
          "lower": 0.15,
          "upper": 1,
          "label": "Sangat sehat",
          "guidance_id": "Periksa apakah investasi pertumbuhan terlalu ditahan."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Marjin bersih dipengaruhi keputusan pendanaan dan pajak yang berada di luar kendali pemasaran."
        },
        {
          "source": "formula_specific",
          "description_id": "Untuk menilai kinerja pemasaran, marjin kontribusi lebih tepat daripada marjin bersih."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "net_profit": 16650000,
          "revenue": 185000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 20,
        "xp_award_repeat": 4,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_net_margin",
        "unlocks_after_module": 2,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B5",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "gross_margin",
          "contribution_margin",
          "break_even_quantity",
          "mrr",
          "arr",
          "mrr_churn_rate"
        ],
        "same_phase": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "gross_margin",
          "mrr",
          "arr"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "mrr_churn_rate",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 27,
      "id": "contribution_margin",
      "symbol": "Contribution_Margin",
      "name": {
        "id": "Marjin Kontribusi",
        "en": "Contribution Margin"
      },
      "slug": "contribution-margin",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "III",
          "stratum_name": {
            "id": "Struktur Biaya, Marjin, dan Pendapatan Berulang",
            "en": "Cost Structure, Margin, and Recurring Revenue"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B1",
          "phase_name": {
            "id": "Perumusan Penawaran",
            "en": "Offer Formulation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C3",
          "class_name": {
            "id": "Selisih dan indeks kesenjangan",
            "en": "Difference and gap index"
          },
          "structural_signature": "may be negative; zero carries substantive meaning",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 3,
        "dashboard_tier": "operational",
        "reporting_cadence": "bulanan"
      },
      "definition": {
        "id": "Marjin Kontribusi. Menghubungkan 2 besaran masukan (price, variable_cost) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase perumusan penawaran. Termasuk kelas struktur C3 (Selisih dan indeks kesenjangan), strata III pada tangga kecanggihan.",
        "en": "Contribution Margin. Combines 2 input quantities (price, variable_cost) into one number serving pricing and margin decisions at the offer formulation phase. Structural class C3 (Difference and gap index), stratum III.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CM = Price - VariableCost",
        "javascript": "price - variable_cost",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "price",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "variable_cost",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "price",
          "javascript": "result + variable_cost",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "variable_cost",
          "javascript": "price - result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C3",
        "engine_rule": "null is not zero; distinguish None from 0.0 in the store and in the renderer",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Rata rata atas selisih menutupi polarisasi; nilai nol dibaca sebagai ketiadaan data."
        },
        {
          "source": "formula_specific",
          "description_id": "Marjin kontribusi adalah batas atas biaya akuisisi yang masuk akal untuk pelanggan sekali beli."
        },
        {
          "source": "formula_specific",
          "description_id": "Bila marjin kontribusi negatif, setiap unit tambahan memperbesar kerugian dan tidak ada volume yang dapat menyelamatkannya."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan sebaran komponen, bukan hanya nilai tengah. Bedakan nol dari nilai kosong pada penyimpanan dan pada tampilan."
        }
      ],
      "worked_example": {
        "inputs": {
          "price": 125000,
          "variable_cost": 74000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 20,
        "xp_award_repeat": 4,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_contribution_margin",
        "unlocks_after_module": 2,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B1",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "gross_margin",
          "net_margin",
          "break_even_quantity",
          "mrr",
          "arr",
          "mrr_churn_rate"
        ],
        "same_phase": [
          "break_even_quantity",
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_structural_class": [
          "nps",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "cost_of_delay"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 28,
      "id": "break_even_quantity",
      "symbol": "Break_Even_Quantity",
      "name": {
        "id": "Kuantitas Titik Impas",
        "en": "Break-Even Quantity"
      },
      "slug": "break-even-quantity",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "III",
          "stratum_name": {
            "id": "Struktur Biaya, Marjin, dan Pendapatan Berulang",
            "en": "Cost Structure, Margin, and Recurring Revenue"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B1",
          "phase_name": {
            "id": "Perumusan Penawaran",
            "en": "Offer Formulation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 3,
        "dashboard_tier": "operational",
        "reporting_cadence": "bulanan"
      },
      "definition": {
        "id": "Kuantitas Titik Impas. Menghubungkan 3 besaran masukan (fixed_cost, price, variable_cost) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase perumusan penawaran. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata III pada tangga kecanggihan.",
        "en": "Break-Even Quantity. Combines 3 input quantities (fixed_cost, price, variable_cost) into one number serving pricing and margin decisions at the offer formulation phase. Structural class C2 (Unbounded intensity ratio), stratum III.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "BEQ = \\dfrac{FixedCost}{Price - VariableCost}",
        "javascript": "fixed_cost / (price - variable_cost)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "fixed_cost",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "price",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "variable_cost",
          "role": "operand",
          "required": true,
          "position": 2
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "fixed_cost",
          "javascript": "result * (price - variable_cost)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "price",
          "javascript": "fixed_cost / result + variable_cost",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "variable_cost",
          "javascript": "price - fixed_cost / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Bila harga sama dengan biaya variabel, penyebut menjadi nol dan titik impas tidak ada. Perangkat lunak harus menangani kasus ini secara tegas."
        },
        {
          "source": "formula_specific",
          "description_id": "Titik impas dalam unit perlu dibandingkan dengan kapasitas pasar. Titik impas yang melampaui SOM berarti proyek tidak layak sejak awal."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "fixed_cost": 480000000,
          "price": 125000,
          "variable_cost": 74000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 20,
        "xp_award_repeat": 4,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_break_even_quantity",
        "unlocks_after_module": 2,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B1",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "gross_margin",
          "net_margin",
          "contribution_margin",
          "mrr",
          "arr",
          "mrr_churn_rate"
        ],
        "same_phase": [
          "contribution_margin",
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 29,
      "id": "mrr",
      "symbol": "MRR",
      "name": {
        "id": "Pendapatan Berulang Bulanan",
        "en": "Monthly Recurring Revenue"
      },
      "slug": "mrr",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "III",
          "stratum_name": {
            "id": "Struktur Biaya, Marjin, dan Pendapatan Berulang",
            "en": "Cost Structure, Margin, and Recurring Revenue"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B5",
          "phase_name": {
            "id": "Monetisasi",
            "en": "Monetisation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 4,
        "dashboard_tier": "operational",
        "reporting_cadence": "bulanan"
      },
      "definition": {
        "id": "Pendapatan Berulang Bulanan. Menghubungkan 2 besaran masukan (arpu, subscribers) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase monetisasi. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata III pada tangga kecanggihan.",
        "en": "Monthly Recurring Revenue. Combines 2 input quantities (arpu, subscribers) into one number serving budget and investment decisions at the monetisation phase. Structural class C4 (Multiplicative composite), stratum III.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "MRR = ARPU \\times Subscribers",
        "javascript": "arpu * subscribers",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "arpu",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "subscribers",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "mrr",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "arpu",
          "javascript": "mrr / subscribers",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "subscribers",
          "javascript": "mrr / arpu",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "Pembayaran tahunan harus dibagi dua belas sebelum masuk MRR, bukan dicatat penuh pada bulan penerimaan."
        },
        {
          "source": "formula_specific",
          "description_id": "Diskon dan kredit harus dikurangkan, atau MRR akan menjadi angka kontrak, bukan angka pendapatan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "arpu": 185000,
          "subscribers": 940
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 20,
        "xp_award_repeat": 4,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_mrr",
        "unlocks_after_module": 3,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B5",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "gross_margin",
          "net_margin",
          "contribution_margin",
          "break_even_quantity",
          "arr",
          "mrr_churn_rate"
        ],
        "same_phase": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "gross_margin",
          "net_margin",
          "arr"
        ],
        "same_structural_class": [
          "arr",
          "sales_velocity",
          "k_factor",
          "grp",
          "net_reach",
          "tam",
          "sam",
          "som",
          "rice_score",
          "wsjf_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [
          "arpu"
        ],
        "feeds_inputs_of": [
          "arr"
        ]
      }
    },
    {
      "index": 30,
      "id": "arr",
      "symbol": "ARR",
      "name": {
        "id": "Pendapatan Berulang Tahunan",
        "en": "Annual Recurring Revenue"
      },
      "slug": "arr",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "III",
          "stratum_name": {
            "id": "Struktur Biaya, Marjin, dan Pendapatan Berulang",
            "en": "Cost Structure, Margin, and Recurring Revenue"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B5",
          "phase_name": {
            "id": "Monetisasi",
            "en": "Monetisation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L3",
        "curriculum_module": 4,
        "dashboard_tier": "operational",
        "reporting_cadence": "bulanan"
      },
      "definition": {
        "id": "Pendapatan Berulang Tahunan. Menghubungkan 1 besaran masukan (mrr) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase monetisasi. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata III pada tangga kecanggihan.",
        "en": "Annual Recurring Revenue. Combines 1 input quantities (mrr) into one number serving budget and investment decisions at the monetisation phase. Structural class C4 (Multiplicative composite), stratum III.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "ARR = MRR \\times 12",
        "javascript": "mrr * 12",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "mrr",
          "role": "operand",
          "required": true,
          "position": 0
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "mrr",
          "javascript": "result / 12",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 2,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "ARR dan MRR adalah satu informasi yang sama. Menyajikan keduanya berdampingan menggandakan ruang tanpa menambah pengetahuan."
        },
        {
          "source": "formula_specific",
          "description_id": "ARR adalah potret sesaat yang disetahunkan, bukan pendapatan yang telah diterima selama setahun."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "mrr": 173900000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 20,
        "xp_award_repeat": 4,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_arr",
        "unlocks_after_module": 3,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B5",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "gross_margin",
          "net_margin",
          "contribution_margin",
          "break_even_quantity",
          "mrr",
          "mrr_churn_rate"
        ],
        "same_phase": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "gross_margin",
          "net_margin",
          "mrr"
        ],
        "same_structural_class": [
          "mrr",
          "sales_velocity",
          "k_factor",
          "grp",
          "net_reach",
          "tam",
          "sam",
          "som",
          "rice_score",
          "wsjf_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [
          "mrr"
        ],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 31,
      "id": "mrr_churn_rate",
      "symbol": "MRR_Churn_Rate",
      "name": {
        "id": "Tingkat Churn Pendapatan",
        "en": "MRR Churn Rate"
      },
      "slug": "mrr-churn-rate",
      "taxonomy": {
        "axis_a": {
          "tier_code": "A",
          "tier_name": {
            "id": "Deskriptif",
            "en": "Descriptive"
          },
          "stratum_code": "III",
          "stratum_name": {
            "id": "Struktur Biaya, Marjin, dan Pendapatan Berulang",
            "en": "Cost Structure, Margin, and Recurring Revenue"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 4,
        "dashboard_tier": "operational",
        "reporting_cadence": "bulanan"
      },
      "definition": {
        "id": "Tingkat Churn Pendapatan. Menghubungkan 2 besaran masukan (churned_mrr, total_mrr) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase retensi dan ekspansi. Termasuk kelas struktur C1 (Proporsi terbatas), strata III pada tangga kecanggihan.",
        "en": "MRR Churn Rate. Combines 2 input quantities (churned_mrr, total_mrr) into one number serving customer, retention and loyalty decisions at the retention and expansion phase. Structural class C1 (Bounded proportion), stratum III.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "MRRChurn = \\dfrac{ChurnedMRR}{TotalMRR}",
        "javascript": "churned_mrr / total_mrr",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "churned_mrr",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "total_mrr",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "churned_mrr",
          "javascript": "result * total_mrr",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "total_mrr",
          "javascript": "churned_mrr / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.01,
          "label": "Sangat baik",
          "guidance_id": "Kebocoran nilai hampir tidak ada."
        },
        {
          "lower": 0.01,
          "upper": 0.03,
          "label": "Baik",
          "guidance_id": "Rentang sehat."
        },
        {
          "lower": 0.03,
          "upper": 0.07,
          "label": "Waspada",
          "guidance_id": "Kebocoran nilai mulai membatasi pertumbuhan."
        },
        {
          "lower": 0.07,
          "upper": 1,
          "label": "Kritis",
          "guidance_id": "Periksa apakah pelanggan besar yang pergi."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Churn berbasis nilai dan churn berbasis jumlah pelanggan dapat bergerak berlawanan. Kehilangan satu pelanggan besar menghasilkan churn pelanggan rendah namun churn nilai tinggi."
        },
        {
          "source": "formula_specific",
          "description_id": "Kontraksi paket tidak masuk rumus ini. Gunakan retensi pendapatan kotor untuk menangkapnya."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "churned_mrr": 4200000,
          "total_mrr": 173900000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 20,
        "xp_award_repeat": 4,
        "mastery_threshold_correct_in_row": 4,
        "badge_id": "badge_mrr_churn_rate",
        "unlocks_after_module": 3,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "gross_margin",
          "net_margin",
          "contribution_margin",
          "break_even_quantity",
          "mrr",
          "arr"
        ],
        "same_phase": [
          "churn_rate",
          "retention_rate",
          "csat",
          "ces",
          "payback_period",
          "clv_simple",
          "clv",
          "rfm_score",
          "gdr",
          "ndr"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "effective_frequency",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 32,
      "id": "cac",
      "symbol": "CAC",
      "name": {
        "id": "Biaya Akuisisi Pelanggan",
        "en": "Customer Acquisition Cost"
      },
      "slug": "cac",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "IV",
          "stratum_name": {
            "id": "Rasio Efisiensi dan Pengembalian Investasi",
            "en": "Efficiency and Return Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B4",
          "phase_name": {
            "id": "Konversi dan Akuisisi",
            "en": "Conversion and Acquisition"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D6",
          "domain_name": {
            "id": "Keputusan penjualan dan pipeline",
            "en": "Sales and pipeline decisions"
          },
          "decision_owner": "Manajer Penjualan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 6,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Biaya Akuisisi Pelanggan. Menghubungkan 2 besaran masukan (total_acquisition_cost, new_customers) menjadi satu angka yang menjawab keputusan penjualan dan pipeline pada fase konversi dan akuisisi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata IV pada tangga kecanggihan.",
        "en": "Customer Acquisition Cost. Combines 2 input quantities (total_acquisition_cost, new_customers) into one number serving sales and pipeline decisions at the conversion and acquisition phase. Structural class C2 (Unbounded intensity ratio), stratum IV.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CAC = \\dfrac{TotalAcquisitionCost}{NewCustomers}",
        "javascript": "total_acquisition_cost / new_customers",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "total_acquisition_cost",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "new_customers",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "cac",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "total_acquisition_cost",
          "javascript": "cac * new_customers",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "new_customers",
          "javascript": "total_acquisition_cost / cac",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Lingkup biaya harus mencakup gaji, perkakas, dan biaya agensi. Membatasi pada belanja media menghasilkan CAC yang menyenangkan namun keliru."
        },
        {
          "source": "formula_specific",
          "description_id": "Pelanggan yang datang secara organik tetap masuk penyebut. Mengeluarkan mereka membuat CAC berbayar tampak seolah CAC keseluruhan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "total_acquisition_cost": 42000000,
          "new_customers": 113
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 30,
        "xp_award_repeat": 6,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_cac",
        "unlocks_after_module": 5,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B4",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share"
        ],
        "same_phase": [
          "conversion_rate",
          "cart_abandonment_rate",
          "cpa",
          "lead_to_customer_rate",
          "sales_velocity",
          "pipeline_coverage"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": [
          "ltv_cac_ratio",
          "payback_period"
        ]
      }
    },
    {
      "index": 33,
      "id": "payback_period",
      "symbol": "Payback_Period",
      "name": {
        "id": "Periode Pengembalian CAC",
        "en": "CAC Payback Period"
      },
      "slug": "payback-period",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "IV",
          "stratum_name": {
            "id": "Rasio Efisiensi dan Pengembalian Investasi",
            "en": "Efficiency and Return Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 6,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Periode Pengembalian CAC. Menghubungkan 3 besaran masukan (cac, arpu, gross_margin) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase retensi dan ekspansi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata IV pada tangga kecanggihan.",
        "en": "CAC Payback Period. Combines 3 input quantities (cac, arpu, gross_margin) into one number serving budget and investment decisions at the retention and expansion phase. Structural class C2 (Unbounded intensity ratio), stratum IV.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "Payback = \\dfrac{CAC}{ARPU \\times GrossMargin}",
        "javascript": "cac / (arpu * gross_margin)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "cac",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "arpu",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "gross_margin",
          "role": "operand",
          "required": true,
          "position": 2
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "cac",
          "javascript": "result * arpu * gross_margin",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "arpu",
          "javascript": "cac / (result * gross_margin)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "gross_margin",
          "javascript": "cac / (result * arpu)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 6,
          "label": "Sangat baik",
          "guidance_id": "Modal kembali sebelum dua kuartal."
        },
        {
          "lower": 6,
          "upper": 12,
          "label": "Baik",
          "guidance_id": "Rentang sehat bagi langganan."
        },
        {
          "lower": 12,
          "upper": 18,
          "label": "Waspada",
          "guidance_id": "Kebutuhan modal kerja membesar."
        },
        {
          "lower": 18,
          "upper": 1000,
          "label": "Kritis",
          "guidance_id": "Pertumbuhan akan terhambat oleh kas, bukan oleh permintaan."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Marjin kotor wajib masuk. Tanpa itu yang dihitung adalah pengembalian pendapatan, bukan pengembalian kas."
        },
        {
          "source": "formula_specific",
          "description_id": "Periode pengembalian yang lebih panjang daripada umur pelanggan berarti model tidak pernah menguntungkan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "cac": 371681,
          "arpu": 185000,
          "gross_margin": 0.6
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 30,
        "xp_award_repeat": 6,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_payback_period",
        "unlocks_after_module": 5,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "cac",
          "roas",
          "roi",
          "romi",
          "relative_market_share"
        ],
        "same_phase": [
          "churn_rate",
          "retention_rate",
          "csat",
          "ces",
          "mrr_churn_rate",
          "clv_simple",
          "clv",
          "rfm_score",
          "gdr",
          "ndr"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [
          "arpu",
          "cac",
          "gross_margin"
        ],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 34,
      "id": "roas",
      "symbol": "ROAS",
      "name": {
        "id": "Pengembalian atas Belanja Iklan",
        "en": "Return on Ad Spend"
      },
      "slug": "roas",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "IV",
          "stratum_name": {
            "id": "Rasio Efisiensi dan Pengembalian Investasi",
            "en": "Efficiency and Return Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 6,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Pengembalian atas Belanja Iklan. Menghubungkan 2 besaran masukan (ad_revenue, ad_cost) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata IV pada tangga kecanggihan.",
        "en": "Return on Ad Spend. Combines 2 input quantities (ad_revenue, ad_cost) into one number serving budget and investment decisions at the evaluation and investment governance phase. Structural class C2 (Unbounded intensity ratio), stratum IV.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "ROAS = \\dfrac{AdRevenue}{AdCost}",
        "javascript": "ad_revenue / ad_cost",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "ad_revenue",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "ad_cost",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "ad_revenue",
          "javascript": "result * ad_cost",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "ad_cost",
          "javascript": "ad_revenue / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 1,
          "label": "Rugi",
          "guidance_id": "Pendapatan teratribusi lebih kecil daripada belanja."
        },
        {
          "lower": 1,
          "upper": 2,
          "label": "Impas kotor",
          "guidance_id": "Belum menutup harga pokok."
        },
        {
          "lower": 2,
          "upper": 4,
          "label": "Sehat",
          "guidance_id": "Rentang lazim ritel daring."
        },
        {
          "lower": 4,
          "upper": 1000,
          "label": "Sangat baik",
          "guidance_id": "Periksa apakah model atribusi terlalu murah hati."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "ROAS memakai pendapatan kotor. ROAS sebesar tiga pada marjin tiga puluh persen sesungguhnya masih merugi."
        },
        {
          "source": "formula_specific",
          "description_id": "ROAS berbasis atribusi bukan ROAS inkremental. Sebagian besar pendapatan yang diatribusikan akan tetap terjadi tanpa iklan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "ad_revenue": 96000000,
          "ad_cost": 24000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 30,
        "xp_award_repeat": 6,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_roas",
        "unlocks_after_module": 5,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "cac",
          "payback_period",
          "roi",
          "romi",
          "relative_market_share"
        ],
        "same_phase": [
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 35,
      "id": "roi",
      "symbol": "ROI",
      "name": {
        "id": "Pengembalian atas Investasi",
        "en": "Return on Investment"
      },
      "slug": "roi",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "IV",
          "stratum_name": {
            "id": "Rasio Efisiensi dan Pengembalian Investasi",
            "en": "Efficiency and Return Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 6,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Pengembalian atas Investasi. Menghubungkan 2 besaran masukan (gain, cost) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata IV pada tangga kecanggihan.",
        "en": "Return on Investment. Combines 2 input quantities (gain, cost) into one number serving budget and investment decisions at the evaluation and investment governance phase. Structural class C2 (Unbounded intensity ratio), stratum IV.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "ROI = \\dfrac{Gain - Cost}{Cost}",
        "javascript": "(gain - cost) / cost",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "gain",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "cost",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "gain",
          "javascript": "cost * (1 + result)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "cost",
          "javascript": "gain / (1 + result)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -1,
          "upper": 0,
          "label": "Negatif",
          "guidance_id": "Investasi menghancurkan nilai."
        },
        {
          "lower": 0,
          "upper": 0.2,
          "label": "Marjinal",
          "guidance_id": "Bandingkan dengan biaya modal sebelum menyimpulkan."
        },
        {
          "lower": 0.2,
          "upper": 1,
          "label": "Baik",
          "guidance_id": "Melampaui biaya modal pada sebagian besar konteks."
        },
        {
          "lower": 1,
          "upper": 1000,
          "label": "Sangat baik",
          "guidance_id": "Periksa apakah seluruh biaya telah dimasukkan."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Pengurangan biaya pada pembilang adalah pembeda ROI dari ROAS. Melewatkannya menghasilkan angka yang jauh lebih besar dan keliru."
        },
        {
          "source": "formula_specific",
          "description_id": "ROI tanpa keterangan periode tidak dapat dibandingkan. Pengembalian tiga puluh persen dalam sebulan dan dalam tiga tahun bukan hal yang sama."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "gain": 96000000,
          "cost": 42000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 30,
        "xp_award_repeat": 6,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_roi",
        "unlocks_after_module": 5,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "cac",
          "payback_period",
          "roas",
          "romi",
          "relative_market_share"
        ],
        "same_phase": [
          "roas",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 36,
      "id": "romi",
      "symbol": "ROMI",
      "name": {
        "id": "Pengembalian atas Investasi Pemasaran",
        "en": "Return on Marketing Investment"
      },
      "slug": "romi",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "IV",
          "stratum_name": {
            "id": "Rasio Efisiensi dan Pengembalian Investasi",
            "en": "Efficiency and Return Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 6,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Pengembalian atas Investasi Pemasaran. Menghubungkan 2 besaran masukan (incremental_revenue, marketing_cost) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata IV pada tangga kecanggihan.",
        "en": "Return on Marketing Investment. Combines 2 input quantities (incremental_revenue, marketing_cost) into one number serving budget and investment decisions at the evaluation and investment governance phase. Structural class C2 (Unbounded intensity ratio), stratum IV.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "ROMI = \\dfrac{IncrementalRevenue - MarketingCost}{MarketingCost}",
        "javascript": "(incremental_revenue - marketing_cost) / marketing_cost",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "incremental_revenue",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "marketing_cost",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "incremental_revenue",
          "javascript": "marketing_cost * (1 + result)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "marketing_cost",
          "javascript": "incremental_revenue / (1 + result)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -1,
          "upper": 0,
          "label": "Negatif",
          "guidance_id": "Kampanye tidak menutup biayanya sendiri."
        },
        {
          "lower": 0,
          "upper": 0.5,
          "label": "Marjinal",
          "guidance_id": "Efek nyata namun tipis."
        },
        {
          "lower": 0.5,
          "upper": 2,
          "label": "Baik",
          "guidance_id": "Kampanye memberi pengembalian jelas."
        },
        {
          "lower": 2,
          "upper": 1000,
          "label": "Sangat baik",
          "guidance_id": "Periksa keabsahan estimasi inkremental."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Pendapatan inkremental hanya sahih bila ada kelompok kendali. Tanpa desain uji, ROMI hanya ROI yang disamarkan."
        },
        {
          "source": "formula_specific",
          "description_id": "Perangkat lunak ini tidak menyediakan rumus perancangan eksperimen. Keterbatasan itu harus disadari saat memakai ROMI."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "incremental_revenue": 68000000,
          "marketing_cost": 42000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 30,
        "xp_award_repeat": 6,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_romi",
        "unlocks_after_module": 5,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "cac",
          "payback_period",
          "roas",
          "roi",
          "relative_market_share"
        ],
        "same_phase": [
          "roas",
          "roi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 37,
      "id": "relative_market_share",
      "symbol": "Relative_Market_Share",
      "name": {
        "id": "Pangsa Pasar Relatif",
        "en": "Relative Market Share"
      },
      "slug": "relative-market-share",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "IV",
          "stratum_name": {
            "id": "Rasio Efisiensi dan Pengembalian Investasi",
            "en": "Efficiency and Return Ratios"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D7",
          "domain_name": {
            "id": "Keputusan pasar sasaran dan posisi kompetitif",
            "en": "Target market and positioning decisions"
          },
          "decision_owner": "Direktur Strategi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 7,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Pangsa Pasar Relatif. Menghubungkan 2 besaran masukan (company_share, largest_competitor_share) menjadi satu angka yang menjawab keputusan pasar sasaran dan posisi kompetitif pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata IV pada tangga kecanggihan.",
        "en": "Relative Market Share. Combines 2 input quantities (company_share, largest_competitor_share) into one number serving target market and positioning decisions at the market definition and understanding phase. Structural class C2 (Unbounded intensity ratio), stratum IV.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "RMS = \\dfrac{CompanyShare}{LargestCompetitorShare}",
        "javascript": "company_share / largest_competitor_share",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "company_share",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "largest_competitor_share",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "company_share",
          "javascript": "result * largest_competitor_share",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "largest_competitor_share",
          "javascript": "company_share / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.5,
          "label": "Tertinggal jauh",
          "guidance_id": "Posisi pengikut. Skala ekonomi berpihak pada pesaing."
        },
        {
          "lower": 0.5,
          "upper": 1,
          "label": "Penantang",
          "guidance_id": "Jarak masih dapat dikejar."
        },
        {
          "lower": 1,
          "upper": 2,
          "label": "Pemimpin tipis",
          "guidance_id": "Kepemimpinan belum aman."
        },
        {
          "lower": 2,
          "upper": 1000,
          "label": "Pemimpin kuat",
          "guidance_id": "Keunggulan biaya struktural lazimnya menyertai posisi ini."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Penyebut adalah pesaing terbesar, bukan rata rata pesaing. Kekeliruan ini melebihkan posisi sendiri."
        },
        {
          "source": "formula_specific",
          "description_id": "Bila perusahaan adalah pemimpin pasar, penyebut menjadi pesaing terbesar kedua."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "company_share": 0.11,
          "largest_competitor_share": 0.29
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 30,
        "xp_award_repeat": 6,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_relative_market_share",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi"
        ],
        "same_phase": [
          "market_share",
          "penetration_rate",
          "tam",
          "sam",
          "som",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity",
          "bass_f",
          "bass_n"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [
          "market_share"
        ],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 38,
      "id": "clv_simple",
      "symbol": "CLV_Simple",
      "name": {
        "id": "Nilai Seumur Hidup Sederhana",
        "en": "Simple Customer Lifetime Value"
      },
      "slug": "clv-simple",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "V",
          "stratum_name": {
            "id": "Metrik Komposit Nilai Pelanggan dan Produktivitas Saluran",
            "en": "Composite Customer Value and Channel Productivity"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C6",
          "class_name": {
            "id": "Deret terdiskonto",
            "en": "Discounted series"
          },
          "structural_signature": "requires a discount rate and a horizon, both frequently hidden",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 6,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Nilai Seumur Hidup Sederhana. Menghubungkan 3 besaran masukan (arpu, gross_margin, churn_rate) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase retensi dan ekspansi. Termasuk kelas struktur C6 (Deret terdiskonto), strata V pada tangga kecanggihan.",
        "en": "Simple Customer Lifetime Value. Combines 3 input quantities (arpu, gross_margin, churn_rate) into one number serving customer, retention and loyalty decisions at the retention and expansion phase. Structural class C6 (Discounted series), stratum V.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CLV_{simple} = \\dfrac{ARPU \\times GrossMargin}{ChurnRate}",
        "javascript": "(arpu * gross_margin) / churn_rate",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "arpu",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "gross_margin",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "churn_rate",
          "role": "operand",
          "required": true,
          "position": 2
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "arpu",
          "javascript": "result * churn_rate / gross_margin",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "gross_margin",
          "javascript": "result * churn_rate / arpu",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "churn_rate",
          "javascript": "(arpu * gross_margin) / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C6",
        "engine_rule": "discount_rate and horizon are mandatory output annotations, never optional",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Tingkat diskonto dan horizon tidak ditampilkan sehingga hasil tidak dapat diaudit."
        },
        {
          "source": "formula_specific",
          "description_id": "Bentuk ini mengandaikan churn tetap selamanya dan tidak mendiskontokan waktu. Nilainya karena itu cenderung terlalu besar."
        },
        {
          "source": "formula_specific",
          "description_id": "Churn mendekati nol menghasilkan nilai tak hingga. Perangkat lunak harus menetapkan batas horizon secara eksplisit."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Cetak tingkat diskonto dan horizon pada setiap keluaran, termasuk pada ekspor dan cetakan."
        }
      ],
      "worked_example": {
        "inputs": {
          "arpu": 185000,
          "gross_margin": 0.6,
          "churn_rate": 0.04
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 45,
        "xp_award_repeat": 9,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_clv_simple",
        "unlocks_after_module": 5,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "clv",
          "ltv_cac_ratio",
          "rfm_score",
          "sales_velocity",
          "pipeline_coverage",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "k_factor"
        ],
        "same_phase": [
          "churn_rate",
          "retention_rate",
          "csat",
          "ces",
          "mrr_churn_rate",
          "payback_period",
          "clv",
          "rfm_score",
          "gdr",
          "ndr"
        ],
        "same_structural_class": [
          "clv",
          "npv"
        ],
        "consumes_outputs_of": [
          "arpu",
          "churn_rate",
          "gross_margin"
        ],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 39,
      "id": "clv",
      "symbol": "CLV",
      "name": {
        "id": "Nilai Seumur Hidup Pelanggan Berhorizon",
        "en": "Customer Lifetime Value with Horizon"
      },
      "slug": "clv",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "V",
          "stratum_name": {
            "id": "Metrik Komposit Nilai Pelanggan dan Produktivitas Saluran",
            "en": "Composite Customer Value and Channel Productivity"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C6",
          "class_name": {
            "id": "Deret terdiskonto",
            "en": "Discounted series"
          },
          "structural_signature": "requires a discount rate and a horizon, both frequently hidden",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 6,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Nilai Seumur Hidup Pelanggan Berhorizon. Menghubungkan 6 besaran masukan (aov, purchase_frequency, gross_margin, retention_rate, discount_rate, horizon_t) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase retensi dan ekspansi. Termasuk kelas struktur C6 (Deret terdiskonto), strata V pada tangga kecanggihan.",
        "en": "Customer Lifetime Value with Horizon. Combines 6 input quantities (aov, purchase_frequency, gross_margin, retention_rate, discount_rate, horizon_t) into one number serving customer, retention and loyalty decisions at the retention and expansion phase. Structural class C6 (Discounted series), stratum V.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CLV = AOV \\times F \\times GM \\times \\sum_{t=1}^{T} \\dfrac{RetentionRate^{t}}{(1 + DiscountRate)^{t}}",
        "javascript": "aov * purchase_frequency * gross_margin * series_sum(retention_rate, discount_rate, horizon_t)",
        "requires_helper": "series_sum",
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "aov",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "purchase_frequency",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "gross_margin",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "retention_rate",
          "role": "operand",
          "required": true,
          "position": 3
        },
        {
          "variable_id": "discount_rate",
          "role": "operand",
          "required": true,
          "position": 4
        },
        {
          "variable_id": "horizon_t",
          "role": "operand",
          "required": true,
          "position": 5
        }
      ],
      "output": {
        "canonical_variable_id": "clv",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "aov",
          "javascript": "clv / (purchase_frequency * gross_margin * series_sum(retention_rate, discount_rate, horizon_t))",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "gross_margin",
          "javascript": "clv / (aov * purchase_frequency * series_sum(retention_rate, discount_rate, horizon_t))",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "purchase_frequency",
          "javascript": "clv / (aov * gross_margin * series_sum(retention_rate, discount_rate, horizon_t))",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C6",
        "engine_rule": "discount_rate and horizon are mandatory output annotations, never optional",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Tingkat diskonto dan horizon tidak ditampilkan sehingga hasil tidak dapat diaudit."
        },
        {
          "source": "formula_specific",
          "description_id": "Tingkat diskonto dan horizon wajib ditampilkan bersama hasilnya. Tanpa keduanya angka ini tidak dapat diaudit."
        },
        {
          "source": "formula_specific",
          "description_id": "Frekuensi pembelian dan horizon harus memakai satuan periode yang sama. Mencampur bulan dan tahun adalah kekeliruan tersering."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Cetak tingkat diskonto dan horizon pada setiap keluaran, termasuk pada ekspor dan cetakan."
        }
      ],
      "worked_example": {
        "inputs": {
          "aov": 125000,
          "purchase_frequency": 2.4,
          "gross_margin": 0.6,
          "retention_rate": 0.88,
          "discount_rate": 0.1,
          "horizon_t": 5
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 45,
        "xp_award_repeat": 9,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_clv",
        "unlocks_after_module": 5,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "clv_simple",
          "ltv_cac_ratio",
          "rfm_score",
          "sales_velocity",
          "pipeline_coverage",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "k_factor"
        ],
        "same_phase": [
          "churn_rate",
          "retention_rate",
          "csat",
          "ces",
          "mrr_churn_rate",
          "payback_period",
          "clv_simple",
          "rfm_score",
          "gdr",
          "ndr"
        ],
        "same_structural_class": [
          "clv_simple",
          "npv"
        ],
        "consumes_outputs_of": [
          "aov",
          "gross_margin",
          "purchase_frequency",
          "retention_rate"
        ],
        "feeds_inputs_of": [
          "ltv_cac_ratio"
        ]
      }
    },
    {
      "index": 40,
      "id": "ltv_cac_ratio",
      "symbol": "LTV_CAC_Ratio",
      "name": {
        "id": "Rasio LTV terhadap CAC",
        "en": "LTV to CAC Ratio"
      },
      "slug": "ltv-cac-ratio",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "V",
          "stratum_name": {
            "id": "Metrik Komposit Nilai Pelanggan dan Produktivitas Saluran",
            "en": "Composite Customer Value and Channel Productivity"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L3",
        "curriculum_module": 6,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Rasio LTV terhadap CAC. Menghubungkan 2 besaran masukan (clv, cac) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata V pada tangga kecanggihan.",
        "en": "LTV to CAC Ratio. Combines 2 input quantities (clv, cac) into one number serving budget and investment decisions at the evaluation and investment governance phase. Structural class C2 (Unbounded intensity ratio), stratum V.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "LTV\\!:\\!CAC = \\dfrac{CLV}{CAC}",
        "javascript": "clv / cac",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "clv",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "cac",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "clv",
          "javascript": "result * cac",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "cac",
          "javascript": "clv / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 1,
          "label": "Merusak nilai",
          "guidance_id": "Setiap pelanggan baru memperbesar kerugian."
        },
        {
          "lower": 1,
          "upper": 3,
          "label": "Belum sehat",
          "guidance_id": "Belum menutup biaya tidak langsung."
        },
        {
          "lower": 3,
          "upper": 5,
          "label": "Sehat",
          "guidance_id": "Rentang yang lazim dianggap layak."
        },
        {
          "lower": 5,
          "upper": 1000,
          "label": "Terlalu hemat",
          "guidance_id": "Kemungkinan kurang berinvestasi pada pertumbuhan."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Rasio di atas lima sering dibaca sebagai prestasi. Lebih sering ia menandakan peluang pertumbuhan yang tidak diambil."
        },
        {
          "source": "formula_specific",
          "description_id": "Rasio ini mewarisi seluruh asumsi CLV. Sajikan bersama tingkat diskonto dan horizon yang dipakai."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "clv": 2775000,
          "cac": 371681
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 45,
        "xp_award_repeat": 9,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_ltv_cac_ratio",
        "unlocks_after_module": 5,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "clv_simple",
          "clv",
          "rfm_score",
          "sales_velocity",
          "pipeline_coverage",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "k_factor"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "pipeline_coverage",
          "wtp"
        ],
        "consumes_outputs_of": [
          "cac",
          "clv"
        ],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 41,
      "id": "rfm_score",
      "symbol": "RFM_Score",
      "name": {
        "id": "Skor RFM",
        "en": "RFM Score"
      },
      "slug": "rfm-score",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "V",
          "stratum_name": {
            "id": "Metrik Komposit Nilai Pelanggan dan Produktivitas Saluran",
            "en": "Composite Customer Value and Channel Productivity"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C5",
          "class_name": {
            "id": "Agregasi linear berbobot",
            "en": "Weighted linear aggregation"
          },
          "structural_signature": "validity rests entirely on the provenance of the weights",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 5,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Skor RFM. Menghubungkan 6 besaran masukan (rfm_r, rfm_f, rfm_m, rfm_wr, rfm_wf, rfm_wm) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase retensi dan ekspansi. Termasuk kelas struktur C5 (Agregasi linear berbobot), strata V pada tangga kecanggihan.",
        "en": "RFM Score. Combines 6 input quantities (rfm_r, rfm_f, rfm_m, rfm_wr, rfm_wf, rfm_wm) into one number serving customer, retention and loyalty decisions at the retention and expansion phase. Structural class C5 (Weighted linear aggregation), stratum V.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "RFM = w_R R + w_F F + w_M M",
        "javascript": "rfm_wr * rfm_r + rfm_wf * rfm_f + rfm_wm * rfm_m",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "rfm_r",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "rfm_f",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "rfm_m",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "rfm_wr",
          "role": "operand",
          "required": true,
          "position": 3
        },
        {
          "variable_id": "rfm_wf",
          "role": "operand",
          "required": true,
          "position": 4
        },
        {
          "variable_id": "rfm_wm",
          "role": "operand",
          "required": true,
          "position": 5
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "rfm_r",
          "javascript": "(result - rfm_wf * rfm_f - rfm_wm * rfm_m) / rfm_wr",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "rfm_f",
          "javascript": "(result - rfm_wr * rfm_r - rfm_wm * rfm_m) / rfm_wf",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "rfm_m",
          "javascript": "(result - rfm_wr * rfm_r - rfm_wf * rfm_f) / rfm_wm",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C5",
        "engine_rule": "require weight_provenance field; run rank-stability perturbation test",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 1,
          "upper": 2.5,
          "label": "Segmen pasif",
          "guidance_id": "Prioritas reaktivasi atau pelepasan."
        },
        {
          "lower": 2.5,
          "upper": 3.5,
          "label": "Segmen tengah",
          "guidance_id": "Prioritas peningkatan frekuensi."
        },
        {
          "lower": 3.5,
          "upper": 4.5,
          "label": "Segmen bernilai",
          "guidance_id": "Prioritas retensi."
        },
        {
          "lower": 4.5,
          "upper": 5,
          "label": "Segmen utama",
          "guidance_id": "Prioritas program loyalitas dan rujukan."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Bobot ditetapkan tanpa dasar namun hasilnya tampak objektif."
        },
        {
          "source": "formula_specific",
          "description_id": "Bobot yang ditetapkan tanpa dasar menghasilkan angka yang tampak objektif padahal subjektif. Dokumentasikan asal bobot."
        },
        {
          "source": "formula_specific",
          "description_id": "Penjumlahan bobot seharusnya sama dengan satu. Perangkat lunak harus memperingatkan bila tidak."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Wajibkan pencatatan asal bobot. Jalankan uji stabilitas peringkat terhadap gangguan bobot sebesar lima persen."
        }
      ],
      "worked_example": {
        "inputs": {
          "rfm_r": 4,
          "rfm_f": 3,
          "rfm_m": 5,
          "rfm_wr": 0.4,
          "rfm_wf": 0.3,
          "rfm_wm": 0.3
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 45,
        "xp_award_repeat": 9,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_rfm_score",
        "unlocks_after_module": 4,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "clv_simple",
          "clv",
          "ltv_cac_ratio",
          "sales_velocity",
          "pipeline_coverage",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "k_factor"
        ],
        "same_phase": [
          "churn_rate",
          "retention_rate",
          "csat",
          "ces",
          "mrr_churn_rate",
          "payback_period",
          "clv_simple",
          "clv",
          "gdr",
          "ndr"
        ],
        "same_structural_class": [
          "ces",
          "conjoint_utility",
          "qfd_technical_importance",
          "weighted_screening"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 42,
      "id": "sales_velocity",
      "symbol": "Sales_Velocity",
      "name": {
        "id": "Laju Penjualan",
        "en": "Sales Velocity"
      },
      "slug": "sales-velocity",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "V",
          "stratum_name": {
            "id": "Metrik Komposit Nilai Pelanggan dan Produktivitas Saluran",
            "en": "Composite Customer Value and Channel Productivity"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B4",
          "phase_name": {
            "id": "Konversi dan Akuisisi",
            "en": "Conversion and Acquisition"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D6",
          "domain_name": {
            "id": "Keputusan penjualan dan pipeline",
            "en": "Sales and pipeline decisions"
          },
          "decision_owner": "Manajer Penjualan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Laju Penjualan. Menghubungkan 4 besaran masukan (opportunities, deal_value, win_rate, cycle_length) menjadi satu angka yang menjawab keputusan penjualan dan pipeline pada fase konversi dan akuisisi. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata V pada tangga kecanggihan.",
        "en": "Sales Velocity. Combines 4 input quantities (opportunities, deal_value, win_rate, cycle_length) into one number serving sales and pipeline decisions at the conversion and acquisition phase. Structural class C4 (Multiplicative composite), stratum V.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "SV = \\dfrac{Opportunities \\times DealValue \\times WinRate}{CycleLength}",
        "javascript": "(opportunities * deal_value * win_rate) / cycle_length",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "opportunities",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "deal_value",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "win_rate",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "cycle_length",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "opportunities",
          "javascript": "result * cycle_length / (deal_value * win_rate)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "deal_value",
          "javascript": "result * cycle_length / (opportunities * win_rate)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "win_rate",
          "javascript": "result * cycle_length / (opportunities * deal_value)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "cycle_length",
          "javascript": "(opportunities * deal_value * win_rate) / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 5,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "Memperpendek siklus penjualan memberi pengaruh setara dengan menambah peluang, namun lazimnya lebih murah. Rumus ini membuat hal itu terlihat."
        },
        {
          "source": "formula_specific",
          "description_id": "Keempat faktor bersifat multiplikatif. Optimisme kecil pada masing masing faktor berlipat menjadi optimisme besar pada hasil."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "opportunities": 84,
          "deal_value": 18000000,
          "win_rate": 0.22,
          "cycle_length": 45
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 45,
        "xp_award_repeat": 9,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_sales_velocity",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B4",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "clv_simple",
          "clv",
          "ltv_cac_ratio",
          "rfm_score",
          "pipeline_coverage",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "k_factor"
        ],
        "same_phase": [
          "conversion_rate",
          "cart_abandonment_rate",
          "cpa",
          "lead_to_customer_rate",
          "cac",
          "pipeline_coverage"
        ],
        "same_structural_class": [
          "mrr",
          "arr",
          "k_factor",
          "grp",
          "net_reach",
          "tam",
          "sam",
          "som",
          "rice_score",
          "wsjf_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 43,
      "id": "pipeline_coverage",
      "symbol": "Pipeline_Coverage",
      "name": {
        "id": "Cakupan Pipeline",
        "en": "Pipeline Coverage"
      },
      "slug": "pipeline-coverage",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "V",
          "stratum_name": {
            "id": "Metrik Komposit Nilai Pelanggan dan Produktivitas Saluran",
            "en": "Composite Customer Value and Channel Productivity"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B4",
          "phase_name": {
            "id": "Konversi dan Akuisisi",
            "en": "Conversion and Acquisition"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D6",
          "domain_name": {
            "id": "Keputusan penjualan dan pipeline",
            "en": "Sales and pipeline decisions"
          },
          "decision_owner": "Manajer Penjualan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Cakupan Pipeline. Menghubungkan 2 besaran masukan (pipeline_value, quota) menjadi satu angka yang menjawab keputusan penjualan dan pipeline pada fase konversi dan akuisisi. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata V pada tangga kecanggihan.",
        "en": "Pipeline Coverage. Combines 2 input quantities (pipeline_value, quota) into one number serving sales and pipeline decisions at the conversion and acquisition phase. Structural class C2 (Unbounded intensity ratio), stratum V.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "PC = \\dfrac{PipelineValue}{Quota}",
        "javascript": "pipeline_value / quota",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "pipeline_value",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "quota",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "pipeline_value",
          "javascript": "result * quota",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "quota",
          "javascript": "pipeline_value / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 2,
          "label": "Tidak memadai",
          "guidance_id": "Target hampir pasti tidak tercapai."
        },
        {
          "lower": 2,
          "upper": 3,
          "label": "Ketat",
          "guidance_id": "Menuntut tingkat kemenangan di atas normal."
        },
        {
          "lower": 3,
          "upper": 5,
          "label": "Memadai",
          "guidance_id": "Rentang yang lazim dianggap sehat."
        },
        {
          "lower": 5,
          "upper": 1000,
          "label": "Berlebih",
          "guidance_id": "Periksa apakah pipeline berisi peluang yang sudah mati."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Cakupan yang memadai seharusnya diturunkan dari kebalikan tingkat kemenangan, bukan dari angka tiga yang dihafal."
        },
        {
          "source": "formula_specific",
          "description_id": "Peluang tanpa aktivitas dalam tiga puluh hari sebaiknya dikeluarkan sebelum menghitung."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "pipeline_value": 1120000000,
          "quota": 320000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 45,
        "xp_award_repeat": 9,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_pipeline_coverage",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B4",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "clv_simple",
          "clv",
          "ltv_cac_ratio",
          "rfm_score",
          "sales_velocity",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "k_factor"
        ],
        "same_phase": [
          "conversion_rate",
          "cart_abandonment_rate",
          "cpa",
          "lead_to_customer_rate",
          "cac",
          "sales_velocity"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "wtp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 44,
      "id": "forecast_accuracy",
      "symbol": "Forecast_Accuracy",
      "name": {
        "id": "Akurasi Prakiraan",
        "en": "Forecast Accuracy"
      },
      "slug": "forecast-accuracy",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "V",
          "stratum_name": {
            "id": "Metrik Komposit Nilai Pelanggan dan Produktivitas Saluran",
            "en": "Composite Customer Value and Channel Productivity"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C3",
          "class_name": {
            "id": "Selisih dan indeks kesenjangan",
            "en": "Difference and gap index"
          },
          "structural_signature": "may be negative; zero carries substantive meaning",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D6",
          "domain_name": {
            "id": "Keputusan penjualan dan pipeline",
            "en": "Sales and pipeline decisions"
          },
          "decision_owner": "Manajer Penjualan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Akurasi Prakiraan. Menghubungkan 2 besaran masukan (forecast, actual) menjadi satu angka yang menjawab keputusan penjualan dan pipeline pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C3 (Selisih dan indeks kesenjangan), strata V pada tangga kecanggihan.",
        "en": "Forecast Accuracy. Combines 2 input quantities (forecast, actual) into one number serving sales and pipeline decisions at the evaluation and investment governance phase. Structural class C3 (Difference and gap index), stratum V.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "FA = 1 - \\dfrac{|Forecast - Actual|}{|Actual|}",
        "javascript": "1 - Math.abs(forecast - actual) / Math.abs(actual)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "forecast",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "actual",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "forecast",
          "javascript": "actual * (2 - result)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "actual",
          "javascript": "forecast / (2 - result)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C3",
        "engine_rule": "null is not zero; distinguish None from 0.0 in the store and in the renderer",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -10,
          "upper": 0.7,
          "label": "Rendah",
          "guidance_id": "Prakiraan belum layak dipakai untuk keputusan kapasitas."
        },
        {
          "lower": 0.7,
          "upper": 0.85,
          "label": "Wajar",
          "guidance_id": "Cukup untuk perencanaan kasar."
        },
        {
          "lower": 0.85,
          "upper": 0.95,
          "label": "Baik",
          "guidance_id": "Layak untuk perencanaan operasional."
        },
        {
          "lower": 0.95,
          "upper": 1,
          "label": "Sangat baik",
          "guidance_id": "Periksa apakah prakiraan disesuaikan setelah fakta."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Rata rata atas selisih menutupi polarisasi; nilai nol dibaca sebagai ketiadaan data."
        },
        {
          "source": "formula_specific",
          "description_id": "Nilai dapat menjadi negatif bila kesalahan melampaui nilai aktual. Perangkat lunak tidak boleh memotongnya menjadi nol."
        },
        {
          "source": "formula_specific",
          "description_id": "Akurasi tinggi pada prakiraan yang selalu konservatif bukan prestasi, melainkan gejala target yang direndahkan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan sebaran komponen, bukan hanya nilai tengah. Bedakan nol dari nilai kosong pada penyimpanan dan pada tampilan."
        }
      ],
      "worked_example": {
        "inputs": {
          "forecast": 340000000,
          "actual": 318000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 45,
        "xp_award_repeat": 9,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_forecast_accuracy",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "clv_simple",
          "clv",
          "ltv_cac_ratio",
          "rfm_score",
          "sales_velocity",
          "pipeline_coverage",
          "gdr",
          "ndr",
          "k_factor"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "nps",
          "contribution_margin",
          "gdr",
          "ndr",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "cost_of_delay"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 45,
      "id": "gdr",
      "symbol": "GDR",
      "name": {
        "id": "Retensi Pendapatan Kotor",
        "en": "Gross Dollar Retention"
      },
      "slug": "gdr",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "V",
          "stratum_name": {
            "id": "Metrik Komposit Nilai Pelanggan dan Produktivitas Saluran",
            "en": "Composite Customer Value and Channel Productivity"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C3",
          "class_name": {
            "id": "Selisih dan indeks kesenjangan",
            "en": "Difference and gap index"
          },
          "structural_signature": "may be negative; zero carries substantive meaning",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 4,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Retensi Pendapatan Kotor. Menghubungkan 3 besaran masukan (start_mrr, contraction_mrr, churned_mrr) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase retensi dan ekspansi. Termasuk kelas struktur C3 (Selisih dan indeks kesenjangan), strata V pada tangga kecanggihan.",
        "en": "Gross Dollar Retention. Combines 3 input quantities (start_mrr, contraction_mrr, churned_mrr) into one number serving customer, retention and loyalty decisions at the retention and expansion phase. Structural class C3 (Difference and gap index), stratum V.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "GDR = \\dfrac{StartMRR - Contraction - Churn}{StartMRR}",
        "javascript": "(start_mrr - contraction_mrr - churned_mrr) / start_mrr",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "start_mrr",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "contraction_mrr",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "churned_mrr",
          "role": "operand",
          "required": true,
          "position": 2
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "contraction_mrr",
          "javascript": "start_mrr * (1 - result) - churned_mrr",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "churned_mrr",
          "javascript": "start_mrr * (1 - result) - contraction_mrr",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "start_mrr",
          "javascript": "(contraction_mrr + churned_mrr) / (1 - result)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C3",
        "engine_rule": "null is not zero; distinguish None from 0.0 in the store and in the renderer",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.8,
          "label": "Lemah",
          "guidance_id": "Kebocoran nilai besar."
        },
        {
          "lower": 0.8,
          "upper": 0.9,
          "label": "Wajar",
          "guidance_id": "Rentang lazim segmen usaha kecil."
        },
        {
          "lower": 0.9,
          "upper": 0.97,
          "label": "Baik",
          "guidance_id": "Rentang lazim segmen korporat."
        },
        {
          "lower": 0.97,
          "upper": 1,
          "label": "Sangat baik",
          "guidance_id": "Nyaris tidak ada kebocoran."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Rata rata atas selisih menutupi polarisasi; nilai nol dibaca sebagai ketiadaan data."
        },
        {
          "source": "formula_specific",
          "description_id": "GDR tidak pernah melampaui satu. Bila hasilnya melampaui satu, ekspansi keliru dimasukkan."
        },
        {
          "source": "formula_specific",
          "description_id": "GDR adalah batas bawah kesehatan retensi. Sajikan berdampingan dengan NDR agar selisih ekspansi terlihat."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan sebaran komponen, bukan hanya nilai tengah. Bedakan nol dari nilai kosong pada penyimpanan dan pada tampilan."
        }
      ],
      "worked_example": {
        "inputs": {
          "start_mrr": 173900000,
          "contraction_mrr": 2600000,
          "churned_mrr": 4200000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 45,
        "xp_award_repeat": 9,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_gdr",
        "unlocks_after_module": 3,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "clv_simple",
          "clv",
          "ltv_cac_ratio",
          "rfm_score",
          "sales_velocity",
          "pipeline_coverage",
          "forecast_accuracy",
          "ndr",
          "k_factor"
        ],
        "same_phase": [
          "churn_rate",
          "retention_rate",
          "csat",
          "ces",
          "mrr_churn_rate",
          "payback_period",
          "clv_simple",
          "clv",
          "rfm_score",
          "ndr"
        ],
        "same_structural_class": [
          "nps",
          "contribution_margin",
          "forecast_accuracy",
          "ndr",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "cost_of_delay"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 46,
      "id": "ndr",
      "symbol": "NDR",
      "name": {
        "id": "Retensi Pendapatan Bersih",
        "en": "Net Dollar Retention"
      },
      "slug": "ndr",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "V",
          "stratum_name": {
            "id": "Metrik Komposit Nilai Pelanggan dan Produktivitas Saluran",
            "en": "Composite Customer Value and Channel Productivity"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B6",
          "phase_name": {
            "id": "Retensi dan Ekspansi",
            "en": "Retention and Expansion"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C3",
          "class_name": {
            "id": "Selisih dan indeks kesenjangan",
            "en": "Difference and gap index"
          },
          "structural_signature": "may be negative; zero carries substantive meaning",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D5",
          "domain_name": {
            "id": "Keputusan pelanggan, retensi, dan loyalitas",
            "en": "Customer, retention and loyalty decisions"
          },
          "decision_owner": "Manajer Pelanggan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 4,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Retensi Pendapatan Bersih. Menghubungkan 4 besaran masukan (start_mrr, expansion_mrr, contraction_mrr, churned_mrr) menjadi satu angka yang menjawab keputusan pelanggan, retensi, dan loyalitas pada fase retensi dan ekspansi. Termasuk kelas struktur C3 (Selisih dan indeks kesenjangan), strata V pada tangga kecanggihan.",
        "en": "Net Dollar Retention. Combines 4 input quantities (start_mrr, expansion_mrr, contraction_mrr, churned_mrr) into one number serving customer, retention and loyalty decisions at the retention and expansion phase. Structural class C3 (Difference and gap index), stratum V.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "NDR = \\dfrac{StartMRR + Expansion - Contraction - Churn}{StartMRR}",
        "javascript": "(start_mrr + expansion_mrr - contraction_mrr - churned_mrr) / start_mrr",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "start_mrr",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "expansion_mrr",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "contraction_mrr",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "churned_mrr",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "expansion_mrr",
          "javascript": "start_mrr * result - start_mrr + contraction_mrr + churned_mrr",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "contraction_mrr",
          "javascript": "start_mrr + expansion_mrr - churned_mrr - start_mrr * result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "churned_mrr",
          "javascript": "start_mrr + expansion_mrr - contraction_mrr - start_mrr * result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C3",
        "engine_rule": "null is not zero; distinguish None from 0.0 in the store and in the renderer",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.9,
          "label": "Menyusut",
          "guidance_id": "Basis pelanggan lama kehilangan nilai."
        },
        {
          "lower": 0.9,
          "upper": 1,
          "label": "Stagnan",
          "guidance_id": "Ekspansi belum menutup kebocoran."
        },
        {
          "lower": 1,
          "upper": 1.2,
          "label": "Bertumbuh",
          "guidance_id": "Pendapatan tumbuh tanpa pelanggan baru."
        },
        {
          "lower": 1.2,
          "upper": 10,
          "label": "Sangat kuat",
          "guidance_id": "Model ekspansi bekerja sangat baik."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Rata rata atas selisih menutupi polarisasi; nilai nol dibaca sebagai ketiadaan data."
        },
        {
          "source": "formula_specific",
          "description_id": "NDR di atas satu berarti pendapatan tumbuh meskipun tidak ada satu pun pelanggan baru. Inilah indikator terkuat kesehatan model langganan."
        },
        {
          "source": "formula_specific",
          "description_id": "NDR dapat menutupi churn pelanggan kecil yang parah bila ada beberapa pelanggan besar yang berekspansi. Selalu baca bersama churn pelanggan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan sebaran komponen, bukan hanya nilai tengah. Bedakan nol dari nilai kosong pada penyimpanan dan pada tampilan."
        }
      ],
      "worked_example": {
        "inputs": {
          "start_mrr": 173900000,
          "expansion_mrr": 14800000,
          "contraction_mrr": 2600000,
          "churned_mrr": 4200000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 45,
        "xp_award_repeat": 9,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_ndr",
        "unlocks_after_module": 3,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B6",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "clv_simple",
          "clv",
          "ltv_cac_ratio",
          "rfm_score",
          "sales_velocity",
          "pipeline_coverage",
          "forecast_accuracy",
          "gdr",
          "k_factor"
        ],
        "same_phase": [
          "churn_rate",
          "retention_rate",
          "csat",
          "ces",
          "mrr_churn_rate",
          "payback_period",
          "clv_simple",
          "clv",
          "rfm_score",
          "gdr"
        ],
        "same_structural_class": [
          "nps",
          "contribution_margin",
          "forecast_accuracy",
          "gdr",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "cost_of_delay"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 47,
      "id": "k_factor",
      "symbol": "K_Factor_Virality",
      "name": {
        "id": "Faktor K Viralitas",
        "en": "Viral K-Factor"
      },
      "slug": "k-factor",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "V",
          "stratum_name": {
            "id": "Metrik Komposit Nilai Pelanggan dan Produktivitas Saluran",
            "en": "Composite Customer Value and Channel Productivity"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B7",
          "phase_name": {
            "id": "Advokasi dan Pertumbuhan Endogen",
            "en": "Advocacy and Endogenous Growth"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D4",
          "domain_name": {
            "id": "Keputusan saluran digital dan konversi",
            "en": "Digital channel and conversion decisions"
          },
          "decision_owner": "Manajer Pertumbuhan",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "tactical",
        "reporting_cadence": "bulanan ke kuartalan"
      },
      "definition": {
        "id": "Faktor K Viralitas. Menghubungkan 2 besaran masukan (invites_per_user, invite_conversion) menjadi satu angka yang menjawab keputusan saluran digital dan konversi pada fase advokasi dan pertumbuhan endogen. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata V pada tangga kecanggihan.",
        "en": "Viral K-Factor. Combines 2 input quantities (invites_per_user, invite_conversion) into one number serving digital channel and conversion decisions at the advocacy and endogenous growth phase. Structural class C4 (Multiplicative composite), stratum V.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "K = InvitesPerUser \\times InviteConversion",
        "javascript": "invites_per_user * invite_conversion",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "invites_per_user",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "invite_conversion",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "invites_per_user",
          "javascript": "result / invite_conversion",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "invite_conversion",
          "javascript": "result / invites_per_user",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.3,
          "label": "Lemah",
          "guidance_id": "Pertumbuhan hampir seluruhnya bergantung pada belanja berbayar."
        },
        {
          "lower": 0.3,
          "upper": 0.7,
          "label": "Membantu",
          "guidance_id": "Viralitas menurunkan biaya akuisisi efektif."
        },
        {
          "lower": 0.7,
          "upper": 1,
          "label": "Kuat",
          "guidance_id": "Mendekati ambang pertumbuhan mandiri."
        },
        {
          "lower": 1,
          "upper": 100,
          "label": "Eksponensial",
          "guidance_id": "Jarang bertahan lama. Periksa keberlanjutan asumsi."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "Faktor K sama dengan satu adalah ambang pertumbuhan mandiri. Di bawah itu, pertumbuhan viral meluruh dan berhenti."
        },
        {
          "source": "formula_specific",
          "description_id": "Faktor K berubah seiring waktu karena jaringan sosial pengguna awal jenuh. Angka tunggal menyesatkan bila dipakai untuk proyeksi panjang."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "invites_per_user": 3.2,
          "invite_conversion": 0.18
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 45,
        "xp_award_repeat": 9,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_k_factor",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B7",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "clv_simple",
          "clv",
          "ltv_cac_ratio",
          "rfm_score",
          "sales_velocity",
          "pipeline_coverage",
          "forecast_accuracy",
          "gdr",
          "ndr"
        ],
        "same_phase": [
          "nps"
        ],
        "same_structural_class": [
          "mrr",
          "arr",
          "sales_velocity",
          "grp",
          "net_reach",
          "tam",
          "sam",
          "som",
          "rice_score",
          "wsjf_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 48,
      "id": "grp",
      "symbol": "GRP",
      "name": {
        "id": "Peringkat Kotor Terpaan",
        "en": "Gross Rating Points"
      },
      "slug": "grp",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "VI",
          "stratum_name": {
            "id": "Agregasi Jangkauan dan Frekuensi Media",
            "en": "Media Reach and Frequency Aggregation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B2",
          "phase_name": {
            "id": "Eksposur dan Kesadaran",
            "en": "Exposure and Awareness"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D3",
          "domain_name": {
            "id": "Keputusan komunikasi dan pembelian media",
            "en": "Communication and media decisions"
          },
          "decision_owner": "Manajer Media",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 7,
        "dashboard_tier": "tactical",
        "reporting_cadence": "per kampanye"
      },
      "definition": {
        "id": "Peringkat Kotor Terpaan. Menghubungkan 2 besaran masukan (reach_pct, frequency) menjadi satu angka yang menjawab keputusan komunikasi dan pembelian media pada fase eksposur dan kesadaran. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata VI pada tangga kecanggihan.",
        "en": "Gross Rating Points. Combines 2 input quantities (reach_pct, frequency) into one number serving communication and media decisions at the exposure and awareness phase. Structural class C4 (Multiplicative composite), stratum VI.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "GRP = ReachPercent \\times Frequency",
        "javascript": "reach_pct * frequency",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "reach_pct",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "frequency",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "reach_pct",
          "javascript": "result / frequency",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "frequency",
          "javascript": "result / reach_pct",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 100,
          "label": "Ringan",
          "guidance_id": "Belum menjangkau seluruh sasaran sekali pun."
        },
        {
          "lower": 100,
          "upper": 300,
          "label": "Sedang",
          "guidance_id": "Rentang lazim kampanye taktis."
        },
        {
          "lower": 300,
          "upper": 800,
          "label": "Berat",
          "guidance_id": "Rentang lazim peluncuran besar."
        },
        {
          "lower": 800,
          "upper": 10000,
          "label": "Sangat berat",
          "guidance_id": "Periksa titik jenuh dan kelelahan audiens."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "GRP dua ratus dapat berarti seratus persen jangkauan dua kali, atau lima puluh persen jangkauan empat kali. Dua rencana media yang sangat berbeda dengan angka sama."
        },
        {
          "source": "formula_specific",
          "description_id": "Jangkauan pada rumus ini dinyatakan dalam persen populasi, bukan dalam jumlah orang."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "reach_pct": 62,
          "frequency": 4.8
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 40,
        "xp_award_repeat": 8,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_grp",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B2",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "net_reach",
          "effective_frequency"
        ],
        "same_phase": [
          "cpm",
          "sov",
          "sos",
          "net_reach",
          "effective_frequency"
        ],
        "same_structural_class": [
          "mrr",
          "arr",
          "sales_velocity",
          "k_factor",
          "net_reach",
          "tam",
          "sam",
          "som",
          "rice_score",
          "wsjf_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 49,
      "id": "net_reach",
      "symbol": "Net_Reach",
      "name": {
        "id": "Jangkauan Bersih",
        "en": "Net Reach"
      },
      "slug": "net-reach",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "VI",
          "stratum_name": {
            "id": "Agregasi Jangkauan dan Frekuensi Media",
            "en": "Media Reach and Frequency Aggregation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B2",
          "phase_name": {
            "id": "Eksposur dan Kesadaran",
            "en": "Exposure and Awareness"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D3",
          "domain_name": {
            "id": "Keputusan komunikasi dan pembelian media",
            "en": "Communication and media decisions"
          },
          "decision_owner": "Manajer Media",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 7,
        "dashboard_tier": "tactical",
        "reporting_cadence": "per kampanye"
      },
      "definition": {
        "id": "Jangkauan Bersih. Menghubungkan 2 besaran masukan (gross_reach, duplication) menjadi satu angka yang menjawab keputusan komunikasi dan pembelian media pada fase eksposur dan kesadaran. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata VI pada tangga kecanggihan.",
        "en": "Net Reach. Combines 2 input quantities (gross_reach, duplication) into one number serving communication and media decisions at the exposure and awareness phase. Structural class C4 (Multiplicative composite), stratum VI.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "NetReach = GrossReach - Duplication",
        "javascript": "gross_reach - duplication",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "gross_reach",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "duplication",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "gross_reach",
          "javascript": "result + duplication",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "duplication",
          "javascript": "gross_reach - result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "Duplikasi lintas kanal hampir selalu diremehkan. Audiens kanal digital saling tumpang tindih jauh lebih besar daripada dugaan."
        },
        {
          "source": "formula_specific",
          "description_id": "Menjumlahkan jangkauan beberapa kanal tanpa koreksi duplikasi adalah kesalahan pelaporan media yang paling umum."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "gross_reach": 1840000,
          "duplication": 520000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 40,
        "xp_award_repeat": 8,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_net_reach",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B2",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "grp",
          "effective_frequency"
        ],
        "same_phase": [
          "cpm",
          "sov",
          "sos",
          "grp",
          "effective_frequency"
        ],
        "same_structural_class": [
          "mrr",
          "arr",
          "sales_velocity",
          "k_factor",
          "grp",
          "tam",
          "sam",
          "som",
          "rice_score",
          "wsjf_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 50,
      "id": "effective_frequency",
      "symbol": "Effective_Frequency",
      "name": {
        "id": "Frekuensi Efektif",
        "en": "Effective Frequency Share"
      },
      "slug": "effective-frequency",
      "taxonomy": {
        "axis_a": {
          "tier_code": "B",
          "tier_name": {
            "id": "Diagnostik",
            "en": "Diagnostic"
          },
          "stratum_code": "VI",
          "stratum_name": {
            "id": "Agregasi Jangkauan dan Frekuensi Media",
            "en": "Media Reach and Frequency Aggregation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B2",
          "phase_name": {
            "id": "Eksposur dan Kesadaran",
            "en": "Exposure and Awareness"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D3",
          "domain_name": {
            "id": "Keputusan komunikasi dan pembelian media",
            "en": "Communication and media decisions"
          },
          "decision_owner": "Manajer Media",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 7,
        "dashboard_tier": "tactical",
        "reporting_cadence": "per kampanye"
      },
      "definition": {
        "id": "Frekuensi Efektif. Menghubungkan 2 besaran masukan (reach_at_threshold, total_reach) menjadi satu angka yang menjawab keputusan komunikasi dan pembelian media pada fase eksposur dan kesadaran. Termasuk kelas struktur C1 (Proporsi terbatas), strata VI pada tangga kecanggihan.",
        "en": "Effective Frequency Share. Combines 2 input quantities (reach_at_threshold, total_reach) into one number serving communication and media decisions at the exposure and awareness phase. Structural class C1 (Bounded proportion), stratum VI.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "EF = \\dfrac{ReachAtThreshold}{TotalReach}",
        "javascript": "reach_at_threshold / total_reach",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "reach_at_threshold",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "total_reach",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "reach_at_threshold",
          "javascript": "result * total_reach",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "total_reach",
          "javascript": "reach_at_threshold / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.3,
          "label": "Rendah",
          "guidance_id": "Sebagian besar audiens terpapar terlalu jarang untuk mengingat."
        },
        {
          "lower": 0.3,
          "upper": 0.55,
          "label": "Wajar",
          "guidance_id": "Sebagian audiens mencapai ambang."
        },
        {
          "lower": 0.55,
          "upper": 0.8,
          "label": "Baik",
          "guidance_id": "Mayoritas audiens terpapar cukup."
        },
        {
          "lower": 0.8,
          "upper": 1,
          "label": "Sangat baik",
          "guidance_id": "Periksa apakah anggaran berlebih pada audiens sempit."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Ambang efektif bukan konstanta universal. Nilai tiga yang sering dikutip berasal dari satu penelitian lama pada kategori tertentu."
        },
        {
          "source": "formula_specific",
          "description_id": "Metrik ini bermuatan teori paling tinggi di antara metrik media. Nyatakan ambang yang dipakai setiap kali melaporkannya."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "reach_at_threshold": 782000,
          "total_reach": 1320000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 40,
        "xp_award_repeat": 8,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_effective_frequency",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B2",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "grp",
          "net_reach"
        ],
        "same_phase": [
          "cpm",
          "sov",
          "sos",
          "grp",
          "net_reach"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "gabor_granger"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 51,
      "id": "tam",
      "symbol": "TAM",
      "name": {
        "id": "Pasar Total yang Dapat Dilayani",
        "en": "Total Addressable Market"
      },
      "slug": "tam",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VII",
          "stratum_name": {
            "id": "Potensi Pasar dan Respons Permintaan",
            "en": "Market Potential and Demand Response"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D7",
          "domain_name": {
            "id": "Keputusan pasar sasaran dan posisi kompetitif",
            "en": "Target market and positioning decisions"
          },
          "decision_owner": "Direktur Strategi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 7,
        "dashboard_tier": "strategic",
        "reporting_cadence": "semesteran ke tahunan"
      },
      "definition": {
        "id": "Pasar Total yang Dapat Dilayani. Menghubungkan 3 besaran masukan (population, need_percent, arpu) menjadi satu angka yang menjawab keputusan pasar sasaran dan posisi kompetitif pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata VII pada tangga kecanggihan.",
        "en": "Total Addressable Market. Combines 3 input quantities (population, need_percent, arpu) into one number serving target market and positioning decisions at the market definition and understanding phase. Structural class C4 (Multiplicative composite), stratum VII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "TAM = Population \\times NeedPercent \\times ARPU",
        "javascript": "population * (need_percent / 100) * arpu",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "population",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "need_percent",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "arpu",
          "role": "operand",
          "required": true,
          "position": 2
        }
      ],
      "output": {
        "canonical_variable_id": "tam",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "population",
          "javascript": "tam / ((need_percent / 100) * arpu)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "need_percent",
          "javascript": "(tam / (population * arpu)) * 100",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "arpu",
          "javascript": "tam / (population * (need_percent / 100))",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "ARPU pada rumus ini adalah asumsi proyeksi, bukan ARPU aktual dari data internal. Perangkat lunak harus memisahkan dua variabel ini secara tegas."
        },
        {
          "source": "formula_specific",
          "description_id": "TAM yang dihitung dari atas ke bawah selalu lebih besar daripada TAM yang dihitung dari bawah ke atas. Sajikan keduanya bila memungkinkan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "population": 410000,
          "need_percent": 38,
          "arpu": 1800000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 55,
        "xp_award_repeat": 11,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_tam",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "sam",
          "som",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity"
        ],
        "same_phase": [
          "market_share",
          "penetration_rate",
          "relative_market_share",
          "sam",
          "som",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity",
          "bass_f",
          "bass_n"
        ],
        "same_structural_class": [
          "mrr",
          "arr",
          "sales_velocity",
          "k_factor",
          "grp",
          "net_reach",
          "sam",
          "som",
          "rice_score",
          "wsjf_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [
          "arpu"
        ],
        "feeds_inputs_of": [
          "sam"
        ]
      }
    },
    {
      "index": 52,
      "id": "sam",
      "symbol": "SAM",
      "name": {
        "id": "Pasar yang Dapat Dilayani",
        "en": "Serviceable Available Market"
      },
      "slug": "sam",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VII",
          "stratum_name": {
            "id": "Potensi Pasar dan Respons Permintaan",
            "en": "Market Potential and Demand Response"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D7",
          "domain_name": {
            "id": "Keputusan pasar sasaran dan posisi kompetitif",
            "en": "Target market and positioning decisions"
          },
          "decision_owner": "Direktur Strategi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L3",
        "curriculum_module": 7,
        "dashboard_tier": "strategic",
        "reporting_cadence": "semesteran ke tahunan"
      },
      "definition": {
        "id": "Pasar yang Dapat Dilayani. Menghubungkan 2 besaran masukan (tam, reachable_percent) menjadi satu angka yang menjawab keputusan pasar sasaran dan posisi kompetitif pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata VII pada tangga kecanggihan.",
        "en": "Serviceable Available Market. Combines 2 input quantities (tam, reachable_percent) into one number serving target market and positioning decisions at the market definition and understanding phase. Structural class C4 (Multiplicative composite), stratum VII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "SAM = TAM \\times ReachablePercent",
        "javascript": "tam * (reachable_percent / 100)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "tam",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "reachable_percent",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "sam",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "tam",
          "javascript": "sam / (reachable_percent / 100)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "reachable_percent",
          "javascript": "(sam / tam) * 100",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "Keterjangkauan dibatasi oleh model distribusi, bahasa, regulasi, dan kanal yang benar benar dimiliki, bukan oleh ambisi."
        },
        {
          "source": "formula_specific",
          "description_id": "SAM tidak boleh dihitung tanpa TAM. Rantai ini bertingkat dan setiap tingkat harus terlihat."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "tam": 280440000000,
          "reachable_percent": 35
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 55,
        "xp_award_repeat": 11,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_sam",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "tam",
          "som",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity"
        ],
        "same_phase": [
          "market_share",
          "penetration_rate",
          "relative_market_share",
          "tam",
          "som",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity",
          "bass_f",
          "bass_n"
        ],
        "same_structural_class": [
          "mrr",
          "arr",
          "sales_velocity",
          "k_factor",
          "grp",
          "net_reach",
          "tam",
          "som",
          "rice_score",
          "wsjf_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [
          "tam"
        ],
        "feeds_inputs_of": [
          "som"
        ]
      }
    },
    {
      "index": 53,
      "id": "som",
      "symbol": "SOM",
      "name": {
        "id": "Pasar yang Dapat Diraih",
        "en": "Serviceable Obtainable Market"
      },
      "slug": "som",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VII",
          "stratum_name": {
            "id": "Potensi Pasar dan Respons Permintaan",
            "en": "Market Potential and Demand Response"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D7",
          "domain_name": {
            "id": "Keputusan pasar sasaran dan posisi kompetitif",
            "en": "Target market and positioning decisions"
          },
          "decision_owner": "Direktur Strategi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L4",
        "curriculum_module": 7,
        "dashboard_tier": "strategic",
        "reporting_cadence": "semesteran ke tahunan"
      },
      "definition": {
        "id": "Pasar yang Dapat Diraih. Menghubungkan 2 besaran masukan (sam, capture_percent) menjadi satu angka yang menjawab keputusan pasar sasaran dan posisi kompetitif pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata VII pada tangga kecanggihan.",
        "en": "Serviceable Obtainable Market. Combines 2 input quantities (sam, capture_percent) into one number serving target market and positioning decisions at the market definition and understanding phase. Structural class C4 (Multiplicative composite), stratum VII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "SOM = SAM \\times CapturePercent",
        "javascript": "sam * (capture_percent / 100)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "sam",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "capture_percent",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "sam",
          "javascript": "result / (capture_percent / 100)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "capture_percent",
          "javascript": "(result / sam) * 100",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "Persentase tertangkap harus dapat dipertanggungjawabkan dengan kapasitas produksi, tenaga penjualan, dan anggaran. Angka yang dipilih karena terdengar sederhana adalah tanda perencanaan yang lemah."
        },
        {
          "source": "formula_specific",
          "description_id": "SOM lazimnya menjadi parameter potensi pasar akhir pada model difusi Bass. Ketautan ini perlu ditampilkan perangkat lunak."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "sam": 98154000000,
          "capture_percent": 8
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 55,
        "xp_award_repeat": 11,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_som",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "tam",
          "sam",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity"
        ],
        "same_phase": [
          "market_share",
          "penetration_rate",
          "relative_market_share",
          "tam",
          "sam",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity",
          "bass_f",
          "bass_n"
        ],
        "same_structural_class": [
          "mrr",
          "arr",
          "sales_velocity",
          "k_factor",
          "grp",
          "net_reach",
          "tam",
          "sam",
          "rice_score",
          "wsjf_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [
          "sam"
        ],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 54,
      "id": "price_elasticity",
      "symbol": "Price_Elasticity",
      "name": {
        "id": "Elastisitas Harga Permintaan",
        "en": "Price Elasticity of Demand"
      },
      "slug": "price-elasticity",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VII",
          "stratum_name": {
            "id": "Potensi Pasar dan Respons Permintaan",
            "en": "Market Potential and Demand Response"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C8",
          "class_name": {
            "id": "Elastisitas persentase",
            "en": "Percentage-change elasticity"
          },
          "structural_signature": "sign carries classification information, not merely direction",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 7,
        "dashboard_tier": "strategic",
        "reporting_cadence": "semesteran ke tahunan"
      },
      "definition": {
        "id": "Elastisitas Harga Permintaan. Menghubungkan 4 besaran masukan (q1, q2, p1, p2) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C8 (Elastisitas persentase), strata VII pada tangga kecanggihan.",
        "en": "Price Elasticity of Demand. Combines 4 input quantities (q1, q2, p1, p2) into one number serving pricing and margin decisions at the market definition and understanding phase. Structural class C8 (Percentage-change elasticity), stratum VII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "E_p = \\dfrac{(Q_2 - Q_1) / \\left[(Q_1 + Q_2)/2\\right]}{(P_2 - P_1) / \\left[(P_1 + P_2)/2\\right]}",
        "javascript": "((q2 - q1) / ((q1 + q2) / 2)) / ((p2 - p1) / ((p1 + p2) / 2))",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "q1",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "q2",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "p1",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "p2",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "q2",
          "javascript": "q1 * (2 + result * ((p2 - p1) / ((p1 + p2) / 2))) / (2 - result * ((p2 - p1) / ((p1 + p2) / 2)))",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 2,
      "validation": {
        "structural_class": "C8",
        "engine_rule": "store observed range; grey out extrapolated region in the chart",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -1000,
          "upper": -1,
          "label": "Elastis",
          "guidance_id": "Penurunan harga menaikkan pendapatan total."
        },
        {
          "lower": -1,
          "upper": 0,
          "label": "Inelastis",
          "guidance_id": "Kenaikan harga menaikkan pendapatan total."
        },
        {
          "lower": 0,
          "upper": 1000,
          "label": "Anomali",
          "guidance_id": "Tanda positif menandakan barang Giffen, barang Veblen, atau kesalahan data."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Korelasi dibaca sebagai kausalitas; ekstrapolasi ke luar rentang harga yang teramati."
        },
        {
          "source": "formula_specific",
          "description_id": "Metode titik tengah dipakai agar hasil tidak bergantung pada arah perubahan. Metode selisih sederhana menghasilkan dua angka berbeda untuk perubahan yang sama."
        },
        {
          "source": "formula_specific",
          "description_id": "Elastisitas hanya sahih dalam rentang harga yang teramati. Ekstrapolasi ke harga di luar rentang adalah kekeliruan serius."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Batasi penafsiran pada rentang teramati dan tampilkan rentang itu pada grafik."
        }
      ],
      "worked_example": {
        "inputs": {
          "q1": 1200,
          "q2": 1450,
          "p1": 125000,
          "p2": 110000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 55,
        "xp_award_repeat": 11,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_price_elasticity",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "tam",
          "sam",
          "som",
          "cross_elasticity",
          "income_elasticity"
        ],
        "same_phase": [
          "market_share",
          "penetration_rate",
          "relative_market_share",
          "tam",
          "sam",
          "som",
          "cross_elasticity",
          "income_elasticity",
          "bass_f",
          "bass_n"
        ],
        "same_structural_class": [
          "cross_elasticity",
          "income_elasticity"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 55,
      "id": "cross_elasticity",
      "symbol": "Cross_Elasticity",
      "name": {
        "id": "Elastisitas Silang",
        "en": "Cross-Price Elasticity"
      },
      "slug": "cross-elasticity",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VII",
          "stratum_name": {
            "id": "Potensi Pasar dan Respons Permintaan",
            "en": "Market Potential and Demand Response"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C8",
          "class_name": {
            "id": "Elastisitas persentase",
            "en": "Percentage-change elasticity"
          },
          "structural_signature": "sign carries classification information, not merely direction",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 7,
        "dashboard_tier": "strategic",
        "reporting_cadence": "semesteran ke tahunan"
      },
      "definition": {
        "id": "Elastisitas Silang. Menghubungkan 4 besaran masukan (qx1, qx2, py1, py2) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C8 (Elastisitas persentase), strata VII pada tangga kecanggihan.",
        "en": "Cross-Price Elasticity. Combines 4 input quantities (qx1, qx2, py1, py2) into one number serving pricing and margin decisions at the market definition and understanding phase. Structural class C8 (Percentage-change elasticity), stratum VII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "E_{xy} = \\dfrac{(Q_{x2} - Q_{x1}) / \\left[(Q_{x1} + Q_{x2})/2\\right]}{(P_{y2} - P_{y1}) / \\left[(P_{y1} + P_{y2})/2\\right]}",
        "javascript": "((qx2 - qx1) / ((qx1 + qx2) / 2)) / ((py2 - py1) / ((py1 + py2) / 2))",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "qx1",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "qx2",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "py1",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "py2",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C8",
        "engine_rule": "store observed range; grey out extrapolated region in the chart",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -1000,
          "upper": -0.1,
          "label": "Komplementer",
          "guidance_id": "Kedua produk dikonsumsi bersama."
        },
        {
          "lower": -0.1,
          "upper": 0.1,
          "label": "Tidak terkait",
          "guidance_id": "Bukan pesaing dan bukan pelengkap."
        },
        {
          "lower": 0.1,
          "upper": 1000,
          "label": "Substitusi",
          "guidance_id": "Kedua produk bersaing langsung."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Korelasi dibaca sebagai kausalitas; ekstrapolasi ke luar rentang harga yang teramati."
        },
        {
          "source": "formula_specific",
          "description_id": "Tanda aljabar membawa informasi klasifikasi, bukan sekadar arah. Mengabaikan tanda menghapus seluruh makna rumus."
        },
        {
          "source": "formula_specific",
          "description_id": "Elastisitas silang yang tinggi menandakan pasar yang sesungguhnya lebih luas daripada definisi kategori yang dipakai."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Batasi penafsiran pada rentang teramati dan tampilkan rentang itu pada grafik."
        }
      ],
      "worked_example": {
        "inputs": {
          "qx1": 1200,
          "qx2": 1380,
          "py1": 98000,
          "py2": 115000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 55,
        "xp_award_repeat": 11,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_cross_elasticity",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "tam",
          "sam",
          "som",
          "price_elasticity",
          "income_elasticity"
        ],
        "same_phase": [
          "market_share",
          "penetration_rate",
          "relative_market_share",
          "tam",
          "sam",
          "som",
          "price_elasticity",
          "income_elasticity",
          "bass_f",
          "bass_n"
        ],
        "same_structural_class": [
          "price_elasticity",
          "income_elasticity"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 56,
      "id": "income_elasticity",
      "symbol": "Income_Elasticity",
      "name": {
        "id": "Elastisitas Pendapatan",
        "en": "Income Elasticity of Demand"
      },
      "slug": "income-elasticity",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VII",
          "stratum_name": {
            "id": "Potensi Pasar dan Respons Permintaan",
            "en": "Market Potential and Demand Response"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C8",
          "class_name": {
            "id": "Elastisitas persentase",
            "en": "Percentage-change elasticity"
          },
          "structural_signature": "sign carries classification information, not merely direction",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 7,
        "dashboard_tier": "strategic",
        "reporting_cadence": "semesteran ke tahunan"
      },
      "definition": {
        "id": "Elastisitas Pendapatan. Menghubungkan 4 besaran masukan (q1, q2, i1, i2) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C8 (Elastisitas persentase), strata VII pada tangga kecanggihan.",
        "en": "Income Elasticity of Demand. Combines 4 input quantities (q1, q2, i1, i2) into one number serving pricing and margin decisions at the market definition and understanding phase. Structural class C8 (Percentage-change elasticity), stratum VII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "E_i = \\dfrac{(Q_2 - Q_1) / \\left[(Q_1 + Q_2)/2\\right]}{(I_2 - I_1) / \\left[(I_1 + I_2)/2\\right]}",
        "javascript": "((q2 - q1) / ((q1 + q2) / 2)) / ((i2 - i1) / ((i1 + i2) / 2))",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "q1",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "q2",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "i1",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "i2",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C8",
        "engine_rule": "store observed range; grey out extrapolated region in the chart",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -1000,
          "upper": 0,
          "label": "Barang inferior",
          "guidance_id": "Permintaan turun saat pendapatan naik."
        },
        {
          "lower": 0,
          "upper": 1,
          "label": "Kebutuhan pokok",
          "guidance_id": "Permintaan naik lebih lambat daripada pendapatan."
        },
        {
          "lower": 1,
          "upper": 1000,
          "label": "Barang mewah",
          "guidance_id": "Permintaan naik lebih cepat daripada pendapatan."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Korelasi dibaca sebagai kausalitas; ekstrapolasi ke luar rentang harga yang teramati."
        },
        {
          "source": "formula_specific",
          "description_id": "Klasifikasi barang mewah dan pokok bersifat relatif terhadap tingkat pendapatan sampel, bukan sifat bawaan produk."
        },
        {
          "source": "formula_specific",
          "description_id": "Data pendapatan lazimnya berasal dari sumber sekunder dengan jeda waktu. Nyatakan tahun sumbernya."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Batasi penafsiran pada rentang teramati dan tampilkan rentang itu pada grafik."
        }
      ],
      "worked_example": {
        "inputs": {
          "q1": 1200,
          "q2": 1560,
          "i1": 4800000,
          "i2": 5600000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 55,
        "xp_award_repeat": 11,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_income_elasticity",
        "unlocks_after_module": 6,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "tam",
          "sam",
          "som",
          "price_elasticity",
          "cross_elasticity"
        ],
        "same_phase": [
          "market_share",
          "penetration_rate",
          "relative_market_share",
          "tam",
          "sam",
          "som",
          "price_elasticity",
          "cross_elasticity",
          "bass_f",
          "bass_n"
        ],
        "same_structural_class": [
          "price_elasticity",
          "cross_elasticity"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 57,
      "id": "van_westendorp",
      "symbol": "Van_Westendorp_Optimal",
      "name": {
        "id": "Titik Harga Optimal Van Westendorp",
        "en": "Van Westendorp Optimal Price Point"
      },
      "slug": "van-westendorp",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VIII",
          "stratum_name": {
            "id": "Estimasi Preferensi dan Kesediaan Membayar",
            "en": "Preference and Willingness-to-Pay Estimation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B1",
          "phase_name": {
            "id": "Perumusan Penawaran",
            "en": "Offer Formulation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C10",
          "class_name": {
            "id": "Solusi implisit dan iteratif",
            "en": "Implicit and iterative solution"
          },
          "structural_signature": "no closed form; numerical procedure with existence and uniqueness questions",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 8,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus riset"
      },
      "definition": {
        "id": "Titik Harga Optimal Van Westendorp. Menghubungkan 4 besaran masukan (too_cheap, cheap, expensive, too_expensive) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase perumusan penawaran. Termasuk kelas struktur C10 (Solusi implisit dan iteratif), strata VIII pada tangga kecanggihan.",
        "en": "Van Westendorp Optimal Price Point. Combines 4 input quantities (too_cheap, cheap, expensive, too_expensive) into one number serving pricing and margin decisions at the offer formulation phase. Structural class C10 (Implicit and iterative solution), stratum VIII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "OPP = \\{P : F_{TooCheap}(P) = F_{TooExpensive}(P)\\}",
        "javascript": "vw_intersection(too_cheap, cheap, expensive, too_expensive)",
        "requires_helper": "vw_intersection",
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "too_cheap",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "cheap",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "expensive",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "too_expensive",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C10",
        "engine_rule": "run sign-change scan before solving; report all roots found, never silently pick one",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Solusi ganda atau tidak ada solusi sama sekali, dilaporkan sebagai angka tunggal."
        },
        {
          "source": "formula_specific",
          "description_id": "Rumus ini bukan perhitungan tertutup melainkan pencarian titik potong dua kurva kumulatif. Perangkat lunak harus menampilkan kurvanya, bukan hanya angkanya."
        },
        {
          "source": "formula_specific",
          "description_id": "Metode ini mengukur persepsi kewajaran harga, bukan kesediaan membayar. Responden yang menyebut harga wajar belum tentu membeli."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Periksa keberadaan dan ketunggalan solusi sebelum melaporkan. Tampilkan seluruh akar bila lebih dari satu."
        }
      ],
      "worked_example": {
        "inputs": {
          "too_cheap": 45000,
          "cheap": 78000,
          "expensive": 135000,
          "too_expensive": 195000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 70,
        "xp_award_repeat": 14,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_van_westendorp",
        "unlocks_after_module": 7,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B1",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_phase": [
          "contribution_margin",
          "break_even_quantity",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_structural_class": [
          "irr"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 58,
      "id": "gabor_granger",
      "symbol": "Gabor_Granger_Demand",
      "name": {
        "id": "Permintaan Gabor Granger",
        "en": "Gabor-Granger Demand"
      },
      "slug": "gabor-granger",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VIII",
          "stratum_name": {
            "id": "Estimasi Preferensi dan Kesediaan Membayar",
            "en": "Preference and Willingness-to-Pay Estimation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B1",
          "phase_name": {
            "id": "Perumusan Penawaran",
            "en": "Offer Formulation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C1",
          "class_name": {
            "id": "Proporsi terbatas",
            "en": "Bounded proportion"
          },
          "structural_signature": "numerator is a strict subset of the denominator; result lies in [0, 1]",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 8,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus riset"
      },
      "definition": {
        "id": "Permintaan Gabor Granger. Menghubungkan 2 besaran masukan (buyers_at_p, total_respondents) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase perumusan penawaran. Termasuk kelas struktur C1 (Proporsi terbatas), strata VIII pada tangga kecanggihan.",
        "en": "Gabor-Granger Demand. Combines 2 input quantities (buyers_at_p, total_respondents) into one number serving pricing and margin decisions at the offer formulation phase. Structural class C1 (Bounded proportion), stratum VIII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "D(P) = \\dfrac{BuyersAtP}{TotalRespondents}",
        "javascript": "buyers_at_p / total_respondents",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "buyers_at_p",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "total_respondents",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "buyers_at_p",
          "javascript": "result * total_respondents",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "total_respondents",
          "javascript": "buyers_at_p / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C1",
        "engine_rule": "assert 0 <= result <= 1 else raise DomainViolation",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Ketidakcocokan periode antara pembilang dan penyebut, atau penyebut yang bukan himpunan induk sesungguhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Kurva permintaan tersurvei selalu terlalu optimistis. Kalibrasi terhadap perilaku nyata lazimnya memangkas tiga puluh sampai lima puluh persen."
        },
        {
          "source": "formula_specific",
          "description_id": "Titik harga harus diacak urutannya, atau responden akan tertambat pada harga pertama yang disebut."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Kunci definisi kohort dan jendela waktu. Tolak setiap hasil di luar rentang nol sampai satu dan tampilkan pesan diagnostik, bukan angka."
        }
      ],
      "worked_example": {
        "inputs": {
          "buyers_at_p": 168,
          "total_respondents": 420
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 70,
        "xp_award_repeat": 14,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_gabor_granger",
        "unlocks_after_module": 7,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B1",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "van_westendorp",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_phase": [
          "contribution_margin",
          "break_even_quantity",
          "van_westendorp",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_structural_class": [
          "ctr",
          "conversion_rate",
          "engagement_rate",
          "bounce_rate",
          "cart_abandonment_rate",
          "churn_rate",
          "retention_rate",
          "mql_to_sql_rate",
          "lead_to_customer_rate",
          "market_share",
          "penetration_rate",
          "sov",
          "sos",
          "csat",
          "gross_margin",
          "net_margin",
          "mrr_churn_rate",
          "effective_frequency"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 59,
      "id": "conjoint_utility",
      "symbol": "Conjoint_Utility",
      "name": {
        "id": "Utilitas Konjoin",
        "en": "Conjoint Utility"
      },
      "slug": "conjoint-utility",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VIII",
          "stratum_name": {
            "id": "Estimasi Preferensi dan Kesediaan Membayar",
            "en": "Preference and Willingness-to-Pay Estimation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B1",
          "phase_name": {
            "id": "Perumusan Penawaran",
            "en": "Offer Formulation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C5",
          "class_name": {
            "id": "Agregasi linear berbobot",
            "en": "Weighted linear aggregation"
          },
          "structural_signature": "validity rests entirely on the provenance of the weights",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D1",
          "domain_name": {
            "id": "Keputusan produk dan inovasi",
            "en": "Product and innovation decisions"
          },
          "decision_owner": "Manajer Produk",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 8,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus riset"
      },
      "definition": {
        "id": "Utilitas Konjoin. Menghubungkan 2 besaran masukan (beta_vector, x_vector) menjadi satu angka yang menjawab keputusan produk dan inovasi pada fase perumusan penawaran. Termasuk kelas struktur C5 (Agregasi linear berbobot), strata VIII pada tangga kecanggihan.",
        "en": "Conjoint Utility. Combines 2 input quantities (beta_vector, x_vector) into one number serving product and innovation decisions at the offer formulation phase. Structural class C5 (Weighted linear aggregation), stratum VIII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "U = \\sum_{i=1}^{n} \\beta_i x_i",
        "javascript": "dot(beta_vector, x_vector)",
        "requires_helper": "dot",
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "beta_vector",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "x_vector",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C5",
        "engine_rule": "require weight_provenance field; run rank-stability perturbation test",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Bobot ditetapkan tanpa dasar namun hasilnya tampak objektif."
        },
        {
          "source": "formula_specific",
          "description_id": "Utilitas hanya bermakna sebagai perbandingan antarprofil. Nilai absolutnya tidak memiliki satuan yang dapat ditafsirkan sendiri."
        },
        {
          "source": "formula_specific",
          "description_id": "Koefisien diperoleh dari estimasi, bukan dimasukkan pengguna. Perangkat lunak harus menyediakan modul estimasi atau meminta koefisien dari luar secara jujur."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Wajibkan pencatatan asal bobot. Jalankan uji stabilitas peringkat terhadap gangguan bobot sebesar lima persen."
        }
      ],
      "worked_example": {
        "inputs": {
          "beta_vector": [
            0.42,
            -0.31,
            0.18,
            0.55
          ],
          "x_vector": [
            1,
            1,
            0,
            1
          ]
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 70,
        "xp_award_repeat": 14,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_conjoint_utility",
        "unlocks_after_module": 7,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B1",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "van_westendorp",
          "gabor_granger",
          "wtp",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_phase": [
          "contribution_margin",
          "break_even_quantity",
          "van_westendorp",
          "gabor_granger",
          "wtp",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_structural_class": [
          "ces",
          "rfm_score",
          "qfd_technical_importance",
          "weighted_screening"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 60,
      "id": "wtp",
      "symbol": "WTP",
      "name": {
        "id": "Kesediaan Membayar",
        "en": "Willingness to Pay"
      },
      "slug": "wtp",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VIII",
          "stratum_name": {
            "id": "Estimasi Preferensi dan Kesediaan Membayar",
            "en": "Preference and Willingness-to-Pay Estimation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B1",
          "phase_name": {
            "id": "Perumusan Penawaran",
            "en": "Offer Formulation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C2",
          "class_name": {
            "id": "Rasio intensitas tak terbatas",
            "en": "Unbounded intensity ratio"
          },
          "structural_signature": "mixed units, no upper bound, meaningful only against a benchmark",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D2",
          "domain_name": {
            "id": "Keputusan harga dan struktur marjin",
            "en": "Pricing and margin decisions"
          },
          "decision_owner": "Manajer Harga atau Keuangan Komersial",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 8,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus riset"
      },
      "definition": {
        "id": "Kesediaan Membayar. Menghubungkan 2 besaran masukan (delta_u, beta_price) menjadi satu angka yang menjawab keputusan harga dan struktur marjin pada fase perumusan penawaran. Termasuk kelas struktur C2 (Rasio intensitas tak terbatas), strata VIII pada tangga kecanggihan.",
        "en": "Willingness to Pay. Combines 2 input quantities (delta_u, beta_price) into one number serving pricing and margin decisions at the offer formulation phase. Structural class C2 (Unbounded intensity ratio), stratum VIII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "WTP = \\dfrac{\\Delta U}{|\\beta_{price}|}",
        "javascript": "delta_u / Math.abs(beta_price)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "delta_u",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "beta_price",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "delta_u",
          "javascript": "result * Math.abs(beta_price)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "beta_price",
          "javascript": "delta_u / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C2",
        "engine_rule": "require cost_scope metadata; refuse cross-entity comparison when scopes differ",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Perbandingan lintas kanal atau lintas tim tanpa penyetaraan lingkup biaya."
        },
        {
          "source": "formula_specific",
          "description_id": "Koefisien harga wajib bernilai negatif pada model yang benar. Koefisien positif menandakan cacat pada desain atau pada data."
        },
        {
          "source": "formula_specific",
          "description_id": "Kesediaan membayar hasil konjoin adalah selisih relatif terhadap profil acuan, bukan harga absolut yang siap dipasang."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Simpan daftar komponen biaya sebagai metadata wajib pada setiap perhitungan. Tampilkan lingkup itu berdampingan dengan hasilnya."
        }
      ],
      "worked_example": {
        "inputs": {
          "delta_u": 0.55,
          "beta_price": -0.000012
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 70,
        "xp_award_repeat": 14,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_wtp",
        "unlocks_after_module": 7,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B1",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_phase": [
          "contribution_margin",
          "break_even_quantity",
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "kano_better",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_structural_class": [
          "aov",
          "arpu",
          "arppu",
          "purchase_frequency",
          "cpm",
          "cpc",
          "cpl",
          "cpa",
          "break_even_quantity",
          "cac",
          "payback_period",
          "roas",
          "roi",
          "romi",
          "relative_market_share",
          "ltv_cac_ratio",
          "pipeline_coverage"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 61,
      "id": "kano_better",
      "symbol": "Kano_Better",
      "name": {
        "id": "Koefisien Kepuasan Kano",
        "en": "Kano Better Coefficient"
      },
      "slug": "kano-better",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VIII",
          "stratum_name": {
            "id": "Estimasi Preferensi dan Kesediaan Membayar",
            "en": "Preference and Willingness-to-Pay Estimation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B1",
          "phase_name": {
            "id": "Perumusan Penawaran",
            "en": "Offer Formulation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C3",
          "class_name": {
            "id": "Selisih dan indeks kesenjangan",
            "en": "Difference and gap index"
          },
          "structural_signature": "may be negative; zero carries substantive meaning",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D1",
          "domain_name": {
            "id": "Keputusan produk dan inovasi",
            "en": "Product and innovation decisions"
          },
          "decision_owner": "Manajer Produk",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 8,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus riset"
      },
      "definition": {
        "id": "Koefisien Kepuasan Kano. Menghubungkan 4 besaran masukan (kano_a, kano_o, kano_m, kano_i) menjadi satu angka yang menjawab keputusan produk dan inovasi pada fase perumusan penawaran. Termasuk kelas struktur C3 (Selisih dan indeks kesenjangan), strata VIII pada tangga kecanggihan.",
        "en": "Kano Better Coefficient. Combines 4 input quantities (kano_a, kano_o, kano_m, kano_i) into one number serving product and innovation decisions at the offer formulation phase. Structural class C3 (Difference and gap index), stratum VIII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "Better = \\dfrac{A + O}{A + O + M + I}",
        "javascript": "(kano_a + kano_o) / (kano_a + kano_o + kano_m + kano_i)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "kano_a",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "kano_o",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "kano_m",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "kano_i",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C3",
        "engine_rule": "null is not zero; distinguish None from 0.0 in the store and in the renderer",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.3,
          "label": "Dampak rendah",
          "guidance_id": "Menambahkan fitur ini sedikit menaikkan kepuasan."
        },
        {
          "lower": 0.3,
          "upper": 0.6,
          "label": "Dampak sedang",
          "guidance_id": "Fitur layak dipertimbangkan."
        },
        {
          "lower": 0.6,
          "upper": 1,
          "label": "Dampak tinggi",
          "guidance_id": "Fitur berpotensi menjadi pembeda utama."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Rata rata atas selisih menutupi polarisasi; nilai nol dibaca sebagai ketiadaan data."
        },
        {
          "source": "formula_specific",
          "description_id": "Koefisien ini wajib dibaca berpasangan dengan koefisien ketidakpuasan. Satu tanpa yang lain kehilangan seluruh daya klasifikasinya."
        },
        {
          "source": "formula_specific",
          "description_id": "Kategori Kano bergeser seiring waktu. Fitur menarik hari ini menjadi kebutuhan dasar dua tahun kemudian."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan sebaran komponen, bukan hanya nilai tengah. Bedakan nol dari nilai kosong pada penyimpanan dan pada tampilan."
        }
      ],
      "worked_example": {
        "inputs": {
          "kano_a": 148,
          "kano_o": 96,
          "kano_m": 112,
          "kano_i": 64
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 70,
        "xp_award_repeat": 14,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_kano_better",
        "unlocks_after_module": 7,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B1",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_phase": [
          "contribution_margin",
          "break_even_quantity",
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_worse",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_structural_class": [
          "nps",
          "contribution_margin",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "kano_worse",
          "opportunity_score",
          "cost_of_delay"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 62,
      "id": "kano_worse",
      "symbol": "Kano_Worse",
      "name": {
        "id": "Koefisien Ketidakpuasan Kano",
        "en": "Kano Worse Coefficient"
      },
      "slug": "kano-worse",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VIII",
          "stratum_name": {
            "id": "Estimasi Preferensi dan Kesediaan Membayar",
            "en": "Preference and Willingness-to-Pay Estimation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B1",
          "phase_name": {
            "id": "Perumusan Penawaran",
            "en": "Offer Formulation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C3",
          "class_name": {
            "id": "Selisih dan indeks kesenjangan",
            "en": "Difference and gap index"
          },
          "structural_signature": "may be negative; zero carries substantive meaning",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D1",
          "domain_name": {
            "id": "Keputusan produk dan inovasi",
            "en": "Product and innovation decisions"
          },
          "decision_owner": "Manajer Produk",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 8,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus riset"
      },
      "definition": {
        "id": "Koefisien Ketidakpuasan Kano. Menghubungkan 4 besaran masukan (kano_a, kano_o, kano_m, kano_i) menjadi satu angka yang menjawab keputusan produk dan inovasi pada fase perumusan penawaran. Termasuk kelas struktur C3 (Selisih dan indeks kesenjangan), strata VIII pada tangga kecanggihan.",
        "en": "Kano Worse Coefficient. Combines 4 input quantities (kano_a, kano_o, kano_m, kano_i) into one number serving product and innovation decisions at the offer formulation phase. Structural class C3 (Difference and gap index), stratum VIII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "Worse = -\\dfrac{O + M}{A + O + M + I}",
        "javascript": "-1 * (kano_o + kano_m) / (kano_a + kano_o + kano_m + kano_i)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "kano_a",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "kano_o",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "kano_m",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "kano_i",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C3",
        "engine_rule": "null is not zero; distinguish None from 0.0 in the store and in the renderer",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -1,
          "upper": -0.6,
          "label": "Risiko tinggi",
          "guidance_id": "Ketiadaan fitur menimbulkan ketidakpuasan besar."
        },
        {
          "lower": -0.6,
          "upper": -0.3,
          "label": "Risiko sedang",
          "guidance_id": "Ketiadaan fitur terasa namun tidak menghancurkan."
        },
        {
          "lower": -0.3,
          "upper": 0,
          "label": "Risiko rendah",
          "guidance_id": "Fitur dapat ditunda tanpa akibat berat."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Rata rata atas selisih menutupi polarisasi; nilai nol dibaca sebagai ketiadaan data."
        },
        {
          "source": "formula_specific",
          "description_id": "Tanda negatif adalah bagian dari rumus, bukan hiasan. Menghilangkannya membuat pemetaan dua sumbu tidak terbaca."
        },
        {
          "source": "formula_specific",
          "description_id": "Koefisien mendekati nol pada kedua sumbu menandakan fitur yang tidak perlu dibangun sama sekali."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan sebaran komponen, bukan hanya nilai tengah. Bedakan nol dari nilai kosong pada penyimpanan dan pada tampilan."
        }
      ],
      "worked_example": {
        "inputs": {
          "kano_a": 148,
          "kano_o": 96,
          "kano_m": 112,
          "kano_i": 64
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 70,
        "xp_award_repeat": 14,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_kano_worse",
        "unlocks_after_module": 7,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B1",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_phase": [
          "contribution_margin",
          "break_even_quantity",
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "opportunity_score",
          "qfd_technical_importance"
        ],
        "same_structural_class": [
          "nps",
          "contribution_margin",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "kano_better",
          "opportunity_score",
          "cost_of_delay"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 63,
      "id": "opportunity_score",
      "symbol": "Opportunity_Score",
      "name": {
        "id": "Skor Peluang",
        "en": "Opportunity Score"
      },
      "slug": "opportunity-score",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VIII",
          "stratum_name": {
            "id": "Estimasi Preferensi dan Kesediaan Membayar",
            "en": "Preference and Willingness-to-Pay Estimation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B1",
          "phase_name": {
            "id": "Perumusan Penawaran",
            "en": "Offer Formulation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C3",
          "class_name": {
            "id": "Selisih dan indeks kesenjangan",
            "en": "Difference and gap index"
          },
          "structural_signature": "may be negative; zero carries substantive meaning",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D1",
          "domain_name": {
            "id": "Keputusan produk dan inovasi",
            "en": "Product and innovation decisions"
          },
          "decision_owner": "Manajer Produk",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 8,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus riset"
      },
      "definition": {
        "id": "Skor Peluang. Menghubungkan 2 besaran masukan (importance, satisfaction) menjadi satu angka yang menjawab keputusan produk dan inovasi pada fase perumusan penawaran. Termasuk kelas struktur C3 (Selisih dan indeks kesenjangan), strata VIII pada tangga kecanggihan.",
        "en": "Opportunity Score. Combines 2 input quantities (importance, satisfaction) into one number serving product and innovation decisions at the offer formulation phase. Structural class C3 (Difference and gap index), stratum VIII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "OS = Importance + \\max(0,\\; Importance - Satisfaction)",
        "javascript": "importance + Math.max(0, importance - satisfaction)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "importance",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "satisfaction",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "satisfaction",
          "javascript": "2 * importance - result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 2,
      "validation": {
        "structural_class": "C3",
        "engine_rule": "null is not zero; distinguish None from 0.0 in the store and in the renderer",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 10,
          "label": "Terlayani berlebih",
          "guidance_id": "Investasi lanjutan tidak akan menambah nilai."
        },
        {
          "lower": 10,
          "upper": 12,
          "label": "Terlayani wajar",
          "guidance_id": "Pertahankan tanpa investasi besar."
        },
        {
          "lower": 12,
          "upper": 15,
          "label": "Peluang",
          "guidance_id": "Kesenjangan nyata antara kepentingan dan kepuasan."
        },
        {
          "lower": 15,
          "upper": 20,
          "label": "Peluang besar",
          "guidance_id": "Prioritas utama pengembangan."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Rata rata atas selisih menutupi polarisasi; nilai nol dibaca sebagai ketiadaan data."
        },
        {
          "source": "formula_specific",
          "description_id": "Fungsi maksimum mencegah kepuasan berlebih menghasilkan skor negatif. Menghilangkannya mengubah makna rumus sepenuhnya."
        },
        {
          "source": "formula_specific",
          "description_id": "Kepentingan dan kepuasan harus diukur atas hasil tugas yang ingin dicapai pelanggan, bukan atas fitur yang sudah ada."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan sebaran komponen, bukan hanya nilai tengah. Bedakan nol dari nilai kosong pada penyimpanan dan pada tampilan."
        }
      ],
      "worked_example": {
        "inputs": {
          "importance": 8.6,
          "satisfaction": 4.2
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 70,
        "xp_award_repeat": 14,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_opportunity_score",
        "unlocks_after_module": 7,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B1",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "kano_worse",
          "qfd_technical_importance"
        ],
        "same_phase": [
          "contribution_margin",
          "break_even_quantity",
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "kano_worse",
          "qfd_technical_importance"
        ],
        "same_structural_class": [
          "nps",
          "contribution_margin",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "kano_better",
          "kano_worse",
          "cost_of_delay"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 64,
      "id": "qfd_technical_importance",
      "symbol": "QFD_Technical_Importance",
      "name": {
        "id": "Kepentingan Teknis QFD",
        "en": "QFD Technical Importance"
      },
      "slug": "qfd-technical-importance",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "VIII",
          "stratum_name": {
            "id": "Estimasi Preferensi dan Kesediaan Membayar",
            "en": "Preference and Willingness-to-Pay Estimation"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B1",
          "phase_name": {
            "id": "Perumusan Penawaran",
            "en": "Offer Formulation"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C5",
          "class_name": {
            "id": "Agregasi linear berbobot",
            "en": "Weighted linear aggregation"
          },
          "structural_signature": "validity rests entirely on the provenance of the weights",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D1",
          "domain_name": {
            "id": "Keputusan produk dan inovasi",
            "en": "Product and innovation decisions"
          },
          "decision_owner": "Manajer Produk",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 8,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus riset"
      },
      "definition": {
        "id": "Kepentingan Teknis QFD. Menghubungkan 2 besaran masukan (customer_importance, relationship_matrix) menjadi satu angka yang menjawab keputusan produk dan inovasi pada fase perumusan penawaran. Termasuk kelas struktur C5 (Agregasi linear berbobot), strata VIII pada tangga kecanggihan.",
        "en": "QFD Technical Importance. Combines 2 input quantities (customer_importance, relationship_matrix) into one number serving product and innovation decisions at the offer formulation phase. Structural class C5 (Weighted linear aggregation), stratum VIII.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "TI_j = \\sum_{i=1}^{m} CustomerImportance_i \\times Relationship_{ij}",
        "javascript": "matvec(relationship_matrix, customer_importance)",
        "requires_helper": "matvec",
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "customer_importance",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "relationship_matrix",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C5",
        "engine_rule": "require weight_provenance field; run rank-stability perturbation test",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Bobot ditetapkan tanpa dasar namun hasilnya tampak objektif."
        },
        {
          "source": "formula_specific",
          "description_id": "Skala hubungan yang lazim adalah nol, satu, tiga, dan sembilan. Skala linear satu sampai lima melemahkan daya pembeda matriks."
        },
        {
          "source": "formula_specific",
          "description_id": "Matriks yang seluruh selnya terisi menandakan penilai tidak berani menyatakan ketiadaan hubungan. Matriks yang sehat lazimnya jarang terisi."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Wajibkan pencatatan asal bobot. Jalankan uji stabilitas peringkat terhadap gangguan bobot sebesar lima persen."
        }
      ],
      "worked_example": {
        "inputs": {
          "customer_importance": [
            9,
            7,
            5,
            8
          ],
          "relationship_matrix": [
            [
              9,
              3,
              0,
              1
            ],
            [
              3,
              9,
              1,
              0
            ],
            [
              0,
              3,
              9,
              3
            ],
            [
              9,
              0,
              3,
              9
            ]
          ]
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 70,
        "xp_award_repeat": 14,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_qfd_technical_importance",
        "unlocks_after_module": 7,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B1",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "kano_worse",
          "opportunity_score"
        ],
        "same_phase": [
          "contribution_margin",
          "break_even_quantity",
          "van_westendorp",
          "gabor_granger",
          "conjoint_utility",
          "wtp",
          "kano_better",
          "kano_worse",
          "opportunity_score"
        ],
        "same_structural_class": [
          "ces",
          "rfm_score",
          "conjoint_utility",
          "weighted_screening"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 65,
      "id": "bass_f",
      "symbol": "Bass_F(t)",
      "name": {
        "id": "Fungsi Adopsi Kumulatif Bass",
        "en": "Bass Cumulative Adoption"
      },
      "slug": "bass-f",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "IX",
          "stratum_name": {
            "id": "Model Difusi dan Pertumbuhan Dinamis",
            "en": "Diffusion and Dynamic Growth Models"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C9",
          "class_name": {
            "id": "Fungsi dinamis atas waktu",
            "en": "Dynamic function of time"
          },
          "structural_signature": "parameters must be calibrated, not observed",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D7",
          "domain_name": {
            "id": "Keputusan pasar sasaran dan posisi kompetitif",
            "en": "Target market and positioning decisions"
          },
          "decision_owner": "Direktur Strategi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "tahunan"
      },
      "definition": {
        "id": "Fungsi Adopsi Kumulatif Bass. Menghubungkan 3 besaran masukan (bass_p, bass_q, time_t) menjadi satu angka yang menjawab keputusan pasar sasaran dan posisi kompetitif pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C9 (Fungsi dinamis atas waktu), strata IX pada tangga kecanggihan.",
        "en": "Bass Cumulative Adoption. Combines 3 input quantities (bass_p, bass_q, time_t) into one number serving target market and positioning decisions at the market definition and understanding phase. Structural class C9 (Dynamic function of time), stratum IX.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "F(t) = \\dfrac{1 - e^{-(p+q)t}}{1 + \\frac{q}{p} e^{-(p+q)t}}",
        "javascript": "(1 - Math.exp(-(bass_p + bass_q) * time_t)) / (1 + (bass_q / bass_p) * Math.exp(-(bass_p + bass_q) * time_t))",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "bass_p",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "bass_q",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "time_t",
          "role": "operand",
          "required": true,
          "position": 2
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C9",
        "engine_rule": "require calibration_source; always render at least three parameter scenarios",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 0,
          "upper": 0.16,
          "label": "Pengadopsi awal",
          "guidance_id": "Kurva belum menanjak. Kesabaran diperlukan."
        },
        {
          "lower": 0.16,
          "upper": 0.5,
          "label": "Penanjakan",
          "guidance_id": "Fase pertumbuhan tercepat menjelang titik balik."
        },
        {
          "lower": 0.5,
          "upper": 0.84,
          "label": "Mayoritas akhir",
          "guidance_id": "Pertumbuhan mulai melambat."
        },
        {
          "lower": 0.84,
          "upper": 1,
          "label": "Pengadopsi terakhir",
          "guidance_id": "Pasar mendekati jenuh."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Parameter dikalibrasi dari produk analog yang tidak sebanding."
        },
        {
          "source": "formula_specific",
          "description_id": "Koefisien p dan q tidak dapat diamati langsung. Keduanya wajib dikalibrasi dari data historis atau dari produk analog yang sebanding."
        },
        {
          "source": "formula_specific",
          "description_id": "Nilai p sama dengan nol menghasilkan pembagian dengan nol. Perangkat lunak harus menolak masukan tersebut secara tegas."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Wajibkan pencatatan produk rujukan kalibrasi. Jalankan beberapa skenario parameter secara berdampingan."
        }
      ],
      "worked_example": {
        "inputs": {
          "bass_p": 0.021,
          "bass_q": 0.38,
          "time_t": 6
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 90,
        "xp_award_repeat": 18,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_bass_f",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "bass_n"
        ],
        "same_phase": [
          "market_share",
          "penetration_rate",
          "relative_market_share",
          "tam",
          "sam",
          "som",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity",
          "bass_n"
        ],
        "same_structural_class": [
          "bass_n"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 66,
      "id": "bass_n",
      "symbol": "Bass_n(t)",
      "name": {
        "id": "Laju Adopsi Sesaat Bass",
        "en": "Bass Instantaneous Adoption"
      },
      "slug": "bass-n",
      "taxonomy": {
        "axis_a": {
          "tier_code": "C",
          "tier_name": {
            "id": "Prediktif",
            "en": "Predictive"
          },
          "stratum_code": "IX",
          "stratum_name": {
            "id": "Model Difusi dan Pertumbuhan Dinamis",
            "en": "Diffusion and Dynamic Growth Models"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B0",
          "phase_name": {
            "id": "Penentuan dan Pemahaman Pasar",
            "en": "Market Definition and Understanding"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C9",
          "class_name": {
            "id": "Fungsi dinamis atas waktu",
            "en": "Dynamic function of time"
          },
          "structural_signature": "parameters must be calibrated, not observed",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D7",
          "domain_name": {
            "id": "Keputusan pasar sasaran dan posisi kompetitif",
            "en": "Target market and positioning decisions"
          },
          "decision_owner": "Direktur Strategi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L5",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "tahunan"
      },
      "definition": {
        "id": "Laju Adopsi Sesaat Bass. Menghubungkan 4 besaran masukan (bass_p, bass_q, bass_m, bass_nt) menjadi satu angka yang menjawab keputusan pasar sasaran dan posisi kompetitif pada fase penentuan dan pemahaman pasar. Termasuk kelas struktur C9 (Fungsi dinamis atas waktu), strata IX pada tangga kecanggihan.",
        "en": "Bass Instantaneous Adoption. Combines 4 input quantities (bass_p, bass_q, bass_m, bass_nt) into one number serving target market and positioning decisions at the market definition and understanding phase. Structural class C9 (Dynamic function of time), stratum IX.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "n(t) = \\left(p + \\dfrac{q}{m} N(t)\\right)\\left(m - N(t)\\right)",
        "javascript": "(bass_p + (bass_q / bass_m) * bass_nt) * (bass_m - bass_nt)",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "bass_p",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "bass_q",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "bass_m",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "bass_nt",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "bass_p",
          "javascript": "result / (bass_m - bass_nt) - (bass_q / bass_m) * bass_nt",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 2,
      "validation": {
        "structural_class": "C9",
        "engine_rule": "require calibration_source; always render at least three parameter scenarios",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Parameter dikalibrasi dari produk analog yang tidak sebanding."
        },
        {
          "source": "formula_specific",
          "description_id": "Parameter potensi pasar akhir lazimnya diambil dari SOM. Mengambilnya dari TAM menghasilkan proyeksi yang tidak dapat dipertanggungjawabkan."
        },
        {
          "source": "formula_specific",
          "description_id": "Rumus ini menghasilkan adopsi per periode, bukan adopsi kumulatif. Menjumlahkan keduanya adalah penghitungan ganda."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Wajibkan pencatatan produk rujukan kalibrasi. Jalankan beberapa skenario parameter secara berdampingan."
        }
      ],
      "worked_example": {
        "inputs": {
          "bass_p": 0.021,
          "bass_q": 0.38,
          "bass_m": 180000,
          "bass_nt": 42000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 90,
        "xp_award_repeat": 18,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_bass_n",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B0",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "bass_f"
        ],
        "same_phase": [
          "market_share",
          "penetration_rate",
          "relative_market_share",
          "tam",
          "sam",
          "som",
          "price_elasticity",
          "cross_elasticity",
          "income_elasticity",
          "bass_f"
        ],
        "same_structural_class": [
          "bass_f"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 67,
      "id": "weighted_screening",
      "symbol": "Weighted_Screening_Score",
      "name": {
        "id": "Skor Penyaringan Berbobot",
        "en": "Weighted Screening Score"
      },
      "slug": "weighted-screening",
      "taxonomy": {
        "axis_a": {
          "tier_code": "D",
          "tier_name": {
            "id": "Preskriptif",
            "en": "Prescriptive"
          },
          "stratum_code": "X",
          "stratum_name": {
            "id": "Prioritisasi Portofolio dan Penilaian Risiko",
            "en": "Portfolio Prioritisation and Risk Assessment"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C5",
          "class_name": {
            "id": "Agregasi linear berbobot",
            "en": "Weighted linear aggregation"
          },
          "structural_signature": "validity rests entirely on the provenance of the weights",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D1",
          "domain_name": {
            "id": "Keputusan produk dan inovasi",
            "en": "Product and innovation decisions"
          },
          "decision_owner": "Manajer Produk",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 8,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus perencanaan"
      },
      "definition": {
        "id": "Skor Penyaringan Berbobot. Menghubungkan 2 besaran masukan (w_vector, r_vector) menjadi satu angka yang menjawab keputusan produk dan inovasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C5 (Agregasi linear berbobot), strata X pada tangga kecanggihan.",
        "en": "Weighted Screening Score. Combines 2 input quantities (w_vector, r_vector) into one number serving product and innovation decisions at the evaluation and investment governance phase. Structural class C5 (Weighted linear aggregation), stratum X.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "S_j = \\sum_{i=1}^{n} w_i r_{ij}",
        "javascript": "dot(w_vector, r_vector)",
        "requires_helper": "dot",
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "w_vector",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "r_vector",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C5",
        "engine_rule": "require weight_provenance field; run rank-stability perturbation test",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Bobot ditetapkan tanpa dasar namun hasilnya tampak objektif."
        },
        {
          "source": "formula_specific",
          "description_id": "Inilah bentuk umum yang menjadi induk RICE, WSJF, dan skor prioritas lainnya. Menguasai bentuk ini berarti menguasai seluruh keluarganya."
        },
        {
          "source": "formula_specific",
          "description_id": "Uji stabilitas peringkat terhadap perubahan bobot. Bila peringkat berubah oleh pergeseran bobot lima persen, keputusan tidak sedang ditentukan oleh data."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Wajibkan pencatatan asal bobot. Jalankan uji stabilitas peringkat terhadap gangguan bobot sebesar lima persen."
        }
      ],
      "worked_example": {
        "inputs": {
          "w_vector": [
            0.35,
            0.25,
            0.25,
            0.15
          ],
          "r_vector": [
            8,
            6,
            9,
            4
          ]
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 75,
        "xp_award_repeat": 15,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_weighted_screening",
        "unlocks_after_module": 7,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "ces",
          "rfm_score",
          "conjoint_utility",
          "qfd_technical_importance"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 68,
      "id": "rice_score",
      "symbol": "RICE_Score",
      "name": {
        "id": "Skor RICE",
        "en": "RICE Score"
      },
      "slug": "rice-score",
      "taxonomy": {
        "axis_a": {
          "tier_code": "D",
          "tier_name": {
            "id": "Preskriptif",
            "en": "Prescriptive"
          },
          "stratum_code": "X",
          "stratum_name": {
            "id": "Prioritisasi Portofolio dan Penilaian Risiko",
            "en": "Portfolio Prioritisation and Risk Assessment"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D1",
          "domain_name": {
            "id": "Keputusan produk dan inovasi",
            "en": "Product and innovation decisions"
          },
          "decision_owner": "Manajer Produk",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus perencanaan"
      },
      "definition": {
        "id": "Skor RICE. Menghubungkan 4 besaran masukan (rice_reach, rice_impact, rice_confidence, rice_effort) menjadi satu angka yang menjawab keputusan produk dan inovasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata X pada tangga kecanggihan.",
        "en": "RICE Score. Combines 4 input quantities (rice_reach, rice_impact, rice_confidence, rice_effort) into one number serving product and innovation decisions at the evaluation and investment governance phase. Structural class C4 (Multiplicative composite), stratum X.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "RICE = \\dfrac{Reach \\times Impact \\times Confidence}{Effort}",
        "javascript": "(rice_reach * rice_impact * (rice_confidence / 100)) / rice_effort",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "rice_reach",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "rice_impact",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "rice_confidence",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "rice_effort",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "rice_effort",
          "javascript": "(rice_reach * rice_impact * (rice_confidence / 100)) / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "rice_reach",
          "javascript": "result * rice_effort / (rice_impact * (rice_confidence / 100))",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "Faktor keyakinan adalah peredam bias optimisme. Menetapkannya selalu seratus persen menghapus satu satunya pengaman dalam rumus ini."
        },
        {
          "source": "formula_specific",
          "description_id": "Jangkauan harus dinyatakan per periode yang sama untuk seluruh alternatif, atau peringkat menjadi tidak berarti."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "rice_reach": 4200,
          "rice_impact": 2,
          "rice_confidence": 80,
          "rice_effort": 3
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 75,
        "xp_award_repeat": 15,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_rice_score",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "weighted_screening",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "mrr",
          "arr",
          "sales_velocity",
          "k_factor",
          "grp",
          "net_reach",
          "tam",
          "sam",
          "som",
          "wsjf_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 69,
      "id": "cost_of_delay",
      "symbol": "Cost_of_Delay",
      "name": {
        "id": "Biaya Penundaan",
        "en": "Cost of Delay"
      },
      "slug": "cost-of-delay",
      "taxonomy": {
        "axis_a": {
          "tier_code": "D",
          "tier_name": {
            "id": "Preskriptif",
            "en": "Prescriptive"
          },
          "stratum_code": "X",
          "stratum_name": {
            "id": "Prioritisasi Portofolio dan Penilaian Risiko",
            "en": "Portfolio Prioritisation and Risk Assessment"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C3",
          "class_name": {
            "id": "Selisih dan indeks kesenjangan",
            "en": "Difference and gap index"
          },
          "structural_signature": "may be negative; zero carries substantive meaning",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D1",
          "domain_name": {
            "id": "Keputusan produk dan inovasi",
            "en": "Product and innovation decisions"
          },
          "decision_owner": "Manajer Produk",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus perencanaan"
      },
      "definition": {
        "id": "Biaya Penundaan. Menghubungkan 2 besaran masukan (delta_value, delta_time) menjadi satu angka yang menjawab keputusan produk dan inovasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C3 (Selisih dan indeks kesenjangan), strata X pada tangga kecanggihan.",
        "en": "Cost of Delay. Combines 2 input quantities (delta_value, delta_time) into one number serving product and innovation decisions at the evaluation and investment governance phase. Structural class C3 (Difference and gap index), stratum X.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "CoD = \\dfrac{\\Delta Value}{\\Delta Time}",
        "javascript": "delta_value / delta_time",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "delta_value",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "delta_time",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "delta_value",
          "javascript": "result * delta_time",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "delta_time",
          "javascript": "delta_value / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C3",
        "engine_rule": "null is not zero; distinguish None from 0.0 in the store and in the renderer",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Rata rata atas selisih menutupi polarisasi; nilai nol dibaca sebagai ketiadaan data."
        },
        {
          "source": "formula_specific",
          "description_id": "Biaya penundaan adalah laju, bukan jumlah. Satuannya adalah nilai per periode dan harus ditampilkan demikian."
        },
        {
          "source": "formula_specific",
          "description_id": "Sebagian besar organisasi tidak pernah menghitung angka ini, lalu menjadwalkan pekerjaan berdasarkan siapa yang paling keras bersuara."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan sebaran komponen, bukan hanya nilai tengah. Bedakan nol dari nilai kosong pada penyimpanan dan pada tampilan."
        }
      ],
      "worked_example": {
        "inputs": {
          "delta_value": 240000000,
          "delta_time": 3
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 75,
        "xp_award_repeat": 15,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_cost_of_delay",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "weighted_screening",
          "rice_score",
          "wsjf_score",
          "fmea_rpn"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "nps",
          "contribution_margin",
          "forecast_accuracy",
          "gdr",
          "ndr",
          "kano_better",
          "kano_worse",
          "opportunity_score"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 70,
      "id": "wsjf_score",
      "symbol": "WSJF_Score",
      "name": {
        "id": "Skor Pekerjaan Terpendek Berbobot",
        "en": "Weighted Shortest Job First"
      },
      "slug": "wsjf-score",
      "taxonomy": {
        "axis_a": {
          "tier_code": "D",
          "tier_name": {
            "id": "Preskriptif",
            "en": "Prescriptive"
          },
          "stratum_code": "X",
          "stratum_name": {
            "id": "Prioritisasi Portofolio dan Penilaian Risiko",
            "en": "Portfolio Prioritisation and Risk Assessment"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D1",
          "domain_name": {
            "id": "Keputusan produk dan inovasi",
            "en": "Product and innovation decisions"
          },
          "decision_owner": "Manajer Produk",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus perencanaan"
      },
      "definition": {
        "id": "Skor Pekerjaan Terpendek Berbobot. Menghubungkan 4 besaran masukan (user_value, time_value, risk_reduction, job_size) menjadi satu angka yang menjawab keputusan produk dan inovasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata X pada tangga kecanggihan.",
        "en": "Weighted Shortest Job First. Combines 4 input quantities (user_value, time_value, risk_reduction, job_size) into one number serving product and innovation decisions at the evaluation and investment governance phase. Structural class C4 (Multiplicative composite), stratum X.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "WSJF = \\dfrac{UserValue + TimeCriticality + RiskReduction}{JobSize}",
        "javascript": "(user_value + time_value + risk_reduction) / job_size",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "user_value",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "time_value",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "risk_reduction",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "job_size",
          "role": "operand",
          "required": true,
          "position": 3
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "job_size",
          "javascript": "(user_value + time_value + risk_reduction) / result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "user_value",
          "javascript": "result * job_size - time_value - risk_reduction",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "Pembilang adalah biaya penundaan yang dipecah menjadi tiga komponen. Ketautan ini perlu disadari agar tidak menghitung dua kali."
        },
        {
          "source": "formula_specific",
          "description_id": "WSJF dan RICE menghasilkan dua peringkat yang bersaing tanpa mekanisme penyelesaian. Pilih satu untuk satu portofolio."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "user_value": 8,
          "time_value": 5,
          "risk_reduction": 3,
          "job_size": 5
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 75,
        "xp_award_repeat": 15,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_wsjf_score",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "fmea_rpn"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "mrr",
          "arr",
          "sales_velocity",
          "k_factor",
          "grp",
          "net_reach",
          "tam",
          "sam",
          "som",
          "rice_score",
          "fmea_rpn"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 71,
      "id": "fmea_rpn",
      "symbol": "FMEA_RPN",
      "name": {
        "id": "Angka Prioritas Risiko FMEA",
        "en": "FMEA Risk Priority Number"
      },
      "slug": "fmea-rpn",
      "taxonomy": {
        "axis_a": {
          "tier_code": "D",
          "tier_name": {
            "id": "Preskriptif",
            "en": "Prescriptive"
          },
          "stratum_code": "X",
          "stratum_name": {
            "id": "Prioritisasi Portofolio dan Penilaian Risiko",
            "en": "Portfolio Prioritisation and Risk Assessment"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C4",
          "class_name": {
            "id": "Hasil kali multiplikatif",
            "en": "Multiplicative composite"
          },
          "structural_signature": "error in any factor propagates multiplicatively",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D1",
          "domain_name": {
            "id": "Keputusan produk dan inovasi",
            "en": "Product and innovation decisions"
          },
          "decision_owner": "Manajer Produk",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per siklus perencanaan"
      },
      "definition": {
        "id": "Angka Prioritas Risiko FMEA. Menghubungkan 3 besaran masukan (severity, occurrence, detection) menjadi satu angka yang menjawab keputusan produk dan inovasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C4 (Hasil kali multiplikatif), strata X pada tangga kecanggihan.",
        "en": "FMEA Risk Priority Number. Combines 3 input quantities (severity, occurrence, detection) into one number serving product and innovation decisions at the evaluation and investment governance phase. Structural class C4 (Multiplicative composite), stratum X.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "RPN = Severity \\times Occurrence \\times Detection",
        "javascript": "severity * occurrence * detection",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "severity",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "occurrence",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "detection",
          "role": "operand",
          "required": true,
          "position": 2
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "severity",
          "javascript": "result / (occurrence * detection)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "occurrence",
          "javascript": "result / (severity * detection)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "detection",
          "javascript": "result / (severity * occurrence)",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 4,
      "validation": {
        "structural_class": "C4",
        "engine_rule": "auto-run one-at-a-time sensitivity at plus and minus 10 percent for every factor",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": 1,
          "upper": 50,
          "label": "Rendah",
          "guidance_id": "Pemantauan rutin memadai."
        },
        {
          "lower": 50,
          "upper": 100,
          "label": "Sedang",
          "guidance_id": "Rencana mitigasi perlu disiapkan."
        },
        {
          "lower": 100,
          "upper": 200,
          "label": "Tinggi",
          "guidance_id": "Tindakan perbaikan diperlukan."
        },
        {
          "lower": 200,
          "upper": 1000,
          "label": "Kritis",
          "guidance_id": "Hentikan dan perbaiki sebelum melanjutkan."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Optimisme kecil pada setiap faktor berlipat menjadi optimisme besar pada hasil akhir."
        },
        {
          "source": "formula_specific",
          "description_id": "Skor deteksi bersifat terbalik. Nilai sepuluh berarti kegagalan hampir mustahil terdeteksi, bukan mudah terdeteksi."
        },
        {
          "source": "formula_specific",
          "description_id": "Angka prioritas yang sama dapat berasal dari kombinasi yang sangat berbeda. Keparahan sepuluh selalu menuntut perhatian meskipun angka akhirnya rendah."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Jalankan analisis sensitivitas satu faktor secara otomatis dan tampilkan faktor paling berpengaruh."
        }
      ],
      "worked_example": {
        "inputs": {
          "severity": 8,
          "occurrence": 4,
          "detection": 6
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 75,
        "xp_award_repeat": 15,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_fmea_rpn",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "npv",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "mrr",
          "arr",
          "sales_velocity",
          "k_factor",
          "grp",
          "net_reach",
          "tam",
          "sam",
          "som",
          "rice_score",
          "wsjf_score"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 72,
      "id": "npv",
      "symbol": "NPV",
      "name": {
        "id": "Nilai Sekarang Bersih",
        "en": "Net Present Value"
      },
      "slug": "npv",
      "taxonomy": {
        "axis_a": {
          "tier_code": "D",
          "tier_name": {
            "id": "Preskriptif",
            "en": "Prescriptive"
          },
          "stratum_code": "XI",
          "stratum_name": {
            "id": "Valuasi Finansial dan Keputusan di Bawah Ketidakpastian",
            "en": "Financial Valuation and Decision Under Uncertainty"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C6",
          "class_name": {
            "id": "Deret terdiskonto",
            "en": "Discounted series"
          },
          "structural_signature": "requires a discount rate and a horizon, both frequently hidden",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per keputusan investasi"
      },
      "definition": {
        "id": "Nilai Sekarang Bersih. Menghubungkan 3 besaran masukan (cash_flows, discount_rate, investment_0) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C6 (Deret terdiskonto), strata XI pada tangga kecanggihan.",
        "en": "Net Present Value. Combines 3 input quantities (cash_flows, discount_rate, investment_0) into one number serving budget and investment decisions at the evaluation and investment governance phase. Structural class C6 (Discounted series), stratum XI.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "NPV = \\sum_{t=1}^{T} \\dfrac{CF_t}{(1 + r)^t} - Investment_0",
        "javascript": "npv_calc(cash_flows, discount_rate) - investment_0",
        "requires_helper": "npv_calc",
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "cash_flows",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "discount_rate",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "investment_0",
          "role": "operand",
          "required": true,
          "position": 2
        }
      ],
      "output": {
        "canonical_variable_id": "npv_out",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [
        {
          "solve_for": "investment_0",
          "javascript": "npv_calc(cash_flows, discount_rate) - npv_out",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 2,
      "validation": {
        "structural_class": "C6",
        "engine_rule": "discount_rate and horizon are mandatory output annotations, never optional",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -1000000000000000,
          "upper": 0,
          "label": "Tolak",
          "guidance_id": "Proyek menghancurkan nilai pada tingkat diskonto yang dipakai."
        },
        {
          "lower": 0,
          "upper": 1000000000000000,
          "label": "Terima",
          "guidance_id": "Proyek menambah nilai pada tingkat diskonto yang dipakai."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Tingkat diskonto dan horizon tidak ditampilkan sehingga hasil tidak dapat diaudit."
        },
        {
          "source": "formula_specific",
          "description_id": "Investasi awal tidak didiskontokan karena terjadi pada periode nol. Mendiskontokannya adalah kekeliruan tersering."
        },
        {
          "source": "formula_specific",
          "description_id": "Tingkat diskonto bukan angka yang dipilih agar hasilnya positif. Ia adalah biaya modal dan harus ditetapkan sebelum perhitungan."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Cetak tingkat diskonto dan horizon pada setiap keluaran, termasuk pada ekspor dan cetakan."
        }
      ],
      "worked_example": {
        "inputs": {
          "cash_flows": [
            120000000,
            180000000,
            240000000,
            260000000,
            280000000
          ],
          "discount_rate": 0.12,
          "investment_0": 480000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 110,
        "xp_award_repeat": 22,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_npv",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "irr",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "clv_simple",
          "clv"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 73,
      "id": "irr",
      "symbol": "IRR",
      "name": {
        "id": "Tingkat Pengembalian Internal",
        "en": "Internal Rate of Return"
      },
      "slug": "irr",
      "taxonomy": {
        "axis_a": {
          "tier_code": "D",
          "tier_name": {
            "id": "Preskriptif",
            "en": "Prescriptive"
          },
          "stratum_code": "XI",
          "stratum_name": {
            "id": "Valuasi Finansial dan Keputusan di Bawah Ketidakpastian",
            "en": "Financial Valuation and Decision Under Uncertainty"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C10",
          "class_name": {
            "id": "Solusi implisit dan iteratif",
            "en": "Implicit and iterative solution"
          },
          "structural_signature": "no closed form; numerical procedure with existence and uniqueness questions",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per keputusan investasi"
      },
      "definition": {
        "id": "Tingkat Pengembalian Internal. Menghubungkan 2 besaran masukan (cash_flows, investment_0) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C10 (Solusi implisit dan iteratif), strata XI pada tangga kecanggihan.",
        "en": "Internal Rate of Return. Combines 2 input quantities (cash_flows, investment_0) into one number serving budget and investment decisions at the evaluation and investment governance phase. Structural class C10 (Implicit and iterative solution), stratum XI.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "IRR = \\{r : \\sum_{t=1}^{T} \\dfrac{CF_t}{(1+r)^t} - Investment_0 = 0\\}",
        "javascript": "irr_solve(cash_flows, investment_0)",
        "requires_helper": "irr_solve",
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "cash_flows",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "investment_0",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C10",
        "engine_rule": "run sign-change scan before solving; report all roots found, never silently pick one",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [
        {
          "lower": -1,
          "upper": 0,
          "label": "Negatif",
          "guidance_id": "Proyek tidak mengembalikan modal."
        },
        {
          "lower": 0,
          "upper": 0.12,
          "label": "Di bawah biaya modal",
          "guidance_id": "Bandingkan dengan biaya modal sebelum menolak."
        },
        {
          "lower": 0.12,
          "upper": 0.3,
          "label": "Baik",
          "guidance_id": "Melampaui biaya modal pada sebagian besar konteks."
        },
        {
          "lower": 0.3,
          "upper": 10,
          "label": "Sangat tinggi",
          "guidance_id": "Periksa apakah arus kas terlalu optimistis."
        }
      ],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Solusi ganda atau tidak ada solusi sama sekali, dilaporkan sebagai angka tunggal."
        },
        {
          "source": "formula_specific",
          "description_id": "Arus kas yang berganti tanda lebih dari sekali dapat menghasilkan lebih dari satu solusi. Perangkat lunak wajib memeriksa dan memperingatkan."
        },
        {
          "source": "formula_specific",
          "description_id": "Tingkat pengembalian internal mengandaikan arus kas diinvestasikan kembali pada tingkat yang sama. Asumsi ini sering tidak realistis."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Periksa keberadaan dan ketunggalan solusi sebelum melaporkan. Tampilkan seluruh akar bila lebih dari satu."
        }
      ],
      "worked_example": {
        "inputs": {
          "cash_flows": [
            120000000,
            180000000,
            240000000,
            260000000,
            280000000
          ],
          "investment_0": 480000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 110,
        "xp_award_repeat": 22,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_irr",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "npv",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "ev",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "van_westendorp"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 74,
      "id": "ev",
      "symbol": "EV",
      "name": {
        "id": "Nilai Harapan",
        "en": "Expected Value"
      },
      "slug": "ev",
      "taxonomy": {
        "axis_a": {
          "tier_code": "D",
          "tier_name": {
            "id": "Preskriptif",
            "en": "Prescriptive"
          },
          "stratum_code": "XI",
          "stratum_name": {
            "id": "Valuasi Finansial dan Keputusan di Bawah Ketidakpastian",
            "en": "Financial Valuation and Decision Under Uncertainty"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C7",
          "class_name": {
            "id": "Ekspektasi probabilistik",
            "en": "Probabilistic expectation"
          },
          "structural_signature": "output is a long-run average, not a prediction of the single outcome",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L1",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per keputusan investasi"
      },
      "definition": {
        "id": "Nilai Harapan. Menghubungkan 2 besaran masukan (prob_vector, payoff_vector) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C7 (Ekspektasi probabilistik), strata XI pada tangga kecanggihan.",
        "en": "Expected Value. Combines 2 input quantities (prob_vector, payoff_vector) into one number serving budget and investment decisions at the evaluation and investment governance phase. Structural class C7 (Probabilistic expectation), stratum XI.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "EV = \\sum_{i=1}^{n} p_i \\times Payoff_i",
        "javascript": "dot(prob_vector, payoff_vector)",
        "requires_helper": "dot",
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "prob_vector",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "payoff_vector",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": "ev_out",
        "publishes_to_graph": true,
        "note": "Keluaran rumus ini menjadi masukan bagi rumus lain, sehingga wajib dipublikasikan ke graf variabel."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C7",
        "engine_rule": "render distribution alongside point value; require probability_source field",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Nilai harapan dibaca sebagai ramalan tunggal; probabilitas ditetapkan secara intuitif."
        },
        {
          "source": "formula_specific",
          "description_id": "Penjumlahan probabilitas wajib sama dengan satu. Perangkat lunak harus menolak masukan yang melanggarnya, bukan menormalkannya diam diam."
        },
        {
          "source": "formula_specific",
          "description_id": "Nilai harapan adalah rata rata jangka panjang. Untuk keputusan yang hanya diambil sekali, ia bukan panduan yang memadai tanpa memperhatikan risiko kehancuran."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan distribusi hasil dan bukan hanya nilai tengah. Wajibkan pernyataan sumber probabilitas."
        }
      ],
      "worked_example": {
        "inputs": {
          "prob_vector": [
            0.25,
            0.45,
            0.3
          ],
          "payoff_vector": [
            820000000,
            240000000,
            -180000000
          ]
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 110,
        "xp_award_repeat": 22,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_ev",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "npv",
          "irr",
          "evpi",
          "real_options_value"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "evpi",
          "real_options_value"
        ],
        "same_structural_class": [
          "evpi",
          "real_options_value"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 75,
      "id": "evpi",
      "symbol": "EVPI",
      "name": {
        "id": "Nilai Harapan Informasi Sempurna",
        "en": "Expected Value of Perfect Information"
      },
      "slug": "evpi",
      "taxonomy": {
        "axis_a": {
          "tier_code": "D",
          "tier_name": {
            "id": "Preskriptif",
            "en": "Prescriptive"
          },
          "stratum_code": "XI",
          "stratum_name": {
            "id": "Valuasi Finansial dan Keputusan di Bawah Ketidakpastian",
            "en": "Financial Valuation and Decision Under Uncertainty"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C7",
          "class_name": {
            "id": "Ekspektasi probabilistik",
            "en": "Probabilistic expectation"
          },
          "structural_signature": "output is a long-run average, not a prediction of the single outcome",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per keputusan investasi"
      },
      "definition": {
        "id": "Nilai Harapan Informasi Sempurna. Menghubungkan 2 besaran masukan (ev_perfect, ev_base) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C7 (Ekspektasi probabilistik), strata XI pada tangga kecanggihan.",
        "en": "Expected Value of Perfect Information. Combines 2 input quantities (ev_perfect, ev_base) into one number serving budget and investment decisions at the evaluation and investment governance phase. Structural class C7 (Probabilistic expectation), stratum XI.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "EVPI = EV_{perfect} - EV_{base}",
        "javascript": "ev_perfect - ev_base",
        "requires_helper": null,
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "ev_perfect",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "ev_base",
          "role": "operand",
          "required": true,
          "position": 1
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [
        {
          "solve_for": "ev_perfect",
          "javascript": "result + ev_base",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        },
        {
          "solve_for": "ev_base",
          "javascript": "ev_perfect - result",
          "note": "Dipakai oleh mesin propagasi untuk menghitung mundur."
        }
      ],
      "solvable_directions": 3,
      "validation": {
        "structural_class": "C7",
        "engine_rule": "render distribution alongside point value; require probability_source field",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Nilai harapan dibaca sebagai ramalan tunggal; probabilitas ditetapkan secara intuitif."
        },
        {
          "source": "formula_specific",
          "description_id": "Nilai ini adalah batas atas anggaran riset yang masuk akal. Membelanjakan riset melampaui angka ini pasti merugikan meskipun risetnya sempurna."
        },
        {
          "source": "formula_specific",
          "description_id": "Rumus inilah yang menutup siklus: ia menilai kelayakan seluruh aktivitas pengukuran pada strata sebelumnya."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan distribusi hasil dan bukan hanya nilai tengah. Wajibkan pernyataan sumber probabilitas."
        }
      ],
      "worked_example": {
        "inputs": {
          "ev_perfect": 412000000,
          "ev_base": 289000000
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 110,
        "xp_award_repeat": 22,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_evpi",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "npv",
          "irr",
          "ev",
          "real_options_value"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "real_options_value"
        ],
        "same_structural_class": [
          "ev",
          "real_options_value"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    },
    {
      "index": 76,
      "id": "real_options_value",
      "symbol": "Real_Options_Value",
      "name": {
        "id": "Nilai Opsi Nyata",
        "en": "Real Options Value"
      },
      "slug": "real-options-value",
      "taxonomy": {
        "axis_a": {
          "tier_code": "D",
          "tier_name": {
            "id": "Preskriptif",
            "en": "Prescriptive"
          },
          "stratum_code": "XI",
          "stratum_name": {
            "id": "Valuasi Finansial dan Keputusan di Bawah Ketidakpastian",
            "en": "Financial Valuation and Decision Under Uncertainty"
          },
          "question_answered": "Seberapa sulit rumus ini dikuasai dan dipertanggungjawabkan?"
        },
        "axis_b": {
          "phase_code": "B8",
          "phase_name": {
            "id": "Evaluasi dan Tata Kelola Investasi",
            "en": "Evaluation and Investment Governance"
          },
          "question_answered": "Kapan rumus ini dipakai dalam alur kerja pemasaran?"
        },
        "axis_c": {
          "class_code": "C7",
          "class_name": {
            "id": "Ekspektasi probabilistik",
            "en": "Probabilistic expectation"
          },
          "structural_signature": "output is a long-run average, not a prediction of the single outcome",
          "question_answered": "Apa bentuk operasi yang sesungguhnya dilakukan?"
        },
        "axis_d": {
          "domain_code": "D8",
          "domain_name": {
            "id": "Keputusan anggaran dan investasi",
            "en": "Budget and investment decisions"
          },
          "decision_owner": "Pimpinan dan Komite Investasi",
          "question_answered": "Keputusan siapa yang akan berubah karena angka ini?"
        },
        "compute_layer": "L2",
        "curriculum_module": 9,
        "dashboard_tier": "strategic",
        "reporting_cadence": "per keputusan investasi"
      },
      "definition": {
        "id": "Nilai Opsi Nyata. Menghubungkan 5 besaran masukan (opt_s, opt_x, opt_r, opt_t, opt_sigma) menjadi satu angka yang menjawab keputusan anggaran dan investasi pada fase evaluasi dan tata kelola investasi. Termasuk kelas struktur C7 (Ekspektasi probabilistik), strata XI pada tangga kecanggihan.",
        "en": "Real Options Value. Combines 5 input quantities (opt_s, opt_x, opt_r, opt_t, opt_sigma) into one number serving budget and investment decisions at the evaluation and investment governance phase. Structural class C7 (Probabilistic expectation), stratum XI.",
        "write_full_prose_in_phase": "P16"
      },
      "expression": {
        "latex": "ROV = S \\cdot N(d_1) - X e^{-rT} N(d_2), \\quad d_1 = \\dfrac{\\ln(S/X) + (r + \\sigma^2/2)T}{\\sigma\\sqrt{T}}, \\quad d_2 = d_1 - \\sigma\\sqrt{T}",
        "javascript": "black_scholes_call(opt_s, opt_x, opt_r, opt_t, opt_sigma)",
        "requires_helper": "black_scholes_call",
        "alternate_forms": []
      },
      "inputs": [
        {
          "variable_id": "opt_s",
          "role": "operand",
          "required": true,
          "position": 0
        },
        {
          "variable_id": "opt_x",
          "role": "operand",
          "required": true,
          "position": 1
        },
        {
          "variable_id": "opt_r",
          "role": "operand",
          "required": true,
          "position": 2
        },
        {
          "variable_id": "opt_t",
          "role": "operand",
          "required": true,
          "position": 3
        },
        {
          "variable_id": "opt_sigma",
          "role": "operand",
          "required": true,
          "position": 4
        }
      ],
      "output": {
        "canonical_variable_id": null,
        "publishes_to_graph": false,
        "note": "Keluaran rumus ini tidak menjadi masukan rumus lain dalam korpus ini."
      },
      "inverse_solutions": [],
      "solvable_directions": 1,
      "validation": {
        "structural_class": "C7",
        "engine_rule": "render distribution alongside point value; require probability_source field",
        "guard_zero_denominator": true,
        "reject_negative_counts": true,
        "warn_on_extreme": true
      },
      "interpretation_bands": [],
      "failure_modes": [
        {
          "source": "structural_class",
          "description_id": "Nilai harapan dibaca sebagai ramalan tunggal; probabilitas ditetapkan secara intuitif."
        },
        {
          "source": "formula_specific",
          "description_id": "Volatilitas yang lebih tinggi menaikkan nilai opsi. Ini berlawanan dengan intuisi manajerial yang memperlakukan ketidakpastian semata sebagai beban."
        },
        {
          "source": "formula_specific",
          "description_id": "Metode ini hanya sesuai bila keputusan benar benar dapat ditunda dan informasi baru benar benar akan tiba. Bila tidak, NPV biasa lebih jujur."
        }
      ],
      "controls": [
        {
          "source": "structural_class",
          "description_id": "Sajikan distribusi hasil dan bukan hanya nilai tengah. Wajibkan pernyataan sumber probabilitas."
        }
      ],
      "worked_example": {
        "inputs": {
          "opt_s": 640000000,
          "opt_x": 480000000,
          "opt_r": 0.055,
          "opt_t": 2,
          "opt_sigma": 0.45
        },
        "narrative_id": "Contoh ini memakai angka kampanye yang wajar bagi pasar Indonesia agar besaran hasilnya terasa masuk akal bagi pembelajar.",
        "must_be_verified_by_test": true
      },
      "gamification": {
        "xp_award_first_solve": 110,
        "xp_award_repeat": 22,
        "mastery_threshold_correct_in_row": 3,
        "badge_id": "badge_real_options_value",
        "unlocks_after_module": 8,
        "challenge_types": [
          "forward_compute",
          "inverse_solve",
          "spot_the_error",
          "interpret_the_band",
          "choose_the_metric"
        ]
      },
      "ui": {
        "panel_group": "B8",
        "primary_chart": "none",
        "show_formula_strip": true,
        "show_provenance_trail": true,
        "print_block": true
      },
      "cross_references": {
        "same_stratum": [
          "npv",
          "irr",
          "ev",
          "evpi"
        ],
        "same_phase": [
          "roas",
          "roi",
          "romi",
          "ltv_cac_ratio",
          "forecast_accuracy",
          "weighted_screening",
          "rice_score",
          "cost_of_delay",
          "wsjf_score",
          "fmea_rpn",
          "npv",
          "irr",
          "ev",
          "evpi"
        ],
        "same_structural_class": [
          "ev",
          "evpi"
        ],
        "consumes_outputs_of": [],
        "feeds_inputs_of": []
      }
    }
  ],
  "curriculum": [
    {
      "module": 1,
      "name": {
        "id": "Rasio Corong",
        "en": "Funnel Ratios"
      },
      "formula_ids": [
        "ctr",
        "conversion_rate",
        "engagement_rate",
        "bounce_rate",
        "cart_abandonment_rate",
        "mql_to_sql_rate",
        "lead_to_customer_rate"
      ],
      "formula_count": 7,
      "prerequisites": {
        "modules": [],
        "mathematical": "Pembagian dan persentase",
        "data_access": "Log platform iklan dan analitik situs"
      },
      "central_idea_id": "Setiap rasio memiliki penyebut yang benar hanya satu. Menemukan penyebut itu adalah seluruh keterampilan pada modul ini.",
      "learning_outcome_id": "Peserta dapat menyebutkan penyebut yang benar untuk tujuh rasio tanpa melihat catatan.",
      "structure": [
        {
          "section": "Bacaan",
          "minutes": 13,
          "content": "Prosa naratif, bukan daftar. Setiap rumus diperkenalkan melalui pertanyaan keputusan yang menimbulkannya."
        },
        {
          "section": "Contoh terpandu",
          "minutes": 10,
          "content": "Satu kasus dikerjakan penuh dengan jejak turunan terbuka."
        },
        {
          "section": "Latihan terbimbing",
          "minutes": 15,
          "content": "Enam butir dengan umpan balik segera dan penjelasan penuh."
        },
        {
          "section": "Penilaian",
          "minutes": 20,
          "content": "Dua belas butir bercampur jenis. Ambang lulus 75 persen. Tidak ada batas waktu."
        }
      ],
      "gate": {
        "pass_threshold": 0.75,
        "retake_policy": "Tidak terbatas. Butir diacak ulang setiap percobaan.",
        "cooldown": "Tidak ada. Menunda peserta tidak membuat mereka belajar lebih baik."
      },
      "capstone": {
        "present": false,
        "description": "Proyek pendek memakai data sintetis yang disediakan aplikasi. Hasilnya dicetak sebagai laporan A4 hitam putih."
      }
    },
    {
      "module": 2,
      "name": {
        "id": "Biaya dan Nilai per Satuan",
        "en": "Unit Cost and Unit Value"
      },
      "formula_ids": [
        "cpm",
        "cpc",
        "cpl",
        "cpa",
        "aov",
        "arpu",
        "arppu",
        "purchase_frequency"
      ],
      "formula_count": 8,
      "prerequisites": {
        "modules": [
          1
        ],
        "mathematical": "Rasio bersatuan campuran",
        "data_access": "Data belanja iklan dan data transaksi"
      },
      "central_idea_id": "Biaya per satuan bergerak menurun sepanjang corong sementara nilainya bergerak menaik. Titik potong keduanya adalah kelayakan kampanye.",
      "learning_outcome_id": "Peserta dapat menjelaskan mengapa CPC adalah hasil bagi CPM terhadap CTR.",
      "structure": [
        {
          "section": "Bacaan",
          "minutes": 14,
          "content": "Prosa naratif, bukan daftar. Setiap rumus diperkenalkan melalui pertanyaan keputusan yang menimbulkannya."
        },
        {
          "section": "Contoh terpandu",
          "minutes": 10,
          "content": "Satu kasus dikerjakan penuh dengan jejak turunan terbuka."
        },
        {
          "section": "Latihan terbimbing",
          "minutes": 15,
          "content": "Enam butir dengan umpan balik segera dan penjelasan penuh."
        },
        {
          "section": "Penilaian",
          "minutes": 20,
          "content": "Dua belas butir bercampur jenis. Ambang lulus 75 persen. Tidak ada batas waktu."
        }
      ],
      "gate": {
        "pass_threshold": 0.75,
        "retake_policy": "Tidak terbatas. Butir diacak ulang setiap percobaan.",
        "cooldown": "Tidak ada. Menunda peserta tidak membuat mereka belajar lebih baik."
      },
      "capstone": {
        "present": false,
        "description": "Proyek pendek memakai data sintetis yang disediakan aplikasi. Hasilnya dicetak sebagai laporan A4 hitam putih."
      }
    },
    {
      "module": 3,
      "name": {
        "id": "Marjin dan Titik Impas",
        "en": "Margin and Break-Even"
      },
      "formula_ids": [
        "gross_margin",
        "net_margin",
        "contribution_margin",
        "break_even_quantity"
      ],
      "formula_count": 4,
      "prerequisites": {
        "modules": [
          1,
          2
        ],
        "mathematical": "Aljabar linear satu variabel",
        "data_access": "Data akuntansi biaya"
      },
      "central_idea_id": "Marjin kontribusi adalah batas atas biaya akuisisi yang masuk akal. Tanpa angka ini, seluruh perbincangan tentang efisiensi iklan tidak berdasar.",
      "learning_outcome_id": "Peserta dapat menghitung batas atas CPA yang dapat dipertanggungjawabkan dari data marjin.",
      "structure": [
        {
          "section": "Bacaan",
          "minutes": 15,
          "content": "Prosa naratif, bukan daftar. Setiap rumus diperkenalkan melalui pertanyaan keputusan yang menimbulkannya."
        },
        {
          "section": "Contoh terpandu",
          "minutes": 10,
          "content": "Satu kasus dikerjakan penuh dengan jejak turunan terbuka."
        },
        {
          "section": "Latihan terbimbing",
          "minutes": 15,
          "content": "Enam butir dengan umpan balik segera dan penjelasan penuh."
        },
        {
          "section": "Penilaian",
          "minutes": 20,
          "content": "Dua belas butir bercampur jenis. Ambang lulus 75 persen. Tidak ada batas waktu."
        }
      ],
      "gate": {
        "pass_threshold": 0.75,
        "retake_policy": "Tidak terbatas. Butir diacak ulang setiap percobaan.",
        "cooldown": "Tidak ada. Menunda peserta tidak membuat mereka belajar lebih baik."
      },
      "capstone": {
        "present": true,
        "description": "Proyek pendek memakai data sintetis yang disediakan aplikasi. Hasilnya dicetak sebagai laporan A4 hitam putih."
      }
    },
    {
      "module": 4,
      "name": {
        "id": "Dinamika Pelanggan",
        "en": "Customer Dynamics"
      },
      "formula_ids": [
        "churn_rate",
        "retention_rate",
        "mrr",
        "arr",
        "mrr_churn_rate",
        "gdr",
        "ndr"
      ],
      "formula_count": 7,
      "prerequisites": {
        "modules": [
          1,
          2,
          3
        ],
        "mathematical": "Selisih dan rasio antarperiode",
        "data_access": "Basis data langganan"
      },
      "central_idea_id": "Churn berbasis jumlah dan churn berbasis nilai dapat bergerak berlawanan arah. Organisasi yang hanya memantau satu di antaranya akan terkejut.",
      "learning_outcome_id": "Peserta dapat menjelaskan sebuah kasus ketika NDR di atas satu sementara churn pelanggan memburuk.",
      "structure": [
        {
          "section": "Bacaan",
          "minutes": 16,
          "content": "Prosa naratif, bukan daftar. Setiap rumus diperkenalkan melalui pertanyaan keputusan yang menimbulkannya."
        },
        {
          "section": "Contoh terpandu",
          "minutes": 10,
          "content": "Satu kasus dikerjakan penuh dengan jejak turunan terbuka."
        },
        {
          "section": "Latihan terbimbing",
          "minutes": 15,
          "content": "Enam butir dengan umpan balik segera dan penjelasan penuh."
        },
        {
          "section": "Penilaian",
          "minutes": 20,
          "content": "Dua belas butir bercampur jenis. Ambang lulus 75 persen. Tidak ada batas waktu."
        }
      ],
      "gate": {
        "pass_threshold": 0.75,
        "retake_policy": "Tidak terbatas. Butir diacak ulang setiap percobaan.",
        "cooldown": "Tidak ada. Menunda peserta tidak membuat mereka belajar lebih baik."
      },
      "capstone": {
        "present": false,
        "description": "Proyek pendek memakai data sintetis yang disediakan aplikasi. Hasilnya dicetak sebagai laporan A4 hitam putih."
      }
    },
    {
      "module": 5,
      "name": {
        "id": "Persepsi dan Segmentasi",
        "en": "Perception and Segmentation"
      },
      "formula_ids": [
        "csat",
        "nps",
        "ces",
        "rfm_score"
      ],
      "formula_count": 4,
      "prerequisites": {
        "modules": [
          1,
          2,
          3,
          4
        ],
        "mathematical": "Skala, proporsi, dan pembobotan",
        "data_access": "Instrumen survei yang dirancang sendiri"
      },
      "central_idea_id": "Data persepsi tidak tersedia secara otomatis. Biaya memperolehnya adalah bagian dari keputusan memakainya.",
      "learning_outcome_id": "Peserta dapat merancang satu instrumen tiga pertanyaan dan menyatakan bias yang melekat padanya.",
      "structure": [
        {
          "section": "Bacaan",
          "minutes": 17,
          "content": "Prosa naratif, bukan daftar. Setiap rumus diperkenalkan melalui pertanyaan keputusan yang menimbulkannya."
        },
        {
          "section": "Contoh terpandu",
          "minutes": 10,
          "content": "Satu kasus dikerjakan penuh dengan jejak turunan terbuka."
        },
        {
          "section": "Latihan terbimbing",
          "minutes": 15,
          "content": "Enam butir dengan umpan balik segera dan penjelasan penuh."
        },
        {
          "section": "Penilaian",
          "minutes": 20,
          "content": "Dua belas butir bercampur jenis. Ambang lulus 75 persen. Tidak ada batas waktu."
        }
      ],
      "gate": {
        "pass_threshold": 0.75,
        "retake_policy": "Tidak terbatas. Butir diacak ulang setiap percobaan.",
        "cooldown": "Tidak ada. Menunda peserta tidak membuat mereka belajar lebih baik."
      },
      "capstone": {
        "present": false,
        "description": "Proyek pendek memakai data sintetis yang disediakan aplikasi. Hasilnya dicetak sebagai laporan A4 hitam putih."
      }
    },
    {
      "module": 6,
      "name": {
        "id": "Efisiensi dan Nilai Seumur Hidup",
        "en": "Efficiency and Lifetime Value"
      },
      "formula_ids": [
        "cac",
        "roas",
        "roi",
        "romi",
        "clv_simple",
        "clv",
        "payback_period",
        "ltv_cac_ratio"
      ],
      "formula_count": 8,
      "prerequisites": {
        "modules": [
          1,
          2,
          3,
          4,
          5
        ],
        "mathematical": "Deret terdiskonto dan batas atribusi",
        "data_access": "Atribusi biaya lintas fungsi"
      },
      "central_idea_id": "Seluruh modul ini bersandar pada tiga angka yang jarang didefinisikan secara tertulis: ARPU, marjin kotor, dan biaya akuisisi. Modul ini sesungguhnya adalah pelajaran tata kelola data yang menyamar sebagai pelajaran rumus.",
      "learning_outcome_id": "Peserta dapat menyusun definisi tertulis untuk lingkup biaya akuisisi pada satu organisasi nyata.",
      "structure": [
        {
          "section": "Bacaan",
          "minutes": 18,
          "content": "Prosa naratif, bukan daftar. Setiap rumus diperkenalkan melalui pertanyaan keputusan yang menimbulkannya."
        },
        {
          "section": "Contoh terpandu",
          "minutes": 10,
          "content": "Satu kasus dikerjakan penuh dengan jejak turunan terbuka."
        },
        {
          "section": "Latihan terbimbing",
          "minutes": 15,
          "content": "Enam butir dengan umpan balik segera dan penjelasan penuh."
        },
        {
          "section": "Penilaian",
          "minutes": 20,
          "content": "Dua belas butir bercampur jenis. Ambang lulus 75 persen. Tidak ada batas waktu."
        }
      ],
      "gate": {
        "pass_threshold": 0.75,
        "retake_policy": "Tidak terbatas. Butir diacak ulang setiap percobaan.",
        "cooldown": "Tidak ada. Menunda peserta tidak membuat mereka belajar lebih baik."
      },
      "capstone": {
        "present": true,
        "description": "Proyek pendek memakai data sintetis yang disediakan aplikasi. Hasilnya dicetak sebagai laporan A4 hitam putih."
      }
    },
    {
      "module": 7,
      "name": {
        "id": "Pasar dan Permintaan",
        "en": "Market and Demand"
      },
      "formula_ids": [
        "market_share",
        "relative_market_share",
        "penetration_rate",
        "tam",
        "sam",
        "som",
        "price_elasticity",
        "cross_elasticity",
        "income_elasticity",
        "sov",
        "sos",
        "grp",
        "net_reach",
        "effective_frequency"
      ],
      "formula_count": 14,
      "prerequisites": {
        "modules": [
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "mathematical": "Estimasi populasi dan rasio perubahan persentase",
        "data_access": "Data sekunder dan panel audiens"
      },
      "central_idea_id": "Definisi pasar menentukan hasil. Mempersempit definisi adalah cara termudah membuat angka tampak baik, dan cara tercepat kehilangan kepercayaan.",
      "learning_outcome_id": "Peserta dapat menyusun rantai TAM ke SAM ke SOM yang setiap tingkatnya dapat dipertanggungjawabkan.",
      "structure": [
        {
          "section": "Bacaan",
          "minutes": 19,
          "content": "Prosa naratif, bukan daftar. Setiap rumus diperkenalkan melalui pertanyaan keputusan yang menimbulkannya."
        },
        {
          "section": "Contoh terpandu",
          "minutes": 10,
          "content": "Satu kasus dikerjakan penuh dengan jejak turunan terbuka."
        },
        {
          "section": "Latihan terbimbing",
          "minutes": 15,
          "content": "Enam butir dengan umpan balik segera dan penjelasan penuh."
        },
        {
          "section": "Penilaian",
          "minutes": 20,
          "content": "Dua belas butir bercampur jenis. Ambang lulus 75 persen. Tidak ada batas waktu."
        }
      ],
      "gate": {
        "pass_threshold": 0.75,
        "retake_policy": "Tidak terbatas. Butir diacak ulang setiap percobaan.",
        "cooldown": "Tidak ada. Menunda peserta tidak membuat mereka belajar lebih baik."
      },
      "capstone": {
        "present": false,
        "description": "Proyek pendek memakai data sintetis yang disediakan aplikasi. Hasilnya dicetak sebagai laporan A4 hitam putih."
      }
    },
    {
      "module": 8,
      "name": {
        "id": "Preferensi dan Harga",
        "en": "Preference and Pricing"
      },
      "formula_ids": [
        "van_westendorp",
        "gabor_granger",
        "conjoint_utility",
        "wtp",
        "kano_better",
        "kano_worse",
        "opportunity_score",
        "qfd_technical_importance",
        "weighted_screening"
      ],
      "formula_count": 9,
      "prerequisites": {
        "modules": [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "mathematical": "Regresi, matriks, dan titik potong kurva",
        "data_access": "Riset primer yang dirancang"
      },
      "central_idea_id": "Metode pada modul ini mengukur konstruk laten. Angka yang dihasilkan tidak pernah lebih baik daripada instrumen yang menghasilkannya.",
      "learning_outcome_id": "Peserta dapat memilih instrumen harga yang tepat untuk tiga situasi berbeda dan menyebut keterbatasannya.",
      "structure": [
        {
          "section": "Bacaan",
          "minutes": 20,
          "content": "Prosa naratif, bukan daftar. Setiap rumus diperkenalkan melalui pertanyaan keputusan yang menimbulkannya."
        },
        {
          "section": "Contoh terpandu",
          "minutes": 10,
          "content": "Satu kasus dikerjakan penuh dengan jejak turunan terbuka."
        },
        {
          "section": "Latihan terbimbing",
          "minutes": 15,
          "content": "Enam butir dengan umpan balik segera dan penjelasan penuh."
        },
        {
          "section": "Penilaian",
          "minutes": 20,
          "content": "Dua belas butir bercampur jenis. Ambang lulus 75 persen. Tidak ada batas waktu."
        }
      ],
      "gate": {
        "pass_threshold": 0.75,
        "retake_policy": "Tidak terbatas. Butir diacak ulang setiap percobaan.",
        "cooldown": "Tidak ada. Menunda peserta tidak membuat mereka belajar lebih baik."
      },
      "capstone": {
        "present": false,
        "description": "Proyek pendek memakai data sintetis yang disediakan aplikasi. Hasilnya dicetak sebagai laporan A4 hitam putih."
      }
    },
    {
      "module": 9,
      "name": {
        "id": "Keputusan di Bawah Ketidakpastian",
        "en": "Decision Under Uncertainty"
      },
      "formula_ids": [
        "npv",
        "irr",
        "ev",
        "evpi",
        "real_options_value",
        "rice_score",
        "wsjf_score",
        "fmea_rpn",
        "cost_of_delay",
        "bass_f",
        "bass_n",
        "sales_velocity",
        "pipeline_coverage",
        "forecast_accuracy",
        "k_factor"
      ],
      "formula_count": 15,
      "prerequisites": {
        "modules": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8
        ],
        "mathematical": "Probabilitas, kalibrasi parameter, dan penyelesaian iteratif",
        "data_access": "Data longitudinal dan eksperimen"
      },
      "central_idea_id": "Nilai harapan adalah rata rata jangka panjang. Untuk keputusan yang diambil sekali, ia bukan panduan memadai tanpa memperhatikan risiko kehancuran.",
      "learning_outcome_id": "Peserta dapat menyatakan batas atas anggaran riset yang masuk akal untuk satu keputusan nyata.",
      "structure": [
        {
          "section": "Bacaan",
          "minutes": 21,
          "content": "Prosa naratif, bukan daftar. Setiap rumus diperkenalkan melalui pertanyaan keputusan yang menimbulkannya."
        },
        {
          "section": "Contoh terpandu",
          "minutes": 10,
          "content": "Satu kasus dikerjakan penuh dengan jejak turunan terbuka."
        },
        {
          "section": "Latihan terbimbing",
          "minutes": 15,
          "content": "Enam butir dengan umpan balik segera dan penjelasan penuh."
        },
        {
          "section": "Penilaian",
          "minutes": 20,
          "content": "Dua belas butir bercampur jenis. Ambang lulus 75 persen. Tidak ada batas waktu."
        }
      ],
      "gate": {
        "pass_threshold": 0.75,
        "retake_policy": "Tidak terbatas. Butir diacak ulang setiap percobaan.",
        "cooldown": "Tidak ada. Menunda peserta tidak membuat mereka belajar lebih baik."
      },
      "capstone": {
        "present": true,
        "description": "Proyek pendek memakai data sintetis yang disediakan aplikasi. Hasilnya dicetak sebagai laporan A4 hitam putih."
      }
    }
  ]
} as const;

export type AppCatalog = typeof catalog;
