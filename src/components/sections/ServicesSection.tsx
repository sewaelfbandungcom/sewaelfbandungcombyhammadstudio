"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  GraduationCap,
  Buildings,
  UsersThree,
  Confetti,
  Mosque,
  MapPinLine,
  CheckCircle,
  WhatsappLogo,
  CaretRight,
} from "@phosphor-icons/react";
import { SERVICES_LIST, getWhatsAppBookingUrl } from "@/data/siteData";

export function ServicesSection() {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES_LIST[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case "wisata-bandung":
        return Compass;
      case "study-tour":
        return GraduationCap;
      case "gathering-perusahaan":
        return Buildings;
      case "keluarga-besar":
        return UsersThree;
      case "acara-event":
        return Confetti;
      case "ziarah-religi":
        return Mosque;
      case "drop-luar-kota":
      default:
        return MapPinLine;
    }
  };

  const currentService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];
  const CurrentIcon = getIcon(currentService.id);

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-white">
      <div className="site-container">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F0FF] border border-[#6920CC]/20 text-xs font-bold text-[#6920CC] uppercase tracking-wider">
            <Compass size={15} weight="fill" />
            <span>Solusi Lengkap Segala Acara</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101B38] tracking-tight">
            7 Pilihan Layanan Sewa Elf Bandung
          </h2>
          <p className="text-sm sm:text-base text-[#65708A] leading-relaxed">
            Didesain khusus untuk memenuhi kebutuhan perjalanan rombongan dengan armada terbaik, driver handal, dan rute fleksibel.
          </p>
        </div>

        {/* 2-Column Interactive Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Tab Buttons List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {SERVICES_LIST.map((service, index) => {
              const Icon = getIcon(service.id);
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all ${
                    isSelected
                      ? "bg-[#1237B8] text-white shadow-lg shadow-[#1237B8]/20 scale-[1.02]"
                      : "bg-[#F1F6FF] text-gray-800 hover:bg-[#E4EEFF] border border-blue-100"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-white text-[#1237B8] shadow-sm"
                      }`}
                    >
                      <Icon size={22} weight="duotone" />
                    </div>
                    <div>
                      <div className="text-xs font-bold opacity-80">Layanan 0{index + 1}</div>
                      <div className="text-sm font-black">{service.title}</div>
                    </div>
                  </div>
                  <CaretRight size={18} weight="bold" className={isSelected ? "text-[#50C710]" : "text-gray-400"} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Card Content */}
          <div className="lg:col-span-7 bg-[#F1F6FF] rounded-3xl p-6 sm:p-8 border border-blue-100/90 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3.5 rounded-2xl bg-[#1237B8] text-white shadow-md">
                <CurrentIcon size={32} weight="duotone" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#6920CC] uppercase tracking-wider bg-[#F5F0FF] px-2.5 py-0.5 rounded-md">
                  Amoora Group Transport
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#101B38] mt-1">
                  {currentService.title}
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-blue-100 mb-6 shadow-sm">
              <p className="text-sm font-semibold text-[#1237B8] mb-2">
                &ldquo;{currentService.tagline}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {currentService.description}
              </p>
            </div>

            {/* Destination Tag Pills */}
            {currentService.destinations && currentService.destinations.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase text-gray-600 mb-2.5">
                  Destinasi & Rute Populer:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentService.destinations.map((dest, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-gray-800 border border-gray-200 shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1237B8]" />
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights Checkmark List */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase text-gray-600 mb-2.5">
                Keuntungan & Fasilitas:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentService.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl text-xs font-medium text-gray-800 border border-blue-50">
                    <CheckCircle size={16} weight="fill" className="text-[#50C710] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action for this service */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-blue-200/60">
              <a
                href={getWhatsAppBookingUrl({
                  destination: currentService.title,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-md shadow-[#50C710]/20 transition-all"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Konsultasi Layanan Ini via WhatsApp</span>
              </a>

              <Link
                href="/cara-pesan"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-[#1237B8] bg-white hover:bg-gray-50 border border-[#1237B8]/20 transition-all"
              >
                <span>Lihat SOP Booking</span>
                <CaretRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
