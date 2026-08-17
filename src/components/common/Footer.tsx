"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  WhatsappLogo,
  MapPin,
  Clock,
  ShieldCheck,
  EnvelopeSimple,
  CheckCircle,
  CaretRight,
  Sparkle,
} from "@phosphor-icons/react";
import { siteConfig, getWhatsAppBookingUrl, SERVICES_LIST } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="bg-[#101B38] text-white pt-16 pb-8 border-t-4 border-[#1237B8]">
      <div className="site-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info & Amoora Group summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg bg-white ring-2 ring-[#50C710]">
                <Image
                  src="/logo-brand.jpeg"
                  alt="Logo Sewa Elf Bandung by Amoora Group"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">
                  Sewa Elf Bandung
                </h3>
                <span className="text-xs font-semibold tracking-wider text-[#50C710] uppercase">
                  by Amoora Group
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Penyedia layanan transportasi sewa Elf Long, Hiace Premio & Commuter, serta Bus Pariwisata terkemuka di Bandung. Solusi perjalanan rombongan yang nyaman, aman, praktis, dan terpercaya.
            </p>

            <div className="bg-[#1237B8]/40 border border-[#2857E8]/40 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#50C710]">
                <ShieldCheck size={16} weight="fill" />
                <span>Legalitas Resmi Transportasi</span>
              </div>
              <p className="text-xs text-gray-300">
                Didukung oleh armada prima berstandar Euro4, dokumen legalitas resmi, dan pengemudi berlisensi pariwisata.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-sm border-l-2 border-[#50C710] pl-2.5">
              Menu Cepat
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#50C710] transition-colors flex items-center gap-1.5">
                  <CaretRight size={13} className="text-[#50C710]" /> Beranda
                </Link>
              </li>
              <li>
                <Link href="/armada" className="hover:text-[#50C710] transition-colors flex items-center gap-1.5">
                  <CaretRight size={13} className="text-[#50C710]" /> Katalog Armada
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-[#50C710] transition-colors flex items-center gap-1.5">
                  <CaretRight size={13} className="text-[#50C710]" /> Pilihan Layanan
                </Link>
              </li>
              <li>
                <Link href="/cara-pesan" className="hover:text-[#50C710] transition-colors flex items-center gap-1.5">
                  <CaretRight size={13} className="text-[#50C710]" /> Cara Pemesanan & SOP
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#50C710] transition-colors flex items-center gap-1.5">
                  <CaretRight size={13} className="text-[#50C710]" /> Kontak & Lokasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan Populer */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-sm border-l-2 border-[#6920CC] pl-2.5">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {SERVICES_LIST.slice(0, 6).map((s) => (
                <li key={s.id} className="flex items-start gap-1.5">
                  <CheckCircle size={14} weight="fill" className="text-[#50C710] shrink-0 mt-0.5" />
                  <span>{s.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak & Alamat Cileunyi */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-sm border-l-2 border-[#50C710] pl-2.5">
              Kontak & Alamat
            </h4>

            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} weight="fill" className="text-[#50C710] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={16} weight="fill" className="text-[#50C710] shrink-0 mt-0.5" />
                <span>{siteConfig.operatingHours}</span>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${siteConfig.phone1Clean}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors"
                >
                  <PhoneCall size={14} className="text-[#50C710]" />
                  <span>Admin 1: {siteConfig.phone1}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone2Clean}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors"
                >
                  <PhoneCall size={14} className="text-[#50C710]" />
                  <span>Admin 2: {siteConfig.phone2}</span>
                </a>
              </div>

              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-xs text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-md transition-all"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>Konsultasi Cepat WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & notes */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-white font-semibold">Sewa Elf Bandung</strong> — by Amoora Group. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Pusat Sewa Elf & Hiace Bandung</span>
            <span>•</span>
            <span className="text-[#50C710] font-medium">Harga Bersahabat & Armada Euro4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
