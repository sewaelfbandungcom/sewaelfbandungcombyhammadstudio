export type FleetCategory = "all" | "microbus" | "bus" | "mpv_suv";

export interface VehicleUnit {
  id: string;
  name: string;
  category: "microbus" | "bus" | "mpv_suv";
  categoryLabel: string;
  seats: string;
  priceDalamKota: string;
  priceLuarKota: string;
  startPriceNote?: string;
  badge?: string;
  isPopular?: boolean;
  isLuxury?: boolean;
  features: string[];
  description: string;
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  destinations?: string[];
  icon: string;
  highlights: string[];
}

export interface BookingStep {
  step: number;
  title: string;
  timing: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization?: string;
  avatarText: string;
  rating: number;
  unitUsed: string;
  trip: string;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "pemesanan" | "fasilitas" | "biaya";
}
