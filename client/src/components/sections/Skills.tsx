import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Database,
  Layout,
  Sparkles,
  Terminal,
} from "lucide-react";
import { skills } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { CornerAccent } from "@/components/ui/CornerAccent";

const DOMAINS = [
  {
    key: "ai",
    label: "Artificial Intelligence & Generative AI",
    shortLabel: "AI & GenAI",
    icon: Sparkles,
    badge: "LLMs, Agents & RAG",
    desc: "Autonomous AI agents, LangChain, LangGraph stateful multi-agent workflows, Retrieval-Augmented Generation (RAG), vector database search, prompt engineering, structured outputs, and tool calling.",
  },
  {
    key: "backend",
    label: "Backend Engineering & APIs",
    shortLabel: "Backend & APIs",
    icon: Cpu,
    badge: "Microservices & Runtimes",
    desc: "High-concurrency microservices, async RESTful backends, and cloud API integrations built with Python (FastAPI), Java (Spring Boot 3), and Node.js (Express).",
  },
  {
    key: "frontend",
    label: "Frontend & Web Engineering",
    shortLabel: "Frontend & Web",
    icon: Layout,
    badge: "Client Interfaces & CMS",
    desc: "Modern responsive web applications, interactive dashboards, and corporate portals engineered with React.js, Next.js, TypeScript, Tailwind CSS, and WordPress/Elementor.",
  },
  {
    key: "database",
    label: "Databases & Data Storage",
    shortLabel: "Databases & Storage",
    icon: Database,
    badge: "Relational, Vector & Cache",
    desc: "Enterprise data persistence, relational indexing, ACID compliance, and low-latency caching using PostgreSQL, MySQL, Vector Databases, MongoDB, and Redis.",
  },
  {
    key: "tools",
    label: "Tools, DevOps & Cloud Technologies",
    shortLabel: "Tools & DevOps",
    icon: Terminal,
    badge: "Deployment & CI/CD",
    desc: "Containerized deployment pipelines, Linux server administration, version control, API testing, and edge hosting with Docker, Linux, Git/GitHub, Postman, and Vercel.",
  },
] as const;

export function Skills() {
  const [activeDomain, setActiveDomain] = useState<string>("all");

  const visibleDomains =
    activeDomain === "all"
      ? DOMAINS
      : DOMAINS.filter((d) => d.key === activeDomain);

  return (
    <section
      id="skills"
      aria-label="Technical Skills and AI Competencies"
      className="relative bg-ink-800/40 py-24"
    >
      <div
        className="absolute inset-0 -z-10 bg-grid-fade bg-[size:48px_48px]"
        aria-hidden="true"
      />
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Stack & Expertise"
            title="Generative AI, Backend, Frontend, Databases & Cloud Tools"
            subtitle="Categorized engineering toolkit spanning autonomous AI agent architecture, scalable REST microservices, responsive web portals, and enterprise multi-tenant databases."
          />
        </Reveal>

        {/* Domain Navigation Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveDomain("all")}
            className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
              activeDomain === "all"
                ? "bg-accent text-ink-900 shadow-lg shadow-accent/25 ring-2 ring-accent"
                : "border border-white/10 bg-ink-900/70 text-slate-300 hover:border-accent/40 hover:text-white"
            }`}
          >
            All Domains ({skills.length}+ Tech)
          </button>
          {DOMAINS.map((domain) => {
            const Icon = domain.icon;
            const count = skills.filter((s) => s.category === domain.key).length;
            const isActive = activeDomain === domain.key;
            return (
              <button
                key={domain.key}
                onClick={() => setActiveDomain(domain.key)}
                className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-accent text-ink-900 font-semibold shadow-lg shadow-accent/25 ring-2 ring-accent"
                    : "border border-white/10 bg-ink-900/70 text-slate-300 hover:border-accent/40 hover:text-white"
                }`}
              >
                <Icon size={14} className={isActive ? "text-ink-900" : "text-accent"} />
                <span>{domain.shortLabel}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                    isActive
                      ? "bg-ink-900/20 text-ink-900"
                      : "bg-white/5 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Individual Domain Containers (Thani Thaniya) */}
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {visibleDomains.map((domain, di) => {
              const Icon = domain.icon;
              const domainSkills = skills.filter((s) => s.category === domain.key);
              return (
                <motion.article
                  key={domain.key}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: di * 0.05 }}
                  className="group relative glass rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5"
                  itemScope
                  itemType="https://schema.org/ItemList"
                >
                  <CornerAccent color="border-accent/30 group-hover:border-accent" />

                  {/* Domain Header */}
                  <div className="mb-6 flex flex-col gap-4 border-b border-white/5 pb-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-3.5">
                      <span className="mt-0.5 rounded-xl bg-accent/10 p-3 text-accent shadow-inner">
                        <Icon size={24} />
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3
                            itemProp="name"
                            className="text-lg sm:text-xl font-bold text-white tracking-tight"
                          >
                            {domain.label}
                          </h3>
                          <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold text-accent uppercase tracking-wider">
                            {domain.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                          {domain.desc}
                        </p>
                      </div>
                    </div>
                    <span className="self-start md:self-center shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      {domainSkills.length} Technologies
                    </span>
                  </div>

                  {/* Domain Tech Logo Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                    {domainSkills.map((skill, si) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: si * 0.02 }}
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="group/item relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-ink-900/70 hover:border-accent/40 hover:bg-ink-900/95 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-default"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/Thing"
                      >
                        <div className="transition-transform duration-300 group-hover/item:scale-110 flex items-center justify-center h-11 w-11">
                          <TechIcon name={skill.icon || skill.name} size={34} />
                        </div>
                        <span
                          itemProp="name"
                          className="mt-2.5 text-xs font-semibold text-slate-200 group-hover/item:text-white text-center tracking-tight leading-snug transition-colors"
                        >
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="mt-1 text-[10px] text-accent/80 font-mono tracking-tight text-center">
                            {skill.badge}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
