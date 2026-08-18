"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, Building2, Check, CheckCircle2, Home, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { assetRoot, bookingUrl } from "./content";
import { CtaSection } from "./CtaSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const advantages = [
  { emoji: "🚐", title: "Kendaraan bersih dan terawat" },
  { emoji: "👨", title: "Cocok untuk perjalanan rombongan" },
  { emoji: "🛣️", title: "Melayani Bandung dan berbagai tujuan luar kota" },
  { emoji: "💰", title: "Harga kompetitif" },
  { emoji: "🤝", title: "Pelayanan ramah dan profesional" },
  { emoji: "📅", title: "Reservasi mudah dan fleksibel" },
];

export function AboutPage() {
  return (
    <div id="top" className="min-h-screen bg-[#F1F6FF] text-[#0F172A]">
      <SiteHeader />
      <main>
        {/* Header Hero */}
        <section className="relative flex min-h-[320px] sm:min-h-[380px] items-end overflow-hidden pb-8 sm:pb-12 pt-[116px] sm:pt-[136px] text-white">
          <Image
            src={`${assetRoot}/about-bandung.jpg`}
            alt="Profil Sewa Elf Bandung"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-center blur-[2px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,15,30,0.96)_0%,rgba(15,23,42,0.92)_40%,rgba(18,55,184,0.78)_75%,rgba(8,15,30,0.94)_100%)]" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

          <div className="site-container relative z-10 w-full">
            <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="flex items-center gap-1.5 transition hover:text-white">
                <Home className="size-3.5 text-[#50C710]" /> Beranda
              </Link>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="text-white font-bold">Tentang Kami</span>
            </nav>
            <h1 className="text-[30px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white">
              Profil <span className="text-[#50C710]">Sewa Elf Bandung</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm font-medium text-slate-200">
              Sewa Elf Bandung by Amoora Group — Solusi perjalanan rombongan yang nyaman, aman, dan terpercaya.
            </p>
          </div>
        </section>

        {/* Profil Singkat & To The Point */}
        <section className="py-10 sm:py-14 lg:py-16 bg-white">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F1F6FF] px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                  <Building2 className="size-3.5" /> Profil Singkat
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  Sewa Elf Bandung – by Amoora Group
                </h2>
                <div className="mt-4 space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#334155]">
                  <p>
                    <strong className="text-[#0F172A]">Sewa Elf Bandung</strong> merupakan layanan penyewaan kendaraan Elf di Bandung dan sekitarnya yang hadir untuk memberikan solusi transportasi yang <strong className="text-[#1237B8]">nyaman, aman, praktis, dan terpercaya</strong> untuk berbagai kebutuhan perjalanan.
                  </p>
                  <p>
                    Kami melayani kebutuhan sewa Elf untuk wisata, study tour, perjalanan keluarga, gathering perusahaan, ziarah, acara komunitas, hingga perjalanan luar kota. Dengan kendaraan yang terawat dan nyaman serta pelayanan profesional, perjalanan bersama rombongan menjadi lebih menyenangkan.
                  </p>
                  <p>
                    <strong className="text-[#0F172A]">Sewa Elf Bandung – by Amoora Group</strong> berkomitmen memberikan pelayanan terbaik dengan proses pemesanan yang mudah, harga kompetitif, dan pilihan layanan yang dapat disesuaikan dengan kebutuhan pelanggan.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={bookingUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-5 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5"
                  >
                    <WhatsappLogoIcon className="size-4" weight="fill" /> Hubungi via WhatsApp
                  </a>
                  <Link
                    href="/armada"
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-[#DCE5F0] bg-[#F8FAFC] hover:bg-[#F1F6FF] px-4 text-xs font-bold text-[#1237B8] transition hover:-translate-y-0.5"
                  >
                    Lihat Armada <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              {/* Garasi Card */}
              <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFC] p-5 sm:p-6 shadow-xs">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900 mb-4">
                  <Image
                    src="/frontage.jpg"
                    alt="Garasi Sewa Elf Bandung"
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <MapPin className="size-4 text-[#1237B8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0F172A] font-extrabold">Alamat Garasi &amp; Kantor:</strong>
                      <span className="text-[#475569]">Jalan Ciborelang No 8 Cileunyi Bandung</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-[#E2E8F0]">
                    <Phone className="size-4 text-[#50C710] shrink-0" />
                    <span className="font-extrabold text-[#0F172A]">0812 1480 2420 – 0822 1545 2230</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Keunggulan Kami (from Markdown) */}
        <section className="py-10 sm:py-14 bg-[#F1F6FF]">
          <div className="site-container">
            <h2 className="text-xl sm:text-2xl font-extrabold text-center text-[#0F172A]">
              Keunggulan Kami
            </h2>

            <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-[#DCE5F0] bg-white p-4 shadow-2xs"
                >
                  <span className="text-2xl">{adv.emoji}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A]">{adv.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rich CTA Section */}
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
