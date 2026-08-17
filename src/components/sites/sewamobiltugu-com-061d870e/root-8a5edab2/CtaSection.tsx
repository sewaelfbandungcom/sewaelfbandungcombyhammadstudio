import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CarFront, Check, Clock3, Headphones } from "lucide-react";

import { assetRoot, bookingUrl } from "./content";

export function CtaSection() {
  return (
    <section className="bg-[#F1F6FF] pb-16 pt-3">
      <div className="group site-container relative min-h-[410px] overflow-hidden rounded-[28px] border border-[#2857E8]/30 bg-[#1237B8] text-white shadow-[0_34px_80px_rgba(18,55,184,.25)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_42px_95px_rgba(18,55,184,.3)]">
        <Image src={`${assetRoot}/drivemate-cta-bandung.png`} alt="Armada Sewa Elf Bandung dengan latar Gedung Sate Bandung" fill sizes="1176px" className="scale-[1.1] object-cover object-[60%_center] transition-transform duration-700 ease-out group-hover:scale-[1.135]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(18,55,184,.98)_0%,rgba(40,87,232,.94)_45%,rgba(105,32,204,.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(80,199,16,.24),transparent_30%)]" />
        <div className="relative z-10 max-w-[620px] px-7 py-14 sm:px-11 lg:px-14 lg:py-[72px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#50C710]">Sewa Elf Bandung by Amoora Group</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-[46px]">Siap Menjelajahi<br />Bandung Bersama Rombongan?</h2>
          <p className="mt-4 max-w-[500px] text-sm leading-6 text-slate-200">Pesan Elf, Hiace, atau Bus pariwisata sekarang dan nikmati perjalanan yang aman, nyaman, dan berkesan bersama kami.</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-slate-200">
            <span className="flex items-center gap-2"><Check className="size-4 text-[#50C710]" />Unit Euro4 Terawat</span>
            <span className="flex items-center gap-2"><Clock3 className="size-4 text-[#50C710]" />Driver Siap Tepat Waktu</span>
            <span className="flex items-center gap-2"><Headphones className="size-4 text-[#50C710]" />Hotline 24/7</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={bookingUrl()} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(80,199,16,.3)] transition hover:-translate-y-0.5"><WhatsappLogoIcon className="size-5" weight="fill" />Booking via WhatsApp</a>
            <Link href="/armada" className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"><CarFront className="size-4" />Lihat Semua Armada <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
