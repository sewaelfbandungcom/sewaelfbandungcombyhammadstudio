"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CarFront, Check, Clock3, Headphones, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";

import { assetRoot, bookingUrl } from "./content";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#F1F6FF] pb-16 pt-6 lg:pb-24 lg:pt-10">
      <div className="site-container">
        <div className="group relative overflow-hidden rounded-[32px] border border-white/25 bg-[#101B38] text-white shadow-[0_34px_80px_rgba(18,55,184,.28)] transition-all duration-500 hover:shadow-[0_42px_95px_rgba(18,55,184,.36)]">
          {/* Background Image of Bandung Landmark with Rich Ambient Overlay */}
          <Image
            src={`${assetRoot}/drivemate-cta-bandung.png`}
            alt="Armada Sewa Elf Bandung dengan latar Gedung Sate Bandung"
            fill
            sizes="1200px"
            className="scale-[1.08] object-cover object-[62%_center] opacity-40 transition-transform duration-700 ease-out group-hover:scale-[1.12]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,27,56,.98)_0%,rgba(18,55,184,.92)_40%,rgba(40,87,232,.78)_70%,rgba(105,32,204,.82)_100%)]" />
          <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#50C710]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 size-80 rounded-full bg-[#2857E8]/25 blur-3xl" />

          {/* Inner Grid */}
          <div className="relative z-10 grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.25fr_0.9fr] lg:gap-14 lg:p-14">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#50C710]/40 bg-[#50C710]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#50C710] backdrop-blur-md">
                <span className="size-2 rounded-full bg-[#50C710] animate-pulse" />
                <Sparkles className="size-3.5" /> Sewa Elf Bandung by Amoora Group
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-[44px]">
                Siap Menjelajahi Bandung Bersama <span className="text-[#50C710]">Rombongan?</span>
              </h2>

              <p className="mt-4 max-w-[540px] text-sm leading-relaxed text-slate-200 sm:text-[15px]">
                Dapatkan penawaran harga terbaik untuk sewa Elf Long 19 Seat, Toyota Hiace, dan Bus Pariwisata. Armada prima ber-AC dingin, wangi, dan driver ramah siap mengantar perjalanan Anda.
              </p>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5 text-xs text-slate-100">
                <span className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-[#50C710] text-white">
                    <Check className="size-3 stroke-[3]" />
                  </span>
                  Unit Euro4 Terawat
                </span>
                <span className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-[#50C710] text-white">
                    <Check className="size-3 stroke-[3]" />
                  </span>
                  Driver Tepat Waktu
                </span>
                <span className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-[#50C710] text-white">
                    <Check className="size-3 stroke-[3]" />
                  </span>
                  Tanpa Biaya Tersembunyi
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href={bookingUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-13 items-center gap-2.5 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-6 text-sm font-bold text-white shadow-[0_14px_30px_rgba(80,199,16,.38)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(80,199,16,.48)] active:scale-[0.99]"
                >
                  <WhatsappLogoIcon className="size-5" weight="fill" />
                  Booking via WhatsApp Sekarang
                </a>
                <Link
                  href="/armada"
                  className="inline-flex h-13 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 active:scale-[0.99]"
                >
                  <CarFront className="size-4" />
                  Lihat Semua Armada <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Card: Quick Hotline & Booking Summary */}
            <div className="rounded-2xl border border-white/20 bg-white/[0.12] p-6 text-white backdrop-blur-xl shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#50C710]">
                    Layanan Pelanggan 24 Jam
                  </span>
                  <strong className="text-base font-bold text-white">
                    Hubungi Admin Amoora Group
                  </strong>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-[#50C710]/40 bg-[#50C710]/20 px-2.5 py-1 text-[10px] font-bold text-[#50C710]">
                  <span className="size-2 rounded-full bg-[#50C710] animate-pulse" />
                  ONLINE
                </div>
              </div>

              {/* Contact numbers */}
              <div className="mt-4 space-y-2.5">
                <a
                  href="https://wa.me/6281214802420?text=Halo%20Admin%20Sewa%20Elf%20Bandung%2C%20saya%20mau%20booking%20armada."
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/15 bg-white/10 p-3.5 transition hover:bg-white/20 hover:border-[#50C710]/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg bg-[#50C710] text-white">
                      <WhatsappLogoIcon className="size-5" weight="fill" />
                    </span>
                    <div>
                      <span className="block text-[10px] text-slate-300">WhatsApp Hotline 1</span>
                      <strong className="text-sm font-bold text-white">0812-1480-2420</strong>
                    </div>
                  </div>
                  <ArrowRight className="size-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#50C710]" />
                </a>

                <a
                  href="https://wa.me/6282215452230?text=Halo%20Admin%20Sewa%20Elf%20Bandung%2C%20saya%20mau%20booking%20armada."
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/15 bg-white/10 p-3.5 transition hover:bg-white/20 hover:border-[#50C710]/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg bg-[#2857E8] text-white">
                      <Phone className="size-4.5" />
                    </span>
                    <div>
                      <span className="block text-[10px] text-slate-300">WhatsApp Hotline 2</span>
                      <strong className="text-sm font-bold text-white">0822-1545-2230</strong>
                    </div>
                  </div>
                  <ArrowRight className="size-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#50C710]" />
                </a>
              </div>

              {/* Booking SOP Micro Note */}
              <div className="mt-5 rounded-xl border border-white/10 bg-[#101B38]/60 p-3.5 text-[11px] text-slate-300">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <ShieldCheck className="size-4 text-[#50C710]" />
                  <span>SOP Reservasi Cepat:</span>
                </div>
                <p className="leading-relaxed">
                  DP 30% untuk mengunci jadwal armada • Pelunasan H-3 • Kontak driver dibagikan H-1 sebelum keberangkatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
