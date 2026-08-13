import { motion } from "framer-motion";
import { ArrowDown, Cpu, Database, Download, Layers, Mail, Server, Shield, Sparkles, Zap } from "lucide-react";
import { profile, socials } from "@/data/content";
import { useTypewriter } from "@/hooks/useTypewriter";
import { SocialIcon } from "@/components/ui/SocialIcon";

const FLOATING_BADGES = [
  { label: "Node.js & Express", icon: Server, position: "top-20 left-[3%] lg:left-[8%]", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-emerald-500/10" },
  { label: "Spring Boot Microservices", icon: Cpu, position: "top-32 right-[3%] lg:right-[8%]", color: "text-accent border-accent/30 bg-accent/10 shadow-accent/10" },
  { label: "Redis & BullMQ Queues", icon: Zap, position: "bottom-32 left-[3%] lg:left-[6%]", color: "text-amber-400 border-amber-500/30 bg-amber-500/10 shadow-amber-500/10" },
  { label: "MongoDB ACID Transactions", icon: Database, position: "bottom-36 right-[3%] lg:right-[6%]", color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10 shadow-indigo-500/10" },
  { label: "React.js & TypeScript", icon: Layers, position: "top-[48%] left-[1%] lg:left-[4%]", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-cyan-500/10" },
  { label: "Docker & Containerization", icon: Shield, position: "top-[50%] right-[1%] lg:right-[4%]", color: "text-sky-400 border-sky-500/30 bg-sky-500/10 shadow-sky-500/10" },
];

export function Hero() {
  const typed = useTypewriter(profile.taglines);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-32">
      {/* 1. Deep Dark Base */}
      <div className="absolute inset-0 -z-30 bg-ink-900" aria-hidden />

      {/* 2. Cyberpunk Animated Radial Grid Mesh */}
      <div className="absolute inset-0 -z-20 bg-grid-fade bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)]" aria-hidden />

      {/* 3. Dual Animated Neon Aurora Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [-30, 30, -30],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[170px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[180px] pointer-events-none"
      />

      {/* 4. Floating Tech Badges on Desktop */}
      <div className="absolute inset-0 -z-10 hidden xl:block pointer-events-none select-none">
        {FLOATING_BADGES.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: [0, -14, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: i * 0.15 },
                y: { duration: 4.5 + i, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`absolute ${b.position} flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 text-xs font-bold backdrop-blur-xl shadow-2xl transition-transform hover:scale-110 pointer-events-auto cursor-default ${b.color}`}
            >
              <Icon size={16} />
              <span>{b.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* 5. Main Center Content Container */}
      <div className="section-container relative z-10 w-full max-w-5xl text-center px-4 sm:px-6">
        {/* Executive Availability Status Bar */}
        <motion.div
          className="mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-accent backdrop-blur-xl shadow-xl shadow-accent/15"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          Full Stack Developer & Systems Architect
        </motion.div>

        {/* SINGLE LINE Scalable Name Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full overflow-hidden py-1"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight whitespace-nowrap drop-shadow-2xl">
            Praveen <span className="bg-gradient-to-r from-accent via-accent-100 to-accent-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,229,255,0.35)]">Kumar C</span>
          </h1>
        </motion.div>

        {/* Dynamic Typewriter Line */}
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>I am a</span>
          <span className="font-extrabold text-accent">
            {typed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Scalable Professional Bio */}
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-slate-300 font-normal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Based in {profile.location}, I specialize in building enterprise-grade multi-tenant web applications, RESTful microservices, and high-concurrency architectures with Node.js, Spring Boot, React, Redis, and MongoDB.
        </motion.p>

        {/* High-Impact Architectural Highlights Pills */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <span className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2 text-accent shadow-md backdrop-blur-md transition-colors hover:border-accent/60">
            <Sparkles size={15} /> Multi-Tenant Architecture
          </span>
          <span className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2 text-accent shadow-md backdrop-blur-md transition-colors hover:border-accent/60">
            ⚡ BullMQ + Redis Event Queues
          </span>
          <span className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2 text-accent shadow-md backdrop-blur-md transition-colors hover:border-accent/60">
            🔒 MongoDB ACID Transactions
          </span>
        </motion.div>

        {/* Action Center CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-8 py-4 font-extrabold text-ink-900 transition-all duration-300 hover:bg-accent-600 shadow-2xl shadow-accent/25 hover:-translate-y-1 hover:shadow-accent/40"
          >
            <Mail size={19} />
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2.5 rounded-xl border border-accent/40 bg-accent/10 px-8 py-4 font-extrabold text-accent transition-all duration-300 hover:bg-accent hover:text-ink-900 hover:-translate-y-1 shadow-xl backdrop-blur-md"
          >
            <Download size={19} />
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Connect</span>
          <span className="h-px w-12 bg-slate-700" />
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent shadow-md hover:shadow-accent/20"
              >
                <SocialIcon icon={s.icon} size={19} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-accent"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ArrowDown size={28} />
      </motion.a>
    </section>
  );
}
