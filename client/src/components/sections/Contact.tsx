import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, XCircle } from "lucide-react";
import { profile, socials } from "@/data/content";
import type { ContactForm, ContactStatus } from "@/types";
import { api } from "@/lib/api";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/ui/SocialIcon";

const INITIAL_FORM: ContactForm = { name: "", email: "", message: "" };

const CONTACT_META = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

export function Contact() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState("");

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    try {
      await api.sendContactMessage(form);
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Let's talk"
            title="Contact Me"
            subtitle="Have a project in mind or just want to say hi? Drop me a message."
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal direction="left">
            <div className="space-y-6">
              {CONTACT_META.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="rounded-xl bg-accent/10 p-3 text-accent">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-white transition-colors hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <p className="mb-4 text-sm uppercase tracking-widest text-slate-500">Connect with me</p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
                  >
                    <SocialIcon icon={s.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/10 bg-ink-900/70 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 bg-ink-900/70 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-ink-900/70 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold text-ink-900 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                  <CheckCircle2 size={18} />
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm font-medium text-rose-400">
                  <XCircle size={18} />
                  {error}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
