import type { Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { BookingStepsSection } from "@/components/sections/BookingStepsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Layanan Sewa Elf Bandung - Wisata, Study Tour, Gathering, Ziarah | Amoora Group",
  description:
    "7 Layanan sewa Elf & Bus Bandung by Amoora Group: Wisata Lembang Ciwidey, Study Tour Sekolah, Gathering Kantor, Keluarga Besar, Event Wedding, Ziarah Religi, Drop Luar Kota.",
};

export default function LayananPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F1F6FF] text-[#101B38]">
      <Navbar />
      <main className="flex-grow">
        {/* Page Hero Header */}
        <div className="bg-[#1237B8] text-white py-12 sm:py-16 text-center relative overflow-hidden">
          <div className="site-container relative z-10 space-y-3">
            <span className="text-xs font-bold text-[#50C710] bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
              Solusi Transportasi Rombongan
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Layanan Sewa Elf Bandung
            </h1>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto">
              Fleksibel, aman, dan berstandar pariwisata profesional untuk segala kebutuhan agenda perjalanan Anda.
            </p>
          </div>
        </div>

        <ServicesSection />
        <DestinationsSection />
        <BookingStepsSection />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
