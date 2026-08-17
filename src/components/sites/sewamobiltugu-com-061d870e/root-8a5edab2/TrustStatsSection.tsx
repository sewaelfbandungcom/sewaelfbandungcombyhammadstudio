import { CarFront, Clock3, Headphones, Star, Users } from "lucide-react";

const stats = [
  { value: "27+", label: "Varian Armada Elf & Bus", icon: Users },
  { value: "4.9/5", label: "Rating Kepuasan Rombongan", icon: Star },
  { value: "5 Menit", label: "Respon Cepat WhatsApp", icon: Clock3 },
  { value: "24/7", label: "Hotline Amoora Group", icon: Headphones },
] as const;

export function TrustStatsSection() {
  return (
    <section className="bg-[#F1F6FF] pb-10 pt-5 lg:pb-20 lg:pt-7">
      <div className="site-container grid overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(110deg,#101B38_0%,#1237B8_55%,#6920CC_100%)] shadow-[0_20px_50px_rgba(18,55,184,.16)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }, index) => (
          <div key={label} className={`group flex items-center gap-4 px-8 py-7 transition-colors duration-300 hover:bg-white/[0.06] ${index > 0 ? "border-t border-white/15 sm:border-t-0 sm:border-l" : ""} ${index === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""}`}>
            <span className="grid size-12 place-items-center rounded-2xl border border-[#50C710]/30 bg-[#50C710]/20 text-[#50C710] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#50C710]/30"><Icon className="size-6" strokeWidth={1.7} /></span>
            <span><strong className="block text-[26px] font-bold leading-none tracking-[-0.04em] text-white">{value}</strong><span className="mt-1.5 block text-[11px] font-medium text-slate-200">{label}</span></span>
          </div>
        ))}
      </div>
    </section>
  );
}
