import type { Metadata } from "next";

import { FleetCatalogPage } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/FleetCatalogPage";

export const metadata: Metadata = {
  title: "Sewa Elf & Hiace Bandung | Sewa Elf Bandung by Amoora Group",
  description: "Pilih armada Elf Long 19 seat, Hiace Premio & Commuter yang bersih, terawat, dan siap untuk wisata dan perjalanan rombongan di Bandung.",
};

export default function ArmadaPage() {
  return <FleetCatalogPage kind="car" />;
}
