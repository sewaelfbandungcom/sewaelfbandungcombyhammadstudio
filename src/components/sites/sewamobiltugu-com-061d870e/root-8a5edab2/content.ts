import type { Benefit, Vehicle } from "@/types/sewamobil";

export const assetRoot =
  "/sites/sewamobiltugu-com-061d870e/root-8a5edab2/images";

export const whatsappPhone1 = "6281214802420";
export const whatsappPhone2 = "6282215452230";
export const whatsappBase = `https://wa.me/${whatsappPhone1}`;

export const cars: Vehicle[] = [
  { name: "Hiace Commuter (14 Seat)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 1.200.000 / Hari", allInPrice: "Rp 1.500.000 / Hari" },
  { name: "Hiace Premio (14 Seat)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 1.500.000 / Hari", allInPrice: "Rp 2.000.000 / Hari" },
  { name: "Isuzu Elf Long (19 Seat)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 1.400.000 / Hari", allInPrice: "Rp 1.700.000 / Hari" },
  { name: "Elf Coaster Euro4 (18-22 Seat)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 2.000.000 / Hari", allInPrice: "Rp 2.300.000 / Hari" },
  { name: "Hiace Premio Luxury (9 Seat VIP)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 2.200.000 / Hari", allInPrice: "Rp 2.600.000 / Hari" },
  { name: "Innova Reborn", image: `${assetRoot}/car-reborn-baru.webp`, selfDrivePrice: "Rp 950.000 / Hari", allInPrice: "Rp 1.200.000 / Hari" },
  { name: "Innova Zenix G", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 1.500.000 / Hari", allInPrice: "Rp 2.200.000 / Hari" },
  { name: "New Avanza TSS", image: `${assetRoot}/car-avanza.webp`, selfDrivePrice: "Rp 750.000 / Hari", allInPrice: "Rp 1.000.000 / Hari" },
];

export const busFleet: Vehicle[] = [
  { name: "Bus Medium Jetbus 3+ (31-35 Seat)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 2.500.000 / Hari", allInPrice: "Rp 3.000.000 / Hari", dailyPrice: "Rp 2.500.000 / Hari" },
  { name: "Bus Medium Long JB5 (35-39 Seat)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 3.000.000 / Hari", allInPrice: "Rp 3.600.000 / Hari", dailyPrice: "Rp 3.000.000 / Hari" },
  { name: "MD Bus Luxury Legrest (14-16 Seat)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 3.200.000 / Hari", allInPrice: "Rp 3.800.000 / Hari", dailyPrice: "Rp 3.200.000 / Hari" },
  { name: "Big Bus Jetbus HDD (47-59 Seat)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 3.200.000 / Hari", allInPrice: "Rp 3.700.000 / Hari", dailyPrice: "Rp 3.200.000 / Hari" },
  { name: "Big Bus SHD JB5 (45-59 Seat)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 4.000.000 / Hari", allInPrice: "Rp 4.500.000 / Hari", dailyPrice: "Rp 4.000.000 / Hari" },
  { name: "Big Bus Luxury Legrest (25-30 Seat)", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 4.200.000 / Hari", allInPrice: "Rp 4.700.000 / Hari", dailyPrice: "Rp 4.200.000 / Hari" },
  { name: "Toyota Fortuner GR Sport", image: `${assetRoot}/car-xpander.webp`, selfDrivePrice: "Rp 1.800.000 / Hari", allInPrice: "Rp 2.400.000 / Hari", dailyPrice: "Rp 1.800.000 / Hari" },
  { name: "Toyota Alphard VIP", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 3.200.000 / Hari", allInPrice: "Rp 3.500.000 / Hari", dailyPrice: "Rp 3.200.000 / Hari" },
];

export const benefits: Benefit[] = [
  { title: "Kendaraan Bersih & Terawat", description: "Armada berstandar Euro4, wangi, nyaman, dan rutin diservis berkala di bengkel resmi.", image: `${assetRoot}/benefit-clean.webp` },
  { title: "Cocok untuk Rombongan", description: "Kapasitas penumpang luas untuk keluarga, wisata, study tour, ziarah, dan gathering kantor.", image: `${assetRoot}/benefit-fast.webp` },
  { title: "Harga Kompetitif & Transparan", description: "Tarif sewa bersahabat dan jelas tanpa ada biaya siluman atau biaya tersembunyi.", image: `${assetRoot}/benefit-price.webp` },
  { title: "Pelayanan Ramah & Profesional", description: "Driver berlisensi pariwisata yang santun, tepat waktu, dan menguasai jalanan Bandung.", image: `${assetRoot}/benefit-driver.webp` },
];

export function bookingUrl(unit?: string) {
  const message = unit
    ? `Halo Admin Sewa Elf Bandung by Amoora Group, saya ingin booking unit ${unit}. Bisa minta info ketersediaan dan penawarannya?`
    : "Halo Admin Sewa Elf Bandung by Amoora Group, saya ingin konsultasi sewa kendaraan rombongan di Bandung.";
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}
