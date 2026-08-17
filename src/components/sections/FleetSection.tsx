"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  WhatsappLogo,
  CheckCircle,
  Sparkle,
  Van,
  Bus,
  Car,
  CaretRight,
  ShieldCheck,
} from "@phosphor-icons/react";
import { FLEET_UNITS, getWhatsAppBookingUrl } from "@/data/siteData";
import { FleetCategory } from "@/types/fleet";

export function FleetSection({ limit }: { limit?: number }) {
  const [activeCategory, setActiveCategory] = useState<FleetCategory>("all");

  const categories = [
    { id: "all" as FleetCategory, label: "Semua Armada", icon: Sparkle },
    { id: "microbus" as FleetCategory, label: "Elf & Hiace (14 - 21 Seat)", icon: Van },
    { id: "bus" as FleetCategory, label: "Bus Pariwisata (29 - 59 Seat)", icon: Bus },
    { id: "mpv_suv" as FleetCategory, label: "MPV & SUV Luxury (5 - 7 Seat)", icon: Car },
  ];

  const filteredUnits = FLEET_UNITS.filter((unit) => {
    if (activeCategory === "all") return true;
    return unit.category === activeCategory;
  });

  const displayUnits = limit ? filteredUnits.slice(0, limit) : filteredUnits;

  return (
    <section id="armada" className="py-16 sm:py-24 bg-[#F1F6FF]">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F0FF] border border-[#6920CC]/20 text-xs font-bold text-[#6920CC] uppercase tracking-wider">
            <Van size={15} weight="fill" />
            <span>Pilihan Armada Terlengkap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101B38] tracking-tight">
            Katalog Armada Sewa Elf & Bus Bandung
          </h2>
          <p className="text-sm sm:text-base text-[#65708A] leading-relaxed">
            Unit bersih berstandar Euro4, AC dingin merata, audio karaoke lengkap, dan dirawat secara berkala untuk kenyamanan rombongan Anda.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-[#1237B8] text-white shadow-lg shadow-[#1237B8]/25 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-[#1237B8]/40"
                }`}
              >
                <Icon size={18} weight={isActive ? "fill" : "regular"} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Header Card with Seat & Badge */}
                <div className="p-5 pb-3 border-b border-gray-100 flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-[#6920CC] bg-[#F5F0FF] px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {unit.categoryLabel}
                    </span>
                    <h3 className="text-lg font-black text-[#101B38] mt-2 group-hover:text-[#1237B8] transition-colors">
                      {unit.name}
                    </h3>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1237B8] bg-[#F1F6FF] px-2.5 py-1 rounded-lg border border-[#1237B8]/20">
                      <Users size={14} weight="bold" />
                      {unit.seats}
                    </span>
                    {unit.badge && (
                      <span className="text-[10px] font-bold text-[#50C710] bg-[#F2FBEA] px-2 py-0.5 rounded-full border border-[#50C710]/30">
                        {unit.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="px-5 pt-3">
                  <p className="text-xs text-[#65708A] leading-relaxed line-clamp-2">
                    {unit.description}
                  </p>
                </div>

                {/* Features Pill List */}
                <div className="px-5 py-4">
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Fasilitas Unggulan:
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {unit.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-gray-700">
                        <CheckCircle size={13} weight="fill" className="text-[#50C710] shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & CTA Button */}
              <div className="p-5 pt-4 bg-[#F8FAFF] border-t border-gray-100 rounded-b-3xl">
                {/* Price Display */}
                <div className="grid grid-cols-2 gap-2 mb-4 bg-white p-3 rounded-2xl border border-blue-100/70">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 block">
                      Dalam Kota (12 Jam)
                    </span>
                    <span className="text-sm sm:text-base font-black text-[#1237B8]">
                      {unit.priceDalamKota}
                    </span>
                  </div>
                  <div className="border-l border-gray-100 pl-2">
                    <span className="text-[10px] uppercase font-bold text-gray-500 block">
                      Luar Kota (18 Jam)
                    </span>
                    <span className="text-sm sm:text-base font-black text-[#101B38]">
                      {unit.priceLuarKota}
                    </span>
                  </div>
                </div>

                {/* Direct WhatsApp Booking Button */}
                <a
                  href={getWhatsAppBookingUrl({ unitName: `${unit.name} (${unit.seats})` })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-md hover:shadow-lg shadow-[#50C710]/20 transition-all"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  <span>Sewa / Booking Unit Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Fleet Link if limited */}
        {limit && limit < FLEET_UNITS.length && (
          <div className="mt-12 text-center">
            <Link
              href="/armada"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-[#1237B8] bg-white hover:bg-[#F1F6FF] border border-[#1237B8]/30 shadow-sm hover:shadow transition-all"
            >
              <span>Lihat Semua {FLEET_UNITS.length} Pilihan Armada Kami</span>
              <CaretRight size={16} weight="bold" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
