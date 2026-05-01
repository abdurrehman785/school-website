"use client";

import { motion } from "framer-motion";

import { SectionWrapper } from "@/components/section-wrapper";
import { testimonials as quotes } from "@/lib/site";

export function HomeTestimonials() {
  return (
    <SectionWrapper>
      <div className="mb-16 md:text-center lg:mx-auto lg:max-w-3xl">
        <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase">
          Voices from our community
        </p>
        <h2 className="text-foreground mt-6 text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-tight">
          Families and alumni share what sets this campus apart.
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
        {quotes.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ y: -3 }}
            className="border-border hover:border-primary/25 flex h-full flex-col rounded-2xl border bg-muted/20 p-8 shadow-sm transition-colors md:p-10"
          >
            <blockquote className="text-foreground text-[16px] leading-relaxed font-medium">
              “{t.quote}”
            </blockquote>
            <figcaption className="text-muted-foreground mt-10 text-sm">
              <span className="text-foreground font-semibold">{t.name}</span>
              <br />
              <span>{t.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </SectionWrapper>
  );
}
