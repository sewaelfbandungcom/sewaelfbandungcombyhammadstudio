"use client";

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, Briefcase, CalendarCheck, CheckCircle2, Compass, GraduationCap, Heart, Home, Info, MapPin, PartyPopper, Phone, ShieldCheck, Sparkles, Users, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { assetRoot, bookingUrl } from "./content";
import { CtaSection } from "./CtaSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const serviceList = [
  {
    id: "wisata",
    title: "1. Sewa Elf untuk Wisata",
    icon: Compass,
    tag: "Paling Populer",
    tagColor: "bg-[#50C710] text-white",
    description: "Ingin liburan bersama keluarga atau rombongan tanpa harus menggunakan beberapa kendaraan? Layanan rental Elf Bandung untuk wisata dapat menjadi pilihan yang sangat praktis dan efisien.",
    destinations: "Bandung Kota, Lembang (Tangkuban Perahu, Floating Market, Farmhouse), Ciwidey (Kawah Putih, Ranca Upas), Pangalengan, Pangandaran, Garut, Subang (Ciater), dan berbagai tujuan wisata lainnya.",
    points: [
      "Tidak perlu lelah menyetir di jalanan menanjak Bandung",
      "Kabin lega untuk barang bawaan & oleh-oleh khas Bandung",
      "Driver menguasai spot wisata dan rute alternatif bebas macet",
    ],
  },
  {
    id: "study-tour",
    title: "2. Sewa Elf untuk Study Tour",
    icon: GraduationCap,
    tag: "Edukasi & Kampus",
    tagColor: "bg-[#1237B8] text-white",
    description: "Layanan sewa Elf Bandung untuk study tour sangat cocok untuk sekolah, kampus, lembaga pendidikan, maupun organisasi.",
    destinations: "Museum Geologi, Saung Angklung Udjo, Observatorium Bosscha, Puspa Iptek Sundial, kunjungan industri, dan study tour kampus di Jawa Barat.",
    points: [
      "Rombongan siswa / mahasiswa terkoordinasi rapi dalam satu armada",
      "Standar keselamatan tinggi dengan seatbelt di setiap kursi",
      "Jadwal fleksibel mengikuti rundown kegiatan edukasi",
    ],
  },
  {
    id: "gathering",
    title: "3. Sewa Elf untuk Gathering Perusahaan",
    icon: Briefcase,
    tag: "Corporate & Instansi",
    tagColor: "bg-[#6920CC] text-white",
    description: "Kami melayani kebutuhan rental Elf Bandung untuk gathering, outing, meeting, dan perjalanan dinas perusahaan swasta maupun instansi pemerintahan.",
    destinations: "Resort Lembang, Ciwidey glamping, outbound Pangalengan, hotel meeting Bandung, dan kunjungan kerja antar cabang.",
    points: [
      "Pengaturan transportasi karyawan menjadi jauh lebih efisien",
      "Invoice resmi dan kelengkapan dokumen penagihan corporate",
      "Tepat waktu untuk agenda meeting & acara resmi perusahaan",
    ],
  },
  {
    id: "keluarga",
    title: "4. Sewa Elf untuk Keluarga",
    icon: Heart,
    tag: "Keluarga Besar",
    tagColor: "bg-[#2857E8] text-white",
    description: "Bagi Anda yang ingin bepergian bersama keluarga besar, sewa Elf Bandung menjadi solusi transportasi yang nyaman tanpa harus konvoi mobil pribadi.",
    destinations: "Silaturahmi keluarga, liburan akhir pekan, mudik bersama, hajatan, dan rekreasi santai di kota kembang.",
    points: [
      "Seluruh anggota keluarga berkumpul ceria dalam satu kendaraan",
      "Anak-anak dan lansia nyaman dengan AC dingin & kursi empuk",
      "Biaya jauh lebih hemat dibanding menyewa 3-4 mobil kecil",
    ],
  },
  {
    id: "event",
    title: "5. Sewa Elf untuk Acara & Event",
    icon: PartyPopper,
    tag: "Event & Wedding",
    tagColor: "bg-[#0F172A] text-white",
    description: "Kami melayani kebutuhan kendaraan rombongan untuk berbagai macam acara spesial dan event skala besar.",
    destinations: "Pernikahan / Wedding Shuttle, Acara Keluarga, Komunitas & Club, Seminar & Konser, Event Perusahaan, Acara Kampus, dan Kegiatan Sosial.",
    points: [
      "Layanan antar-jemput tamu undangan VIP tepat waktu",
      "Kapasitas muat fleksibel hingga puluhan unit sekaligus",
      "Bisa disewa sistem drop-off, harian, atau standby seharian",
    ],
  },
  {
    id: "ziarah",
    title: "6. Sewa Elf untuk Ziarah & Perjalanan Religi",
    icon: UsersRound,
    tag: "Ziarah & Religi",
    tagColor: "bg-[#2e8807] text-white",
    description: "Layanan sewa Elf Bandung untuk ziarah dapat digunakan untuk perjalanan rombongan majelis ta'lim, keluarga, maupun komunitas menuju berbagai lokasi tujuan religi.",
    destinations: "Ziarah Makam Wali Songo, Makam Mahmud Bandung, Ziarah Pamijahan Tasikmalaya, Cirebon, Banten, dan tempat ibadah lainnya.",
    points: [
      "Rute dan durasi perjalanan dapat disesuaikan penuh dengan pemesan",
      "Driver ramah, sabar, dan memahami etika perjalanan ibadah",
      "Audio karaoke & mikrofon tersedia untuk lantunan doa / selawat",
    ],
  },
  {
    id: "luar-kota",
    title: "7. Sewa Elf Bandung untuk Luar Kota",
    icon: MapPin,
    tag: "Antar Kota",
    tagColor: "bg-[#EA580C] text-white",
    description: "Selain melayani wilayah Bandung Raya, kami juga melayani kebutuhan perjalanan jarak jauh / luar kota antar provinsi.",
    destinations: "Jakarta, Bandara Soekarno-Hatta, Bandara Kertajati (BIJB), Cirebon, Semarang, Yogyakarta, Solo, Surabaya, Malang, hingga Bali.",
    points: [
      "Konsultasi gratis rute, waktu tempuh, dan jumlah armada",
      "Kondisi mesin Euro4 tangguh siap perjalanan tol jarak jauh",
      "Opsi sewa 18 jam / hari atau paket multi-hari (menginap)",
    ],
  },
];

