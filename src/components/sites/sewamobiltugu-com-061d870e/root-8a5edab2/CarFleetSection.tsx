"use client";

import Image from "next/image";
import { ArrowRight, Bus, Car, Check, ChevronRight, Fuel, Gauge, Info, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { useState } from "react";

import { assetRoot, bookingUrl, fleetCategories, fleetItems, priceRules, type FleetCategoryKey } from "./content";

export function CarFleetSection() {
  const [activeCategory, setActiveCategory] = useState<FleetCategoryKey>("minibus");

  const currentCategoryInfo = fleetCategories.find((cat) => cat.key === activeCategory) || fleetCategories[0];
  const filteredFleet = fleetItems.filter((item) => item.category === activeCategory);

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
      className="relative scroll-mt-20 overflow-hidden bg-[#101B38] py-20 text-white lg:py-28"
    >
      {/* Background Photo with Layered Blue-Purple Gradient */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={`${assetRoot}/bandung-braga-dusk.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="scale-[1.03] object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,27,56,.99)_0%,rgba(18,55,184,.93)_35%,rgba(105,32,204,.48)_68%,rgba(16,27,56,.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(105,32,204,.35),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_75%,rgba(80,199,16,.12),transparent_25%)]" />
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[780px]">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#50C710]/40 bg-[#50C710]/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#50C710] backdrop-blur-md">
              <Sparkles className="size-3.5" /> Pilihan Armada Sewa Elf Bandung
            </p>
            <h2 className="text-[32px] font-bold leading-[1.14] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[46px]">
              Katalog Armada Lengkap &amp; Bersih
            </h2>
            <p className="mt-3 max-w-[660px] text-sm leading-6 text-slate-200 sm:text-[15px]">
              Temukan kendaraan ideal untuk rombongan wisata, family tour, acara instansi, maupun perjalanan dinas di Bandung dan sekitarnya.
            </p>
          </div>

          <a
            href={bookingUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-fit items-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-5 text-xs font-bold text-white shadow-[0_12px_26px_rgba(80,199,16,.3)] transition hover:-translate-y-0.5"
          >
            Konsultasi Armada via WA <ArrowRight className="size-4" />
          </a>
        </div>

        {/* 3 Categories Tab Bar */}
        <div className="mt-10">
          <div className="flex flex-wrap gap-2.5 rounded-2xl border border-white/15 bg-[#101B38]/80 p-2 backdrop-blur-xl shadow-2xl">
            {fleetCategories.map((category) => {
              const Icon = getCategoryIcon(category.key);
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  className={`group flex flex-1 min-w-[210px] items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#1237B8] to-[#2857E8] text-white shadow-[0_10px_24px_rgba(18,55,184,.38)] border border-white/20"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid size-10 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-105 ${
                        isActive
                          ? "bg-white text-[#1237B8] shadow-sm"
                          : "bg-white/10 text-[#50C710]"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <strong className="block text-sm font-bold leading-tight text-white">
                        {category.label}
                      </strong>
                      <span className="mt-0.5 block text-[11px] text-slate-300">
                        {category.subtitle}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-[#50C710] text-white"
                        : "bg-white/15 text-slate-300"
                    }`}
                  >
                    {category.count} Unit
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Description Box */}
          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-md">
            <p className="text-xs leading-relaxed text-slate-200 sm:text-[13px]">
              <strong className="text-[#50C710] font-bold mr-1.5">
                {currentCategoryInfo.label}:
              </strong>
              {currentCategoryInfo.description}
            </p>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFleet.map((vehicle) => (
            <article
              key={vehicle.id}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-white/80 bg-white text-[#101B38] shadow-[0_18px_46px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-2 hover:border-[#50C710] hover:shadow-[0_28px_64px_rgba(18,55,184,.32)]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[1.12] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#F1F6FF_0%,#E2ECFF_52%,#C8DCFF_100%)]">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} - Sewa Elf Bandung by Amoora Group`}
                  fill
                  sizes="(min-width: 1280px) 270px, (min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1237B8]/20 to-transparent" />

                {/* Badge Left */}
                {vehicle.badge ? (
                  <span
                    className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[9px] font-bold text-white shadow-sm ${
                      vehicle.isLuxury
                        ? "bg-[#6920CC]"
                        : vehicle.isPopular
                        ? "bg-[#1237B8]"
                        : "bg-[#101B38]"
                    }`}
                  >
                    <Star className="size-3 fill-current" />
                    {vehicle.badge}
                  </span>
                ) : null}

                {/* Availability Badge Right */}
                <span className="absolute right-3 top-3 rounded-lg border border-[#50C710]/30 bg-[#F2FBEA] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#50C710] shadow-xs backdrop-blur">
                  Tersedia
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[17px] font-bold leading-tight tracking-[-0.025em] text-[#101B38]">
                    {vehicle.name}
                  </h3>
                </div>

                <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-[#1237B8]">
                  <Users className="size-4 text-[#1237B8]" />
                  <span>Kapasitas: <strong className="text-[#101B38]">{vehicle.capacity}</strong></span>
                </div>

                {/* Features List */}
                <ul className="mt-3.5 space-y-1.5 border-t border-[#E2E8F0] pt-3 text-[11px] text-[#65708A]">
                  {vehicle.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Check className="size-3.5 text-[#50C710] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & Action */}
                <div className="mt-auto pt-5">
                  <div className="mb-3 flex items-baseline justify-between border-t border-[#E2E8F0] pt-3">
                    <span className="text-[11px] font-medium text-[#65708A]">Tarif Mulai</span>
                    <strong className="text-[19px] font-extrabold tracking-[-0.02em] text-[#1237B8] [font-variant-numeric:tabular-nums]">
                      {vehicle.price}
                      <span className="ml-1 text-[11px] font-medium text-[#65708A]">/12 Jam</span>
                    </strong>
                  </div>

                  <a
                    href={bookingUrl(`${vehicle.name} (${vehicle.capacity})`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] text-xs font-bold text-white shadow-[0_10px_22px_rgba(80,199,16,.24)] transition hover:-translate-y-0.5 active:scale-[0.99]"
                  >
                    <MessageCircle className="size-4" /> Booking via WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Ketentuan Harga Info Card */}
        <div id="ketentuan-harga" className="mt-14 rounded-[24px] border border-white/20 bg-[#101B38]/90 p-7 shadow-2xl backdrop-blur-xl lg:p-9">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 rounded-md bg-[#50C710]/20 px-3 py-1 text-[11px] font-bold text-[#50C710]">
                <Info className="size-3.5" /> Ketentuan Sewa &amp; Tarif
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                Ketentuan Harga Sewa Kendaraan
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-xs leading-relaxed text-slate-200">
                {priceRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-[#50C710] text-[10px] font-bold text-white">
                      ✓
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Contact & Office Box */}
            <div className="shrink-0 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md lg:w-[320px]">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#50C710]">
                Official Hotline &amp; Garasi
              </span>
              <p className="mt-2 flex items-start gap-2 text-xs text-slate-200">
                <MapPin className="size-4 shrink-0 text-[#50C710] mt-0.5" />
                Jalan Ciborelang No. 8, Cileunyi, Bandung
              </p>
              <div className="mt-3 space-y-1.5 border-t border-white/15 pt-3">
                <a
                  href="tel:6281214802420"
                  className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#50C710] transition"
                >
                  <Phone className="size-3.5 text-[#50C710]" /> 0812-1480-2420
                </a>
                <a
                  href="tel:6282215452230"
                  className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#50C710] transition"
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
