import { motion } from "framer-motion";
import { BookOpen, Download, MapPin } from "lucide-react";
import { coursework, profile } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" aria-label="About Praveen Kumar C" className="relative py-24">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Who I am"
            title="About Me"
            subtitle="Full Stack Developer specializing in event-driven multi-tenant applications and RESTful microservices."
          />
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[2fr_3fr]">
          <Reveal direction="left" className="mx-auto w-full max-w-sm">
            <div className="group relative">
              <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-tr from-accent/30 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              <img
                src={profile.avatar}
                alt={`${profile.name} - Full Stack Developer and Systems Architect`}
                title={`${profile.name} - Full Stack Developer`}
                className="w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
                loading="lazy"
                width="400"
                height="400"
              />
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-accent/30 bg-ink-800/90 px-4 py-2 text-sm font-medium text-accent backdrop-blur">
                <MapPin size={14} />
                <span>{profile.location}</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="space-y-4 text-slate-300">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
                <BookOpen size={16} />
                Relevant Coursework & Core Focus
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {coursework.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-accent/50 hover:bg-accent/15"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <motion.a
              href={profile.resumeUrl}
              download
              title="Download Praveen Kumar C Resume PDF"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-ink-900"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
