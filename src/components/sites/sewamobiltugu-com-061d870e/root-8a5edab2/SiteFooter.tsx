"use client";

import { FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr/FacebookLogo";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

const fleetLinks = [
  ["Daftar Harga Sewa Elf", "/harga-sewa-elf-bandung"],
  ["Sewa Elf Long 19 Seat", "/sewa-elf-long-bandung"],
  ["Sewa Elf Long Euro4 (21 Seat)", "/sewa-elf-long-euro4-bandung"],
  ["Sewa Elf Coaster 18-22 Seat", "/sewa-elf-coaster-bandung"],
  ["Sewa Toyota Hiace Hub", "/sewa-hiace-bandung"],
  ["Sewa Hiace Premio", "/sewa-hiace-premio-bandung"],
  ["Sewa Bus Pariwisata", "/sewa-bus-pariwisata-bandung"],
] as const;

const routeLinks = [
  ["Sewa Elf ke Lembang", "/sewa-elf-bandung-lembang"],
  ["Sewa Elf ke Ciwidey", "/sewa-elf-bandung-ciwidey"],
  ["Sewa Elf ke Pangalengan", "/sewa-elf-bandung-pangalengan"],
  ["Sewa Elf ke Garut", "/sewa-elf-bandung-garut"],
  ["Sewa Elf ke Pangandaran", "/sewa-elf-bandung-pangandaran"],
  ["Carter Drop Bandara Soetta", "/sewa-elf-bandung-jakarta"],
  ["Shuttle Stasiun Whoosh", "/sewa-elf-stasiun-whoosh-tegalluar"],
] as const;

const serviceLinks = [
  ["Sewa Elf Wisata & Liburan", "/sewa-elf-wisata-bandung"],
  ["Study Tour Sekolah & Kampus", "/sewa-elf-study-tour-bandung"],
  ["Gathering & Outing Kantor", "/sewa-elf-gathering-bandung"],
  ["Ziarah & Perjalanan Religi", "/sewa-elf-ziarah-bandung"],
  ["Carter Elf Antar Kota / Provinsi", "/sewa-elf-luar-kota-bandung"],
] as const;

export function SiteFooter() {
  return (
    <footer id="kontak" className="bg-[#101B38] text-white">
      <div className="site-container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
        <div>
          <BrandMark inverse />
          <p className="mt-4 max-w-[340px] text-xs sm:text-sm leading-6 text-slate-300">
            Layanan penyewaan kendaraan Isuzu Elf Long, Toyota Hiace, dan Bus Pariwisata resmi by Amoora Group. Armada berstandar Euro4 bersih, harga transparan, dan sopir berlisensi pariwisata.
          </p>
          <div className="mt-4 flex gap-2">
            <span
              aria-label="Instagram Sewa Elf Bandung"
              title="Instagram"
              className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:border-[#50C710]/40 hover:bg-white/[0.07] hover:text-[#50C710]"
            >
              <InstagramLogoIcon className="size-4.5" weight="fill" />
            </span>
            <span
              aria-label="Facebook Sewa Elf Bandung"
              title="Facebook"
              className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:border-[#50C710]/40 hover:bg-white/[0.07] hover:text-[#50C710]"
            >
              <FacebookLogoIcon className="size-4.5" weight="fill" />
            </span>
            <a
              aria-label="WhatsApp Sewa Elf Bandung"
              title="WhatsApp"
              href={bookingUrl()}
              target="_blank"
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:border-[#50C710]/50 hover:bg-white/[0.07] hover:text-[#50C710]"
            >
              <WhatsappLogoIcon className="size-4.5" weight="fill" />
            </a>
          </div>
        </div>

        <nav aria-label="Pilihan Armada & Tarif">
          <h2 className="text-sm sm:text-base font-bold text-white">Armada &amp; Tarif</h2>
          <ul className="mt-4 space-y-2">
            {fleetLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-xs text-slate-300 transition duration-200 hover:translate-x-1 hover:text-[#50C710] inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Rute Populer">
          <h2 className="text-sm sm:text-base font-bold text-white">Rute Populer</h2>
          <ul className="mt-4 space-y-2">
            {routeLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-xs text-slate-300 transition duration-200 hover:translate-x-1 hover:text-[#50C710] inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm sm:text-base font-bold text-white">Layanan &amp; Garasi</h2>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-xs text-slate-300 transition duration-200 hover:translate-x-1 hover:text-[#50C710] inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-white/10 pt-3 text-xs text-slate-300 space-y-1.5">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-[#50C710]" />
              Jl. Ciborelang No 8 Cileunyi, Bandung
            </p>
            <a href="tel:6281214802420" className="flex items-center gap-2 font-bold text-slate-200 hover:text-[#50C710] transition">
              <Phone className="size-3.5 text-[#50C710]" /> 0812-1480-2420 / 0822-1545-2230
            </a>
          </div>
        </div>
      </div>

      <div className="site-container flex flex-col gap-3 border-t border-white/10 py-5 text-center text-xs text-slate-400 sm:flex-row sm:justify-between sm:text-left">
        <span>© {new Date().getFullYear()} Sewa Elf Bandung by Amoora Group. All rights reserved.</span>
        <span>Solusi Perjalanan Rombongan Nyaman, Aman, dan Terpercaya.</span>
      </div>

      {/* Simple Floating Circular WhatsApp Button */}
      <aside aria-label="WhatsApp Floating Help Desk" className="fixed bottom-5 right-5 z-[90]">
        <a
          aria-label="Hubungi Sewa Elf Bandung via WhatsApp"
          href={bookingUrl()}
          target="_blank"
          rel="noreferrer"
          className="group relative flex size-14 items-center justify-center rounded-full bg-[#50C710] text-white shadow-[0_10px_28px_rgba(80,199,16,.45)] transition-all duration-300 hover:scale-110 hover:bg-[#43aa0c] hover:shadow-[0_14px_36px_rgba(80,199,16,.6)] active:scale-95"
        >
          {/* Animated Wave Rings */}
          <span className="ctwa-ping-ring pointer-events-none absolute -inset-1 rounded-full bg-[#50C710]/40" />
          <span className="ctwa-ping-ring pointer-events-none absolute -inset-2.5 rounded-full bg-[#50C710]/20 [animation-delay:0.7s]" />

          <WhatsappLogoIcon className="relative z-10 size-8 text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110" weight="fill" />
        </a>
      </aside>
    </footer>
  );
}
