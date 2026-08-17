"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bus, Car, Check, ChevronRight, Fuel, Gauge, Info, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { useState } from "react";

import { assetRoot, bookingUrl, fleetCategories, fleetItems, priceRules, type FleetCategoryKey } from "./content";

export function CarFleetSection() {
  const [activeCategory, setActiveCategory] = useState<FleetCategoryKey>("minibus");

  const currentCategoryInfo = fleetCategories.find((cat) => cat.key === activeCategory) || fleetCategories[0];
  const filteredFleet = fleetItems.filter((item) => item.category === activeCategory);

  // Show max 8 on desktop, max 4 on mobile
  const maxDesktopVisible = 8;
  const displayedFleet = filteredFleet.slice(0, maxDesktopVisible);
  const remainingCount = filteredFleet.length - maxDesktopVisible;

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
    <section
      id="armada"
      className="relative scroll-mt-20 overflow-hidden py-16 text-[#0F172A] sm:py-20 lg:py-28"
    >
      {/* Background Photo Clearly Visible with Crisp Contrast Tint */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={`${assetRoot}/bandung-braga-dusk.jpg`}
          alt="Suasana Braga Bandung - Sewa Elf Bandung"
          fill
          sizes="100vw"
          className="scale-[1.03] object-cover object-center"
        />
        {/* Balanced Light Overlay so Braga Photo is Richly Visible */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(241,246,255,0.92)_0%,rgba(241,246,255,0.85)_40%,rgba(241,246,255,0.88)_70%,rgba(241,246,255,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(18,55,184,0.12),transparent_40%)]" />
      </div>

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[780px]">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1237B8]/25 bg-white/95 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1237B8] shadow-xs backdrop-blur-md">
              <Sparkles className="size-3.5 text-[#50C710]" /> Pilihan Armada Sewa Elf Bandung
            </p>
            <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#0F172A] sm:text-[38px] lg:text-[44px]">
              Katalog Armada Lengkap &amp; Terawat
            </h2>
            <p className="mt-2.5 max-w-[660px] text-sm font-medium leading-relaxed text-[#1E293B] sm:text-[15px]">
              Temukan kendaraan ideal untuk rombongan wisata, family tour, acara instansi, maupun perjalanan dinas di Bandung dan sekitarnya.
            </p>
          </div>

          <Link
            href="/armada"
            className="inline-flex h-11 w-fit items-center gap-2 rounded-xl bg-[#1237B8] hover:bg-[#2857E8] px-5 text-xs font-bold text-white shadow-[0_10px_24px_rgba(18,55,184,.25)] transition hover:-translate-y-0.5 active:scale-98"
          >
            Buka Katalog Lengkap <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* 3 Categories Tab Bar - Optimized Horizontal Touch Scroller on Mobile */}
        <div className="mt-8 sm:mt-10">
          <div className="flex gap-2.5 overflow-x-auto pb-2 sm:pb-0 rounded-2xl border border-white/80 bg-white/95 p-2 backdrop-blur-md shadow-[0_8px_24px_rgba(18,55,184,.08)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {fleetCategories.map((category) => {
              const Icon = getCategoryIcon(category.key);
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  className={`group flex shrink-0 sm:flex-1 min-w-[210px] items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#1237B8] to-[#2857E8] text-white shadow-[0_10px_24px_rgba(18,55,184,.3)]"
                      : "text-[#334155] hover:bg-[#F1F6FF] hover:text-[#0F172A]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid size-10 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-105 ${
                        isActive
                          ? "bg-white text-[#1237B8] shadow-xs"
                          : "bg-[#F1F6FF] text-[#1237B8]"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <strong className={`block text-sm font-bold leading-tight ${isActive ? "text-white" : "text-[#0F172A]"}`}>
                        {category.label}
                      </strong>
                      <span className={`mt-0.5 block text-[11px] font-medium ${isActive ? "text-slate-100" : "text-[#475569]"}`}>
                        {category.subtitle}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${
                      isActive
                        ? "bg-[#50C710] text-white"
                        : "bg-[#F1F6FF] text-[#1237B8]"
                    }`}
                  >
                    {category.count} Unit
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Description Box */}
          <div className="mt-3.5 rounded-xl border border-white/80 bg-white/95 px-4.5 py-3.5 backdrop-blur-md shadow-xs sm:px-5 sm:py-4">
            <p className="text-xs font-normal leading-relaxed text-[#1E293B] sm:text-[13px]">
              <strong className="text-[#1237B8] font-bold mr-1.5">
                {currentCategoryInfo.label}:
              </strong>
              {currentCategoryInfo.description}
            </p>
          </div>
        </div>

        {/* Fleet Grid - Max 4 Cards on Mobile, Max 8 on Desktop */}
        <div className="mt-7 grid gap-4.5 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5">
          {displayedFleet.map((vehicle, index) => {
            const isHiddenOnMobile = index >= 4;

            return (
              <article
                key={vehicle.id}
                className={`group flex-col overflow-hidden rounded-[22px] border border-white bg-white text-[#0F172A] shadow-[0_12px_32px_rgba(18,55,184,.09)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1237B8]/40 hover:shadow-[0_24px_50px_rgba(18,55,184,.18)] ${
                  isHiddenOnMobile ? "hidden sm:flex" : "flex"
                }`}
              >
                {/* Image Frame */}
                <div className="relative aspect-[1.14] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#F1F6FF_0%,#E2ECFF_52%,#C8DCFF_100%)] sm:aspect-[1.12]">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} - Sewa Elf Bandung by Amoora Group`}
                    fill
                    sizes="(min-width: 1280px) 270px, (min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1237B8]/15 to-transparent" />

                  {/* Badge Left */}
                  {vehicle.badge ? (
                    <span
                      className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[9px] font-extrabold text-white shadow-sm ${
                        vehicle.isLuxury
                          ? "bg-[#6920CC]"
                          : vehicle.isPopular
                          ? "bg-[#1237B8]"
                          : "bg-[#0F172A]"
                      }`}
                    >
                      <Star className="size-3 fill-current" />
                      {vehicle.badge}
                    </span>
                  ) : null}

                  {/* Availability Badge Right */}
                  <span className="absolute right-3 top-3 rounded-lg border border-[#50C710]/40 bg-[#F2FBEA] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.08em] text-[#2e8807] shadow-xs backdrop-blur">
                    Tersedia
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-[17px] font-bold leading-tight tracking-[-0.025em] text-[#0F172A]">
                    {vehicle.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-[#1237B8]">
                    <Users className="size-4 text-[#1237B8]" />
                    <span>Kapasitas: <strong className="text-[#0F172A] font-extrabold">{vehicle.capacity}</strong></span>
                  </div>

                  {/* Features List with High-Contrast Dark Text */}
                  <ul className="mt-3 space-y-1.5 border-t border-[#E2E8F0] pt-2.5 text-[11px] font-medium text-[#1E293B]">
                    {vehicle.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <Check className="size-3.5 text-[#50C710] shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Action Button */}
                  <div className="mt-auto pt-4">
                    <div className="mb-3 flex items-baseline justify-between border-t border-[#E2E8F0] pt-3">
                      <span className="text-[11px] font-semibold text-[#475569]">Tarif Mulai</span>
                      <strong className="text-[19px] font-extrabold tracking-[-0.02em] text-[#1237B8] [font-variant-numeric:tabular-nums]">
                        {vehicle.price}
                        <span className="ml-1 text-[11px] font-semibold text-[#475569]">/12 Jam</span>
                      </strong>
                    </div>

                    <a
                      href={bookingUrl(`${vehicle.name} (${vehicle.capacity})`)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11.5 sm:h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] text-[13px] font-bold text-white shadow-[0_10px_22px_rgba(80,199,16,.28)] transition hover:-translate-y-0.5 active:scale-[0.99]"
                    >
                      <MessageCircle className="size-4" /> Booking via WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All / More Button tailored for mobile & desktop */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3">
          <Link
            href="/armada"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-[#1237B8]/35 bg-white px-7 text-sm font-extrabold text-[#1237B8] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1237B8] hover:text-white"
          >
            <span>
              {filteredFleet.length > 4 ? (
                <>
                  <span className="sm:hidden">Lihat Semua {filteredFleet.length} Unit {currentCategoryInfo.label}</span>
                  <span className="hidden sm:inline">
                    {remainingCount > 0
                      ? `Lihat ${remainingCount} Unit ${currentCategoryInfo.label} Lainnya di Katalog`
                      : `Lihat Seluruh 27+ Pilihan Armada di Katalog`}
                  </span>
                </>
              ) : (
                "Lihat Seluruh 27+ Pilihan Armada di Katalog"
              )}
            </span>
            <ArrowRight className="size-4 text-[#50C710]" />
          </Link>
        </div>

        {/* Ketentuan Harga Info Card - Ultra Clear High Contrast */}
        <div id="ketentuan-harga" className="mt-12 sm:mt-14 rounded-[26px] border border-white bg-white/95 p-6 shadow-[0_20px_50px_rgba(18,55,184,.10)] backdrop-blur-md sm:p-8 lg:p-9">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 rounded-md bg-[#F2FBEA] px-3 py-1 text-[11px] font-extrabold text-[#2e8807]">
                <Info className="size-3.5" /> Ketentuan Sewa &amp; Tarif
              </div>
              <h3 className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F172A]">
                Ketentuan Harga Sewa Kendaraan
              </h3>
              <ul className="mt-4 sm:mt-5 grid gap-3 sm:grid-cols-2 text-xs leading-relaxed text-[#1E293B]">
                {priceRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-[#50C710] text-[10px] font-extrabold text-white shadow-2xs">
                      ✓
                    </span>
                    <span className="text-[#0F172A] font-semibold">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Contact & Office Box */}
            <div className="shrink-0 rounded-2xl border border-[#DCE5F0] bg-[#F1F6FF] p-5 lg:w-[320px]">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#1237B8]">
                Official Hotline &amp; Garasi
              </span>
              <p className="mt-2 flex items-start gap-2 text-xs font-medium text-[#1E293B]">
                <MapPin className="size-4 shrink-0 text-[#1237B8] mt-0.5" />
                Jalan Ciborelang No. 8, Cileunyi, Bandung
              </p>
              <div className="mt-3 space-y-2 border-t border-[#DCE5F0] pt-3">
                <a
                  href="tel:6281214802420"
                  className="flex items-center gap-2 text-xs font-extrabold text-[#0F172A] hover:text-[#1237B8] transition"
                >
                  <Phone className="size-3.5 text-[#50C710]" /> 0812-1480-2420
                </a>
                <a
                  href="tel:6282215452230"
                  className="flex items-center gap-2 text-xs font-extrabold text-[#0F172A] hover:text-[#1237B8] transition"
                >
                  <Phone className="size-3.5 text-[#50C710]" /> 0822-1545-2230
                </a>
              </div>
              <a
                href={bookingUrl()}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#50C710] hover:bg-[#43aa0c] text-xs font-bold text-white shadow-md transition hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" /> Hubungi Admin Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
