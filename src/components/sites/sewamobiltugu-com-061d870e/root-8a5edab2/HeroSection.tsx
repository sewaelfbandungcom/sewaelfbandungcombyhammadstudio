import Image from "next/image";
import { ArrowRight, CalendarDays, CarFront, Check, CircleDollarSign, Clock3, CreditCard, KeyRound, MapPin, RotateCcw, Search, ShieldCheck, UserRound, Users } from "lucide-react";

import { assetRoot, bookingUrl } from "./content";

const bookingFields = [
  { label: "Lokasi Penjemputan", value: "Bandung Kota / Stasiun / Bandara", icon: MapPin },
  { label: "Destinasi Wisata / Rute", value: "Lembang / Ciwidey / Luar Kota", icon: MapPin },
  { label: "Jadwal & Tanggal", value: "Pilih tanggal keberangkatan", icon: CalendarDays },
  { label: "Tipe Armada", value: "Elf Long 19 Seat / Hiace", icon: Users },
] as const;

const bookingBenefits = [
  { title: "SOP Transparan", note: "DP 30% Kunci Jadwal", icon: RotateCcw },
  { title: "Harga Kompetitif", note: "Tanpa biaya siluman", icon: CircleDollarSign },
  { title: "Armada Euro4 Prima", note: "Bersih, wangi, ber-AC dingin", icon: CarFront },
  { title: "Driver Berpengalaman", note: "Kontak dibagikan H-1", icon: ShieldCheck },
] as const;

const servicePromos = [
  { label: "Elf 19 Seat", icon: Users },
  { label: "Hiace Premio", icon: CarFront },
  { label: "Bus Pariwisata", icon: CarFront },
] as const;

