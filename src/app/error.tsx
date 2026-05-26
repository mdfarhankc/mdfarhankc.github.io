"use client";

import { Home, RotateCcw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Stars */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 10% 20%, white 50%, transparent 100%), radial-gradient(1px 1px at 30% 65%, white 50%, transparent 100%), radial-gradient(1px 1px at 55% 15%, white 50%, transparent 100%), radial-gradient(1px 1px at 70% 75%, white 50%, transparent 100%), radial-gradient(1px 1px at 85% 35%, white 50%, transparent 100%), radial-gradient(1px 1px at 45% 85%, white 50%, transparent 100%), radial-gradient(1px 1px at 20% 50%, white 50%, transparent 100%), radial-gradient(1.5px 1.5px at 90% 10%, white 50%, transparent 100%), radial-gradient(1.5px 1.5px at 5% 80%, white 50%, transparent 100%), radial-gradient(1px 1px at 60% 45%, white 50%, transparent 100%), radial-gradient(1px 1px at 75% 55%, white 50%, transparent 100%), radial-gradient(1.5px 1.5px at 35% 35%, white 50%, transparent 100%)",
          backgroundSize: "300px 300px",
          animation: "drift 60s linear infinite",
        }}
      />
      {/* Subtle nebula glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-white/3 blur-[120px]" />
        <div className="absolute right-1/3 bottom-1/3 h-64 w-64 rounded-full bg-white/2 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-white/60 uppercase">
          Something went wrong
        </p>
        <h1 className="mb-6 text-7xl leading-tight font-bold tracking-tight sm:text-8xl md:text-9xl">
          <span
            className="bg-linear-to-r from-white/50 via-white to-white/50 bg-size-[200%_auto] bg-clip-text text-transparent"
            style={{ animation: "shimmer 3s ease-in-out infinite" }}
          >
            Mission failed
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-md text-lg text-white/40">
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
