"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionWrapper } from "@/components/section-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { campusPhotoAlt, siteImagery } from "@/lib/campus-media";
import { cn } from "@/lib/utils";
import { school } from "@/lib/site";

const img = siteImagery.campusPhoto;

export function HomeAboutPreview() {
  return (
    <SectionWrapper id="about-preview" tinted>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase">
            Campus snapshot
          </p>
          <h2 className="text-foreground mt-6 text-[clamp(2rem,3.5vw,2.85rem)] font-semibold leading-[1.1] tracking-tight">
            A calm, ambitious learning community in the heart of G-12.
          </h2>
          <div className="bg-primary mb-10 mt-8 h-px w-full max-w-[12rem]" />
          <div className="text-muted-foreground space-y-5 text-[17px] leading-relaxed">
            <p>
              SLS G-12 Campus is purpose-built for families who seek rigorous academics without
              sacrificing wellbeing. Montessori through Matric, our programmes connect inquiry,
              mentorship, and character formation on a thoughtfully designed Srinagar Highway site.
            </p>
            <p>
              From science labs that mirror university standards to athletics that teach
              disciplined teamwork, learners grow in an environment calibrated for focus,
              dignity, and joy.
            </p>
            <p>
              Across the umbrella of{" "}
              <Link
                href={school.officialSiteUrl}
                className="text-primary font-semibold underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {school.officialShortBrand}
              </Link>{" "}
              (founded&nbsp;{school.foundedYear}), every campus reinforces the same standard of care.
              Use the portal at{" "}
              <Link
                href={school.officialSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-primary hover:underline"
              >
                sls.edu.pk
              </Link>{" "}
              to explore sibling branches, news hubs, and community programmes.
            </p>
          </div>
          <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }} className="mt-12">
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "group rounded-lg px-8 text-[15px] font-semibold"
              )}
            >
              Learn more
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative lg:col-span-6"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <figure className="border-border shadow-muted overflow-hidden rounded-2xl border bg-card shadow-2xl ring-1 ring-black/5">
            <Image
              src={img}
              alt={campusPhotoAlt}
              width={1400}
              height={933}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="sr-only">
              Collaborative learning spaces at SLS G-12 Campus
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
