import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Brain,
  Code2,
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

const CATEGORIES = [
  {
    key: "genai",
    label: "Generative AI & LLMs",
    icon: Sparkles,
    desc: "Foundation models, prompt engineering, structured outputs & tool calling",
  },
  {
    key: "agents",
    label: "AI Agents & Frameworks",
    icon: Bot,
    desc: "LangChain, LangGraph, autonomous agent architecture & workflows",
  },
  {
    key: "rag",
    label: "RAG & AI Applications",
    icon: Brain,
    desc: "Semantic search, text embeddings, vector retrieval & AI assistants",
  },
  {
    key: "backend",
    label: "Backend Development",
    icon: Cpu,
    desc: "FastAPI, Spring Boot, RESTful microservices & API integrations",
  },
  {
    key: "programming",
    label: "Programming Languages",
    icon: Code2,
    desc: "Python, Java, SQL & core system logic",
  },
  {
    key: "database",
    label: "Databases & Storage",
    icon: Database,
    desc: "PostgreSQL, MySQL, Vector DBs, MongoDB & caching",
  },
  {
    key: "deployment",
    label: "Deployment & Tools",
    icon: Terminal,
    desc: "Docker, Linux, Git/GitHub, Cloud deployment & API testing",
  },
  {
    key: "frontend",
    label: "Frontend & Web",
    icon: Layout,
    desc: "React, Next.js, TypeScript, Tailwind CSS & WordPress/Elementor",
  },
] as const;

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const visibleCategories =
    activeCategory === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.key === activeCategory);

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
            eyebrow="Skills & Stack"
            title="Generative AI, AI Agents, Full-Stack & System Architecture"
            subtitle="Hands-on toolkit spanning LLM integrations, RAG pipelines, LangChain/LangGraph autonomous agents, and enterprise production engineering."
          />
        </Reveal>

        {/* Filter Navigation Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-accent text-ink-900 font-semibold shadow-lg shadow-accent/25"
                : "border border-white/10 bg-ink-900/60 text-slate-300 hover:border-accent/40 hover:text-white"
            }`}
          >
            All Skills ({skills.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-accent text-ink-900 font-semibold shadow-lg shadow-accent/25"
                  : "border border-white/10 bg-ink-900/60 text-slate-300 hover:border-accent/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid gap-7 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((cat, ci) => {
              const Icon = cat.icon;
              const list = skills.filter((s) => s.category === cat.key);
              return (
                <motion.div
                  key={cat.key}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: ci * 0.04 }}
                >
                  <div className="group relative glass h-full rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                    <CornerAccent color="border-accent/30 group-hover:border-accent" />

                    {/* Category Header */}
                    <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="rounded-xl bg-accent/10 p-2.5 text-accent shadow-inner">
                          <Icon size={22} />
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                            {cat.label}
                          </h3>
                          <p className="text-xs text-slate-400">{cat.desc}</p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-[11px] font-medium text-accent">
                        {list.length} Skills
                      </span>
                    </div>

                    {/* Tech Logo Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {list.map((skill, si) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.25, delay: si * 0.03 }}
                          whileHover={{ y: -3, scale: 1.02 }}
                          className="group/item relative flex flex-col items-center justify-center p-3.5 rounded-xl border border-white/5 bg-ink-900/60 hover:border-accent/40 hover:bg-ink-900/90 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-default"
                        >
                          <div className="transition-transform duration-300 group-hover/item:scale-110 flex items-center justify-center h-10 w-10">
                            <TechIcon name={skill.icon || skill.name} size={32} />
                          </div>
                          <span className="mt-2 text-xs font-medium text-slate-300 group-hover/item:text-white text-center tracking-tight leading-snug transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
