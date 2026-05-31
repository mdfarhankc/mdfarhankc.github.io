"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { ProjectCard } from "@/components/project-card";
import {
  PROJECT_KIND_LABEL,
  PROJECT_OWNERSHIP_LABEL,
} from "@/data/projects";
import type { Project, ProjectKind, ProjectOwnership } from "@/types";

type KindFilter = "all" | ProjectKind;
type OwnershipFilter = "all" | ProjectOwnership;

const KIND_FILTERS: { value: KindFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "fullstack", label: PROJECT_KIND_LABEL.fullstack },
  { value: "frontend", label: PROJECT_KIND_LABEL.frontend },
  { value: "backend", label: PROJECT_KIND_LABEL.backend },
  { value: "library", label: PROJECT_KIND_LABEL.library },
];

const OWNERSHIP_FILTERS: { value: OwnershipFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "personal", label: PROJECT_OWNERSHIP_LABEL.personal },
  { value: "professional", label: PROJECT_OWNERSHIP_LABEL.professional },
];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [kindFilter, setKindFilter] = useState<KindFilter>("all");
  const [ownershipFilter, setOwnershipFilter] =
    useState<OwnershipFilter>("all");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (kindFilter !== "all" && p.kind !== kindFilter) return false;
      if (ownershipFilter !== "all" && p.ownership !== ownershipFilter)
        return false;
      return true;
    });
  }, [projects, kindFilter, ownershipFilter]);

  return (
    <>
      <FilterRow
        label="Kind"
        layoutId="kind-filter-bg"
        options={KIND_FILTERS}
        value={kindFilter}
        onChange={setKindFilter}
      />
      <FilterRow
        label="Ownership"
        layoutId="ownership-filter-bg"
        options={OWNERSHIP_FILTERS}
        value={ownershipFilter}
        onChange={setOwnershipFilter}
        className="mb-10"
      />

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
        <div className="text-muted-foreground flex justify-center py-16 text-sm">
          No projects match these filters yet.
        </div>
      )}
    </>
  );
}

interface FilterRowProps<T extends string> {
  label: string;
  layoutId: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

function FilterRow<T extends string>({
  label,
  layoutId,
  options,
  value,
  onChange,
  className = "mb-4",
}: FilterRowProps<T>) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-muted-foreground mr-1 font-mono text-xs tracking-widest uppercase">
        {label}
      </span>
      {options.map((o) => {
        const active = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`relative rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "border-primary/50 text-primary"
                : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
            }`}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="bg-primary/10 absolute inset-0 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
