"use client";

import React from "react";
import { UsersThree, Clock, ShieldCheck, ThumbsUp } from "@phosphor-icons/react";

export function StatsBar() {
  const stats = [
    {
      icon: UsersThree,
      value: "5.000+",
      label: "Rombongan Terlayani",
      sub: "Wisata, Kantor, Sekolah, & Keluarga",
      color: "text-[#1237B8]",
      bg: "bg-[#F1F6FF]",
    },
    {
      icon: Clock,
      value: "99.8%",
      label: "Ketepatan Waktu Penjemputan",
      sub: "SOP Driver Siap H-1 Sebelum Berangkat",
      color: "text-[#50C710]",
      bg: "bg-[#F2FBEA]",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Armada Euro4 Prima",
      sub: "Uji KIR & Servis Rutin Terjadwal",
      color: "text-[#6920CC]",
      bg: "bg-[#F5F0FF]",
    },
    {
      icon: ThumbsUp,
      value: "4.9 / 5.0",
      label: "Rating Kepuasan Tamu",
      sub: "Pelayanan Ramah & Pengemudi Santun",
      color: "text-[#2857E8]",
      bg: "bg-[#F1F6FF]",
    },
  ];

  return (
    <section className="bg-white py-10 border-y border-blue-100/80">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-4 rounded-2xl transition-all hover:bg-[#F1F6FF]/60"
              >
                <div
                  className={`p-3.5 rounded-2xl ${stat.bg} ${stat.color} shadow-sm shrink-0`}
                >
                  <Icon size={32} weight="duotone" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#101B38] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-800 mt-0.5">
                    {stat.label}
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5 hidden sm:block">
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
