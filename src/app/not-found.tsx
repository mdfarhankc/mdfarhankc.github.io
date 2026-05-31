import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Stars - night only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-70 dark:block"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 15% 25%, white 50%, transparent 100%), radial-gradient(1.5px 1.5px at 75% 65%, white 50%, transparent 100%), radial-gradient(1px 1px at 45% 15%, white 50%, transparent 100%), radial-gradient(1.5px 1.5px at 85% 85%, white 50%, transparent 100%), radial-gradient(1px 1px at 25% 75%, white 50%, transparent 100%), radial-gradient(1px 1px at 60% 40%, white 50%, transparent 100%)",
          backgroundSize: "400px 400px",
          animation: "drift 60s linear infinite",
        }}
      />

      {/* Shooting star - night only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] left-[12%] hidden h-px w-32 bg-gradient-to-r from-white/70 to-transparent dark:block"
        style={{ animation: "shooting-star-slow 11s ease-out infinite" }}
      />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="text-muted-foreground mb-4 font-mono text-sm tracking-widest uppercase">
          Error 404
        </p>
        <h1 className="mb-6 text-7xl leading-tight font-bold tracking-tight sm:text-8xl md:text-9xl">
          <span className="shimmer-text from-foreground/40 via-foreground to-foreground/40 bg-linear-to-r bg-size-[200%_auto] bg-clip-text text-transparent">
            Lost in space
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto mb-10 max-w-md text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="px-8" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="px-8" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
