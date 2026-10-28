import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { faqs } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CornerAccent } from "@/components/ui/CornerAccent";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative py-24 bg-ink-800/40 overflow-hidden"
    >
      <div className="section-container max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions from recruiters, clients, and engineering leaders."
          />
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.id} delay={index * 0.06}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-accent/50 bg-ink-800/95 shadow-xl shadow-accent/5"
                      : "border-white/10 bg-ink-800/60 hover:border-white/20 hover:bg-ink-800/80"
                  }`}
                >
                  <CornerAccent
                    color={
                      isOpen
                        ? "border-accent"
                        : "border-white/10 group-hover:border-accent/40"
                    }
                  />

                  {/* Question Header Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors"
                  >
                    <span className="flex items-center gap-3 pr-4 font-semibold text-white sm:text-lg group-hover:text-accent">
                      <HelpCircle
                        size={18}
                        className={`shrink-0 transition-colors ${
                          isOpen ? "text-accent" : "text-slate-400 group-hover:text-accent"
                        }`}
                      />
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isOpen
                          ? "border-accent/40 bg-accent/10 text-accent"
                          : "border-white/10 bg-white/5 text-slate-400 group-hover:border-white/20 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>

                  {/* Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-6 pt-4 pb-6 text-sm leading-relaxed text-slate-300 sm:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Contact Nudge */}
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400">
              Have another question or want to discuss a project?{" "}
              <a
                href="#contact"
                className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
              >
                <MessageSquare size={14} /> Get in touch directly
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

