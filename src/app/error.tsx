"use client";

import { Home, RotateCcw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Stars - night only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-70 dark:block"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, white 50%, transparent 100%), radial-gradient(1.5px 1.5px at 70% 70%, white 50%, transparent 100%), radial-gradient(1px 1px at 40% 10%, white 50%, transparent 100%), radial-gradient(1.5px 1.5px at 88% 80%, white 50%, transparent 100%), radial-gradient(1px 1px at 30% 80%, white 50%, transparent 100%), radial-gradient(1px 1px at 65% 35%, white 50%, transparent 100%)",
          backgroundSize: "400px 400px",
          animation: "drift 60s linear infinite",
        }}
      />

      {/* Shooting star - night only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[22%] left-[18%] hidden h-px w-32 bg-gradient-to-r from-white/70 to-transparent dark:block"
        style={{ animation: "shooting-star-slow 13s ease-out infinite" }}
      />
      {/* Subtle nebula glow (dark mode only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block"
      >
        <div className="bg-foreground/5 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[120px]" />
        <div className="bg-foreground/5 absolute right-1/3 bottom-1/3 h-64 w-64 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="text-muted-foreground mb-4 font-mono text-sm tracking-widest uppercase">
          Something went wrong
        </p>
        <h1 className="mb-6 text-7xl leading-tight font-bold tracking-tight sm:text-8xl md:text-9xl">
          <span className="shimmer-text from-foreground/40 via-foreground to-foreground/40 bg-linear-to-r bg-size-[200%_auto] bg-clip-text text-transparent">
            Mission failed
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto mb-10 max-w-md text-lg">
          An unexpected error occurred. Try again or head back home.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="px-8" onClick={reset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button size="lg" variant="outline" className="px-8" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
