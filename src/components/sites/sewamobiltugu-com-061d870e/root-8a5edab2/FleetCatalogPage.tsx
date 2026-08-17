"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, CheckCircle2, Gauge, Home, MapPin, MessageCircle, ShieldCheck, Snowflake, UsersRound, Users, Bus, Car } from "lucide-react";
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

  return (
    <div id="top" className="min-h-screen bg-[#F1F6FF] text-[#101B38]">
      <SiteHeader />
      <main>
        {/* Header Hero */}
        <section className="relative flex min-h-[440px] items-end overflow-hidden pb-14 pt-[148px] text-white sm:min-h-[480px] lg:pb-16">
          <Image
            src={`${assetRoot}/bandung-gedung-sate.jpg`}
            alt="Katalog Armada Sewa Elf Bandung"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,27,56,.98)_0%,rgba(18,55,184,.89)_43%,rgba(40,87,232,.38)_72%,rgba(16,27,56,.55)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_35%,rgba(105,32,204,.24),transparent_31%)]" />
          <div className="site-container relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-200">
              <Link href="/" className="flex items-center gap-2 transition hover:text-white">
                <Home className="size-3.5 text-[#50C710]" /> Beranda
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Katalog Armada</span>
            </nav>
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#50C710]">
              <MapPin className="size-4" /> Katalog Lengkap Sewa Elf Bandung
            </p>
            <h1 className="mt-4 max-w-[680px] text-[42px] font-bold leading-[1.02] tracking-[-0.055em] text-white sm:text-[54px] lg:text-[64px]">
              Daftar Semua <span className="text-[#50C710]">Armada</span>
            </h1>
            <p className="mt-5 max-w-[590px] text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
              Tersedia 3 kategori utama: Minibus / Travel (Elf &amp; Hiace), Bus Pariwisata (Medium &amp; Big Bus), serta Mobil Pribadi &amp; Keluarga untuk kenyamanan Anda.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-100">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#50C710]" /> Armada Euro4 Prima
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-[#50C710]" /> Bersih, Wangi &amp; Ber-AC
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-[#50C710]" /> Penjemputan Tepat Waktu
              </span>
            </div>
          </div>
        </section>

        {/* Catalog Content */}
        <section className="catalog-atmosphere relative overflow-hidden py-16 lg:py-24">
          <div className="site-container relative">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-3 border-b border-[#D9E4F2] pb-6">
              {fleetCategories.map((cat) => {
                const isActive = selectedCat === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCat(cat.key)}
                    className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#1237B8] text-white shadow-md shadow-[#1237B8]/25"
                        : "border border-[#DCE5F0] bg-white text-[#65708A] hover:border-[#1237B8] hover:text-[#101B38]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] ${
                        isActive ? "bg-[#50C710] text-white" : "bg-[#F1F6FF] text-[#1237B8]"
                      }`}
                    >
                      {cat.count} Unit
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Category Info Header */}
            <div className="mt-6 rounded-2xl border border-white bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-[#101B38]">
                {currentCategory.label} ({currentCategory.subtitle})
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#65708A]">
                {currentCategory.description}
              </p>
            </div>

            {/* Vehicle Grid */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
              {items.map((vehicle) => (
                <article
                  key={vehicle.id}
                  className="group flex flex-col overflow-hidden rounded-[20px] border border-white bg-white shadow-[0_14px_40px_rgba(18,55,184,.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_64px_rgba(18,55,184,.17)]"
                >
                  <div className="relative aspect-[1.08] overflow-hidden bg-[radial-gradient(circle_at_50%_34%,#F1F6FF_0%,#E2ECFF_48%,#C8DCFF_100%)]">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} Sewa Elf Bandung`}
                      fill
                      sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw"
                      className="object-cover hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1237B8]/20 to-transparent" />
                    {vehicle.badge ? (
                      <span
                        className={`absolute left-3 top-3 rounded-lg px-2.5 py-1.5 text-[9px] font-bold text-white shadow-sm ${
                          vehicle.isLuxury ? "bg-[#6920CC]" : "bg-[#1237B8]"
                        }`}
                      >
                        {vehicle.badge}
                      </span>
                    ) : null}
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg border border-white/70 bg-[#F2FBEA] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.06em] text-[#50C710] shadow-xs backdrop-blur">
                      <span className="size-1.5 rounded-full bg-[#50C710]" /> Tersedia
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[17px] font-bold tracking-[-0.025em] text-[#101B38]">
                      {vehicle.name}
                    </h3>
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-[#1237B8]">
                      <Users className="size-4 text-[#1237B8]" />
                      <span>Kapasitas: <strong className="text-[#101B38]">{vehicle.capacity}</strong></span>
                    </div>

                    <div className="mt-5 border-t border-[#E2E8F0] pt-4">
                      <span className="block text-[10px] text-[#65708A]">Tarif Dalam Kota (12 Jam)</span>
                      <strong className="mt-1 block text-[19px] font-extrabold tracking-[-0.02em] text-[#1237B8] [font-variant-numeric:tabular-nums]">
                        {vehicle.price}
                      </strong>
                    </div>

                    <a
                      href={bookingUrl(`${vehicle.name} (${vehicle.capacity})`)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Pesan ${vehicle.name} via WhatsApp`}
                      className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] text-xs font-bold text-white shadow-[0_10px_22px_rgba(80,199,16,.22)] transition hover:-translate-y-0.5"
                    >
                      <WhatsappLogoIcon className="size-[18px]" weight="fill" />
                      Pesan via WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom CTA Banner */}
            <div className="relative mt-12 overflow-hidden rounded-[24px] bg-[#101B38] px-7 py-9 text-white shadow-[0_24px_58px_rgba(18,55,184,.2)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12">
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
                <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-[32px]">
                  Siap Menjelajahi Bandung Bersama Rombongan?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Pilih kendaraan favorit Anda dan lakukan reservasi cepat via WhatsApp.
                </p>
              </div>
              <a
                href={bookingUrl()}
                target="_blank"
                rel="noreferrer"
                className="relative mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(80,199,16,.28)] transition hover:-translate-y-0.5 lg:mt-0"
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
