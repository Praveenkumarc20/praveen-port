import { Cpu, Database, Layout, Wrench } from "lucide-react";
import { skills } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SkillBar } from "@/components/ui/SkillBar";

const CATEGORIES = [
  { key: "frontend", label: "Frontend", icon: Layout },
  { key: "backend", label: "Backend", icon: Cpu },
  { key: "database", label: "Database", icon: Database },
  { key: "tools", label: "Tools & Platforms", icon: Wrench },
] as const;

export function Skills() {
  return (
    <section id="skills" aria-label="Technical Skills and Core Competencies" className="relative bg-ink-800/40 py-24">
      <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:48px_48px]" aria-hidden="true" />
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="What I know"
            title="Technical Skills"
            subtitle="A full stack toolkit refined through training and real-world projects."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {CATEGORIES.map((cat, ci) => {
            const Icon = cat.icon;
            const list = skills.filter((s) => s.category === cat.key);
            return (
              <Reveal key={cat.key} delay={0.08 * ci}>
                <div className="glass h-full rounded-2xl p-7 transition-colors hover:border-accent/30">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="rounded-xl bg-accent/10 p-2.5 text-accent">
                      <Icon size={22} />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{cat.label}</h3>
                  </div>
                  <ul className="space-y-5">
                    {list.map((skill, si) => (
                      <li key={skill.name}>
                        <SkillBar skill={skill} index={si} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
