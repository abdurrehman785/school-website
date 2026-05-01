"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { quickStats } from "@/lib/site";

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42 },
  },
};

export function HomeQuickStats() {
  return (
    <motion.div
      className="-mt-24 relative z-20 pb-16 md:-mt-32 md:pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
    >
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-4 md:px-8 lg:gap-6 lg:px-12">
        {quickStats.map((s, i) => (
          <motion.div key={s.label} variants={item} custom={i}>
            <Card className="hover:border-primary/20 border-border/80 hover:shadow-muted h-full rounded-2xl border bg-card px-6 py-8 shadow-xl transition-colors duration-300">
              <div className="text-primary mb-6 text-[0.65rem] font-bold tracking-[0.22em] uppercase">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl md:leading-snug">
                {s.value}
              </p>
              <p className="text-muted-foreground mt-3 text-[13px] font-medium">{s.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
