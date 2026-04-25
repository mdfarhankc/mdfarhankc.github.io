import { getAllProjects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Farhan",
  description:
    "Explore all projects by Mohammed Farhan K C — professional and personal work in Python, Odoo, FastAPI, React, and more.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>
        </div>

        <div className="mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            All Projects
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My <span className="text-primary">work</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A collection of professional projects and personal open-source work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block h-full"
            >
              <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden ${project.image ? "" : `bg-gradient-to-br ${project.gradient}`}`}
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
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
