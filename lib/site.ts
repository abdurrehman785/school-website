import { siteBrand } from "@/lib/campus-media";

export const principal = {
  name: "Adeela Rehman",
  title: "Principal" as const,
  photo: siteBrand.principalPortrait,
  linkedInHref: "https://www.linkedin.com/in/adeela-rehman-934aa880/",
} as const;

/**
 * Banner site: Islamabad Sector G‑12 dedicated campus.
 * Mother brand & network: {@link https://sls.edu.pk/}.
 * Institution history: {@link https://sls.edu.pk/about-sls/}.
 */
export const school = {
  logoSrc: siteBrand.logo,
  name: "SLS G-12 Campus",
  /** Matches official site naming. */
  officialInstitutionLine:
    "Sadeeqa’s Learning System (SLS) Montessori | School | College of Sciences & Arts",
  officialShortBrand: "SLS Montessori & High School",
  tagline: "Excellence in Education",
  city: "Islamabad",
  country: "Pakistan",
  address:
    "Service Road, Sector G-12, Srinagar Highway, Islamabad, Pakistan",
  phone: "(051) 8469871",
  email: "islamabadnewbranch@gmail.com",
  officialSiteUrl: "https://sls.edu.pk/",
  aboutOfficialUrl: "https://sls.edu.pk/about-sls/",
  foundedYear: 1982,
  networkSummary:
    "Founded in 1982, SLS has grown across Rawalpindi, Islamabad, and DHA/Bahria‑adjacent communities. This portal covers the Srinagar Highway G‑12 campus—the wider family of campuses appears on the organisation’s homepage.",
  social: {
    /** Official G-12 branch page. */
    facebook: "https://www.facebook.com/branchheadg12campus/",
    linkedin: "https://pk.linkedin.com/company/slsmontessori",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Campus" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/principal-message", label: "Principal’s Message" },
  { href: "/faculty", label: "Faculty & Staff" },
  { href: "/student-life", label: "Student Life" },
  { href: "/news", label: "News & Events" },
  { href: "/contact", label: "Contact" },
] as const;

export const quickStats = [
  { label: "Grades Offered", value: "Montessori → Matric" },
  { label: "Students", value: "1,200+" },
  { label: "Faculty Members", value: "85+" },
  { label: "Learning Spaces", value: "35+" },
] as const;

export const academicsLevels = [
  {
    slug: "montessori",
    title: "Montessori",
    summary:
      "Guided exploration, purposeful play, and early literacy grounded in Montessori principles.",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=960&q=80",
  },
  {
    slug: "primary",
    title: "Primary",
    summary:
      "Structured foundations across core disciplines with enquiry-led projects.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=960&q=80",
  },
  {
    slug: "middle",
    title: "Middle",
    summary:
      "Skill-building pathways that deepen analytical reasoning and independence.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=960&q=80",
  },
  {
    slug: "matric",
    title: "Matric",
    summary:
      "Board-aligned preparation paired with mentorship and leadership growth.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=960&q=80",
  },
] as const;

export const facilities = [
  {
    title: "Science Laboratories",
    description:
      "Purpose-built labs for physics, chemistry, and biology with modern safety protocols.",
    icon: "flask" as const,
  },
  {
    title: "Computer Labs",
    description:
      "High-speed connectivity, collaborative stations, and digital citizenship curriculum.",
    icon: "monitor" as const,
  },
  {
    title: "Library & Research Hub",
    description:
      "Quiet study zones, curated collections, and librarian-led research coaching.",
    icon: "bookOpen" as const,
  },
  {
    title: "Sports & Athletics",
    description:
      "Outdoor courts, indoor gymnasium, and inter-school athletics programming.",
    icon: "trophy" as const,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Our daughter found her voice—and her confidence—in classrooms that genuinely listen. The pastoral care matches the academic rigour.",
    name: "Ayesha Malik",
    role: "Parent, Grade 6",
  },
  {
    quote:
      "Teachers push you to lead, not follow. Debate, robotics, and community service shaped how I see responsibility.",
    name: "Hassan Raza",
    role: "Alumnus",
  },
  {
    quote:
      "The campus blends structure with curiosity. Montessori through Matric feels like one intentional journey—not disconnected stops.",
    name: "Farah Siddiqui",
    role: "Parent, Montessori & Grade 10",
  },
] as const;
