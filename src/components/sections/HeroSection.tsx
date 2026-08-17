"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  WhatsappLogo,
  ShieldCheck,
  CheckCircle,
  Van,
  Users,
  MapPin,
  Calendar,
  Sparkle,
  PhoneCall,
  CaretRight,
  Star,
} from "@phosphor-icons/react";
import { getWhatsAppBookingUrl, siteConfig } from "@/data/siteData";

export function HeroSection() {
  const [selectedFleet, setSelectedFleet] = useState("Elf Long 19 Seat");
  const [destination, setDestination] = useState("Wisata Lembang / Ciwidey");
  const [passengers, setPassengers] = useState("15-19 Orang");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppBookingUrl({
      unitName: selectedFleet,
      destination: destination,
      passengerCount: passengers,
    });
    window.open(url, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F1F6FF] to-[#F1F6FF] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-[#1237B8]/10 via-[#6920CC]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2857E8]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-[#6920CC]/10 blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F0FF] border border-[#6920CC]/20 shadow-sm text-xs font-semibold text-[#6920CC]">
            <span className="flex h-2 w-2 rounded-full bg-[#50C710]" />
            <span>Sewa Elf Bandung — by Amoora Group</span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline font-normal text-gray-600">Armada Euro4 Nyaman & Bersih</span>
          </div>
        </div>

        {/* Main Headline & Description */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#101B38] tracking-tight leading-[1.15]">
            Sewa Elf & Hiace Bandung{" "}
            <span className="text-gradient-brand block sm:inline">
              Solusi Perjalanan Rombongan
            </span>{" "}
            Terbaik
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#65708A] max-w-3xl mx-auto leading-relaxed">
            Penyewaan kendaraan <strong className="text-[#1237B8] font-semibold">Elf Long, Hiace Premio & Commuter, serta Bus Pariwisata</strong> untuk wisata, study tour, gathering kantor, keluarga, hingga drop luar kota.
          </p>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm font-semibold text-[#101B38]">
            <div className="flex items-center gap-1.5 text-gray-700">
              <CheckCircle size={18} weight="fill" className="text-[#50C710]" />
              <span>Unit Euro4 Bersih & Terawat</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-700">
              <CheckCircle size={18} weight="fill" className="text-[#50C710]" />
              <span>Driver Ramah & Profesional</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-700">
              <CheckCircle size={18} weight="fill" className="text-[#50C710]" />
              <span>Tarif Transparan & Bersahabat</span>
            </div>
          </div>
        </div>

        {/* Interactive Quick Booking Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-7 shadow-xl border border-blue-100/80 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#F1F6FF] text-[#1237B8]">
                <Van size={22} weight="bold" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#101B38]">
                  Cek Ketersediaan & Estimasi Tarif
                </h2>
                <p className="text-xs text-gray-500">
                  Konsultasi instan via WhatsApp dengan harga promo terbaik
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#50C710] bg-[#F2FBEA] px-3 py-1.5 rounded-full self-start sm:self-auto">
              <Sparkle size={14} weight="fill" />
              <span>Respon Cepat 24 Jam</span>
            </div>
          </div>

          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Pilihan Armada */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                Tipe Kendaraan
              </label>
              <select
                value={selectedFleet}
                onChange={(e) => setSelectedFleet(e.target.value)}
                className="w-full bg-[#F1F6FF] border border-blue-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-[#101B38] focus:outline-none focus:ring-2 focus:ring-[#1237B8]"
              >
                <option value="Isuzu Elf Long 19 Seat">Isuzu Elf Long (18-19 Seat)</option>
                <option value="Isuzu Elf Coaster Euro4">Isuzu Elf Coaster (18-22 Seat)</option>
                <option value="Toyota Hiace Commuter 14 Seat">Toyota Hiace Commuter (14-15 Seat)</option>
                <option value="Toyota Hiace Premio Standard">Toyota Hiace Premio (14 Seat)</option>
                <option value="Toyota Hiace Premio Luxury Captain">Hiace Premio Luxury VIP (8-10 Seat)</option>
                <option value="Medium Bus Jetbus 3+ (31-35 Seat)">Bus Medium Pariwisata (31-35 Seat)</option>
                <option value="Big Bus SHD Jetbus 5 (45-59 Seat)">Big Bus Pariwisata (47-59 Seat)</option>
                <option value="Innova Reborn / Zenix">Innova Reborn / Zenix (5-7 Seat)</option>
                <option value="Toyota Alphard VIP">Toyota Alphard VIP (5-7 Seat)</option>
              </select>
            </div>

            {/* Pilihan Destinasi */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                Tujuan / Destinasi
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-[#F1F6FF] border border-blue-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-[#101B38] focus:outline-none focus:ring-2 focus:ring-[#1237B8]"
              >
                <option value="Bandung City Tour & Kuliner">Bandung City Tour & Kuliner (Dalam Kota)</option>
                <option value="Wisata Lembang / Tangkuban Perahu">Wisata Lembang / Tangkuban Perahu</option>
                <option value="Wisata Ciwidey / Kawah Putih">Wisata Ciwidey / Kawah Putih / Ranca Upas</option>
                <option value="Wisata Pangalengan (Rafting / Nimo)">Wisata Pangalengan (Nimo Highland/Rafting)</option>
                <option value="Pangandaran / Garut / Subang">Garut / Subang / Pangandaran</option>
                <option value="Antar Jemput Bandara Soetta / Jakarta">Carter / Drop Jakarta & Bandara Soetta</option>
                <option value="Luar Kota (Jawa Tengah / DIY / Jatim)">Luar Kota (Jateng, Jogja, Jatim)</option>
              </select>
            </div>

            {/* Tombol Action Submit */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-lg shadow-[#50C710]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsappLogo size={20} weight="fill" />
                <span>Konsultasi & Cek Harga</span>
              </button>
            </div>
          </form>

          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
            <span>✨ Harga penjemputan Bandung Kota | DP 30% untuk kunci jadwal</span>
            <Link href="/armada" className="text-[#1237B8] font-bold hover:underline flex items-center gap-1">
              <span>Lihat Daftar Armada Lengkap</span>
              <CaretRight size={12} weight="bold" />
            </Link>
          </div>
        </div>

        {/* Featured Visual Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white/90 backdrop-blur rounded-2xl p-5 border border-blue-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#F1F6FF] text-[#1237B8] shrink-0">
              <Van size={28} weight="duotone" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#101B38]">Kapasitas 8 - 59 Seat</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Pilihan unit lengkap mulai dari Elf Long, Hiace Premio, Medium Bus hingga Big Bus pariwisata.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-2xl p-5 border border-blue-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#F5F0FF] text-[#6920CC] shrink-0">
              <ShieldCheck size={28} weight="duotone" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#101B38]">Legalitas Resmi Amoora</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Perusahaan resmi terpercaya dengan izin transportasi pariwisata lengkap dan invoice resmi.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-2xl p-5 border border-blue-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#F2FBEA] text-[#50C710] shrink-0">
              <Sparkle size={28} weight="duotone" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#101B38]">Fasilitas Lengkap & Nyaman</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                AC Ducting dingin, Reclining Seat, Audio Karaoke, Charger HP, dan kabin ekstra higienis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
