"use client";

import React, { useState } from "react";
import {
  CurrencyDollar,
  MagnifyingGlass,
  WhatsappLogo,
  Info,
  Clock,
  MapPin,
  CheckCircle,
} from "@phosphor-icons/react";
import { FLEET_UNITS, getWhatsAppBookingUrl } from "@/data/siteData";

export function PriceListTableSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredData = FLEET_UNITS.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.seats.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedFilter === "all") return matchSearch;
    return matchSearch && item.category === selectedFilter;
  });

  return (
    <section id="tarif" className="py-16 sm:py-24 bg-[#F1F6FF]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F0FF] border border-[#6920CC]/20 text-xs font-bold text-[#6920CC] uppercase tracking-wider">
            <CurrencyDollar size={15} weight="fill" />
            <span>Tarif Transparan & Kompetitif</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#101B38] tracking-tight">
            Daftar Tarif Sewa Mobil & Bus Bandung
          </h2>
          <p className="text-sm sm:text-base text-[#65708A] leading-relaxed">
            Harga sewa resmi berlaku untuk titik penjemputan Bandung Kota.
          </p>
        </div>

        {/* Notice Badge */}
        <div className="bg-[#1237B8] text-white rounded-2xl p-4 sm:p-5 mb-8 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/20 text-[#50C710]">
              <Info size={24} weight="bold" />
            </div>
            <div>
              <div className="text-sm font-bold">
                Harga Berlaku untuk Penjemputan Bandung Kota
              </div>
              <div className="text-xs text-white/80">
                #Harga Dapat Berubah Tanpa Pemberitahuan Terlebih Dahulu. Hubungi Admin untuk penawaran terupdate!#
              </div>
            </div>
          </div>

          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-[#50C710] hover:bg-[#43aa0c] shadow transition-all"
          >
            <WhatsappLogo size={18} weight="fill" />
            <span>Tanya Harga Terupdate</span>
          </a>
        </div>

        {/* Search & Category Tabs */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-blue-100 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <MagnifyingGlass
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari armada (Elf, Hiace, Bus...)"
                className="w-full bg-[#F1F6FF] border border-blue-100 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#101B38] focus:outline-none focus:ring-2 focus:ring-[#1237B8]"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === "all"
                    ? "bg-[#1237B8] text-white"
                    : "bg-[#F1F6FF] text-gray-700 hover:bg-gray-200"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setSelectedFilter("microbus")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === "microbus"
                    ? "bg-[#1237B8] text-white"
                    : "bg-[#F1F6FF] text-gray-700 hover:bg-gray-200"
                }`}
              >
                Elf & Hiace
              </button>
              <button
                onClick={() => setSelectedFilter("bus")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === "bus"
                    ? "bg-[#1237B8] text-white"
                    : "bg-[#F1F6FF] text-gray-700 hover:bg-gray-200"
                }`}
              >
                Bus Pariwisata
              </button>
              <button
                onClick={() => setSelectedFilter("mpv_suv")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === "mpv_suv"
                    ? "bg-[#1237B8] text-white"
                    : "bg-[#F1F6FF] text-gray-700 hover:bg-gray-200"
                }`}
              >
                MPV & SUV
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Table Container */}
        <div className="bg-white rounded-3xl border border-blue-100 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1237B8] text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-5">Jenis Kendaraan</th>
                  <th className="py-4 px-4">Kapasitas</th>
                  <th className="py-4 px-5">
                    <div>Dalam Kota Bandung</div>
                    <div className="text-[10px] font-normal text-white/80 lowercase">
                      12 jam / hari (pada hari yg sama)
                    </div>
                  </th>
                  <th className="py-4 px-5">
                    <div>Luar Kota</div>
                    <div className="text-[10px] font-normal text-white/80 lowercase">
                      18 jam / hari (pada hari yg sama)
                    </div>
                  </th>
                  <th className="py-4 px-5 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {filteredData.map((item, idx) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-[#F1F6FF]/70 transition-colors ${
                      idx % 2 === 1 ? "bg-[#F9FBFF]" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-5 font-bold text-[#101B38]">
                      <div className="flex items-center gap-2">
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="text-[10px] font-bold text-[#6920CC] bg-[#F5F0FF] px-2 py-0.5 rounded-md hidden sm:inline">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] font-normal text-gray-500 mt-0.5">
                        {item.categoryLabel}
                      </div>
                    </td>

                    <td className="py-4 px-4 font-semibold text-gray-700 whitespace-nowrap">
                      <span className="bg-[#F1F6FF] px-2.5 py-1 rounded-lg border border-blue-100">
                        {item.seats}
                      </span>
                    </td>

                    <td className="py-4 px-5 font-black text-[#1237B8] whitespace-nowrap">
                      {item.priceDalamKota}
                    </td>

                    <td className="py-4 px-5 font-black text-[#101B38] whitespace-nowrap">
                      {item.priceLuarKota}
                    </td>

                    <td className="py-4 px-5 text-center whitespace-nowrap">
                      <a
                        href={getWhatsAppBookingUrl({ unitName: `${item.name} (${item.seats})` })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#50C710] hover:bg-[#43aa0c] shadow-sm transition-all"
                      >
                        <WhatsappLogo size={15} weight="fill" />
                        <span>Pesan</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
