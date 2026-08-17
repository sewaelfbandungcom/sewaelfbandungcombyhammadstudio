import { CalendarCheckIcon } from "@phosphor-icons/react/dist/ssr/CalendarCheck";
import { CarIcon } from "@phosphor-icons/react/dist/ssr/Car";
import { CarSimpleIcon } from "@phosphor-icons/react/dist/ssr/CarSimple";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr/CheckCircle";
import { CreditCardIcon } from "@phosphor-icons/react/dist/ssr/CreditCard";
import { SparkleIcon } from "@phosphor-icons/react/dist/ssr/Sparkle";
import { SteeringWheelIcon } from "@phosphor-icons/react/dist/ssr/SteeringWheel";
import { TagIcon } from "@phosphor-icons/react/dist/ssr/Tag";
import { UsersThreeIcon } from "@phosphor-icons/react/dist/ssr/UsersThree";
import Image from "next/image";

import { assetRoot, benefits } from "./content";

const benefitIcons = [CarIcon, UsersThreeIcon, TagIcon, SteeringWheelIcon] as const;
const benefitColorClasses = ["text-[#1237B8]", "text-[#6920CC]", "text-[#50C710]", "text-[#2857E8]"] as const;
const stepBgClasses = ["bg-[#1237B8]", "bg-[#6920CC]", "bg-[#50C710]"] as const;

const steps = [
  { title: "Konsultasi Rute & Unit", description: "Hubungi admin via WhatsApp untuk cek ketersediaan Elf, Hiace, atau Bus pilihan Anda.", icon: CalendarCheckIcon },
  { title: "Konfirmasi & DP 30%", description: "Kunci jadwal perjalanan rombongan dengan DP 30% dan pelunasan di H-3.", icon: CreditCardIcon },
  { title: "Kontak Driver H-1 & Berangkat", description: "Nomor driver diinfokan H-1, armada bersih siap menjemput tepat waktu di lokasi Anda.", icon: CarSimpleIcon },
] as const;

export function BenefitsSection() {
  return (
    <section id="layanan" className="relative scroll-mt-20 overflow-hidden bg-[linear-gradient(180deg,#F1F6FF_0%,#F8FAFC_48%,#FFFFFF_100%)] py-16 lg:py-20">
      <Image src={`${assetRoot}/bandung-gedung-sate.jpg`} alt="" fill sizes="100vw" className="pointer-events-none object-cover object-center opacity-[0.14] mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(241,246,255,.36),rgba(248,250,252,.82)_45%,rgba(255,255,255,.97)),radial-gradient(circle_at_8%_22%,rgba(18,55,184,.08),transparent_22%),radial-gradient(circle_at_92%_76%,rgba(105,32,204,.06),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-10 h-44 opacity-40 [background-image:radial-gradient(circle,#2857E8_1.2px,transparent_1.2px)] [background-size:24px_24px] [mask-image:linear-gradient(90deg,black,transparent_32%,transparent_68%,black)]" />
      <div className="site-container relative">
        <header className="mx-auto max-w-[680px] text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1237B8]">Keunggulan Kami</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-[#101B38] sm:text-[38px]">Transportasi Rombongan yang<br />Nyaman, Aman &amp; Terpercaya</h2>
          <p className="mx-auto mt-3 max-w-[580px] text-[13px] leading-6 text-[#65708A]">Komitmen Sewa Elf Bandung by Amoora Group dalam menghadirkan pengalaman perjalanan terbaik.</p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            const colorClass = benefitColorClasses[index];
            return (
              <article key={benefit.title} className="group flex min-h-[224px] flex-col items-center rounded-[18px] border border-white/80 bg-white/88 px-5 py-5 text-center shadow-[0_16px_42px_rgba(18,55,184,.09)] backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_24px_54px_rgba(18,55,184,.15)]">
                <span className={`relative grid h-[82px] w-[92px] place-items-center ${colorClass} transition duration-300 group-hover:scale-105`}>
                  <span className="absolute inset-x-1 bottom-1 h-14 rounded-[50%] bg-[radial-gradient(circle,#E2ECFF_0%,#F1F6FF_62%,transparent_64%)]" />
                  <Icon className="relative size-[68px] drop-shadow-[0_9px_10px_rgba(18,55,184,.14)]" weight="duotone" />
                  {index === 0 ? <SparkleIcon className="absolute right-0 top-0 size-6 text-[#50C710]" weight="fill" /> : null}
                </span>
                <h3 className="mt-3 max-w-[230px] text-[16px] font-bold leading-5 text-[#101B38]">{benefit.title}</h3>
                <p className="mx-auto mt-2 max-w-[230px] text-[12px] leading-[1.65] text-[#65708A]">{benefit.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 lg:mt-16">
          <header className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1237B8]">Cara Pemesanan</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] text-[#101B38] sm:text-[36px]">Mudah dalam 3 Langkah (SOP)</h2>
          </header>
          <div className="relative mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="absolute left-[16.66%] right-[16.66%] top-[51px] hidden border-t-2 border-dashed border-[#2857E8]/35 md:block" />
            {steps.map(({ title, description, icon: Icon }, index) => {
              const badgeBg = stepBgClasses[index];
              return (
                <article key={title} className="relative z-10 flex flex-col items-center text-center">
                  <span className="relative grid size-[104px] place-items-center rounded-[24px] bg-[linear-gradient(145deg,#F4F8FF,#E8F1FF)] text-[#1237B8] shadow-[0_14px_32px_rgba(18,55,184,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(18,55,184,.15)]">
                    <Icon className="size-[58px]" weight="duotone" />
                    {index === 1 ? <CheckCircleIcon className="absolute -bottom-2 -right-2 size-8 rounded-full bg-white text-[#50C710]" weight="fill" /> : null}
                    <span className={`absolute -left-4 -top-3 grid size-9 place-items-center rounded-full ${badgeBg} text-sm font-bold text-white shadow-[0_8px_18px_rgba(18,55,184,.28)] ring-[5px] ring-white`}>{index + 1}</span>
                  </span>
                  <h3 className="mt-5 text-[15px] font-bold text-[#101B38]">{title}</h3>
                  <p className="mx-auto mt-2 max-w-[300px] text-[12px] leading-[1.65] text-[#65708A]">{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
