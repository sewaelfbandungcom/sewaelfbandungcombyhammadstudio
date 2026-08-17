import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Gauge, Heart, MapPinned, MessageCircle, Plane, Snowflake, Star, UsersRound, Users } from "lucide-react";

import { assetRoot, bookingUrl, cars } from "./content";

const tripTypes = [
  { title: "Wisata Bandung", note: "Lembang & Ciwidey", icon: MapPinned },
  { title: "Drop Luar Kota", note: "Soetta & Antar Kota", icon: Plane },
  { title: "Study Tour & Gathering", note: "Sekolah & Perusahaan", icon: Heart },
  { title: "Acara & Wedding", note: "Shuttle Rombongan", icon: BriefcaseBusiness },
] as const;

const promos = ["Best Seller", "Favorit Wisata", "Paling Hemat", "Unit Euro4", "Luxury VIP", "Favorit Keluarga", "Nyaman", "Ekonomis"] as const;

export function CarFleetSection() {
  return (
    <section id="armada" className="relative overflow-hidden bg-[#F1F6FF] py-20 lg:py-28">
      <Image src={`${assetRoot}/bandung-gedung-sate.jpg`} alt="" fill sizes="100vw" className="pointer-events-none object-cover object-top opacity-[0.13]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(241,246,255,.48)_0%,rgba(241,246,255,.94)_34%,#F1F6FF_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(18,55,184,.08),transparent_24%),radial-gradient(circle_at_88%_72%,rgba(105,32,204,.06),transparent_28%)]" />
      <div className="site-container relative">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-[650px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1237B8]">Armada Rombongan Terbaik</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#101B38] sm:text-[40px]">Sewa Elf &amp; Hiace<br />Sesuai Rombongan Anda</h2>
            <p className="mt-4 max-w-[560px] text-sm leading-6 text-[#65708A]">Pilihan unit Isuzu Elf Long, Toyota Hiace Premio &amp; Commuter, serta MPV terawat untuk wisata dan perjalanan luar kota di Bandung.</p>
          </div>
          <Link href="/armada" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1237B8] hover:text-[#2857E8]">Lihat semua armada <ArrowRight className="size-4" /></Link>
        </div>

        <div className="mt-8 flex gap-2 border-b border-[#D9E4F2]">
          <span className="border-b-2 border-[#1237B8] px-5 py-3 text-sm font-bold text-[#1237B8]">Elf &amp; Hiace (Microbus)</span>
          <a href="#bus-pariwisata" className="px-5 py-3 text-sm font-semibold text-[#65708A] transition hover:text-[#101B38]">Bus Pariwisata (Medium &amp; Big)</a>
        </div>

        <div className="mt-6 grid gap-y-4 border-y border-[#D9E4F2] py-4 sm:grid-cols-2 lg:grid-cols-4">
          {tripTypes.map(({ title, note, icon: Icon }, index) => (
            <div key={title} className={`flex items-center gap-3 lg:px-5 ${index > 0 ? "lg:border-l lg:border-[#D9E4F2]" : "lg:pl-0"}`}>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#E8F1FF] text-[#1237B8]"><Icon className="size-5" strokeWidth={1.8} /></span>
              <span><strong className="block text-xs font-bold text-[#101B38]">{title}</strong><span className="mt-0.5 block text-[10px] text-[#65708A]">{note}</span></span>
            </div>
          ))}
        </div>

        <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-6">
          {cars.map((vehicle, index) => {
            const price = vehicle.selfDrivePrice;
            const secondaryPrice = vehicle.allInPrice;
            return (
              <article key={`${vehicle.name}-${index}`} className="group flex min-h-[490px] w-[82vw] max-w-[310px] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-white bg-white shadow-[0_14px_38px_rgba(18,55,184,.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_64px_rgba(18,55,184,.17)] sm:w-auto sm:max-w-none">
                <div className="relative aspect-[1.03] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#F1F6FF_0%,#E2ECFF_52%,#C8DCFF_100%)]">
                  <Image src={vehicle.image} alt={`${vehicle.name} Sewa Elf Bandung`} fill sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw" className="object-cover hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.025]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1237B8]/20 to-transparent" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-[#1237B8] px-2.5 py-1.5 text-[9px] font-bold text-white shadow-[0_8px_20px_rgba(18,55,184,.28)]"><Star className="size-3 fill-current" />{promos[index]}</span>
                  <span className="absolute right-3 top-3 rounded-lg border border-white/60 bg-white/90 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#50C710] shadow-sm backdrop-blur">Tersedia</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[17px] font-bold tracking-[-0.025em] text-[#101B38]">{vehicle.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-[10px] text-[#65708A]">
                    <span className="flex items-center gap-1"><Users className="size-3.5 text-[#1237B8]" />{vehicle.name.includes("Elf") ? "19 Kursi" : vehicle.name.includes("Hiace") ? "14 Kursi" : "5-7 Kursi"}</span>
                    <span className="flex items-center gap-1"><Snowflake className="size-3.5 text-[#1237B8]" />AC Dingin</span>
                    <span className="flex items-center gap-1"><Gauge className="size-3.5 text-[#1237B8]" />Euro4 Prima</span>
                  </div>
                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-[#E2E8F0] pt-4">
                    <div><span className="block text-[10px] text-[#65708A]">Dalam Kota (12 Jam)</span><strong className="text-[18px] font-bold tracking-[-0.025em] text-[#1237B8] [font-variant-numeric:tabular-nums]">{price}</strong></div>
                    {secondaryPrice ? <span className="max-w-[92px] text-right text-[10px] leading-4 text-[#65708A]">Luar Kota<br />{secondaryPrice}</span> : null}
                  </div>
                  <a href={bookingUrl(vehicle.name)} target="_blank" rel="noreferrer" className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] text-xs font-bold text-white shadow-[0_10px_22px_rgba(80,199,16,.25)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(80,199,16,.35)]"><MessageCircle className="size-4" />Booking via WhatsApp</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
