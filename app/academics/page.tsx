import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { academicDetails } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteBreadcrumbs } from "@/components/site-breadcrumbs";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Montessori, Primary, Middle, and Matric pathways at SLS G-12 Campus—subjects, teaching approach, and vertical coherence.",
};

export default function AcademicsPage() {
  return (
    <div className="pb-28">
      <SectionWrapper tinted className="border-border border-b" innerClassName="pb-12 pt-[4.75rem]">
        <SiteBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Academics" },
          ]}
        />
        <PageHeader
          eyebrow="Academic architecture"
          title="Designed verticality from Montessori through Matric"
          description="Each stage intentionally compounds the prior—skills, habits, dispositions—so readiness is ecological, never accidental."
        />
      </SectionWrapper>

      {academicDetails.map((a, i) => (
        <SectionWrapper key={a.slug} id={a.slug} tinted={i % 2 === 1}>
          <div className={`grid gap-14 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
            <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase">
                {a.title}
              </p>
              <h2 className="text-foreground mt-5 text-[clamp(1.85rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-tight">
                {a.lead}
              </h2>
              <div className="bg-primary my-10 h-[2px] w-28" aria-hidden />
              <p className="text-muted-foreground text-[17px] leading-relaxed">{a.description}</p>
              <h3 className="text-foreground mt-14 text-sm font-bold tracking-[0.18em] uppercase">
                Core subjects & domains
              </h3>
              <ul className="text-muted-foreground mt-5 grid gap-3 text-[15px] sm:grid-cols-2">
                {a.subjects.map((s) => (
                  <li key={s} className="border-border rounded-lg border bg-card px-4 py-3 font-medium">
                    {s}
                  </li>
                ))}
              </ul>
              <h3 className="text-foreground mt-14 text-sm font-bold tracking-[0.18em] uppercase">
                Teaching & learning methodology
              </h3>
              <ul className="text-muted-foreground mt-5 list-none space-y-5 text-[16px] leading-relaxed">
                {a.approach.map((pt) => (
                  <li key={pt} className="border-border mt-px border-l-[3px] border-l-primary py-2 pl-6">
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                href="/admissions"
                className="text-primary hover:text-primary/85 mt-14 inline-flex text-[15px] font-semibold underline-offset-8 transition-colors hover:underline"
              >
                Discuss placement with admissions →
              </Link>
            </div>
            <div className={`${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              <div className="border-border sticky top-36 overflow-hidden rounded-2xl border shadow-xl lg:top-40">
                <Image
                  src={a.image}
                  alt=""
                  width={1100}
                  height={733}
                  className="aspect-[3/4] w-full object-cover lg:aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      ))}
    </div>
  );
}
