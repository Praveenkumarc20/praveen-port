import { ArrowUp, Heart } from "lucide-react";
import { profile, socials } from "@/data/content";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer aria-label="Page Footer" className="border-t border-white/10 bg-ink-800/60">
      <div className="section-container flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} <span className="text-white">{profile.name}</span>. Full Stack Developer & Multi-Tenant Systems Architect. Crafted with{" "}
          <Heart size={14} className="inline text-accent" fill="currentColor" aria-hidden="true" /> using React & TypeScript.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noreferrer me"
              aria-label={`Visit ${s.label} profile`}
              title={`Praveen Kumar C on ${s.label}`}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
            >
              <SocialIcon icon={s.icon} size={18} />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll back to top"
            title="Scroll to top"
            className="rounded-full border border-accent/40 bg-accent/10 p-2 text-accent transition-colors hover:bg-accent hover:text-ink-900"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
