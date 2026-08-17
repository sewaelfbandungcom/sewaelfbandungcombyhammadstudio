import Image from "next/image";

type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function BrandMark({ inverse = false, compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Sewa Elf Bandung">
      <span className="relative size-10 sm:size-11 overflow-hidden rounded-xl bg-white shadow-md ring-2 ring-[#50C710]/40 shrink-0 flex items-center justify-center">
        <Image
          src="/logo-brand.jpeg"
          alt="Logo Sewa Elf Bandung"
          fill
          sizes="44px"
          className="object-cover"
        />
      </span>
      <span className="inline-flex flex-col items-start">
        <span className={`text-base sm:text-lg font-black tracking-tight leading-tight ${inverse ? "text-white" : "text-[#1237B8]"}`}>
          Sewa Elf Bandung
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-[0.14em] ${inverse ? "text-[#50C710]" : "text-[#6920CC]"}`}>
          by Amoora Group
        </span>
      </span>
    </span>
  );
}
