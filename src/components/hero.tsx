"use client";

import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Download, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
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
      {/* Background orbs (dark mode + desktop only - heavy blur is expensive on mobile GPUs) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:md:block"
      >
        <div className="bg-primary/5 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[120px]" />
        <div className="bg-chart-2/5 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-[120px]" />
      </div>

      {/* Sun + clouds (light mode + desktop only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block dark:md:hidden"
      >
        <div className="bg-amber-300/25 absolute -top-20 -right-20 h-[28rem] w-[28rem] rounded-full blur-[140px]" />
        <div className="bg-sky-300/20 absolute bottom-10 -left-32 h-96 w-96 rounded-full blur-[120px]" />
        <div className="bg-sky-200/15 absolute top-1/3 right-1/3 h-72 w-72 rounded-full blur-[100px]" />
      </div>

      {/* Stars - night only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-40 dark:block"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 15% 25%, currentColor 50%, transparent 100%), radial-gradient(1.5px 1.5px at 75% 65%, currentColor 50%, transparent 100%), radial-gradient(1px 1px at 45% 15%, currentColor 50%, transparent 100%), radial-gradient(1.5px 1.5px at 85% 85%, currentColor 50%, transparent 100%), radial-gradient(1px 1px at 25% 75%, currentColor 50%, transparent 100%), radial-gradient(1px 1px at 60% 40%, currentColor 50%, transparent 100%)",
          backgroundSize: "400px 400px",
          animation: "drift 80s linear infinite",
        }}
      />

      {/* Shooting star - night only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[20%] left-[15%] hidden h-px w-32 bg-gradient-to-r from-foreground/60 to-transparent dark:block"
        style={{ animation: "shooting-star-slow 12s ease-out infinite" }}
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
          className="text-primary mb-4 flex h-5 items-center justify-center font-mono text-sm tracking-widest uppercase"
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
          className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
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
              {i > 0 && <span className="text-primary/40">•</span>}
              <span
                className={
                  item.emphasis ? "text-primary font-medium" : undefined
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
          className="text-muted-foreground mx-auto mb-10 max-w-2xl text-base leading-relaxed font-medium sm:text-lg"
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
          <Button size="default" className="px-6 sm:px-8" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="default" variant="outline" className="px-6 sm:px-8" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
        className="text-muted-foreground hover:text-primary absolute bottom-10 left-1/2 -translate-x-1/2 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket size={20} className="rotate-180" aria-hidden="true" />
        </motion.div>
      </motion.a>
    </section>
  );
}
