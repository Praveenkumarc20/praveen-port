interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title} <span className="text-gradient">.</span>
      </h2>
      {subtitle && <p className="mt-4 max-w-2xl text-slate-400">{subtitle}</p>}
    </div>
  );
}
