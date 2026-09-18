/* GENERATED FILE - do not edit. */
/* Emitted by @metrika/codegen from spec/metrika.spec.json. */
/* eslint-disable */
import type { VariableDefinition } from "../types";

export const variableRegistry = {
  "impressions": {
    "id": "impressions",
    "label": {
      "id": "Total Tayangan",
      "en": "Impressions"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah penayangan iklan atau konten, termasuk penayangan berulang kepada orang yang sama.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "reach": {
    "id": "reach",
    "label": {
      "id": "Jangkauan",
      "en": "Reach"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah individu unik yang terpapar. Selalu lebih kecil atau sama dengan tayangan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "gross_reach": {
    "id": "gross_reach",
    "label": {
      "id": "Jangkauan Kotor",
      "en": "Gross Reach"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Penjumlahan jangkauan seluruh kanal sebelum koreksi tumpang tindih.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "duplication": {
    "id": "duplication",
    "label": {
      "id": "Duplikasi Audiens",
      "en": "Audience Duplication"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah individu yang terhitung lebih dari satu kali lintas kanal.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "frequency": {
    "id": "frequency",
    "label": {
      "id": "Frekuensi Terpaan",
      "en": "Frequency"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Rata-rata jumlah terpaan per individu terjangkau.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "reach_at_threshold": {
    "id": "reach_at_threshold",
    "label": {
      "id": "Jangkauan pada Ambang",
      "en": "Reach at Threshold"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah individu yang menerima terpaan minimal sebanyak ambang efektif.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "total_reach": {
    "id": "total_reach",
    "label": {
      "id": "Total Jangkauan",
      "en": "Total Reach"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jangkauan bersih seluruh kampanye.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "reach_pct": {
    "id": "reach_pct",
    "label": {
      "id": "Jangkauan Persen",
      "en": "Reach Percent"
    },
    "unitClass": "percent",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 100,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jangkauan sebagai persentase populasi sasaran. Dipakai pada GRP.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": "%"
    }
  },
  "clicks": {
    "id": "clicks",
    "label": {
      "id": "Total Klik",
      "en": "Clicks"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah klik pada tautan iklan atau konten.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "visitors": {
    "id": "visitors",
    "label": {
      "id": "Total Pengunjung",
      "en": "Visitors"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah pengunjung yang masuk ke halaman tujuan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "unique_visitors": {
    "id": "unique_visitors",
    "label": {
      "id": "Pengunjung Unik",
      "en": "Unique Visitors"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah individu unik yang mengunjungi situs dalam satu periode.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "sessions": {
    "id": "sessions",
    "label": {
      "id": "Total Sesi",
      "en": "Total Sessions"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah sesi kunjungan. Satu pengunjung dapat menghasilkan banyak sesi.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "single_page_sessions": {
    "id": "single_page_sessions",
    "label": {
      "id": "Sesi Satu Halaman",
      "en": "Single Page Sessions"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Sesi yang berakhir tanpa interaksi kedua.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "engagements": {
    "id": "engagements",
    "label": {
      "id": "Total Interaksi",
      "en": "Engagements"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Penjumlahan suka, komentar, bagikan, simpan, dan klik profil.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "followers": {
    "id": "followers",
    "label": {
      "id": "Total Pengikut",
      "en": "Followers"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah pengikut akun pada akhir periode.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "conversions": {
    "id": "conversions",
    "label": {
      "id": "Total Konversi",
      "en": "Conversions"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah tindakan sasaran yang tercapai.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "acquisitions": {
    "id": "acquisitions",
    "label": {
      "id": "Total Akuisisi",
      "en": "Acquisitions"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah pelanggan baru yang diperoleh dari kampanye.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "leads": {
    "id": "leads",
    "label": {
      "id": "Total Prospek",
      "en": "Leads"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah prospek yang menyerahkan data kontak.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "mql": {
    "id": "mql",
    "label": {
      "id": "Prospek Berkualitas Pemasaran",
      "en": "Marketing Qualified Leads"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Prospek yang lolos kriteria penilaian pemasaran.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "sql": {
    "id": "sql",
    "label": {
      "id": "Prospek Berkualitas Penjualan",
      "en": "Sales Qualified Leads"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Prospek yang diterima tim penjualan untuk ditindaklanjuti.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "carts_created": {
    "id": "carts_created",
    "label": {
      "id": "Keranjang Dibuat",
      "en": "Carts Created"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah keranjang belanja yang diisi sedikitnya satu barang.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "carts_purchased": {
    "id": "carts_purchased",
    "label": {
      "id": "Keranjang Diselesaikan",
      "en": "Carts Purchased"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah keranjang yang berakhir pada pembayaran berhasil.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "spend": {
    "id": "spend",
    "label": {
      "id": "Belanja Iklan",
      "en": "Ad Spend"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Belanja media murni, tidak termasuk gaji, perkakas, dan biaya produksi.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "ad_cost": {
    "id": "ad_cost",
    "label": {
      "id": "Biaya Iklan",
      "en": "Ad Cost"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Biaya iklan yang dipakai sebagai penyebut ROAS.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "marketing_cost": {
    "id": "marketing_cost",
    "label": {
      "id": "Biaya Pemasaran",
      "en": "Marketing Cost"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Seluruh biaya pemasaran termasuk perkakas, produksi, dan jasa pihak ketiga.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "total_acquisition_cost": {
    "id": "total_acquisition_cost",
    "label": {
      "id": "Total Biaya Akuisisi",
      "en": "Total Acquisition Cost"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Biaya penjualan dan pemasaran gabungan. Lingkup ini yang membedakan CAC dari CPA.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "cost": {
    "id": "cost",
    "label": {
      "id": "Biaya",
      "en": "Cost"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Biaya umum pada perhitungan ROI tingkat entitas.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "investment_0": {
    "id": "investment_0",
    "label": {
      "id": "Investasi Awal",
      "en": "Initial Investment"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pengeluaran modal pada periode nol.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "fixed_cost": {
    "id": "fixed_cost",
    "label": {
      "id": "Biaya Tetap",
      "en": "Fixed Cost"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Biaya yang tidak berubah terhadap volume dalam rentang relevan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "variable_cost": {
    "id": "variable_cost",
    "label": {
      "id": "Biaya Variabel per Unit",
      "en": "Variable Cost per Unit"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Biaya yang melekat pada setiap unit tambahan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "cogs": {
    "id": "cogs",
    "label": {
      "id": "Harga Pokok Penjualan",
      "en": "Cost of Goods Sold"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Biaya langsung yang melekat pada barang atau jasa yang terjual.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "revenue": {
    "id": "revenue",
    "label": {
      "id": "Total Pendapatan",
      "en": "Revenue"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pendapatan kotor sebelum dikurangi biaya apa pun.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "ad_revenue": {
    "id": "ad_revenue",
    "label": {
      "id": "Pendapatan Teratribusi Iklan",
      "en": "Attributed Ad Revenue"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pendapatan yang diatribusikan kepada iklan menurut model atribusi yang dipakai.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "incremental_revenue": {
    "id": "incremental_revenue",
    "label": {
      "id": "Pendapatan Inkremental",
      "en": "Incremental Revenue"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Selisih pendapatan kelompok perlakuan terhadap kelompok kendali. Hanya sahih bila ada desain uji.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "gain": {
    "id": "gain",
    "label": {
      "id": "Keuntungan Kotor",
      "en": "Gain"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai yang diperoleh sebelum dikurangi biaya, pada perhitungan ROI.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "net_profit": {
    "id": "net_profit",
    "label": {
      "id": "Laba Bersih",
      "en": "Net Profit"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Laba setelah seluruh biaya, termasuk biaya tetap dan pajak.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "price": {
    "id": "price",
    "label": {
      "id": "Harga Jual per Unit",
      "en": "Unit Price"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Harga yang dibayarkan pelanggan per unit.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "deal_value": {
    "id": "deal_value",
    "label": {
      "id": "Nilai Rata-rata Transaksi",
      "en": "Average Deal Value"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai rata-rata satu kesepakatan penjualan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "pipeline_value": {
    "id": "pipeline_value",
    "label": {
      "id": "Nilai Pipeline",
      "en": "Pipeline Value"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Total nilai peluang terbuka pada saluran penjualan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "quota": {
    "id": "quota",
    "label": {
      "id": "Target Penjualan",
      "en": "Sales Quota"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Target pendapatan yang harus dicapai pada periode berjalan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "orders": {
    "id": "orders",
    "label": {
      "id": "Jumlah Pesanan",
      "en": "Orders"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah transaksi selesai dalam satu periode.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "users": {
    "id": "users",
    "label": {
      "id": "Jumlah Pengguna",
      "en": "Users"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Seluruh pengguna aktif, berbayar maupun tidak.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "paying_users": {
    "id": "paying_users",
    "label": {
      "id": "Pengguna Berbayar",
      "en": "Paying Users"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Bagian dari pengguna yang menghasilkan pendapatan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "unique_customers": {
    "id": "unique_customers",
    "label": {
      "id": "Pelanggan Unik",
      "en": "Unique Customers"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah individu berbeda yang bertransaksi dalam satu periode.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "customers": {
    "id": "customers",
    "label": {
      "id": "Jumlah Pelanggan",
      "en": "Customers"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah pelanggan pada konteks perhitungan yang bersangkutan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "new_customers": {
    "id": "new_customers",
    "label": {
      "id": "Pelanggan Baru",
      "en": "New Customers"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pelanggan yang pertama kali bertransaksi dalam periode berjalan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "start_customers": {
    "id": "start_customers",
    "label": {
      "id": "Pelanggan Awal Periode",
      "en": "Customers at Period Start"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah pelanggan aktif pada hari pertama periode.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "end_customers": {
    "id": "end_customers",
    "label": {
      "id": "Pelanggan Akhir Periode",
      "en": "Customers at Period End"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah pelanggan aktif pada hari terakhir periode.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "lost_customers": {
    "id": "lost_customers",
    "label": {
      "id": "Pelanggan Hilang",
      "en": "Lost Customers"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pelanggan yang berhenti dalam periode berjalan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "subscribers": {
    "id": "subscribers",
    "label": {
      "id": "Jumlah Pelanggan Berlangganan",
      "en": "Subscribers"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah akun berlangganan aktif.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "start_mrr": {
    "id": "start_mrr",
    "label": {
      "id": "MRR Awal Periode",
      "en": "Starting MRR"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pendapatan berulang bulanan pada awal periode.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "expansion_mrr": {
    "id": "expansion_mrr",
    "label": {
      "id": "MRR Ekspansi",
      "en": "Expansion MRR"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Tambahan pendapatan dari pelanggan lama melalui peningkatan paket.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "contraction_mrr": {
    "id": "contraction_mrr",
    "label": {
      "id": "MRR Kontraksi",
      "en": "Contraction MRR"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Penurunan pendapatan dari pelanggan lama yang menurunkan paket.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "churned_mrr": {
    "id": "churned_mrr",
    "label": {
      "id": "MRR Hilang",
      "en": "Churned MRR"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pendapatan yang hilang karena pelanggan berhenti sepenuhnya.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "total_mrr": {
    "id": "total_mrr",
    "label": {
      "id": "Total MRR",
      "en": "Total MRR"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Basis MRR yang dipakai sebagai penyebut tingkat churn nilai.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "promoters": {
    "id": "promoters",
    "label": {
      "id": "Jumlah Promotor",
      "en": "Promoters"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Responden yang memberi skor sembilan atau sepuluh.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "detractors": {
    "id": "detractors",
    "label": {
      "id": "Jumlah Detraktor",
      "en": "Detractors"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Responden yang memberi skor nol sampai enam.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "total_respondents": {
    "id": "total_respondents",
    "label": {
      "id": "Total Responden",
      "en": "Total Respondents"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 1,
      "max": null,
      "decimals": 0,
      "allowZero": false,
      "nullable": true
    },
    "definition": "Seluruh responden yang menjawab, termasuk yang netral.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "satisfied_count": {
    "id": "satisfied_count",
    "label": {
      "id": "Jumlah Responden Puas",
      "en": "Satisfied Count"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Responden yang memilih kategori puas atau sangat puas.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "total_responses": {
    "id": "total_responses",
    "label": {
      "id": "Total Jawaban",
      "en": "Total Responses"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 1,
      "max": null,
      "decimals": 0,
      "allowZero": false,
      "nullable": true
    },
    "definition": "Seluruh jawaban sah yang masuk.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "effort_sum": {
    "id": "effort_sum",
    "label": {
      "id": "Jumlah Skor Upaya",
      "en": "Sum of Effort Scores"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Penjumlahan seluruh skor tingkat kesulitan yang dilaporkan responden.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "kano_a": {
    "id": "kano_a",
    "label": {
      "id": "Kano Menarik",
      "en": "Kano Attractive"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah responden yang mengkategorikan fitur sebagai menarik.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "kano_o": {
    "id": "kano_o",
    "label": {
      "id": "Kano Satu Dimensi",
      "en": "Kano One-Dimensional"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah responden yang mengkategorikan fitur sebagai kinerja utama.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "kano_m": {
    "id": "kano_m",
    "label": {
      "id": "Kano Wajib",
      "en": "Kano Must-Be"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah responden yang mengkategorikan fitur sebagai kebutuhan dasar.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "kano_i": {
    "id": "kano_i",
    "label": {
      "id": "Kano Netral",
      "en": "Kano Indifferent"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah responden yang tidak terpengaruh oleh keberadaan fitur.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "importance": {
    "id": "importance",
    "label": {
      "id": "Tingkat Kepentingan",
      "en": "Importance"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 10,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Skor kepentingan hasil tugas menurut pelanggan, skala nol sampai sepuluh.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "satisfaction": {
    "id": "satisfaction",
    "label": {
      "id": "Tingkat Kepuasan",
      "en": "Satisfaction"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 10,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Skor kepuasan atas hasil tugas saat ini, skala nol sampai sepuluh.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "buyers_at_p": {
    "id": "buyers_at_p",
    "label": {
      "id": "Pembeli pada Harga P",
      "en": "Buyers at Price P"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Responden yang menyatakan bersedia membeli pada titik harga yang diuji.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "too_cheap": {
    "id": "too_cheap",
    "label": {
      "id": "Ambang Terlalu Murah",
      "en": "Too Cheap Threshold"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Harga yang membuat responden meragukan mutu produk.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "cheap": {
    "id": "cheap",
    "label": {
      "id": "Ambang Murah",
      "en": "Cheap Threshold"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Harga yang dinilai menguntungkan namun masih wajar.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "expensive": {
    "id": "expensive",
    "label": {
      "id": "Ambang Mahal",
      "en": "Expensive Threshold"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Harga yang dinilai mahal namun masih dipertimbangkan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "too_expensive": {
    "id": "too_expensive",
    "label": {
      "id": "Ambang Terlalu Mahal",
      "en": "Too Expensive Threshold"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Harga yang membuat responden menolak membeli sama sekali.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "population": {
    "id": "population",
    "label": {
      "id": "Populasi Sasaran",
      "en": "Target Population"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah seluruh individu atau lembaga dalam wilayah sasaran.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "need_percent": {
    "id": "need_percent",
    "label": {
      "id": "Persentase Berkebutuhan",
      "en": "Need Percent"
    },
    "unitClass": "percent",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 100,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Proporsi populasi yang benar benar memiliki kebutuhan yang dilayani produk.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": "%"
    }
  },
  "reachable_percent": {
    "id": "reachable_percent",
    "label": {
      "id": "Persentase Terjangkau",
      "en": "Reachable Percent"
    },
    "unitClass": "percent",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 100,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Proporsi TAM yang dapat dijangkau oleh model distribusi dan kanal yang dimiliki.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": "%"
    }
  },
  "capture_percent": {
    "id": "capture_percent",
    "label": {
      "id": "Persentase Tertangkap",
      "en": "Capture Percent"
    },
    "unitClass": "percent",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 100,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Proporsi SAM yang realistis diraih dalam horizon perencanaan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": "%"
    }
  },
  "tam_population": {
    "id": "tam_population",
    "label": {
      "id": "Populasi TAM",
      "en": "TAM Population"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah individu dalam pasar total, dipakai sebagai penyebut tingkat penetrasi.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "company_sales": {
    "id": "company_sales",
    "label": {
      "id": "Penjualan Perusahaan",
      "en": "Company Sales"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai penjualan perusahaan dalam satu kategori dan periode.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "market_sales": {
    "id": "market_sales",
    "label": {
      "id": "Penjualan Pasar",
      "en": "Market Sales"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai penjualan seluruh pemain dalam kategori dan periode yang sama.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "company_share": {
    "id": "company_share",
    "label": {
      "id": "Pangsa Perusahaan",
      "en": "Company Share"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pangsa pasar perusahaan dalam bentuk proporsi.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "largest_competitor_share": {
    "id": "largest_competitor_share",
    "label": {
      "id": "Pangsa Pesaing Terbesar",
      "en": "Largest Competitor Share"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pangsa pasar pesaing terbesar, bukan pangsa rata rata pesaing.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "brand_mentions": {
    "id": "brand_mentions",
    "label": {
      "id": "Sebutan Merek",
      "en": "Brand Mentions"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah penyebutan merek pada kanal yang dipantau.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "market_mentions": {
    "id": "market_mentions",
    "label": {
      "id": "Sebutan Kategori",
      "en": "Category Mentions"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah penyebutan seluruh merek dalam kategori.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "brand_searches": {
    "id": "brand_searches",
    "label": {
      "id": "Pencarian Merek",
      "en": "Brand Searches"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Volume pencarian kata kunci bermerek.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "category_searches": {
    "id": "category_searches",
    "label": {
      "id": "Pencarian Kategori",
      "en": "Category Searches"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Volume pencarian seluruh kata kunci kategori.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "q1": {
    "id": "q1",
    "label": {
      "id": "Kuantitas Awal",
      "en": "Quantity Before"
    },
    "unitClass": "count",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Kuantitas permintaan sebelum perubahan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "q2": {
    "id": "q2",
    "label": {
      "id": "Kuantitas Akhir",
      "en": "Quantity After"
    },
    "unitClass": "count",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Kuantitas permintaan setelah perubahan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "p1": {
    "id": "p1",
    "label": {
      "id": "Harga Awal",
      "en": "Price Before"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Harga sebelum perubahan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "p2": {
    "id": "p2",
    "label": {
      "id": "Harga Akhir",
      "en": "Price After"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Harga setelah perubahan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "qx1": {
    "id": "qx1",
    "label": {
      "id": "Kuantitas Barang X Awal",
      "en": "Quantity of X Before"
    },
    "unitClass": "count",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Kuantitas barang X sebelum harga barang Y berubah.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "qx2": {
    "id": "qx2",
    "label": {
      "id": "Kuantitas Barang X Akhir",
      "en": "Quantity of X After"
    },
    "unitClass": "count",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Kuantitas barang X setelah harga barang Y berubah.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "py1": {
    "id": "py1",
    "label": {
      "id": "Harga Barang Y Awal",
      "en": "Price of Y Before"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Harga barang pembanding sebelum perubahan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "py2": {
    "id": "py2",
    "label": {
      "id": "Harga Barang Y Akhir",
      "en": "Price of Y After"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Harga barang pembanding setelah perubahan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "i1": {
    "id": "i1",
    "label": {
      "id": "Pendapatan Awal",
      "en": "Income Before"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pendapatan konsumen sebelum perubahan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "i2": {
    "id": "i2",
    "label": {
      "id": "Pendapatan Akhir",
      "en": "Income After"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Pendapatan konsumen setelah perubahan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "bass_p": {
    "id": "bass_p",
    "label": {
      "id": "Koefisien Inovasi",
      "en": "Coefficient of Innovation"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 5,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Kecenderungan mengadopsi karena pengaruh luar seperti iklan. Nilai lazim 0,01 sampai 0,03.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "bass_q": {
    "id": "bass_q",
    "label": {
      "id": "Koefisien Imitasi",
      "en": "Coefficient of Imitation"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 2,
      "decimals": 5,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Kecenderungan mengadopsi karena pengaruh sesama pemakai. Nilai lazim 0,3 sampai 0,5.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "bass_m": {
    "id": "bass_m",
    "label": {
      "id": "Potensi Pasar Akhir",
      "en": "Ultimate Market Potential"
    },
    "unitClass": "count",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah pengadopsi total pada akhir siklus. Lazimnya diambil dari SOM atau SAM.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "bass_nt": {
    "id": "bass_nt",
    "label": {
      "id": "Adopsi Kumulatif",
      "en": "Cumulative Adopters"
    },
    "unitClass": "count",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah pengadopsi sampai waktu t.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "time_t": {
    "id": "time_t",
    "label": {
      "id": "Periode Waktu",
      "en": "Time Period"
    },
    "unitClass": "period",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Indeks waktu dalam satuan yang konsisten dengan parameter model.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "beta_vector": {
    "id": "beta_vector",
    "label": {
      "id": "Vektor Koefisien",
      "en": "Coefficient Vector"
    },
    "unitClass": "vector",
    "valueKind": "array",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Koefisien utilitas parsial hasil estimasi konjoin.",
    "storage": {
      "precision": "float64",
      "serializeAs": "array"
    },
    "ui": {
      "widget": "vector_editor",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "x_vector": {
    "id": "x_vector",
    "label": {
      "id": "Vektor Tingkat Atribut",
      "en": "Attribute Level Vector"
    },
    "unitClass": "vector",
    "valueKind": "array",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Indikator tingkat atribut pada profil yang dievaluasi.",
    "storage": {
      "precision": "float64",
      "serializeAs": "array"
    },
    "ui": {
      "widget": "vector_editor",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "delta_u": {
    "id": "delta_u",
    "label": {
      "id": "Selisih Utilitas",
      "en": "Utility Difference"
    },
    "unitClass": "utils",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Selisih utilitas antara dua profil produk.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": "util"
    }
  },
  "beta_price": {
    "id": "beta_price",
    "label": {
      "id": "Koefisien Harga",
      "en": "Price Coefficient"
    },
    "unitClass": "utils",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": 0,
      "decimals": 5,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Koefisien harga hasil konjoin. Bernilai negatif pada model yang benar.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": "util"
    }
  },
  "w_vector": {
    "id": "w_vector",
    "label": {
      "id": "Vektor Bobot",
      "en": "Weight Vector"
    },
    "unitClass": "vector",
    "valueKind": "array",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Bobot kriteria. Penjumlahan seharusnya sama dengan satu.",
    "storage": {
      "precision": "float64",
      "serializeAs": "array"
    },
    "ui": {
      "widget": "vector_editor",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "r_vector": {
    "id": "r_vector",
    "label": {
      "id": "Vektor Skor",
      "en": "Rating Vector"
    },
    "unitClass": "vector",
    "valueKind": "array",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Skor alternatif pada setiap kriteria.",
    "storage": {
      "precision": "float64",
      "serializeAs": "array"
    },
    "ui": {
      "widget": "vector_editor",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "customer_importance": {
    "id": "customer_importance",
    "label": {
      "id": "Vektor Kepentingan Pelanggan",
      "en": "Customer Importance Vector"
    },
    "unitClass": "vector",
    "valueKind": "array",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Bobot kepentingan kebutuhan pelanggan pada matriks QFD.",
    "storage": {
      "precision": "float64",
      "serializeAs": "array"
    },
    "ui": {
      "widget": "vector_editor",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "relationship_matrix": {
    "id": "relationship_matrix",
    "label": {
      "id": "Matriks Relasi",
      "en": "Relationship Matrix"
    },
    "unitClass": "matrix",
    "valueKind": "array",
    "constraints": {
      "min": 0,
      "max": 9,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Kekuatan hubungan kebutuhan terhadap karakteristik teknis, lazimnya 0, 1, 3, atau 9.",
    "storage": {
      "precision": "float64",
      "serializeAs": "array"
    },
    "ui": {
      "widget": "vector_editor",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "rfm_r": {
    "id": "rfm_r",
    "label": {
      "id": "Skor Kebaruan",
      "en": "Recency Score"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 1,
      "max": 5,
      "decimals": 2,
      "allowZero": false,
      "nullable": true
    },
    "definition": "Skor kebaruan transaksi terakhir.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "rfm_f": {
    "id": "rfm_f",
    "label": {
      "id": "Skor Frekuensi",
      "en": "Frequency Score"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 1,
      "max": 5,
      "decimals": 2,
      "allowZero": false,
      "nullable": true
    },
    "definition": "Skor frekuensi transaksi.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "rfm_m": {
    "id": "rfm_m",
    "label": {
      "id": "Skor Moneter",
      "en": "Monetary Score"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 1,
      "max": 5,
      "decimals": 2,
      "allowZero": false,
      "nullable": true
    },
    "definition": "Skor nilai belanja kumulatif.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "rfm_wr": {
    "id": "rfm_wr",
    "label": {
      "id": "Bobot Kebaruan",
      "en": "Recency Weight"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 3,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Bobot untuk komponen kebaruan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "rfm_wf": {
    "id": "rfm_wf",
    "label": {
      "id": "Bobot Frekuensi",
      "en": "Frequency Weight"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 3,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Bobot untuk komponen frekuensi.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "rfm_wm": {
    "id": "rfm_wm",
    "label": {
      "id": "Bobot Moneter",
      "en": "Monetary Weight"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 3,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Bobot untuk komponen moneter.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "rice_reach": {
    "id": "rice_reach",
    "label": {
      "id": "Jangkauan RICE",
      "en": "RICE Reach"
    },
    "unitClass": "count",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah pengguna yang terdampak per periode.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "rice_impact": {
    "id": "rice_impact",
    "label": {
      "id": "Dampak RICE",
      "en": "RICE Impact"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 3,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Skor dampak, lazimnya 0,25 sampai 3.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "rice_confidence": {
    "id": "rice_confidence",
    "label": {
      "id": "Keyakinan RICE",
      "en": "RICE Confidence"
    },
    "unitClass": "percent",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 100,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Tingkat keyakinan atas estimasi, dalam persen.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": "%"
    }
  },
  "rice_effort": {
    "id": "rice_effort",
    "label": {
      "id": "Usaha RICE",
      "en": "RICE Effort"
    },
    "unitClass": "person_month",
    "valueKind": "number",
    "constraints": {
      "min": 0.1,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Usaha dalam satuan orang bulan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": "orang-bulan"
    }
  },
  "user_value": {
    "id": "user_value",
    "label": {
      "id": "Nilai bagi Pengguna",
      "en": "User Business Value"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Komponen nilai pada Cost of Delay.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "time_value": {
    "id": "time_value",
    "label": {
      "id": "Nilai Kritikalitas Waktu",
      "en": "Time Criticality"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Seberapa cepat nilai meluruh bila ditunda.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "risk_reduction": {
    "id": "risk_reduction",
    "label": {
      "id": "Pengurangan Risiko",
      "en": "Risk Reduction Value"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai pembukaan peluang dan pengurangan ketidakpastian.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "job_size": {
    "id": "job_size",
    "label": {
      "id": "Ukuran Pekerjaan",
      "en": "Job Size"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 0.1,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Estimasi ukuran relatif pekerjaan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "severity": {
    "id": "severity",
    "label": {
      "id": "Keparahan",
      "en": "Severity"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 1,
      "max": 10,
      "decimals": 0,
      "allowZero": false,
      "nullable": true
    },
    "definition": "Skor keparahan dampak kegagalan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "occurrence": {
    "id": "occurrence",
    "label": {
      "id": "Kekerapan",
      "en": "Occurrence"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 1,
      "max": 10,
      "decimals": 0,
      "allowZero": false,
      "nullable": true
    },
    "definition": "Skor kemungkinan terjadinya kegagalan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "detection": {
    "id": "detection",
    "label": {
      "id": "Deteksi",
      "en": "Detection"
    },
    "unitClass": "score",
    "valueKind": "number",
    "constraints": {
      "min": 1,
      "max": 10,
      "decimals": 0,
      "allowZero": false,
      "nullable": true
    },
    "definition": "Skor kesulitan mendeteksi. Nilai tinggi berarti sulit terdeteksi.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "delta_value": {
    "id": "delta_value",
    "label": {
      "id": "Selisih Nilai",
      "en": "Value Delta"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai yang hilang atau diperoleh akibat pergeseran waktu.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "delta_time": {
    "id": "delta_time",
    "label": {
      "id": "Selisih Waktu",
      "en": "Time Delta"
    },
    "unitClass": "period",
    "valueKind": "number",
    "constraints": {
      "min": 0.01,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Durasi penundaan dalam satuan periode yang konsisten.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "cash_flows": {
    "id": "cash_flows",
    "label": {
      "id": "Arus Kas",
      "en": "Cash Flow Series"
    },
    "unitClass": "vector",
    "valueKind": "array",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Deret arus kas bersih per periode, dimulai dari periode satu.",
    "storage": {
      "precision": "float64",
      "serializeAs": "array"
    },
    "ui": {
      "widget": "vector_editor",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "discount_rate": {
    "id": "discount_rate",
    "label": {
      "id": "Tingkat Diskonto",
      "en": "Discount Rate"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Biaya modal per periode dalam bentuk desimal.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "horizon_t": {
    "id": "horizon_t",
    "label": {
      "id": "Horizon Waktu",
      "en": "Time Horizon"
    },
    "unitClass": "period",
    "valueKind": "integer",
    "constraints": {
      "min": 1,
      "max": null,
      "decimals": 0,
      "allowZero": false,
      "nullable": true
    },
    "definition": "Jumlah periode yang diperhitungkan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "prob_vector": {
    "id": "prob_vector",
    "label": {
      "id": "Vektor Probabilitas",
      "en": "Probability Vector"
    },
    "unitClass": "vector",
    "valueKind": "array",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Probabilitas setiap keadaan. Penjumlahan harus sama dengan satu.",
    "storage": {
      "precision": "float64",
      "serializeAs": "array"
    },
    "ui": {
      "widget": "vector_editor",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "payoff_vector": {
    "id": "payoff_vector",
    "label": {
      "id": "Vektor Hasil",
      "en": "Payoff Vector"
    },
    "unitClass": "vector",
    "valueKind": "array",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai hasil pada setiap keadaan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "array"
    },
    "ui": {
      "widget": "vector_editor",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "ev_perfect": {
    "id": "ev_perfect",
    "label": {
      "id": "Nilai Harapan Informasi Sempurna",
      "en": "EV with Perfect Information"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai harapan bila keadaan diketahui sebelum memilih.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "ev_base": {
    "id": "ev_base",
    "label": {
      "id": "Nilai Harapan Dasar",
      "en": "EV of Base Decision"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai harapan keputusan terbaik tanpa informasi tambahan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "opt_s": {
    "id": "opt_s",
    "label": {
      "id": "Nilai Aset Mendasari",
      "en": "Underlying Asset Value"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai sekarang arus kas proyek bila diluncurkan sekarang.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "opt_x": {
    "id": "opt_x",
    "label": {
      "id": "Harga Pelaksanaan",
      "en": "Exercise Price"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Biaya investasi peluncuran penuh.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "opt_r": {
    "id": "opt_r",
    "label": {
      "id": "Suku Bunga Bebas Risiko",
      "en": "Risk-Free Rate"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Suku bunga bebas risiko per tahun.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "opt_t": {
    "id": "opt_t",
    "label": {
      "id": "Waktu Kedaluwarsa Opsi",
      "en": "Time to Expiry"
    },
    "unitClass": "period",
    "valueKind": "number",
    "constraints": {
      "min": 0.01,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Lama jendela keputusan dalam tahun.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "opt_sigma": {
    "id": "opt_sigma",
    "label": {
      "id": "Volatilitas",
      "en": "Volatility"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0.001,
      "max": null,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Simpangan baku pengembalian tahunan proyek.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "opportunities": {
    "id": "opportunities",
    "label": {
      "id": "Jumlah Peluang",
      "en": "Opportunities"
    },
    "unitClass": "count",
    "valueKind": "integer",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 0,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Jumlah peluang aktif dalam pipeline.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": ""
    }
  },
  "win_rate": {
    "id": "win_rate",
    "label": {
      "id": "Tingkat Kemenangan",
      "en": "Win Rate"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Proporsi peluang yang berakhir menang.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "cycle_length": {
    "id": "cycle_length",
    "label": {
      "id": "Panjang Siklus",
      "en": "Sales Cycle Length"
    },
    "unitClass": "period",
    "valueKind": "number",
    "constraints": {
      "min": 0.01,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Rata rata durasi dari peluang dibuka sampai tertutup, dalam hari.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "forecast": {
    "id": "forecast",
    "label": {
      "id": "Nilai Prakiraan",
      "en": "Forecast Value"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai yang diperkirakan sebelum periode berjalan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "actual": {
    "id": "actual",
    "label": {
      "id": "Nilai Aktual",
      "en": "Actual Value"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Nilai yang benar benar terealisasi.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "invites_per_user": {
    "id": "invites_per_user",
    "label": {
      "id": "Undangan per Pengguna",
      "en": "Invites per User"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Rata rata jumlah ajakan yang dikirim satu pengguna.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "invite_conversion": {
    "id": "invite_conversion",
    "label": {
      "id": "Konversi Undangan",
      "en": "Invite Conversion Rate"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Proporsi undangan yang berubah menjadi pengguna aktif.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "aov": {
    "id": "aov",
    "label": {
      "id": "Nilai Pesanan Rata-rata",
      "en": "Average Order Value"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus AOV yang menjadi masukan bagi CLV dan lainnya.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "arpu": {
    "id": "arpu",
    "label": {
      "id": "Pendapatan Rata-rata per Pengguna",
      "en": "Average Revenue per User"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus ARPU yang menjadi masukan bagi MRR, CLV sederhana, TAM, dan Payback.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "purchase_frequency": {
    "id": "purchase_frequency",
    "label": {
      "id": "Frekuensi Pembelian",
      "en": "Purchase Frequency"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 3,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus frekuensi pembelian yang menjadi masukan CLV.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "gross_margin": {
    "id": "gross_margin",
    "label": {
      "id": "Marjin Kotor",
      "en": "Gross Margin"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus marjin kotor dalam bentuk desimal.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "churn_rate": {
    "id": "churn_rate",
    "label": {
      "id": "Tingkat Churn",
      "en": "Churn Rate"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus churn yang menjadi masukan CLV sederhana.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "retention_rate": {
    "id": "retention_rate",
    "label": {
      "id": "Tingkat Retensi",
      "en": "Retention Rate"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus retensi yang menjadi masukan CLV berhorizon.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "clv": {
    "id": "clv",
    "label": {
      "id": "Nilai Seumur Hidup Pelanggan",
      "en": "Customer Lifetime Value"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus CLV yang menjadi masukan rasio LTV terhadap CAC.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "cac": {
    "id": "cac",
    "label": {
      "id": "Biaya Akuisisi Pelanggan",
      "en": "Customer Acquisition Cost"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus CAC yang menjadi masukan rasio LTV terhadap CAC dan Payback.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "tam": {
    "id": "tam",
    "label": {
      "id": "Pasar Total",
      "en": "Total Addressable Market"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus TAM yang menjadi masukan SAM.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "sam": {
    "id": "sam",
    "label": {
      "id": "Pasar Terlayani",
      "en": "Serviceable Available Market"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus SAM yang menjadi masukan SOM.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "mrr": {
    "id": "mrr",
    "label": {
      "id": "Pendapatan Berulang Bulanan",
      "en": "Monthly Recurring Revenue"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus MRR yang menjadi masukan ARR.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "conversion_rate": {
    "id": "conversion_rate",
    "label": {
      "id": "Tingkat Konversi",
      "en": "Conversion Rate"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 4,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus tingkat konversi.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "ctr_out": {
    "id": "ctr_out",
    "label": {
      "id": "Tingkat Klik Tayang",
      "en": "Click-Through Rate"
    },
    "unitClass": "ratio",
    "valueKind": "number",
    "constraints": {
      "min": 0,
      "max": 1,
      "decimals": 6,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus CTR.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": false,
      "suffix": ""
    }
  },
  "npv_out": {
    "id": "npv_out",
    "label": {
      "id": "Nilai Sekarang Bersih",
      "en": "Net Present Value"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus NPV.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  },
  "ev_out": {
    "id": "ev_out",
    "label": {
      "id": "Nilai Harapan",
      "en": "Expected Value"
    },
    "unitClass": "currency",
    "valueKind": "number",
    "constraints": {
      "min": null,
      "max": null,
      "decimals": 2,
      "allowZero": true,
      "nullable": true
    },
    "definition": "Keluaran rumus nilai harapan.",
    "storage": {
      "precision": "float64",
      "serializeAs": "number"
    },
    "ui": {
      "widget": "numeric_spinner",
      "stepHint": "auto",
      "thousandSeparator": true,
      "suffix": "Rp"
    }
  }
} as const satisfies Record<
  string,
  VariableDefinition
>;

export const variableIds: string[] = Object.keys(variableRegistry);
