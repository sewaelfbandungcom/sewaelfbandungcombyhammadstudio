"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, Award, Building2, Check, CheckCircle2, Clock, Compass, HeartHandshake, Home, MapPin, Phone, ShieldCheck, Sparkles, Star, Users, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { assetRoot, bookingUrl } from "./content";
import { CtaSection } from "./CtaSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const advantages = [
  {
    icon: Wrench,
    title: "Kendaraan Bersih & Terawat",
    description: "Semua unit Isuzu Elf Long, Hiace Premio & Commuter, serta Bus Pariwisata dirawat secara berkala dengan standar mesin Euro4 prima dan kabin harum ber-AC dingin.",
    badge: "Euro4 Standard",
  },
  {
    icon: Users,
    title: "Spesialis Rombongan",
    description: "Kapasitas tempat duduk fleksibel mulai dari 5 seat keluarga, 14–21 seat minibus travel, hingga 31–59 seat Big Bus Pariwisata dalam satu manajemen profesional.",
    badge: "5 – 59 Seat",
  },
  {
    icon: Compass,
    title: "Melayani Bandung & Luar Kota",
    description: "Melayani trip wisata Bandung Raya (Lembang, Ciwidey, Pangalengan), antar kota Jawa Barat (Garut, Pangandaran, Subang), hingga carter luar provinsi Jawa–Bali.",
    badge: "Jawa & Bali",
  },
  {
    icon: Award,
    title: "Tarif Kompetitif & Transparan",
    description: "Harga sewa jelas tanpa biaya tersembunyi. Paket sewa sudah mencakup kendaraan prima, driver berpengalaman, serta bahan bakar (BBM).",
    badge: "Best Value",
  },
  {
    icon: HeartHandshake,
    title: "Driver Ramah & Profesional",
    description: "Pengemudi berlisensi resmi, ramah, sopan, menguasai medan wisata, dan selalu mengutamakan keselamatan serta kenyamanan seluruh penumpang.",
    badge: "Certified Driver",
  },
  {
    icon: Clock,
    title: "Reservasi Mudah & Cepat",
    description: "Customer service online 24 jam siap merespons kebutuhan Anda. Proses reservasi instan via WhatsApp dengan konfirmasi jadwal yang pasti.",
    badge: "24/7 Fast Response",
  },
];

const stats = [
  { value: "10+", label: "Tahun Pengalaman", sublabel: "Melayani Rombongan Wisata" },
  { value: "27+", label: "Pilihan Unit Armada", sublabel: "Elf, Hiace & Bus Pariwisata" },
  { value: "15.000+", label: "Trip Sukses", sublabel: "Wisatawan & Perusahaan" },
  { value: "99.8%", label: "Tingkat Kepuasan", sublabel: "Review Positif Pelanggan" },
];

