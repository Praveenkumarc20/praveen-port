import { motion } from "framer-motion";
import { Code, Cpu, Globe, Layers, Sparkles } from "lucide-react";
import { services } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CornerAccent } from "@/components/ui/CornerAccent";

const ICONS = {
  code: Code,
  layers: Layers,
  cpu: Cpu,
  globe: Globe,
} as const;

export function Services() {
  return (
    <section
      id="services"
      aria-label="Engineering Capabilities and Services"
      className="relative py-24 bg-ink-900/60 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="What I Do"
            title="End-to-End Engineering, From Architecture to Shipped Product"
            subtitle="Specializing in Generative AI architectures, autonomous AI agents, enterprise B2B SaaS, and high-concurrency production web systems."
          />
        </Reveal>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const IconComponent =
              ICONS[service.icon as keyof typeof ICONS] ?? Sparkles;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-2xl p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5"
              >
                <CornerAccent color="border-accent/30 group-hover:border-accent" />

                {/* Service Header */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-xl bg-accent/10 p-3 text-accent group-hover:bg-accent/20 transition-colors">
                    <IconComponent size={28} />
                  </span>
                  <span className="font-geist-mono text-xs text-slate-400 group-hover:text-accent transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/5 bg-ink-900/60 px-3 py-1 font-geist-mono text-xs text-slate-300 group-hover:border-accent/20 group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
