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
            subtitle="Specializing in scalable B2B SaaS products, enterprise CRM platforms, and dependable production web systems."
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
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80 p-7 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
              >
                <CornerAccent color="border-accent/30 group-hover:border-accent" />

                {/* Top Header */}
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-xl border border-accent/20 bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-ink-900">
                      <IconComponent size={24} />
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      0{index + 1} // CAPABILITY
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-accent">
                    {service.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors group-hover:border-accent/40 group-hover:text-accent"
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

