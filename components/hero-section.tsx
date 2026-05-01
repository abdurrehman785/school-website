"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { heroCoverAlt, siteImagery } from "@/lib/campus-media";
import { cn } from "@/lib/utils";

const heroBg = siteImagery.heroCover;

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function HeroSection({
  title,
  subtitle,
  eyebrow,
  primaryHref = "/admissions",
  primaryLabel = "Apply Now",
  secondaryHref = "/about",
  secondaryLabel = "Explore Campus",
}: Props) {
  return (
    <section aria-label="Hero" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={heroBg}
        alt={heroCoverAlt}
        priority
        fill
        sizes="100vw"
        className="object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-neutral-950/90" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            {eyebrow ? (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-[11px] font-semibold tracking-[0.32em] text-white/85 uppercase md:text-xs"
              >
                {eyebrow}
              </motion.p>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-[11px] font-semibold tracking-[0.32em] text-white/85 uppercase md:text-xs"
              >
                SLS G-12 Campus · Islamabad
              </motion.p>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 font-semibold tracking-tighter text-[clamp(2.6rem,6vw,4.25rem)] leading-[1.02] text-white"
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              aria-hidden
              className="bg-primary mt-8 h-[3px] w-24 rounded-full md:mt-10"
            />
            {subtitle ? (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-8 max-w-xl text-xl leading-snug font-light text-neutral-100 md:text-2xl"
              >
                {subtitle}
              </motion.p>
            ) : null}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href={primaryHref}
                className={cn(
                  buttonVariants({}),
                  "shadow-primary/35 h-12 rounded-lg px-10 text-[15px]"
                )}
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-white/65 bg-transparent text-[15px] text-white backdrop-blur-sm hover:bg-white/10"
                )}
              >
                {secondaryLabel}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
