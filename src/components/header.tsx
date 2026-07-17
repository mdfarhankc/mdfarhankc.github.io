"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Progressive blur behind the pill (iOS-style): stacked backdrop-blur layers,
// each masked to a band so the blur ramps from strongest at the top edge to
// clear lower down, instead of a single hard-edged blur.
const BLUR_LAYERS = [
  {
    blur: 24,
    mask: "linear-gradient(to bottom, black 0%, black 10%, transparent 22%)",
  },
  {
    blur: 16,
    mask: "linear-gradient(to bottom, transparent 8%, black 20%, black 30%, transparent 42%)",
  },
  {
    blur: 10,
    mask: "linear-gradient(to bottom, transparent 25%, black 38%, black 48%, transparent 60%)",
  },
  {
    blur: 5,
    mask: "linear-gradient(to bottom, transparent 42%, black 55%, black 65%, transparent 78%)",
  },
  {
    blur: 2,
    mask: "linear-gradient(to bottom, transparent 58%, black 72%, black 82%, transparent 95%)",
  },
  {
    blur: 1,
    mask: "linear-gradient(to bottom, transparent 75%, black 90%, transparent 100%)",
  },
];

export function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // Sections only exist on the home page; elsewhere nothing is highlighted.
  const currentActive = onHome ? activeSection : "";

  // Header background swap - single cheap scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section highlight - IntersectionObserver, only on home where sections exist
  useEffect(() => {
    if (!onHome) return;
    const observers: IntersectionObserver[] = [];
    for (const { id } of links) {
      const el = document.getElementById(id);
      if (!el) continue;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-100px 0px -85% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, [onHome]);

  return (
    <>
      {/* Progressive blur band that fades in as content scrolls under the pill */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed inset-x-0 top-0 z-40 h-[68px] transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      >
        {BLUR_LAYERS.map((layer, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${layer.blur}px)`,
              WebkitBackdropFilter: `blur(${layer.blur}px)`,
              maskImage: layer.mask,
              WebkitMaskImage: layer.mask,
            }}
          />
        ))}
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
      >
        <div className="w-full max-w-6xl">
          <nav
            aria-label="Primary"
            className={cn(
              "flex items-center justify-between gap-4 rounded-full px-4 transition-all duration-300 ease-out sm:px-5",
              scrolled
                ? "border-border bg-background/70 mt-3 h-14 border shadow-lg shadow-black/5 backdrop-blur-xl"
                : "mt-0 h-16 border border-transparent bg-transparent",
            )}
          >
            <Logo />

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 md:flex">
              {links.map((link) => {
                const isActive = currentActive === link.id;
                return (
                  <li key={link.id}>
                    <Link
                      href={`/#${link.id}`}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative rounded-md px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="bg-primary absolute right-3 bottom-1 left-3 h-0.5 rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right cluster */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button size="sm" asChild className="hidden md:inline-flex">
                <Link href="/#contact">Let&apos;s Talk</Link>
              </Button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-foreground md:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="border-border bg-background/90 mt-2 overflow-hidden rounded-2xl border shadow-lg shadow-black/5 backdrop-blur-xl md:hidden"
              >
                <ul className="flex flex-col gap-1 p-3">
                  {links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={`/#${link.id}`}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 text-base transition-colors",
                          currentActive === link.id
                            ? "text-primary bg-muted/60 font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-1">
                    <Button className="w-full" asChild>
                      <Link
                        href="/#contact"
                        onClick={() => setMobileOpen(false)}
                      >
                        Let&apos;s Talk
                      </Link>
                    </Button>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
