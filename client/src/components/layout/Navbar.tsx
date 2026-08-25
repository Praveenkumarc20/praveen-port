import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-ink-900/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav aria-label="Main Navigation" className="section-container flex h-20 items-center justify-between">
          <button
            onClick={() => goTo("home")}
            className="flex items-center gap-2 text-lg font-bold tracking-wide text-white transition-opacity hover:opacity-90"
            aria-label="Praveen Kumar C Portfolio Home"
            title="Praveen Kumar C Home"
          >
            <img
              src={profile.logo}
              alt="Praveen Kumar C Logo"
              title="Praveen Kumar C"
              width="36"
              height="36"
              className="h-9 w-auto rounded-md"
            />
          </button>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => goTo(link.id)}
                  aria-current={active === link.id ? "page" : undefined}
                  className={`relative text-sm font-medium transition-colors hover:text-accent ${
                    active === link.id ? "text-accent" : "text-slate-300"
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-accent"
                    />
                  )}
                </button>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download
                title="Download Resume PDF"
                className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-ink-900"
              >
                Resume
              </a>
            </li>
          </ul>

          <button
            className="text-white lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open Navigation Menu"
            aria-expanded={open}
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink-900/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute right-6 top-6 text-white"
              onClick={() => setOpen(false)}
              aria-label="Close Navigation Menu"
            >
              <X size={28} />
            </button>
            <ul className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <button
                    onClick={() => goTo(link.id)}
                    aria-current={active === link.id ? "page" : undefined}
                    className={`text-2xl font-semibold ${
                      active === link.id ? "text-accent" : "text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
