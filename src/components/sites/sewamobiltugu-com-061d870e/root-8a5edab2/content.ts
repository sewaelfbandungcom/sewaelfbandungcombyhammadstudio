import type { Benefit, Vehicle } from "@/types/sewamobil";

export const assetRoot =
  "/sites/sewamobiltugu-com-061d870e/root-8a5edab2/images";

export const whatsappPhone1 = "6281214802420";
export const whatsappPhone2 = "6282215452230";
export const whatsappBase = `https://wa.me/${whatsappPhone1}`;

export type FleetCategoryKey = "minibus" | "bus" | "mobil";

export interface FleetItem {
  id: string;
  name: string;
  category: FleetCategoryKey;
  capacity: string;
  price: string;
  priceNum: number;
  badge?: string;
  isPopular?: boolean;
  isLuxury?: boolean;
  image: string;
  features: string[];
}

export interface CategoryInfo {
  key: FleetCategoryKey;
  label: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  count: number;
}

export const fleetCategories: CategoryInfo[] = [
  {
    key: "minibus",
    label: "Elf & Hiace",
    shortTitle: "Elf & Hiace",
    subtitle: "Kapasitas 8 s/d 22 Orang",
    description:
      "Pilihan microbus Isuzu Elf Long, Elf Coaster, serta Toyota Hiace Premio & Commuter Euro4 berstandar prima. Pilihan utama untuk wisata Lembang, Ciwidey, study tour, gathering kantor, dan drop luar kota.",
    count: 8,
  },
  {
    key: "bus",
    label: "Bus Pariwisata",
    shortTitle: "Medium & Big Bus",
    subtitle: "Kapasitas 29 s/d 59 Orang",
    description:
      "Armada bus pariwisata modern karoseri ternama (Jetbus 3+ hingga Jetbus 5) serta varian Luxury Legrest. Fasilitas full AC ducting, audio karaoke, reclining seat, USB port, dan bagasi ekstra luas.",
    count: 12,
  },
  {
    key: "mobil",
    label: "Mobil Pribadi & Keluarga",
    shortTitle: "MPV & SUV VIP",
    subtitle: "Kapasitas 5 s/d 7 Orang",
    description:
      "Layanan sewa mobil keluarga dan eksekutif mulai dari All New Avanza TSS, Innova Reborn & Zenix, SUV gagah Fortuner & Pajero, hingga MPV premium Toyota Alphard untuk kenyamanan perjalanan privat Anda.",
    count: 7,
  },
];

