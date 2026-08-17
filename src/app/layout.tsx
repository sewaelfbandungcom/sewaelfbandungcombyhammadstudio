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
  title: "Sewa Elf Bandung Murah & Terpercaya - by Amoora Group",
  description:
    "Layanan sewa Elf Long 19 Seat, Hiace Premio / Commuter, dan Bus Pariwisata di Bandung. Armada bersih Euro4, driver berpengalaman untuk wisata Lembang, Ciwidey, Study Tour, & Luar Kota.",
  keywords: [
    "sewa elf bandung",
    "rental elf bandung",
    "sewa hiace bandung",
    "sewa elf pariwisata bandung",
    "rental elf murah bandung",
    "sewa bus medium bandung",
    "sewa big bus bandung",
    "sewa elf cileunyi",
    "amoora group transport",
    "rental mobil rombongan bandung",
    "sewa hiace premio bandung luxury",
  ],
  authors: [{ name: "Sewa Elf Bandung by Amoora Group" }],
  creator: "Amoora Group",
  publisher: "Sewa Elf Bandung",
  openGraph: {
    title: "Sewa Elf Bandung - Rental Hiace & Bus Pariwisata by Amoora Group",
    description:
      "Solusi transportasi rombongan terbaik di Bandung. Unit bersih, nyaman, aman, harga kompetitif untuk wisata, study tour, gathering, dan luar kota.",
    url: "https://sewaelfbandung.com",
    siteName: "Sewa Elf Bandung",
    locale: "id_ID",
    type: "website",
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
    "name": "Sewa Elf Bandung by Amoora Group",
    "image": "https://sewaelfbandung.com/icon.png",
    "url": "https://sewaelfbandung.com",
    "telephone": "+6281214802420",
    "priceRange": "Rp 750.000 - Rp 4.700.000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jalan Ciborelang No 8 Cileunyi",
      "addressLocality": "Bandung",
      "addressRegion": "Jawa Barat",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.9388,
      "longitude": 107.7471
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
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
