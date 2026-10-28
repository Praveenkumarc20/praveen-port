import { motion } from "framer-motion";
import { Cpu, Database, Layout, Wrench } from "lucide-react";
import { skills } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { CornerAccent } from "@/components/ui/CornerAccent";

const CATEGORIES = [
  { key: "frontend", label: "Frontend", icon: Layout, desc: "Client-side architecture & responsive UI" },
  { key: "backend", label: "Backend", icon: Cpu, desc: "Server runtimes & microservices" },
  { key: "database", label: "Database & Real-Time", icon: Database, desc: "Relational, NoSQL & message queues" },
  { key: "tools", label: "Tools & DevOps", icon: Wrench, desc: "Containers, CI/CD & testing" },
] as const;

export function Skills() {
  return (
    <section id="skills" aria-label="Technical Skills and Core Competencies" className="relative bg-ink-800/40 py-24">
      <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:48px_48px]" aria-hidden="true" />
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Tech Stack"
            title="Tools & Technologies I Use to Design, Build, and Ship Software"
            subtitle="Full-stack toolkit refined through production SaaS applications, CRM engineering, and client projects."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {CATEGORIES.map((cat, ci) => {
            const Icon = cat.icon;
            const list = skills.filter((s) => s.category === cat.key);
            return (
              <Reveal key={cat.key} delay={0.08 * ci}>
                <div className="group relative glass h-full rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                  <CornerAccent color="border-accent/30 group-hover:border-accent" />
                  
                  {/* Category Header */}
                  <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-accent/10 p-2.5 text-accent shadow-inner">
                        <Icon size={22} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white tracking-tight">{cat.label}</h3>
                        <p className="text-xs text-slate-400">{cat.desc}</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-[11px] font-medium text-accent">
                      {list.length} Technologies
                    </span>
                  </div>

                  {/* Tech Logo Grid - No percentage bars, clean brand logos */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {list.map((skill, si) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: si * 0.03 }}
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="group/item relative flex flex-col items-center justify-center p-3.5 rounded-xl border border-white/5 bg-ink-900/60 hover:border-accent/40 hover:bg-ink-900/90 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-default"
                      >
                        <div className="transition-transform duration-300 group-hover/item:scale-110 flex items-center justify-center h-10 w-10">
                          <TechIcon name={skill.icon || skill.name} size={32} />
                        </div>
                        <span className="mt-2 text-xs font-medium text-slate-300 group-hover/item:text-white text-center tracking-tight transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