export function AboutPage() {
  return (
    <div id="top" className="min-h-screen bg-[#F1F6FF] text-[#0F172A]">
      <SiteHeader />
      <main>
        {/* Header Hero Section */}
        <section className="relative flex min-h-[380px] sm:min-h-[440px] items-end overflow-hidden pb-10 sm:pb-14 pt-[118px] sm:pt-[140px] text-white">
          <Image
            src={`${assetRoot}/about-bandung.jpg`}
            alt="Profil Sewa Elf Bandung by Amoora Group"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-center blur-[2px]"
          />
          {/* Deeper High-Contrast Dark Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,15,30,0.97)_0%,rgba(15,23,42,0.94)_40%,rgba(18,55,184,0.80)_75%,rgba(8,15,30,0.94)_100%)]" />
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(80,199,16,0.15),transparent_40%)]" />

          <div className="site-container relative z-10 w-full">
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5 flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-300">
              <Link href="/" className="flex items-center gap-1.5 transition hover:text-white">
                <Home className="size-3.5 text-[#50C710]" /> Beranda
              </Link>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="text-white font-bold">Tentang Kami</span>
            </nav>
            <p className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#50C710]">
              <Building2 className="size-3.5 sm:size-4" /> Profil Perusahaan &amp; Garasi
            </p>
            <h1 className="mt-2.5 sm:mt-3.5 max-w-[780px] text-[30px] sm:text-[46px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.045em] text-white drop-shadow-md">
              Tentang <span className="text-[#50C710]">Sewa Elf Bandung</span> by Amoora Group
            </h1>
            <p className="mt-3 sm:mt-4 max-w-[640px] text-xs sm:text-sm leading-relaxed text-slate-100 font-medium sm:leading-7">
              Mitra transportasi rombongan terpercaya di Bandung. Menghadirkan armada Elf, Hiace, dan Bus Pariwisata prima untuk perjalanan wisata, keluarga, instansi, dan dinas.
            </p>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold text-white">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <CheckCircle2 className="size-3.5 sm:size-4 text-[#50C710]" /> Legalitas Resmi Amoora Group
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <ShieldCheck className="size-3.5 sm:size-4 text-[#50C710]" /> Garansi Unit Bersih &amp; Prima
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <MapPin className="size-3.5 sm:size-4 text-[#50C710]" /> Garasi Cileunyi Bandung
              </span>
            </div>
          </div>
        </section>

        {/* Company Profile Main Content */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 bg-white">
          <div className="site-container">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              {/* Left Text */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-md bg-[#F1F6FF] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                  <Building2 className="size-3.5" /> Profil Resmi
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#0F172A]">
                  Solusi Transportasi Rombongan <span className="text-[#1237B8]">Nyaman, Aman &amp; Profesional</span>
                </h2>
                <div className="mt-5 space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#334155]">
                  <p>
                    <strong className="font-extrabold text-[#0F172A]">Sewa Elf Bandung by Amoora Group</strong> merupakan layanan penyewaan kendaraan Elf, Hiace, dan Bus Pariwisata di Bandung dan sekitarnya yang hadir untuk memberikan solusi transportasi yang <strong className="text-[#1237B8]">nyaman, aman, praktis, dan terpercaya</strong> untuk berbagai kebutuhan perjalanan.
                  </p>
                  <p>
                    Kami melayani kebutuhan sewa Elf untuk wisata, study tour, perjalanan keluarga, gathering perusahaan, ziarah, acara komunitas, pernikahan, hingga perjalanan dinas luar kota. Dengan kapasitas penumpang yang sesuai untuk perjalanan kelompok, kendaraan Elf dan Hiace menjadi pilihan tepat bagi keluarga, perusahaan, sekolah, komunitas, maupun wisatawan yang membutuhkan transportasi bersama dalam satu kendaraan tanpa repot menggunakan beberapa mobil pribadi.
                  </p>
                  <p>
                    <strong className="font-extrabold text-[#0F172A]">Sewa Elf Bandung – by Amoora Group</strong> berkomitmen memberikan pelayanan terbaik dengan proses pemesanan yang mudah, harga kompetitif, dan pilihan layanan yang dapat disesuaikan dengan kebutuhan pelanggan.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <a
                    href={bookingUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(80,199,16,.28)] transition hover:-translate-y-0.5 active:scale-98 cursor-pointer"
                  >
                    <WhatsappLogoIcon className="size-5" weight="fill" />
                    Konsultasi Jadwal via WhatsApp
                  </a>
                  <Link
                    href="/armada"
                    className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#DCE5F0] bg-[#F8FAFC] hover:bg-[#F1F6FF] px-5 text-sm font-bold text-[#1237B8] transition hover:-translate-y-0.5 active:scale-98 cursor-pointer"
                  >
                    Lihat Pilihan Armada <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Right Image Showcase */}
              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#DCE5F0] bg-slate-900 shadow-[0_24px_60px_rgba(18,55,184,.14)]">
                  <Image
                    src="/frontage.jpg"
                    alt="Garasi dan Armada Sewa Elf Bandung by Amoora Group"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/95 p-4 backdrop-blur-md text-[#0F172A] shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#1237B8]">Garasi Utama Bandung</span>
                        <strong className="text-xs sm:text-sm font-extrabold text-[#0F172A]">Jl. Ciborelang No. 8, Cileunyi, Bandung</strong>
                      </div>
                      <span className="rounded-full bg-[#50C710] px-2.5 py-1 text-[10px] font-extrabold text-white">27+ Unit Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="relative bg-[#101B38] py-12 text-white">
          <div className="site-container">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <strong className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#50C710] [font-variant-numeric:tabular-nums]">
                    {stat.value}
                  </strong>
                  <span className="mt-2 text-sm sm:text-base font-bold text-white">{stat.label}</span>
                  <span className="mt-0.5 text-xs text-slate-300">{stat.sublabel}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 Keunggulan Utama (from Markdown) */}
        <section className="relative py-14 sm:py-20 lg:py-24 bg-[#F1F6FF]">
          <div className="site-container">
            <div className="text-center max-w-[700px] mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#E8F1FF] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                <Star className="size-3.5 fill-[#1237B8]" /> Mengapa Memilih Kami
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Keunggulan Layanan Sewa Elf Bandung
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#334155]">
                Standar operasional prima yang kami terapkan untuk memastikan perjalanan rombongan Anda selalu aman, tepat waktu, dan berkesan.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              {advantages.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <div
                    key={idx}
                    className="group flex flex-col justify-between rounded-[22px] border border-[#DCE5F0] bg-white p-6 shadow-[0_10px_30px_rgba(18,55,184,.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1237B8]/40 hover:shadow-[0_20px_50px_rgba(18,55,184,.14)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="grid size-12 place-items-center rounded-2xl bg-[#E8F1FF] text-[#1237B8] shadow-2xs group-hover:scale-105 transition-transform">
                          <Icon className="size-6" />
                        </span>
                        <span className="rounded-full bg-[#F2FBEA] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#2e8807] border border-[#50C710]/30">
                          {adv.badge}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-extrabold text-[#0F172A] tracking-[-0.02em]">
                        {adv.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#334155]">
                        {adv.description}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-[#E2E8F0] pt-3 flex items-center gap-1.5 text-xs font-bold text-[#1237B8]">
                      <CheckCircle2 className="size-4 text-[#50C710]" />
                      <span>Standar Amoora Group Terjamin</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Rich Interactive CTA Section */}
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
