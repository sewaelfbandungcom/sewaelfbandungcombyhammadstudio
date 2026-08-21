"use client";

import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { bookingUrl } from "./content";
import Link from "next/link";

const faqs = [
  {
    category: "Tarif & Biaya",
    question: "Berapa harga sewa Elf Bandung per hari?",
    answer:
      "Tarif sewa Isuzu Elf Long (18–19 Seat) mulai dari Rp1.400.000 per 12 jam untuk area Bandung Kota. Untuk unit Isuzu Elf Long Euro4 mulai Rp1.700.000, Elf Coaster mulai Rp1.800.000, dan Elf Coaster Euro4 mulai Rp2.000.000. Untuk rute luar kota Jawa Barat tarif mulai Rp1.700.000 per hari.",
  },
  {
    category: "Kapasitas Unit",
    question: "Elf Long muat berapa orang dan apa bedanya dengan Elf Coaster?",
    answer:
      "Isuzu Elf Long standar memuat 18–19 orang, dan tipe Euro4 muat hingga 21 orang. Sedangkan Elf Coaster memiliki bodi yang lebih lebar dengan ruang kepala (headroom) lebih tinggi dan lorong tengah (aisle) yang lebih leluasa untuk mobilitas penumpang di dalam kabin.",
  },
  {
    category: "Rekomendasi",
    question: "Untuk rombongan 15 hingga 19 orang sebaiknya pilih armada apa?",
    answer:
      "Untuk rombongan 14–15 orang tanpa banyak barang bawaan besar, Toyota Hiace Premio atau Hiace Commuter sangat nyaman dan empuk. Namun jika rombongan berjumlah 16–19 orang atau membawa banyak koper, Isuzu Elf Long 19 Seat atau Elf Euro4 adalah pilihan paling tepat dan hemat.",
  },
  {
    category: "SOP Booking",
    question: "Bagaimana cara booking, ketentuan DP, dan pelunasan?",
    answer:
      "Pemesanan sangat mudah: Cukup sampaikan tanggal, rute, dan jumlah rombongan ke WhatsApp admin. Pemesanan resmi terkunci setelah pembayaran DP 30%. Pelunasan sisa biaya diselesaikan maksimal H-3, dan data kontak driver yang bertugas akan dibagikan di H-1 sebelum penjemputan.",
  },
  {
    category: "Fasilitas",
    question: "Apakah harga sewa sudah termasuk BBM, Tol, dan Driver?",
    answer:
      "Tarif dasar sudah mencakup unit armada bersih wangi ber-AC dingin, fasilitas audio karaoke/USB charger, dan jasa pengemudi pariwisata profesional. Untuk BBM, tol, parkir, dan makan sopir dapat dibayarkan terpisah atau Anda dapat memilih Paket All-In praktis dari kami.",
  },
  {
    category: "Area Jemput",
    question: "Apakah bisa jemput di Stasiun Whoosh Tegalluar, Padalarang & Bandara?",
    answer:
      "Bisa sekali. Kami melayani penjemputan langsung di Stasiun Kereta Cepat Whoosh Tegalluar (Gedebage), Stasiun Padalarang, Stasiun Bandung (Hall), Bandara Kertajati (KJT), Bandara Soetta / Halim, serta seluruh hotel dan alamat rumah se-Bandung Raya.",
  },
];

export function AeoAnswerSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-[#F1F6FF] via-white to-[#F1F6FF] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decorative Blur */}
      <div className="pointer-events-none absolute -left-20 top-1/4 size-96 rounded-full bg-[#1237B8]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 size-96 rounded-full bg-[#50C710]/5 blur-3xl" />

      <div className="site-container relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Heading, Info Box, and Direct WhatsApp Assist */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1237B8]/20 bg-[#E8F1FF] px-3.5 py-1 text-xs font-extrabold text-[#1237B8]">
              <Sparkles className="size-3.5 text-[#1237B8]" />
              FAQ &amp; Informasi Lengkap
            </div>

            <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-[-0.035em] text-[#0F172A] leading-[1.2]">
              Pertanyaan yang Sering Diajukan Seputar <span className="text-[#1237B8]">Sewa Elf Bandung</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#475569]">
              Temukan jawaban cepat seputar tarif resmi 2026, kapasitas muat penumpang, perbandingan unit, dan SOP pemesanan transparan tanpa biaya siluman.
            </p>

            {/* Quick Guarantees Card */}
            <div className="mt-6 rounded-2xl border border-[#DCE5F0] bg-white p-5 shadow-sm">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#1237B8]">
                Jaminan Layanan Amoora Group
              </span>
              <ul className="mt-3 space-y-2.5 text-xs text-[#1E293B]">
                <li className="flex items-center gap-2 font-semibold">
                  <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#F2FBEA] text-[#2e8807] text-[10px] font-extrabold">✓</span>
                  Harga transparan &amp; konfirmasi cepat via WhatsApp
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#F2FBEA] text-[#2e8807] text-[10px] font-extrabold">✓</span>
                  Unit armada Euro4 terawat rutin &amp; ber-AC dingin
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#F2FBEA] text-[#2e8807] text-[10px] font-extrabold">✓</span>
                  Sopir pariwisata berlisensi &amp; hafal rute wisata
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center gap-2.5">
                <Link
                  href="/harga-sewa-elf-bandung"
                  className="flex h-10 w-full sm:w-auto flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#1237B8]/30 bg-[#F1F6FF] px-4 text-xs font-bold text-[#1237B8] hover:bg-[#1237B8] hover:text-white transition"
                >
                  Tabel Tarif Lengkap <ArrowRight className="size-3.5" />
                </Link>
                <a
                  href={bookingUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-4 text-xs font-bold text-white shadow-xs transition hover:-translate-y-0.5"
                >
                  <MessageCircle className="size-3.5" /> Chat Admin
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Elegant Single-Stack Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#1237B8] bg-white shadow-[0_12px_30px_rgba(18,55,184,.10)] ring-1 ring-[#1237B8]/15"
                      : "border-[#E2E8F0] bg-white/90 hover:border-[#1237B8]/40 hover:bg-white shadow-2xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer select-none"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`rounded-md px-2 py-0.5 text-[10px] font-extrabold tracking-wide uppercase transition-colors ${
                            isOpen
                              ? "bg-[#1237B8] text-white"
                              : "bg-[#F1F6FF] text-[#1237B8]"
                          }`}
                        >
                          {faq.category}
                        </span>
                      </div>
                      <h3
                        className={`text-sm sm:text-[15px] font-bold leading-snug transition-colors ${
                          isOpen ? "text-[#1237B8]" : "text-[#0F172A] group-hover:text-[#1237B8]"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`grid size-8 shrink-0 place-items-center rounded-xl transition-all duration-200 ${
                        isOpen
                          ? "bg-[#1237B8] text-white rotate-180 shadow-xs"
                          : "bg-[#F1F6FF] text-[#1237B8] group-hover:bg-[#E8F1FF]"
                      }`}
                    >
                      <ChevronDown className="size-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {/* Smooth Content Drawer */}
                  {isOpen && (
                    <div className="border-t border-[#F1F5F9] px-5 pb-5 pt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p className="text-xs sm:text-[13px] leading-relaxed text-[#334155] font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
