"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, Building, CheckCircle2, Clock, HelpCircle, Home, Mail, MapPin, MessageCircle, Phone, PhoneCall, Send, ShieldCheck, Sparkles, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { assetRoot, bookingUrl } from "./content";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const faqs = [
  {
    q: "Bagaimana cara memesan sewa Elf atau Hiace?",
    a: "Anda cukup menghubungi Customer Service kami via WhatsApp di 0812-1480-2420 atau 0822-1545-2230. Informasikan lokasi penjemputan, tujuan wisata, tanggal berangkat, dan tipe unit.",
  },
  {
    q: "Berapa persen DP yang harus dibayarkan?",
    a: "Pemesanan sah dan unit terkunci setelah Anda membayarkan DP minimal 30% dari total nilai sewa. Pelunasan dilakukan maksimal H-3 sebelum keberangkatan.",
  },
  {
    q: "Apakah harga sewa sudah termasuk Driver dan BBM?",
    a: "Ya! Tarif sewa kami sudah mencakup unit kendaraan prima, jasa driver profesional, dan bahan bakar minyak (BBM). Biaya tol, parkir, dan tiket masuk wisata dibayar terpisah sesuai rute.",
  },
  {
    q: "Kapan nomor kontak driver diberikan?",
    a: "Nomor telepon dan identitas driver yang bertugas akan kami informasikan resmi pada H-1 keberangkatan (sore/malam hari) melalui WhatsApp.",
  },
  {
    q: "Apakah melayani penjemputan di luar kota Bandung?",
    a: "Ya, kami melayani penjemputan di area Bandung Kota, Cimahi, Padalarang, Jatinangor, Sumedang, hingga luar kota dengan konfirmasi rute terlebih dahulu.",
  },
];

