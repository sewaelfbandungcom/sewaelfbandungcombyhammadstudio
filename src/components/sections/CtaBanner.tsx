"use client";

import React from "react";
import { WhatsappLogo, PhoneCall, CheckCircle, ShieldCheck } from "@phosphor-icons/react";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/siteData";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          {/* Decorative subtle circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#50C710]/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-bold text-white border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#50C710] animate-ping" />
              <span>Promo Spesial Sewa Elf & Hiace Bandung</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
              Siap Menikmati Perjalanan Nyaman Bersama Rombongan?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Dapatkan penawaran harga terbaik dan unit armada terbaru berstandar Euro4 dengan menghubungi admin resmi kami sekarang juga.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-base text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-xl shadow-[#50C710]/40 transition-all transform hover:scale-105 active:scale-95"
              >
                <WhatsappLogo size={24} weight="fill" />
                <span>Pesan Sekarang via WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phone1Clean}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm text-white bg-white/15 hover:bg-white/25 backdrop-blur border border-white/30 transition-all"
              >
                <PhoneCall size={18} weight="bold" />
                <span>Telepon: {siteConfig.phone1}</span>
              </a>
            </div>

            {/* Reassurance Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={15} weight="fill" className="text-[#50C710]" /> DP 30% Kunci Unit
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={15} weight="fill" className="text-[#50C710]" /> Driver Siap H-1
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={15} weight="fill" className="text-[#50C710]" /> Legalitas Amoora Group
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
