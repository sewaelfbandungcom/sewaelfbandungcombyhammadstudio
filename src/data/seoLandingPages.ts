export interface LandingPageFaq {
  question: string;
  answer: string;
}

export interface PricingRow {
  unit: string;
  capacity: string;
  dalamKota: string;
  luarKota: string;
  notes?: string;
}

export interface LandingPageData {
  slug: string;
  category: "price" | "unit" | "route" | "service";
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  badge: string;
  quickAnswer: string;
  priceStarting: string;
  capacityRange: string;
  featuredImage: string;
  highlights: string[];
  whoIsItFor: string[];
  pricingTable: PricingRow[];
  vehicleSpecs?: { label: string; value: string }[];
  popularDestinations?: { name: string; desc: string; duration: string }[];
  included: string[];
  excluded: string[];
  bookingSop: { step: number; title: string; desc: string }[];
  faqs: LandingPageFaq[];
  relatedSlugs: string[];
  ctaMessage: string;
}

export const SEO_LANDING_PAGES: Record<string, LandingPageData> = {
  // ==========================================
  // 1. PRICE HUB
  // ==========================================
  "harga-sewa-elf-bandung": {
    slug: "harga-sewa-elf-bandung",
    category: "price",
    title: "Daftar Harga Sewa Elf Bandung 2026",
    metaTitle: "Harga Sewa Elf Bandung 2026 | Mulai Rp1,4 Juta / 12 Jam",
    metaDescription: "Daftar tarif resmi sewa Elf Bandung 2026. Isuzu Elf Long 19 seat Rp1,4 jt, Euro4 Rp1,7 jt, Elf Coaster Rp1,8 jt. Termasuk sopir profesional & BBM opsional.",
    h1: "Harga Sewa Elf Bandung Terbaru 2026",
    heroSubtitle: "Tarif resmi rental Isuzu Elf Long 19 seat, Elf Euro4, dan Elf Coaster untuk penjemputan Bandung Kota & carter luar kota.",
    badge: "Master Price List 2026",
    quickAnswer: "Tarif sewa Elf Bandung mulai dari Rp1.400.000 per 12 jam untuk unit Isuzu Elf Long 19 Seat (dalam kota Bandung). Untuk Elf Long Euro4 mulai Rp1.700.000, Elf Coaster mulai Rp1.800.000, dan Elf Coaster Euro4 mulai Rp2.000.000. Seluruh harga sudah termasuk unit prima dan jasa driver pariwisata profesional.",
    priceStarting: "Rp 1.400.000",
    capacityRange: "18 - 22 Penumpang",
    featuredImage: "/images/armada/elf-long.webp",
    highlights: [
      "Tarif transparan tanpa biaya siluman",
      "Termasuk driver pariwisata ramah & berpengalaman",
      "Durasi 12 jam (dalam kota) & 18 jam (luar kota)",
      "Pilihan paket Sewa Unit + Driver atau Paket All-In (BBM + Tol + Parkir)"
    ],
    whoIsItFor: [
      "Koordinator liburan keluarga besar",
      "Panitia study tour sekolah & kampus",
      "HRD & Event Organizer gathering kantor",
      "Rombongan ziarah dan majelis taklim"
    ],
    pricingTable: [
      { unit: "Isuzu Elf Long Standard", capacity: "18 - 19 Seat", dalamKota: "Rp 1.400.000", luarKota: "Rp 1.700.000", notes: "Best seller rombongan keluarga" },
      { unit: "Isuzu Elf Long Euro4", capacity: "19 - 21 Seat", dalamKota: "Rp 1.700.000", luarKota: "Rp 2.000.000", notes: "Mesin baru, kabin lebih senyap" },
      { unit: "Isuzu Elf Coaster", capacity: "17 - 18 Seat", dalamKota: "Rp 1.800.000", luarKota: "Rp 2.100.000", notes: "Bodi lebar, headroom lega" },
      { unit: "Isuzu Elf Coaster Euro4", capacity: "18 - 22 Seat", dalamKota: "Rp 2.000.000", luarKota: "Rp 2.300.000", notes: "Kapasitas muat maksimal" },
      { unit: "Toyota Hiace Commuter", capacity: "14 Seat", dalamKota: "Rp 1.200.000", luarKota: "Rp 1.500.000", notes: "Suspensi empuk nyaman" },
      { unit: "Toyota Hiace Premio Standard", capacity: "14 Seat", dalamKota: "Rp 1.500.000", luarKota: "Rp 2.000.000", notes: "Kabin modern semi-bonnet" },
      { unit: "Toyota Hiace Premio Luxury VIP", capacity: "8 - 10 Seat", dalamKota: "Rp 2.200.000", luarKota: "Rp 2.600.000", notes: "Captain seat kursi pijat" },
      { unit: "Medium Bus Jetbus 3+", capacity: "31 - 35 Seat", dalamKota: "Rp 2.500.000", luarKota: "Rp 3.000.000", notes: "Karaoke & bagasi luas" }
    ],
    vehicleSpecs: [
      { label: "Durasi Dalam Kota", value: "Maksimal 12 Jam (hari yang sama)" },
      { label: "Durasi Luar Kota", value: "Maksimal 18 Jam (hari yang sama)" },
      { label: "Overtime", value: "10% per jam dari harga sewa" },
      { label: "Titik Jemput", value: "Hotel, Stasiun KCIC / Hall, Bandara, Rumah se-Bandung" }
    ],
    included: [
      "Unit armada bersih, wangi, ber-AC dingin",
      "Jasa supir pariwisata profesional & berlisensi",
      "Full fasilitas audio karaoke & port USB charger",
      "Biaya sanitasi & perawatan armada"
    ],
    excluded: [
      "Bahan Bakar Minyak (BBM) — kecuali pilih Paket All-In",
      "Tol, Parkir, dan Tiket Masuk Wisata",
      "Uang Makan Driver (Rp70.000 - Rp100.000/hari)",
      "Penginapan Driver jika sewa menginap luar kota"
    ],
    bookingSop: [
      { step: 1, title: "Konsultasi Rute", desc: "Sampaikan tanggal sewa, rute tujuan, dan estimasi jumlah orang via WA." },
      { step: 2, title: "DP 30% Kunci Jadwal", desc: "Lakukan DP 30% untuk reservasi armada resmi agar unit tidak diambil orang lain." },
      { step: 3, title: "Pelunasan H-3", desc: "Selesaikan pelunasan sisa sewa maksimal 3 hari sebelum jadwal berangkat." },
      { step: 4, title: "Kontak Driver H-1", desc: "Data driver dan nomor telepon aktif kami bagikan H-1 sebelum penjemputan." }
    ],
    faqs: [
      { question: "Berapa harga sewa Elf di Bandung per hari?", answer: "Tarif sewa Elf Long 19 seat mulai dari Rp1.400.000 per 12 jam dalam kota Bandung. Untuk luar kota mulai Rp1.700.000 per hari." },
      { question: "Apakah ada paket sewa Elf All-In di Bandung?", answer: "Ada. Kami menyediakan paket All-In (Mobil + Driver + BBM + Tol + Parkir) sesuai rute spesifik Anda. Silakan hubungi admin via WhatsApp untuk kalkulasi tepatnya." },
      { question: "Apakah harga sewa naik saat High Season / Liburan?", answer: "Saat libur Lebaran, Natal, dan Tahun Baru dapat berlaku penyesuaian tarif high season. Disarankan booking 2-4 minggu sebelumnya." }
    ],
    relatedSlugs: ["sewa-elf-long-bandung", "sewa-elf-long-euro4-bandung", "sewa-hiace-bandung", "sewa-elf-bandung-lembang"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin konsultasi harga sewa Elf Bandung untuk rute perjalanan saya. Mohon info penawaran terbaiknya."
  },

  // ==========================================
  // 2. UNIT PAGES
  // ==========================================
  "sewa-elf-long-bandung": {
    slug: "sewa-elf-long-bandung",
    category: "unit",
    title: "Sewa Elf Long Bandung 18-19 Seat",
    metaTitle: "Sewa Elf Long Bandung 19 Seat Murah | Mulai Rp1,4 Juta",
    metaDescription: "Sewa Isuzu Elf Long 18-19 seat di Bandung mulai Rp1,4 jt/12 jam. Kursi reclining, AC ducting merata, audio karaoke. Siap wisata Lembang, Ciwidey & Luar Kota.",
    h1: "Sewa Elf Long Bandung 18–19 Seat",
    heroSubtitle: "Microbus legendaris paling hemat untuk rombongan keluarga besar, wisata, gathering kantor, dan study tour di Bandung.",
    badge: "Unit Terfavorit Rombongan",
    quickAnswer: "Sewa Elf Long Bandung berkapasitas 18–19 kursi dibanderol mulai Rp1.400.000 per 12 jam untuk area Bandung Kota, dan Rp1.700.000 per hari untuk luar kota. Dilengkapi fasilitas reclining seat, AC ducting per baris, audio karaoke, bagasi belakang lapang, serta pengemudi berpengalaman menaklukkan rute tanjakan pegunungan.",
    priceStarting: "Rp 1.400.000",
    capacityRange: "18 - 19 Kursi",
    featuredImage: "/images/armada/elf-long.webp",
    highlights: [
      "Kapasitas pas 18 hingga 19 orang penumpang",
      "Reclining seat empuk yang bisa disetel kemiringannya",
      "AC ducting dingin merata hingga baris kursi paling belakang",
      "Tangguh dan bertenaga di tanjakan Lembang, Ciwidey, dan Pangalengan"
    ],
    whoIsItFor: [
      "Rombongan keluarga besar yang ingin satu mobil",
      "Study tour kelas sekolah TK/SD/SMP/SMA",
      "Karyawan divisi untuk acara gathering / outbound",
      "Rombongan pengajian / ziarah wali"
    ],
    pricingTable: [
      { unit: "Elf Long Dalam Kota Bandung", capacity: "18 - 19 Seat", dalamKota: "Rp 1.400.000", luarKota: "-", notes: "Durasi s.d 12 Jam (Lembang, Ciwidey, Kota)" },
      { unit: "Elf Long Luar Kota (Jabar)", capacity: "18 - 19 Seat", dalamKota: "-", luarKota: "Rp 1.700.000", notes: "Garut, Subang, Purwakarta, Cirebon" },
      { unit: "Elf Long Luar Kota (Jateng / Jatim)", capacity: "18 - 19 Seat", dalamKota: "-", luarKota: "Rp 1.800.000 - Rp 2.000.000", notes: "Jogja, Solo, Semarang, Surabaya, Malang" }
    ],
    vehicleSpecs: [
      { label: "Tipe Kendaraan", value: "Isuzu Elf NQR / NLR Microbus Long" },
      { label: "Jumlah Kursi", value: "18 - 19 Kursi Penumpang + 1 Driver" },
      { label: "Konfigurasi Kursi", value: "3 - 3 - 3 - 3 - 4 / Formasi Standar Pariwisata" },
      { label: "Fitur Kenyamanan", value: "AC Ducting, Reclining Seats, Android TV, Karaoke, USB Charger" },
      { label: "Kapasitas Bagasi", value: "Muat 10-15 tas ransel & koper medium" }
    ],
    included: ["Unit Isuzu Elf Long", "Driver Pariwisata Berpengalaman", "Audio Karaoke & USB Port", "Sanitasi Armada"],
    excluded: ["BBM, Tol & Parkir", "Tiket Wisata", "Uang Makan Driver"],
    bookingSop: [
      { step: 1, title: "Kirim Jadwal", desc: "Hubungi WA 0812-1480-2420 dengan info tanggal & rute." },
      { step: 2, title: "DP 30%", desc: "Transfer uang muka 30% untuk kunci unit Elf Long." },
      { step: 3, title: "Pelunasan H-3", desc: "Lakukan pelunasan H-3 sebelum jadwal perjalanan." },
      { step: 4, title: "Driver Siap H-1", desc: "Driver mengontak H-1 dan menjemput tepat waktu di lokasi." }
    ],
    faqs: [
      { question: "Elf Long muat berapa orang?", answer: "Isuzu Elf Long standar memiliki kapasitas 18 hingga 19 orang penumpang dewasa plus 1 kursi pengemudi di depan." },
      { question: "Berapa biaya sewa Elf Long ke Lembang atau Ciwidey?", answer: "Untuk rute wisata Lembang atau Ciwidey masuk kategori Dalam Kota Bandung dengan tarif mulai Rp1.400.000 per 12 jam (unit + sopir)." },
      { question: "Apakah kursi Elf Long bisa direbahkan?", answer: "Ya, seluruh kursi di unit Elf Long kami merupakan Reclining Seat yang dapat direbahkan untuk kenyamanan istirahat selama di perjalanan." }
    ],
    relatedSlugs: ["sewa-elf-long-euro4-bandung", "sewa-elf-coaster-bandung", "sewa-elf-bandung-lembang", "sewa-elf-bandung-ciwidey"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa unit Isuzu Elf Long (18-19 Seat). Mohon info ketersediaan armada dan penawarannya."
  },

  "sewa-elf-long-euro4-bandung": {
    slug: "sewa-elf-long-euro4-bandung",
    category: "unit",
    title: "Sewa Elf Long Euro4 Bandung 19-21 Seat",
    metaTitle: "Sewa Elf Long Euro4 Bandung 21 Seat | Unit Anyar Mulai Rp1,7 Jt",
    metaDescription: "Rental Elf Long Euro4 terbaru di Bandung kapasitas 19-21 seat. Mesin halus ramah lingkungan, kabin senyap, AC dingin. Mulai Rp1,7 juta/hari.",
    h1: "Sewa Elf Long Euro4 Bandung 19–21 Seat",
    heroSubtitle: "Generasi terbaru Isuzu Elf Euro4 dengan performa mesin prima, kabin modern ekstra senyap, dan kapasitas hingga 21 kursi.",
    badge: "Unit Baru Euro4 Prima",
    quickAnswer: "Sewa Elf Long Euro4 Bandung berkapasitas 19–21 penumpang dibanderol mulai Rp1.700.000 per 12 jam (dalam kota) dan Rp2.000.000 per hari (luar kota). Mengusung mesin diesel Common Rail Euro4 yang ramah lingkungan, minim getaran, kabin lebih senyap, serta interior mewah standar pariwisata eksekutif.",
    priceStarting: "Rp 1.700.000",
    capacityRange: "19 - 21 Kursi",
    featuredImage: "/images/armada/elf-long-euro4.webp",
    highlights: [
      "Mesin teknologi Euro4 Common Rail terbaru, halus & bertenaga",
      "Kapasitas ekstra lega hingga 21 tempat duduk",
      "Kabin lebih kedap suara, wangi, dan bebas bau asap solar",
      "Suspensi stabil untuk perjalanan jarak jauh antar provinsi"
    ],
    whoIsItFor: [
      "Rombongan 19–21 orang yang ingin satu unit kendaraan",
      "Kunjungan kerja instansi pemerintah & perusahaan BUMN",
      "Perjalanan dinas & study tour luar kota jarak jauh",
      "Wisatawan yang memprioritaskan armada keluaran tahun muda"
    ],
    pricingTable: [
      { unit: "Elf Long Euro4 Bandung Kota", capacity: "19 - 21 Seat", dalamKota: "Rp 1.700.000", luarKota: "-", notes: "Lembang, Ciwidey, Pangalengan (12 Jam)" },
      { unit: "Elf Long Euro4 Luar Kota Dekat", capacity: "19 - 21 Seat", dalamKota: "-", luarKota: "Rp 2.000.000", notes: "Jakarta, Bogor, Cirebon, Pangandaran" },
      { unit: "Elf Long Euro4 Luar Kota Jauh", capacity: "19 - 21 Seat", dalamKota: "-", luarKota: "Rp 2.200.000", notes: "Yogyakarta, Solo, Semarang, Surabaya" }
    ],
    vehicleSpecs: [
      { label: "Tipe Mesin", value: "Isuzu 4JJ1-TC Euro4 Common Rail Turbo Intercooler" },
      { label: "Kapasitas Kursi", value: "19 - 21 Seat Reclining" },
      { label: "Fasilitas Audio", value: "Android Smart TV + Dual Wireless Microphone Karaoke" },
      { label: "Sistem Pendingin", value: "AC Double Blower Ducting Louver Individual" }
    ],
    included: ["Unit Baru Isuzu Elf Euro4", "Driver Pariwisata Berpengalaman", "Full Entertainment System", "Sanitasi & Kebersihan"],
    excluded: ["BBM, Tol, Parkir", "Tiket Objek Wisata", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Pilih Unit Euro4", desc: "Sebutkan kebutuhan Elf Long Euro4 saat chat WA admin." },
      { step: 2, title: "Kunci DP 30%", desc: "Amankan jadwal keberangkatan dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Selesaikan sisa pembayaran H-3 sebelum trip." },
      { step: 4, title: "Penjemputan Tepat Waktu", desc: "Driver mengontak H-1 dan standby di titik jemput." }
    ],
    faqs: [
      { question: "Apa keunggulan Elf Euro4 dibanding Elf Long biasa?", answer: "Elf Euro4 menggunakan mesin common rail terbaru yang lebih senyap, minim getaran, tidak bau solar, serta memiliki kapasitas hingga 21 seat dengan interior tahun muda." },
      { question: "Apakah Elf Euro4 kuat menanjak ke Kawah Putih / Tangkuban Perahu?", answer: "Sangat bertenaga. Torsi mesin Euro4 Isuzu dirancang khusus untuk medan menanjak pegunungan di Jawa Barat dengan muatan penuh." }
    ],
    relatedSlugs: ["sewa-elf-long-bandung", "sewa-elf-coaster-euro4-bandung", "sewa-hiace-premio-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin booking unit Isuzu Elf Long Euro4 (21 Seat). Mohon cek ketersediaan tanggalnya."
  },

  "sewa-elf-coaster-bandung": {
    slug: "sewa-elf-coaster-bandung",
    category: "unit",
    title: "Sewa Elf Coaster Bandung 17-18 Seat",
    metaTitle: "Sewa Elf Coaster Bandung Murah | Bodi Lebar Mulai Rp1,8 Juta",
    metaDescription: "Sewa Isuzu Elf Coaster di Bandung kapasitas 17-18 seat. Bodi lebih lebar, lorong tengah luas, headroom tinggi. Nyaman untuk wisata rombongan.",
    h1: "Sewa Elf Coaster Bandung 17–18 Seat",
    heroSubtitle: "Pilihan microbus bodi lebar karoseri Coaster dengan lorong kabin lapang dan plafon tinggi untuk mobilitas rombongan yang leluasa.",
    badge: "Bodi Lebar & Nyaman",
    quickAnswer: "Sewa Elf Coaster Bandung berkapasitas 17–18 tempat duduk bertarif mulai Rp1.800.000 per 12 jam dalam kota Bandung dan Rp2.100.000 untuk luar kota. Keunggulan bodi Coaster adalah dimensi kabin yang lebih lebar, jarak antarkursi yang lega, dan lorong tengah leluasa yang memudahkan pergerakan penumpang di dalam kendaraan.",
    priceStarting: "Rp 1.800.000",
    capacityRange: "17 - 18 Kursi",
    featuredImage: "/images/armada/elf-coaster.webp",
    highlights: [
      "Bodi model Coaster dengan ruang kepala (headroom) lebih tinggi",
      "Lorong tengah (aisle) lebar memudahkan jalan menuju kursi belakang",
      "Jarak kaki (legroom) lebih lega dibanding microbus standar",
      "Suspensi lembut berstandar pariwisata"
    ],
    whoIsItFor: [
      "Rombongan lansia atau keluarga besar yang butuh akses gerak mudah",
      "Tamu instansi / dinas luar kota yang butuh kenyamanan ekstra",
      "Wisatawan rombongan yang membawa banyak perlengkapan"
    ],
    pricingTable: [
      { unit: "Elf Coaster Dalam Kota Bandung", capacity: "17 - 18 Seat", dalamKota: "Rp 1.800.000", luarKota: "-", notes: "12 Jam pemakaian" },
      { unit: "Elf Coaster Luar Kota Jawa Barat", capacity: "17 - 18 Seat", dalamKota: "-", luarKota: "Rp 2.100.000", notes: "Garut, Pangandaran, Cirebon" },
      { unit: "Elf Coaster Carter Luar Provinsi", capacity: "17 - 18 Seat", dalamKota: "-", luarKota: "Rp 2.300.000", notes: "Jateng, DIY, Jatim" }
    ],
    included: ["Unit Elf Coaster", "Driver Berpengalaman", "AC Ducting", "Karaoke Audio"],
    excluded: ["BBM, Tol, Parkir", "Tiket Wisata", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Kontak Admin", desc: "Hubungi WhatsApp untuk memastikan jadwal Elf Coaster." },
      { step: 2, title: "Booking DP 30%", desc: "Lakukan pembayaran DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan sisa sewa di H-3." },
      { step: 4, title: "Berangkat Nyaman", desc: "Driver mengontak H-1 dan menjemput tepat waktu." }
    ],
    faqs: [
      { question: "Apa bedanya Elf Long dan Elf Coaster?", answer: "Elf Coaster memiliki bodi yang dirancang lebih lebar dengan plafon lebih tinggi dan lorong tengah luas. Sangat cocok bagi rombongan yang menginginkan ruang gerak leluasa di dalam mobil." },
      { question: "Berapa kapasitas kursi Elf Coaster?", answer: "Kapasitas Elf Coaster berkisar antara 17 hingga 18 kursi penumpang." }
    ],
    relatedSlugs: ["sewa-elf-coaster-euro4-bandung", "sewa-elf-long-bandung", "sewa-hiace-premio-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya tertarik sewa Isuzu Elf Coaster (17-18 Seat). Mohon info jadwal dan harga terbaik."
  },

  "sewa-elf-coaster-euro4-bandung": {
    slug: "sewa-elf-coaster-euro4-bandung",
    category: "unit",
    title: "Sewa Elf Coaster Euro4 Bandung 18-22 Seat",
    metaTitle: "Sewa Elf Coaster Euro4 Bandung 22 Seat | Mulai Rp2,0 Juta",
    metaDescription: "Rental Elf Coaster Euro4 Bandung kapasitas 18-22 seat. Kabin jumbo, mesin Euro4 terbaru, interior mewah. Pilihan utama rombongan 20+ orang.",
    h1: "Sewa Elf Coaster Euro4 Bandung 18–22 Seat",
    heroSubtitle: "Kombinasi kapasitas maksimal 22 kursi dengan ketangguhan mesin Euro4 dan bodi karoseri Coaster premium.",
    badge: "Kapasitas Maksimal 22 Seat",
    quickAnswer: "Sewa Elf Coaster Euro4 Bandung berkapasitas 18–22 kursi bertarif mulai Rp2.000.000 per 12 jam dalam kota dan Rp2.300.000 per hari luar kota. Menjadi pilihan ideal bagi rombongan di atas 20 orang yang menginginkan kenyamanan sekelas bus medium namun tetap lincah menjangkau lokasi wisata yang sempit.",
    priceStarting: "Rp 2.000.000",
    capacityRange: "18 - 22 Kursi",
    featuredImage: "/images/armada/elf-coaster-euro4.webp",
    highlights: [
      "Kapasitas muat maksimal hingga 22 penumpang",
      "Kabin ekstra lega dengan AC ducting individual",
      "Mesin Euro4 tangguh, ramah lingkungan dan bertenaga",
      "Alternatif hemat sebelum memutuskan menyewa Medium Bus"
    ],
    whoIsItFor: [
      "Rombongan 20–22 orang yang ingin berhemat tanpa sewa bus besar",
      "Study tour kelas & rombongan guru sekolah",
      "Acara hajatan, besan nikahan, dan ziarah rombongan"
    ],
    pricingTable: [
      { unit: "Elf Coaster Euro4 Dalam Kota", capacity: "18 - 22 Seat", dalamKota: "Rp 2.000.000", luarKota: "-", notes: "12 Jam Bandung Area" },
      { unit: "Elf Coaster Euro4 Luar Kota", capacity: "18 - 22 Seat", dalamKota: "-", luarKota: "Rp 2.300.000", notes: "Carter Jawa Barat & Luar Kota" }
    ],
    included: ["Unit Elf Coaster Euro4", "Driver Berpengalaman", "Full AC & Sound System", "Bagasi Rombongan"],
    excluded: ["BBM, Tol, Parkir", "Tiket Wisata", "Makan Sopir"],
    bookingSop: [
      { step: 1, title: "Cek Tanggal", desc: "Chat admin di WhatsApp untuk cek slot unit Coaster Euro4." },
      { step: 2, title: "DP 30%", desc: "Kunci unit dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan sisa pembayaran 3 hari sebelum trip." },
      { step: 4, title: "Penjemputan", desc: "Driver mengontak H-1 dan siap berangkat." }
    ],
    faqs: [
      { question: "Berapa orang maksimal muat di Elf Coaster Euro4?", answer: "Unit ini dapat menampung hingga 22 penumpang dengan konfigurasi kursi yang tetap nyaman untuk perjalanan wisata." },
      { question: "Apakah Elf Coaster Euro4 bisa masuk lokasi wisata Ciwidey dan Lembang?", answer: "Bisa sekali. Ukuran bodi microbus Coaster masih sangat lincah untuk bermanuver di jalanan wisata Lembang dan Ciwidey." }
    ],
    relatedSlugs: ["sewa-elf-coaster-bandung", "sewa-bus-pariwisata-bandung", "sewa-elf-long-euro4-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Elf Coaster Euro4 (22 Seat) untuk rombongan kami. Mohon infonya."
  },

  "sewa-hiace-bandung": {
    slug: "sewa-hiace-bandung",
    category: "unit",
    title: "Sewa Hiace Bandung (Commuter, Premio & Luxury)",
    metaTitle: "Sewa Hiace Bandung Murah | Commuter, Premio & Luxury VIP",
    metaDescription: "Layanan sewa Toyota Hiace Bandung lengkap: Hiace Commuter Rp1,2 jt, Premio Rp1,5 jt, Luxury Captain Seat Rp2,2 jt. Suspensi empuk, armada bersih.",
    h1: "Sewa Toyota Hiace Bandung Lengkap",
    heroSubtitle: "Pilihan armada Toyota Hiace Commuter 14 seat, Hiace Premio modern, dan Hiace Luxury VIP Captain Seat untuk kenyamanan premium di Bandung.",
    badge: "Pilihan Favorit Keluarga & VIP",
    quickAnswer: "Sewa Hiace Bandung tersedia mulai Rp1.200.000 per 12 jam untuk Toyota Hiace Commuter (14 seat), Rp1.500.000 untuk Hiace Premio Standard (14 seat), dan Rp2.200.000 untuk Hiace Premio Luxury VIP (8-10 captain seat). Toyota Hiace terkenal dengan suspensi empuk, kabin senyap, dan posisi duduk ergonomis yang sangat nyaman untuk perjalanan wisata maupun bisnis.",
    priceStarting: "Rp 1.200.000",
    capacityRange: "8 - 15 Kursi",
    featuredImage: "/images/armada/hiace-premio-std.webp",
    highlights: [
      "Suspensi Toyota teruji paling empuk di kelas van komersial",
      "Pilihan tipe lengkap dari Commuter, Premio, hingga Luxury VIP",
      "Kabin lapang dengan headroom tinggi & legroom lega",
      "Dilengkapi fasilitas Android TV, karaoke mic, dan USB port"
    ],
    whoIsItFor: [
      "Wisatawan keluarga kecil hingga menengah (8-14 orang)",
      "Tamu VIP, ekspatriat, pejabat, dan perjalanan dinas direksi",
      "Antar jemput tamu hotel berbintang dan bandara"
    ],
    pricingTable: [
      { unit: "Toyota Hiace Commuter", capacity: "14 - 15 Seat", dalamKota: "Rp 1.200.000", luarKota: "Rp 1.500.000", notes: "Best value suspensi empuk" },
      { unit: "Toyota Hiace Commuter Euro4", capacity: "14 - 15 Seat", dalamKota: "Rp 1.300.000", luarKota: "Rp 1.600.000", notes: "Unit anyar mesin Euro4" },
      { unit: "Toyota Hiace Premio Standard", capacity: "14 Seat", dalamKota: "Rp 1.500.000", luarKota: "Rp 2.000.000", notes: "Model modern moncong depan" },
      { unit: "Toyota Hiace Premio Luxury VIP", capacity: "8 - 10 Seat", dalamKota: "Rp 2.200.000", luarKota: "Rp 2.600.000", notes: "Captain seat kursi pijat" }
    ],
    included: ["Unit Toyota Hiace", "Driver Berpengalaman & Ramah", "Audio Karaoke & USB Port", "Sanitasi Armada Bersih"],
    excluded: ["BBM, Tol, Parkir", "Tiket Masuk Wisata", "Uang Makan Driver"],
    bookingSop: [
      { step: 1, title: "Pilih Tipe Hiace", desc: "Tentukan pilihan Commuter, Premio, atau Luxury." },
      { step: 2, title: "DP 30%", desc: "Bayar DP 30% untuk reservasi tanggal sewa." },
      { step: 3, title: "Pelunasan H-3", desc: "Lakukan pelunasan H-3 sebelum berangkat." },
      { step: 4, title: "Penjemputan", desc: "Driver mengontak H-1 dan menjemput tepat waktu." }
    ],
    faqs: [
      { question: "Apa beda Hiace Commuter dan Hiace Premio?", answer: "Hiace Premio memiliki desain moncong depan (semi-bonnet), ruang kaki lebih luas, posisi mesin di depan sehingga kabin lebih senyap dan dingin dibanding Hiace Commuter." },
      { question: "Berapa kapasitas penumpang Toyota Hiace?", answer: "Hiace Commuter dan Premio standar memuat 14 orang penumpang, sedangkan tipe Luxury VIP memuat 8 hingga 10 orang dengan kursi captain seat." }
    ],
    relatedSlugs: ["sewa-hiace-commuter-bandung", "sewa-hiace-premio-bandung", "sewa-hiace-luxury-bandung", "sewa-elf-long-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Toyota Hiace di Bandung. Mohon info pilihan tipe unit dan harga sewanya."
  },

  "sewa-hiace-commuter-bandung": {
    slug: "sewa-hiace-commuter-bandung",
    category: "unit",
    title: "Sewa Hiace Commuter Bandung 14 Seat",
    metaTitle: "Sewa Hiace Commuter Bandung 14 Seat Murah | Rp1,2 Juta / Hari",
    metaDescription: "Rental Toyota Hiace Commuter 14 seat di Bandung mulai Rp1,2 jt/12 jam. Suspensi empuk, kabin bersih, AC dingin. Cocok wisata keluarga & drop luar kota.",
    h1: "Sewa Hiace Commuter Bandung 14 Seat",
    heroSubtitle: "Pilihan rental mobil rombongan paling ekonomis dengan kenyamanan khas Toyota dan suspensi empuk untuk wisata Bandung.",
    badge: "Best Value 14 Seat",
    quickAnswer: "Sewa Hiace Commuter Bandung kapasitas 14–15 tempat duduk dibanderol mulai Rp1.200.000 per 12 jam (dalam kota) dan Rp1.500.000 per hari (luar kota). Menjadi pilihan favorit keluarga kecil karena suspensi per keong yang empuk, kabin lapang, dan konsumsi BBM yang efisien.",
    priceStarting: "Rp 1.200.000",
    capacityRange: "14 - 15 Kursi",
    featuredImage: "/images/armada/hiace-commuter.webp",
    highlights: [
      "Tarif paling ekonomis di kelas minibus Toyota Hiace",
      "Kapasitas 14 kursi reclining nyaman",
      "AC ducting dingin menyebar ke seluruh kabin",
      "Bermanuver lincah di jalur wisata perkotaan maupun pegunungan"
    ],
    whoIsItFor: [
      "Keluarga beranggotakan 8–14 orang",
      "Wisatawan domestik & mancanegara",
      "Antar jemput stasiun / bandara rombongan kecil"
    ],
    pricingTable: [
      { unit: "Hiace Commuter Bandung Kota", capacity: "14 Seat", dalamKota: "Rp 1.200.000", luarKota: "-", notes: "12 Jam pemakaian" },
      { unit: "Hiace Commuter Luar Kota", capacity: "14 Seat", dalamKota: "-", luarKota: "Rp 1.500.000", notes: "Jawa Barat & Luar Kota" }
    ],
    included: ["Unit Hiace Commuter", "Driver Berpengalaman", "AC Dingin & Audio", "Armada Bersih"],
    excluded: ["BBM, Tol, Parkir", "Tiket Wisata", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Booking WA", desc: "Chat admin untuk cek ketersediaan unit Hiace Commuter." },
      { step: 2, title: "DP 30%", desc: "Kunci armada dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan maksimal 3 hari sebelum keberangkatan." },
      { step: 4, title: "Berangkat", desc: "Driver mengontak H-1 dan menjemput tepat waktu." }
    ],
    faqs: [
      { question: "Berapa harga sewa Hiace Commuter di Bandung?", answer: "Tarif sewa Hiace Commuter mulai dari Rp1.200.000 per 12 jam untuk area Bandung Kota." },
      { question: "Apakah sewa Hiace Commuter sudah termasuk sopir?", answer: "Ya, seluruh unit sewa kami sudah termasuk supir profesional yang hafal rute wisata Bandung." }
    ],
    relatedSlugs: ["sewa-hiace-premio-bandung", "sewa-hiace-bandung", "sewa-elf-long-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Toyota Hiace Commuter 14 seat. Mohon info ketersediaannya."
  },

  "sewa-hiace-premio-bandung": {
    slug: "sewa-hiace-premio-bandung",
    category: "unit",
    title: "Sewa Hiace Premio Bandung 14 Seat Modern",
    metaTitle: "Sewa Hiace Premio Bandung 14 Seat | Unit Mewah Mulai Rp1,5 Jt",
    metaDescription: "Rental Toyota Hiace Premio terbaru di Bandung kapasitas 14 seat. Desain modern semi-bonnet, kabin senyap, legroom lapang. Mulai Rp1,5 jt/12 jam.",
    h1: "Sewa Toyota Hiace Premio Bandung 14 Seat",
    heroSubtitle: "Kenyamanan van eksekutif modern dengan desain semi-bonnet, kabin super hening, dan ruang kaki paling lapang di kelasnya.",
    badge: "Unit Mewah Modern",
    quickAnswer: "Sewa Toyota Hiace Premio Bandung berkapasitas 14 kursi dipatok mulai Rp1.500.000 per 12 jam (dalam kota) dan Rp2.000.000 per hari (luar kota). Hiace Premio menghadirkan moncong depan modern yang memindahkan posisi mesin ke depan bodi, sehingga kabin menjadi jauh lebih senyap, dingin, dan minim getaran.",
    priceStarting: "Rp 1.500.000",
    capacityRange: "14 Kursi",
    featuredImage: "/images/armada/hiace-premio-std.webp",
    highlights: [
      "Desain eksterior mewah ala van eropa (semi-bonnet)",
      "Kabin ekstra hening karena posisi mesin terisolasi di bagian moncong depan",
      "Ruang kaki (legroom) dan ruang kepala (headroom) sangat lega",
      "Fitur keselamatan canggih Vehicle Stability Control & ABS"
    ],
    whoIsItFor: [
      "Kunjungan dinas kantor, BUMN, dan korporat swasta",
      "Keluarga yang menginginkan kenyamanan perjalanan bintang lima",
      "Antar jemput tamu kenegaraan & seminar penting di Bandung"
    ],
    pricingTable: [
      { unit: "Hiace Premio Dalam Kota Bandung", capacity: "14 Seat", dalamKota: "Rp 1.500.000", luarKota: "-", notes: "12 Jam Lembang/Ciwidey/Kota" },
      { unit: "Hiace Premio Luar Kota Jawa Barat", capacity: "14 Seat", dalamKota: "-", luarKota: "Rp 2.000.000", notes: "Garut, Cirebon, Pangandaran" },
      { unit: "Hiace Premio Luar Kota Jauh", capacity: "14 Seat", dalamKota: "-", luarKota: "Rp 2.200.000", notes: "Yogyakarta, Solo, Semarang, Surabaya" }
    ],
    included: ["Unit Toyota Hiace Premio", "Driver Berpakaian Rapi & Profesional", "Full AC & Audio Karaoke", "Sanitasi Bersih"],
    excluded: ["BBM, Tol, Parkir", "Tiket Objek Wisata", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Konsultasi Premio", desc: "Hubungi admin via WhatsApp untuk cek unit Hiace Premio." },
      { step: 2, title: "DP 30%", desc: "Kunci tanggal dengan pembayaran uang muka 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Selesaikan sisa pembayaran H-3 sebelum trip." },
      { step: 4, title: "Berangkat", desc: "Driver mengontak H-1 dan siap menjemput Anda." }
    ],
    faqs: [
      { question: "Mengapa memilih Hiace Premio dibanding Hiace biasa?", answer: "Hiace Premio memiliki kabin yang lebih senyap, suspensi lebih empuk, legroom lebih panjang, dan tampilan eksterior yang jauh lebih mewah dan elegan." },
      { question: "Berapa kapasitas kursi Hiace Premio standard?", answer: "Kapasitas Hiace Premio standard adalah 14 kursi penumpang." }
    ],
    relatedSlugs: ["sewa-hiace-luxury-bandung", "sewa-hiace-commuter-bandung", "sewa-elf-long-euro4-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Toyota Hiace Premio (14 Seat) di Bandung. Mohon info penawaran harganya."
  },

  "sewa-hiace-luxury-bandung": {
    slug: "sewa-hiace-luxury-bandung",
    category: "unit",
    title: "Sewa Hiace Premio Luxury Bandung VIP Captain Seat",
    metaTitle: "Sewa Hiace Luxury Bandung VIP | Captain Seat Pijat Mulai Rp2,2 Jt",
    metaDescription: "Rental Hiace Premio Luxury VIP Captain Seat di Bandung. Kursi elektrik dengan fitur pijat, Smart TV Android, ambient lighting. Mulai Rp2,2 jt/hari.",
    h1: "Sewa Hiace Premio Luxury VIP Bandung",
    heroSubtitle: "Standar kemewahan tertinggi microbus VIP dengan konfigurasi Captain Seat elektrik, fitur massage/pijat, dan fasilitas first-class.",
    badge: "Super Luxury VIP",
    quickAnswer: "Sewa Hiace Premio Luxury Bandung berkapasitas 8–10 tempat duduk dibanderol mulai Rp2.200.000 per 12 jam (dalam kota) dan Rp2.600.000 per hari (luar kota). Dilengkapi kursi kulit Captain Seat elektrik dengan fitur pijat, Smart TV Android layar besar, sound system bioskop, port wireless charger, ambient LED light, dan meja lipat eksekutif.",
    priceStarting: "Rp 2.200.000",
    capacityRange: "8 - 10 Kursi (Captain Seat)",
    featuredImage: "/images/armada/hiace-premio-luxury.webp",
    highlights: [
      "Kursi Sultan Captain Seat kulit ergonomis dengan legrest dan fitur pijat elektrik",
      "Smart TV Android besar terhubung WiFi untuk streaming YouTube / Netflix",
      "Audio karaoke premium dengan wireless mic",
      "Ambient lighting bernuansa lounge hotel bintang lima"
    ],
    whoIsItFor: [
      "Tamu VIP, Direksi Perusahaan, dan Pejabat Pemerintahan",
      "Artis, Pengantin / Wedding Shuttle, dan Tamu Kehormatan",
      "Keluarga yang mendambakan kenyamanan perjalanan tanpa kompromi"
    ],
    pricingTable: [
      { unit: "Hiace Luxury Bandung Kota", capacity: "8 - 10 Seat VIP", dalamKota: "Rp 2.200.000", luarKota: "-", notes: "12 Jam pemakaian" },
      { unit: "Hiace Luxury Luar Kota", capacity: "8 - 10 Seat VIP", dalamKota: "-", luarKota: "Rp 2.600.000", notes: "Jakarta, Bandara Soetta, Jawa Barat" }
    ],
    included: ["Unit Hiace Premio Luxury", "Driver Eksekutif Berpakaian Rapi", "Full Entertainment & WiFi Onboard", "Air Mineral"],
    excluded: ["BBM, Tol, Parkir", "Tiket Wisata", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Reservasi Unit VIP", desc: "Hubungi admin via WhatsApp untuk cek ketersediaan unit Luxury." },
      { step: 2, title: "DP 30%", desc: "Lakukan DP 30% untuk mengunci armada VIP." },
      { step: 3, title: "Pelunasan H-3", desc: "Selesaikan pelunasan sisa biaya H-3 sebelum jadwal sewa." },
      { step: 4, title: "Layanan VIP", desc: "Driver eksekutif kami standby tepat waktu di lokasi." }
    ],
    faqs: [
      { question: "Hiace Luxury muat berapa orang?", answer: "Unit Hiace Luxury VIP kami didesain eksklusif untuk 8 hingga 10 orang penumpang dengan kursi captain seat terpisah." },
      { question: "Apakah ada fitur kursi pijat di Hiace Luxury?", answer: "Ya, unit Hiace Premio Luxury kami dilengkapi Captain Seat elektrik dengan pengaturan reclining, legrest, dan fitur pijat getar." }
    ],
    relatedSlugs: ["sewa-hiace-premio-bandung", "sewa-bus-pariwisata-bandung", "sewa-hiace-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Toyota Hiace Premio Luxury VIP Captain Seat. Mohon info ketersediaan armada."
  },

  "sewa-bus-pariwisata-bandung": {
    slug: "sewa-bus-pariwisata-bandung",
    category: "unit",
    title: "Sewa Bus Pariwisata Bandung (Medium & Big Bus)",
    metaTitle: "Sewa Bus Pariwisata Bandung | Medium & Big Bus Mulai Rp2,0 Juta",
    metaDescription: "Rental Bus Pariwisata Bandung: Medium Bus 31-39 seat mulai Rp2 jt, Big Bus SHD/HDD 47-59 seat mulai Rp3,2 jt. Karoseri Jetbus 3+ & Jetbus 5 terbaru.",
    h1: "Sewa Bus Pariwisata Bandung",
    heroSubtitle: "Pilihan armada bus pariwisata Medium Bus (31–39 seat) dan Big Bus (47–59 seat) karoseri Jetbus 3+ hingga Jetbus 5 untuk rombongan besar.",
    badge: "Solusi Rombongan Besar",
    quickAnswer: "Sewa Bus Pariwisata Bandung tersedia mulai Rp2.000.000 per 12 jam untuk Medium Bus (31 seat), Rp2.500.000 untuk Medium Bus Jetbus 3+ (35 seat), dan Rp3.200.000 untuk Big Bus HDD (47-59 seat). Seluruh unit bus dilengkapi fasilitas AC ducting dingin merata, TV LCD ganda, sound karaoke, bagasi tembus luas, serta kru pengemudi dan kenek profesional.",
    priceStarting: "Rp 2.000.000",
    capacityRange: "31 - 59 Kursi",
    featuredImage: "/images/armada/big-bus-hdd-premium.webp",
    highlights: [
      "Kapasitas besar 31, 35, 39, 47, 50, hingga 59 kursi penumpang",
      "Karoseri ternama Adiputro Jetbus 3+ hingga new Jetbus 5",
      "Fasilitas lengkap: Dual TV LED, Karaoke Set, Reclining Seats, Bagasi Jumbo",
      "Didampingi 2 kru (Driver berlisensi pariwisata & Co-Driver)"
    ],
    whoIsItFor: [
      "Study tour dan karya wisata sekolah SD, SMP, SMA, dan Universitas",
      "Company outing, gathering akbar, dan family day korporat",
      "Rombongan mudik bersama, ziarah wali, dan konvoi acara ormas"
    ],
    pricingTable: [
      { unit: "Medium Bus Standard", capacity: "29 - 31 Seat", dalamKota: "Rp 2.000.000", luarKota: "Rp 2.400.000", notes: "Ekonomis tour Bandung" },
      { unit: "Medium Bus Jetbus 3+", capacity: "31 - 35 Seat", dalamKota: "Rp 2.500.000", luarKota: "Rp 3.000.000", notes: "Best seller gathering" },
      { unit: "Medium Bus Long JB5", capacity: "35 - 39 Seat", dalamKota: "Rp 3.000.000", luarKota: "Rp 3.600.000", notes: "Unit anyar Jetbus 5" },
      { unit: "Big Bus Jetbus HDD", capacity: "47 - 59 Seat", dalamKota: "Rp 3.200.000", luarKota: "Rp 3.700.000", notes: "Double glass high deck" },
      { unit: "Big Bus SHD Jetbus 5 Flagship", capacity: "45 - 59 Seat", dalamKota: "Rp 4.000.000", luarKota: "Rp 4.500.000", notes: "Air suspension ultra nyaman" }
    ],
    included: ["Unit Bus Pariwisata", "Driver Utama & Kru Co-Driver", "Full AC & Audio Karaoke", "Asuransi Penumpang"],
    excluded: ["BBM, Tol, Parkir Bus & Retribusi", "Tiket Wisata", "Tips & Makan Kru Bus"],
    bookingSop: [
      { step: 1, title: "Konsultasi Bus", desc: "Sampaikan jumlah rombongan & rundown acara via WA." },
      { step: 2, title: "Kunci DP 30%", desc: "Lakukan DP 30% untuk mengunci jadwal bus." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan wajib diselesaikan maksimal H-3." },
      { step: 4, title: "Standby Tepat Waktu", desc: "Kru bus mengontak H-1 dan standby di lokasi kumpul." }
    ],
    faqs: [
      { question: "Berapa kapasitas kursi bus pariwisata yang tersedia?", answer: "Tersedia Medium Bus berkapasitas 31 hingga 39 seat, serta Big Bus berkapasitas 47 hingga 59 seat dengan formasi kursi 2-2 atau 2-3." },
      { question: "Apakah bus pariwisata bisa masuk area Lembang dan Ciwidey?", answer: "Bisa. Pengemudi bus kami sangat terlatih dan berpengalaman mengemudikan bus besar di jalur wisata Ciater, Lembang, maupun Ciwidey." }
    ],
    relatedSlugs: ["sewa-elf-coaster-euro4-bandung", "sewa-elf-long-bandung", "sewa-elf-gathering-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Bus Pariwisata di Bandung untuk rombongan kami. Mohon info ketersediaan unit."
  },

  // ==========================================
  // 3. ROUTE & DESTINATION PAGES
  // ==========================================
  "sewa-elf-bandung-lembang": {
    slug: "sewa-elf-bandung-lembang",
    category: "route",
    title: "Sewa Elf Bandung ke Lembang & Tangkuban Perahu",
    metaTitle: "Sewa Elf Bandung ke Lembang Murah | Tangkuban, Orchid, Floating",
    metaDescription: "Rental Elf Bandung ke Lembang mulai Rp1,4 jt/hari. Sopir hafal jalur bebas macet Tangkuban Perahu, Orchid Forest, Floating Market, Farmhouse. Booking via WA.",
    h1: "Sewa Elf Bandung ke Lembang",
    heroSubtitle: "Solusi transportasi rombongan wisata Lembang tanpa pusing menyetir di jalan menanjak dan macetnya akhir pekan.",
    badge: "Rute Wisata Terfavorit",
    quickAnswer: "Sewa Elf ke Lembang dibanderol mulai Rp1.400.000 per 12 jam untuk unit Isuzu Elf Long 19 seat. Driver kami berpengalaman menaklukkan tanjakan Lembang, Tangkuban Perahu, dan Cikole, serta menguasai jalur alternatif (jalan tikus) untuk menghindari kemacetan Jalan Setiabudi dan Lembang saat akhir pekan.",
    priceStarting: "Rp 1.400.000",
    capacityRange: "14 - 59 Kursi",
    featuredImage: "/images/armada/elf-long.webp",
    highlights: [
      "Bebas lelah menyetir di tengah kemacetan akhir pekan Lembang",
      "Sopir menguasai rute alternatif Dago Giri, Punclut, dan Kolonel Masturi",
      "Penjemputan fleksibel di Stasiun KCIC Tegalluar, Bandara, atau Hotel",
      "Bisa mampir ke berbagai spot kuliner dan oleh-oleh Lembang"
    ],
    whoIsItFor: [
      "Rombongan keluarga besar yang ingin piknik santai ke Lembang",
      "Kantor yang mengadakan outbound di Cikole / Grafika Lembang",
      "Study tour sekolah ke Floating Market, Farmhouse & Bosscha"
    ],
    popularDestinations: [
      { name: "Gunung Tangkuban Perahu & Kawah Ratu", desc: "Wisata kawah vulkanik ikonik Jawa Barat berhawa sejuk.", duration: "2-3 Jam" },
      { name: "Orchid Forest Cikole", desc: "Hutan pinus aesthetic dengan jembatan gantung & ribuan anggrek.", duration: "2-3 Jam" },
      { name: "Floating Market & Farmhouse Lembang", desc: "Wisata kuliner pasar terapung dan spot foto rumah hobbit.", duration: "2-3 Jam" },
      { name: "The Great Asia Africa & Dusun Bambu", desc: "Taman wisata tematik budaya dunia & eco-resort alami.", duration: "3-4 Jam" }
    ],
    pricingTable: [
      { unit: "Isuzu Elf Long (19 Seat)", capacity: "19 Orang", dalamKota: "Rp 1.400.000", luarKota: "-", notes: "Paket 12 Jam Tour Lembang" },
      { unit: "Toyota Hiace Premio (14 Seat)", capacity: "14 Orang", dalamKota: "Rp 1.500.000", luarKota: "-", notes: "Kabin modern super senyap" },
      { unit: "Medium Bus (31-35 Seat)", capacity: "35 Orang", dalamKota: "Rp 2.500.000", luarKota: "-", notes: "Ideal untuk rombongan sekolah/kantor" }
    ],
    included: ["Unit Kendaraan Pilihan", "Jasa Driver Berpengalaman", "AC Dingin & Audio Karaoke"],
    excluded: ["BBM, Tol, Parkir Tempat Wisata", "Tiket Masuk Objek Wisata", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Kirim Itinerary", desc: "Infokan spot wisata Lembang yang ingin dikunjungi via WA." },
      { step: 2, title: "Kunci DP 30%", desc: "Amankan armada dengan pembayaran DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Selesaikan sisa pembayaran 3 hari sebelum trip." },
      { step: 4, title: "Jemput di Lokasi", desc: "Driver tiba tepat waktu menjemput rombongan Anda." }
    ],
    faqs: [
      { question: "Berapa lama durasi sewa Elf ke Lembang?", answer: "Durasi sewa ke kawasan Lembang adalah 12 jam dalam 1 hari pada tanggal yang sama." },
      { question: "Apakah Elf bisa menjemput rombongan di Stasiun KCIC Tegalluar / Padalarang?", answer: "Bisa sekali. Driver kami siap standby menyambut rombongan Anda langsung di area kedatangan stasiun Whoosh." }
    ],
    relatedSlugs: ["sewa-elf-bandung-ciwidey", "sewa-elf-bandung-pangalengan", "sewa-elf-long-bandung", "sewa-hiace-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Elf ke Lembang untuk rombongan kami. Mohon info ketersediaan armada."
  },

  "sewa-elf-bandung-ciwidey": {
    slug: "sewa-elf-bandung-ciwidey",
    category: "route",
    title: "Sewa Elf Bandung ke Ciwidey & Kawah Putih",
    metaTitle: "Sewa Elf Bandung ke Ciwidey Murah | Kawah Putih & Ranca Upas",
    metaDescription: "Rental Elf Bandung ke Ciwidey mulai Rp1,4 jt/12 jam. Kunjungi Kawah Putih, Glamping Lakeside, Ranca Upas, kebun teh. Driver berpengalaman jalur pegunungan.",
    h1: "Sewa Elf Bandung ke Ciwidey",
    heroSubtitle: "Perjalanan wisata rombongan ke pesona alam Bandung Selatan (Kawah Putih, Situ Patenggang, Ranca Upas) dengan kendaraan tangguh & nyaman.",
    badge: "Wisata Alam Eksotis",
    quickAnswer: "Tarif sewa Elf ke Ciwidey mulai Rp1.400.000 per 12 jam (Isuzu Elf Long 19 Seat). Jalur Bandung Selatan menuju Ciwidey memiliki tanjakan dan kelokan tajam yang menuntut performa kendaraan prima dan supir yang terbiasa melintasi jalur pegunungan Bandung Selatan.",
    priceStarting: "Rp 1.400.000",
    capacityRange: "14 - 59 Kursi",
    featuredImage: "/images/armada/elf-long-euro4.webp",
    highlights: [
      "Armada tangguh dengan pengereman dan tenaga prima di tanjakan Ciwidey",
      "Kabin hangat dan AC sejuk dengan kursi reclining empuk",
      "Sopir ramah yang memahami waktu terbaik mengunjungi Kawah Putih bebas kabut",
      "Bisa antar langsung ke glamping, kebun teh, dan penangkaran rusa"
    ],
    whoIsItFor: [
      "Keluarga yang ingin liburan sejuk di kebun teh Ciwidey",
      "Komunitas fotografi dan pre-wedding ke Kawah Putih",
      "Rombongan camping dan outbound di Ranca Upas"
    ],
    popularDestinations: [
      { name: "Kawah Putih Gunung Patuha", desc: "Danau kawah vulkanik berwarna putih kehijauan yang magis.", duration: "2 Jam" },
      { name: "Ranca Upas Deer Sanctuary", desc: "Penangkaran rusa di tengah padang rumput & pemandian air panas.", duration: "2-3 Jam" },
      { name: "Situ Patenggang & Glamping Lakeside", desc: "Danau alami dengan pemandangan kapal pinisi raksasa.", duration: "2-3 Jam" },
      { name: "Kawah Rengganis & Suspension Bridge", desc: "Jembatan gantung terpanjang di Asia Tenggara & kawah lumpur.", duration: "2-3 Jam" }
    ],
    pricingTable: [
      { unit: "Isuzu Elf Long (19 Seat)", capacity: "19 Orang", dalamKota: "Rp 1.400.000", luarKota: "-", notes: "Paket 12 Jam Tour Ciwidey" },
      { unit: "Toyota Hiace Commuter (14 Seat)", capacity: "14 Orang", dalamKota: "Rp 1.200.000", luarKota: "-", notes: "Suspensi empuk" },
      { unit: "Medium Bus (31-35 Seat)", capacity: "35 Orang", dalamKota: "Rp 2.500.000", luarKota: "-", notes: "Untuk outing rombongan besar" }
    ],
    included: ["Unit Armada Pilihan", "Driver Berpengalaman Jalur Ciwidey", "Audio Karaoke"],
    excluded: ["BBM, Tol Soroja, Parkir", "Tiket Masuk Kawah Putih / Ontang-Anting", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Pilih Destinasi", desc: "Konsultasikan titik kumpul dan tujuan Ciwidey via WA." },
      { step: 2, title: "Bayar DP 30%", desc: "Kunci armada dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan diselesaikan H-3." },
      { step: 4, title: "Jemput Pagi Hari", desc: "Driver menjemput pagi hari agar tiba di Ciwidey saat cuaca cerah." }
    ],
    faqs: [
      { question: "Berapa jam perjalanan dari Bandung kota ke Ciwidey?", answer: "Melalui Tol Soroja (Soreang-Pasirkoja), perjalanan memakan waktu sekitar 1,5 hingga 2 jam dalam kondisi lalu lintas normal." },
      { question: "Apakah harga sewa Elf ke Ciwidey sudah termasuk tiket ontang-anting Kawah Putih?", answer: "Belum. Tiket masuk objek wisata dan ontang-anting dibayarkan langsung di lokasi oleh penyewa." }
    ],
    relatedSlugs: ["sewa-elf-bandung-pangalengan", "sewa-elf-bandung-lembang", "sewa-elf-long-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Elf ke Ciwidey. Mohon info harga paket dan ketersediaannya."
  },

  "sewa-elf-bandung-pangalengan": {
    slug: "sewa-elf-bandung-pangalengan",
    category: "route",
    title: "Sewa Elf Bandung ke Pangalengan & Rafting",
    metaTitle: "Sewa Elf Bandung ke Pangalengan Murah | Rafting, Nimo, Cukul",
    metaDescription: "Rental Elf Bandung ke Pangalengan mulai Rp1,4 jt/hari. Cocok untuk Rafting Sungai Palayangan, Sunrise Cukul, Nimo Highland, Wayang Windu. Supir handal.",
    h1: "Sewa Elf Bandung ke Pangalengan",
    heroSubtitle: "Transportasi rombongan ke dataran tinggi teh Pangalengan, petualangan rafting arung jeram, dan keindahan matahari terbit Cukul.",
    badge: "Rute Petualangan & Alam",
    quickAnswer: "Tarif rental Elf Bandung ke Pangalengan mulai Rp1.400.000 per 12 jam untuk unit Isuzu Elf Long 19 seat. Pangalengan terkenal dengan wisata Sunrise Point Cukul, jembatan kaca Nimo Highland, Wayang Windu Panenjoan, serta aktivitas arung jeram (rafting) di Sungai Palayangan.",
    priceStarting: "Rp 1.400.000",
    capacityRange: "14 - 59 Kursi",
    featuredImage: "/images/armada/elf-long.webp",
    highlights: [
      "Driver berpengalaman menjangkau spot sunrise subuh di Cukul",
      "Bagasi luas untuk menampung pakaian ganti basah pasca rafting",
      "Kenyamanan kabin terjaga melintasi perkebunan teh Malabar yang menyejukkan",
      "Bisa diatur paket multi-tujuan: Rafting + Nimo Highland + Kuliner Susu"
    ],
    whoIsItFor: [
      "Rombongan gathering kantor yang ingin agenda rafting / paintball",
      "Komunitas anak muda pecinta alam & pemburu sunrise",
      "Keluarga besar yang ingin piknik sejuk di tepi Danau Cileunca"
    ],
    popularDestinations: [
      { name: "Nimo Highland (Nini Mountain)", desc: "Jembatan kaca melingkar 360 derajat di atas hamparan kebun teh.", duration: "2-3 Jam" },
      { name: "Rafting Sungai Palayangan Situ Cileunca", desc: "Arung jeram seru grade 3 yang memacu adrenalin rombongan.", duration: "3 Jam" },
      { name: "Sunrise Point Cukul & Rumah Pengabdi Setan", desc: "Spot matahari terbit paling spektakuler di Bandung Selatan.", duration: "2 Jam" },
      { name: "Wayang Windu Panenjoan (WWP)", desc: "Skywalk kayu di tengah kabut dan kebun teh berangin sejuk.", duration: "2 Jam" }
    ],
    pricingTable: [
      { unit: "Isuzu Elf Long (19 Seat)", capacity: "19 Orang", dalamKota: "Rp 1.400.000", luarKota: "-", notes: "Paket 12 Jam Tour Pangalengan" },
      { unit: "Toyota Hiace Premio (14 Seat)", capacity: "14 Orang", dalamKota: "Rp 1.500.000", luarKota: "-", notes: "Kabin modern super nyaman" },
      { unit: "Medium Bus (31-35 Seat)", capacity: "35 Orang", dalamKota: "Rp 2.500.000", luarKota: "-", notes: "Favorit gathering kantor & outbound" }
    ],
    included: ["Unit Elf Terawat", "Driver Profesional", "AC Dingin & Audio"],
    excluded: ["BBM, Tol, Parkir", "Paket Tiket Rafting / Nimo Highland", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Atur Waktu Berangkat", desc: "Infokan jam penjemputan (misal subuh jam 03.30 jika ingin kejar sunrise)." },
      { step: 2, title: "DP 30%", desc: "Kunci tanggal perjalanan dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan dilakukan H-3 sebelum keberangkatan." },
      { step: 4, title: "Berangkat Seru", desc: "Driver menjemput tepat waktu di titik kumpul Anda." }
    ],
    faqs: [
      { question: "Apakah bisa dijemput jam 03.00 subuh untuk sunrise Cukul?", answer: "Bisa sekali. Kami melayani penjemputan dini hari untuk rombongan yang ingin mengejar matahari terbit di Sunrise Point Cukul Pangalengan." },
      { question: "Apakah jalan ke Pangalengan bisa dilalui Bus Medium?", answer: "Bisa. Jalur utama Pangalengan hingga Situ Cileunca dan Nimo Highland dapat dilalui Bus Medium 31-35 seat dengan aman." }
    ],
    relatedSlugs: ["sewa-elf-bandung-ciwidey", "sewa-elf-gathering-bandung", "sewa-elf-long-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Elf untuk trip ke Pangalengan / Rafting. Mohon info penawaran harganya."
  },

  "sewa-elf-bandung-garut": {
    slug: "sewa-elf-bandung-garut",
    category: "route",
    title: "Sewa Elf Bandung ke Garut (Darajat Pass & Cipanas)",
    metaTitle: "Sewa Elf Bandung ke Garut Murah | Darajat Pass & Cipanas",
    metaDescription: "Rental Elf Bandung ke Garut mulai Rp1,7 jt/hari. Wisata pemandian air panas Darajat Pass, Cipanas, Papandayan, dodol Garut. Supir handal jalur Nagreg.",
    h1: "Sewa Elf Bandung ke Garut",
    heroSubtitle: "Carter Elf dan Hiace dari Bandung ke kota Garut untuk wisata pemandian air panas, kawah Papandayan, dan belanja oleh-oleh khas.",
    badge: "Rute Luar Kota Favorit",
    quickAnswer: "Tarif sewa Elf Bandung ke Garut dibanderol mulai Rp1.700.000 per hari (Isuzu Elf Long 19 seat). Pengemudi kami sangat berpengalaman menembus jalur Nagreg, Kadungora, hingga tanjakan terjal Darajat Pass dengan aman dan nyaman.",
    priceStarting: "Rp 1.700.000",
    capacityRange: "14 - 59 Kursi",
    featuredImage: "/images/armada/elf-long-euro4.webp",
    highlights: [
      "Driver menguasai jalan alternatif saat Nagreg padat",
      "Kenyamanan maksimal untuk perjalanan keluarga dan lansia",
      "Durasi luar kota leluasa hingga 18 jam dalam sehari",
      "Bisa mampir ke pusat kerajinan kulit Sukaregang dan Dodol Garut"
    ],
    whoIsItFor: [
      "Rombongan keluarga besar yang ingin berendam air panas",
      "Acara arisan, pengajian, dan ziarah makam wali di Garut",
      "Pecinta alam yang ingin hiking ringan di Kawah Papandayan"
    ],
    pricingTable: [
      { unit: "Isuzu Elf Long (19 Seat)", capacity: "19 Orang", dalamKota: "-", luarKota: "Rp 1.700.000", notes: "1 Hari PP Garut (s.d 18 Jam)" },
      { unit: "Toyota Hiace Premio (14 Seat)", capacity: "14 Orang", dalamKota: "-", luarKota: "Rp 2.000.000", notes: "Kenyamanan eksekutif" },
      { unit: "Medium Bus (31-35 Seat)", capacity: "35 Orang", dalamKota: "-", luarKota: "Rp 3.000.000", notes: "Rombongan sekolah / instansi" }
    ],
    included: ["Unit Armada Pilihan", "Jasa Driver Berpengalaman", "Audio Karaoke"],
    excluded: ["BBM, Tol, Parkir", "Tiket Masuk Pemandian Air Panas / Wisata", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Rute Garut", desc: "Infokan destinasi spesifik (Darajat, Cipanas, dll) via WA." },
      { step: 2, title: "DP 30%", desc: "Kunci tanggal dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan di H-3." },
      { step: 4, title: "Berangkat", desc: "Driver menjemput di titik kumpul Bandung." }
    ],
    faqs: [
      { question: "Berapa lama perjalanan dari Bandung ke Garut?", answer: "Perjalanan dari Bandung ke Garut normalnya memakan waktu sekitar 2 hingga 2,5 jam melalui Cileunyi dan Nagreg." },
      { question: "Apakah bisa sewa Elf Bandung Garut menginap 2 hari?", answer: "Bisa sekali. Untuk paket 2 hari 1 malam, tarif dihitung harian dengan tambahan akomodasi/penginapan driver." }
    ],
    relatedSlugs: ["sewa-elf-bandung-pangandaran", "sewa-elf-long-bandung", "sewa-elf-luar-kota-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Elf dari Bandung ke Garut. Mohon info harga paketnya."
  },

  "sewa-elf-bandung-pangandaran": {
    slug: "sewa-elf-bandung-pangandaran",
    category: "route",
    title: "Sewa Elf Bandung ke Pangandaran & Green Canyon",
    metaTitle: "Sewa Elf Bandung ke Pangandaran | Wisata Pantai & Green Canyon",
    metaDescription: "Rental Elf Bandung ke Pangandaran mulai Rp1,8 jt/hari. Wisata Pantai Barat, Batu Hiu, Body Rafting Green Canyon. Driver handal perjalanan jarak jauh.",
    h1: "Sewa Elf Bandung ke Pangandaran",
    heroSubtitle: "Layanan rental Elf dan Hiace perjalanan wisata pantai Pangandaran, body rafting Green Canyon, dan seafood segar bersama rombongan.",
    badge: "Rute Wisata Pantai",
    quickAnswer: "Tarif sewa Elf Bandung ke Pangandaran dipatok mulai Rp1.800.000 hingga Rp2.000.000 per hari (minimal paket 2 hari 1 malam atau 3 hari 2 malam). Perjalanan melintasi jalur Tasikmalaya dan Ciamis membutuhkan armada prima dengan double blower AC dingin dan driver berpengalaman melahap rute jarak jauh.",
    priceStarting: "Rp 1.800.000",
    capacityRange: "14 - 59 Kursi",
    featuredImage: "/images/armada/elf-long-euro4.webp",
    highlights: [
      "Armada disiapkan khusus dengan cek fisik menyeluruh untuk perjalanan pantai jarak jauh",
      "Kabin lega menampung koper, perbekalan, dan oleh-oleh ikan asin jambal roti",
      "Sopir menguasai spot kuliner ikan bakar enak di Pantai Timur Pangandaran",
      "Bisa mampir ke Batu Karas, Batu Hiu, dan Green Canyon"
    ],
    whoIsItFor: [
      "Rombongan keluarga besar yang ingin liburan pantai tahunan",
      "Komunitas anak muda untuk body rafting Green Canyon",
      "Acara family gathering perusahaan dan dinas kantor"
    ],
    pricingTable: [
      { unit: "Isuzu Elf Long (19 Seat)", capacity: "19 Orang", dalamKota: "-", luarKota: "Rp 1.800.000 / Hari", notes: "Minimal sewa 2 Hari (2D1N)" },
      { unit: "Toyota Hiace Premio (14 Seat)", capacity: "14 Orang", dalamKota: "-", luarKota: "Rp 2.000.000 / Hari", notes: "Kenyamanan suspensi empuk" },
      { unit: "Medium Bus (31-35 Seat)", capacity: "35 Orang", dalamKota: "-", luarKota: "Rp 3.000.000 / Hari", notes: "Rombongan sekolah / instansi" }
    ],
    included: ["Unit Kendaraan Siap Luar Kota", "Jasa Pengemudi Berpengalaman", "Audio Karaoke"],
    excluded: ["BBM, Tol, Parkir & Tiket Masuk Objek", "Penginapan & Makan Driver", "Paket Body Rafting"],
    bookingSop: [
      { step: 1, title: "Tentukan Durasi", desc: "Pilih paket 2D1N atau 3D2N ke Pangandaran via WA." },
      { step: 2, title: "DP 30%", desc: "Kunci armada dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan di H-3." },
      { step: 4, title: "Berangkat Malam / Subuh", desc: "Berangkat malam/subuh agar tiba pagi di pantai." }
    ],
    faqs: [
      { question: "Berapa lama perjalanan dari Bandung ke Pangandaran naik Elf?", answer: "Waktu tempuh normal berkisar antara 5 hingga 6 jam perjalanan santai melalui jalur Tasikmalaya - Ciamis - Banjar - Pangandaran." },
      { question: "Apakah driver disediakan penginapan di Pangandaran?", answer: "Ya, untuk sewa menginap luar kota penyewa menyediakan penginapan sederhana untuk driver atau menggantinya dengan uang inap." }
    ],
    relatedSlugs: ["sewa-elf-bandung-garut", "sewa-elf-luar-kota-bandung", "sewa-bus-pariwisata-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin konsultasi sewa Elf ke Pangandaran. Mohon rincian penawaran paketnya."
  },

  "sewa-elf-bandung-jakarta": {
    slug: "sewa-elf-bandung-jakarta",
    category: "route",
    title: "Sewa Elf Bandung Jakarta & Drop Bandara Soetta",
    metaTitle: "Sewa Elf Bandung ke Jakarta | Drop Bandara Soetta & Halim Murah",
    metaDescription: "Carter Elf Bandung ke Jakarta & Drop Bandara Soekarno Hatta / Halim mulai Rp1,7 jt. Penjemputan tepat waktu 24 jam, langsung tol Cipularang / MBZ.",
    h1: "Sewa Elf Bandung ke Jakarta & Bandara Soetta",
    heroSubtitle: "Layanan carter satu arah (drop off) maupun pulang-pergi (PP) dari Bandung ke Jakarta, Bandara Soekarno-Hatta, Halim, dan sekitarnya.",
    badge: "Antar Jemput Bandara & Carter",
    quickAnswer: "Tarif carter Elf Bandung ke Jakarta atau Drop Bandara Soekarno-Hatta dibanderol mulai Rp1.700.000 (sekali jalan / drop-off) dan Rp2.000.000 (PP di hari yang sama). Penjemputan standby 24 jam di seluruh titik Bandung dengan rute langsung via Tol Cipularang dan Tol Layang MBZ.",
    priceStarting: "Rp 1.700.000",
    capacityRange: "14 - 59 Kursi",
    featuredImage: "/images/armada/hiace-premio-std.webp",
    highlights: [
      "Jaminan penjemputan tepat waktu untuk mengejar jadwal penerbangan internasional",
      "Bagasi luas muat koper-koper besar rombongan jamaah umroh / luar negeri",
      "Melayani drop-off satu arah maupun sewa harian PP di wilayah Jabodetabek",
      "Tersedia unit Hiace Premio Luxury untuk tamu ekspatriat & direksi"
    ],
    whoIsItFor: [
      "Rombongan keberangkatan / kepulangan Umroh & Haji",
      "Rombongan liburan keluarga yang terbang via Bandara Soetta",
      "Perjalanan dinas korporat, seminar, dan event pameran di Jakarta"
    ],
    pricingTable: [
      { unit: "Elf Long (19 Seat) Drop Soetta / Jakarta", capacity: "19 Orang", dalamKota: "-", luarKota: "Rp 1.700.000", notes: "Sekali Jalan (Drop Off)" },
      { unit: "Elf Long (19 Seat) PP Jakarta Hari Sama", capacity: "19 Orang", dalamKota: "-", luarKota: "Rp 2.000.000", notes: "Durasi s.d 18 Jam" },
      { unit: "Hiace Premio (14 Seat) Drop Soetta", capacity: "14 Orang", dalamKota: "-", luarKota: "Rp 2.000.000", notes: "Kabin ekstra nyaman" },
      { unit: "Hiace Luxury (8 Seat VIP) Drop Soetta", capacity: "8 Orang", dalamKota: "-", luarKota: "Rp 2.600.000", notes: "Captain seat eksekutif" }
    ],
    included: ["Unit Kendaraan", "Driver Berpengalaman Rute Tol Jakarta", "Audio & AC Dingin"],
    excluded: ["BBM, Tol Cipularang & MBZ, Parkir Bandara", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Infokan Jam Flight", desc: "Beritahukan jam penerbangan agar kami estimasikan jam jemput yang aman dari macet." },
      { step: 2, title: "DP 30%", desc: "Kunci armada dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan di H-3." },
      { step: 4, title: "Standby di Rumah", desc: "Driver tiba sebelum jam penjemputan di alamat Anda." }
    ],
    faqs: [
      { question: "Berapa jam estimasi perjalanan Bandung ke Bandara Soetta?", answer: "Dalam kondisi tol lancar, perjalanan memakan waktu sekitar 3 hingga 3,5 jam. Namun disarankan berangkat 5-6 jam sebelum jam keberangkatan pesawat untuk antisipasi kemacetan tol." },
      { question: "Apakah bisa jemput rombongan di Bandara Soetta lalu antar ke Bandung?", answer: "Bisa sekali. Driver kami akan standby di terminal kedatangan dengan name board rombongan Anda." }
    ],
    relatedSlugs: ["sewa-hiace-premio-bandung", "sewa-elf-long-bandung", "sewa-elf-luar-kota-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya butuh carter Elf / Hiace rute Bandung ke Jakarta / Bandara Soetta. Mohon info penawarannya."
  },

  "sewa-elf-stasiun-whoosh-tegalluar": {
    slug: "sewa-elf-stasiun-whoosh-tegalluar",
    category: "route",
    title: "Sewa Elf Stasiun Whoosh Tegalluar & Padalarang",
    metaTitle: "Sewa Elf Stasiun Whoosh Tegalluar & Padalarang | Shuttle Wisata",
    metaDescription: "Rental Elf antar jemput Stasiun Kereta Cepat Whoosh Tegalluar & Padalarang Bandung. Langsung lanjut wisata Lembang, Ciwidey, Hotel & City Tour.",
    h1: "Sewa Elf Stasiun Kereta Cepat Whoosh Tegalluar & Padalarang",
    heroSubtitle: "Layanan shuttle dan carter langsung dari stasiun Kereta Cepat Whoosh Jakarta-Bandung menuju hotel dan objek wisata se-Bandung Raya.",
    badge: "Koneksi Cepat KCIC Whoosh",
    quickAnswer: "Layanan sewa Elf penjemputan Stasiun Whoosh Tegalluar / Padalarang dibanderol mulai Rp1.400.000 per 12 jam (Isuzu Elf Long 19 seat). Begitu rombongan Anda turun dari kereta cepat, armada bersih dan supir kami sudah standby di area parkir stasiun untuk langsung mengantar ke Lembang, Ciwidey, atau hotel.",
    priceStarting: "Rp 1.400.000",
    capacityRange: "14 - 59 Kursi",
    featuredImage: "/images/armada/elf-long.webp",
    highlights: [
      "Driver standby tepat waktu sebelum kereta cepat Whoosh Anda tiba",
      "Titik jemput resmi di Stasiun KCIC Tegalluar (Gedebage) maupun Stasiun Padalarang",
      "Koper dan barang bawaan langsung masuk ke bagasi mobil",
      "Langsung lanjut rute wisata tanpa perlu repot ganti-ganti taksi"
    ],
    whoIsItFor: [
      "Wisatawan asal Jakarta yang liburan ke Bandung naik Kereta Cepat Whoosh",
      "Rombongan korporat / instansi yang mengadakan one-day trip meeting di Bandung",
      "Keluarga besar yang ingin efisiensi waktu perjalanan Jakarta-Bandung 45 menit"
    ],
    pricingTable: [
      { unit: "Elf Long 19 Seat (Jemput Whoosh + City Tour)", capacity: "19 Orang", dalamKota: "Rp 1.400.000", luarKota: "-", notes: "12 Jam Full Day Tour" },
      { unit: "Hiace Premio 14 Seat (Jemput Whoosh + Lembang)", capacity: "14 Orang", dalamKota: "Rp 1.500.000", luarKota: "-", notes: "Kenyamanan modern" },
      { unit: "Medium Bus 35 Seat (Rombongan Kantor)", capacity: "35 Orang", dalamKota: "Rp 2.500.000", luarKota: "-", notes: "Tour terorganisir" }
    ],
    included: ["Unit Armada Pilihan", "Driver Standby di Stasiun", "Bantuan Pengangkutan Bagasi"],
    excluded: ["BBM, Tol, Parkir Stasiun", "Tiket Masuk Wisata", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Kirim Jadwal Whoosh", desc: "Infokan nomor kereta & jam tiba di Tegalluar/Padalarang." },
      { step: 2, title: "DP 30%", desc: "Kunci unit dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan di H-3." },
      { step: 4, title: "Driver Standby", desc: "Driver mengontak H-1 dan menunggu di lobi penjemputan stasiun." }
    ],
    faqs: [
      { question: "Lebih baik turun di Stasiun Padalarang atau Tegalluar untuk sewa Elf?", answer: "Jika tujuan Anda langsung ke Lembang, Stasiun Padalarang lebih dekat. Namun jika tujuan Anda ke Ciwidey, Pangalengan, Masjid Al-Jabbar, atau pusat kota Bandung, Stasiun Tegalluar sangat ideal." },
      { question: "Apakah driver akan menunggu jika jadwal kereta Whoosh delay?", answer: "Ya, driver kami memantau jadwal kedatangan kereta cepat Anda dan tetap setia menunggu di lokasi stasiun." }
    ],
    relatedSlugs: ["sewa-elf-bandung-lembang", "sewa-elf-bandung-ciwidey", "sewa-hiace-premio-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Elf jemput di Stasiun Whoosh Tegalluar / Padalarang. Mohon info penawarannya."
  },

  // ==========================================
  // 4. USE CASE / SERVICE PAGES
  // ==========================================
  "sewa-elf-wisata-bandung": {
    slug: "sewa-elf-wisata-bandung",
    category: "service",
    title: "Sewa Elf Wisata & Liburan Rombongan Bandung",
    metaTitle: "Sewa Elf Wisata Bandung | Liburan Rombongan Nyaman Mulai Rp1,4 Jt",
    metaDescription: "Layanan sewa Elf pariwisata Bandung untuk liburan keluarga & rombongan. Armada bersih Euro4, full karaoke, driver ramah paham spot foto & kuliner viral.",
    h1: "Sewa Elf Wisata & Liburan Bandung",
    heroSubtitle: "Ciptakan momen liburan seru dan kompak bersama keluarga serta teman tanpa lelah menyetir di tengah padatnya kota Bandung.",
    badge: "Spesialis Wisata Pariwisata",
    quickAnswer: "Layanan sewa Elf Wisata Bandung dibanderol mulai Rp1.400.000 per 12 jam (Elf Long 19 seat). Kami melayani seluruh rute wisata hits Bandung Utara (Lembang), Bandung Selatan (Ciwidey & Pangalengan), hingga wisata kuliner dan belanja di pusat kota dengan fasilitas audio karaoke dan supir yang ramah.",
    priceStarting: "Rp 1.400.000",
    capacityRange: "14 - 59 Kursi",
    featuredImage: "/images/armada/elf-long.webp",
    highlights: [
      "Jadwal dan rute fleksibel mengikuti rencana liburan (itinerary) Anda",
      "Sopir ramah, berseragam rapi, dan menguasai jalan bebas macet",
      "Fasilitas karaoke on-board yang membuat perjalanan tidak membosankan",
      "Armada steril, wangi, ber-AC dingin dan reclining seat empuk"
    ],
    whoIsItFor: [
      "Keluarga besar yang ingin liburan bareng kakek, nenek, dan anak-anak",
      "Rombongan alumni / arisan yang ingin reuni keliling Bandung",
      "Wisatawan luar pulau yang butuh transportasi terpercaya di Bandung"
    ],
    pricingTable: [
      { unit: "Elf Long 19 Seat Wisata", capacity: "19 Orang", dalamKota: "Rp 1.400.000", luarKota: "Rp 1.700.000", notes: "Favorit wisata keluarga" },
      { unit: "Hiace Premio 14 Seat Wisata", capacity: "14 Orang", dalamKota: "Rp 1.500.000", luarKota: "Rp 2.000.000", notes: "Kabin modern super senyap" },
      { unit: "Medium Bus 35 Seat Wisata", capacity: "35 Orang", dalamKota: "Rp 2.500.000", luarKota: "Rp 3.000.000", notes: "Rombongan komunitas besar" }
    ],
    included: ["Unit Pariwisata Terawat", "Driver Wisata Berpengalaman", "Full Audio Karaoke"],
    excluded: ["BBM, Tol, Parkir", "Tiket Masuk Objek Wisata", "Makan Driver"],
    bookingSop: [
      { step: 1, title: "Diskusi Itinerary", desc: "Konsultasikan daftar tempat wisata yang ingin dikunjungi." },
      { step: 2, title: "DP 30%", desc: "Kunci armada dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan di H-3." },
      { step: 4, title: "Liburan Menyenangkan", desc: "Driver menjemput tepat waktu di hotel/stasiun." }
    ],
    faqs: [
      { question: "Apakah rute wisata bisa kami tentukan sendiri?", answer: "Tentu saja! Rute wisata 100% fleksibel sesuai keinginan Anda. Driver kami juga siap memberikan rekomendasi urutan rute yang paling efisien agar tidak habis waktu di jalan." },
      { question: "Berapa jam pemakaian sewa Elf wisata dalam kota?", answer: "Durasi sewa dalam kota Bandung adalah hingga 12 jam pada hari yang sama." }
    ],
    relatedSlugs: ["sewa-elf-bandung-lembang", "sewa-elf-bandung-ciwidey", "sewa-elf-long-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin sewa Elf untuk wisata di Bandung. Mohon info paket dan rekomendasi armadanya."
  },

  "sewa-elf-study-tour-bandung": {
    slug: "sewa-elf-study-tour-bandung",
    category: "service",
    title: "Sewa Elf & Bus Study Tour Bandung Sekolah / Kampus",
    metaTitle: "Sewa Elf Study Tour Bandung | Bus Sekolah & Kampus Terpercaya",
    metaDescription: "Sewa Elf & Bus Pariwisata untuk study tour sekolah TK, SD, SMP, SMA & kampus di Bandung. Legalitas resmi Amoora Group, uji KIR berkala, driver amanah.",
    h1: "Sewa Elf & Bus Study Tour Bandung",
    heroSubtitle: "Transportasi karya wisata edukasi sekolah dan kampus yang aman, tertib, dan terkoordinasi rapi dengan legalitas resmi by Amoora Group.",
    badge: "Pilihan Utama Sekolah & Kampus",
    quickAnswer: "Sewa Elf & Bus Study Tour Bandung menyediakan unit Isuzu Elf Long (19 seat), Medium Bus (31-39 seat), dan Big Bus (47-59 seat) dengan tarif mulai Rp1.400.000. Dilengkapi legalitas operasional resmi, uji KIR berkala, sabuk pengaman, serta pengemudi pariwisata profesional yang berdedikasi menjaga keselamatan rombongan pelajar.",
    priceStarting: "Rp 1.400.000",
    capacityRange: "19 - 59 Kursi",
    featuredImage: "/images/armada/bus-medium-jetbus3+.webp",
    highlights: [
      "Armada terawat dengan uji kelayakan KIR berkala dan surat-surat lengkap",
      "Tersedia invoice resmi, kwitansi, dan faktur untuk administrasi sekolah",
      "Pengemudi sabar, ramah, dan memprioritaskan keselamatan berkendara (Safety Driving)",
      "Pilihan kapasitas fleksibel sesuai jumlah siswa per kelas atau angkatan"
    ],
    whoIsItFor: [
      "Panitia karya wisata sekolah TK, SD, SMP, dan SMA / SMK",
      "Himpunan mahasiswa kampus untuk kunjungan industri & praktikum",
      "Lembaga bimbingan belajar dan pondok pesantren"
    ],
    pricingTable: [
      { unit: "Isuzu Elf Long (19 Seat)", capacity: "19 Siswa", dalamKota: "Rp 1.400.000", luarKota: "Rp 1.700.000", notes: "Cocok untuk 1 kelas kecil" },
      { unit: "Medium Bus Jetbus 3+ (35 Seat)", capacity: "35 Siswa", dalamKota: "Rp 2.500.000", luarKota: "Rp 3.000.000", notes: "1-2 Rombongan kelas" },
      { unit: "Big Bus HDD/SHD (50-59 Seat)", capacity: "59 Siswa", dalamKota: "Rp 3.200.000", luarKota: "Rp 3.700.000", notes: "Study tour angkatan akbar" }
    ],
    included: ["Unit Bus/Elf Berstandar Pariwisata", "Driver Berlisensi Pariwisata", "Audio Karaoke", "Kelengkapan P3K & APAR"],
    excluded: ["BBM, Tol, Parkir Objek", "Tiket Masuk Museum / Industri", "Makan Kru Driver"],
    bookingSop: [
      { step: 1, title: "Pengajuan Rencana", desc: "Kirimkan estimasi siswa dan rute kunjungan edukasi via WA." },
      { step: 2, title: "Penerbitan Penawaran", desc: "Kami kirimkan invoice & proposal resmi Amoora Group." },
      { step: 3, title: "DP 30% & Pelunasan", desc: "DP 30% untuk kunci unit dan pelunasan di H-3." },
      { step: 4, title: "Pelaksanaan Aman", desc: "Kru bus standby di halaman sekolah sebelum jam kumpul." }
    ],
    faqs: [
      { question: "Apakah tersedia dokumen legalitas resmi untuk SPJ sekolah?", answer: "Ya, kami berada di bawah naungan badan usaha resmi Amoora Group dan siap menerbitkan invoice, kwitansi bertanda tangan, serta faktur pendukung SPJ." },
      { question: "Destinasi edukasi apa saja yang populer di Bandung?", answer: "Destinasi populer antara lain Museum Geologi, Puspa Iptek Sundial Kota Baru Parahyangan, Observatorium Bosscha, Saung Angklung Udjo, dan Gedung Sate." }
    ],
    relatedSlugs: ["sewa-bus-pariwisata-bandung", "sewa-elf-gathering-bandung", "sewa-elf-long-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, kami dari panitia sekolah ingin sewa Elf / Bus untuk kegiatan study tour. Mohon penawaran resminya."
  },

  "sewa-elf-gathering-bandung": {
    slug: "sewa-elf-gathering-bandung",
    category: "service",
    title: "Sewa Elf & Bus Gathering Perusahaan di Bandung",
    metaTitle: "Sewa Elf Gathering Bandung | Outing & Corporate Trip Terpercaya",
    metaDescription: "Rental Elf, Hiace & Bus untuk gathering kantor, outing divisi & outbound di Bandung. Legalitas PT resmi by Amoora Group, koordinasi rapi, armada prima.",
    h1: "Sewa Elf & Bus Gathering Perusahaan Bandung",
    heroSubtitle: "Transportasi terkoordinasi dan profesional untuk acara company gathering, outing kantor, meeting tahunan, dan team building di Bandung.",
    badge: "Solusi Corporate & Outing",
    quickAnswer: "Layanan sewa Elf dan Bus Gathering Perusahaan di Bandung menyediakan armada terpadu mulai dari Hiace Premio VIP, Elf Long (19 seat), hingga Bus Pariwisata (35-59 seat). Dikelola secara profesional oleh Amoora Group dengan legalitas resmi, invoice pajak lengkap, serta kru pengemudi berseragam rapi yang siap menyukseskan rundown acara Anda.",
    priceStarting: "Rp 1.400.000",
    capacityRange: "14 - 200+ Kursi (Multi-Unit)",
    featuredImage: "/images/armada/big-bus-hddshd-jb3+.webp",
    highlights: [
      "Pengaturan konvoi multi-armada yang terkoordinasi rapi oleh koordinator lapangan",
      "Legalitas badan usaha resmi Amoora Group lengkap dengan faktur pajak & invoice resmi",
      "Penjemputan terkoordinasi di Stasiun KCIC, Bandara, Kantor Jakarta, atau Hotel Bandung",
      "Ketepatan waktu 100% mengikuti rundown acara gathering"
    ],
    whoIsItFor: [
      "Divisi HRD dan Event Organizer (EO) yang mengurus outing karyawan",
      "Perusahaan BUMN & Swasta yang mengadakan rapat kerja tahunan di Bandung",
      "Komunitas bisnis dan asosiasi profesi"
    ],
    pricingTable: [
      { unit: "Toyota Hiace Premio (14 Seat)", capacity: "14 Orang", dalamKota: "Rp 1.500.000", luarKota: "Rp 2.000.000", notes: "Direksi & Tamu VIP" },
      { unit: "Isuzu Elf Long (19 Seat)", capacity: "19 Orang", dalamKota: "Rp 1.400.000", luarKota: "Rp 1.700.000", notes: "Rombongan staf per divisi" },
      { unit: "Medium Bus JB3+ (35 Seat)", capacity: "35 Orang", dalamKota: "Rp 2.500.000", luarKota: "Rp 3.000.000", notes: "Outing 1 departemen" },
      { unit: "Big Bus SHD JB5 (50-59 Seat)", capacity: "59 Orang", dalamKota: "Rp 4.000.000", luarKota: "Rp 4.500.000", notes: "Gathering akbar satu kantor" }
    ],
    included: ["Armada Bersih Siap Pakai", "Driver Profesional Berseragam", "Audio Visual & Karaoke", "Koordinasi Penjemputan"],
    excluded: ["BBM, Tol, Parkir Venue Outbound", "Tiket & Aktivitas Outbound", "Makan Kru"],
    bookingSop: [
      { step: 1, title: "Kirimkan Kebutuhan", desc: "Infokan jumlah peserta, lokasi acara, dan rundown via WhatsApp." },
      { step: 2, title: "Penawaran & MOU", desc: "Kami siapkan invoice resmi dan kontrak pemesanan dari Amoora Group." },
      { step: 3, title: "DP 30% Kunci Unit", desc: "Pembayaran DP 30% via rekening perusahaan resmi." },
      { step: 4, title: "Pelaksanaan Event", desc: "Armada tiba di lokasi jemput 30 menit sebelum jadwal keberangkatan." }
    ],
    faqs: [
      { question: "Apakah bisa menyewa beberapa unit sekaligus untuk gathering 100+ orang?", answer: "Bisa sekali. Kami berpengalaman mengatur konvoi gabungan Elf, Hiace, dan Big Bus dengan koordinasi terpadu." },
      { question: "Apakah bisa menerbitkan invoice resmi dan faktur pajak?", answer: "Bisa. Kami menyediakan dokumen legalitas, invoice resmi bertanda tangan, kwitansi, dan faktur pajak sesuai kebutuhan administrasi perusahaan." }
    ],
    relatedSlugs: ["sewa-bus-pariwisata-bandung", "sewa-hiace-premio-bandung", "sewa-elf-bandung-lembang"],
    ctaMessage: "Halo admin sewaelfbandung.com, kami dari HRD/Perusahaan ingin konsultasi sewa armada untuk acara company gathering di Bandung."
  },

  "sewa-elf-ziarah-bandung": {
    slug: "sewa-elf-ziarah-bandung",
    category: "service",
    title: "Sewa Elf & Bus Ziarah Religi Bandung",
    metaTitle: "Sewa Elf Ziarah Bandung | Wisata Religi Wali Songo & Masjid",
    metaDescription: "Rental Elf & Bus Ziarah di Bandung. Rute ziarah Makam Wali Songo, Cirebon, Pamijahan, Masjid Al-Jabbar. Driver santun, sabar, paham etika ziarah.",
    h1: "Sewa Elf & Bus Ziarah Religi Bandung",
    heroSubtitle: "Perjalanan ibadah ziarah makam wali, pondok pesantren, dan masjid agung yang tenang, khusyuk, dan berkah bersama rombongan.",
    badge: "Wisata Religi & Ibadah",
    quickAnswer: "Sewa Elf Ziarah Bandung menyediakan Isuzu Elf Long (19 seat) hingga Bus Pariwisata dengan tarif mulai Rp1.400.000. Pengemudi kami santun, sabar mendampingi rombongan orang tua/jamaah, memahami tata krama di lokasi makam keramat, serta siap melayani rute multi-hari ziarah Jawa Barat, Banten, dan Wali Songo Jawa Tengah/Timur.",
    priceStarting: "Rp 1.400.000",
    capacityRange: "19 - 59 Kursi",
    featuredImage: "/images/armada/elf-long.webp",
    highlights: [
      "Pengemudi santun, sabar, dan mengerti jadwal waktu sholat berjamaah",
      "Kenyamanan kabin terjaga dengan reclining seat empuk untuk istirahat lansia",
      "Bagasi luas untuk menampung perbekalan, air doa, dan oleh-oleh",
      "Rute fleksibel bisa satu hari (PP) maupun paket tour ziarah menginap"
    ],
    whoIsItFor: [
      "Rombongan majelis taklim dan pengajian ibu-ibu / bapak-bapak",
      "DKM masjid dan yayasan pondok pesantren",
      "Keluarga besar yang ingin tradisi ziarah makam leluhur bersama"
    ],
    popularDestinations: [
      { name: "Masjid Raya Al-Jabbar Gedebage", desc: "Masjid terapung megah ikon kebanggaan Jawa Barat.", duration: "Setengah Hari" },
      { name: "Makam Sunan Gunung Jati Cirebon", desc: "Ziarah salah satu Wali Songo di pesisir utara Jawa Barat.", duration: "1 Hari PP" },
      { name: "Ziarah Pamijahan Tasikmalaya", desc: "Makam Syekh Abdul Muhyi dan Gua Safarwadi.", duration: "1-2 Hari" },
      { name: "Tour Ziarah Wali Songo (Jateng - Jatim)", desc: "Perjalanan religi ziarah 9 wali dari Cirebon hingga Surabaya.", duration: "4-6 Hari" }
    ],
    pricingTable: [
      { unit: "Elf Long (19 Seat) Ziarah Lokal Bandung / Al-Jabbar", capacity: "19 Orang", dalamKota: "Rp 1.400.000", luarKota: "-", notes: "12 Jam pemakaian" },
      { unit: "Elf Long (19 Seat) Ziarah Cirebon / Pamijahan", capacity: "19 Orang", dalamKota: "-", luarKota: "Rp 1.800.000", notes: "1 Hari PP" },
      { unit: "Elf Long (19 Seat) Ziarah Wali Songo", capacity: "19 Orang", dalamKota: "-", luarKota: "Rp 1.800.000 - Rp 2.000.000 / Hari", notes: "Paket Tour Multi-Hari" }
    ],
    included: ["Unit Kendaraan Bersih", "Driver Sopan & Paham Rute Ziarah", "Audio Religi & Sholawat"],
    excluded: ["BBM, Tol, Parkir Makam", "Infaq / Tiket Masuk Tempat Ziarah", "Makan & Penginapan Driver"],
    bookingSop: [
      { step: 1, title: "Sampaikan Daftar Makam", desc: "Infokan rute ziarah yang ingin dikunjungi via WA." },
      { step: 2, title: "DP 30%", desc: "Kunci jadwal dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan di H-3." },
      { step: 4, title: "Berangkat Ibadah", desc: "Driver menjemput di masjid / titik kumpul rombongan." }
    ],
    faqs: [
      { question: "Apakah driver bersedia menunggu selama rombongan melakukan tahlil dan doa di makam?", answer: "Tentu saja. Pengemudi kami sangat memahami tata cara ziarah dan siap standby menunggu dengan sabar hingga seluruh rangkaian doa selesai." },
      { question: "Apakah bisa menyewa bus besar untuk ziarah rombongan 50 orang?", answer: "Bisa. Kami menyediakan Big Bus 50-59 seat yang nyaman untuk perjalanan ziarah jarak jauh antar provinsi." }
    ],
    relatedSlugs: ["sewa-elf-long-bandung", "sewa-bus-pariwisata-bandung", "sewa-elf-luar-kota-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, kami ingin sewa Elf / Bus untuk perjalanan ziarah religi. Mohon info rincian harganya."
  },

  "sewa-elf-luar-kota-bandung": {
    slug: "sewa-elf-luar-kota-bandung",
    category: "service",
    title: "Sewa Elf Bandung Carter Luar Kota & Antar Provinsi",
    metaTitle: "Sewa Elf Bandung Luar Kota Murah | Carter Drop Off Jawa Bali",
    metaDescription: "Layanan carter sewa Elf Bandung luar kota & antar provinsi (Jawa Barat, Jateng, Jatim, Bali). Armada prima Euro4, driver handal rute tol trans Jawa.",
    h1: "Sewa Elf Bandung Carter Luar Kota",
    heroSubtitle: "Perjalanan carter jarak jauh antar kota dan antar provinsi di Pulau Jawa dan Bali yang aman, terjadwal, dan bebas repot.",
    badge: "Spesialis Carter Luar Kota",
    quickAnswer: "Sewa Elf Bandung Luar Kota melayani perjalanan carter pulang-pergi (PP) maupun drop off ke berbagai kota seperti Jakarta, Cirebon, Yogyakarta, Solo, Semarang, Surabaya, Malang, hingga Bali. Tarif mulai Rp1.700.000 per hari dengan armada berstandar Euro4 yang siap menempuh ribuan kilometer.",
    priceStarting: "Rp 1.700.000",
    capacityRange: "14 - 59 Kursi",
    featuredImage: "/images/armada/elf-long-euro4.webp",
    highlights: [
      "Pemeriksaan mesin dan ban ekstra ketat sebelum perjalanan jarak jauh (long trip)",
      "Pilihan double driver untuk rute jauh lintas provinsi demi keselamatan maksimal",
      "Durasi pemakaian luar kota leluasa hingga 18 jam per harinya",
      "Bisa sistem drop off sekali jalan atau sewa harian standby"
    ],
    whoIsItFor: [
      "Rombongan keluarga yang ingin mudik atau liburan lintas kota",
      "Instansi yang mengadakan kunjungan kerja / studi banding di Jawa Tengah / Jawa Timur",
      "Rombongan wisata keliling Jawa - Bali (Overland Tour)"
    ],
    pricingTable: [
      { unit: "Elf Long Luar Kota (Jawa Barat)", capacity: "19 Orang", dalamKota: "-", luarKota: "Rp 1.700.000 / Hari", notes: "Garut, Cirebon, Pangandaran" },
      { unit: "Elf Long Luar Kota (Jateng / DIY)", capacity: "19 Orang", dalamKota: "-", luarKota: "Rp 1.800.000 - Rp 2.000.000 / Hari", notes: "Jogja, Solo, Semarang" },
      { unit: "Elf Long Luar Kota (Jawa Timur)", capacity: "19 Orang", dalamKota: "-", luarKota: "Rp 2.000.000 - Rp 2.200.000 / Hari", notes: "Surabaya, Malang, Bromo" },
      { unit: "Hiace Premio Luar Kota", capacity: "14 Orang", dalamKota: "-", luarKota: "Rp 2.000.000 - Rp 2.400.000 / Hari", notes: "Kenyamanan suspensi" }
    ],
    included: ["Unit Armada Prima", "Driver Handal Rute Tol Trans Jawa", "Audio Karaoke & USB Charger"],
    excluded: ["BBM, Tiket Tol, Parkir", "Tiket Penyeberangan Kapal (jika ke Bali/Sumatera)", "Makan & Penginapan Driver"],
    bookingSop: [
      { step: 1, title: "Konsultasi Rute Jauh", desc: "Infokan kota tujuan, tanggal keberangkatan, dan durasi hari via WA." },
      { step: 2, title: "Penetapan Tarif & DP", desc: "Deal harga dan kunci unit dengan DP 30%." },
      { step: 3, title: "Pelunasan H-3", desc: "Pelunasan maksimal H-3 sebelum keberangkatan." },
      { step: 4, title: "Keberangkatan Nyaman", desc: "Driver tiba di titik kumpul Bandung siap menempuh perjalanan." }
    ],
    faqs: [
      { question: "Apakah ada batas jam pemakaian untuk sewa Elf luar kota?", answer: "Untuk sewa luar kota, durasi pemakaian normal adalah hingga 18 jam per hari pada tanggal yang sama." },
      { question: "Bagaimana dengan akomodasi sopir untuk sewa luar kota menginap?", answer: "Penyewa menyediakan penginapan sederhana untuk supir di kota tujuan atau memberikan uang kompensasi inap driver." }
    ],
    relatedSlugs: ["sewa-elf-bandung-jakarta", "sewa-elf-bandung-pangandaran", "sewa-elf-long-euro4-bandung"],
    ctaMessage: "Halo admin sewaelfbandung.com, saya ingin konsultasi carter sewa Elf luar kota dari Bandung. Mohon info penawaran harganya."
  }
};

export const ALL_LANDING_SLUGS = Object.keys(SEO_LANDING_PAGES);