const bookingSteps = [
  {
    step: "01",
    title: "Hubungi Customer Service",
    description: "Hubungi kami via Telepon atau WhatsApp (0812-1480-2420 / 0822-1545-2230).",
  },
  {
    step: "02",
    title: "Informasikan Detail Rute",
    description: "Sampaikan titik penjemputan, kota tujuan, tanggal berangkat, dan tipe armada yang diinginkan.",
  },
  {
    step: "03",
    title: "Konfirmasi & DP 30%",
    description: "Pemesanan sah dan unit terkunci setelah Anda melakukan pembayaran DP sebesar 30% dari total sewa.",
  },
  {
    step: "04",
    title: "Pelunasan Maksimal H-3",
    description: "Pelunasan pembayaran sewa dilakukan paling lambat pada H-3 (3 hari sebelum tanggal keberangkatan).",
  },
  {
    step: "05",
    title: "Kontak Driver di H-1",
    description: "Nomor kontak dan identitas driver bertugas akan kami kirimkan resmi pada H-1 keberangkatan.",
  },
  {
    step: "06",
    title: "Penjemputan Tepat Waktu",
    description: "Driver tiba di lokasi penjemputan tepat waktu dengan kendaraan yang bersih, wangi, dan siap jalan!",
  },
];

export function ServicesPage() {
  return (
    <div id="top" className="min-h-screen bg-[#F1F6FF] text-[#0F172A]">
      <SiteHeader />
      <main>
        {/* Header Hero */}
        <section className="relative flex min-h-[380px] sm:min-h-[440px] items-end overflow-hidden pb-10 sm:pb-14 pt-[118px] sm:pt-[140px] text-white">
          <Image
            src={`${assetRoot}/drivemate-cta-bandung.png`}
            alt="Layanan Sewa Elf Bandung by Amoora Group"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-[center_35%] blur-[2px]"
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
              <span className="text-white font-bold">Layanan Kami</span>
            </nav>
            <p className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#50C710]">
              <Compass className="size-3.5 sm:size-4" /> Solusi Transportasi Rombongan
            </p>
            <h1 className="mt-2.5 sm:mt-3.5 max-w-[780px] text-[30px] sm:text-[46px] lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.045em] text-white drop-shadow-md">
              Pilihan Layanan <span className="text-[#50C710]">Sewa Elf Bandung</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-[640px] text-xs sm:text-sm leading-relaxed text-slate-100 font-medium sm:leading-7">
              Layanan rental kendaraan Elf, Hiace, dan Bus Pariwisata untuk berbagai kebutuhan wisata, study tour, gathering perusahaan, keluarga, acara, ziarah, dan carter luar kota.
            </p>
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold text-white">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <CheckCircle2 className="size-3.5 sm:size-4 text-[#50C710]" /> Wisata &amp; Tour Rombongan
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <ShieldCheck className="size-3.5 sm:size-4 text-[#50C710]" /> Gathering &amp; Study Tour
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/15">
                <MapPin className="size-3.5 sm:size-4 text-[#50C710]" /> Bandung &amp; Luar Kota
              </span>
            </div>
          </div>
        </section>

        {/* 7 Services Grid Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
          <div className="site-container">
            <div className="max-w-[700px]">
              <span className="inline-flex items-center gap-2 rounded-md bg-[#F1F6FF] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                <Compass className="size-3.5" /> 7 Kategori Layanan
              </span>
              <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Layanan Transportasi Sesuai Kebutuhan Anda
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#334155]">
                Pilih jenis layanan yang paling sesuai dengan agenda perjalanan rombongan Anda di Bandung dan sekitarnya.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
              {serviceList.map((svc) => {
                const Icon = svc.icon;
                return (
                  <article
                    key={svc.id}
                    className="group rounded-[24px] border border-[#DCE5F0] bg-[#F8FAFC] p-6 sm:p-8 lg:p-9 shadow-sm transition-all duration-300 hover:border-[#1237B8]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(18,55,184,.12)]"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="grid size-12 place-items-center rounded-2xl bg-[#1237B8] text-white shadow-md">
                            <Icon className="size-6" />
                          </span>
                          <div>
                            <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${svc.tagColor}`}>
                              {svc.tag}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-[-0.025em]">
                              {svc.title}
                            </h3>
                          </div>
                        </div>

                        <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#334155]">
                          {svc.description}
                        </p>

                        <div className="mt-4 rounded-xl border border-[#DCE5F0] bg-white p-3.5 sm:p-4 text-xs text-[#0F172A]">
                          <strong className="block font-extrabold text-[#1237B8] mb-1">Destinasi Favorit:</strong>
                          <span className="text-[#334155]">{svc.destinations}</span>
                        </div>

                        <ul className="mt-4 space-y-2 text-xs sm:text-sm font-medium text-[#1E293B]">
                          {svc.points.map((pt, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="size-4 text-[#50C710] shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="shrink-0 flex flex-col justify-between border-t border-[#E2E8F0] pt-4 lg:border-t-0 lg:border-l lg:border-[#E2E8F0] lg:pl-8 lg:pt-0 lg:w-[260px]">
                        <div>
                          <span className="block text-[11px] font-bold text-[#64748B]">Pilihan Kendaraan</span>
                          <strong className="mt-0.5 block text-sm font-extrabold text-[#0F172A]">
                            Elf Long, Hiace &amp; Bus
                          </strong>
                          <p className="mt-1 text-xs text-[#64748B]">Kapasitas 14, 19, 31 s/d 59 Seat</p>
                        </div>

                        <a
                          href={bookingUrl(`Layanan: ${svc.title}`)}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 flex h-11.5 w-full items-center justify-center gap-2 rounded-xl bg-[#50C710] hover:bg-[#43aa0c] text-xs font-bold text-white shadow-[0_10px_22px_rgba(80,199,16,.25)] transition hover:-translate-y-0.5 active:scale-98 cursor-pointer"
                        >
                          <WhatsappLogoIcon className="size-[18px]" weight="fill" />
                          Pesan Layanan Ini
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SOP & Cara Pemesanan (from Markdown) */}
        <section className="relative py-14 sm:py-20 lg:py-24 bg-[#F1F6FF]">
          <div className="site-container">
            <div className="text-center max-w-[720px] mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#E8F1FF] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1237B8]">
                <CalendarCheck className="size-3.5" /> SOP &amp; Prosedur
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                Cara Pemesanan Sewa Elf Bandung
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#334155]">
                Langkah mudah dan transparan untuk melakukan reservasi unit kendaraan rombongan Anda.
              </p>
            </div>

            {/* 6 Step Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              {bookingSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative rounded-[22px] border border-[#DCE5F0] bg-white p-6 shadow-xs transition duration-300 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-[#1237B8]/25 [font-variant-numeric:tabular-nums]">
                      {step.step}
                    </span>
                    <span className="size-2 rounded-full bg-[#50C710]" />
                  </div>
                  <h3 className="mt-3 text-base font-extrabold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#334155]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Syarat & Kebijakan Tambahan (from Markdown) */}
            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center gap-2 font-bold text-amber-900 mb-2">
                <Info className="size-4 text-amber-700" />
                <span>Catatan Penting Kebijakan Pemesanan &amp; Pembatalan:</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-xs text-amber-900/90 leading-relaxed">
                <li>Pemesanan sewa kendaraan dinyatakan <strong>Deal / Terkunci</strong> setelah melakukan pembayaran DP sebesar <strong>30%</strong> dari total sewa.</li>
                <li>Pelunasan dilakukan maksimal pada <strong>H-3</strong> (3 hari sebelum tanggal keberangkatan).</li>
                <li>Kontak dan nomor driver bertugas akan kami informasikan resmi pada <strong>H-1</strong> keberangkatan.</li>
                <li>DP yang telah disetorkan tidak dapat diuangkan kembali (non-refundable).</li>
                <li>Pembatalan sepihak pada H-3 dikenakan biaya 100% dari total harga sewa.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rich Interactive CTA Section */}
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
