import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { assetRoot } from "./content";

export function AboutSection() {
  return (
    <section id="tentang-kami" className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="absolute inset-x-0 top-[38%] h-36 -skew-y-6 bg-[#1237B8]/[0.035]" />
      <div className="site-container relative grid items-center gap-14 md:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[520px] pb-5 pr-5">
          <div className="absolute bottom-0 right-0 h-[94%] w-[94%] rounded-2xl bg-[#1237B8]" />
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_24px_70px_rgba(18,55,184,.18)]">
            <Image src={`${assetRoot}/about-bandung.jpg`} alt="Jalan Braga dan ikon kota Bandung" fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover object-center" />
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1237B8]">Profil Sewa Elf Bandung</p>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.035em] text-[#101B38] md:text-[2.6rem]">Sewa Elf Bandung – <span className="text-[#1237B8]">Solusi Transportasi</span> Rombongan Terpercaya</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#65708A] md:text-base">
            <p><strong className="font-semibold text-[#101B38]">Sewa Elf Bandung by Amoora Group</strong> menyediakan layanan penyewaan kendaraan Elf, Hiace, dan Bus Pariwisata untuk berbagai kebutuhan perjalanan di Bandung dan sekitarnya. Kami hadir sebagai solusi transportasi rombongan yang nyaman, aman, praktis, dan profesional, baik untuk perjalanan dalam kota maupun luar kota.</p>
            <p>Dengan kapasitas penumpang yang sesuai untuk kelompok, kendaraan Elf dan Hiace menjadi pilihan tepat bagi <strong className="font-semibold text-[#101B38]">keluarga, perusahaan, sekolah, komunitas, maupun wisatawan</strong>. Kami melayani destinasi populer seperti Lembang, Ciwidey, Pangalengan, Pangandaran, Garut, Subang, hingga carter antar kota.</p>
          </div>
          <a href="#kontak" className="mt-7 inline-flex h-12 items-center gap-3 rounded-xl bg-[#1237B8] hover:bg-[#2857E8] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(18,55,184,0.22)] transition hover:-translate-y-0.5 active:translate-y-0">Hubungi Kami <span className="grid size-7 place-items-center rounded-lg bg-white text-[#1237B8]"><ArrowRight size={15} /></span></a>
        </div>
      </div>
    </section>
  );
}
