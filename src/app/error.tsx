"use client";

import { Home, RotateCcw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionGlow } from "@/components/section-glow";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <SectionGlow variant="top-left" />
      <SectionGlow variant="bottom" />

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
