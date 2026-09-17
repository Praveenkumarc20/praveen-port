import React, { useState, useEffect, Component, type ErrorInfo, type ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { profile, socials } from "@/data/content";
import { SocialIcon } from "@/components/ui/SocialIcon";
import {
  Shader,
  SolidColor,
  Surface3D,
  DotGrid,
  Prism,
  LinearGradient,
  LiquidMetal,
} from "shaders/react";

// Safe WebGPU Error Boundary to guarantee resilient fallback
interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ShaderErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("WebGPU Shader unavailable, falling back to dark background:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function Hero() {
  const [webGpuAvailable, setWebGpuAvailable] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("gpu" in navigator)) {
      setWebGpuAvailable(false);
    }
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      itemScope
      itemType="http://schema.org/Person"
      className="relative isolate flex flex-col min-h-[100dvh] overflow-hidden bg-[#080808] text-white font-geist antialiased"
    >
      {/* Schema.org Search Engine Structured Microdata */}
      <meta itemProp="name" content={profile.name} />
      <meta itemProp="jobTitle" content={profile.role} />
      <meta itemProp="email" content={profile.email} />
      <meta itemProp="telephone" content={profile.phone} />
      <meta itemProp="address" content={profile.location} />

      {/* 1. Full-Bleed WebGPU Shader Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-auto" aria-hidden="true">
        {webGpuAvailable ? (
          <ShaderErrorBoundary
            fallback={
              <div className="w-full h-full bg-[#080808] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
            }
          >
            <Shader
              toneMapping="aces"
              className="w-full h-full block"
              onUnavailable={() => setWebGpuAvailable(false)}
            >
              {/* Component 1: Base Solid Fill */}
              <SolidColor color="#080808" />

              {/* Component 2: 3D Displaced Surface with cursor-reactive ripples */}
              <Surface3D
                amplitude={0.31}
                cursorIntensity={0.83}
                edgePinning={0.4}
                farCutoff={0.12}
                frequency={1.8}
                height={0.31}
                highlights={6}
                lighting={29}
                lightX={-0.8}
                lightY={-0.95}
                octaves={1}
                tilt={73}
                zoom={1.1}
              >
                {/* Data-mapped DotGrid: dot sizes driven by luminance of hidden LinearGradient */}
                <DotGrid
                  density={57}
                  dotSize={
                    {
                      type: "map",
                      source: "idmrf0jzpi1json7rda",
                      channel: "luminance",
                      inputMin: 0,
                      inputMax: 1,
                      outputMin: 0,
                      outputMax: 0.21,
                      curve: 0.2,
                    } as any
                  }
                  speed={0.91}
                  visible={true}
                />
              </Surface3D>

              {/* Component 3: Prism Dispersion Pass anchored near bottom-right */}
              <Prism
                endFalloff={0.44}
                intensity={0.24}
                position={{ x: 1.01, y: 1.23 } as any}
                saturation={0.79}
                softness={0.001}
                speed={0.16}
                splitPosition={{ x: 0.99, y: 1.11 } as any}
                spread={3}
                startFalloff={0.64}
              />

              {/* Component 4: Hidden LinearGradient driver for the dotSize map */}
              <LinearGradient
                id="idmrf0jzpi1json7rda"
                colorSpace="oklab"
                start={{ x: 0.5, y: 1.01 } as any}
                end={{ x: 0.5, y: 0.15 } as any}
                stops={[
                  { color: "#ffffff", position: 0 },
                  { color: "#000000", position: 1 },
                ]}
                visible={false}
              />

              {/* Component 5: Floating LiquidMetal glint */}
              <LiquidMetal
                center={{ x: 0.5, y: 0.45 } as any}
                lightColor="#1f1f1f"
                ripple={5.31}
                scale={1.17}
                shape='{"type":"metaballs3D","ballRadius":0.1,"spread":0.29,"blend":0.325,"speed":1,"rotX":0,"rotY":0,"rotZ":0}'
                shapeType="metaballs3D"
                turbulence={0.37}
              />
            </Shader>
          </ShaderErrorBoundary>
        ) : (
          <div className="w-full h-full bg-[#080808] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        )}
      </div>

      {/* 2. Top Header Navigation */}
      <header
        className="reveal-conf relative z-10 flex items-center justify-between px-6 py-5 sm:px-10"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        <div className="flex items-center gap-10">
          {/* Logo with glowing live dot */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            title="Praveen Kumar C"
          >
            <span
              className="inline-block h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
              aria-hidden="true"
            />
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Praveen
              <span className="ml-1.5 font-geist-mono text-xs font-normal text-[#737373]">
                ’26
              </span>
            </span>
          </a>

          {/* Primary Nav Links (hidden below 768px; flex row at >=768px) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm text-[#a3a3a3]"
          >
            <a href="#about" className="conf-nav-link">
              About
            </a>
            <a href="#skills" className="conf-nav-link">
              Skills
            </a>
            <a href="#projects" className="conf-nav-link">
              Projects
            </a>
            <a href="#contact" className="conf-nav-link">
              Contact
            </a>
          </nav>
        </div>

        {/* Top Header Action Button */}
        <a
          href="#contact"
          className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-[#e5e5e5] transition-colors duration-150"
          title="Get in touch with Praveen"
        >
          Get in touch
        </a>
      </header>

      {/* 3. Centered Content Stack */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-24 text-center max-w-5xl mx-auto w-full">
        {/* Live-dot Event Status Badge */}
        <p
          className="reveal-conf"
          style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-geist-mono text-xs text-[#d4d4d4] backdrop-blur-md">
            {/* Live pulsing dot */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            Available for Roles &amp; Consulting · Tamil Nadu, India
          </span>
        </p>

        {/* Scalable Two-line Headline */}
        <h1
          className="reveal-conf mt-10 sm:mt-12 max-w-[56rem] text-[44px] sm:text-[72px] font-semibold leading-[1.05] tracking-[-0.05em] text-balance text-white"
          style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
        >
          Praveen Kumar C
          <br />
          <span className="text-white/80 font-normal text-3xl sm:text-5xl lg:text-6xl tracking-[-0.04em]">
            Full Stack Developer &amp; Systems Architect
          </span>
        </h1>

        {/* Supporting Professional Bio */}
        <p
          className="reveal-conf mt-8 max-w-[36rem] text-sm sm:text-base leading-[1.625] text-[#a3a3a3] text-balance"
          style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
        >
          Specializing in engineering enterprise-grade multi-tenant web applications, RESTful microservices, and high-concurrency event-driven architectures with Node.js, Spring Boot, React, Redis, and MongoDB ACID transactions.
        </p>

        {/* Architectural Highlights Pills */}
        <div
          className="reveal-conf mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-300"
          style={{ "--reveal-delay": "0.35s" } as React.CSSProperties}
        >
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-geist-mono">
            Multi-Tenant Architecture
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-geist-mono">
            BullMQ + Redis Event Queues
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-geist-mono">
            MongoDB ACID Transactions
          </span>
        </div>

        {/* Action CTAs */}
        <div
          className="reveal-conf mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ "--reveal-delay": "0.4s" } as React.CSSProperties}
        >
          <a
            href="#contact"
            className="conf-cta-primary w-full sm:w-auto cursor-pointer"
            title="Contact Praveen Kumar C"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="conf-cta-secondary w-full sm:w-auto cursor-pointer"
            title="Download Praveen Kumar C Resume PDF"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="conf-cta-secondary w-full sm:w-auto cursor-pointer"
            title="Explore featured software projects"
          >
            View Projects
          </a>
        </div>

        {/* Social Connect Links */}
        <div
          className="reveal-conf mt-9 flex items-center justify-center gap-3"
          style={{ "--reveal-delay": "0.45s" } as React.CSSProperties}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">Connect</span>
          <span className="h-px w-8 bg-white/20" aria-hidden="true" />
          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noreferrer me"
                aria-label={`Connect on ${s.label}`}
                title={`Praveen Kumar C on ${s.label}`}
                className="rounded-full border border-white/15 bg-white/5 p-2 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
              >
                <SocialIcon icon={s.icon} size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        title="Scroll down to About section"
        className="reveal-conf absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-white"
        style={{ "--reveal-delay": "0.5s" } as React.CSSProperties}
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