export function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("Bandung Kota");
  const [destination, setDestination] = useState("Lembang / Tangkuban Perahu");
  const [fleet, setFleet] = useState("Isuzu Elf Long (19 Seat)");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Admin Sewa Elf Bandung, saya ingin konsultasi booking armada:%0A%0A• Nama: ${encodeURIComponent(
      name || "-"
    )}%0A• No. HP/WA: ${encodeURIComponent(phone || "-")}%0A• Penjemputan: ${encodeURIComponent(
      pickup
    )}%0A• Destinasi/Rute: ${encodeURIComponent(destination)}%0A• Tipe Armada: ${encodeURIComponent(
      fleet
    )}%0A• Tgl Berangkat: ${encodeURIComponent(date || "Segera")}%0A• Catatan: ${encodeURIComponent(
      notes || "Mohon info ketersediaan unit dan penawaran terbaik."
    )}`;

    window.open(`https://wa.me/6281214802420?text=${text}`, "_blank");
  };

  return (
    <div id="top" className="min-h-screen bg-[#F1F6FF] text-[#0F172A]">
      <SiteHeader />
      <main>
        {/* Header Hero */}
        <section className="relative flex min-h-[380px] sm:min-h-[440px] items-end overflow-hidden pb-10 sm:pb-14 pt-[118px] sm:pt-[140px] text-white">
          <Image
            src={`${assetRoot}/bandung-gedung-sate.jpg`}
            alt="Kontak Sewa Elf Bandung by Amoora Group"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-center blur-[2px]"
          />
          {/* Deeper High-Contrast Dark Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,15,30,0.97)_0%,rgba(15,23,42,0.94)_40%,rgba(18,55,184,0.80)_75%,rgba(8,15,30,0.94)_100%)]" />
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(80,199,16,0.15),transparent_40%)]" />

          <div className="site-container relative z-10 w-full">
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5 flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-300">
              <Link href="/" className="flex items-center gap-1.5 transition hover:text-white">
                <Home className="size-3.5 text-[#50C710]" /> Beranda
              </Link>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <span className="text-white font-bold">Kontak Kami</span>
            </nav>
            <p className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#50C710]">
              <PhoneCall className="size-3.5 sm:size-4" /> Customer Service 24 Jam
            </p>
            <h1 className="mt-2.5 sm:mt-3.5 max-w-[780px] text-[30px] sm:text-[46px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.045em] text-white drop-shadow-md">
              Hubungi <span className="text-[#50C710]">Sewa Elf Bandung</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-[640px] text-xs sm:text-sm leading-relaxed text-slate-100 font-medium sm:leading-7">
              Tim admin Amoora Group siap melayani pertanyaan, konsultasi rute wisata, dan reservasi armada kendaraan rombongan Anda 24 jam non-stop.
            </p>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold text-white">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <CheckCircle2 className="size-3.5 sm:size-4 text-[#50C710]" /> Fast Response WhatsApp
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <ShieldCheck className="size-3.5 sm:size-4 text-[#50C710]" /> Layanan 24 Jam Setiap Hari
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <MapPin className="size-3.5 sm:size-4 text-[#50C710]" /> Garasi Cileunyi Bandung
              </span>
            </div>
          </div>
        </section>

        {/* Contact Info & Interactive Cards */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
          <div className="site-container">
            {/* Top 3 Quick Contact Cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Hotline 1 Card */}
              <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFC] p-6 transition duration-300 hover:border-[#1237B8]/40 hover:bg-white hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#50C710] text-white shadow-md">
                    <WhatsappLogoIcon className="size-6" weight="fill" />
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-[#F2FBEA] px-2.5 py-1 text-[10px] font-extrabold text-[#2e8807] border border-[#50C710]/30">
                    <span className="size-1.5 rounded-full bg-[#50C710] animate-pulse" /> ONLINE
                  </span>
                </div>
                <h3 className="mt-4 text-base font-extrabold text-[#0F172A]">WhatsApp Hotline 1</h3>
                <p className="mt-1 text-xs text-[#64748B]">Admin Reservasi &amp; Konsultasi Rute</p>
                <strong className="mt-3 block text-xl font-extrabold text-[#1237B8]">0812-1480-2420</strong>
                <a
                  href="https://wa.me/6281214802420?text=Halo%20Admin%20Sewa%20Elf%20Bandung%2C%20saya%20mau%20booking%20armada."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  <WhatsappLogoIcon className="size-4" weight="fill" /> Chat via WhatsApp
                </a>
              </div>

              {/* Hotline 2 Card */}
              <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFC] p-6 transition duration-300 hover:border-[#1237B8]/40 hover:bg-white hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#1237B8] text-white shadow-md">
                    <Phone className="size-6" />
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-[#F1F6FF] px-2.5 py-1 text-[10px] font-extrabold text-[#1237B8] border border-[#1237B8]/30">
                    <span className="size-1.5 rounded-full bg-[#1237B8] animate-pulse" /> 24 JAM
                  </span>
                </div>
                <h3 className="mt-4 text-base font-extrabold text-[#0F172A]">WhatsApp Hotline 2</h3>
                <p className="mt-1 text-xs text-[#64748B]">Admin Pemesanan &amp; Penawaran Resmi</p>
                <strong className="mt-3 block text-xl font-extrabold text-[#1237B8]">0822-1545-2230</strong>
                <a
                  href="https://wa.me/6282215452230?text=Halo%20Admin%20Sewa%20Elf%20Bandung%2C%20saya%20mau%20booking%20armada."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#1237B8] hover:bg-[#2857E8] text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  <WhatsappLogoIcon className="size-4" weight="fill" /> Chat via WhatsApp
                </a>
              </div>

              {/* Garasi & Kantor Card */}
              <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFC] p-6 transition duration-300 hover:border-[#1237B8]/40 hover:bg-white hover:shadow-lg sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#6920CC] text-white shadow-md">
                    <MapPin className="size-6" />
                  </span>
                  <span className="rounded-full bg-[#F5F0FF] px-2.5 py-1 text-[10px] font-extrabold text-[#6920CC] border border-[#6920CC]/30">
                    GARASI UTAMA
                  </span>
                </div>
                <h3 className="mt-4 text-base font-extrabold text-[#0F172A]">Alamat Garasi &amp; Pool</h3>
                <p className="mt-1 text-xs text-[#64748B]">Kunjungi pool armada kami di Bandung</p>
                <strong className="mt-2.5 block text-xs sm:text-sm font-extrabold text-[#0F172A] leading-snug">
                  Jalan Ciborelang No. 8, Cileunyi, Bandung, Jawa Barat
                </strong>
                <a
                  href="https://maps.google.com/?q=Jalan+Ciborelang+No+8+Cileunyi+Bandung"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#DCE5F0] bg-white hover:bg-[#F1F6FF] text-xs font-bold text-[#1237B8] shadow-2xs transition hover:-translate-y-0.5"
                >
                  <MapPin className="size-4 text-[#50C710]" /> Buka Google Maps
                </a>
              </div>
            </div>

            {/* Inquiry Form & Map Section */}
            <div className="mt-12 sm:mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* Form Container */}
              <div className="rounded-[24px] border border-[#DCE5F0] bg-[#F8FAFC] p-6 sm:p-8 lg:p-9 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                  <MessageCircle className="size-4" /> Form Konsultasi &amp; Reservasi
                </div>
                <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                  Kirim Rencana Perjalanan Rombongan
                </h2>
                <p className="mt-1.5 text-xs text-[#64748B]">
                  Isi data di bawah untuk langsung terhubung dengan WhatsApp Admin resmi Sewa Elf Bandung.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Nama Anda</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Bpk. Hendra"
                        className="h-12 w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 text-xs font-semibold text-[#0F172A] outline-none focus:border-[#1237B8] focus:ring-2 focus:ring-[#1237B8]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Nomor WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Contoh: 08123456789"
                        className="h-12 w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 text-xs font-semibold text-[#0F172A] outline-none focus:border-[#1237B8] focus:ring-2 focus:ring-[#1237B8]/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Titik Penjemputan</label>
                      <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="Bandung Kota / Hotel / Stasiun"
                        className="h-12 w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 text-xs font-semibold text-[#0F172A] outline-none focus:border-[#1237B8] focus:ring-2 focus:ring-[#1237B8]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Destinasi / Rute</label>
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Lembang, Ciwidey, Luar Kota"
                        className="h-12 w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 text-xs font-semibold text-[#0F172A] outline-none focus:border-[#1237B8] focus:ring-2 focus:ring-[#1237B8]/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Pilihan Tipe Unit</label>
                      <select
                        value={fleet}
                        onChange={(e) => setFleet(e.target.value)}
                        className="h-12 w-full rounded-xl border border-[#CBD5E1] bg-white px-3 text-xs font-bold text-[#0F172A] outline-none focus:border-[#1237B8] focus:ring-2 focus:ring-[#1237B8]/20 cursor-pointer"
                      >
                        <option value="Isuzu Elf Long (19 Seat)">Isuzu Elf Long (19 Seat)</option>
                        <option value="Toyota Hiace Premio (14 Seat)">Toyota Hiace Premio (14 Seat)</option>
                        <option value="Toyota Hiace Commuter (14 Seat)">Toyota Hiace Commuter (14 Seat)</option>
                        <option value="Toyota Hiace Premio Luxury (8-10 Seat)">Toyota Hiace Premio Luxury (8-10 Seat)</option>
                        <option value="Bus Medium Jetbus 3+ (31-35 Seat)">Bus Medium Jetbus 3+ (31-35 Seat)</option>
                        <option value="Big Bus SHD / JB5 (47-59 Seat)">Big Bus SHD / JB5 (47-59 Seat)</option>
                        <option value="Innova Reborn / Zenix (7 Seat)">Innova Reborn / Zenix (7 Seat)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Tanggal Berangkat</label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="h-12 w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 text-xs font-semibold text-[#0F172A] outline-none focus:border-[#1237B8] focus:ring-2 focus:ring-[#1237B8]/20 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Catatan Khusus (Opsional)</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Jumlah peserta, durasi berapa hari, permintaan khusus lainnya..."
                      className="w-full rounded-xl border border-[#CBD5E1] bg-white p-3.5 text-xs font-medium text-[#0F172A] outline-none focus:border-[#1237B8] focus:ring-2 focus:ring-[#1237B8]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] text-sm font-bold text-white shadow-[0_12px_28px_rgba(80,199,16,.28)] transition hover:-translate-y-0.5 active:scale-98 cursor-pointer"
                  >
                    <WhatsappLogoIcon className="size-5" weight="fill" />
                    Kirim Pesanan ke WhatsApp Admin
                  </button>
                </form>
              </div>

              {/* Right Side: Operational Information & SOP */}
              <div className="space-y-6">
                <div className="rounded-[24px] border border-[#DCE5F0] bg-white p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                    <Clock className="size-4" /> Waktu Operasional
                  </div>
                  <h3 className="mt-2 text-lg font-extrabold text-[#0F172A]">Layanan 24 Jam Non-Stop</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#334155]">
                    Layanan pemesanan, konfirmasi armada, dan konsultasi perjalanan aktif setiap hari selama 24 jam termasuk hari libur nasional dan akhir pekan.
                  </p>

                  <div className="mt-5 space-y-3 border-t border-[#E2E8F0] pt-4 text-xs font-bold">
                    <div className="flex items-center justify-between text-[#0F172A]">
                      <span>Senin – Minggu</span>
                      <span className="rounded-md bg-[#F2FBEA] px-2 py-0.5 text-[#2e8807] font-extrabold">24 Jam Online</span>
                    </div>
                    <div className="flex items-center justify-between text-[#0F172A]">
                      <span>Hari Libur Nasional</span>
                      <span className="rounded-md bg-[#F2FBEA] px-2 py-0.5 text-[#2e8807] font-extrabold">Tetap Buka</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#DCE5F0] bg-[#101B38] p-6 sm:p-7 text-white shadow-md">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#50C710]">
                    Sewa Elf Bandung by Amoora Group
                  </span>
                  <h3 className="mt-1 text-lg font-extrabold">Garansi Penjemputan Tepat Waktu</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200">
                    Armada tiba di titik jemput Anda 30 menit sebelum jadwal keberangkatan dalam kondisi bersih, wangi, dan ber-AC dingin siap jalan.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#50C710]">
                    <CheckCircle2 className="size-4" />
                    <span>Unit Euro4 Terawat &amp; Driver Berpengalaman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-12 sm:py-16 bg-[#F1F6FF]">
          <div className="site-container">
            <div className="text-center max-w-[650px] mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#E8F1FF] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                <HelpCircle className="size-3.5 text-[#1237B8]" /> Tanya Jawab
              </span>
              <h2 className="mt-2.5 text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>

            <div className="mt-8 max-w-[800px] mx-auto space-y-3.5">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-[#DCE5F0] bg-white p-5 shadow-2xs">
                  <h3 className="text-sm font-extrabold text-[#0F172A]">{faq.q}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#334155]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
