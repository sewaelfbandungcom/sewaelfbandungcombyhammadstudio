"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, Bus, Car, Check, Home, MapPin, MessageCircle, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { assetRoot, bookingUrl, fleetCategories, fleetItems, type FleetCategoryKey } from "./content";
import { CtaSection } from "./CtaSection";
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
        {/* Header Hero - Compact & Clean */}
        <section className="relative flex min-h-[280px] sm:min-h-[340px] items-end overflow-hidden pb-8 sm:pb-10 pt-[116px] sm:pt-[136px] text-white">
          <Image
            src={`${assetRoot}/bandung-gedung-sate.jpg`}
            alt="Katalog Armada Sewa Elf Bandung"
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
              <span className="text-white font-bold">Katalog Armada</span>
            </nav>
            <h1 className="text-[30px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white">
              Daftar Semua <span className="text-[#50C710]">Armada</span>
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-200">
              Harga berlaku untuk penjemputan Bandung Kota (12 Jam Dalam Kota &amp; 18 Jam Luar Kota)
            </p>
          </div>
        </section>

        {/* Catalog Content */}
        <section className="catalog-atmosphere relative overflow-hidden py-8 sm:py-12 lg:py-16">
          <div className="site-container relative">
            {/* Category Filter Tabs */}
            <div className="flex gap-2.5 overflow-x-auto pb-2 sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {fleetCategories.map((cat) => {
                const Icon = getCategoryIcon(cat.key);
                const isActive = selectedCat === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCat(cat.key)}
                    className={`flex shrink-0 sm:flex-1 items-center justify-between gap-3 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
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
                      {cat.count} Unit
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Vehicle Grid */}
            <div className="mt-6 sm:mt-8 grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5">
              {items.map((vehicle) => (
                <article
                  key={vehicle.id}
                  className="group flex flex-col overflow-hidden rounded-[22px] border border-white bg-white text-[#0F172A] shadow-[0_12px_32px_rgba(18,55,184,.09)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1237B8]/40 hover:shadow-[0_24px_50px_rgba(18,55,184,.18)]"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-[1.14] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#F1F6FF_0%,#E2ECFF_52%,#C8DCFF_100%)] sm:aspect-[1.12]">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} - Sewa Elf Bandung by Amoora Group`}
                      fill
                      sizes="(min-width: 1280px) 270px, (min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
              ))}
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
