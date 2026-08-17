import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { FleetSection } from "@/components/sections/FleetSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { PriceListTableSection } from "@/components/sections/PriceListTableSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { BookingStepsSection } from "@/components/sections/BookingStepsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F1F6FF] text-[#101B38]">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsBar />
        <FleetSection limit={6} />
        <ServicesSection />
        <WhyChooseUsSection />
        <PriceListTableSection />
        <DestinationsSection />
        <BookingStepsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
