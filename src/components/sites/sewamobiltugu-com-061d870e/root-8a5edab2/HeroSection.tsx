"use client";

import Image from "next/image";
import { ArrowRight, CalendarDays, CarFront, Check, CircleDollarSign, Clock3, MapPin, RotateCcw, Search, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useState } from "react";

import { assetRoot } from "./content";

const pickupOptions = [
  "Bandung Kota / Hotel",
  "Stasiun Bandung / Kiaracondong",
  "Stasiun Whoosh Padalarang / Tegalluar",
  "Cileunyi / Cibiru / Jatinangor",
  "Bandara Kertajati (KJT) / Soetta",
  "Area Lainnya di Bandung & Sekitarnya",
] as const;

const destinationOptions = [
  "Wisata Lembang / Tangkuban Perahu / Orchid",
  "Wisata Ciwidey / Kawah Putih / Ranca Upas",
  "Wisata Pangalengan / Cukul / Wayang Windu",
  "City Tour Bandung (Braga, Gedung Sate, Dago)",
  "Drop Bandara Soekarno-Hatta (Soetta) / Halim",
  "Drop / Wisata Pangandaran / Garut / Subang",
  "Tour Luar Kota (Jogja, Semarang, Bali, dll)",
] as const;

const fleetOptions = [
  { label: "Isuzu Elf Long (19 Seat)", price: "Mulai Rp1,4 Jt" },
  { label: "Toyota Hiace Premio (14 Seat)", price: "Mulai Rp1,5 Jt" },
  { label: "Toyota Hiace Commuter (14 Seat)", price: "Mulai Rp1,2 Jt" },
  { label: "Toyota Hiace Premio Luxury (9 Seat VIP)", price: "Mulai Rp2,2 Jt" },
  { label: "Medium Bus Pariwisata (31-39 Seat)", price: "Mulai Rp2,0 Jt" },
  { label: "Big Bus Pariwisata (47-59 Seat)", price: "Mulai Rp3,0 Jt" },
  { label: "Toyota Innova Reborn / Zenix (7 Seat)", price: "Mulai Rp950 Rb" },
  { label: "Toyota Avanza TSS (7 Seat)", price: "Mulai Rp750 Rb" },
  { label: "Toyota Alphard Transformer (VIP)", price: "Mulai Rp3,2 Jt" },
] as const;

const durationOptions = [
  "1 Hari (Full Day)",
  "2 Hari 1 Malam (2D1N)",
  "3 Hari 2 Malam (3D2N)",
  "4 Hari atau Lebih",
  "Drop Off Sekali Jalan",
] as const;

const bookingBenefits = [
  { title: "SOP Transparan", note: "DP 30% Kunci Jadwal", icon: RotateCcw },
  { title: "Harga Kompetitif", note: "Tanpa biaya siluman", icon: CircleDollarSign },
  { title: "Armada Euro4 Prima", note: "Bersih, wangi, ber-AC dingin", icon: CarFront },
  { title: "Driver Berpengalaman", note: "Kontak dibagikan H-1", icon: ShieldCheck },
] as const;

