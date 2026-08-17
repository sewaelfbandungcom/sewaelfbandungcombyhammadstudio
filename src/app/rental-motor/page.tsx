import type { Metadata } from "next";

import { FleetCatalogPage } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/FleetCatalogPage";

export const metadata: Metadata = {
  title: "Sewa Bus Pariwisata Bandung | Sewa Elf Bandung by Amoora Group",
  description: "Pilihan bus pariwisata Medium Bus 31-39 seat & Big Bus 47-59 seat modern Jetbus 3+ hingga Jetbus 5 untuk rombongan wisata di Bandung.",
};

export default function BusPariwisataPage() {
  return <FleetCatalogPage kind="motor" />;
}
