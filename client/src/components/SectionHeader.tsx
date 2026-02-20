/* DESIGN: Dark Industrial Command Center — Section header with corner brackets */
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({ tag, title, description, align = "center", light = false }: SectionHeaderProps) {
  return (
    <ScrollReveal className={`mb-12 lg:mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""}`}>
      {tag && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-[oklch(0.75_0.15_195)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[oklch(0.75_0.15_195)]">{tag}</span>
          <span className="w-8 h-px bg-[oklch(0.75_0.15_195)]" />
        </div>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
