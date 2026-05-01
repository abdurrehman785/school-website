"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

import { SectionWrapper } from "@/components/section-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { principalPortraitAlt } from "@/lib/campus-media";
import { principal, school } from "@/lib/site";

export function HomePrincipalPreview() {
  return (
    <SectionWrapper tinted id="principal">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-border bg-secondary/40 relative mx-auto max-w-[22rem] overflow-hidden rounded-[1.65rem] border p-2 shadow-xl ring-1 ring-black/5">
            <Image
              src={principal.photo}
              alt={principalPortraitAlt}
              width={704}
              height={704}
              className="aspect-square w-full rounded-[1.25rem] object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-xl bg-black/55 px-4 py-3 text-center text-[11px] font-semibold tracking-wide text-white uppercase backdrop-blur-md">
              {principal.name} · {principal.title}
            </div>
          </div>
          <p className="text-muted-foreground mt-6 text-center text-[11px] leading-relaxed">
            Official campus portrait ·{" "}
            <a
              href={principal.linkedInHref}
              className="text-primary font-semibold underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {principal.name} on LinkedIn
            </a>
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Quote className="text-primary mb-10 size-10 opacity-85" aria-hidden />
          <h2 className="text-foreground text-[clamp(2rem,3.2vw,2.65rem)] font-semibold leading-[1.1] tracking-tight">
            Principled minds. Principled futures.
          </h2>
          <div className="bg-primary mb-10 mt-8 h-[2px] w-28" aria-hidden />
          <blockquote className="text-muted-foreground text-[17px] leading-[1.75] italic">
            “At G-12, we refuse the false trade-off between joyful childhood and uncompromising
            standards. Our faculty partners with families to forge learners who question with
            rigour and lead with humility—Islamabad deserves nothing less.”
          </blockquote>
          <p className="text-foreground mt-8 text-[15px] font-semibold not-italic">
            {principal.name}, {principal.title} · {school.name}
          </p>
          <motion.div whileHover={{ x: 2 }} className="mt-14">
            <Link
              href="/principal-message"
              className={cn(buttonVariants({}), "h-12 rounded-lg px-10 text-[15px]")}
            >
              Read full message
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
