"use client";

import { ArrowRight, MapPin, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

type SectionId = "top" | "ketentuan-harga" | "tentang-kami" | "layanan" | "kontak";
type HeaderLink = { label: string; href: string; path: string; section?: SectionId };

const links: readonly HeaderLink[] = [
  { label: "Beranda", href: "/", path: "/", section: "top" },
  { label: "Armada", href: "/armada", path: "/armada" },
  { label: "Ketentuan Harga", href: "/#ketentuan-harga", path: "/", section: "ketentuan-harga" },
  { label: "Tentang Kami", href: "/#tentang-kami", path: "/", section: "tentang-kami" },
  { label: "Layanan & SOP", href: "/#layanan", path: "/", section: "layanan" },
  { label: "Kontak", href: "/#kontak", path: "/", section: "kontak" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("top");

  useEffect(() => {
    let animationFrame = 0;

    const updateHeader = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 40);
        if (pathname !== "/") return;

        const triggerLine = 160;
        let currentSection: SectionId = "top";
        for (const link of links) {
          if (!link.section) continue;
          const section = document.getElementById(link.section);
          if (section && section.getBoundingClientRect().top <= triggerLine) {
            currentSection = link.section;
          }
        }
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80) {
          currentSection = "kontak";
        }
        setActiveSection(currentSection);
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    window.addEventListener("hashchange", updateHeader);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
      window.removeEventListener("hashchange", updateHeader);
    };
  }, [pathname]);

  const isActive = (link: HeaderLink) => {
    if (pathname === "/armada" && link.path === "/armada") {
      return true;
    }
    if (pathname === "/" && link.path === "/") {
      return Boolean(link.section && activeSection === link.section);
    }
    return false;
  };

  const handleLinkClick = (link: HeaderLink) => {
    if (pathname === "/" && link.section) {
      setActiveSection(link.section);
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      {/* Top Notification Bar */}
      <div
        className={`h-[34px] border-b border-[#1237B8]/20 bg-[#1237B8] text-white transition-all duration-300 ${
          isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="site-container flex h-full items-center justify-between gap-4 text-[11px] font-medium text-slate-100 sm:text-xs">
          <span className="hidden items-center gap-1.5 sm:flex">
            <MapPin className="size-3 text-[#50C710]" /> Jl. Ciborelang No 8 Cileunyi Bandung — Melayani Rombongan Wisata &amp; Luar Kota
          </span>
          <span className="sm:hidden text-[11px]">Sewa Elf Bandung by Amoora Group</span>
          <div className="flex items-center gap-4 sm:gap-5">
            <a href="tel:6281214802420" className="flex items-center gap-1.5 transition hover:text-[#50C710]">
              <Phone className="size-3 text-[#50C710]" /> 24/7: 0812-1480-2420
            </a>
            <a href="tel:6282215452230" className="hidden items-center gap-1.5 transition hover:text-[#50C710] md:flex">
              <Phone className="size-3 text-[#50C710]" /> 0822-1545-2230
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - High Contrast Clean Mode */}
      <div
        className={`absolute inset-x-0 h-[78px] border-b transition-all duration-300 ${
          isScrolled
            ? "top-0 border-[#DCE5F0] bg-white/95 shadow-[0_10px_30px_rgba(18,55,184,.08)] backdrop-blur-xl"
            : "top-[34px] border-[#DCE5F0]/60 bg-white/90 shadow-xs backdrop-blur-md"
        }`}
      >
        <div className="site-container flex h-full items-center justify-between gap-5">
          <Link
            href="/"
            aria-label="Sewa Elf Bandung - Beranda"
            onClick={() => {
              setActiveSection("top");
              setMenuOpen(false);
            }}
          >
            <BrandMark compact />
          </Link>

          <nav className="hidden lg:block" aria-label="Navigasi utama">
            <ul className="flex items-center gap-5 xl:gap-7">
              {links.map((link) => {
                const active = isActive(link);
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => handleLinkClick(link)}
                      className={`relative flex items-center py-2 text-[13px] font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-[#1237B8] after:transition-transform after:duration-300 hover:text-[#1237B8] hover:after:scale-x-100 xl:text-sm ${
                        active
                          ? "text-[#1237B8] after:scale-x-100 font-bold"
                          : "text-[#65708A] after:scale-x-0 hover:text-[#101B38]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a
            href={bookingUrl()}
            target="_blank"
            rel="noreferrer"
            className="hidden h-11 items-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-5 text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(80,199,16,.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(80,199,16,.36)] lg:inline-flex"
          >
            Pesan via WhatsApp <ArrowRight className="size-4" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-lg border border-[#DCE5F0] bg-white text-[#101B38] shadow-xs transition hover:bg-slate-50 lg:hidden"
          >
            {menuOpen ? <X className="size-5 text-[#101B38]" /> : <Menu className="size-5 text-[#101B38]" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Navigasi seluler"
            className="absolute inset-x-0 top-full border-t border-[#DCE5F0] bg-white/98 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <ul className="site-container py-3">
              {links.map((link) => {
                const active = isActive(link);
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => handleLinkClick(link)}
                      className={`flex h-12 items-center rounded-lg px-3 text-base font-semibold transition ${
                        active
                          ? "bg-[#1237B8]/10 text-[#1237B8] font-bold"
                          : "text-[#65708A] hover:bg-slate-50 hover:text-[#101B38]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
