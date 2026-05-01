import Link from "next/link";

import { NewsCard } from "@/components/NewsCard";
import { SectionWrapper } from "@/components/section-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { getLatestNews } from "@/lib/sanity";
import { cn } from "@/lib/utils";

type Props = {
  /** Number of articles to fetch (homepage uses 3). */
  limit?: number;
  /** Larger heading spacing on dedicated news page variants. */
  variant?: "home" | "compact";
};

export async function NewsSection({ limit = 3, variant = "home" }: Props) {
  const items = await getLatestNews(Math.min(Math.max(limit, 1), 6));

  return (
    <SectionWrapper tinted id={variant === "home" ? "news" : undefined}>
      <div className="mb-12 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between md:gap-16 lg:mb-14">
        <div>
          <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase">Latest News</p>
          <h2 className="text-foreground mt-5 max-w-xl text-[clamp(1.85rem,3.2vw,2.65rem)] font-semibold leading-[1.12] tracking-tight">
            {variant === "home"
              ? "Announcements families should know—from campus and beyond."
              : "Fresh updates from leadership and teachers."}
          </h2>
        </div>
        <Link
          href="/news"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 rounded-lg px-7 text-sm font-semibold shadow-sm"
          )}
        >
          View all
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="border-border rounded-2xl border border-dashed bg-muted/40 px-8 py-16 text-center">
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            News posts will appear here once your team publishes in{" "}
            <Link href="/studio" className="text-primary hover:underline">
              Sanity Studio
            </Link>
            .
          </p>
        </div>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
