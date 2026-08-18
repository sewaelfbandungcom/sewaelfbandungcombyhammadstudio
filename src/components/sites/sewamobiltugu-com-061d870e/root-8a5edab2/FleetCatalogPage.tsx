"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, CheckCircle2, Home, MapPin, ShieldCheck, Users, Bus, Car, Sparkles, Phone, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { assetRoot, bookingUrl, fleetCategories, fleetItems, type FleetCategoryKey } from "./content";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type FleetKind = "car" | "motor";

export function FleetCatalogPage({ kind }: { kind: FleetKind }) {
  const [selectedCat, setSelectedCat] = useState<FleetCategoryKey>(kind === "motor" ? "bus" : "minibus");

  const currentCategory = fleetCategories.find((c) => c.key === selectedCat) || fleetCategories[0];
  const items = fleetItems.filter((item) => item.category === selectedCat);

  const getCategoryIcon = (key: FleetCategoryKey) => {
    switch (key) {
      case "minibus":
        return Users;
      case "bus":
        return Bus;
      case "mobil":
        return Car;
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#F1F6FF] text-[#0F172A]">
      <SiteHeader />
      <main>
        {/* Header Hero - Optimized for Mobile & Desktop */}
        <section className="relative flex min-h-[380px] sm:min-h-[440px] items-end overflow-hidden pb-10 sm:pb-14 pt-[118px] sm:pt-[140px] text-white">
          <Image
            src={`${assetRoot}/bandung-gedung-sate.jpg`}
            alt="Katalog Armada Sewa Elf Bandung"
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
              <span className="text-white font-bold">Katalog Armada</span>
            </nav>
            <p className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#50C710]">
              <MapPin className="size-3.5 sm:size-4" /> Katalog Lengkap Sewa Elf Bandung
            </p>
            <h1 className="mt-2.5 sm:mt-3.5 max-w-[680px] text-[30px] sm:text-[46px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.045em] text-white drop-shadow-md">
              Daftar Semua <span className="text-[#50C710]">Armada</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-[590px] text-xs sm:text-sm leading-relaxed text-slate-100 font-medium sm:leading-7">
              Tersedia 3 kategori utama: Minibus / Travel (Elf &amp; Hiace), Bus Pariwisata (Medium &amp; Big Bus), serta Mobil Pribadi &amp; Keluarga untuk kenyamanan Anda.
            </p>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold text-white">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <CheckCircle2 className="size-3.5 sm:size-4 text-[#50C710]" /> Armada Euro4 Prima
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <ShieldCheck className="size-3.5 sm:size-4 text-[#50C710]" /> Bersih, Wangi &amp; Ber-AC
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <MapPin className="size-3.5 sm:size-4 text-[#50C710]" /> Penjemputan Tepat Waktu
              </span>
            </div>
          </div>
        </section>

        {/* Catalog Content */}
        <section className="catalog-atmosphere relative overflow-hidden py-10 sm:py-16 lg:py-20">
          <div className="site-container relative">
            {/* Category Filter Tabs - Smooth Horizontal Scroller on Mobile */}
            <div className="flex gap-2.5 overflow-x-auto pb-2 sm:pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {fleetCategories.map((cat) => {
                const Icon = getCategoryIcon(cat.key);
                const isActive = selectedCat === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCat(cat.key)}
                    className={`flex shrink-0 sm:flex-1 items-center justify-between gap-3 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#1237B8] text-white shadow-md shadow-[#1237B8]/25"
                        : "border border-[#DCE5F0] bg-white text-[#334155] hover:border-[#1237B8] hover:bg-[#F1F6FF] hover:text-[#0F172A]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`size-4 sm:size-4.5 ${isActive ? "text-[#50C710]" : "text-[#1237B8]"}`} />
                      <span className="whitespace-nowrap">{cat.label}</span>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                        isActive ? "bg-[#50C710] text-white" : "bg-[#F1F6FF] text-[#1237B8]"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Category Info Header */}
            <div className="mt-4 sm:mt-6 rounded-2xl border border-[#DCE5F0] bg-white p-4 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                <span>Kategori Terpilih</span>
              </div>
              <h2 className="mt-1 text-lg sm:text-2xl font-extrabold tracking-tight text-[#0F172A]">
                {currentCategory.label} <span className="text-xs sm:text-sm font-bold text-[#64748B]">({currentCategory.subtitle})</span>
              </h2>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#334155]">
                {currentCategory.description}
              </p>
            </div>

            {/* Vehicle Grid - Clean, Beautiful Touch Cards on Mobile */}
            <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
              {items.map((vehicle) => (
                <article
                  key={vehicle.id}
                  className="group flex flex-col overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#DCE5F0] bg-white shadow-[0_10px_30px_rgba(18,55,184,.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(18,55,184,.14)]"
                >
                  {/* Vehicle Image Container */}
                  <div className="relative aspect-[16/11] sm:aspect-[1.1] overflow-hidden bg-[radial-gradient(circle_at_50%_34%,#F1F6FF_0%,#E2ECFF_48%,#C8DCFF_100%)]">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} Sewa Elf Bandung`}
                      fill
                      sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw"
                      className="object-cover hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-900/30 to-transparent" />
                    {vehicle.badge ? (
                      <span
                        className={`absolute left-3 top-3 rounded-lg px-2.5 py-1 text-[9px] font-bold text-white shadow-xs ${
                          vehicle.isLuxury ? "bg-[#6920CC]" : "bg-[#1237B8]"
                        }`}
                      >
                        {vehicle.badge}
                      </span>
                    ) : null}
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg border border-white/80 bg-[#F2FBEA] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.06em] text-[#2e8807] shadow-xs backdrop-blur">
                      <span className="size-1.5 rounded-full bg-[#50C710]" /> Ready
                    </span>
                  </div>

                  {/* Vehicle Details */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="text-[15px] sm:text-[17px] font-extrabold tracking-[-0.025em] text-[#0F172A] leading-snug">
                      {vehicle.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#1237B8]">
                      <Users className="size-3.5 sm:size-4 text-[#1237B8] shrink-0" />
                      <span>Kapasitas: <strong className="text-[#0F172A]">{vehicle.capacity}</strong></span>
                    </div>

                    <div className="mt-4 border-t border-[#E2E8F0] pt-3 sm:pt-4">
                      <span className="block text-[10px] font-semibold text-[#64748B]">Tarif Dalam Kota (12 Jam / PP)</span>
                      <strong className="mt-0.5 block text-lg sm:text-xl font-extrabold tracking-[-0.02em] text-[#1237B8] [font-variant-numeric:tabular-nums]">
                        {vehicle.price}
                      </strong>
                    </div>

                    <a
                      href={bookingUrl(`${vehicle.name} (${vehicle.capacity})`)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Pesan ${vehicle.name} via WhatsApp`}
                      className="mt-4 flex h-11 sm:h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] text-xs sm:text-sm font-bold text-white shadow-[0_10px_22px_rgba(80,199,16,.25)] transition hover:-translate-y-0.5 active:scale-98 cursor-pointer"
                    >
                      <WhatsappLogoIcon className="size-[18px] sm:size-5" weight="fill" />
                      Pesan via WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom CTA Banner */}
            <div className="relative mt-10 sm:mt-14 overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#101B38] p-6 sm:p-10 lg:p-12 text-white shadow-[0_24px_58px_rgba(18,55,184,.2)] lg:flex lg:items-center lg:justify-between">
              <Image
                src={`${assetRoot}/bandung-braga-dusk.jpg`}
                alt=""
                fill
                sizes="1176px"
                className="object-cover object-center opacity-25"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,27,56,.98)_0%,rgba(18,55,184,.88)_62%,rgba(40,87,232,.72)_100%)]" />
              <div className="relative max-w-[650px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#50C710]">
                  Sewa Elf Bandung by Amoora Group
                </p>
                <h2 className="mt-1.5 text-xl sm:text-2xl lg:text-[32px] font-extrabold tracking-[-0.04em] leading-tight">
                  Siap Menjelajahi Bandung Bersama Rombongan?
                </h2>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-200">
                  Pilih kendaraan favorit Anda dan lakukan reservasi cepat via WhatsApp sekarang.
                </p>
              </div>
              <a
                href={bookingUrl()}
                target="_blank"
                rel="noreferrer"
                className="relative mt-5 sm:mt-6 inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(80,199,16,.28)] transition hover:-translate-y-0.5 lg:mt-0 cursor-pointer"
              >
                <WhatsappLogoIcon className="size-5" weight="fill" />
                Hubungi Kami <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
