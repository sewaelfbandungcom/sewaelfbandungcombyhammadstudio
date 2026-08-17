import { FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr/FacebookLogo";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

const companyLinks = [["Tentang Kami", "/#tentang-kami"], ["Cara Sewa", "/#layanan"], ["Armada", "/armada"], ["Kontak", "/#kontak"]] as const;
const serviceLinks = [["Sewa Elf Long", "/armada"], ["Sewa Hiace Premio", "/armada"], ["Bus Pariwisata", "/armada"], ["Wisata Bandung", "/#layanan"]] as const;

export function SiteFooter() {
  return (
    <footer id="kontak" className="bg-[#101B38] text-white">
      <div className="site-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.7fr_1fr] lg:gap-12 lg:py-16">
        <div>
          <BrandMark inverse />
          <p className="mt-5 max-w-[370px] text-sm leading-7 text-slate-300">Layanan penyewaan kendaraan Elf, Hiace, dan Bus Pariwisata terpercaya di Bandung by Amoora Group. Armada Euro4 bersih, harga bersahabat, dan pengemudi berpengalaman.</p>
          <div className="mt-5 flex gap-2.5">
            <span aria-label="Instagram Sewa Elf Bandung" title="Instagram" className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#50C710]/40 hover:bg-white/[0.07] hover:text-[#50C710]"><InstagramLogoIcon className="size-5" weight="fill" /></span>
            <span aria-label="Facebook Sewa Elf Bandung" title="Facebook" className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#50C710]/40 hover:bg-white/[0.07] hover:text-[#50C710]"><FacebookLogoIcon className="size-5" weight="fill" /></span>
            <a aria-label="WhatsApp Sewa Elf Bandung" title="WhatsApp" href={bookingUrl()} target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#50C710]/50 hover:bg-white/[0.07] hover:text-[#50C710]"><WhatsappLogoIcon className="size-5" weight="fill" /></a>
          </div>
        </div>
        <nav aria-label="Perusahaan"><h2 className="text-base font-bold text-white">Perusahaan</h2><ul className="mt-5 space-y-3">{companyLinks.map(([label, href]) => <li key={label}><Link href={href} className="text-[13px] text-slate-300 transition hover:text-[#50C710]">{label}</Link></li>)}</ul></nav>
        <nav aria-label="Layanan"><h2 className="text-base font-bold text-white">Layanan</h2><ul className="mt-5 space-y-3">{serviceLinks.map(([label, href]) => <li key={label}><Link href={href} className="text-[13px] text-slate-300 transition hover:text-[#50C710]">{label}</Link></li>)}</ul></nav>
        <div>
          <h2 className="text-base font-bold text-white">Kontak &amp; Garasi</h2>
          <div className="mt-5 space-y-3.5 text-[13px] leading-6 text-slate-300">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-[#50C710]" />Jalan Ciborelang No 8 Cileunyi Bandung — Melayani penjemputan se-Bandung &amp; luar kota.</p>
            <a href="tel:6281214802420" className="flex items-center gap-3 hover:text-[#50C710]"><Phone className="size-4 text-[#50C710]" />0812 1480 2420 / 0822 1545 2230</a>
            <a href="mailto:info@sewaelfbandung.com" className="flex items-center gap-3 hover:text-[#50C710]"><Mail className="size-4 text-[#50C710]" />info@sewaelfbandung.com</a>
          </div>
        </div>
      </div>
      <div className="site-container flex flex-col gap-3 border-t border-white/10 py-5 text-center text-xs text-slate-400 sm:flex-row sm:justify-between sm:text-left"><span>© {new Date().getFullYear()} Sewa Elf Bandung by Amoora Group. All rights reserved.</span><span>Solusi Perjalanan Rombongan Nyaman, Aman, dan Terpercaya.</span></div>
      <a aria-label="Hubungi Sewa Elf Bandung via WhatsApp" href={bookingUrl()} target="_blank" rel="noreferrer" className="whatsapp-attention fixed bottom-5 right-5 z-[80] grid size-14 place-items-center rounded-full bg-[#50C710] text-white shadow-[0_12px_30px_rgba(80,199,16,.35)] ring-4 ring-white/80 transition hover:scale-110 hover:bg-[#43aa0c] hover:[animation-play-state:paused]"><WhatsappLogoIcon className="relative z-10 size-8" weight="fill" /></a>
    </footer>
  );
}
