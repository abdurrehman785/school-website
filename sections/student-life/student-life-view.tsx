"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Music2, Palette, Rocket, Tent } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteBreadcrumbs } from "@/components/site-breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const activities = [
  {
    title: "Sports & physical culture",
    copy: "Inter-house athletics, disciplined coaching, hydration science, and sportsmanship rituals that transcend scoreboards.",
    icon: Tent,
    href: "/contact",
    cta: "View facilities request",
  },
  {
    title: "Arts & expressive disciplines",
    copy: "Choir, percussion, visual storytelling, and public exhibition cycles so confidence lives on stage—not only on paper.",
    icon: Palette,
    href: "/news",
    cta: "Catch recent showcases",
  },
  {
    title: "Innovation labs & clubs",
    copy: "Robotics, environmental action, entrepreneurship studio, debate—clubs carry the same facilitation standards as core classes.",
    icon: Rocket,
    href: "/academics",
    cta: "See academics integration",
  },
  {
    title: "Assemblies & traditions",
    copy: "Ceremonies that mark growth with gravity and joy—mentor recognitions, service milestones, and alumni homecomings.",
    icon: Music2,
    href: "/about",
    cta: "Explore campus culture",
  },
] as const;

const genericCampusGalleryAlt =
  "Illustrative stock photo of learners, athletics, arts, or school life.";

const gallery = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
] as const;

export function StudentLifeView() {
  return (
    <div className="pb-28">
      <SectionWrapper tinted className="border-border border-b" innerClassName="pb-12 pt-[4.75rem]">
        <SiteBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Student Life" },
          ]}
        />
        <PageHeader
          eyebrow="Beyond the timetable"
          title="Student life that sharpens judgement and camaraderie"
          description="We engineer balance: competitive edge without toxicity, creativity without chaos, and belonging without conformity."
        />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 md:grid-cols-2">
          {activities.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="border-border flex flex-col rounded-3xl border bg-card p-9 shadow-xs md:p-11"
              >
                <Icon className="text-primary mb-9 size-9" aria-hidden />
                <h2 className="text-2xl font-semibold tracking-tight">{a.title}</h2>
                <p className="text-muted-foreground mt-6 flex-[1] text-[16px] leading-relaxed">{a.copy}</p>
                <Link
                  href={a.href}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-primary/35 text-primary mt-10 inline-flex max-w-fit rounded-lg px-6 text-[13px]"
                  )}
                >
                  {a.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper tinted id="gallery">
        <header className="mb-14 md:text-center">
          <p className="text-primary font-semibold tracking-[0.2em] uppercase">Gallery windows</p>
          <h2 className="text-foreground mt-6 text-[clamp(2rem,3.5vw,2.75rem)] font-semibold tracking-tight">
            Fields, studios, and moments that do not fit neatly in a prospectus.
          </h2>
        </header>
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {gallery.map((src, idx) => (
            <motion.div
              key={`student-life-gallery-${idx}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-black/5 shadow-lg"
            >
              <Image
                src={src}
                alt={genericCampusGalleryAlt}
                sizes="(max-width:768px) 100vw, 33vw"
                width={900}
                height={idx % 2 === 0 ? 680 : 520}
                className="w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
