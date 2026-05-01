import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({ eyebrow, title, description, className }: Props) {
  return (
    <header className={cn("max-w-3xl pb-12 md:pb-16", className)}>
      {eyebrow ? (
        <p className="text-primary mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] md:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-foreground text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.35rem]">
        {title}
      </h1>
      {description ? (
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}
