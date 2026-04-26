import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background orbs (desktop only) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-chart-2/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase">
          Error 404
        </p>
        <h1 className="mb-6 text-7xl font-bold leading-tight tracking-tight sm:text-8xl md:text-9xl">
          <span className="bg-linear-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
            Lost in space
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-md text-lg text-muted-foreground">
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
