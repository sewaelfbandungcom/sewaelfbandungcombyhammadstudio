import { Clock3, Headphones, Star, Users } from "lucide-react";

const stats = [
  {
    value: "27+",
    label: "Varian Armada Elf & Bus",
    sublabel: "Unit Euro4 Siap Pakai",
    icon: Users,
    iconColor: "text-[#2857E8]",
    iconBg: "bg-[#2857E8]/15 border-[#2857E8]/30",
    valueColor: "text-white",
  },
  {
    value: "4.9/5",
    label: "Rating Kepuasan Rombongan",
    sublabel: "Dari 5.000+ Pelanggan",
    icon: Star,
    iconColor: "text-[#50C710]",
    iconBg: "bg-[#50C710]/15 border-[#50C710]/30",
    valueColor: "text-[#50C710]",
  },
  {
    value: "5 Menit",
    label: "Respon Cepat WhatsApp",
    sublabel: "Konsultasi & Cek Jadwal",
    icon: Clock3,
    iconColor: "text-[#50C710]",
    iconBg: "bg-[#50C710]/15 border-[#50C710]/30",
    valueColor: "text-white",
  },
  {
    value: "24/7",
    label: "Hotline Amoora Group",
    sublabel: "Bantuan Siap Setiap Saat",
    icon: Headphones,
    iconColor: "text-[#6920CC]",
    iconBg: "bg-[#6920CC]/20 border-[#6920CC]/40",
    valueColor: "text-white",
  },
] as const;

export function TrustStatsSection() {
  return (
    <section className="relative z-10 bg-[#F1F6FF] pb-12 pt-4 lg:pb-20 lg:pt-6">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[24px] border border-white/20 bg-[#101B38] shadow-[0_24px_60px_rgba(18,55,184,.18)]">
          {/* Subtle Ambient Glow Gradients */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(16,27,56,.98)_0%,rgba(18,55,184,.65)_45%,rgba(105,32,204,.35)_100%)]" />
          <div className="pointer-events-none absolute -right-16 -top-16 size-72 rounded-full bg-[#2857E8]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-1/4 size-72 rounded-full bg-[#50C710]/15 blur-3xl" />

          {/* Stat Grid */}
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, label, sublabel, icon: Icon, iconColor, iconBg, valueColor }, index) => (
              <div
                key={label}
                className={`group flex items-center gap-4.5 px-6 py-6 transition-all duration-300 hover:bg-white/[0.06] lg:px-7 lg:py-7 ${
                  index > 0 ? "border-t border-white/10 sm:border-t-0 sm:border-l" : ""
                } ${index === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""}`}
              >
                <div
                  className={`grid size-13 shrink-0 place-items-center rounded-2xl border ${iconBg} ${iconColor} shadow-inner transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 backdrop-blur-sm`}
                >
                  <Icon className="size-6" strokeWidth={2} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <strong className={`text-[28px] font-extrabold leading-none tracking-[-0.03em] ${valueColor} [font-variant-numeric:tabular-nums]`}>
                      {value}
                    </strong>
                    {index === 1 ? (
                      <span className="size-2 rounded-full bg-[#50C710] animate-pulse" />
                    ) : null}
                  </div>
                  <span className="mt-1.5 block text-xs font-bold text-slate-100">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-[10px] font-medium text-slate-400">
                    {sublabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
