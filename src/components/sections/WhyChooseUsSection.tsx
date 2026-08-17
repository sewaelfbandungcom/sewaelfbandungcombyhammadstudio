"use client";

import React from "react";
import {
  Sparkle,
  UsersFour,
  IdentificationBadge,
  ShieldCheck,
  Tag,
  ClockClockwise,
} from "@phosphor-icons/react";
import { WHY_CHOOSE_US } from "@/data/siteData";

export function WhyChooseUsSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Sparkle;
      case 1:
        return UsersFour;
      case 2:
        return IdentificationBadge;
      case 3:
        return ShieldCheck;
      case 4:
        return Tag;
      case 5:
      default:
        return ClockClockwise;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="site-container">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F0FF] border border-[#6920CC]/20 text-xs font-bold text-[#6920CC] uppercase tracking-wider">
            <ShieldCheck size={15} weight="fill" />
            <span>Kualitas & Komitmen Layanan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101B38] tracking-tight">
            Kenapa Memilih Sewa Elf Bandung by Amoora Group?
          </h2>
          <p className="text-sm sm:text-base text-[#65708A] leading-relaxed">
            Pengalaman bertahun-tahun dalam melayani ribuan instansi, keluarga, dan wisatawan dengan standar operasional terbaik.
          </p>
        </div>

        {/* 6 Grid Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={idx}
                className="bg-[#F1F6FF] rounded-3xl p-7 border border-blue-100/80 shadow-xs hover:shadow-lg hover:bg-white transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1237B8] text-white flex items-center justify-center mb-5 shadow-md shadow-[#1237B8]/20 group-hover:bg-[#2857E8] transition-colors">
                  <Icon size={30} weight="duotone" />
                </div>
                <h3 className="text-lg font-black text-[#101B38] mb-2 group-hover:text-[#1237B8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#65708A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
