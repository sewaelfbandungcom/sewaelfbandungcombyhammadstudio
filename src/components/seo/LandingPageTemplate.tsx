"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock,
  HelpCircle,
  Home,
  Info,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { LandingPageData, SEO_LANDING_PAGES } from "@/data/seoLandingPages";
import { SiteHeader } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/SiteFooter";

export function LandingPageTemplate({ data }: { data: LandingPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getWaUrl = () => {
    return `https://wa.me/6281214802420?text=${encodeURIComponent(data.ctaMessage)}`;
  };

  const getCategoryLabel = () => {
    switch (data.category) {
      case "price":
        return "Daftar Tarif";
      case "unit":
        return "Pilihan Armada";
      case "route":
        return "Rute & Destinasi";
      case "service":
        return "Layanan Khusus";
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#F1F6FF] text-[#0F172A]">
      <SiteHeader />

      <main className="pt-[106px] sm:pt-[116px]">
        {/* Breadcrumb Bar */}
        <div className="border-b border-[#DCE5F0] bg-white/80 backdrop-blur-md">
          <div className="site-container py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
              <Link href="/" className="flex items-center gap-1 hover:text-[#1237B8] transition">
                <Home className="size-3.5 text-[#1237B8]" /> Beranda
              </Link>
              <span>/</span>
              <span className="text-[#64748B]">{getCategoryLabel()}</span>
              <span>/</span>
              <span className="text-[#0F172A] font-bold truncate max-w-[200px] sm:max-w-none">
                {data.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section with High-Impact Semantic H1 & Quick Answer AEO Box */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F1F6FF] py-8 sm:py-12 lg:py-14 border-b border-[#DCE5F0]">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Heading & AEO Direct Answer */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#1237B8]/20 bg-[#E8F1FF] px-3.5 py-1 text-xs font-extrabold text-[#1237B8]">
                  <span className="size-2 rounded-full bg-[#50C710] animate-pulse" />
                  {data.badge}
                </div>

                <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.035em] text-[#0F172A] leading-tight">
                  {data.h1}
                </h1>

                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-[#475569]">
                  {data.heroSubtitle}
                </p>

                {/* AEO Direct Answer Box (Google Answer Engine & ChatGPT Search Optimized) */}
                <div className="mt-5 rounded-2xl border-2 border-[#1237B8]/25 bg-[#F8FAFC] p-4.5 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#1237B8] mb-1.5">
                    <Sparkles className="size-4 text-[#1237B8]" />
                    <span>Quick Answer / Fakta Utama</span>
                  </div>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#1E293B] font-medium">
                    {data.quickAnswer}
                  </p>
                </div>

                {/* Key Spec Badges */}
                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                  <div className="flex items-center gap-2 rounded-xl bg-white border border-[#CBD5E1] px-3.5 py-2 shadow-2xs">
                    <Users className="size-4 text-[#1237B8]" />
                    <span>Kapasitas: <strong className="text-[#0F172A]">{data.capacityRange}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white border border-[#CBD5E1] px-3.5 py-2 shadow-2xs">
                    <span className="size-2 rounded-full bg-[#50C710]" />
                    <span>Tarif Mulai: <strong className="text-[#2e8807] font-extrabold">{data.priceStarting}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white border border-[#CBD5E1] px-3.5 py-2 shadow-2xs">
                    <Clock className="size-4 text-[#1237B8]" />
                    <span>Durasi: <strong className="text-[#0F172A]">12 Jam (Kota) / 18 Jam (Luar)</strong></span>
                  </div>
                </div>

                {/* Main Action CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3.5">
                  <a
                    href={getWaUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(80,199,16,.3)] transition hover:-translate-y-0.5 active:scale-98 cursor-pointer"
                  >
                    <MessageCircle className="size-5" /> Pesan via WhatsApp
                  </a>
                  <a
                    href="tel:6281214802420"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#1237B8]/30 bg-white hover:bg-[#F1F6FF] px-5 text-sm font-bold text-[#1237B8] transition"
                  >
                    <Phone className="size-4" /> 0812-1480-2420
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-[24px] border border-white bg-white p-3 shadow-[0_20px_50px_rgba(18,55,184,.12)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#E8F1FF]">
                    <Image
                      src={data.featuredImage}
                      alt={`${data.title} - Sewa Elf Bandung by Amoora Group`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 450px, 100vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute right-3 top-3 rounded-lg border border-[#50C710]/40 bg-[#F2FBEA] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#2e8807] shadow-xs">
                      Armada Siap Pakai
                    </div>
                  </div>

                  {/* Highlights Bullet Under Photo */}
                  <div className="mt-3.5 space-y-1.5 p-1 text-xs">
                    {data.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[#334155]">
                        <Check className="size-4 shrink-0 text-[#50C710] mt-0.5 stroke-[2.5]" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table Section */}
        <section className="py-10 sm:py-14 bg-white border-b border-[#DCE5F0]">
          <div className="site-container">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md bg-[#F2FBEA] px-3 py-1 text-[11px] font-extrabold text-[#2e8807]">
                <Info className="size-3.5" /> Transparansi Tarif
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A]">
                Tabel Tarif &amp; Pilihan Kapasitas
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#475569]">
                Harga resmi berlaku untuk penjemputan area Bandung Kota. Sudah termasuk unit kendaraan dan jasa sopir profesional.
              </p>
            </div>

            {/* Responsive Table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-[#DCE5F0] bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#101B38] text-white">
                    <tr>
                      <th className="px-4 py-3.5 font-bold">Tipe Unit / Layanan</th>
                      <th className="px-4 py-3.5 font-bold">Kapasitas</th>
                      <th className="px-4 py-3.5 font-bold text-center">Dalam Kota (12 Jam)</th>
                      <th className="px-4 py-3.5 font-bold text-center">Luar Kota (18 Jam)</th>
                      <th className="px-4 py-3.5 font-bold">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-[#1E293B]">
                    {data.pricingTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                        <td className="px-4 py-3.5 font-bold text-[#0F172A]">{row.unit}</td>
                        <td className="px-4 py-3.5 font-semibold text-[#1237B8]">{row.capacity}</td>
                        <td className="px-4 py-3.5 text-center font-extrabold text-[#2e8807]">{row.dalamKota}</td>
                        <td className="px-4 py-3.5 text-center font-extrabold text-[#1237B8]">{row.luarKota}</td>
                        <td className="px-4 py-3.5 text-xs text-[#64748B]">{row.notes || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#64748B]">
              <span>* Durasi dalam kota maksimal 12 jam, luar kota maksimal 18 jam (pada hari yang sama).</span>
              <a href={getWaUrl()} target="_blank" rel="noreferrer" className="font-bold text-[#1237B8] hover:underline">
                Butuh paket All-In (BBM + Tol + Parkir)? Klik disini untuk konsultasi via WA &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Vehicle Specs / Popular Destinations */}
        {data.vehicleSpecs && data.vehicleSpecs.length > 0 ? (
          <section className="py-10 sm:py-14 bg-[#F1F6FF] border-b border-[#DCE5F0]">
            <div className="site-container">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                Spesifikasi &amp; Fasilitas Armada
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#475569]">
                Standar kenyamanan dan keamanan berlisensi pariwisata by Amoora Group.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {data.vehicleSpecs.map((spec, i) => (
                  <div key={i} className="rounded-xl border border-white bg-white p-4 shadow-2xs">
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#1237B8]">
                      {spec.label}
                    </span>
                    <strong className="mt-1 block text-xs sm:text-sm font-bold text-[#0F172A]">
                      {spec.value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {data.popularDestinations && data.popularDestinations.length > 0 ? (
          <section className="py-10 sm:py-14 bg-[#F1F6FF] border-b border-[#DCE5F0]">
            <div className="site-container">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                Spot Wisata &amp; Destinasi Populer di Rute Ini
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#475569]">
                Rute dan waktu singgah fleksibel sesuai keinginan rombongan Anda.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.popularDestinations.map((dest, i) => (
                  <div key={i} className="rounded-2xl border border-white bg-white p-5 shadow-2xs">
                    <div className="inline-flex items-center gap-1 rounded-md bg-[#E8F1FF] px-2.5 py-0.5 text-[10px] font-extrabold text-[#1237B8] mb-2">
                      <Clock className="size-3" /> {dest.duration}
                    </div>
                    <h3 className="text-sm font-bold text-[#0F172A]">{dest.name}</h3>
                    <p className="mt-1 text-xs text-[#475569] leading-relaxed">{dest.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Who is it for & Inclusions */}
        <section className="py-10 sm:py-14 bg-white border-b border-[#DCE5F0]">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Cocok Untuk Siapa */}
              <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFC] p-6">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                  Cocok untuk Kebutuhan Apa?
                </h3>
                <p className="mt-1 text-xs text-[#475569]">
                  Layanan ini didesain ideal untuk kelompok rombongan:
                </p>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                  {data.whoIsItFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[#1E293B]">
                      <span className="grid size-4.5 shrink-0 place-items-center rounded-full bg-[#1237B8] text-[10px] font-bold text-white mt-0.5">
                        ✓
                      </span>
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Include vs Exclude */}
              <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFC] p-6">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                  Ketentuan Fasilitas (Include &amp; Exclude)
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs">
                  <div>
                    <span className="block font-bold text-[#2e8807] mb-2 flex items-center gap-1.5">
                      <Check className="size-4" /> Sudah Termasuk (Include):
                    </span>
                    <ul className="space-y-1.5 text-[#334155]">
                      {data.included.map((inc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#50C710] font-bold">•</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="block font-bold text-[#DC2626] mb-2 flex items-center gap-1.5">
                      <X className="size-4" /> Belum Termasuk (Exclude):
                    </span>
                    <ul className="space-y-1.5 text-[#334155]">
                      {data.excluded.map((exc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#DC2626] font-bold">•</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step SOP Pemesanan */}
        <section className="py-10 sm:py-14 bg-[#F1F6FF] border-b border-[#DCE5F0]">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                SOP Pemesanan Resmi
              </span>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A]">
                4 Langkah Mudah Reservasi Armada
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.bookingSop.map((sop) => (
                <div key={sop.step} className="rounded-2xl border border-white bg-white p-5 shadow-2xs">
                  <span className="grid size-8 place-items-center rounded-xl bg-[#1237B8] text-xs font-extrabold text-white">
                    {sop.step}
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-[#0F172A]">{sop.title}</h3>
                  <p className="mt-1 text-xs text-[#475569] leading-relaxed">{sop.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section with Entity Answer */}
        <section className="py-10 sm:py-14 bg-white border-b border-[#DCE5F0]">
          <div className="site-container max-w-3xl">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#475569]">
                Jawaban praktis seputar pemesanan, kapasitas, dan tarif.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {data.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="rounded-xl border border-[#DCE5F0] bg-[#F8FAFC] overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-3 p-4 text-left font-bold text-xs sm:text-sm text-[#0F172A] cursor-pointer hover:text-[#1237B8]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`size-4 shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-[#1237B8]" : "text-[#64748B]"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs sm:text-[13px] leading-relaxed text-[#334155] border-t border-[#E2E8F0]/60">
                        <p className="pt-2">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Related Slugs / Internal Linking Hub */}
        {data.relatedSlugs && data.relatedSlugs.length > 0 ? (
          <section className="py-8 sm:py-10 bg-[#F1F6FF] border-b border-[#DCE5F0]">
            <div className="site-container">
              <span className="block text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                Halaman &amp; Pilihan Terkait
              </span>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {data.relatedSlugs.map((relSlug) => {
                  const relData = SEO_LANDING_PAGES[relSlug];
                  if (!relData) return null;
                  return (
                    <Link
                      key={relSlug}
                      href={`/${relSlug}`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2 text-xs font-semibold text-[#1E293B] shadow-2xs hover:border-[#1237B8] hover:bg-[#F1F6FF] hover:text-[#1237B8] transition"
                    >
                      <span>{relData.title}</span>
                      <ArrowRight className="size-3 text-[#1237B8]" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        {/* Final CTA Bar */}
        <section className="bg-[#101B38] py-10 sm:py-12 text-white text-center">
          <div className="site-container max-w-2xl">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Siap Menikmati Perjalanan Rombongan Tanpa Ribet?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Hubungi tim reservasi Sewa Elf Bandung by Amoora Group sekarang untuk mendapatkan unit terawat dan penawaran harga terbaik.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWaUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-7 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="size-5" /> Chat WhatsApp Sekarang
              </a>
              <a
                href="tel:6281214802420"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 px-6 text-sm font-bold text-white transition"
              >
                <Phone className="size-4" /> 0812-1480-2420
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
