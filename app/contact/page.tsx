import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteBreadcrumbs } from "@/components/site-breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { school } from "@/lib/site";
import { cn, toPakistanTelUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit SLS G-12 Campus on Service Road, Sector G-12, Srinagar Highway, Islamabad—phone, email, map, and admissions enquiry.",
};

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Sector+G-12,+Srinagar+Highway,+Islamabad,+Pakistan&z=15&output=embed";

export default function ContactPage() {
  return (
    <div className="pb-28">
      <SectionWrapper tinted className="border-border border-b" innerClassName="pb-12 pt-[4.75rem]">
        <SiteBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />
        <PageHeader
          eyebrow="Reach the campus team"
          title="We respond with speed—and substance"
          description="Guided tours, fee guidance, pastoral questions, transfers: start with geography and direct lines, then tell us how we may serve your family."
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-10 lg:col-span-5">
            <div className="border-border rounded-3xl border bg-card p-9 shadow-lg md:p-11">
              <h2 className="text-xl font-semibold tracking-tight">Campus coordinates</h2>
              <ul className="text-muted-foreground mt-10 space-y-10 text-[15px] leading-relaxed">
                <li className="flex gap-4">
                  <MapPin className="text-primary mt-1 size-5 shrink-0" aria-hidden />
                  <address className="not-italic">{school.address}</address>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="text-primary mt-0.5 size-5 shrink-0" aria-hidden />
                  <span>
                    Admissions &amp; main line:{" "}
                    <a
                      href={toPakistanTelUrl(school.phone)}
                      className="text-foreground hover:text-primary font-semibold underline-offset-4 transition-colors hover:underline"
                    >
                      {school.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="text-primary mt-0.5 size-5 shrink-0" aria-hidden />
                  <span>
                    <a
                      href={`mailto:${school.email}`}
                      className="text-foreground hover:text-primary font-semibold underline-offset-4 transition-colors hover:underline"
                    >
                      {school.email}
                    </a>
                  </span>
                </li>
              </ul>
              <Link
                href="/admissions"
                className={cn(buttonVariants({ variant: "outline" }), "border-primary/35 text-primary mt-12 h-11 w-full sm:w-auto rounded-lg")}
              >
                Admissions overview
              </Link>
            </div>
            <p className="text-muted-foreground text-[13px] leading-relaxed lg:max-w-xs">
              Office hours weekdays 08:30–17:30 (PKT); campus security operates 24/7 during term.
            </p>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <ContactForm />

            <div className="border-border overflow-hidden rounded-2xl border shadow-lg ring-1 ring-black/5">
              <iframe
                title={`Map showing ${school.name} near Srinagar Highway, G-12, Islamabad`}
                src={MAP_EMBED_SRC}
                className="aspect-[21/13] min-h-[280px] w-full grayscale-[35%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
