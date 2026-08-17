"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, CalendarDays, CarFront, Check, ChevronLeft, ChevronRight, CircleDollarSign, Clock3, MapPin, RotateCcw, Search, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

import { assetRoot, bookingUrl } from "./content";

const slides = [
  {
    id: 1,
    mobile: "/hero-slider-mobile-1.png",
    desktop: "/hero-slider-desktop-1.png",
    alt: "Sewa Elf Bandung by Amoora Group - Armada Elf Long & Hiace Nyaman untuk Rombongan",
  },
  {
    id: 2,
    mobile: "/hero-slider-mobile-2.png",
    desktop: "/hero-slider-desktop-2.png",
    alt: "Katalog Lengkap Sewa Hiace Premio & Bus Pariwisata Bandung",
  },
  {
    id: 3,
    mobile: "/hero-slider-mobile-3.png",
    desktop: "/hero-slider-desktop-3.png",
    alt: "Layanan Transportasi Wisata Bandung & Carter Luar Kota Terpercaya",
  },
] as const;

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const [pickup, setPickup] = useState<string>(pickupOptions[0]);
  const [destination, setDestination] = useState<string>(destinationOptions[0]);
  const [fleet, setFleet] = useState<string>(fleetOptions[0].label);
  const [duration, setDuration] = useState<string>(durationOptions[0]);
  const [date, setDate] = useState<string>("");

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto slide effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

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
    <section className="relative bg-[#F1F6FF] text-[#0F172A] pt-[112px] sm:pt-[120px] lg:pt-[128px]">
      <div className="site-container">
        {/* Banner Hero Slider */}
        <div
          className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-slate-900 shadow-[0_20px_60px_rgba(18,55,184,.14)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Slides Container */}
          <div className="relative aspect-[4/5] sm:aspect-[21/9] lg:aspect-[2.4/1] w-full overflow-hidden">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <a
                    href={bookingUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative size-full cursor-pointer"
                    aria-label={slide.alt}
                  >
                    {/* Mobile Banner Image */}
                    <div className="relative size-full sm:hidden">
                      <Image
                        src={slide.mobile}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        sizes="100vw"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Desktop & Tablet Banner Image */}
                    <div className="relative size-full hidden sm:block">
                      <Image
                        src={slide.desktop}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1280px) 1200px, 100vw"
                        className="object-cover object-center"
                      />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Slide sebelumnya"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 grid size-9 sm:size-11 place-items-center rounded-full bg-white/80 hover:bg-white text-[#0F172A] shadow-md backdrop-blur-md transition-all duration-200 opacity-80 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="size-5 sm:size-6 text-[#101B38]" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Slide berikutnya"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 grid size-9 sm:size-11 place-items-center rounded-full bg-white/80 hover:bg-white text-[#0F172A] shadow-md backdrop-blur-md transition-all duration-200 opacity-80 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="size-5 sm:size-6 text-[#101B38]" />
          </button>

          {/* Pagination Indicators */}
          <div className="absolute bottom-3.5 inset-x-0 z-20 flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Buka slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? "w-8 bg-[#50C710] shadow-sm"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interactive Booking Form Planner */}
        <div className="mt-8 sm:mt-10 pb-6 sm:pb-8">
          <form
            onSubmit={handleBookingSubmit}
            className="rounded-[24px] border border-[#DCE5F0] bg-white p-5 text-[#0F172A] shadow-[0_20px_50px_rgba(18,55,184,.08)] sm:p-8"
          >
            <div className="mb-5 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-md bg-[#F1F6FF] px-2.5 py-1 text-[11px] font-extrabold text-[#1237B8]">
                  <Sparkles className="size-3.5 text-[#50C710]" /> Formulir Reservasi Cepat
                </div>
                <h2 className="mt-1.5 text-lg font-extrabold tracking-[-0.025em] text-[#0F172A]">
                  Rencanakan Perjalanan Rombongan Anda
                </h2>
                <p className="mt-0.5 text-xs font-medium text-[#334155]">
                  Pilih rute &amp; jenis unit untuk langsung mendapatkan estimasi dan ketersediaan dari admin resmi.
                </p>
              </div>
              <div className="hidden rounded-xl border border-[#50C710]/40 bg-[#F2FBEA] px-3.5 py-2 text-right sm:block">
                <span className="block text-[10px] font-bold text-[#334155]">Estimasi Unit Pilihan</span>
                <strong className="text-xs font-extrabold text-[#2e8807]">{selectedFleetObj.price}</strong>
              </div>
            </div>

            <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[1.1fr_1.15fr_1.1fr_0.9fr_auto] xl:items-end">
              {/* Lokasi Penjemputan */}
              <div>
                <label htmlFor="pickup-select" className="block text-[11px] font-extrabold text-[#0F172A]">
                  Lokasi Penjemputan
                </label>
                <div className="mt-1.5 flex h-13 sm:h-14 items-center gap-2.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 transition-all focus-within:border-[#1237B8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1237B8]/20 shadow-[inset_0_1px_2px_rgba(0,0,0,.025)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[#1237B8] shadow-xs">
                    <MapPin className="size-4" />
                  </span>
                  <select
                    id="pickup-select"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-transparent text-[13px] font-bold text-[#0F172A] outline-none cursor-pointer"
                  >
                    {pickupOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-[#0F172A]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Destinasi Wisata / Rute */}
              <div>
                <label htmlFor="destination-select" className="block text-[11px] font-extrabold text-[#0F172A]">
                  Destinasi Wisata / Rute
                </label>
                <div className="mt-1.5 flex h-13 sm:h-14 items-center gap-2.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 transition-all focus-within:border-[#1237B8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1237B8]/20 shadow-[inset_0_1px_2px_rgba(0,0,0,.025)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[#1237B8] shadow-xs">
                    <MapPin className="size-4" />
                  </span>
                  <select
                    id="destination-select"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-transparent text-[13px] font-bold text-[#0F172A] outline-none cursor-pointer"
                  >
                    {destinationOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-[#0F172A]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tipe Armada */}
              <div>
                <label htmlFor="fleet-select" className="block text-[11px] font-extrabold text-[#0F172A]">
                  Tipe Armada Kendaraan
                </label>
                <div className="mt-1.5 flex h-13 sm:h-14 items-center gap-2.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 transition-all focus-within:border-[#1237B8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1237B8]/20 shadow-[inset_0_1px_2px_rgba(0,0,0,.025)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[#1237B8] shadow-xs">
                    <Users className="size-4" />
                  </span>
                  <select
                    id="fleet-select"
                    value={fleet}
                    onChange={(e) => setFleet(e.target.value)}
                    className="w-full bg-transparent text-[13px] font-bold text-[#0F172A] outline-none cursor-pointer"
                  >
                    {fleetOptions.map((opt) => (
                      <option key={opt.label} value={opt.label} className="text-[#0F172A]">
                        {opt.label} ({opt.price})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Jadwal & Tanggal */}
              <div>
                <label htmlFor="date-input" className="block text-[11px] font-extrabold text-[#0F172A]">
                  Tanggal Berangkat
                </label>
                <div className="mt-1.5 flex h-13 sm:h-14 items-center gap-2.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 transition-all focus-within:border-[#1237B8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1237B8]/20 shadow-[inset_0_1px_2px_rgba(0,0,0,.025)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[#1237B8] shadow-xs">
                    <CalendarDays className="size-4" />
                  </span>
                  <input
                    id="date-input"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent text-[13px] font-bold text-[#0F172A] outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex h-13 sm:h-14 items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-7 text-sm font-bold text-white shadow-[0_14px_28px_rgba(80,199,16,.3)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(80,199,16,.36)] cursor-pointer"
              >
                <Search className="size-4" />
                Cek via WhatsApp
              </button>
            </div>

            {/* Benefits Bar Underneath Form */}
            <div className="mt-5 sm:mt-6 grid gap-3.5 sm:gap-4 border-t border-[#E2E8F0] pt-4 sm:pt-5 sm:grid-cols-2 lg:grid-cols-4">
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
                    <strong className="block text-[11px] font-extrabold text-[#0F172A]">{title}</strong>
                    <span className="mt-0.5 block text-[10px] font-semibold text-[#334155]">{note}</span>
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
