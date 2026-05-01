import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Landmark, Shield, Users } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteBreadcrumbs } from "@/components/site-breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { school } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Campus",
  description:
    "Mission, vision, and the learning culture of SLS G-12 Campus—Sector G-12, Srinagar Highway, Islamabad.",
};

const pillars = [
  {
    title: "Institutional calibre",
    copy: "Curriculum coherence from Montessori onward, audited learning outcomes, and visible leadership expectations.",
    icon: Landmark,
  },
  {
    title: "Relational rigour",
    copy: "High standards land best when paired with mentorship. Advisories, counselling, and family partnerships are non-negotiable.",
    icon: Users,
  },
  {
    title: "Ethical formation",
    copy: "Our scholars practise integrity in assessments, sports, and digital life—habits that outlast any single exam cycle.",
    icon: Shield,
  },
  {
    title: "Design for growth",
    copy: "Modern labs, flexible studios, generous outdoor learning, and purposeful arts integration shape the whole learner.",
    icon: Award,
  },
] as const;

const aboutFigureImage =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80";
const aboutFigureAlt =
  "Illustrative view of modern school facilities—science and collaboration spaces.";

export default function AboutPage() {
  return (
    <div className="pb-28">
      <div className="from-muted/70 border-border bg-gradient-to-b via-background to-background border-b">
        <SectionWrapper innerClassName="pb-14 pt-[4.75rem]" className="!pb-0">
          <SiteBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Campus" },
            ]}
          />
          <PageHeader
            eyebrow="Our identity"
            title="About the G-12 Campus"
            description={`${school.name} occupies a purposeful footprint on Srinagar Highway—welcoming Montessori through Matric families who expect discipline, empathy, and world-class facilitation from their school.`}
          />
        </SectionWrapper>
      </div>

      <SectionWrapper tinted>
        <blockquote className="text-muted-foreground border-primary/55 border-l-4 pl-8 text-[16px] leading-relaxed italic md:text-[17px]">
          {school.officialInstitutionLine}—with more than four decades stewarding Montessori through
          matriculation across Rawalpindi, Islamabad, and communities near Bahria/DHA.{` `}
          <span className="not-italic">
            The organisation’s biography, timeline, and full campus directory live on{" "}
            <a
              href={school.officialSiteUrl}
              className="text-primary font-semibold underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              sls.edu.pk
            </a>
            {" "}
            (<a
              href={school.aboutOfficialUrl}
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              About&nbsp;SLS
            </a>
            ).
          </span>
        </blockquote>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="text-muted-foreground space-y-6 text-[17px] leading-relaxed">
            <p>
              We steward a campus calibrated for seriousness and serenity: acoustically considered
              classrooms, secure circulation patterns, shaded outdoor learning corridors, and
              hospitality spaces where parents meet faculty without friction.
            </p>
            <p>
              The G-12 site is intentional infrastructure—not an afterthought. Science wings sit
              adjacent to fabrication zones; athletics fields connect to hydration and changing
              facilities designed for squad-level preparation; libraries remain open sanctuaries even
              after the final bell because scholarship does not obey the clock alone.
            </p>
          </div>
          <figure className="relative overflow-hidden rounded-2xl border border-black/5 shadow-xl">
            <Image
              src={aboutFigureImage}
              alt={aboutFigureAlt}
              width={1400}
              height={900}
              className="aspect-video w-full object-cover"
            />
          </figure>
        </div>
      </SectionWrapper>

      <SectionWrapper tinted>
        <h2 className="text-foreground mb-14 text-[clamp(1.75rem,3vw,2.35rem)] font-semibold tracking-tight lg:mx-auto lg:max-w-3xl lg:text-center">
          Four commitments that organise every timetable, hallway conversation, and family touchpoint.
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="border-border hover:border-primary/30 rounded-2xl border bg-card p-8 shadow-xs transition-colors md:p-10"
              >
                <Icon className="text-primary mb-6 size-8" aria-hidden />
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="text-muted-foreground mt-5 text-[15px] leading-relaxed">{p.copy}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="rounded-3xl bg-gradient-to-br from-muted/70 to-muted/30 p-px">
          <div className="bg-card rounded-[calc(var(--radius-2xl)+1px)] px-10 py-16 text-center shadow-inner md:px-16 lg:py-20">
            <p className="text-primary font-semibold tracking-[0.2em] uppercase">Next step</p>
            <h2 className="text-foreground mt-6 text-3xl font-semibold tracking-tight md:text-[2rem]">
              Walk the campus—in person or virtually—with our admissions fellows.
            </h2>
            <div className="mt-14 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
              <Link href="/contact" className={cn(buttonVariants({}), "h-12 rounded-lg px-10")}>
                Book a guided tour
              </Link>
              <Link href="/admissions" className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-lg px-10")}>
                Review admissions timelines
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
