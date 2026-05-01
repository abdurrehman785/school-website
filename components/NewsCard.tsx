import Image from "next/image";
import Link from "next/link";
import { CalendarRange } from "lucide-react";

import {
  formatNewsDate,
  truncatePreview,
  urlForSanityImage,
  type NewsListItem,
} from "@/lib/sanity";
import { cn } from "@/lib/utils";

const PLACEHOLDER = "/campusphoto.jpg";

type Props = {
  item: NewsListItem;
  className?: string;
};

export function NewsCard({ item, className }: Props) {
  const href = `/news/${item._id}`;
  const imageUrl = urlForSanityImage(item.image ?? null);
  const dateLabel = formatNewsDate(item.date);
  const preview = truncatePreview(item.preview);

  return (
    <article
      className={cn(
        "group border-border hover:border-primary/35 flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <Link href={href} className="flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={imageUrl ?? PLACEHOLDER}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex flex-1 flex-col p-8">
          <span className="text-primary bg-primary/10 w-fit rounded-md px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase">
            Announcement
          </span>
          <h3 className="text-foreground group-hover:text-primary mt-5 text-xl font-semibold leading-snug tracking-tight transition-colors">
            {item.title}
          </h3>
          {preview ? (
            <p className="text-muted-foreground mt-4 flex-[1] text-[15px] leading-relaxed">{preview}</p>
          ) : null}
          <span className="text-muted-foreground mt-8 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
            <CalendarRange className="size-4 shrink-0" aria-hidden />
            {dateLabel || "Date TBC"}
          </span>
        </div>
      </Link>
    </article>
  );
}
