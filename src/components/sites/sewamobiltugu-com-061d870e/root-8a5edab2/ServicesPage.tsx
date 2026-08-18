"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, CheckCircle2, Compass, Home, MapPin } from "lucide-react";
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
    note: "Cocok untuk perjalanan wisata ke berbagai destinasi seperti Bandung, Lembang, Ciwidey, Pangalengan, Pangandaran, Garut, Subang, dan berbagai tujuan wisata lainnya.",
  },
  {
    num: "2",
    title: "Sewa Elf untuk Study Tour",
    desc: "Layanan sewa Elf Bandung untuk study tour cocok untuk sekolah, kampus, lembaga pendidikan, maupun organisasi.",
    note: "Dengan kendaraan yang dapat menampung rombongan, perjalanan menuju lokasi kegiatan menjadi lebih praktis dan terkoordinasi.",
  },
  {
    num: "3",
    title: "Sewa Elf untuk Gathering Perusahaan",
    desc: "Kami melayani kebutuhan rental Elf Bandung untuk gathering, outing, meeting, dan perjalanan perusahaan.",
    note: "Menggunakan Elf dapat membantu memudahkan pengaturan transportasi karyawan sehingga perjalanan rombongan menjadi lebih efisien.",
  },
  {
    num: "4",
    title: "Sewa Elf untuk Keluarga",
    desc: "Bagi Anda yang ingin bepergian bersama keluarga besar, sewa Elf Bandung dapat menjadi solusi transportasi yang nyaman.",
    note: "Tidak perlu menggunakan beberapa mobil pribadi. Seluruh anggota keluarga dapat melakukan perjalanan bersama dalam satu kendaraan.",
  },
  {
    num: "5",
    title: "Sewa Elf untuk Acara dan Event",
    desc: "Kami juga melayani kebutuhan kendaraan untuk berbagai acara:",
    list: [
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
    note: "Rute dan durasi perjalanan dapat disesuaikan dengan kebutuhan pemesan.",
  },
  {
    num: "7",
    title: "Sewa Elf Bandung untuk Luar Kota",
    desc: "Selain melayani perjalanan di wilayah Bandung, kami juga melayani kebutuhan perjalanan luar kota.",
    note: "Anda dapat berkonsultasi terlebih dahulu mengenai tujuan, tanggal keberangkatan, durasi perjalanan, jumlah penumpang, serta kebutuhan kendaraan.",
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
        <section className="relative flex min-h-[280px] sm:min-h-[340px] items-end overflow-hidden pb-8 sm:pb-10 pt-[116px] sm:pt-[136px] text-white">
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
            <p className="mt-1.5 max-w-[620px] text-xs sm:text-sm font-medium text-slate-200">
              Sewa Elf Bandung by Amoora Group menyediakan layanan penyewaan kendaraan Elf untuk berbagai kebutuhan perjalanan di Bandung dan sekitarnya.
            </p>
          </div>
        </section>

        {/* 7 Pilihan Layanan (from Markdown) */}
        <section className="py-8 sm:py-12 lg:py-14 bg-white">
          <div className="site-container">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                Pilihan Layanan Sewa Elf Bandung
              </h2>
              <p className="mt-1 text-xs text-[#64748B]">
                Kami menyediakan layanan sewa Elf Bandung untuk berbagai kebutuhan:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((svc) => (
                <div
                  key={svc.num}
                  className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFC] p-5 shadow-2xs transition hover:border-[#1237B8]/40 hover:bg-white"
                >
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                    {svc.num}. {svc.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#334155]">
                    {svc.desc}
                  </p>
                  {svc.note ? (
                    <p className="mt-2 text-[11px] leading-relaxed text-[#64748B]">
                      {svc.note}
                    </p>
                  ) : null}
                  {svc.list ? (
                    <ul className="mt-2 grid grid-cols-2 gap-1 text-[11px] font-medium text-[#1237B8]">
                      {svc.list.map((it) => (
                        <li key={it} className="flex items-center gap-1.5">
                          <span className="size-1 rounded-full bg-[#50C710]" /> {it}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cara Pemesanan SOP (from Markdown) */}
        <section className="py-8 sm:py-12 bg-[#F1F6FF]">
          <div className="site-container max-w-[780px]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] text-center">
              Cara Pemesanan
            </h2>

            <div className="mt-5 rounded-2xl border border-[#DCE5F0] bg-white p-5 sm:p-7 shadow-xs">
              <ul className="space-y-3 text-xs sm:text-sm text-[#0F172A]">
                {bookingRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-[#50C710] text-[10px] font-extrabold text-white">
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