export const fleetItems: FleetItem[] = [
  // --- KATEGORI 1: MINIBUS / TRAVEL ---
  {
    id: "hiace-commuter",
    name: "Jenis Armada Elf",
    category: "minibus",
    capacity: "14 orang",
    price: "Rp 1.200.000",
    priceNum: 1200000,
    badge: "Favorit Wisata",
    isPopular: true,
    image: "/images/armada/hiace-commuter.webp",
    features: ["14 Kursi Reclining", "AC Dingin Merata", "Audio & USB Port", "Driver Berpengalaman"],
  },
  {
    id: "hiace-commuter-euro4",
    name: "Jenis Armada Elf Euro4",
    category: "minibus",
    capacity: "14 orang",
    price: "Rp 1.300.000",
    priceNum: 1300000,
    badge: "Euro4 Prima",
    image: "/images/armada/hiace-commuter-euro4.webp",
    features: ["14 Kursi Nyaman", "Mesin Euro4 Senyap", "AC Ducting", "Suspensi Halus"],
  },
  {
    id: "hiace-premio-std",
    name: "Jenis Armada Elf Premio Standard",
    category: "minibus",
    capacity: "14 orang",
    price: "Rp 1.500.000",
    priceNum: 1500000,
    badge: "Best Seller",
    isPopular: true,
    image: "/images/armada/hiace-premio-std.webp",
    features: ["14 Kursi Luas", "Kabin Tinggi & Lega", "Desain Modern Elegan", "Bagasi Lapang"],
  },
  {
    id: "hiace-premio-luxury",
    name: "Jenis Armada Elf Premio Luxury",
    category: "minibus",
    capacity: "8, 9, atau 10 orang",
    price: "Rp 2.200.000",
    priceNum: 2200000,
    badge: "Luxury Captain Seat",
    isLuxury: true,
    image: "/images/armada/hiace-premio-luxury.webp",
    features: ["Captain Seat VIP", "Interior Mewah Wood Panel", "Smart TV & Audio", "Suasana Eksekutif"],
  },
  {
    id: "elf-long",
    name: "Elf Long",
    category: "minibus",
    capacity: "18 atau 19 orang",
    price: "Rp 1.400.000",
    priceNum: 1400000,
    badge: "Rombongan Hemat",
    isPopular: true,
    image: "/images/armada/elf-long.webp",
    features: ["18 - 19 Kursi", "Muat Rombongan Besar", "AC Sejuk", "Bagasi Belakang"],
  },
  {
    id: "elf-long-euro4",
    name: "Elf Long Euro4",
    category: "minibus",
    capacity: "19 atau 21 orang",
    price: "Rp 1.700.000",
    priceNum: 1700000,
    badge: "Unit Baru Euro4",
    image: "/images/armada/elf-long-euro4.webp",
    features: ["19 - 21 Kursi", "Mesin Bertenaga Euro4", "Kabin Wangi & Bersih", "Suspensi Stabil"],
  },
  {
    id: "elf-coaster",
    name: "Elf Coaster",
    category: "minibus",
    capacity: "17 atau 18 orang",
    price: "Rp 1.800.000",
    priceNum: 1800000,
    badge: "Bodi Coaster Lega",
    image: "/images/armada/elf-coaster.webp",
    features: ["17 - 18 Kursi", "Bodi Lebar & Tinggi", "Reclining Seat", "Perjalanan Nyaman"],
  },
  {
    id: "elf-coaster-euro4",
    name: "Elf Coaster Euro4",
    category: "minibus",
    capacity: "18 atau 22 orang",
    price: "Rp 2.000.000",
    priceNum: 2000000,
    badge: "Kapasitas Maksimal",
    image: "/images/armada/elf-coaster-euro4.webp",
    features: ["18 - 22 Kursi", "Euro4 Terawat", "AC Ducting Merata", "Cocok Study Tour / Family"],
  },

  // --- KATEGORI 2: BUS PARIWISATA ---
  {
    id: "bus-medium-jetbus",
    name: "Bus Medium Jetbus",
    category: "bus",
    capacity: "29-31 orang",
    price: "Rp 2.000.000",
    priceNum: 2000000,
    badge: "Ekonomis",
    image: "/images/armada/bus-medium-jetbus.webp",
    features: ["29 - 31 Seat 2-2", "Full AC & Audio Karaoke", "Reclining Seat", "Bagasi Samping & Belakang"],
  },
  {
    id: "bus-medium-jetbus-2",
    name: "Bus Medium Jetbus 2",
    category: "bus",
    capacity: "29, 31, 33, atau 35 orang",
    price: "Rp 2.200.000",
    priceNum: 2200000,
    badge: "Jetbus 2",
    image: "/images/armada/bus-medium-jetbus2.webp",
    features: ["29 - 35 Seat", "AC Ducting Dingin", "Audio & Mic Karaoke", "Kru Profesional"],
  },
  {
    id: "bus-medium-jetbus-3",
    name: "Bus Medium Jetbus 3+",
    category: "bus",
    capacity: "31, 33, atau 35 orang",
    price: "Rp 2.500.000",
    priceNum: 2500000,
    badge: "Favorit Gathering",
    isPopular: true,
    image: "/images/armada/bus-medium-jetbus3+.webp",
    features: ["31 - 35 Seat", "Bodi Jetbus 3+ Modern", "LED Ambient Light", "Port Charger Tiap Baris"],
  },
  {
    id: "bus-medium-long-jb3",
    name: "Bus Medium Long JB3+",
    category: "bus",
    capacity: "35, 37, atau 39 orang",
    price: "Rp 2.800.000",
    priceNum: 2800000,
    badge: "Medium Long",
    image: "/images/armada/bus-medium-long-jb3+.webp",
    features: ["35 - 39 Seat", "Sasis Long Tambah Luas", "Layar TV LCD", "Kenyamanan Ekstra"],
  },
  {
    id: "bus-medium-long-jb5",
    name: "Bus Medium Long JB5",
    category: "bus",
    capacity: "35 atau 39 orang",
    price: "Rp 3.000.000",
    priceNum: 3000000,
    badge: "New Jetbus 5",
    image: "/images/armada/bus-medium-long-jb5.webp",
    features: ["35 - 39 Seat", "Model Terbaru Jetbus 5", "Peredam Suara Premium", "Desain Futuristik"],
  },
  {
    id: "md-bus-luxury-legrest",
    name: "MD Bus Luxury Legrest",
    category: "bus",
    capacity: "14 atau 16 orang",
    price: "Rp 3.200.000",
    priceNum: 3200000,
    badge: "VIP Legrest",
    isLuxury: true,
    image: "/images/armada/md-bus-luxury-legrest.webp",
    features: ["14 - 16 Seat Legrest", "Konfigurasi 2-1 Lega", "Dispenser / Coolbox", "Fasilitas VVIP Eksekutif"],
  },
  {
    id: "big-bus-jetbus-single",
    name: "Big Bus Jetbus Single",
    category: "bus",
    capacity: "47, 50, atau 59 orang",
    price: "Rp 3.000.000",
    priceNum: 3000000,
    badge: "Big Bus Ekonomis",
    image: "/images/armada/big-bus-jetbus-hdd.webp",
    features: ["47 - 59 Seat", "Kapasitas Rombongan Akbar", "Bagasi Tembus Luas", "AC Sentral Dingin"],
  },
  {
    id: "big-bus-jetbus-hdd",
    name: "Big Bus Jetbus HDD",
    category: "bus",
    capacity: "47, 50, atau 59 orang",
    price: "Rp 3.200.000",
    priceNum: 3200000,
    badge: "High Double Deck",
    image: "/images/armada/big-bus-jetbus-hdd.webp",
    features: ["47 - 59 Seat", "High Deck Pandangan Luas", "Audio Video Karaoke", "Driver Wisata Berlisensi"],
  },
  {
    id: "big-bus-hdd-premium",
    name: "Big Bus HDD Premium",
    category: "bus",
    capacity: "45, 47, atau 57 orang",
    price: "Rp 3.500.000",
    priceNum: 3500000,
    badge: "HDD Premium",
    image: "/images/armada/big-bus-hdd-premium.webp",
    features: ["45 - 57 Seat", "Jok Kulit Ergonomis", "Lampu Disco / Karaoke", "Suspensi Udara / Lembut"],
  },
  {
    id: "big-bus-shd-jb3",
    name: "Big Bus HDD/SHD JB3+",
    category: "bus",
    capacity: "45, 50, atau 59 orang",
    price: "Rp 3.800.000",
    priceNum: 3800000,
    badge: "Super High Deck JB3+",
    isPopular: true,
    image: "/images/armada/big-bus-hddshd-jb3+.webp",
    features: ["45 - 59 Seat", "Super High Deck Gagah", "Fasilitas Lengkap", "Air Suspension Halus"],
  },
  {
    id: "big-bus-shd-jb5",
    name: "Big Bus HDD/SHD JB5",
    category: "bus",
    capacity: "45, 50, atau 59 orang",
    price: "Rp 4.000.000",
    priceNum: 4000000,
    badge: "New Jetbus 5 Flagship",
    image: "/images/armada/big-bus-hddshd-jb5.webp",
    features: ["45 - 59 Seat", "Generasi Terbaru Jetbus 5", "Interior Ultra Modern", "Kenyamanan Tertinggi"],
  },
  {
    id: "big-bus-luxury-legrest",
    name: "Big Bus Luxury Legrest",
    category: "bus",
    capacity: "25-30 orang",
    price: "Rp 4.200.000",
    priceNum: 4200000,
    badge: "Royal VIP Legrest",
    isLuxury: true,
    image: "/images/armada/big-bus-luxury-legrest.webp",
    features: ["25 - 30 Seat Legrest 2-1", "Sofa & Smoking Room / Toilet", "Coffee Maker / Coolbox", "Pelayanan VVIP"],
  },

  // --- KATEGORI 3: MOBIL PRIBADI & KELUARGA ---
  {
    id: "new-avanza-tss",
    name: "New Avanza TSS",
    category: "mobil",
    capacity: "5-7 orang",
    price: "Rp 750.000",
    priceNum: 750000,
    badge: "Paling Hemat",
    isPopular: true,
    image: "/images/armada/avanza.webp",
    features: ["5 - 7 Penumpang", "All New TSS Nyaman", "Irit & Lincah", "Sudah Termasuk Driver"],
  },
  {
    id: "innova-reborn",
    name: "Innova Reborn",
    category: "mobil",
    capacity: "5-7 orang",
    price: "Rp 950.000",
    priceNum: 950000,
    badge: "Favorit Keluarga",
    isPopular: true,
    image: "/images/armada/innova-reborn.webp",
    features: ["5 - 7 Penumpang", "Diesel Bertenaga & Halus", "Kenyamanan Legendaris", "AC Double Blower"],
  },
  {
    id: "innova-zenix-g",
    name: "Innova Zenix G",
    category: "mobil",
    capacity: "5-7 orang",
    price: "Rp 1.500.000",
    priceNum: 1500000,
    badge: "Zenix Generasi Baru",
    image: "/images/armada/innova-zenix-g.webp",
    features: ["5 - 7 Penumpang", "Platform TNGA Empuk", "Kabin Hening & Modern", "Handling Nyaman"],
  },
  {
    id: "innova-zenix-q",
    name: "Innova Zenix Q",
    category: "mobil",
    capacity: "5-6 orang",
    price: "Rp 1.800.000",
    priceNum: 1800000,
    badge: "Captain Seat Ottoman",
    isLuxury: true,
    image: "/images/armada/innova-zenix-q.webp",
    features: ["5 - 6 Penumpang (Captain Seat)", "Ottoman Legrest Elektrik", "Panoramic Sunroof", "Suasana Mewah"],
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner GR",
    category: "mobil",
    capacity: "5-7 orang",
    price: "Rp 1.800.000",
    priceNum: 1800000,
    badge: "SUV Tangguh",
    image: "/images/armada/fortuner.webp",
    features: ["5 - 7 Penumpang", "SUV Gagah & Berkelas", "Kuat Tanjakan Pegunungan", "Interior Premium"],
  },
  {
    id: "mitsubishi-pajero",
    name: "Mitsubishi Pajero",
    category: "mobil",
    capacity: "5-7 orang",
    price: "Rp 2.000.000",
    priceNum: 2000000,
    badge: "Dakar SUV",
    image: "/images/armada/pajero.webp",
    features: ["5 - 7 Penumpang", "Desain Maskulin & Gagah", "Sunroof & Audio Mantap", "Siap Rute Menantang"],
  },
  {
    id: "toyota-alphard",
    name: "Toyota Alphard VIP",
    category: "mobil",
    capacity: "5-7 orang",
    price: "Rp 3.200.000",
    priceNum: 3200000,
    badge: "VVIP Sultan",
    isLuxury: true,
    image: "/images/armada/alphard.webp",
    features: ["5 - 7 Penumpang", "First Class Pilot Seat", "Luxury Ambient Lighting", "Kenyamanan Tertinggi"],
  },
];

