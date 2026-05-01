import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-28 text-center">
      <p className="text-primary text-[11px] font-bold tracking-[0.28em] uppercase">404</p>
      <h1 className="text-foreground mt-8 max-w-md text-[clamp(1.85rem,3.5vw,2.65rem)] font-semibold leading-tight tracking-tight">
        This page moved—or never existed.
      </h1>
      <p className="text-muted-foreground mt-6 max-w-md text-[15px] leading-relaxed">
        Return home for pathways across admissions, academics, and campus life at SLS G-12.
      </p>
      <Link href="/" className={cn(buttonVariants({}), "mt-12 h-12 rounded-lg px-10")}>
        Back to homepage
      </Link>
    </div>
  );
}
