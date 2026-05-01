import { Globe, Mail, MapPin, Newspaper, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { campusFacebookPhotosPage, schoolLogoAlt } from "@/lib/campus-media";
import { Separator } from "@/components/ui/separator";
import { school, nav } from "@/lib/site";

const icons = [
  { href: school.officialSiteUrl, icon: Globe, label: "SLS—all campuses & news" },
  { href: school.social.facebook, icon: Share2, label: "Facebook" },
  { href: school.social.linkedin, icon: Newspaper, label: "LinkedIn company" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-border bg-muted/25 border-t">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-start gap-4">
              <Image
                src={school.logoSrc}
                alt={schoolLogoAlt}
                width={148}
                height={56}
                className="border-border h-14 w-auto rounded-lg border bg-card object-contain p-1 md:h-[4.75rem]"
              />
              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                  {school.name}
                </p>
                <p className="text-muted-foreground mt-2 max-w-sm text-[11px] font-medium leading-snug">
                  A campus of{" "}
                  <a
                    href={school.officialSiteUrl}
                    className="text-foreground underline-offset-4 hover:text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sls.edu.pk
                  </a>
                  · {school.officialInstitutionLine}
                </p>
              </div>
            </div>
            <h2 className="text-foreground mt-8 max-w-xs text-2xl font-semibold tracking-tight">
              Where scholars grow with purpose.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
              {school.networkSummary}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 lg:col-span-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-foreground text-xs font-semibold tracking-wide uppercase">
                Explore
              </p>
              <ul className="mt-6 grid gap-2 text-sm">
                {nav.slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary font-medium underline-offset-4 transition-colors hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4">
              <p className="text-foreground text-xs font-semibold tracking-wide uppercase">
                Campus
              </p>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="text-primary mt-0.5 size-4 shrink-0" aria-hidden />
                  <address className="text-muted-foreground not-italic leading-relaxed">
                    {school.address}
                  </address>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary size-4 shrink-0" aria-hidden />
                  <span className="text-muted-foreground">{school.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary size-4 shrink-0" aria-hidden />
                  <a
                    className="text-muted-foreground hover:text-primary font-medium underline-offset-4 transition-colors hover:underline"
                    href={`mailto:${school.email}`}
                  >
                    {school.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <p className="text-foreground text-xs font-semibold tracking-wide uppercase">
                Connections
              </p>
              <p className="text-muted-foreground mt-4 max-w-[14rem] text-[12px] leading-relaxed">
                Branch updates &amp; community on{" "}
                <a
                  href={campusFacebookPhotosPage}
                  className="text-primary font-semibold underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook (G‑12 branch)
                </a>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {icons.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border hover:border-primary hover:text-primary hover:bg-background flex size-12 items-center justify-center rounded-xl border bg-card text-muted-foreground transition-colors"
                  >
                    <Icon className="size-5" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-14" />
        <div className="text-muted-foreground flex flex-col items-start justify-between gap-4 text-sm md:flex-row md:items-center">
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {nav.slice(5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="max-w-xl text-xs md:text-right md:leading-relaxed">
            © {year} {school.name} · {school.city}.{" "}
            <a
              href={school.officialSiteUrl}
              className="underline-offset-4 hover:text-foreground hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sadeeqa’s Learning System ({school.foundedYear}) — browse all campuses
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
