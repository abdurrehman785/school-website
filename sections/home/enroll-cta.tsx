"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeEnrollCTA() {
  return (
    <section aria-label="Enroll today" className="border-border bg-primary text-primary-foreground border-y">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-12 md:px-8 md:py-28 lg:px-12">
        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-[11px] font-bold tracking-[0.28em] text-white/80 uppercase">
            Join the G-12 journey
          </p>
          <h2 className="mt-6 text-[clamp(2.1rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-tight">
            Enroll your child today.
          </h2>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-neutral-50">
            Guided tours, readiness conversations, and transparent admissions—we partner with families
            at every milestone from Montessori onward.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-3 md:col-span-4 md:flex-col md:items-stretch lg:gap-4"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <Link
            href="/admissions"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "h-12 justify-center rounded-lg px-8 text-[15px] font-semibold"
            )}
          >
            Start an application
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-white/60 bg-transparent text-[15px] text-white hover:bg-white/10"
            )}
          >
            Schedule a visit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
