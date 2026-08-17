"use client";

import React, { useState } from "react";
import { Question, CaretDown, WhatsappLogo } from "@phosphor-icons/react";
import { FAQS, getWhatsAppBookingUrl } from "@/data/siteData";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="site-container">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F0FF] border border-[#6920CC]/20 text-xs font-bold text-[#6920CC] uppercase tracking-wider">
            <Question size={15} weight="fill" />
            <span>Tanya Jawab Seputar Sewa Elf</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101B38] tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-[#65708A] leading-relaxed">
            Semua hal yang perlu Anda ketahui mengenai armada, durasi sewa, biaya, dan tata cara pemesanan.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5 mb-10">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-blue-100 bg-[#F1F6FF] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#101B38] hover:text-[#1237B8] transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`p-1.5 rounded-full bg-white text-[#1237B8] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 bg-[#1237B8] text-white" : ""
                    }`}
                  >
                    <CaretDown size={16} weight="bold" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-blue-200/40 bg-white/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Help Box */}
        <div className="max-w-xl mx-auto text-center bg-[#F5F0FF] rounded-3xl p-6 border border-[#6920CC]/20">
          <h3 className="text-base font-bold text-[#101B38] mb-1">
            Punya pertanyaan spesifik mengenai rute atau penawaran harga rombongan?
          </h3>
          <p className="text-xs text-gray-600 mb-4">
            Tim CS kami online 24 jam dan siap memberikan solusi terbaik sesuai anggaran Anda.
          </p>
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-md transition-all"
          >
            <WhatsappLogo size={18} weight="fill" />
            <span>Tanya Langsung ke Admin via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
