"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, Stripe payments, and an admin dashboard built for scale.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    image: "from-violet-600/20 to-indigo-600/20",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Studio",
    description:
      "An AI-powered content generation platform with real-time collaboration, version history, and team management features.",
    tags: ["React", "Node.js", "OpenAI", "WebSocket", "MongoDB"],
    image: "from-cyan-600/20 to-teal-600/20",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A real-time analytics dashboard with interactive charts, custom reports, and automated insights for SaaS businesses.",
    tags: ["Next.js", "D3.js", "Python", "FastAPI", "Redis"],
    image: "from-orange-600/20 to-rose-600/20",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media App",
    description:
      "A modern social platform with real-time messaging, stories, and an algorithmic feed. Built for performance at scale.",
    tags: ["React Native", "GraphQL", "AWS", "DynamoDB", "S3"],
    image: "from-emerald-600/20 to-lime-600/20",
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
                  className={`relative h-48 bg-gradient-to-br ${project.image} flex items-center justify-center`}
                >
                  <div className="text-6xl font-bold text-foreground/10">
                    {project.title.charAt(0)}
                  </div>
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Button
                      size="sm"
                      variant="secondary"
                      render={
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      render={
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
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
