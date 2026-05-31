import Link from "next/link";
import type { Route } from "next";

import { Separator } from "@/components/ui/separator";
import { socials } from "@/data/socials";

const navLinks: { href: Route; label: string }[] = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pt-20 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="from-primary to-chart-2 bg-linear-to-r bg-clip-text text-xl font-bold tracking-tight text-transparent"
            >
              FKC.
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Python Full Stack Developer building scalable backends and
              polished React frontends.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <h2 className="text-foreground mb-4 text-sm font-semibold">
              Explore
            </h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <h2 className="text-foreground mb-4 text-sm font-semibold">
              Connect
            </h2>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="border-border text-muted-foreground hover:border-primary/50 hover:text-primary rounded-full border p-2.5 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="text-muted-foreground flex flex-col items-center justify-between gap-3 font-mono text-xs sm:flex-row">
          <p>&copy; {year} Mohammed Farhan K C. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Tailwind
            </a>{" "}
            &amp;{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              shadcn/ui
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