export const priceRules = [
  "Harga berlaku untuk penjemputan Bandung Kota.",
  "Bandung Dalam Kota: durasi 12 jam / hari (pada hari yang sama).",
  "Luar Kota: durasi 18 jam / hari (pada hari yang sama).",
  "Pemesanan sewa kendaraan deal setelah melakukan DP 30% dari total sewa.",
  "Pelunasan dilakukan maksimal di H-3 (3 hari sebelum keberangkatan).",
  "Kontak driver akan diinformasikan di H-1 (1 hari sebelum keberangkatan).",
  "DP tidak bisa diuangkan kembali (pembatalan H-3 dikenakan 100%).",
  "Harga dapat berubah tanpa pemberitahuan terlebih dahulu (Hubungi admin kami untuk harga terbaru).",
] as const;

export const benefits: Benefit[] = [
  {
    title: "Kendaraan Bersih & Terawat",
    description: "Armada berstandar Euro4, wangi, nyaman, dan rutin diservis berkala di bengkel resmi.",
    image: `${assetRoot}/benefit-clean.webp`,
  },
  {
    title: "Cocok untuk Rombongan",
    description: "Kapasitas penumpang luas untuk keluarga, wisata, study tour, ziarah, dan gathering kantor.",
    image: `${assetRoot}/benefit-fast.webp`,
  },
  {
    title: "Harga Kompetitif & Transparan",
    description: "Tarif sewa bersahabat dan jelas tanpa ada biaya siluman atau biaya tersembunyi.",
    image: `${assetRoot}/benefit-price.webp`,
  },
  {
    title: "Pelayanan Ramah & Profesional",
    description: "Driver berlisensi pariwisata yang santun, tepat waktu, dan menguasai jalanan Bandung.",
    image: `${assetRoot}/benefit-driver.webp`,
  },
];

export function bookingUrl(unit?: string) {
  const message = unit
    ? `Halo admin sewaelfbandung.com, saya ingin sewa unit ${unit}. Mohon info ketersediaan dan penawaran harganya.`
    : "Halo admin sewaelfbandung.com, saya ingin sewa armada kendaraan di Bandung. Mohon info pilihan unit dan tarifnya.";
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

// Backward-compatibility exports for other existing imports if any
export const cars: Vehicle[] = fleetItems.filter((f) => f.category === "minibus" || f.category === "mobil").map((f) => ({
  name: `${f.name} (${f.capacity})`,
  image: f.image,
  selfDrivePrice: `${f.price} / Hari`,
  allInPrice: undefined,
}));

export const busFleet: Vehicle[] = fleetItems.filter((f) => f.category === "bus").map((f) => ({
  name: `${f.name} (${f.capacity})`,
  image: f.image,
  dailyPrice: `${f.price} / Hari`,
}));
