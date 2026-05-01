import type { Metadata } from "next";
import Image from "next/image";

import { facultyMembers } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteBreadcrumbs } from "@/components/site-breadcrumbs";

export const metadata: Metadata = {
  title: "Faculty & Staff",
  description:
    "Meet the mentors of SLS G-12 Campus—department leaders and specialists stewarding Montessori through Matric learners.",
};

export default function FacultyPage() {
  return (
    <div className="pb-28">
      <SectionWrapper tinted className="border-border border-b" innerClassName="pb-12 pt-[4.75rem]">
        <SiteBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Faculty & Staff" },
          ]}
        />
        <PageHeader
          eyebrow="Mentors & specialists"
          title="Faculty who teach—and model—scholarly integrity"
          description="Across disciplines, adults on this campus commit to visible craft: lesson study, feedback loops with families, and ethical classroom leadership."
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {facultyMembers.map((f) => (
            <figure
              key={f.id}
              className="border-border hover:border-primary/30 group overflow-hidden rounded-2xl border bg-card shadow-sm transition-colors"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={f.photo}
                  alt={`${f.name}, ${f.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="space-y-2 p-7">
                <p className="text-foreground text-lg font-semibold tracking-tight">{f.name}</p>
                <p className="text-primary text-xs font-semibold tracking-wide uppercase">
                  {f.role}
                </p>
                <p className="text-muted-foreground text-[13px] font-medium">{f.subject}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
