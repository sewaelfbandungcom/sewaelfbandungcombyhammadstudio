import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { assetRoot } from "./content";

export function AboutSection() {
  return (
    <section id="tentang-kami" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-[38%] h-36 -skew-y-6 bg-[#F5F0FF]" />
      <div className="site-container relative grid items-center gap-10 md:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[520px] pb-5 pr-5">
          <div className="absolute bottom-0 right-0 h-[94%] w-[94%] rounded-2xl bg-gradient-to-br from-[#1237B8] to-[#6920CC]" />
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_24px_70px_rgba(18,55,184,.18)]">
            <Image
              src={`${assetRoot}/about-bandung.jpg`}
              alt="Jalan Braga dan ikon kota Bandung"
              fill
              sizes="(min-width:768px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#6920CC] bg-[#F5F0FF] px-3 py-1 rounded-md inline-block">
            Profil Sewa Elf Bandung
          </p>
          <h2 className="text-2xl font-extrabold leading-[1.18] tracking-[-0.035em] text-[#0F172A] sm:text-3xl md:text-[2.5rem]">
            Sewa Elf Bandung – <span className="text-[#1237B8]">Solusi Transportasi</span> Rombongan Terpercaya
          </h2>
          <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-[#334155] sm:text-[15px] sm:leading-7">
            <p>
              <strong className="font-extrabold text-[#0F172A]">Sewa Elf Bandung by Amoora Group</strong> menyediakan layanan penyewaan kendaraan Elf, Hiace, dan Bus Pariwisata untuk berbagai kebutuhan perjalanan di Bandung dan sekitarnya. Kami hadir sebagai solusi transportasi rombongan yang nyaman, aman, praktis, dan profesional, baik untuk perjalanan dalam kota maupun luar kota.
            </p>
            <p>
              Dengan kapasitas penumpang yang sesuai untuk kelompok, kendaraan Elf dan Hiace menjadi pilihan tepat bagi <strong className="font-extrabold text-[#0F172A]">keluarga, perusahaan, sekolah, komunitas, maupun wisatawan</strong>. Kami melayani destinasi populer seperti Lembang, Ciwidey, Pangalengan, Pangandaran, Garut, Subang, hingga carter antar kota.
            </p>
          </div>
          <a
            href="#kontak"
            className="mt-6 inline-flex h-12 items-center gap-3 rounded-xl bg-[#1237B8] hover:bg-[#2857E8] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(18,55,184,0.25)] transition hover:-translate-y-0.5 active:translate-y-0"
          >
            Hubungi Kami
            <span className="grid size-7 place-items-center rounded-lg bg-[#50C710] text-white">
              <ArrowRight size={15} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
