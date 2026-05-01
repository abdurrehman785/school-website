import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  tinted?: boolean;
};

export function SectionWrapper({
  children,
  id,
  className,
  innerClassName,
  tinted,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[5.25rem]",
        tinted && "bg-muted/35",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24 lg:px-12",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
