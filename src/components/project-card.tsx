import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
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
          <div className="absolute bottom-3 right-3 flex gap-2">
            {project.githubUrl && (
              <Badge
                variant="secondary"
                className="gap-1 text-xs opacity-70 transition-opacity group-hover:opacity-100"
              >
                <Github className="h-3 w-3" />
                Open Source
              </Badge>
            )}
            <Badge
              variant="secondary"
              className="text-xs capitalize opacity-70 transition-opacity group-hover:opacity-100"
            >
              {project.type}
            </Badge>
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