export function HeroSection() {
  const [pickup, setPickup] = useState<string>(pickupOptions[0]);
  const [destination, setDestination] = useState<string>(destinationOptions[0]);
  const [fleet, setFleet] = useState<string>(fleetOptions[0].label);
  const [duration, setDuration] = useState<string>(durationOptions[0]);
  const [date, setDate] = useState<string>("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = date ? new Date(date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "Menyusul / Diskusi via WA";

    const text = `Halo Admin Sewa Elf Bandung (Amoora Group), saya mau cek ketersediaan & booking armada:

🚐 *Tipe Unit:* ${fleet}
📍 *Lokasi Penjemputan:* ${pickup}
🎯 *Rute / Tujuan:* ${destination}
📅 *Tanggal Berangkat:* ${formattedDate}
⏱ *Durasi Sewa:* ${duration}

Mohon info ketersediaan unit dan penawaran harga terbaiknya. Terima kasih!`;

    const waUrl = `https://wa.me/6281214802420?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const selectedFleetObj = fleetOptions.find((f) => f.label === fleet) || fleetOptions[0];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F1F6FF_60%,#FFFFFF_100%)] text-[#101B38] pt-[120px] lg:pt-[130px]">
      {/* Background Soft Gradients */}
      <div className="pointer-events-none absolute -left-32 top-10 size-[500px] rounded-full bg-[#1237B8]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-20 size-[500px] rounded-full bg-[#6920CC]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#1237B8_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="site-container relative z-10 pb-16 pt-8 lg:pb-20 lg:pt-10">
        {/* Top Hero Headline & Intro */}
        <div className="mx-auto max-w-[840px] text-center">
          <p className="hero-reveal hero-delay-1 inline-flex items-center gap-2 rounded-full border border-[#1237B8]/20 bg-[#F1F6FF] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1237B8] shadow-xs">
            <span className="size-2 rounded-full bg-[#50C710] animate-pulse" />
            <ShieldCheck className="size-4 text-[#50C710]" /> Sewa Elf Bandung by Amoora Group
          </p>

          <h1 className="hero-reveal hero-delay-2 mt-5 text-[40px] font-bold leading-[1.08] tracking-[-0.045em] text-[#101B38] sm:text-[54px] lg:text-[62px]">
            Sewa Elf &amp; Hiace di <span className="text-[#1237B8]">Bandung,</span><br />
            Nyaman untuk <span className="text-[#50C710]">Rombongan</span>
          </h1>

          <p className="hero-reveal hero-delay-3 mx-auto mt-5 max-w-[620px] text-base leading-relaxed text-[#65708A] sm:text-lg">
            Solusi transportasi sewa Elf Long 19 Seat, Toyota Hiace Premio, &amp; Bus Pariwisata untuk wisata Lembang, Ciwidey, study tour, gathering kantor, hingga drop luar kota.
          </p>

          <div className="hero-reveal hero-delay-4 mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="https://wa.me/6281214802420?text=Halo%20Admin%20Sewa%20Elf%20Bandung%2C%20saya%20ingin%20konsultasi%20sewa%20armada."
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-13 items-center gap-2.5 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-7 text-sm font-bold text-white shadow-[0_14px_28px_rgba(80,199,16,.32)] transition hover:-translate-y-0.5"
            >
              Pesan via WhatsApp <ArrowRight className="size-4" />
            </a>
            <a
              href="#armada"
              className="inline-flex h-13 items-center gap-2 rounded-xl border border-[#DCE5F0] bg-white px-6 text-sm font-bold text-[#101B38] shadow-sm transition hover:border-[#1237B8] hover:text-[#1237B8] hover:-translate-y-0.5"
            >
              Lihat Daftar Armada <ArrowRight className="size-4 text-[#1237B8]" />
            </a>
          </div>

          <div className="hero-reveal hero-delay-5 mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-[#65708A]">
            <div className="flex -space-x-2">
              {["AG", "EB", "ST", "ZG"].map((initials) => (
                <span
                  key={initials}
                  className="grid size-7 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-[#1237B8] to-[#6920CC] text-[8px] font-bold text-white shadow-xs"
                >
                  {initials}
                </span>
              ))}
            </div>
            <span>
              <strong className="text-[#101B38] font-bold">5.000+ rombongan</strong> terlayani
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#101B38]">
              <span className="grid size-4 place-items-center rounded-full bg-[#50C710]/20 text-[#50C710]">
                <Check className="size-3 stroke-[3]" />
              </span>
              Unit Euro4 Terawat
            </span>
          </div>
        </div>

        {/* Clean Interactive Booking Form Planner */}
        <div className="hero-reveal hero-delay-6 mt-12">
          <form
            onSubmit={handleBookingSubmit}
            className="rounded-[28px] border border-[#DCE5F0] bg-white p-6 text-[#101B38] shadow-[0_24px_64px_rgba(18,55,184,.08)] sm:p-8 lg:p-10"
          >
            <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-md bg-[#F1F6FF] px-2.5 py-1 text-[11px] font-bold text-[#1237B8]">
                  <Sparkles className="size-3.5 text-[#50C710]" /> Formulir Reservasi Cepat
                </div>
                <h2 className="mt-1.5 text-xl font-bold tracking-[-0.025em] text-[#101B38]">
                  Rencanakan Perjalanan Rombongan Anda
                </h2>
                <p className="mt-0.5 text-xs text-[#65708A]">
                  Pilih rute &amp; jenis unit untuk langsung mendapatkan estimasi dan ketersediaan dari admin resmi.
                </p>
              </div>
              <div className="hidden rounded-xl border border-[#50C710]/30 bg-[#F2FBEA] px-4 py-2 text-right sm:block">
                <span className="block text-[10px] font-semibold text-[#65708A]">Estimasi Unit Pilihan</span>
                <strong className="text-sm font-bold text-[#50C710]">{selectedFleetObj.price}</strong>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.1fr_1.15fr_1.1fr_0.9fr_auto] xl:items-end">
              {/* Lokasi Penjemputan */}
              <div>
                <label htmlFor="pickup-select" className="block text-[11px] font-bold text-[#65708A]">
                  Lokasi Penjemputan
                </label>
                <div className="mt-1.5 flex h-14 items-center gap-2.5 rounded-xl border border-[#DCE5F0] bg-[#F8FAFC] px-3.5 transition-all focus-within:border-[#1237B8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1237B8]/20 shadow-[inset_0_1px_2px_rgba(0,0,0,.02)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[#1237B8] shadow-xs">
                    <MapPin className="size-4" />
                  </span>
                  <select
                    id="pickup-select"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-transparent text-[13px] font-semibold text-[#101B38] outline-none cursor-pointer"
                  >
                    {pickupOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-[#101B38]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Destinasi Wisata / Rute */}
              <div>
                <label htmlFor="destination-select" className="block text-[11px] font-bold text-[#65708A]">
                  Destinasi Wisata / Rute
                </label>
                <div className="mt-1.5 flex h-14 items-center gap-2.5 rounded-xl border border-[#DCE5F0] bg-[#F8FAFC] px-3.5 transition-all focus-within:border-[#1237B8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1237B8]/20 shadow-[inset_0_1px_2px_rgba(0,0,0,.02)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[#1237B8] shadow-xs">
                    <MapPin className="size-4" />
                  </span>
                  <select
                    id="destination-select"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-transparent text-[13px] font-semibold text-[#101B38] outline-none cursor-pointer"
                  >
                    {destinationOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-[#101B38]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tipe Armada */}
              <div>
                <label htmlFor="fleet-select" className="block text-[11px] font-bold text-[#65708A]">
                  Tipe Armada Kendaraan
                </label>
                <div className="mt-1.5 flex h-14 items-center gap-2.5 rounded-xl border border-[#DCE5F0] bg-[#F8FAFC] px-3.5 transition-all focus-within:border-[#1237B8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1237B8]/20 shadow-[inset_0_1px_2px_rgba(0,0,0,.02)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[#1237B8] shadow-xs">
                    <Users className="size-4" />
                  </span>
                  <select
                    id="fleet-select"
                    value={fleet}
                    onChange={(e) => setFleet(e.target.value)}
                    className="w-full bg-transparent text-[13px] font-semibold text-[#101B38] outline-none cursor-pointer"
                  >
                    {fleetOptions.map((opt) => (
                      <option key={opt.label} value={opt.label} className="text-[#101B38]">
                        {opt.label} ({opt.price})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Jadwal & Tanggal */}
              <div>
                <label htmlFor="date-input" className="block text-[11px] font-bold text-[#65708A]">
                  Tanggal Berangkat
                </label>
                <div className="mt-1.5 flex h-14 items-center gap-2.5 rounded-xl border border-[#DCE5F0] bg-[#F8FAFC] px-3.5 transition-all focus-within:border-[#1237B8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1237B8]/20 shadow-[inset_0_1px_2px_rgba(0,0,0,.02)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[#1237B8] shadow-xs">
                    <CalendarDays className="size-4" />
                  </span>
                  <input
                    id="date-input"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent text-[13px] font-semibold text-[#101B38] outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex h-14 items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-7 text-sm font-bold text-white shadow-[0_14px_28px_rgba(80,199,16,.3)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(80,199,16,.36)] cursor-pointer"
              >
                <Search className="size-4" />
                Cek via WhatsApp
              </button>
            </div>

            {/* Benefits Bar Underneath Form */}
            <div className="mt-7 grid gap-4 border-t border-[#E2E8F0] pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {bookingBenefits.map(({ title, note, icon: Icon }, index) => (
                <div
                  key={title}
                  className={`flex items-center gap-3 lg:px-4 ${
                    index === 0 ? "lg:pl-0" : "lg:border-l lg:border-[#E2E8F0]"
                  }`}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#6920CC]/20 bg-[#F5F0FF] text-[#6920CC]">
                    <Icon className="size-4" />
                  </span>
                  <span>
                    <strong className="block text-[11px] font-semibold text-[#101B38]">{title}</strong>
                    <span className="mt-0.5 block text-[10px] text-[#65708A]">{note}</span>
                  </span>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
