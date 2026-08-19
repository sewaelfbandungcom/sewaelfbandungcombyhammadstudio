"use client";

import Image from "next/image";
import { CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, CircleDollarSign, Compass, MapPin, RotateCcw, Search, ShieldCheck, Users } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

import { bookingUrl } from "./content";

const slides = [
  {
    id: 1,
    mobile: "/hero-slider-mobile-1.png",
    desktop: "/hero-slider-desktop-1.png",
    alt: "Sewa Elf Bandung by Amoora Group - Promo Rental Elf Long, Hiace & Bus Pariwisata",
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

export type DropdownOption = {
  value: string;
  label: string;
  sublabel?: string;
  category?: string;
  price?: string;
};

const pickupOptions: readonly DropdownOption[] = [
  { value: "Bandung Kota / Hotel / Penginapan", label: "Bandung Kota / Hotel / Penginapan", sublabel: "Dago, Riau, Braga, Setiabudi, Sukajadi, dll" },
  { value: "Stasiun Bandung (Hall / Kebon Kawung)", label: "Stasiun Bandung (Hall / Kebon Kawung)", sublabel: "Pusat Kota Bandung" },
  { value: "Stasiun Kiaracondong", label: "Stasiun Kiaracondong", sublabel: "Bandung Timur" },
  { value: "Stasiun Whoosh Cepat Padalarang", label: "Stasiun Whoosh Padalarang", sublabel: "Koneksi Kereta Cepat Jakarta-Bandung" },
  { value: "Stasiun Whoosh Cepat Tegalluar", label: "Stasiun Whoosh Tegalluar", sublabel: "Kawasan Summarecon / Gedebage" },
  { value: "Cileunyi / Cibiru / Jatinangor", label: "Cileunyi / Cibiru / Jatinangor", sublabel: "Garasi Utama Amoora Group" },
  { value: "Bandara Kertajati (KJT) Majalengka", label: "Bandara Kertajati (KJT)", sublabel: "Antar / Jemput Bandara Internasional" },
  { value: "Bandara Soekarno-Hatta (Soetta) / Halim", label: "Bandara Soetta / Halim Jakarta", sublabel: "Drop Off Sekali Jalan atau PP" },
  { value: "Alamat Rumah / Titik Kumpul Khusus", label: "Alamat Rumah / Titik Kumpul Khusus", sublabel: "Sesuai permintaan penyewa" },
];

const destinationOptions: readonly DropdownOption[] = [
  { value: "Wisata Lembang (Tangkuban Perahu, Orchid, Floating Market)", label: "Wisata Lembang & Tangkuban Perahu", sublabel: "Orchid Forest, Farmhouse, Floating Market, The Great Asia Africa" },
  { value: "Wisata Ciwidey (Kawah Putih, Ranca Upas, Glamping)", label: "Wisata Ciwidey & Kawah Putih", sublabel: "Ranca Upas, Situ Patenggang, Glamping Lakeside, Tea Plantation" },
  { value: "Wisata Pangalengan (Cukul Sunrise, Wayang Windu, Rafting)", label: "Wisata Pangalengan & Rafting", sublabel: "Sunrise Cukul, Wayang Windu Panenjoan, Arung Jeram Palayangan" },
  { value: "City Tour Bandung (Braga, Gedung Sate, Dago, Pusat Oleh-Oleh)", label: "City Tour & Kuliner Bandung", sublabel: "Braga, Asia Afrika, Gedung Sate, FO Dago, Kartika Sari, Primarasa" },
  { value: "Drop / Carter Bandara Soetta Jakarta", label: "Drop Bandara Soekarno-Hatta (Soetta)", sublabel: "Antar rombongan sekali jalan / PP tepat waktu" },
  { value: "Tour Garut (Darajat Pass, Cipanas, Papandayan)", label: "Wisata Garut & Pemandian Air Panas", sublabel: "Darajat Pass, Kawah Papandayan, Cipanas Garut" },
  { value: "Tour Pangandaran / Green Canyon / Batu Karas", label: "Tour Pangandaran & Green Canyon", sublabel: "Pantai Barat/Timur, Batu Hiu, Body Rafting" },
  { value: "Carter Luar Kota (Jogja, Semarang, Solo, Surabaya, Bali)", label: "Carter Luar Kota (Jawa - Bali)", sublabel: "Perjalanan wisata rombongan & dinas instansi" },
];

const fleetOptions: readonly DropdownOption[] = [
  // Elf & Hiace
  { value: "Isuzu Elf Long (18-19 Seat)", label: "Isuzu Elf Long (18-19 Seat)", category: "Elf & Hiace", price: "Rp1.400.000", sublabel: "18-19 Orang | Reclining Seat & AC Dingin" },
  { value: "Isuzu Elf Long Euro4 (19-21 Seat)", label: "Isuzu Elf Long Euro4 (19-21 Seat)", category: "Elf & Hiace", price: "Rp1.700.000", sublabel: "19-21 Orang | Mesin Euro4 Terbaru & Senyap" },
  { value: "Isuzu Elf Coaster (17-18 Seat)", label: "Isuzu Elf Coaster (17-18 Seat)", category: "Elf & Hiace", price: "Rp1.800.000", sublabel: "17-18 Orang | Bodi Luas & Lega" },
  { value: "Isuzu Elf Coaster Euro4 (18-22 Seat)", label: "Isuzu Elf Coaster Euro4 (18-22 Seat)", category: "Elf & Hiace", price: "Rp2.000.000", sublabel: "18-22 Orang | Varian Jumbo Euro4" },
  { value: "Jenis Armada Elf (14 Seat)", label: "Jenis Armada Elf (14 Seat)", category: "Elf & Hiace", price: "Rp1.200.000", sublabel: "14 Orang | Nyaman, Suspensi Empuk" },
  { value: "Jenis Armada Elf Euro4 (14 Seat)", label: "Jenis Armada Elf Euro4 (14 Seat)", category: "Elf & Hiace", price: "Rp1.300.000", sublabel: "14 Orang | Unit Anyar Euro4" },
  { value: "Jenis Armada Elf Premio Standard (14 Seat)", label: "Jenis Armada Elf Premio Standard (14 Seat)", category: "Elf & Hiace", price: "Rp1.500.000", sublabel: "14 Orang | Kabin Modern & Mewah" },
  { value: "Jenis Armada Elf Premio Luxury (8-10 Seat VIP)", label: "Jenis Armada Elf Premio Luxury (VIP)", category: "Elf & Hiace", price: "Rp2.200.000", sublabel: "8-10 Orang | Captain Seat & Audio Karaoke" },

  // Bus Pariwisata
  { value: "Medium Bus Jetbus (29-31 Seat)", label: "Medium Bus Jetbus (29-31 Seat)", category: "Bus Pariwisata", price: "Rp2.000.000", sublabel: "29-31 Orang | Standar Pariwisata AC TV" },
  { value: "Medium Bus Jetbus 2 (29-35 Seat)", label: "Medium Bus Jetbus 2 (29-35 Seat)", category: "Bus Pariwisata", price: "Rp2.200.000", sublabel: "29, 31, 33, 35 Orang | Nyaman & Luas" },
  { value: "Medium Bus Jetbus 3+ (31-35 Seat)", label: "Medium Bus Jetbus 3+ (31-35 Seat)", category: "Bus Pariwisata", price: "Rp2.500.000", sublabel: "31-35 Orang | Fasilitas Lengkap Karoseri Adiputro" },
  { value: "Medium Bus Long JB3+ / JB5 (35-39 Seat)", label: "Medium Bus Long JB3+/JB5 (35-39 Seat)", category: "Bus Pariwisata", price: "Rp2.800.000", sublabel: "35-39 Orang | Model Terbaru Jetbus 5" },
  { value: "MD Bus Luxury Legrest (14-16 Seat VIP)", label: "MD Bus Luxury Legrest (14-16 Seat)", category: "Bus Pariwisata", price: "Rp3.200.000", sublabel: "14-16 Orang | Kursi Legrest Super Nyaman" },
  { value: "Big Bus Jetbus HDD (47-59 Seat)", label: "Big Bus Jetbus HDD (47-59 Seat)", category: "Bus Pariwisata", price: "Rp3.200.000", sublabel: "47, 50, 59 Orang | Bagasi Luas & AC Merata" },
  { value: "Big Bus HDD/SHD JB3+ / JB5 (45-59 Seat)", label: "Big Bus HDD/SHD JB3+/JB5 (45-59 Seat)", category: "Bus Pariwisata", price: "Rp3.800.000", sublabel: "45-59 Orang | Karoseri Mewah Adiputro" },
  { value: "Big Bus Luxury Legrest (25-30 Seat VIP)", label: "Big Bus Luxury Legrest (25-30 Seat)", category: "Bus Pariwisata", price: "Rp4.200.000", sublabel: "25-30 Orang | Kursi Sultan & Toilet" },

  // Mobil Pribadi & Keluarga
  { value: "New Avanza TSS (5-7 Seat)", label: "New Avanza TSS (5-7 Seat)", category: "Mobil Pribadi & Keluarga", price: "Rp750.000", sublabel: "5-7 Orang | Irit & Nyaman untuk Keluarga" },
  { value: "Innova Reborn (5-7 Seat)", label: "Innova Reborn (5-7 Seat)", category: "Mobil Pribadi & Keluarga", price: "Rp950.000", sublabel: "5-7 Orang | Standar Perjalanan Luar Kota" },
  { value: "Innova Zenix G / Q (5-7 Seat)", label: "Innova Zenix G / Q (5-7 Seat)", category: "Mobil Pribadi & Keluarga", price: "Rp1.500.000", sublabel: "5-7 Orang | Varian Modern Hybrid / Gasoline" },
  { value: "Fortuner / Pajero Sport (5-7 Seat)", label: "Fortuner / Pajero Sport (5-7 Seat)", category: "Mobil Pribadi & Keluarga", price: "Rp1.800.000", sublabel: "5-7 Orang | SUV Gagah & Berkelas" },
  { value: "Toyota Alphard Transformer (5-7 Seat VIP)", label: "Toyota Alphard Transformer (VIP)", category: "Mobil Pribadi & Keluarga", price: "Rp3.200.000", sublabel: "5-7 Orang | Kemewahan & Privasi Maksimal" },
];

const bookingBenefits = [
  { title: "SOP Transparan", note: "DP 30% Kunci Jadwal", icon: RotateCcw },
  { title: "Harga Kompetitif", note: "Tanpa biaya siluman", icon: CircleDollarSign },
  { title: "Armada Euro4 Prima", note: "Bersih, wangi, ber-AC dingin", icon: ShieldCheck },
  { title: "Driver Berpengalaman", note: "Kontak dibagikan H-1", icon: Users },
] as const;

// Custom Interactive Dropdown Component
function CustomDropdown({
  label,
  value,
  options,
  onChange,
  icon: Icon,
  placeholder = "Pilih salah satu",
  hasCategories = false,
}: {
  label: string;
  value: string;
  options: readonly DropdownOption[];
  onChange: (val: string) => void;
  icon: React.ComponentType<{ className?: string }>;
  placeholder?: string;
  hasCategories?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const categories = hasCategories
    ? Array.from(new Set(options.map((o) => o.category).filter(Boolean)))
    : [];

  return (
    <div className={`relative w-full min-w-0 ${isOpen ? "z-[70]" : "z-10"}`} ref={dropdownRef}>
      <label className="block text-[11px] font-extrabold text-[#0F172A] mb-1.5">
        {label}
      </label>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`flex h-13 sm:h-14 w-full min-w-0 items-center justify-between gap-2 rounded-xl border px-3 transition-all text-left cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,.025)] ${
          isOpen
            ? "border-[#1237B8] bg-white ring-2 ring-[#1237B8]/20 shadow-sm"
            : "border-[#CBD5E1] bg-[#F8FAFC] hover:border-[#1237B8]/60 hover:bg-white"
        }`}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#E8F1FF] text-[#1237B8] shadow-2xs">
            <Icon className="size-4" />
          </span>
          <div className="min-w-0 flex-1">
            <span className="block text-[13px] font-bold text-[#0F172A] truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            {selectedOption?.price ? (
              <span className="block text-[10px] font-extrabold text-[#2e8807] truncate">
                {selectedOption.price}
              </span>
            ) : null}
          </div>
        </div>
        <ChevronDown
          className={`size-4 text-[#64748B] shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#1237B8]" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu Popover */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-[80] w-full max-w-full max-h-[300px] overflow-y-auto rounded-2xl border border-[#DCE5F0] bg-white p-2 shadow-[0_24px_56px_rgba(15,23,42,.26)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
          {hasCategories && categories.length > 0 ? (
            <div className="space-y-3">
              {categories.map((categoryName) => {
                const categoryOptions = options.filter((o) => o.category === categoryName);
                return (
                  <div key={categoryName}>
                    <div className="sticky top-0 z-10 bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#1237B8] border-b border-[#F1F5F9]">
                      {categoryName}
                    </div>
                    <div className="mt-1 space-y-1">
                      {categoryOptions.map((opt) => {
                        const isSelected = opt.value === value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              onChange(opt.value);
                              setIsOpen(false);
                            }}
                            className={`flex w-full items-center justify-between gap-2 rounded-xl px-2.5 py-2 text-left transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-[#1237B8] text-white shadow-xs font-bold"
                                : "hover:bg-[#F1F6FF] text-[#0F172A]"
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <span className={`block text-xs font-bold leading-tight ${isSelected ? "text-white" : "text-[#0F172A]"}`}>
                                {opt.label}
                              </span>
                              {opt.sublabel ? (
                                <span className={`block text-[10px] mt-0.5 truncate ${isSelected ? "text-slate-100" : "text-[#475569]"}`}>
                                  {opt.sublabel}
                                </span>
                              ) : null}
                            </div>
                            {opt.price ? (
                              <span
                                className={`shrink-0 rounded-md px-1.5 py-0.5 text-[9px] font-extrabold ${
                                  isSelected
                                    ? "bg-[#50C710] text-white"
                                    : "bg-[#F2FBEA] text-[#2e8807]"
                                }`}
                              >
                                {opt.price}
                              </span>
                            ) : isSelected ? (
                              <Check className="size-4 shrink-0 text-white stroke-[3]" />
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-1">
              {options.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between gap-2 rounded-xl px-2.5 py-2 text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#1237B8] text-white shadow-xs font-bold"
                        : "hover:bg-[#F1F6FF] text-[#0F172A]"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <span className={`block text-xs font-bold leading-tight ${isSelected ? "text-white" : "text-[#0F172A]"}`}>
                        {opt.label}
                      </span>
                      {opt.sublabel ? (
                        <span className={`block text-[10px] mt-0.5 truncate ${isSelected ? "text-slate-100" : "text-[#475569]"}`}>
                          {opt.sublabel}
                        </span>
                      ) : null}
                    </div>
                    {isSelected ? (
                      <Check className="size-4 shrink-0 text-white stroke-[3]" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const [pickup, setPickup] = useState<string>(pickupOptions[0].value);
  const [destination, setDestination] = useState<string>(destinationOptions[0].value);
  const [fleet, setFleet] = useState<string>(fleetOptions[0].value);
  const [date, setDate] = useState<string>("");

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto slide 5s
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

    const text = `Halo admin sewaelfbandung.com, saya ingin sewa armada:

🚐 *Tipe Unit:* ${fleet}
📍 *Lokasi Penjemputan:* ${pickup}
🎯 *Rute / Tujuan:* ${destination}
📅 *Tanggal Berangkat:* ${formattedDate}

Mohon info ketersediaan unit dan penawaran harga terbaiknya. Terima kasih!`;

    const waUrl = `https://wa.me/6281214802420?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const selectedFleetObj = fleetOptions.find((f) => f.value === fleet) || fleetOptions[0];

  return (
    <section className="relative z-40 w-full overflow-visible bg-[#F1F6FF] text-[#0F172A] pt-[106px] sm:pt-[112px]">
      {/* Full-Width Slider Container with Exact Proportions: 100% of Image is Visible (Zero Top/Bottom Crop) */}
      <div className="relative w-full overflow-hidden rounded-b-[20px] sm:rounded-b-[36px] bg-slate-950 shadow-sm">
        <div
          className="group/slider relative w-full aspect-[9/16] sm:aspect-[16/9] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 size-full transition-opacity duration-700 ease-in-out ${
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
                  {/* Mobile Banner (941x1672 - Native 9:16 Aspect Ratio) */}
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

                  {/* Desktop Banner (1672x941 - Native 16:9 Aspect Ratio) */}
                  <div className="relative size-full hidden sm:block">
                    <Image
                      src={slide.desktop}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </a>
              </div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Slide sebelumnya"
            className="absolute left-3.5 sm:left-6 top-1/2 -translate-y-1/2 z-20 grid size-10 sm:size-12 place-items-center rounded-full bg-white/85 hover:bg-white text-[#0F172A] shadow-xl backdrop-blur-md transition-all duration-200 opacity-80 group-hover/slider:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="size-5 sm:size-6 text-[#1237B8]" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Slide berikutnya"
            className="absolute right-3.5 sm:right-6 top-1/2 -translate-y-1/2 z-20 grid size-10 sm:size-12 place-items-center rounded-full bg-white/85 hover:bg-white text-[#0F172A] shadow-xl backdrop-blur-md transition-all duration-200 opacity-80 group-hover/slider:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="size-5 sm:size-6 text-[#1237B8]" />
          </button>

          {/* Indicator Dots (Neat & Clean at Bottom) */}
          <div className="absolute bottom-3 sm:bottom-4 inset-x-0 z-20 flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Buka slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? "w-8 bg-[#50C710] shadow-md"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form Planner Attached Directly onto the Hero Slider Curve */}
      <div className="site-container relative z-30 -mt-10 sm:-mt-14 lg:-mt-16 pb-10 sm:pb-14">
        <form
          onSubmit={handleBookingSubmit}
          className="w-full max-w-full rounded-[24px] sm:rounded-[28px] border border-[#DCE5F0] bg-white p-4.5 sm:p-7 lg:p-8 text-[#0F172A] shadow-[0_24px_70px_rgba(18,55,184,.14)]"
        >
          <div className="mb-4 sm:mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-base sm:text-lg lg:text-xl font-extrabold tracking-[-0.025em] text-[#0F172A]">
                Rencanakan Perjalanan Rombongan Anda
              </h2>
              <p className="mt-0.5 text-xs font-medium text-[#334155]">
                Pilih titik jemput, destinasi wisata, &amp; jenis unit untuk langsung mendapatkan estimasi penawaran resmi via WhatsApp.
              </p>
            </div>
            <div className="hidden rounded-xl border border-[#50C710]/40 bg-[#F2FBEA] px-3.5 py-2 text-right sm:block shrink-0">
              <span className="block text-[10px] font-bold text-[#334155]">Estimasi Unit Pilihan</span>
              <strong className="text-xs sm:text-sm font-extrabold text-[#2e8807]">{selectedFleetObj.price}</strong>
            </div>
          </div>

          {/* Form Fields: 1 Column on Mobile, 2 on Tablet, 5 on Desktop */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-end">
            {/* Custom Dropdown: Lokasi Penjemputan */}
            <div className="min-w-0 w-full">
              <CustomDropdown
                label="Lokasi Penjemputan"
                value={pickup}
                options={pickupOptions}
                onChange={setPickup}
                icon={MapPin}
              />
            </div>

            {/* Custom Dropdown: Destinasi Wisata / Rute */}
            <div className="min-w-0 w-full">
              <CustomDropdown
                label="Destinasi Wisata / Rute"
                value={destination}
                options={destinationOptions}
                onChange={setDestination}
                icon={Compass}
              />
            </div>

            {/* Custom Dropdown: Tipe Armada (Grouped with Prices) */}
            <div className="min-w-0 w-full">
              <CustomDropdown
                label="Tipe Armada Kendaraan"
                value={fleet}
                options={fleetOptions}
                onChange={setFleet}
                icon={Users}
                hasCategories
              />
            </div>

            {/* Input Tanggal Berangkat */}
            <div className="min-w-0 w-full">
              <label htmlFor="date-input" className="block text-[11px] font-extrabold text-[#0F172A] mb-1.5">
                Tanggal Berangkat
              </label>
              <div className="flex h-13 sm:h-14 w-full items-center gap-2.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 transition-all focus-within:border-[#1237B8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1237B8]/20 shadow-[inset_0_1px_2px_rgba(0,0,0,.025)]">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#E8F1FF] text-[#1237B8] shadow-2xs">
                  <CalendarDays className="size-4" />
                </span>
                <input
                  id="date-input"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full min-w-0 bg-transparent text-[13px] font-bold text-[#0F172A] outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="min-w-0 w-full md:col-span-2 lg:col-span-1">
              <button
                type="submit"
                className="flex h-13 sm:h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] px-4 text-sm font-bold text-white shadow-[0_14px_28px_rgba(80,199,16,.3)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(80,199,16,.36)] cursor-pointer"
              >
                <Search className="size-4 shrink-0" />
                <span className="truncate">Cek via WA</span>
              </button>
            </div>
          </div>

          {/* Benefits Bar Underneath Form */}
          <div className="relative z-0 mt-5 sm:mt-6 grid gap-3 sm:gap-4 border-t border-[#E2E8F0] pt-4 sm:pt-5 sm:grid-cols-2 lg:grid-cols-4">
            {bookingBenefits.map(({ title, note, icon: Icon }, index) => (
              <div
                key={title}
                className={`flex items-center gap-2.5 lg:px-3 ${
                  index === 0 ? "lg:pl-0" : "lg:border-l lg:border-[#E2E8F0]"
                }`}
              >
                <span className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-full border border-[#6920CC]/20 bg-[#F5F0FF] text-[#6920CC]">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <strong className="block text-[11px] font-extrabold text-[#0F172A] truncate">{title}</strong>
                  <span className="block text-[10px] font-semibold text-[#334155] truncate">{note}</span>
                </span>
              </div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}
