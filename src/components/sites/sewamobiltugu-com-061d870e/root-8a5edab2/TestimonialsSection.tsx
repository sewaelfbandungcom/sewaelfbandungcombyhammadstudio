import Image from "next/image";
import { ArrowUpRight, MapPin, Quote, Star } from "lucide-react";

import { assetRoot } from "./content";

const testimonials = [
  { quote: "Elf Long Euro4 nya sangat terawat, AC dingin sampai belakang dan jok reclining empuk. Sopirnya sangat sabar dan hafal jalan tikus di Lembang. Rombongan keluarga kami sangat puas!", name: "Drs. H. Bambang Priyanto", city: "Rombongan Ziarah & Wisata", initials: "BP" },
  { quote: "Gathering kantor PT Sinergi Digital ke Cikole sukses besar. Penjemputan tepat waktu di stasiun KCIC Tegalluar, bus pariwisata bersih wangi dan karaoke jernih.", name: "Clarissa Dewi", city: "PT Sinergi Digital Jakarta", initials: "CD" },
  { quote: "Hiace Premio Luxury Captain Seat nya bener-bener nyaman untuk tamu VIP kami. Harga bersahabat dan admin WhatsApp responnya cepat.", name: "Ibu Ratna Hendrawan", city: "Liburan Keluarga Bandung", initials: "RH" },
] as const;

function Stars() {
  return <span className="flex gap-1 text-[#F59E0B]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</span>;
}

export function TestimonialsSection() {
  const [featured, ...others] = testimonials;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F1F6FF_0%,#E8F1FF_100%)] py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[430px] rounded-full bg-[#E2ECFF]/70 blur-3xl" />
      <div className="site-container relative grid items-stretch gap-10 lg:grid-cols-[.78fr_1.42fr] lg:gap-14">
        <aside className="relative min-h-[470px] overflow-hidden rounded-[28px] bg-[#101B38] text-white shadow-[0_28px_70px_rgba(18,55,184,.22)]">
          <Image src={`${assetRoot}/bandung-braga-sign.jpg`} alt="Suasana Jalan Braga, Bandung" fill sizes="(min-width:1024px) 420px, 100vw" className="object-cover object-[54%_76%]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,56,.16),rgba(16,27,56,.94)_74%)]" />
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#50C710]">Kepuasan Rombongan</p>
            <div className="mt-3 flex items-end gap-2"><strong className="text-6xl font-bold leading-none tracking-[-0.06em]">4.9</strong><span className="pb-1 text-2xl font-semibold text-[#50C710]">/5</span></div>
            <div className="mt-4"><Stars /></div>
            <p className="mt-3 text-sm font-semibold">5.000+ rombongan terlayani</p>
            <a href="#kontak" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[#101B38] transition hover:-translate-y-0.5 hover:bg-[#F1F6FF]">Konsultasi Rute <ArrowUpRight className="size-4" /></a>
          </div>
        </aside>

        <div className="flex flex-col justify-center">
          <header>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1237B8]">Testimoni Rombongan</p>
            <h2 className="mt-3 max-w-[660px] text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-[#101B38] sm:text-[42px]">Dipercaya untuk<br /><span className="text-[#1237B8]">Setiap Perjalanan Rombongan</span></h2>
          </header>

          <article className="relative mt-8 rounded-[22px] bg-white p-6 shadow-[0_18px_46px_rgba(18,55,184,.09)] sm:p-7">
            <Quote className="absolute right-6 top-5 size-12 fill-[#1237B8]/8 text-[#1237B8]/20" />
            <p className="relative max-w-[640px] text-sm leading-7 text-[#475569]">{featured.quote}</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E8F0] pt-5">
              <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-[#E2ECFF] to-[#1237B8] text-xs font-bold text-white shadow-md">{featured.initials}</span><span><strong className="block text-sm text-[#101B38]">{featured.name}</strong><span className="mt-0.5 flex items-center gap-1 text-xs text-[#65708A]"><MapPin className="size-3 text-[#1237B8]" />{featured.city}</span></span></div>
              <div className="flex items-center gap-3"><Stars /><span className="text-[10px] font-semibold text-[#65708A]">Ulasan Pelanggan</span></div>
            </div>
          </article>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            {others.map((item) => (
              <article key={item.name} className="border-t-2 border-[#1237B8]/20 pt-5">
                <Quote className="size-8 fill-[#1237B8]/10 text-[#1237B8]" />
                <p className="mt-3 text-[13px] leading-6 text-[#475569]">{item.quote}</p>
                <div className="mt-4 flex items-center justify-between gap-3"><div className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-full bg-[#F5F0FF] text-[10px] font-bold text-[#6920CC]">{item.initials}</span><span><strong className="block text-xs text-[#101B38]">{item.name}</strong><span className="text-[10px] text-[#65708A]">{item.city}</span></span></div><Stars /></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
