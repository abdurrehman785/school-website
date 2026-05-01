import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, FileText, Users } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteBreadcrumbs } from "@/components/site-breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { school } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply to SLS G-12 Campus—Montessori through Matric. Timelines, readiness conversations, and partnership with families in Islamabad.",
};

const steps = [
  {
    title: "Enquiry & campus connection",
    copy: "Submit an online enquiry or visit us on Service Road, G-12. We share programme fit, fee philosophy, and authentic campus rhythm.",
    icon: Users,
  },
  {
    title: "Readiness conversation",
    copy: "Learners and parents meet faculty teams. We discuss prior learning, habits, goals, and how we steward transitions between levels.",
    icon: FileText,
  },
  {
    title: "Placement & orientation",
    copy: "Offers include clear documentation, uniform guidance, digital onboarding, and orientation designed to reduce first-week anxiety.",
    icon: CheckCircle2,
  },
] as const;

export default function AdmissionsPage() {
  return (
    <div className="pb-28">
      <SectionWrapper tinted className="border-border border-b" innerClassName="pb-12 pt-[4.75rem]">
        <SiteBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Admissions" },
          ]}
        />
        <PageHeader
          eyebrow="Join SLS G-12"
          title="Admissions built on clarity, not pressure"
          description={`Families across Islamabad choose ${school.name} when they want uncompromising academics situated within a humane culture. We listen first—then design a placement arc that honours your child.`}
        />
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className={cn(buttonVariants({}), "h-12 rounded-lg px-10")}>
            Begin an enquiry
          </Link>
          <Link href="/academics" className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-lg px-10")}>
            Review academic pathways
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-3">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="border-border rounded-2xl border bg-card p-8 shadow-sm md:p-10"
              >
                <Icon className="text-primary mb-7 size-8" aria-hidden />
                <h2 className="text-lg font-semibold tracking-tight">{s.title}</h2>
                <p className="text-muted-foreground mt-5 text-[15px] leading-relaxed">{s.copy}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper tinted>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Clock className="text-primary mb-8 size-8" aria-hidden />
            <h2 className="text-foreground text-3xl font-semibold tracking-tight">
              Typical enrollment windows—flexibility for relocating families.
            </h2>
            <div className="border-primary mt-10 border-l-[3px] pl-10">
              <ul className="text-muted-foreground space-y-6 text-[17px] leading-relaxed">
                <li>
                  <span className="text-foreground font-semibold">Primary intake:</span> rolling
                  reviews January–April with Montessori through Primary orientations clustered in August.
                </li>
                <li>
                  <span className="text-foreground font-semibold">Middle admissions:</span> February
                  &amp; October cohort planning with diagnostic conversations—not high-stakes
                  screenings that unsettle adolescents.
                </li>
                <li>
                  <span className="text-foreground font-semibold">Matric alignment:</span> placement
                  includes board-readiness pacing with transparent mock cycles and mentorship blocks.
                </li>
              </ul>
            </div>
          </div>
          <aside className="border-border rounded-3xl border bg-card p-10 shadow-lg md:p-12">
            <h3 className="text-xl font-semibold tracking-tight">What to prepare</h3>
            <ul className="text-muted-foreground mt-8 space-y-5 text-[15px] leading-relaxed">
              <li>Government-issued guardian identification and learner birth record</li>
              <li>
                Recent academic transcripts or prior school reports—even when transferring mid-year
              </li>
              <li>Immunisation and health disclosures as required</li>
              <li>An open conversation about extracurricular ambitions—we design around the whole learner</li>
            </ul>
          </aside>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center">
          <p className="text-primary font-semibold tracking-[0.2em] uppercase">Still deciding?</p>
          <p className="text-foreground mx-auto mt-6 max-w-2xl text-2xl font-semibold leading-snug tracking-tight md:text-[1.95rem]">
            Email admissions or dial {school.phone}—we answer candid questions about ethos, pacing, and pastoral care within one working day whenever possible.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
