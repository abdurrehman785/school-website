import type { Metadata } from "next";

import { HeroSection } from "@/components/hero-section";
import { school } from "@/lib/site";
import { HomeAboutPreview } from "@/sections/home/about-preview";
import { HomeAcademicsOverview } from "@/sections/home/academics-overview";
import { HomeEnrollCTA } from "@/sections/home/enroll-cta";
import { HomeFacilities } from "@/sections/home/facilities";
import { HomePrincipalPreview } from "@/sections/home/principal-preview";
import { HomeQuickStats } from "@/sections/home/quick-stats";
import { HomeTestimonials } from "@/sections/home/testimonials";
import { NewsSection } from "@/sections/NewsSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to SLS G-12 Campus, Islamabad—Montessori through Matric with mentorship, laboratories, athletics, and a world-class ethos of learning.",
};

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <HeroSection
        title={`${school.name}`}
        subtitle={school.tagline}
        eyebrow={`${school.city}, ${school.country}`}
      />
      <HomeQuickStats />
      <HomeAboutPreview />
      <HomeAcademicsOverview />
      <HomePrincipalPreview />
      <HomeFacilities />
      <NewsSection limit={3} />
      <HomeTestimonials />
      <HomeEnrollCTA />
    </>
  );
}
