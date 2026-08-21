import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteData";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sewaelfbandung.com"),
  title: "Sewa Elf Bandung Murah | Elf Long 19 Seat mulai Rp1,4 Juta",
  description:
    "Sewa Elf Bandung untuk wisata, study tour, ziarah, gathering & luar kota. Elf Long 18–22 seat mulai Rp1,4 juta/12 jam. Cek jadwal via WhatsApp.",
  keywords: [
    "sewa elf bandung",
    "rental elf bandung",
    "harga sewa elf bandung",
    "sewa elf bandung murah",
    "sewa elf long bandung",
    "sewa elf long 19 seat bandung",
    "sewa elf long euro4 bandung",
    "sewa elf 21 seat bandung",
    "sewa elf coaster bandung",
    "sewa elf 22 seat bandung",
    "sewa hiace bandung",
    "sewa hiace premio bandung",
    "sewa hiace commuter bandung",
    "sewa bus pariwisata bandung",
    "sewa elf bandung lembang",
    "sewa elf bandung ciwidey",
    "sewa elf bandung pangalengan",
    "sewa elf bandung garut",
    "sewa elf stasiun whoosh tegalluar",
    "amoora group transport",
  ],
  authors: [{ name: "Sewa Elf Bandung by Amoora Group" }],
  creator: "Amoora Group",
  publisher: "Sewa Elf Bandung",
  alternates: {
    canonical: "https://sewaelfbandung.com",
  },
  openGraph: {
    title: "Sewa Elf Bandung Murah | Elf Long 19 Seat mulai Rp1,4 Juta",
    description:
      "Sewa Elf Bandung untuk wisata, study tour, ziarah, gathering & luar kota. Elf Long 18–22 seat mulai Rp1,4 juta/12 jam. Cek jadwal via WhatsApp.",
    url: "https://sewaelfbandung.com",
    siteName: "Sewa Elf Bandung by Amoora Group",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/armada/elf-long.webp",
        width: 1200,
        height: 630,
        alt: "Sewa Elf Bandung by Amoora Group - Elf Long 19 Seat",
      },
    ],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "@id": "https://sewaelfbandung.com/#business",
    name: "Sewa Elf Bandung by Amoora Group",
    image: "https://sewaelfbandung.com/images/armada/elf-long.webp",
    logo: "https://sewaelfbandung.com/logo-brand.jpeg",
    url: "https://sewaelfbandung.com",
    telephone: ["+6281214802420", "+6282215452230"],
    email: "info@sewaelfbandung.com",
    priceRange: "Rp 750.000 - Rp 4.700.000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jalan Ciborelang No 8",
      addressLocality: "Cileunyi",
      addressRegion: "Jawa Barat",
      postalCode: "40622",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.9388,
      longitude: 107.7471,
    },
    areaServed: [
      "Bandung",
      "Lembang",
      "Ciwidey",
      "Pangalengan",
      "Garut",
      "Subang",
      "Pangandaran",
      "Jakarta",
      "Sumedang",
      "Cirebon",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Amoora Group",
      url: "https://sewaelfbandung.com",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <html
      lang="id"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bodyFont.className} min-h-full flex flex-col bg-[#F1F6FF] text-[#101B38]`}>
        {children}
      </body>
    </html>
  );
}
