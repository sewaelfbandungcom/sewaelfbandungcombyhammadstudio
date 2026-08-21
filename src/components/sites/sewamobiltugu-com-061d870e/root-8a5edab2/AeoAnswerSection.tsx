"use client";

import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { bookingUrl } from "./content";
import Link from "next/link";

const conciseFaqs = [
  {
    question: "Berapa harga sewa Elf Bandung per hari?",
    answer:
      "Tarif sewa Isuzu Elf Long mulai Rp1.400.000 (12 jam dalam kota) dan Rp1.700.000 (luar kota). Unit Elf Euro4 mulai Rp1.700.000 & Elf Coaster mulai Rp1.800.000 sudah termasuk unit prima dan sopir profesional.",
  },
  {
    question: "Elf Long muat berapa orang dan apa bedanya dengan Elf Coaster?",
    answer:
      "Elf Long standar berkapasitas 18–19 penumpang (Euro4 muat hingga 21 orang). Sedangkan Elf Coaster memiliki bodi lebih lebar, plafon tinggi, dan lorong tengah leluasa untuk rombongan hingga 22 orang.",
  },
  {
    question: "Bagaimana ketentuan DP dan pelunasan?",
    answer:
      "Pemesanan deal setelah DP 30% untuk mengunci armada. Pelunasan diselesaikan maksimal H-3, dan data kontak driver dibagikan pada H-1 sebelum keberangkatan.",
  },
  {
    question: "Apakah bisa jemput di Stasiun Whoosh Tegalluar / Padalarang?",
    answer:
      "Bisa sekali. Driver kami siap standby menjemput langsung di Stasiun Whoosh Tegalluar, Padalarang, Bandara Kertajati/Soetta, dan seluruh hotel di Bandung.",
  },
];

export function AeoAnswerSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-12 sm:py-16 border-t border-[#DCE5F0]">
      <div className="site-container max-w-3xl">
        {/* Crisp Header */}
        <div className="text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1237B8]">
            Tanya Jawab Singkat
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A]">
            FAQ Sewa Elf Bandung
          </h2>
          <p className="mt-1 text-xs text-[#64748B]">
            Informasi ringkas seputar tarif, kapasitas, dan cara booking.
          </p>
        </div>

        {/* Clean Accordion Stack */}
        <div className="mt-8 space-y-2.5">
          {conciseFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? "border-[#1237B8] bg-[#F8FAFC] shadow-xs"
                    : "border-[#E2E8F0] bg-white hover:border-[#1237B8]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left font-bold text-xs sm:text-sm text-[#0F172A] cursor-pointer"
                >
                  <span className={isOpen ? "text-[#1237B8]" : ""}>{faq.question}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#1237B8]" : "text-[#94A3B8]"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#E2E8F0]/70 px-4 pb-4 pt-2.5 text-xs text-[#334155] leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Link to Full Price Table */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs font-bold">
          <Link
            href="/harga-sewa-elf-bandung"
            className="inline-flex items-center gap-1.5 text-[#1237B8] hover:underline"
          >
            Lihat Tabel Harga Lengkap 2026 <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
