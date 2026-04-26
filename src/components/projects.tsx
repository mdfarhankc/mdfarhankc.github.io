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
    <section id="projects" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
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
