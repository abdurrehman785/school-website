"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { SectionWrapper } from "@/components/section-wrapper";
import { academicsLevels } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HomeAcademicsOverview() {
  return (
    <SectionWrapper id="academics">
      <div className="mb-16 md:mb-24">
        <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase">
          Academics by design
        </p>
        <h2 className="text-foreground mt-5 max-w-2xl text-[clamp(2rem,3.5vw,2.85rem)] font-semibold leading-[1.1] tracking-tight">
          Pathways engineered for Montessori through Matric mastery.
        </h2>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
          Explore how each developmental stage unfolds—with clarity, cohesion, and care.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
        {academicsLevels.map((lvl, idx) => (
          <motion.div
            key={lvl.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
          >
            <Link
              href={`/academics#${lvl.slug}`}
              className={cn(
                "border-border hover:border-primary/40 group hover:shadow-muted block h-full overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300"
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={lvl.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 text-xl font-semibold tracking-tight text-white">
                  {lvl.title}
                </p>
              </div>
              <div className="p-8 pb-10">
                <p className="text-muted-foreground text-[15px] leading-relaxed">{lvl.summary}</p>
                <span className="text-primary mt-6 inline-flex items-center gap-2 text-[13px] font-semibold">
                  View pathway
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.div whileHover={{ y: -2 }} className="mx-auto mt-16 max-w-fit">
        <Link
          href="/academics"
          className="text-primary hover:text-primary/85 text-sm font-semibold underline-offset-8 transition-colors hover:underline"
        >
          Explore the full academics framework
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
