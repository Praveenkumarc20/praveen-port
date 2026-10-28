import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "gsap";

export type InteractionMode =
  | "rings"
  | "burst"
  | "particles"
  | "crosshair"
  | "wavy"
  | "sniper";

type Effect = { id: string; x: number; y: number };
type Particle = Effect & { angle: number; distance: number };

export interface MouseEffectsProps {
  color?: string;
  interactionMode?: InteractionMode;
  duration?: number;
  strokeWidth?: number;
  effectSize?: number;
  rotation?: number;
  showLabel?: boolean;
  labelText?: string;
  labelColor?: string;
  labelFont?: CSSProperties;
  showDock?: boolean;
}

export default function MouseEffects({
  color = "#22d3ee",
  interactionMode: initialMode = "sniper",
  duration = 0.35,
  strokeWidth = 2,
  effectSize = 90,
  rotation = 0,
  showLabel = false,
  labelText = "Click Anywhere",
  labelColor = "#ffffff",
  labelFont = { fontFamily: "Inter", fontSize: 60, fontWeight: 600 },
  showDock = true,
}: MouseEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<InteractionMode>(initialMode);
  const [rings, setRings] = useState<Effect[]>([]);
  const [bursts, setBursts] = useState<Effect[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [crosshairs, setCrosshairs] = useState<Effect[]>([]);
  const [wavies, setWavies] = useState<Effect[]>([]);
  const [snipers, setSnipers] = useState<Effect[]>([]);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Ignore clicks directly inside interactive inputs or selects if needed,
      // but click effect everywhere else is glorious
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("select.click-effect-ignore")) {
        return;
      }

      const x = e.clientX;
      const y = e.clientY;
      const id = `${e.timeStamp}-${Math.round(x)}-${Math.round(y)}`;

      if (mode === "rings") {
        setRings((prev) => [...prev, { id, x, y }]);
      } else if (mode === "burst") {
        setBursts((prev) => [...prev, { id, x, y }]);
      } else if (mode === "particles") {
        const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
          id: `${id}-${i}`,
          x,
          y,
          angle: i * 45 * (Math.PI / 180),
          distance: effectSize * 0.2 + Math.random() * (effectSize * 0.3),
        }));
        setParticles((prev) => [...prev, ...newParticles]);
      } else if (mode === "crosshair") {
        setCrosshairs((prev) => [...prev, { id, x, y }]);
      } else if (mode === "wavy") {
        setWavies((prev) => [...prev, { id, x, y }]);
      } else if (mode === "sniper") {
        setSnipers((prev) => [...prev, { id, x, y }]);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [mode, effectSize]);

  const svgStyle = (x: number, y: number): CSSProperties => ({
    position: "fixed",
    left: x - effectSize / 2,
    top: y - effectSize / 2,
    width: effectSize,
    height: effectSize,
    pointerEvents: "none",
    overflow: "visible",
    transform: `rotate(${rotation}deg)`,
    transformOrigin: "center",
    zIndex: 99999,
  });

  return (
    <>
      {/* Global Interactive Click Effects Container */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        {showLabel && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
              ...labelFont,
              color: labelColor,
            }}
          >
            {labelText}
          </div>
        )}

        {/* 1. Rings */}
        {mode === "rings" &&
          rings.map((ring) => (
            <svg
              key={ring.id}
              style={svgStyle(ring.x, ring.y)}
              ref={(el) => {
                if (!el || el.getAttribute("data-animated")) return;
                el.setAttribute("data-animated", "true");
                gsap.set(el, {
                  scale: 0.5,
                  "--stroke-width": strokeWidth,
                });
                gsap
                  .timeline()
                  .to(
                    el,
                    {
                      scale: 2,
                      "--stroke-width": 0,
                      duration,
                      ease: "power3.out",
                      onComplete: () =>
                        setRings((prev) => prev.filter((r) => r.id !== ring.id)),
                    },
                    0
                  )
                  .to(
                    el,
                    {
                      opacity: 0,
                      duration: duration * 0.2,
                      ease: "linear",
                    },
                    duration * 0.8
                  );
              }}
            >
              <circle
                cx={effectSize / 2}
                cy={effectSize / 2}
                r={effectSize / 4}
                fill="none"
                stroke={color}
                strokeWidth="var(--stroke-width, 3)"
              />
            </svg>
          ))}

        {/* 2. Burst */}
        {mode === "burst" &&
          bursts.map((burst) => (
            <svg
              key={burst.id}
              style={svgStyle(burst.x, burst.y)}
              ref={(el) => {
                if (!el || el.getAttribute("data-animated")) return;
                el.setAttribute("data-animated", "true");
                const lines = el.querySelectorAll("line");
                lines.forEach((line, index) => {
                  const angle = [45, 80, 115, 150][index] * (Math.PI / 180);
                  const centerX = effectSize / 2;
                  const centerY = effectSize / 2;
                  const startX = centerX + effectSize * 0.1 * Math.cos(angle);
                  const startY = centerY - effectSize * 0.1 * Math.sin(angle);
                  const endX = centerX + effectSize * 0.25 * Math.cos(angle);
                  const endY = centerY - effectSize * 0.25 * Math.sin(angle);
                  gsap.set(line, {
                    attr: {
                      x1: startX,
                      y1: startY,
                      x2: endX,
                      y2: endY,
                    },
                    strokeWidth,
                  });
                  gsap
                    .timeline()
                    .to(line, {
                      attr: {
                        x1: endX,
                        y1: endY,
                        x2: endX,
                        y2: endY,
                      },
                      translateX: (effectSize / 4) * Math.cos(angle),
                      translateY: (-effectSize / 4) * Math.sin(angle),
                      duration,
                      ease: "power2.out",
                      onComplete: () =>
                        setBursts((prev) => prev.filter((b) => b.id !== burst.id)),
                    })
                    .to(
                      line,
                      {
                        strokeWidth: 0,
                        duration: duration * 0.4,
                        ease: "linear",
                      },
                      duration * 0.6
                    );
                });
              }}
            >
              {[45, 80, 115, 150].map((_, index) => {
                const centerX = effectSize / 2;
                const centerY = effectSize / 2;
                return (
                  <line
                    key={index}
                    x1={centerX}
                    y1={centerY}
                    x2={centerX}
                    y2={centerY}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="square"
                  />
                );
              })}
            </svg>
          ))}

        {/* 3. Particles */}
        {mode === "particles" &&
          particles.map((particle) => (
            <div
              key={particle.id}
              style={{
                position: "fixed",
                transformOrigin: "center",
                left: particle.x - strokeWidth / 2,
                top: particle.y - strokeWidth / 2,
                width: strokeWidth,
                height: strokeWidth,
                backgroundColor: color,
                borderRadius: "50%",
                pointerEvents: "none",
                transform: `rotate(${rotation}deg)`,
                zIndex: 99999,
              }}
              ref={(el) => {
                if (!el || el.getAttribute("data-animated")) return;
                el.setAttribute("data-animated", "true");
                const finalX =
                  particle.x + Math.cos(particle.angle) * particle.distance;
                const finalY =
                  particle.y + Math.sin(particle.angle) * particle.distance;
                gsap.set(el, {
                  left: particle.x - strokeWidth / 2,
                  top: particle.y - strokeWidth / 2,
                  width: 0,
                  height: 0,
                });
                gsap
                  .timeline()
                  .to(el, {
                    width: strokeWidth,
                    height: strokeWidth,
                    duration: duration * 0.2,
                    ease: "power1.out",
                  })
                  .to(
                    el,
                    {
                      left: finalX - strokeWidth / 2,
                      top: finalY - strokeWidth / 2,
                      duration: duration * 0.4,
                      ease: "power1.out",
                    },
                    duration * 0.2
                  )
                  .to(
                    el,
                    {
                      width: 0,
                      height: 0,
                      left: finalX,
                      top: finalY,
                      duration: duration * 0.4,
                      ease: "linear",
                      onComplete: () =>
                        setParticles((prev) =>
                          prev.filter((p) => p.id !== particle.id)
                        ),
                    },
                    duration * 0.6
                  );
              }}
            />
          ))}

        {/* 4. Crosshair */}
        {mode === "crosshair" &&
          crosshairs.map((crosshair) => (
            <svg
              key={crosshair.id}
              style={svgStyle(crosshair.x, crosshair.y)}
              ref={(el) => {
                if (!el || el.getAttribute("data-animated")) return;
                el.setAttribute("data-animated", "true");
                const lines = el.querySelectorAll("line");
                lines.forEach((line, index) => {
                  const angle = [0, 90, 180, 270][index] * (Math.PI / 180);
                  const centerX = effectSize / 2;
                  const centerY = effectSize / 2;
                  const lineLength = effectSize * 0.3;
                  const startX = centerX + 20 * Math.cos(angle);
                  const startY = centerY - 20 * Math.sin(angle);
                  const endX = centerX + (20 + lineLength) * Math.cos(angle);
                  const endY = centerY - (20 + lineLength) * Math.sin(angle);
                  gsap.set(line, {
                    attr: {
                      x1: startX,
                      y1: startY,
                      x2: centerX,
                      y2: centerY,
                    },
                    strokeWidth,
                  });
                  gsap
                    .timeline()
                    .to(line, {
                      attr: {
                        x1: endX,
                        y1: endY,
                        x2: endX,
                        y2: endY,
                      },
                      duration: duration * 0.8,
                      ease: "power1.out",
                    })
                    .to(
                      line,
                      {
                        strokeWidth: 0,
                        duration: duration * 0.6,
                        ease: "linear",
                        onComplete: () =>
                          setCrosshairs((prev) =>
                            prev.filter((c) => c.id !== crosshair.id)
                          ),
                      },
                      duration * 0.4
                    );
                });
              }}
            >
              {[0, 90, 180, 270].map((_, index) => {
                const centerX = effectSize / 2;
                const centerY = effectSize / 2;
                return (
                  <line
                    key={index}
                    x1={centerX}
                    y1={centerY}
                    x2={centerX}
                    y2={centerY}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="square"
                  />
                );
              })}
            </svg>
          ))}

        {/* 5. Wavy */}
        {mode === "wavy" &&
          wavies.map((wavy) => (
            <svg
              key={wavy.id}
              style={svgStyle(wavy.x, wavy.y)}
              ref={(el) => {
                if (!el || el.getAttribute("data-animated")) return;
                el.setAttribute("data-animated", "true");
                const paths = el.querySelectorAll("path");
                paths.forEach((path) => {
                  const pathLength = path.getTotalLength();
                  gsap.set(path, {
                    strokeDasharray: "1, " + pathLength,
                    strokeDashoffset: 0,
                    strokeWidth,
                  });
                  gsap
                    .timeline()
                    .to(path, {
                      strokeDasharray: `${pathLength}, ${pathLength}`,
                      strokeDashoffset: -pathLength,
                      duration,
                      ease: "power1.out",
                    })
                    .to(
                      path,
                      {
                        strokeWidth: 0,
                        duration: duration * 0.4,
                        ease: "linear",
                      },
                      duration * 0.6
                    );
                });
                gsap.delayedCall(duration, () =>
                  setWavies((prev) => prev.filter((w) => w.id !== wavy.id))
                );
              }}
            >
              {[45, 90, 135, 180].map((angle, index) => {
                const centerX = effectSize / 2;
                const centerY = effectSize / 2;
                const startRadius = effectSize * 0.1;
                const endRadius = effectSize * 0.5;
                const rad = (angle * Math.PI) / 180;
                const startX = centerX + startRadius * Math.cos(rad);
                const startY = centerY - startRadius * Math.sin(rad);
                const endX = centerX + endRadius * Math.cos(rad);
                const endY = centerY - endRadius * Math.sin(rad);
                const midX = (startX + endX) / 2;
                const midY = (startY + endY) / 2;
                const waveOffset = effectSize * 0.05;
                const control1X = midX + waveOffset * Math.cos(rad + Math.PI / 2);
                const control1Y = midY - waveOffset * Math.sin(rad + Math.PI / 2);
                const wavyPath = `M ${startX} ${startY} Q ${control1X} ${control1Y} ${midX} ${midY} T ${endX} ${endY}`;
                return (
                  <path
                    key={index}
                    d={wavyPath}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    fill="none"
                  />
                );
              })}
            </svg>
          ))}

        {/* 6. Sniper (Default) */}
        {mode === "sniper" &&
          snipers.map((sniper) => (
            <div key={sniper.id}>
              <svg
                style={svgStyle(sniper.x, sniper.y)}
                ref={(el) => {
                  if (!el || el.getAttribute("data-animated")) return;
                el.setAttribute("data-animated", "true");
                  const lines = el.querySelectorAll("line");
                  lines.forEach((line, index) => {
                    const angle = [0, 90, 180, 270][index] * (Math.PI / 180);
                    const centerX = effectSize / 2;
                    const centerY = effectSize / 2;
                    const lineLength = effectSize * 0.2;
                    const startX = centerX + 5 * Math.cos(angle);
                    const startY = centerY - 5 * Math.sin(angle);
                    const endX = centerX + (5 + lineLength) * Math.cos(angle);
                    const endY = centerY - (5 + lineLength) * Math.sin(angle);
                    gsap.set(line, {
                      attr: {
                        x1: startX,
                        y1: startY,
                        x2: endX,
                        y2: endY,
                      },
                      strokeWidth,
                    });
                    gsap
                      .timeline()
                      .to(line, {
                        attr: {
                          x1: endX,
                          y1: endY,
                          x2: endX,
                          y2: endY,
                        },
                        translateX: (5 + lineLength) * Math.cos(angle),
                        translateY: -(5 + lineLength) * Math.sin(angle),
                        duration,
                        ease: "power2.out",
                      })
                      .to(
                        line,
                        {
                          strokeWidth: 0,
                          duration: duration * 0.4,
                          ease: "linear",
                        },
                        duration * 0.6
                      );
                  });
                }}
              >
                {[0, 90, 180, 270].map((_, index) => {
                  const centerX = effectSize / 2;
                  const centerY = effectSize / 2;
                  return (
                    <line
                      key={index}
                      x1={centerX}
                      y1={centerY}
                      x2={centerX}
                      y2={centerY}
                      stroke={color}
                      strokeWidth={strokeWidth}
                      strokeLinecap="square"
                    />
                  );
                })}
              </svg>
              {[
                Math.PI / 3,
                (2 * Math.PI) / 3,
                (4 * Math.PI) / 3,
                (5 * Math.PI) / 3,
                Math.PI / 6,
                (5 * Math.PI) / 6,
                (7 * Math.PI) / 6,
                (11 * Math.PI) / 6,
              ].map((angle, index) => (
                <div
                  key={index}
                  style={{
                    position: "fixed",
                    left: sniper.x - strokeWidth / 2,
                    top: sniper.y - strokeWidth / 2,
                    width: strokeWidth,
                    height: strokeWidth,
                    backgroundColor: color,
                    pointerEvents: "none",
                    transformOrigin: "center",
                    transform: `rotate(${rotation}deg)`,
                    zIndex: 99999,
                  }}
                  ref={(el) => {
                    if (!el || el.getAttribute("data-animated")) return;
                el.setAttribute("data-animated", "true");
                    gsap.set(el, {
                      x: 0,
                      y: 0,
                      width: strokeWidth,
                      height: strokeWidth,
                    });
                    gsap
                      .timeline()
                      .to(el, {
                        x: Math.cos(angle) * (effectSize * 0.4),
                        y: Math.sin(angle) * (effectSize * 0.4),
                        duration,
                        ease: "power2.out",
                        onComplete: () =>
                          setSnipers((prev) =>
                            prev.filter((s) => s.id !== sniper.id)
                          ),
                      })
                      .to(
                        el,
                        {
                          width: 0,
                          height: 0,
                          duration: duration * 0.4,
                          ease: "linear",
                        },
                        duration * 0.6
                      );
                  }}
                />
              ))}
            </div>
          ))}
      </div>

      {/* Interactive Mode Dock (Discreet Bottom-Left Pill) */}
      {showDock && (
        <div className="fixed bottom-5 left-5 z-[9990] flex items-center gap-2 rounded-full border border-white/10 bg-ink-950/85 px-3 py-1.5 text-xs text-slate-300 backdrop-blur-md shadow-2xl transition-all duration-200 hover:border-accent/40">
          <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
            Click FX:
          </span>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as InteractionMode)}
            className="click-effect-ignore bg-transparent text-white font-medium text-xs focus:outline-none cursor-pointer pr-1"
            title="Switch Click Interaction Effect"
            aria-label="Switch Click Effect Mode"
          >
            <option value="sniper" className="bg-ink-900 text-white">
              Sniper
            </option>
            <option value="crosshair" className="bg-ink-900 text-white">
              Crosshair
            </option>
            <option value="rings" className="bg-ink-900 text-white">
              Rings
            </option>
            <option value="burst" className="bg-ink-900 text-white">
              Burst
            </option>
            <option value="particles" className="bg-ink-900 text-white">
              Particles
            </option>
            <option value="wavy" className="bg-ink-900 text-white">
              Wavy
            </option>
          </select>
        </div>
      )}
    </>
  );
}
