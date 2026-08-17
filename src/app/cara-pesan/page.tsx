import type { Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { BookingStepsSection } from "@/components/sections/BookingStepsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Cara Pemesanan & SOP Sewa Elf Bandung | Amoora Group",
  description:
    "Panduan resmi tata cara pemesanan sewa Elf & Bus Bandung: DP 30%, Pelunasan H-3, Pembagian Kontak Driver H-1, serta Syarat & Ketentuan.",
};

export default function CaraPesanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F1F6FF] text-[#101B38]">
      <Navbar />
      <main className="flex-grow">
        {/* Page Hero Header */}
        <div className="bg-[#1237B8] text-white py-12 sm:py-16 text-center relative overflow-hidden">
          <div className="site-container relative z-10 space-y-3">
            <span className="text-xs font-bold text-[#50C710] bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
              SOP & Ketentuan Transparan
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Tata Cara Pemesanan & Reservasi
            </h1>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto">
              Prosedur cepat dan pasti untuk memastikan armada siap melayani perjalanan Anda tepat waktu.
            </p>
          </div>
        </div>

        <BookingStepsSection />
        <WhyChooseUsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
