"use client";

import React from "react";
import { MapPin, WhatsappLogo, CaretRight, Compass, Sparkle } from "@phosphor-icons/react";
import { getWhatsAppBookingUrl } from "@/data/siteData";

export function DestinationsSection() {
  const destinations = [
    {
      title: "Wisata Lembang & Bandung Utara",
      spots: "Tangkuban Perahu, Floating Market, Farmhouse, The Great Asia Africa, Orchid Forest, Dusun Bambu, Cikole Lembang",
      recommended: "Elf Long 19 Seat / Hiace Premio",
      color: "border-[#1237B8]",
      tag: "Terfavorit",
    },
    {
      title: "Wisata Ciwidey & Bandung Selatan",
      spots: "Kawah Putih, Ranca Upas (Penangkaran Rusa), Glamping Lakeside Situ Patenggang, Kebun Teh Rancabali, Kawah Rengganis",
      recommended: "Elf Long 19 Seat / Bus Medium 31 Seat",
      color: "border-[#50C710]",
      tag: "Panorama Alam",
    },
    {
      title: "Wisata Pangalengan (Adrenalin & View)",
      spots: "Nimo Highland, Sunrise Point Cukul, Rafting Sungai Palayangan, Danau Situ Cileunca, Wayang Windu Panenjoan",
      recommended: "Elf Long Euro4 / Hiace Commuter",
      color: "border-[#6920CC]",
      tag: "Petualangan",
    },
    {
      title: "Wisata Garut & Subang",
      spots: "Pemandian Air Panas Ciater, D'Castello Ciater Subang, Kawah Kamojang, Darajat Pass, Cipanas Tarogong Garut",
      recommended: "Elf Long / Medium Bus Jetbus 3+",
      color: "border-[#2857E8]",
      tag: "Relaksasi Air Panas",
    },
    {
      title: "Pantai Pangandaran & Green Canyon",
      spots: "Pantai Barat/Timur Pangandaran, Body Rafting Green Canyon Cijulang, Pantai Batu Karas, Cagar Alam Pananjung",
      recommended: "Big Bus HDD / Medium Bus Long JB5",
      color: "border-[#50C710]",
      tag: "Wisata Pantai",
    },
    {
      title: "Carter Antar Jemput Bandara & Luar Kota",
      spots: "Bandara Soetta CGK / Halim Jakarta, Cirebon, Yogyakarta, Semarang, Solo, Surabaya, Bromo Malang",
      recommended: "Hiace Luxury / Big Bus Super Executive",
      color: "border-[#6920CC]",
      tag: "Drop Off Antar Kota",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="site-container">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F0FF] border border-[#6920CC]/20 text-xs font-bold text-[#6920CC] uppercase tracking-wider">
            <Compass size={15} weight="fill" />
            <span>Destinasi Populer Rombongan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101B38] tracking-tight">
            Rekomendasi Rute Wisata Bandung & Sekitarnya
          </h2>
          <p className="text-sm sm:text-base text-[#65708A] leading-relaxed">
            Sopir kami sangat berpengalaman dalam menavigasi jalur wisata pegunungan yang menanjak dan rute alternatif bebas macet.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="bg-[#F1F6FF] rounded-3xl p-6 border border-blue-100 hover:border-[#1237B8]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#1237B8] bg-white px-2.5 py-1 rounded-md shadow-2xs">
                    {dest.tag}
                  </span>
                  <MapPin size={20} weight="fill" className="text-[#50C710]" />
                </div>

                <h3 className="text-base font-black text-[#101B38] mb-2 group-hover:text-[#1237B8] transition-colors">
                  {dest.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  <strong className="text-gray-800">Spot Utama:</strong> {dest.spots}
                </p>
              </div>

              <div className="pt-4 border-t border-blue-200/60">
                <div className="text-[11px] text-gray-500 font-medium mb-3">
                  Rekomendasi Unit: <strong className="text-[#6920CC] font-bold">{dest.recommended}</strong>
                </div>

                <a
                  href={getWhatsAppBookingUrl({ destination: dest.title })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-sm transition-all"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  <span>Konsultasi Paket Rute Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
