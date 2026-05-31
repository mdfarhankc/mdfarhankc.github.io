import Link from "next/link";
import Image from "next/image";

import { GithubIcon } from "@/components/icons/brand-icons";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECT_KIND_LABEL } from "@/data/projects";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Card className="group border-border/50 bg-card/50 hover:border-primary/30 hover:shadow-primary/5 h-full overflow-hidden backdrop-blur-sm transition-all hover:shadow-xl">
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
            <div className="text-foreground/10 text-6xl font-bold">
              {project.title.charAt(0)}
            </div>
          )}
          <div className="absolute right-3 bottom-3 flex gap-2">
            {project.githubUrl && (
              <Badge
                variant="secondary"
                className="gap-1 text-xs opacity-70 transition-opacity group-hover:opacity-100"
              >
                <GithubIcon className="h-3 w-3" />
                Open Source
              </Badge>
            )}
            <Badge
              variant="secondary"
              className="text-xs opacity-70 transition-opacity group-hover:opacity-100"
            >
              {PROJECT_KIND_LABEL[project.kind]}
            </Badge>
          </div>
        </div>

        <CardContent className="space-y-4 p-6">
          <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
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
  );
}
