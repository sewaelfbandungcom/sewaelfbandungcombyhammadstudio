import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fuel, Gauge, MapPin, MessageCircle, Star, Users } from "lucide-react";

import { assetRoot, bookingUrl, busFleet } from "./content";

export function MotorFleetSection() {
  const promos = ["Jetbus 3+", "Jetbus 5", "Super Executive", "High Deck HDD", "Super High Deck", "VIP Legrest", "Gagah & Mewah", "VVIP Sultan"] as const;

  return (
    <section
      id="bus-pariwisata"
      className="relative overflow-hidden bg-[#101B38] py-20 text-white lg:py-28"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={`${assetRoot}/bandung-braga-dusk.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="scale-[1.03] object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,27,56,.99)_0%,rgba(18,55,184,.93)_35%,rgba(105,32,204,.45)_68%,rgba(16,27,56,.93)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(105,32,204,.35),transparent_28%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(80,199,16,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(80,199,16,.2)_1px,transparent_1px)] [background-size:54px_54px]" />
      </div>

      <div className="site-container relative z-10">
        <header className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[780px]">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#50C710]">
              <MapPin className="size-4" /> Solusi Rombongan Besar &amp; Luar Kota
            </p>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.04em] text-white sm:text-[36px] lg:text-[44px]">
              Sewa Bus Pariwisata &amp; Unit VIP Bandung
            </h2>
            <p className="mt-4 max-w-[650px] text-sm leading-6 text-slate-200">
              Kapasitas 14 hingga 59 seat dengan fasilitas lengkap: AC Ducting, Audio Video Karaoke, Reclining Seat, USB Charger, dan Bagasi Luas.
            </p>
          </div>

          <Link
            href="/armada"
            className="group inline-flex h-11 w-fit shrink-0 items-center gap-2 rounded-lg border border-[#50C710]/60 bg-[#50C710]/15 px-5 text-[14px] font-bold text-white backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#50C710] active:translate-y-0"
          >
            Lihat Semua Unit
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </header>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-6">
          {busFleet.map((unit, index) => (
            <article
              key={`${unit.name}-${index}`}
              className="group flex min-h-[450px] w-[82vw] max-w-[310px] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-white/60 bg-white shadow-[0_18px_46px_rgba(0,0,0,.28)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-2 hover:border-[#50C710] hover:shadow-[0_28px_64px_rgba(18,55,184,.3)] sm:w-auto sm:max-w-none"
            >
              <div className="relative aspect-[1.03] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#F1F6FF_0%,#E2ECFF_52%,#C8DCFF_100%)]">
                <Image
                  src={unit.image}
                  alt={`${unit.name} - Sewa Elf Bandung by Amoora`}
                  fill
                  sizes="(min-width: 1024px) 276px, (min-width: 640px) calc(50vw - 32px), calc(100vw - 40px)"
                  className="object-cover hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1237B8]/20 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-[#6920CC] px-2.5 py-1.5 text-[9px] font-bold text-white shadow-[0_8px_20px_rgba(105,32,204,.28)]"><Star className="size-3 fill-current" />{promos[index]}</span>
                <span className="absolute right-3 top-3 rounded-lg border border-[#50C710]/30 bg-[#F2FBEA] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#50C710] shadow-sm backdrop-blur">Tersedia</span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex min-h-14 items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[16px] font-bold leading-6 text-[#101B38]">
                      {unit.name}
                    </h3>
                    <p className="mt-2 flex gap-3 text-[10px] text-[#65708A]">
                      <span className="flex items-center gap-1"><Users className="size-3.5 text-[#1237B8]" />Pariwisata</span>
                      <span className="flex items-center gap-1"><Gauge className="size-3.5 text-[#1237B8]" />Nyaman</span>
                    </p>
                  </div>
                  <p className="text-right text-[15px] font-bold leading-5 text-[#1237B8] [font-variant-numeric:tabular-nums]">
                    {unit.dailyPrice}
                  </p>
                </div>

                <a
                  href={bookingUrl(unit.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pesan ${unit.name} melalui WhatsApp`}
                  className="mt-auto flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] text-xs font-bold text-white shadow-[0_10px_22px_rgba(80,199,16,.22)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
                >
                  <MessageCircle aria-hidden="true" className="size-[18px]" />
                  Booking Unit Ini
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
