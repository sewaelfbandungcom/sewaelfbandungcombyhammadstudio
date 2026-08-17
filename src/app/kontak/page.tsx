import type { Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import {
  MapPin,
  PhoneCall,
  WhatsappLogo,
  Clock,
  EnvelopeSimple,
  ShieldCheck,
  Building,
} from "@phosphor-icons/react/dist/ssr";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Kontak & Alamat Kantor Sewa Elf Bandung | Amoora Group",
  description:
    "Hubungi Sewa Elf Bandung by Amoora Group di Jl. Ciborelang No 8 Cileunyi Bandung. WhatsApp 0812-1480-2420 / 0822-1545-2230, buka 24 jam.",
};

export default function KontakPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F1F6FF] text-[#101B38]">
      <Navbar />
      <main className="flex-grow">
        {/* Page Hero Header */}
        <div className="bg-[#1237B8] text-white py-12 sm:py-16 text-center relative overflow-hidden">
          <div className="site-container relative z-10 space-y-3">
            <span className="text-xs font-bold text-[#50C710] bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
              Layanan Pelanggan 24 Jam
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Kontak & Lokasi Kantor
            </h1>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto">
              Siap melayani konsultasi rute, cek ketersediaan armada, dan penawaran harga terbaik untuk rombongan Anda.
            </p>
          </div>
        </div>

        <section className="py-16 sm:py-20 bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Info Cards */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#6920CC] uppercase tracking-wider bg-[#F5F0FF] px-3 py-1 rounded-md">
                    Sewa Elf Bandung — Amoora Group
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#101B38] mt-2">
                    Siap Membantu Rencana Perjalanan Anda
                  </h2>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Jangan ragu untuk menghubungi tim reservasi kami kapan saja. Kami melayani penjemputan dari seluruh area Bandung, Bandara, Stasiun KCIC, maupun luar kota.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F1F6FF] border border-blue-100">
                    <div className="p-3 rounded-xl bg-[#1237B8] text-white shrink-0">
                      <MapPin size={24} weight="fill" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Alamat Garasi & Kantor:
                      </div>
                      <div className="text-sm font-bold text-[#101B38] mt-0.5">
                        {siteConfig.address}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Akses strategis dekat Gerbang Tol Cileunyi Bandung
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Admin 1 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F2FBEA] border border-[#50C710]/30">
                    <div className="p-3 rounded-xl bg-[#50C710] text-white shrink-0">
                      <WhatsappLogo size={24} weight="fill" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                        WhatsApp Admin 1 (Reservasi Cepat):
                      </div>
                      <div className="text-base font-black text-[#101B38] mt-0.5">
                        {siteConfig.phone1}
                      </div>
                      <a
                        href={getWhatsAppBookingUrl({ phone: siteConfig.phone1Clean })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#50C710] hover:underline mt-1"
                      >
                        Chat Langsung Admin 1 &rarr;
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Admin 2 */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F2FBEA] border border-[#50C710]/30">
                    <div className="p-3 rounded-xl bg-[#50C710] text-white shrink-0">
                      <WhatsappLogo size={24} weight="fill" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                        WhatsApp Admin 2 (Luar Kota & Korporat):
                      </div>
                      <div className="text-base font-black text-[#101B38] mt-0.5">
                        {siteConfig.phone2}
                      </div>
                      <a
                        href={getWhatsAppBookingUrl({ phone: siteConfig.phone2Clean })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#50C710] hover:underline mt-1"
                      >
                        Chat Langsung Admin 2 &rarr;
                      </a>
                    </div>
                  </div>

                  {/* Jam Operasional */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F0FF] border border-[#6920CC]/20">
                    <div className="p-3 rounded-xl bg-[#6920CC] text-white shrink-0">
                      <Clock size={24} weight="fill" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Jam Layanan Customer:
                      </div>
                      <div className="text-sm font-bold text-[#101B38] mt-0.5">
                        {siteConfig.operatingHours}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Respon cepat melalui WhatsApp setiap saat
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Quick Inquiry Card */}
              <div className="lg:col-span-6 bg-[#F1F6FF] rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-md">
                <div className="text-center pb-6 mb-6 border-b border-blue-200">
                  <h3 className="text-xl font-bold text-[#101B38]">
                    Konsultasi Rute & Penawaran Khusus
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Dapatkan estimasi biaya sewa all-in (Unit + Driver + BBM + Tol)
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl border border-blue-100 text-xs text-gray-700 space-y-2">
                    <div className="font-bold text-[#1237B8] text-sm">
                      Informasi yang Diperlukan:
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Tanggal keberangkatan dan durasi sewa (hari)</li>
                      <li>Titik jemput (Bandung / Stasiun / Bandara / Luar Kota)</li>
                      <li>Tujuan destinasi wisata / rute kunjungan</li>
                      <li>Estimasi jumlah peserta rombongan</li>
                      <li>Pilihan armada (Elf Long, Hiace, atau Bus)</li>
                    </ul>
                  </div>

                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-black text-sm sm:text-base text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-lg shadow-[#50C710]/30 transition-all"
                  >
                    <WhatsappLogo size={22} weight="fill" />
                    <span>Hubungi CS Sekarang via WhatsApp</span>
                  </a>

                  <div className="text-center">
                    <p className="text-[11px] text-gray-500">
                      * Tanpa komitmen, konsultasi rute & cek ketersediaan gratis 100%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
