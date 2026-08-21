import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_LANDING_SLUGS, SEO_LANDING_PAGES } from "@/data/seoLandingPages";
import { LandingPageTemplate } from "@/components/seo/LandingPageTemplate";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ALL_LANDING_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = SEO_LANDING_PAGES[slug];

  if (!page) {
    return {
      title: "Halaman Tidak Ditemukan | Sewa Elf Bandung",
    };
  }

  const canonicalUrl = `https://sewaelfbandung.com/${slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: "Sewa Elf Bandung by Amoora Group",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: page.featuredImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.featuredImage],
    },
  };
}

export default async function DynamicLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = SEO_LANDING_PAGES[slug];

  if (!page) {
    notFound();
  }

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://sewaelfbandung.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": page.title,
            "item": `https://sewaelfbandung.com/${slug}`,
          },
        ],
      },
      {
        "@type": "Product",
        "name": page.title,
        "description": page.metaDescription,
        "image": `https://sewaelfbandung.com${page.featuredImage}`,
        "brand": {
          "@type": "Brand",
          "name": "Amoora Group",
        },
        "offers": {
          "@type": "Offer",
          "url": `https://sewaelfbandung.com/${slug}`,
          "priceCurrency": "IDR",
          "price": page.priceStarting.replace(/[^0-9]/g, ""),
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "AutoRental",
            "name": "Sewa Elf Bandung by Amoora Group",
            "telephone": "+6281214802420",
          },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPageTemplate data={page} />
    </>
  );
}
