"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  PhoneCall,
  WhatsappLogo,
  List,
  X,
  MapPin,
  Clock,
  Van,
  Compass,
  FileText,
  ShieldCheck,
  CaretDown,
} from "@phosphor-icons/react";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/siteData";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Armada Kami", href: "/armada" },
    { label: "Pilihan Layanan", href: "/layanan" },
    { label: "Cara Pesan", href: "/cara-pesan" },
    { label: "Kontak & Alamat", href: "/kontak" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#1237B8] text-white text-xs py-2 px-4 border-b border-[#2857E8]/40">
        <div className="site-container flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-white/90">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin size={14} weight="fill" className="text-[#50C710]" />
              {siteConfig.address}
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-white/80">
              <Clock size={14} weight="fill" className="text-[#50C710]" />
              {siteConfig.operatingHours}
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            <span className="hidden sm:inline text-white/80">Hotline 24/7:</span>
            <a
              href={`tel:${siteConfig.phone1Clean}`}
              className="font-semibold hover:text-[#50C710] transition-colors flex items-center gap-1"
            >
              <PhoneCall size={13} weight="bold" /> {siteConfig.phone1}
            </a>
            <span className="text-white/40">|</span>
            <a
              href={`tel:${siteConfig.phone2Clean}`}
              className="font-semibold hover:text-[#50C710] transition-colors"
            >
              {siteConfig.phone2}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-blue-100"
            : "bg-white py-4 shadow-sm"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-md ring-2 ring-[#1237B8]/20 group-hover:ring-[#1237B8] transition-all bg-white flex items-center justify-center">
              <Image
                src="/logo-brand.jpeg"
                alt="Logo Sewa Elf Bandung"
                fill
                className="object-cover"
                sizes="44px"
                priority
              />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-[#1237B8] leading-tight group-hover:text-[#2857E8] transition-colors">
                Sewa Elf Bandung
              </div>
              <div className="text-[11px] font-semibold tracking-wider text-[#6920CC] uppercase">
                by Amoora Group
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "text-[#1237B8] bg-[#F1F6FF] font-bold"
                      : "text-[#101B38] hover:text-[#1237B8] hover:bg-[#F1F6FF]/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Phone dropdown */}
            <div className="relative">
              <button
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1237B8] bg-[#F1F6FF] hover:bg-[#E2ECFF] rounded-lg border border-[#1237B8]/20 transition-all"
              >
                <PhoneCall size={15} weight="bold" />
                <span>Hotline</span>
                <CaretDown size={12} weight="bold" />
              </button>

              {phoneDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50"
                  onMouseLeave={() => setPhoneDropdownOpen(false)}
                >
                  <div className="text-[11px] font-bold text-gray-400 px-3 py-1 uppercase">
                    Kontak Layanan
                  </div>
                  <a
                    href={`tel:${siteConfig.phone1Clean}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F1F6FF] text-xs font-medium text-gray-800"
                  >
                    <span>Admin 1: {siteConfig.phone1}</span>
                    <PhoneCall size={14} className="text-[#1237B8]" />
                  </a>
                  <a
                    href={`tel:${siteConfig.phone2Clean}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F1F6FF] text-xs font-medium text-gray-800"
                  >
                    <span>Admin 2: {siteConfig.phone2}</span>
                    <PhoneCall size={14} className="text-[#1237B8]" />
                  </a>
                </div>
              )}
            </div>

            {/* Main Green CTA WhatsApp Button */}
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-md hover:shadow-lg shadow-[#50C710]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsappLogo size={18} weight="fill" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1237B8] hover:bg-[#F1F6FF] focus:outline-none"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? "text-[#1237B8] bg-[#F1F6FF] font-bold"
                        : "text-[#101B38] hover:bg-gray-50"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-md shadow-[#50C710]/20"
              >
                <WhatsappLogo size={20} weight="fill" />
                <span>Chat WhatsApp Admin</span>
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${siteConfig.phone1Clean}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-[#1237B8] bg-[#F1F6FF] rounded-lg border border-[#1237B8]/20"
                >
                  <PhoneCall size={14} weight="bold" />
                  <span>{siteConfig.phone1}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone2Clean}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-[#1237B8] bg-[#F1F6FF] rounded-lg border border-[#1237B8]/20"
                >
                  <PhoneCall size={14} weight="bold" />
                  <span>{siteConfig.phone2}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
