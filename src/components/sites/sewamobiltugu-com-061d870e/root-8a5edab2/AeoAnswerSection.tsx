"use client";

import { ChevronDown, HelpCircle, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { bookingUrl } from "./content";
import Link from "next/link";

const aeoFaqs = [
  {
    q: "Berapa harga sewa Elf Bandung?",
    a: "Tarif Elf Long mulai Rp1.400.000 per 12 jam untuk penjemputan Bandung Kota. Elf Long Euro4 mulai Rp1.700.000, Elf Coaster mulai Rp1.800.000, dan Elf Coaster Euro4 mulai Rp2.000.000. Untuk luar kota Jawa Barat mulai Rp1.700.000 – Rp2.300.000 per hari.",
    badge: "Tarif Resmi 2026",
  },
  {
    q: "Elf Long muat berapa orang?",
    a: "Isuzu Elf Long standar berkapasitas 18 hingga 19 orang penumpang dewasa. Untuk varian Elf Long Euro4 muat hingga 21 orang, sedangkan Elf Coaster Euro4 dapat menampung hingga 22 penumpang.",
    badge: "Kapasitas Unit",
  },
  {
    q: "Apa beda Elf Long dan Elf Coaster?",
    a: "Elf Long memiliki bodi panjang standar mikrobus, sedangkan Elf Coaster memiliki bodi yang lebih lebar, plafon lebih tinggi, serta lorong tengah (aisle) yang lebih lega, sehingga pergerakan penumpang di dalam kabin jauh lebih leluasa.",
    badge: "Perbandingan Model",
  },
  {
    q: "Untuk rombongan 19 orang sebaiknya pilih armada apa?",
    a: "Pilihan terbaik adalah Isuzu Elf Long 19 Seat atau Elf Long Euro4 (21 Seat). Jika rombongan membawa banyak koper besar (misalnya untuk study tour atau carter luar kota), Elf Long Euro4 atau Elf Coaster memberikan ruang ekstra di bagian bagasi belakang.",
    badge: "Rekomendasi Armada",
  },
  {
    q: "Berapa DP sewa Elf dan kapan harus pelunasan?",
    a: "SOP pemesanan resmi: Uang muka (DP) sebesar 30% dari total sewa untuk mengunci jadwal armada. Pelunasan sisa biaya diselesaikan maksimal pada H-3 (3 hari sebelum berangkat). Data & kontak driver dibagikan pada H-1.",
    badge: "SOP Pembayaran",
  },
  {
    q: "Apakah Elf bisa jemput di Stasiun Whoosh Tegalluar / Padalarang?",
    a: "Bisa sekali. Kami melayani penjemputan langsung di Stasiun Kereta Cepat Whoosh Tegalluar (Gedebage) maupun Stasiun Padalarang, Bandara Kertajati (KJT), Bandara Soetta / Halim, serta seluruh hotel di Bandung.",
    badge: "Titik Penjemputan",
  },
];

export function AeoAnswerSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-22 border-t border-[#DCE5F0]">
      <div className="site-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1237B8]/20 bg-[#F1F6FF] px-4 py-1 text-xs font-bold text-[#1237B8]">
            <Sparkles className="size-3.5 text-[#1237B8]" />
            Informasi Praktis &amp; Tanya Jawab Langsung
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Pertanyaan Populer Seputar <span className="text-[#1237B8]">Sewa Elf Bandung</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-medium text-[#475569]">
            Fakta langsung, tarif transparan, dan panduan kapasitas untuk membantu Anda memilih armada rombongan yang tepat.
          </p>
        </div>

        {/* Quick Direct Answer Cards Grid */}
        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
          {aeoFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#1237B8] bg-[#F8FAFC] shadow-md ring-1 ring-[#1237B8]/15"
                    : "border-[#E2E8F0] bg-white hover:border-[#1237B8]/40 hover:bg-[#F8FAFC]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-start justify-between gap-3 p-5 sm:p-6 text-left cursor-pointer"
                >
                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-md bg-[#E8F1FF] px-2.5 py-0.5 text-[10px] font-extrabold text-[#1237B8] mb-2">
                      {faq.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <span className={`grid size-8 shrink-0 place-items-center rounded-lg bg-white border border-[#CBD5E1] text-[#1237B8] transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#1237B8] text-white border-[#1237B8]" : ""}`}>
                    <ChevronDown className="size-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm leading-relaxed text-[#334155] border-t border-[#E2E8F0]/60 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-10 rounded-2xl bg-[#101B38] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#50C710]">
              Butuh Informasi Rute &amp; Penawaran Khusus?
            </span>
            <h3 className="mt-1 text-lg sm:text-xl font-extrabold text-white">
              Konsultasikan Rute Perjalanan Rombongan Anda dengan Admin
            </h3>
            <p className="mt-1 text-xs text-slate-300">
              Admin kami standby 24 jam untuk cek jadwal unit Elf, Hiace &amp; Bus Pariwisata.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/harga-sewa-elf-bandung"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 text-xs font-bold text-white hover:bg-white/20 transition"
            >
              Lihat Tabel Harga 2026
            </Link>
            <a
              href={bookingUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-5 text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" /> Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
