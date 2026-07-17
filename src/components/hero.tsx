"use client";

import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Download, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WaveBackground } from "@/components/wave-background";
import { socials } from "@/data/socials";
import { highlights } from "@/data/stats";

const ROLES = [
  "FastAPI Specialist",
  "Python Full Stack Developer",
  "Open-Source Maintainer",
  "Backend Engineer",
];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Animated diagonal light ribbons */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <WaveBackground />
      </div>

      {/* Ambient emerald glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-1/2 h-[520px] w-[820px] max-w-[95vw] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--primary) 22%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-600 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/15 dark:text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-accent-ink mb-4 flex h-5 items-center justify-center font-mono text-sm tracking-widest uppercase"
          aria-hidden="true"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={ROLES[roleIndex]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {ROLES[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        <span className="sr-only">{ROLES[0]}</span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl md:text-7xl lg:text-8xl"
        >
          {"Hi, I'm "}
          <span
            className="from-primary via-chart-2 to-primary bg-linear-to-r bg-size-[200%_auto] bg-clip-text text-transparent"
            style={{ animation: "gradient-shift 4s ease-in-out infinite" }}
          >
            Farhan
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-muted-foreground mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm"
        >
          {highlights.map((item, i) => (
            <Fragment key={item.label}>
              {i > 0 && <span className="text-accent-ink/40">•</span>}
              <span
                className={
                  item.emphasis ? "text-accent-ink font-medium" : undefined
                }
              >
                {item.label}
              </span>
            </Fragment>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground mx-auto mb-10 max-w-2xl text-base leading-relaxed font-medium text-balance sm:text-lg"
        >
          I architect scalable backends with Python and FastAPI, and pair them
          with polished React frontends - complete products, not just features.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            className="h-11 w-full px-8 text-base sm:w-auto"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 w-full px-8 text-base sm:w-auto"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4 sm:mt-12 sm:gap-5"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="border-border text-muted-foreground hover:border-primary/50 hover:text-primary hover:shadow-primary/10 rounded-full border p-2.5 transition-all hover:shadow-lg sm:p-3"
            >
              <Icon size={18} className="sm:h-5 sm:w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-muted-foreground hover:text-accent-ink absolute bottom-10 left-1/2 -translate-x-1/2 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} aria-hidden="true" />
        </motion.div>
      </motion.a>
    </section>
  );
}
