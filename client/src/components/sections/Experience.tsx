import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { education, experience } from "@/data/content";
import type { TimelineItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const [activeTab, setActiveTab] = useState<"all" | "work" | "education">("all");

  return (
    <section id="experience" aria-label="Professional Experience and Education Timeline" className="relative py-24 bg-ink-900/60 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-96 w-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Career Journey & Academic Foundation"
            title="Professional Experience & Education"
            subtitle="Demonstrated expertise across production software operations, full stack development, and computer science engineering."
          />
        </Reveal>

        {/* View Switcher Tabs */}
        <Reveal delay={0.1}>
          <div role="tablist" aria-label="Filter career journey timeline" className="mb-14 flex items-center justify-center">
            <div className="inline-flex rounded-2xl border border-white/10 bg-ink-800/80 p-1.5 backdrop-blur-xl">
              <button
                role="tab"
                aria-selected={activeTab === "all"}
                onClick={() => setActiveTab("all")}
                className={`relative rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "all" ? "text-ink-900 shadow-md shadow-accent/20" : "text-slate-400 hover:text-white"
                }`}
              >
                {activeTab === "all" && (
                  <motion.div
                    layoutId="experience-tab-bg"
                    className="absolute inset-0 rounded-xl bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={14} /> Full Journey
                </span>
              </button>

              <button
                role="tab"
                aria-selected={activeTab === "work"}
                onClick={() => setActiveTab("work")}
                className={`relative rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "work" ? "text-ink-900 shadow-md shadow-accent/20" : "text-slate-400 hover:text-white"
                }`}
              >
                {activeTab === "work" && (
                  <motion.div
                    layoutId="experience-tab-bg"
                    className="absolute inset-0 rounded-xl bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Briefcase size={14} /> Experience ({experience.length})
                </span>
              </button>

              <button
                role="tab"
                aria-selected={activeTab === "education"}
                onClick={() => setActiveTab("education")}
                className={`relative rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "education" ? "text-ink-900 shadow-md shadow-accent/20" : "text-slate-400 hover:text-white"
                }`}
              >
                {activeTab === "education" && (
                  <motion.div
                    layoutId="experience-tab-bg"
                    className="absolute inset-0 rounded-xl bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <GraduationCap size={14} /> Education ({education.length})
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Timeline Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Work Experience Column */}
          {(activeTab === "all" || activeTab === "work") && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={activeTab === "work" ? "lg:col-span-2 max-w-4xl mx-auto w-full" : ""}
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="rounded-xl border border-accent/30 bg-accent/10 p-2.5 text-accent">
                  <Briefcase size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Work Experience</h3>
                  <p className="text-xs text-slate-400">Industry roles & software engineering internships</p>
                </div>
              </div>

              <div className="relative border-l-2 border-accent/20 pl-6 sm:pl-8 space-y-10">
                {experience.map((item, idx) => (
                  <TimelineCard key={item.id} item={item} index={idx} type="work" />
                ))}
              </div>
            </motion.div>
          )}

          {/* Education Column */}
          {(activeTab === "all" || activeTab === "education") && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className={activeTab === "education" ? "lg:col-span-2 max-w-4xl mx-auto w-full" : ""}
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="rounded-xl border border-accent/30 bg-accent/10 p-2.5 text-accent">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-xs text-slate-400">Academic degree & specialized coursework</p>
                </div>
              </div>

              <div className="relative border-l-2 border-accent/20 pl-6 sm:pl-8 space-y-10">
                {education.map((item, idx) => (
                  <TimelineCard key={item.id} item={item} index={idx} type="education" />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
  type: "work" | "education";
}) {
  const isPresent = item.period.toLowerCase().includes("present");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Laser Node Dot on Left Vertical Line */}
      <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-accent/50 bg-ink-900 shadow-md shadow-accent/30 transition-transform duration-300 group-hover:scale-125 group-hover:border-accent" aria-hidden="true">
        <span className={`h-2.5 w-2.5 rounded-full ${isPresent ? "bg-accent animate-ping" : "bg-accent"}`} />
      </span>

      {/* Card Content Container */}
      <div className="glass relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
        {/* Subtle Top Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />

        {/* Top Header Row */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent transition-colors flex items-center gap-2">
              {item.title}
            </h4>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5 text-accent">
                <Building2 size={14} />
                {item.subtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isPresent && (
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Current Role
              </span>
            )}
            <span className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-bold text-accent flex items-center gap-1.5">
              <Calendar size={13} />
              {item.period}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-slate-300">
          {item.description}
        </p>

        {/* Tag Pills */}
        {item.tags && item.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs font-medium text-slate-200 transition-colors hover:border-accent/50 hover:bg-accent/15"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
