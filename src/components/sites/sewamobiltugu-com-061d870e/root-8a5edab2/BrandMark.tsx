import Image from "next/image";

type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function BrandMark({ inverse = false, compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center" aria-label="Sewa Elf Bandung">
      <Image
        src={inverse ? "/logo-sewaelfbandungcom-light.png" : "/logo-sewaelfbandungcom.png"}
        alt="Sewa Elf Bandung"
        width={5534}
        height={1534}
        sizes={compact ? "185px" : "220px"}
        className={`h-auto object-contain ${compact ? "w-[170px] sm:w-[195px]" : "w-[215px]"}`}
        priority
      />
    </span>
  );
}
