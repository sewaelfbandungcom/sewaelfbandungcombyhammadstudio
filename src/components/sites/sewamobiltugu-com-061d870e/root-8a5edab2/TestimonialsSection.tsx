import Image from "next/image";
import { ArrowUpRight, MapPin, Quote, Star } from "lucide-react";

import { assetRoot } from "./content";

const testimonials = [
  {
    quote:
      "Elf Long Euro4 nya sangat terawat, AC dingin sampai baris belakang dan jok reclining empuk. Sopirnya sangat sabar, ramah, dan hafal jalan tikus di Lembang saat weekend. Rombongan keluarga besar kami sangat puas!",
    name: "Drs. H. Bambang Priyanto",
    city: "Rombongan Ziarah & Wisata",
    initials: "BP",
  },
  {
    quote:
      "Gathering kantor PT Sinergi Digital ke Cikole sukses besar! Penjemputan tepat waktu di stasiun KCIC Tegalluar, unit medium bus bersih wangi, fasilitas audio karaoke jernih sepanjang perjalanan.",
    name: "Clarissa Dewi",
    city: "PT Sinergi Digital Jakarta",
    initials: "CD",
  },
  {
    quote:
      "Hiace Premio Luxury Captain Seat nya bener-bener nyaman untuk tamu direksi VIP kami. Harga sangat kompetitif dan admin WhatsApp responnya cepat dalam hitungan menit.",
    name: "Ibu Ratna Hendrawan",
    city: "Liburan Keluarga & VIP",
    initials: "RH",
  },
] as const;

function Stars() {
  return (
    <span className="flex gap-1 text-[#F59E0B]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current drop-shadow-xs" />
      ))}
    </span>
  );
}

export function TestimonialsSection() {
  const [featured, ...others] = testimonials;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F1F6FF_0%,#E8F1FF_100%)] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[430px] rounded-full bg-[#E2ECFF]/70 blur-3xl" />
      <div className="site-container relative grid items-stretch gap-10 lg:grid-cols-[.78fr_1.42fr] lg:gap-14">
        {/* Rating Card Left */}
        <aside className="group relative min-h-[440px] overflow-hidden rounded-[28px] bg-[#0F172A] text-white shadow-[0_28px_70px_rgba(18,55,184,.22)] transition duration-500 hover:shadow-[0_34px_80px_rgba(18,55,184,.3)] sm:min-h-[470px]">
          <Image
            src={`${assetRoot}/bandung-braga-sign.jpg`}
            alt="Suasana Jalan Braga, Bandung"
            fill
            sizes="(min-width:1024px) 420px, 100vw"
            className="object-cover object-[54%_76%] transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,.2),rgba(15,23,42,.95)_74%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#50C710]">
              Kepuasan Rombongan
            </p>
            <div className="mt-3 flex items-end gap-2">
              <strong className="text-5xl sm:text-6xl font-extrabold leading-none tracking-[-0.06em]">4.9</strong>
              <span className="pb-1 text-2xl font-bold text-[#50C710]">/5</span>
            </div>
            <div className="mt-4">
              <Stars />
            </div>
            <p className="mt-3 text-sm font-bold text-white">5.000+ rombongan terlayani</p>
            <a
              href="#kontak"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-[#0F172A] transition hover:-translate-y-1 hover:bg-[#F1F6FF] hover:shadow-md"
            >
              Konsultasi Rute <ArrowUpRight className="size-4 text-[#1237B8]" />
            </a>
          </div>
        </aside>

        {/* Reviews List Right */}
        <div className="flex flex-col justify-center">
          <header>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1237B8]">
              Testimoni Rombongan
            </p>
            <h2 className="mt-3 max-w-[660px] text-2xl font-extrabold leading-[1.12] tracking-[-0.045em] text-[#0F172A] sm:text-3xl lg:text-[40px]">
              Dipercaya untuk<br />
              <span className="text-[#1237B8]">Setiap Perjalanan Rombongan</span>
            </h2>
          </header>

          {/* Featured Review */}
          <article className="group relative mt-7 rounded-[22px] border border-white bg-white p-6 shadow-[0_18px_46px_rgba(18,55,184,.09)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_56px_rgba(18,55,184,.16)] sm:p-7">
            <Quote className="absolute right-6 top-5 size-12 fill-[#1237B8]/8 text-[#1237B8]/20 transition duration-300 group-hover:scale-110 group-hover:text-[#1237B8]/30" />
            <p className="relative max-w-[640px] text-[14px] leading-relaxed text-[#1E293B] sm:text-[15px] sm:leading-7">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E8F0] pt-4.5">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-[#1237B8] to-[#6920CC] text-xs font-bold text-white shadow-md">
                  {featured.initials}
                </span>
                <div>
                  <strong className="block text-sm font-bold text-[#0F172A]">{featured.name}</strong>
                  <span className="mt-0.5 flex items-center gap-1 text-xs font-medium text-[#475569]">
                    <MapPin className="size-3 text-[#1237B8]" />
                    {featured.city}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Stars />
                <span className="text-[10px] font-bold text-[#475569]">Ulasan Terverifikasi</span>
              </div>
            </div>
          </article>

          {/* Secondary Reviews */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {others.map((item) => (
              <article
                key={item.name}
                className="group rounded-[18px] border border-white/80 bg-white/85 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_36px_rgba(18,55,184,.1)]"
              >
                <Quote className="size-7 fill-[#1237B8]/10 text-[#1237B8] transition duration-300 group-hover:scale-110" />
                <p className="mt-2 text-[13px] leading-relaxed text-[#1E293B]">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#E2E8F0] pt-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 place-items-center rounded-full bg-[#F5F0FF] text-[10px] font-bold text-[#6920CC]">
                      {item.initials}
                    </span>
                    <div>
                      <strong className="block text-xs font-bold text-[#0F172A]">{item.name}</strong>
                      <span className="text-[10px] font-medium text-[#475569]">{item.city}</span>
                    </div>
                  </div>
                  <Stars />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