export function HeroSection() {
  return (
    <section className="relative bg-[#F1F6FF] text-white">
      <div className="relative min-h-[790px] overflow-hidden rounded-b-[52px] bg-[#101B38] sm:rounded-b-[68px] lg:min-h-[800px] lg:rounded-b-[92px]">
        <Image src={`${assetRoot}/drivemate-hero-bandung.png`} alt="Armada Sewa Elf Bandung dengan latar kota Bandung" fill priority sizes="100vw" className="scale-[1.03] object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,27,56,.99)_0%,rgba(18,55,184,.92)_35%,rgba(40,87,232,.48)_58%,rgba(105,32,204,.08)_84%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(40,87,232,.25),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#101B38]/95 to-transparent" />

        <div className="site-container relative z-10 flex min-h-[790px] items-start pb-[205px] pt-[152px] sm:pt-[166px] lg:min-h-[800px] lg:items-center lg:pb-[175px] lg:pt-[120px]">
          <div className="max-w-[680px]">
          <p className="hero-reveal hero-delay-1 mb-5 inline-flex items-center gap-2 rounded-full border border-[#50C710]/40 bg-[#50C710]/15 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#50C710] backdrop-blur-md"><ShieldCheck className="size-4" /> Sewa Elf Bandung by Amoora Group</p>
          <h1 className="hero-reveal hero-delay-2 max-w-[680px] text-[43px] font-bold leading-[1.06] tracking-[-0.05em] text-balance sm:text-[56px] lg:text-[60px]">
            Sewa Elf &amp; Hiace di <span className="text-[#50C710]">Bandung,</span><br />Nyaman untuk Rombongan
          </h1>
          <p className="hero-reveal hero-delay-3 mt-6 max-w-[560px] text-[15px] leading-7 text-slate-200 sm:text-base">Solusi transportasi sewa Elf Long 19 Seat, Toyota Hiace Premio, &amp; Bus Pariwisata untuk wisata Lembang, Ciwidey, study tour, gathering kantor, hingga drop luar kota.</p>
          <div className="hero-reveal hero-delay-4 mt-8 flex flex-wrap gap-3">
            <a href={bookingUrl()} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#50C710] px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(80,199,16,.35)] transition hover:-translate-y-0.5 hover:bg-[#43aa0c]">Pesan via WhatsApp <ArrowRight className="size-4" /></a>
            <a href="#armada" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">Lihat Daftar Armada <ArrowRight className="size-4" /></a>
          </div>
          <div className="hero-reveal hero-delay-5 mt-7 flex w-fit max-w-full flex-wrap items-stretch overflow-hidden rounded-2xl border border-white/15 bg-[#101B38]/80 shadow-[0_16px_42px_rgba(0,0,0,.28)] backdrop-blur-md">
            <div className="min-w-[155px] border-b border-white/10 px-4 py-3 sm:border-b-0 sm:border-r">
              <span className="block text-[10px] font-medium text-slate-300">Elf Long 19 Seat</span>
              <strong className="mt-0.5 block text-xl font-bold tracking-[-0.03em] text-[#50C710]">Rp1,4 Juta<span className="ml-1 text-[10px] font-medium text-slate-300">/hari</span></strong>
            </div>
            {servicePromos.map(({ label, icon: Icon }) => (
              <span key={label} className="flex min-w-[112px] items-center gap-2 border-l border-white/10 px-3.5 py-3 text-[10px] font-semibold text-slate-200">
                <Icon className="size-4 text-[#50C710]" />{label}
              </span>
            ))}
          </div>
          <div className="hero-reveal hero-delay-6 mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex -space-x-2">{["AG", "EB", "ST", "ZG"].map((initials) => <span key={initials} className="grid size-8 place-items-center rounded-full border-2 border-[#101B38] bg-gradient-to-br from-[#F5F0FF] to-[#6920CC] text-[8px] font-bold text-white">{initials}</span>)}</div>
            <p className="text-[11px] leading-4 text-slate-300"><strong className="block text-xs text-white">5.000+ rombongan terlayani</strong>di Bandung dan berbagai kota</p>
            <span className="flex items-center gap-2 text-[11px] font-medium text-slate-200"><span className="grid size-5 place-items-center rounded-full border border-[#50C710] text-[#50C710]"><Check className="size-3" /></span>Unit Euro4 Terawat</span>
          </div>
          </div>
        </div>
      </div>

      <div className="hero-reveal hero-delay-7 site-container relative z-20 -mt-[108px] pb-6 sm:-mt-[120px] lg:-mt-[126px] lg:pb-8">
        <div className="rounded-[24px] border border-white/80 bg-white p-6 text-[#101B38] shadow-[0_30px_80px_rgba(18,55,184,.14),inset_0_1px_0_rgba(255,255,255,1)] sm:p-8">
          <div className="mb-6">
            <h2 className="text-lg font-bold tracking-[-0.025em] text-[#101B38]">Rencanakan Perjalanan Rombongan Anda</h2>
            <p className="mt-1 text-xs text-[#65708A]">Konsultasi rute wisata, penjemputan bandara/stasiun, dan ketersediaan armada langsung dengan admin resmi.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1.05fr_.72fr_auto] xl:items-end">
            {bookingFields.map(({ label, value, icon: Icon }) => (
              <label key={label} className="block text-[11px] font-bold text-[#65708A]">
                {label}
                <span className="mt-2 flex h-14 items-center gap-3 rounded-xl border border-[#DCE5F0] bg-[#F1F6FF] px-4 text-sm font-medium text-[#101B38] shadow-[inset_0_1px_2px_rgba(18,55,184,.025)]"><span className="grid size-8 place-items-center rounded-lg bg-white text-[#1237B8] shadow-sm"><Icon className="size-4" /></span>{value}</span>
              </label>
            ))}
            <a href={bookingUrl()} target="_blank" rel="noreferrer" className="flex h-14 items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-7 text-sm font-bold text-white shadow-[0_14px_28px_rgba(80,199,16,.3)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(80,199,16,.36)]"><Search className="size-4" />Konsultasi WhatsApp</a>
          </div>
          <div className="mt-6 grid gap-4 border-t border-[#E2E8F0] pt-5 sm:grid-cols-2 lg:grid-cols-4">
            {bookingBenefits.map(({ title, note, icon: Icon }, index) => <div key={title} className={`flex items-center gap-3 lg:px-4 ${index === 0 ? "lg:pl-0" : "lg:border-l lg:border-[#E2E8F0]"}`}><span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#6920CC]/20 bg-[#F5F0FF] text-[#6920CC]"><Icon className="size-4" /></span><span><strong className="block text-[11px] font-semibold text-[#101B38]">{title}</strong><span className="mt-0.5 block text-[10px] text-[#65708A]">{note}</span></span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
