"use client";

import React from "react";
import {
  ChatTeardropDots,
  CreditCard,
  CheckCircle,
  SteeringWheel,
  WhatsappLogo,
  Info,
  ShieldWarning,
} from "@phosphor-icons/react";
import { BOOKING_STEPS, BOOKING_TERMS, getWhatsAppBookingUrl } from "@/data/siteData";

export function BookingStepsSection() {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return ChatTeardropDots;
      case 2:
        return CreditCard;
      case 3:
        return CheckCircle;
      case 4:
      default:
        return SteeringWheel;
    }
  };

  return (
    <section id="cara-pesan" className="py-16 sm:py-24 bg-[#F1F6FF]">
      <div className="site-container">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F0FF] border border-[#6920CC]/20 text-xs font-bold text-[#6920CC] uppercase tracking-wider">
            <CheckCircle size={15} weight="fill" />
            <span>SOP Pemesanan Jelas & Transparan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101B38] tracking-tight">
            Cara Pemesanan Sewa Elf Bandung
          </h2>
          <p className="text-sm sm:text-base text-[#65708A] leading-relaxed">
            Proses reservasi mudah, cepat, dan terstandarisasi untuk memastikan kepastian jadwal perjalanan rombongan Anda.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BOOKING_STEPS.map((stepItem) => {
            const Icon = getStepIcon(stepItem.step);
            return (
              <div
                key={stepItem.step}
                className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
              >
                {/* Step Number Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1237B8] text-white flex items-center justify-center font-black text-lg shadow-md shadow-[#1237B8]/25 group-hover:bg-[#2857E8] transition-colors">
                    0{stepItem.step}
                  </div>
                  <span className="text-[11px] font-bold text-[#6920CC] bg-[#F5F0FF] px-2.5 py-1 rounded-md">
                    {stepItem.timing}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#1237B8]">
                    <Icon size={22} weight="duotone" />
                    <h3 className="text-base font-black text-[#101B38]">
                      {stepItem.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-[#50C710]">
                  <CheckCircle size={14} weight="fill" />
                  <span>Langkah {stepItem.step} dari 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ketentuan Sewa & Syarat Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-[#F5F0FF] text-[#6920CC]">
              <Info size={24} weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#101B38]">
                Syarat & Ketentuan Sewa (SOP Resmi)
              </h3>
              <p className="text-xs text-gray-500">
                Harap dibaca demi kenyamanan dan kelancaran bersama
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
            {BOOKING_TERMS.map((term, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 bg-[#F1F6FF]/70 p-3 rounded-2xl border border-blue-50 text-xs text-gray-700 font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-[#1237B8] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="leading-relaxed">{term}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#FFF8E6] border border-[#FFE082] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldWarning size={24} weight="fill" className="text-[#F59E0B] shrink-0 mt-0.5" />
              <p className="text-xs text-[#92400E] leading-relaxed">
                <strong>Catatan Penting:</strong> Reservasi pada akhir pekan (weekend) dan musim liburan (High Season) disarankan dilakukan minimal H-14 untuk memastikan ketersediaan unit pilihan Anda.
              </p>
            </div>

            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-md transition-all"
            >
              <WhatsappLogo size={16} weight="fill" />
              <span>Booking Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
