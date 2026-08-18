"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, Building2, Home, MapPin, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { assetRoot } from "./content";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function ContactPage() {
  return (
    <div id="top" className="min-h-screen bg-[#F1F6FF] text-[#0F172A]">
      <SiteHeader />
      <main>
        {/* Header Hero */}
        <section className="relative flex min-h-[320px] sm:min-h-[380px] items-end overflow-hidden pb-8 sm:pb-12 pt-[116px] sm:pt-[136px] text-white">
          <Image
            src={`${assetRoot}/bandung-gedung-sate.jpg`}
            alt="Kontak Sewa Elf Bandung"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-center blur-[2px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,15,30,0.96)_0%,rgba(15,23,42,0.92)_40%,rgba(18,55,184,0.78)_75%,rgba(8,15,30,0.94)_100%)]" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

          <div className="site-container relative z-10 w-full">
            <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="flex items-center gap-1.5 transition hover:text-white">
                <Home className="size-3.5 text-[#50C710]" /> Beranda
              </Link>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="text-white font-bold">Kontak</span>
            </nav>
            <h1 className="text-[30px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white">
              Kontak <span className="text-[#50C710]">Sewa Elf Bandung</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm font-medium text-slate-200">
              Hubungi kami untuk informasi pemesanan dan reservasi armada kendaraan.
            </p>
          </div>
        </section>

        {/* Kontak Utama (from Markdown) */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="site-container max-w-[800px]">
            <div className="rounded-3xl border border-[#DCE5F0] bg-[#F8FAFC] p-6 sm:p-10 shadow-sm">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F1F6FF] px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                <PhoneCall className="size-3.5" /> Informasi Kontak Resmi
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Hubungi Kami
              </h2>

              <div className="mt-8 space-y-6">
                {/* Telepon / WhatsApp */}
                <div className="rounded-2xl border border-[#DCE5F0] bg-white p-5 sm:p-6 shadow-2xs">
                  <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider">
                    Nomor Telepon / WhatsApp
                  </span>
                  <div className="mt-3 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/6281214802420?text=Halo%20admin%20sewaelfbandung.com%2C%20saya%20ingin%20sewa%20armada."
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-between gap-3 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] p-4 text-white font-extrabold text-sm sm:text-base shadow-sm transition hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <WhatsappLogoIcon className="size-6" weight="fill" />
                        <span>0812 1480 2420</span>
                      </div>
                      <ArrowRight className="size-4" />
                    </a>

                    <a
                      href="https://wa.me/6282215452230?text=Halo%20admin%20sewaelfbandung.com%2C%20saya%20ingin%20sewa%20armada."
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-between gap-3 rounded-xl bg-[#1237B8] hover:bg-[#2857E8] p-4 text-white font-extrabold text-sm sm:text-base shadow-sm transition hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="size-5" />
                        <span>0822 1545 2230</span>
                      </div>
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>

                {/* Alamat Garasi */}
                <div className="rounded-2xl border border-[#DCE5F0] bg-white p-5 sm:p-6 shadow-2xs">
                  <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider">
                    Alamat Garasi &amp; Pool
                  </span>
                  <div className="mt-2.5 flex items-start gap-3">
                    <MapPin className="size-5 text-[#1237B8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-base sm:text-lg font-extrabold text-[#0F172A]">
                        Jalan Ciborelang No 8 Cileunyi Bandung
                      </strong>
                      <p className="mt-1 text-xs text-[#64748B]">
                        Sewa Elf Bandung by Amoora Group — Melayani penjemputan Bandung &amp; perjalanan luar kota.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                    <a
                      href="https://maps.google.com/?q=Jalan+Ciborelang+No+8+Cileunyi+Bandung"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#1237B8] hover:underline"
                    >
                      <MapPin className="size-3.5 text-[#50C710]" /> Buka di Google Maps <ArrowRight className="size-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
