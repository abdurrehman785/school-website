import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteBreadcrumbs } from "@/components/site-breadcrumbs";
import { principalPortraitAlt } from "@/lib/campus-media";
import { principal, school } from "@/lib/site";

export const metadata: Metadata = {
  title: "Principal’s Message",
  description:
    "A vision for principled learners—Principal Adeela Rehman reflects on mentorship, humility, and the promise of G-12 education.",
};

export default function PrincipalMessagePage() {
  return (
    <div className="pb-28">
      <SectionWrapper tinted className="border-border border-b" innerClassName="pb-12 pt-[4.75rem]">
        <SiteBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Principal’s Message" },
          ]}
        />
        <PageHeader
          eyebrow="Letter from the principal"
          title="A future written in courage, kindness, and clarity"
          description={`An invitation to families who believe education should refine character as rigorously as it refines intellect—${principal.name}, ${principal.title}.`}
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="border-border bg-muted/30 sticky top-40 overflow-hidden rounded-[1.75rem] border p-2 shadow-xl">
              <Image
                src={principal.photo}
                alt={principalPortraitAlt}
                width={900}
                height={900}
                priority
                className="aspect-square w-full rounded-[1.35rem] object-cover"
              />
              <p className="text-muted-foreground px-4 py-5 text-center text-xs font-semibold tracking-wide uppercase">
                {principal.name} · {principal.title}
              </p>
              <p className="text-muted-foreground px-4 pb-4 text-center text-[11px] leading-relaxed">
                Official campus-supplied portrait. Biography updates also appear on{" "}
                <Link
                  href={principal.linkedInHref}
                  className="text-primary font-semibold underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
                .
              </p>
            </div>
          </div>
          <article className="text-muted-foreground lg:col-span-8 lg:pt-2">
            <div className="space-y-8 text-[17px] leading-[1.85]">
              <p className="text-foreground text-xl font-medium leading-snug md:text-2xl">
                Dear families, faculty partners, and friends of {school.name},
              </p>
              <p>
                We stand at a threshold in national education where speed often masquerades as
                progress—where packed timetables are mistaken for seriousness. At {school.name}, we
                choose a different thesis: that world-class learning is unhurried in spirit yet
                uncompromising in standards; that young people deserve adults who model intellectual
                humility alongside intellectual courage.
              </p>
              <p>
                This campus on Srinagar Highway exists to prove that thesis daily. Our Montessori
                studios honour concentration; our primary corridors pulse with structured joy; our
                middle school seminars train adolescents to argue with evidence rather than volume;
                our Matric cohorts encounter board preparation as formation—not fear. None of this
                happens by accident. It is architecture: curricular, spatial, relational.
              </p>
              <p>
                We ask learners to lead service initiatives, to mentor younger students, to repair
                harm when trust fractures, and to practice digital citizenship with the same care
                they bring to a lab notebook. We ask faculty to remain students of their craft—
                observing one another’s classrooms, interrogating data with compassion, and partnering
                with parents without condescension.
              </p>
              <p>
                If you walk our science wings, you will see hypothesis-driven work that mirrors how
                discovery actually unfolds. If you step into our library at dusk, you will find
                seniors coaching juniors through research protocols. If you attend a single assembly,
                you will hear young voices speak with moral vocabulary refined through practice, not
                slogans.
              </p>
              <p>
                Our promise is not perfection; it is presence. We will see your child—the anxious
                thinker, the quiet leader, the restless innovator—and we will design supports that
                preserve dignity while expanding capacity. We will celebrate growth that shows up on
                transcripts and growth that shows up only in character.
              </p>
              <p>
                Thank you for considering {school.name} as more than a school—as a covenant between
                home and campus to raise citizens who will steward Islamabad and our wider world with
                skill and grace.
              </p>
            </div>

            <div className="border-border mt-16 border-t pt-14">
              <p className="text-foreground text-lg font-semibold italic">In partnership,</p>
              <p className="text-foreground mt-8 font-serif text-4xl tracking-tight md:text-5xl">
                {principal.name}
              </p>
              <p className="text-muted-foreground mt-3 text-sm font-semibold tracking-wide uppercase">
                {principal.title} · {school.name}
              </p>
              <p className="text-muted-foreground mt-2 text-sm">{school.address}</p>
            </div>
          </article>
        </div>
      </SectionWrapper>
    </div>
  );
}
