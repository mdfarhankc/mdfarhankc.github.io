"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { useFadeInView } from "@/lib/use-fade-in-view";
import { getFeaturedProjects } from "@/data/projects";

const featured = getFeaturedProjects();

export function Projects() {
  const { ref, isInView } = useFadeInView();

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32">
      {/* Drifting stars - night only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-30 dark:block"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, currentColor 50%, transparent 100%), radial-gradient(1.5px 1.5px at 60% 10%, currentColor 50%, transparent 100%), radial-gradient(1px 1px at 40% 80%, currentColor 50%, transparent 100%), radial-gradient(1px 1px at 75% 50%, currentColor 50%, transparent 100%), radial-gradient(1.5px 1.5px at 10% 65%, currentColor 50%, transparent 100%), radial-gradient(1px 1px at 85% 85%, currentColor 50%, transparent 100%)",
          backgroundSize: "400px 400px",
          animation: "drift 90s linear infinite",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Featured Work"
          title={
            <>
              Things I&apos;ve <span className="text-primary">built</span>
            </>
          }
          isInView={isInView}
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Button size="lg" variant="outline" className="px-8" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
