import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarRange } from "lucide-react";

import { NewsCard } from "@/components/NewsCard";
import { PageHeader } from "@/components/page-header";
import { SectionWrapper } from "@/components/section-wrapper";
import { SiteBreadcrumbs } from "@/components/site-breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { formatNewsDate, getNewsForListing, truncatePreview, urlForSanityImage } from "@/lib/sanity";
import { cn } from "@/lib/utils";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Latest announcements and stories from SLS G-12 Campus—managed in Sanity Studio for quick updates.",
};

const PLACEHOLDER = "/campusphoto.jpg";

export default async function NewsPage() {
  const all = await getNewsForListing();
  const featured = all[0];
  const grid = all.slice(1);

  return (
    <div className="pb-28">
      <SectionWrapper tinted className="border-border border-b" innerClassName="pb-12 pt-[4.75rem]">
        <SiteBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "News & Events" },
          ]}
        />
        <PageHeader
          eyebrow="Campus bulletin"
          title="News & events"
          description="Straightforward announcements for families—posted by staff from Sanity Studio."
        />
      </SectionWrapper>

      {all.length === 0 ? (
        <SectionWrapper>
          <div className="border-border rounded-3xl border border-dashed bg-muted/40 px-10 py-20 text-center">
            <p className="text-muted-foreground mx-auto max-w-lg text-[16px] leading-relaxed">
              No posts yet. When your team publishes in{" "}
              <Link href="/studio" className="text-primary font-semibold hover:underline">
                Sanity Studio
              </Link>
              , announcements will appear automatically on this page and the homepage.
            </p>
          </div>
        </SectionWrapper>
      ) : (
        <>
          <SectionWrapper>
            {featured ? (
              <Link
                href={`/news/${featured._id}`}
                className="border-border hover:border-primary/35 group shadow-muted hover:shadow-muted/80 mb-14 block overflow-hidden rounded-[1.75rem] border bg-card shadow-lg transition-colors md:mb-24"
              >
                <div className="grid lg:grid-cols-12">
                  <div className="relative aspect-video lg:col-span-7 lg:aspect-auto lg:min-h-[22rem]">
                    <Image
                      src={urlForSanityImage(featured.image ?? null) ?? PLACEHOLDER}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-center p-10 lg:col-span-5 lg:p-14 xl:p-16">
                    <span className="text-primary bg-primary/10 w-fit rounded-md px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase">
                      Featured announcement
                    </span>
                    <h2 className="text-foreground group-hover:text-primary mt-8 text-[clamp(1.65rem,2.6vw,2.15rem)] font-semibold leading-snug tracking-tight transition-colors">
                      {featured.title}
                    </h2>
                    {featured.preview ? (
                      <p className="text-muted-foreground mt-6 text-[16px] leading-relaxed">
                        {truncatePreview(featured.preview, 280)}
                      </p>
                    ) : null}
                    <span className="text-muted-foreground mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase">
                      <CalendarRange className="size-4 shrink-0" aria-hidden />
                      {formatNewsDate(featured.date) || "Date TBC"}
                    </span>
                  </div>
                </div>
              </Link>
            ) : null}

            <div className="grid gap-11 md:grid-cols-2 lg:gap-10">
              {grid.map((item) => (
                <NewsCard key={item._id} item={item} />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper tinted>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                Need corrections? Editors can reopen any post inside Studio.
              </p>
              <Link href="/studio" className={cn(buttonVariants({ variant: "outline" }), "rounded-lg px-6")}>
                Open Studio
              </Link>
            </div>
          </SectionWrapper>
        </>
      )}
    </div>
  );
}
