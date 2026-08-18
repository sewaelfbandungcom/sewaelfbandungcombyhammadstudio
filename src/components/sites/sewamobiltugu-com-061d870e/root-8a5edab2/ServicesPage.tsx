"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, CheckCircle2, Compass, Home, Info, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { assetRoot, bookingUrl } from "./content";
import { CtaSection } from "./CtaSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const services = [
  {
    num: "1",
    title: "Sewa Elf untuk Wisata",
    desc: "Ingin liburan bersama keluarga atau rombongan tanpa harus menggunakan beberapa kendaraan? Layanan rental Elf Bandung untuk wisata dapat menjadi pilihan yang praktis.",
    target: "Cocok untuk perjalanan wisata ke berbagai destinasi seperti Bandung, Lembang, Ciwidey, Pangalengan, Pangandaran, Garut, Subang, dan berbagai tujuan wisata lainnya.",
  },
  {
    num: "2",
    title: "Sewa Elf untuk Study Tour",
    desc: "Layanan sewa Elf Bandung untuk study tour cocok untuk sekolah, kampus, lembaga pendidikan, maupun organisasi.",
    target: "Dengan kendaraan yang dapat menampung rombongan, perjalanan menuju lokasi kegiatan menjadi lebih praktis dan terkoordinasi.",
  },
  {
    num: "3",
    title: "Sewa Elf untuk Gathering Perusahaan",
    desc: "Kami melayani kebutuhan rental Elf Bandung untuk gathering, outing, meeting, dan perjalanan perusahaan.",
    target: "Menggunakan Elf dapat membantu memudahkan pengaturan transportasi karyawan sehingga perjalanan rombongan menjadi lebih efisien.",
  },
  {
    num: "4",
    title: "Sewa Elf untuk Keluarga",
    desc: "Bagi Anda yang ingin bepergian bersama keluarga besar, sewa Elf Bandung dapat menjadi solusi transportasi yang nyaman.",
    target: "Tidak perlu menggunakan beberapa mobil pribadi. Seluruh anggota keluarga dapat melakukan perjalanan bersama dalam satu kendaraan.",
  },
  {
    num: "5",
    title: "Sewa Elf untuk Acara dan Event",
    desc: "Kami juga melayani kebutuhan kendaraan untuk berbagai acara:",
    items: [
      "Pernikahan",
      "Acara keluarga",
      "Komunitas",
      "Organisasi",
      "Seminar",
      "Event perusahaan",
      "Acara kampus",
      "Kegiatan sosial",
      "Perjalanan rombongan",
    ],
  },
  {
    num: "6",
    title: "Sewa Elf untuk Ziarah dan Perjalanan Religi",
    desc: "Layanan sewa Elf Bandung untuk ziarah dapat digunakan untuk perjalanan bersama keluarga, komunitas, maupun rombongan menuju berbagai lokasi tujuan.",
    target: "Rute dan durasi perjalanan dapat disesuaikan dengan kebutuhan pemesan.",
  },
  {
    num: "7",
    title: "Sewa Elf Bandung untuk Luar Kota",
    desc: "Selain melayani perjalanan di wilayah Bandung, kami juga melayani kebutuhan perjalanan luar kota.",
    target: "Anda dapat berkonsultasi terlebih dahulu mengenai tujuan, tanggal keberangkatan, durasi perjalanan, jumlah penumpang, serta kebutuhan kendaraan.",
  },
];

const bookingRules = [
  "Anda dapat menghubungi kami melalui Telp, Whatsapp di nomor yang sudah tertera di website.",
  "Informasikan dengan jelas kepada kami mengenai detail penjemputan, tujuan, tanggal dan type bus yang diinginkan untuk mengkonfirmasi harga sewa.",
  "Pemesanan sewa kendaraan akan dikatakan deal jika sudah melakukan DP sebesar 30 % dari total sewa.",
  "Pelunasan dilakukan maksimal di H-3 ( 3 hari sebelum keberangkatan ).",
  "Kontak driver akan kami informasikan di H-1 ( 1 hari sebelum keberangkatan ).",
  "DP tidak bisa diuangkan kembali.",
  "Pembatalan pada H-3 dikenakan biaya 100% dari harga sewa.",
];

export function ServicesPage() {
  return (
    <div id="top" className="min-h-screen bg-[#F1F6FF] text-[#0F172A]">
      <SiteHeader />
      <main>
        {/* Header Hero */}
        <section className="relative flex min-h-[320px] sm:min-h-[380px] items-end overflow-hidden pb-8 sm:pb-12 pt-[116px] sm:pt-[136px] text-white">
          <Image
            src={`${assetRoot}/drivemate-cta-bandung.png`}
            alt="Layanan Sewa Elf Bandung"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-[center_35%] blur-[2px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,15,30,0.96)_0%,rgba(15,23,42,0.92)_40%,rgba(18,55,184,0.78)_75%,rgba(8,15,30,0.94)_100%)]" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

          <div className="site-container relative z-10 w-full">
            <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="flex items-center gap-1.5 transition hover:text-white">
                <Home className="size-3.5 text-[#50C710]" /> Beranda
              </Link>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="text-white font-bold">Layanan</span>
            </nav>
            <h1 className="text-[30px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white">
              Layanan <span className="text-[#50C710]">Sewa Elf Bandung</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm font-medium text-slate-200">
              Pilihan layanan transportasi rombongan yang nyaman, aman, praktis, dan profesional.
            </p>
          </div>
        </section>

        {/* 7 Pilihan Layanan (from Markdown) */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="site-container">
            <div className="max-w-[700px] mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Pilihan Layanan Sewa Elf Bandung
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#475569]">
                Kami menyediakan layanan sewa Elf Bandung untuk berbagai kebutuhan, antara lain:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((svc) => (
                <div
                  key={svc.num}
                  className="flex flex-col justify-between rounded-2xl border border-[#DCE5F0] bg-[#F8FAFC] p-5 sm:p-6 shadow-2xs transition duration-200 hover:border-[#1237B8]/40 hover:bg-white hover:shadow-md"
                >
                  <div>
                    <h3 className="text-base sm:text-[17px] font-extrabold text-[#0F172A]">
                      {svc.num}. {svc.title.replace(/^\d+\.\s*/, "")}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#334155]">
                      {svc.desc}
                    </p>
                    {svc.target ? (
                      <p className="mt-2 text-xs leading-relaxed text-[#64748B] italic">
                        {svc.target}
                      </p>
                    ) : null}
                    {svc.items ? (
                      <ul className="mt-2.5 grid grid-cols-2 gap-1 text-xs font-semibold text-[#1237B8]">
                        {svc.items.map((it) => (
                          <li key={it} className="flex items-center gap-1.5">
                            <span className="size-1 rounded-full bg-[#50C710]" /> {it}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  <a
                    href={bookingUrl(`Layanan: ${svc.title}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] text-xs font-bold text-white shadow-xs transition hover:-translate-y-0.5"
                  >
                    <WhatsappLogoIcon className="size-4" weight="fill" /> Pesan Layanan Ini
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cara Pemesanan SOP (from Markdown) */}
        <section className="py-10 sm:py-14 bg-[#F1F6FF]">
          <div className="site-container max-w-[840px]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] text-center">
              Cara Pemesanan
            </h2>

            <div className="mt-6 rounded-2xl border border-[#DCE5F0] bg-white p-6 sm:p-8 shadow-xs">
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#0F172A]">
                {bookingRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#50C710] text-[11px] font-extrabold text-white">
                      ✓
                    </span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Rich CTA Section */}
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
