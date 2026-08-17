"use client";

import React, { useState } from "react";
import { WhatsappLogo, X, ChatDots, PhoneCall, Sparkle } from "@phosphor-icons/react";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/siteData";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Box when expanded */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header Popover */}
          <div className="bg-[#1237B8] p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Tutup popup"
            >
              <X size={18} weight="bold" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#50C710] flex items-center justify-center text-white shadow-inner">
                <WhatsappLogo size={24} weight="fill" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">
                  Customer Support 24 Jam
                </h4>
                <p className="text-[11px] text-white/80">
                  Sewa Elf Bandung by Amoora Group
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[11px] bg-white/10 px-2.5 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-[#50C710] animate-ping" />
              <span>Admin Online & Siap Menjawab Pertanyaan Anda</span>
            </div>
          </div>

          {/* Popover Body: 2 Admin Options */}
          <div className="p-4 bg-[#F1F6FF] space-y-2.5">
            <p className="text-xs text-gray-600 font-medium">
              Pilih kontak WhatsApp admin untuk konsultasi harga & booking:
            </p>

            <a
              href={getWhatsAppBookingUrl({ phone: siteConfig.phone1Clean })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 hover:border-[#50C710] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#50C710]/10 text-[#50C710] flex items-center justify-center group-hover:bg-[#50C710] group-hover:text-white transition-colors">
                  <WhatsappLogo size={20} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Admin 1 (Reservasi Cepat)</div>
                  <div className="text-[11px] text-gray-500">{siteConfig.phone1}</div>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#50C710] bg-[#F2FBEA] px-2 py-1 rounded-md">
                Chat
              </span>
            </a>

            <a
              href={getWhatsAppBookingUrl({ phone: siteConfig.phone2Clean })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 hover:border-[#50C710] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#50C710]/10 text-[#50C710] flex items-center justify-center group-hover:bg-[#50C710] group-hover:text-white transition-colors">
                  <WhatsappLogo size={20} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Admin 2 (Luar Kota & Korporat)</div>
                  <div className="text-[11px] text-gray-500">{siteConfig.phone2}</div>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#50C710] bg-[#F2FBEA] px-2 py-1 rounded-md">
                Chat
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#50C710] hover:bg-[#43aa0c] text-white shadow-xl shadow-[#50C710]/35 transition-all transform hover:scale-105 active:scale-95 wa-pulse group focus:outline-none"
        aria-label="Buka Chat WhatsApp"
      >
        <WhatsappLogo size={28} weight="fill" className="transition-transform group-hover:rotate-12" />
        <span className="font-bold text-sm pr-1">Tanya Sewa Elf</span>
      </button>
    </div>
  );
}
