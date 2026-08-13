import { GraduationCap, Briefcase } from "lucide-react";
import type { TimelineItem } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface TimelineProps {
  items: TimelineItem[];
  type: "work" | "education";
}

export function Timeline({ items, type }: TimelineProps) {
  const Icon = type === "work" ? Briefcase : GraduationCap;

  return (
    <ol className="relative space-y-8 border-l border-white/10 pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-ink-900">
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
          <div className="glass rounded-2xl p-6 transition-colors hover:border-accent/30">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <h3 className="flex items-center gap-2 font-semibold text-white">
                <Icon size={18} className="shrink-0 text-accent" />
                {item.title}
              </h3>
              <Badge>{item.period}</Badge>
            </div>
            <p className="mb-2 text-sm font-medium text-accent-600">{item.subtitle}</p>
            <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
            {item.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
