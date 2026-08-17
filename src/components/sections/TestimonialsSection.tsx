"use client";

import React from "react";
import { Star, Quotes, CheckCircle, ChatCenteredDots } from "@phosphor-icons/react";
import { TESTIMONIALS } from "@/data/siteData";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F1F6FF]">
      <div className="site-container">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F0FF] border border-[#6920CC]/20 text-xs font-bold text-[#6920CC] uppercase tracking-wider">
            <ChatCenteredDots size={15} weight="fill" />
            <span>Ulasan & Testimoni Pelanggan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101B38] tracking-tight">
            Apa Kata Mereka yang Sudah Sewa Elf di Bandung?
          </h2>
          <p className="text-sm sm:text-base text-[#65708A] leading-relaxed">
            Kepercayaan ribuan rombongan keluarga, instansi BUMN, sekolah, kampus, dan korporat adalah bukti dedikasi kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Trip Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} size={18} weight="fill" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#1237B8] bg-[#F1F6FF] px-2.5 py-1 rounded-lg">
                    {testi.trip}
                  </span>
                </div>

                {/* Content Quote */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{testi.content}&rdquo;
                </p>
              </div>

              {/* User Profile Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1237B8] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    {testi.avatarText}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#101B38]">
                      {testi.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testi.role} {testi.organization ? `• ${testi.organization}` : ""}
                    </div>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-semibold text-[#50C710] bg-[#F2FBEA] px-2 py-0.5 rounded-md block">
                    Unit: {testi.unitUsed}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
