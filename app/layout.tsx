import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { SiteShell } from "@/components/layout/site-shell";
import { school } from "@/lib/site";
import { toPakistanTelE164 } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-var",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sls-g12-campus.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${school.name} · Islamabad`,
    template: `%s · ${school.name}`,
  },
  description:
    "Montessori through Matric on Srinagar Highway, Sector G-12—a premium campus pairing rigorous academics with pastoral mentorship.",
  keywords: [
    "Sadeeqa's Learning System",
    "SLS Montessori & High School",
    "sls.edu.pk",
    "SLS G-12",
    "Islamabad school",
    "Montessori",
    "Matric",
    "Sector G-12",
    "Srinagar Highway",
    "private school Pakistan",
  ],
  openGraph: {
    title: `${school.name} · ${school.city}`,
    description:
      "A dedicated Montessori through Matric campus—science labs, athletics, mentorship, and a calm, ambitious tone of learning.",
    url: siteUrl,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${school.name}`,
    description:
      "Excellence in education at SLS G-12 Campus, Islamabad—a purpose-built Srinagar Highway school.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#fafafa" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: school.name,
    alternateName: school.officialShortBrand,
    description: school.officialInstitutionLine,
    url: typeof siteUrl === "string" ? siteUrl : undefined,
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: school.officialShortBrand,
      url: school.officialSiteUrl,
    },
    sameAs: [school.officialSiteUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: school.address,
      addressLocality: school.city,
      addressCountry: school.country,
    },
    telephone: toPakistanTelE164(school.phone),
    email: school.email,
  };

  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="bg-background text-foreground min-h-full overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
