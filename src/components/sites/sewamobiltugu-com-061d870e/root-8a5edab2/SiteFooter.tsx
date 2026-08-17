"use client";

import { FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr/FacebookLogo";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { Mail, MapPin, Phone, MessageSquare, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

const companyLinks = [
  ["Tentang Kami", "/#tentang-kami"],
  ["Cara Sewa", "/#layanan"],
  ["Armada", "/armada"],
  ["Kontak", "/#kontak"],
] as const;

const serviceLinks = [
  ["Sewa Elf Long", "/armada"],
  ["Sewa Hiace Premio", "/armada"],
  ["Bus Pariwisata", "/armada"],
  ["Wisata Bandung", "/#layanan"],
] as const;

export function SiteFooter() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <footer id="kontak" className="bg-[#101B38] text-white">
      <div className="site-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.7fr_1fr] lg:gap-12 lg:py-16">
        <div>
          <BrandMark inverse />
          <p className="mt-5 max-w-[370px] text-sm leading-7 text-slate-300">
            Layanan penyewaan kendaraan Elf, Hiace, dan Bus Pariwisata terpercaya di Bandung by Amoora Group. Armada Euro4 bersih, harga bersahabat, dan pengemudi berpengalaman.
          </p>
          <div className="mt-5 flex gap-2.5">
            <span
              aria-label="Instagram Sewa Elf Bandung"
              title="Instagram"
              className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:border-[#50C710]/40 hover:bg-white/[0.07] hover:text-[#50C710] hover:-translate-y-1"
            >
              <InstagramLogoIcon className="size-5" weight="fill" />
            </span>
            <span
              aria-label="Facebook Sewa Elf Bandung"
              title="Facebook"
              className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:border-[#50C710]/40 hover:bg-white/[0.07] hover:text-[#50C710] hover:-translate-y-1"
            >
              <FacebookLogoIcon className="size-5" weight="fill" />
            </span>
            <a
              aria-label="WhatsApp Sewa Elf Bandung"
              title="WhatsApp"
              href={bookingUrl()}
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:border-[#50C710]/50 hover:bg-white/[0.07] hover:text-[#50C710] hover:-translate-y-1"
            >
              <WhatsappLogoIcon className="size-5" weight="fill" />
            </a>
          </div>
        </div>

        <nav aria-label="Perusahaan">
          <h2 className="text-base font-bold text-white">Perusahaan</h2>
          <ul className="mt-5 space-y-3">
            {companyLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[13px] text-slate-300 transition duration-200 hover:translate-x-1 hover:text-[#50C710] inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Layanan">
          <h2 className="text-base font-bold text-white">Layanan</h2>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[13px] text-slate-300 transition duration-200 hover:translate-x-1 hover:text-[#50C710] inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold text-white">Kontak &amp; Garasi</h2>
          <div className="mt-5 space-y-3.5 text-[13px] leading-6 text-slate-300">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#50C710]" />
              Jalan Ciborelang No 8 Cileunyi Bandung — Melayani penjemputan se-Bandung &amp; luar kota.
            </p>
            <a href="tel:6281214802420" className="flex items-center gap-3 transition duration-200 hover:text-[#50C710]">
              <Phone className="size-4 text-[#50C710]" />
              0812 1480 2420 / 0822 1545 2230
            </a>
            <a href="mailto:info@sewaelfbandung.com" className="flex items-center gap-3 transition duration-200 hover:text-[#50C710]">
              <Mail className="size-4 text-[#50C710]" />
              info@sewaelfbandung.com
            </a>
          </div>
        </div>
      </div>

      <div className="site-container flex flex-col gap-3 border-t border-white/10 py-5 text-center text-xs text-slate-400 sm:flex-row sm:justify-between sm:text-left">
        <span>© {new Date().getFullYear()} Sewa Elf Bandung by Amoora Group. All rights reserved.</span>
        <span>Solusi Perjalanan Rombongan Nyaman, Aman, dan Terpercaya.</span>
      </div>

      {/* Inviting Floating CTWA Widget with Ambient Attention Calls */}
      <aside aria-label="WhatsApp Floating Help Desk" className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-2.5">
        {/* Floating Calling Message Bubble */}
        {showTooltip ? (
          <div className="ctwa-float relative max-w-[270px] rounded-2xl border border-[#50C710]/30 bg-white p-3.5 text-[#101B38] shadow-[0_16px_36px_rgba(18,55,184,.18)] backdrop-blur-md transition-all duration-300 sm:max-w-[290px]">
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              aria-label="Tutup pesan bantuan"
              className="absolute right-2 top-2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-[#101B38]"
            >
              <X className="size-3.5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#50C710] opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[#50C710]" />
              </span>
              <span className="text-[11px] font-bold text-[#1237B8]">Admin Sewa Elf Online</span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[#65708A]">
              Halo! Mau tanya tarif atau cek jadwal Elf &amp; Hiace? <strong className="text-[#101B38] font-bold">Chat kami sekarang! 👋</strong>
            </p>
            <div className="absolute -bottom-2 right-6 size-3.5 rotate-45 border-b border-r border-[#50C710]/30 bg-white" />
          </div>
        ) : null}

        {/* Pulse Calling Button */}
        <a
          aria-label="Hubungi Sewa Elf Bandung via WhatsApp"
          href={bookingUrl()}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center gap-2.5 rounded-full bg-[#50C710] p-3 text-white shadow-[0_14px_34px_rgba(80,199,16,.42)] transition-all duration-300 hover:scale-105 hover:bg-[#43aa0c] hover:shadow-[0_18px_42px_rgba(80,199,16,.55)] active:scale-95"
        >
          {/* Animated Wave Rings */}
          <span className="ctwa-ping-ring pointer-events-none absolute -inset-1 rounded-full bg-[#50C710]/45" />
          <span className="ctwa-ping-ring pointer-events-none absolute -inset-2.5 rounded-full bg-[#50C710]/25 [animation-delay:0.7s]" />

          {/* Icon with Periodic Wiggle */}
          <div className="ctwa-wiggle relative z-10 grid size-10 place-items-center">
            <WhatsappLogoIcon className="size-8 text-white drop-shadow-sm" weight="fill" />
          </div>

          <span className="relative z-10 hidden pr-3 text-[13px] font-bold tracking-tight text-white md:inline-block">
            Tanya Admin via WA
          </span>
        </a>
      </aside>
    </footer>
  );
}
