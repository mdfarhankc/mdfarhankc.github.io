"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "ERP Management System",
    description:
      "A comprehensive ERP solution built with Odoo for managing inventory, sales, accounting, and HR modules for a mid-size enterprise.",
    tags: ["Odoo", "Python", "PostgreSQL", "Docker"],
    gradient: "from-violet-600/20 to-indigo-600/20",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "REST API Platform",
    description:
      "A high-performance API platform built with FastAPI featuring JWT authentication, role-based access control, and auto-generated docs.",
    tags: ["FastAPI", "Python", "PostgreSQL", "Docker"],
    gradient: "from-cyan-600/20 to-teal-600/20",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Full Stack Web App",
    description:
      "A modern web application with Django backend and React frontend, featuring real-time updates, dashboards, and user management.",
    tags: ["Django", "React", "TypeScript", "PostgreSQL"],
    gradient: "from-orange-600/20 to-rose-600/20",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Next.js Portfolio",
    description:
      "This portfolio website built with Next.js, Tailwind CSS, shadcn/ui, and Motion — showcasing modern frontend development practices.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    gradient: "from-emerald-600/20 to-lime-600/20",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Featured Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Things I&apos;ve <span className="text-primary">built</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                {/* Gradient header */}
                <div
                  className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="text-6xl font-bold text-foreground/10">
                    {project.title.charAt(0)}
                  </div>
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight className="mr-1 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <CardContent className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
