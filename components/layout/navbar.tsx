"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { schoolLogoAlt } from "@/lib/campus-media";
import { cn } from "@/lib/utils";
import { nav, school } from "@/lib/site";

function matchesQuery(href: string, label: string, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return false;
  return (
    label.toLowerCase().includes(q) ||
    href.toLowerCase().includes(q.replace(/^\//, ""))
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    if (!searchOpen) return;
    const t = window.setTimeout(() => {
      document.getElementById("nav-site-search")?.focus();
    }, 50);
    return () => window.clearTimeout(t);
  }, [searchOpen]);

  const filtered = React.useMemo(
    () => nav.filter((l) => matchesQuery(l.href, l.label, query)),
    [query]
  );

  return (
    <header className="border-border bg-background/90 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:gap-8 md:px-8 lg:px-12">
        <Link
          href="/"
          className="text-foreground group flex shrink-0 items-center gap-3 md:gap-4"
        >
          <Image
            src={school.logoSrc}
            alt={schoolLogoAlt}
            width={160}
            height={64}
            className="border-border hover:border-primary/40 h-10 w-auto rounded-md border bg-card object-contain p-1 transition-colors md:h-12 md:rounded-lg"
          />
          <div className="flex min-w-0 flex-col leading-none">
            <span className="font-semibold tracking-tight transition-colors group-hover:text-primary">
              {school.name}
            </span>
            <span className="text-muted-foreground text-[11px] font-medium tracking-wide uppercase">
              {school.officialShortBrand}
            </span>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="bg-muted/25 hidden flex-1 flex-wrap items-center justify-center gap-x-0.5 gap-y-1 rounded-full border border-transparent lg:flex lg:max-w-none lg:border-border/60 lg:px-1.5 lg:py-1 lg:backdrop-blur-sm xl:gap-x-0.5 xl:px-2 xl:py-1.5 dark:bg-muted/40"
        >
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-2 py-1 text-[11px] font-semibold whitespace-nowrap transition-colors sm:px-2.5 sm:py-1.5 sm:text-[13px]",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-background hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="hidden sm:inline-flex"
            aria-expanded={searchOpen}
            aria-label={searchOpen ? "Close search" : "Search"}
            aria-controls="search-panel"
            onClick={() => setSearchOpen((v) => !v)}
          >
            {searchOpen ? <X /> : <Search />}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetContent side="right" className="w-full gap-0 sm:max-w-sm">
              <SheetHeader className="text-left">
                <SheetTitle className="text-xl">Explore Campus</SheetTitle>
                <p className="text-muted-foreground text-xs font-normal">
                  Navigate to admissions, academics, news, and more.
                </p>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-1 flex-col gap-0.5 p-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "hover:bg-muted rounded-lg px-3 py-3 text-base font-medium transition-colors",
                      pathname === item.href ? "bg-primary/10 text-primary" : ""
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <SheetFooter className="gap-3">
                <SheetClose
                  className="border-border hover:bg-muted w-full rounded-lg border px-4 py-2.5 text-sm font-medium shadow-xs"
                  type="button"
                >
                  Close
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen ? (
          <motion.div
            id="search-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="border-border border-t"
          >
            <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-12">
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className="relative min-w-0 flex-1 md:max-w-xl">
                  <Search className="text-muted-foreground pointer-events-none absolute top-2.5 left-3 size-4" />
                  <Input
                    id="nav-site-search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search pages (e.g. Admissions, Principal)…"
                    className="shadow-xs h-11 pl-10 text-base md:text-sm"
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSearchOpen(false)}
                >
                  Close
                </Button>
              </div>
              <ul className="mt-6 space-y-1">
                {(query.trim() ? filtered : [...nav]).length ? (
                  (query.trim() ? filtered : [...nav]).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setSearchOpen(false)}
                        className="hover:text-primary block rounded-lg px-2 py-2 text-sm transition-colors hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-muted-foreground px-2 text-sm">
                    No matching pages — try Admissions, Faculty, or Contact.
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
