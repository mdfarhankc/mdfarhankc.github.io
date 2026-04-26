import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import {
  getAllProjects,
  getProjectBySlug,
  type Project,
} from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProjectTabs } from "@/components/project-tabs";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
} from "lucide-react";
import Link from "next/link";
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

async function fetchReadme(slug: string): Promise<string | null> {
  const res = await fetch(
    `https://raw.githubusercontent.com/mdfarhankc/${slug}/main/README.md`,
  );
  return res.ok ? res.text() : null;
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const readmeMarkdown = project.showReadme ? await fetchReadme(slug) : null;

  return (
    <div className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Projects
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div
          className={`relative mb-8 flex aspect-[3/1] items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-linear-to-br ${project.gradient}`}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          ) : (
            <span className="text-8xl font-bold text-foreground/10">
              {project.title.charAt(0)}
            </span>
          )}
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Badge variant="secondary" className="capitalize">
            {project.type}
          </Badge>
          {project.githubUrl && (
            <Badge variant="outline" className="gap-1">
              <Github className="h-3 w-3" />
              Open Source
            </Badge>
          )}
        </div>

        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          {project.longDescription}
        </p>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="mb-10 flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild>
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
          </div>
        )}

        <Separator className="mb-10" />

        {/* Tech Stack */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="px-4 py-2 text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Highlights / README */}
        {project.showReadme ? (
          <ProjectTabs
            highlights={project.highlights}
            readme={<ReadmeView markdown={readmeMarkdown} project={project} />}
          />
        ) : (
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <h2 className="mb-6 text-xl font-semibold">Key Highlights</h2>
              <ul className="space-y-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Back link */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ReadmeView({
  markdown,
  project,
}: {
  markdown: string | null;
  project: Project;
}) {
  if (!markdown) {
    return (
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>README could not be loaded.</p>
        {project.githubUrl && (
          <p>
            View it directly on{" "}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        )}
      </div>
    );
  }

  return (
    <article
      className={[
        "prose prose-neutral dark:prose-invert max-w-none",
        "prose-headings:scroll-mt-24",
        "prose-a:text-primary",
        "prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5",
        "prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:border prose-pre:border-border/50 prose-pre:bg-muted/50",
        // Inline images inside paragraphs (badge rows, inline icons)
        "[&_p_img]:inline-block [&_p_img]:align-middle [&_p_img]:my-0 [&_p_img]:mx-0.5",
        // Centered paragraphs (HTML <p align="center">)
        "[&_p[align=center]]:text-center",
        "[&_h1[align=center]]:text-center [&_h2[align=center]]:text-center [&_h3[align=center]]:text-center",
        "[&_div[align=center]]:text-center",
      ].join(" ")}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
