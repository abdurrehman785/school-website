"use client";

import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Monitor, Trophy } from "lucide-react";

import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { facilities as facilityList } from "@/lib/site";

const iconMap = {
  flask: FlaskConical,
  monitor: Monitor,
  bookOpen: BookOpen,
  trophy: Trophy,
};

export function HomeFacilities() {
  return (
    <SectionWrapper id="facilities">
      <header className="mb-14 md:mb-20 lg:mx-auto lg:max-w-2xl lg:text-center">
        <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase lg:mx-auto">
          Facilities built for seriousness and delight
        </p>
        <h2 className="text-foreground mt-6 text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-tight">
          Laboratories, libraries, and playing fields—all on one purposeful campus.
        </h2>
      </header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {facilityList.map((f, idx) => {
          const Icon = iconMap[f.icon];
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <Card className="border-border/80 hover:border-primary/35 h-full rounded-2xl border bg-muted/25 py-10 transition-colors">
                <CardHeader className="px-8 pb-2">
                  <div className="bg-primary text-primary-foreground mb-8 inline-flex size-12 items-center justify-center rounded-xl">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-tight">{f.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-[15px] leading-relaxed">
                    {f.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
