import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

type Props = { items: Crumb[]; className?: string };

export function SiteBreadcrumbs({ items, className }: Props) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn("border-border mb-12 border-y py-6", className)}
    >
      <ol className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-2 text-xs md:text-sm">
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-2">
            {i > 0 ? (
              <ChevronRight
                aria-hidden
                className="text-border size-[0.9rem] shrink-0 opacity-70"
              />
            ) : null}
            {c.href ? (
              <Link
                href={c.href}
                className="hover:text-foreground font-medium underline-offset-4 transition-colors hover:underline"
              >
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground font-semibold">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
