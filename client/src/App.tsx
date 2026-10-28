import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { HeadSEO } from "@/components/HeadSEO";
import MouseEffects from "@/components/ui/MouseEffects";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-900 text-white selection:bg-accent selection:text-ink-900">
      {/* Originkit Dynamic Click FX (Sniper, Crosshair, Rings, Burst, Particles, Wavy) */}
      <MouseEffects
        interactionMode="sniper"
        color="#22d3ee"
        duration={0.35}
        effectSize={90}
        strokeWidth={2}
        showDock={true}
      />
      <HeadSEO />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
