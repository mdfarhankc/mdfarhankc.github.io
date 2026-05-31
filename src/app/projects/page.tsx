import { getAllProjects } from "@/data/projects";
import { ProjectsGrid } from "@/components/projects-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Farhan",
  description:
    "Explore all projects by Mohammed Farhan K C - professional and personal work in Python, Odoo, FastAPI, React, and more.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main id="main-content" className="min-h-screen px-6 pt-32 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-primary mb-2 font-mono text-sm tracking-widest uppercase">
            All Projects
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My <span className="text-primary">work</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A collection of professional projects and personal open-source work.
          </p>
        </div>

        <ProjectsGrid projects={projects} />
      </div>
    </main>
  );
}
