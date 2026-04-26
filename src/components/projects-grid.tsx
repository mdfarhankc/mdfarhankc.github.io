"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
              <Link
                href={`/projects/${project.slug}`}
                className="block h-full"
              >
                <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <div
                    className={`relative flex h-48 items-center justify-center overflow-hidden ${
                      project.image
                        ? ""
                        : `bg-gradient-to-br ${project.gradient}`
                    }`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-6xl font-bold text-foreground/10">
                        {project.title.charAt(0)}
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 flex gap-2">
                      {project.githubUrl && (
                        <Badge
                          variant="secondary"
                          className="gap-1 text-xs opacity-70 group-hover:opacity-100 transition-opacity"
                        >
                          <Github className="h-3 w-3" />
                          Open Source
                        </Badge>
                      )}
                      <Badge
                        variant="secondary"
                        className="text-xs capitalize opacity-70 group-hover:opacity-100 transition-opacity"
                      >
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="space-y-4 p-6">
                    <h2 className="text-xl font-semibold transition-colors group-hover:text-primary">
                      {project.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
