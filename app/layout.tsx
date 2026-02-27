// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  // Keep the default title as the brand/site name (helps Google)
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  alternates: {
    canonical: siteConfig.url,
  },

  robots: {
    index: true,
    follow: true,
  },

  // Favicons + manifest
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "en_GB",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: siteConfig.name }],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 1) WebSite schema (this is the key one for Google “Site name”)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.tagline || undefined, // optional, safe if you have it
    url: siteConfig.url,
  };

  // 2) Organization schema (logo + name consistency)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/android-chrome-512x512.png`,
  };

  // 3) LocalBusiness schema (optional but good for local SEO)
  // Update telephone/address if you have real values.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/social.png`,
    logo: `${siteConfig.url}/android-chrome-512x512.png`,
    telephone: siteConfig.phone || "+442012345678", // replace with real number if possible
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressRegion: "Greater London",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    priceRange: "££-££££",
  };

  // Remove undefined values (keeps JSON-LD clean)
  const clean = (obj: any) =>
    JSON.parse(
      JSON.stringify(obj, (_k, v) => (v === undefined || v === null ? undefined : v))
    );

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clean(websiteSchema)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clean(organizationSchema)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clean(localBusinessSchema)) }}
        />
      </head>

      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
