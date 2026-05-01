import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarRange } from "lucide-react";
import type { PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";

import { SectionWrapper } from "@/components/section-wrapper";
import { SiteBreadcrumbs } from "@/components/site-breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { formatNewsDate, getNewsById, getNewsIds, urlForSanityImage } from "@/lib/sanity";
import { cn } from "@/lib/utils";

export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  const ids = await getNewsIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await getNewsById(id);
  if (!article)
    return { title: "News" };

  const description = `${article.title} — SLS G-12 Campus`;

  return {
    title: article.title,
    description,
    openGraph: { title: article.title, description },
  };
}

const portableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-muted-foreground mb-6 text-[17px] leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-muted-foreground mb-6 list-disc space-y-2 pl-6 text-[17px] leading-relaxed">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="text-muted-foreground mb-6 list-decimal space-y-2 pl-6 text-[17px] leading-relaxed">{children}</ol>
    ),
  },
};

export default async function NewsArticlePage({ params }: Props) {
  const { id } = await params;
  const article = await getNewsById(id);
  if (!article) notFound();

  const heroUrl = urlForSanityImage(article.image ?? null) ?? "/coverphoto.jpg";

  return (
    <div className="pb-28">
      <SectionWrapper tinted className="border-border border-b" innerClassName="pb-14 pt-[4.75rem]">
        <SiteBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "News & Events", href: "/news" },
            { label: article.title },
          ]}
        />
        <span className="text-primary bg-primary/10 mb-8 inline-flex rounded-md px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase">
          Announcement
        </span>
        <h1 className="text-foreground max-w-4xl text-[clamp(2rem,4.2vw,3.35rem)] font-semibold tracking-tight">
          {article.title}
        </h1>
        <span className="text-muted-foreground mt-10 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide uppercase">
          <CalendarRange className="size-4 shrink-0" aria-hidden />
          {formatNewsDate(article.date) || "Date TBC"}
        </span>
      </SectionWrapper>

      <SectionWrapper innerClassName="pt-14 md:pt-20">
        <figure className="border-border mx-auto mb-16 max-w-5xl overflow-hidden rounded-[1.5rem] border shadow-xl lg:mb-22">
          <Image
            src={heroUrl}
            alt={article.title}
            width={1400}
            height={787}
            className="aspect-video w-full object-cover"
            priority
          />
        </figure>

        <div className="text-foreground mx-auto max-w-3xl">
          <PortableText value={article.content ?? []} components={portableComponents} />
        </div>

        <div className="mt-20 flex flex-wrap justify-between gap-6 border-border border-t pt-12">
          <Link href="/news" className={cn(buttonVariants({ variant: "outline" }), "h-11 px-8 text-sm")}>
            ← All updates
          </Link>
          <Link href="/contact" className={cn(buttonVariants({}), "h-11 px-8 text-sm")}>
            Contact the campus
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
