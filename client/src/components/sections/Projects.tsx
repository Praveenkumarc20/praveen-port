import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Flame,
  Globe,
  Info,
  Layers,
  Map,
  ShieldCheck,
  Sparkles,
  Zap,
  X,
} from "lucide-react";
import type { Project } from "@/types";
import { projects } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

const ICONS = {
  shield: ShieldCheck,
  flame: Flame,
  map: Map,
  globe: Globe,
  cpu: Cpu,
  layers: Layers,
  activity: Activity,
} as const;

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "multi-tenant", label: "Multi-Tenant & Event-Driven" },
  { id: "blockchain", label: "Blockchain & Security" },
  { id: "ai", label: "AI & Analytics" },
] as const;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative bg-ink-800/40 py-24 overflow-hidden">
      {/* Dynamic Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio Showcase"
            title="Creative & High-Performance Projects"
            subtitle="Explore high-concurrency microservices, multi-tenant engines, and AI dashboards crafted with precision."
          />
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={0.1}>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive ? "text-ink-900 shadow-lg shadow-accent/20" : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-project-tab"
                      className="absolute inset-0 rounded-xl bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {cat.id === "all" && <Sparkles size={14} />}
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project Cards Grid */}
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = ICONS[project.icon];
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80 p-7 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
                >
                  {/* Subtle Top Gradient Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20 opacity-0 transition-opacity group-hover:opacity-100" />

                  <div>
                    {/* Top Row: Icon & Featured Badge */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-xl border border-accent/20 bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-ink-900">
                        <Icon size={26} />
                      </span>
                      {project.featured && (
                        <Badge className="bg-accent/10 border-accent/30 text-accent flex items-center gap-1">
                          <Zap size={12} className="animate-pulse" />
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-relaxed text-slate-300 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Quick Metrics Chips */}
                    {project.metrics && (
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.metrics.slice(0, 2).map((m) => (
                          <div
                            key={m.label}
                            className="flex items-center gap-1.5 rounded-lg border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent"
                          >
                            <span>{m.label}:</span>
                            <span className="font-bold text-white">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links & Architecture Modal Trigger */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent transition-colors hover:text-white"
                      >
                        <Info size={14} />
                        Architecture
                      </button>

                      <div className="flex items-center gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-ink-900"
                          >
                            {link.label}
                            <ArrowUpRight size={14} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-accent/30 bg-ink-800 p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-slate-400 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl border border-accent/30 bg-accent/10 p-3.5 text-accent">
                  {(() => {
                    const Icon = ICONS[selectedProject.icon];
                    return <Icon size={28} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <span className="text-xs uppercase tracking-wider font-semibold text-accent">
                    {selectedProject.category.toUpperCase()} SYSTEM ARCHITECTURE
                  </span>
                </div>
              </div>

              {/* Full Description */}
              <p className="mb-6 leading-relaxed text-slate-300 text-sm sm:text-base">
                {selectedProject.description}
              </p>

              {/* Performance Metrics Grid */}
              {selectedProject.metrics && (
                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {selectedProject.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-accent/20 bg-accent/5 p-3 text-center"
                    >
                      <p className="text-xs text-slate-400 mb-1">{m.label}</p>
                      <p className="text-sm font-extrabold text-accent">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Architecture Highlights */}
              {selectedProject.architectureHighlights && (
                <div className="mb-6 rounded-xl border border-white/10 bg-ink-900/60 p-4">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-2">
                    <Sparkles size={14} /> Key Technical Accomplishments
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.architectureHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="mb-8 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-5">
                {selectedProject.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-ink-900 transition-all hover:bg-accent-600 shadow-md shadow-accent/20"
                  >
                    {link.label}
                    <ExternalLink size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
