import { notFound } from "next/navigation";

import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";

import { BackButton } from "@/components/back-button";
import { GithubIcon } from "@/components/icons/brand-icons";
import Image from "next/image";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Farhan`,
    description: project.description,
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main id="main-content" className="min-h-screen px-6 pt-32 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <BackButton fallbackHref="/projects" variant="ghost" size="sm">
            Back
          </BackButton>
        </div>

        {/* Title block */}
        <div className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="capitalize">
              {project.type}
            </Badge>
            {project.githubUrl && (
              <Badge variant="outline" className="gap-1">
                <GithubIcon className="h-3 w-3" />
                Open Source
              </Badge>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
        </div>

        {/* 2-col layout: content + sidebar */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Main content (left) */}
          <div className="space-y-10 md:col-span-2">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.longDescription}
            </p>

            {/* Highlights */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <h2 className="mb-6 text-xl font-semibold">Key Highlights</h2>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar (right on desktop, hoisted above content on mobile) */}
          <aside className="order-first space-y-6 md:order-none md:sticky md:top-32 md:self-start">
            {/* Cover image */}
            <div
              className={`border-border/50 relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border bg-linear-to-br ${project.gradient}`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                />
              ) : (
                <span className="text-foreground/10 text-6xl font-bold">
                  {project.title.charAt(0)}
                </span>
              )}
            </div>

            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex flex-col gap-2">
                {project.liveUrl && (
                  <Button className="w-full justify-center" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    className="w-full justify-center"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="mr-2 h-4 w-4" />
                      Source Code
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                )}
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h2 className="text-muted-foreground mb-3 font-mono text-xs tracking-widest uppercase">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-16 flex justify-center">
          <BackButton fallbackHref="/projects">Back</BackButton>
        </div>
      </div>
    </main>
  );
}
