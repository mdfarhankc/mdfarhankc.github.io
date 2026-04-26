"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/projects";

type Filter = "all" | "professional" | "personal" | "open-source";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "professional", label: "Professional" },
  { value: "personal", label: "Personal" },
  { value: "open-source", label: "Open Source" },
];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    if (filter === "open-source")
      return projects.filter((p) => Boolean(p.githubUrl));
    return projects.filter((p) => p.type === filter);
  }, [projects, filter]);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`relative rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active
                  ? "border-primary/50 text-primary"
                  : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-bg"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{f.label}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="flex justify-center py-16 text-sm text-muted-foreground">
          No projects in this category yet.
        </div>
      )}
    </>
  );
}
