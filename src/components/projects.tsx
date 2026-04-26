"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ArrowRight, Github } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";

const featured = getFeaturedProjects();

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
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  {/* Image / gradient header */}
                  <div
                    className={`relative flex aspect-3/1 items-center justify-center overflow-hidden bg-linear-to-br ${project.gradient}`}
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
                    {project.githubUrl && (
                      <div className="absolute bottom-3 right-3">
                        <Badge
                          variant="secondary"
                          className="gap-1 text-xs opacity-70 group-hover:opacity-100 transition-opacity"
                        >
                          <Github className="h-3 w-3" />
                          Open Source
                        </Badge>
                      </div>
                    )}
                    {project.type === "professional" && (
                      <div className="absolute bottom-3 right-3">
                        <Badge
                          variant="secondary"
                          className="text-xs opacity-70 group-hover:opacity-100 transition-opacity"
                        >
                          Professional
                        </Badge>
                      </div>
                    )}
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
              </Link>
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
