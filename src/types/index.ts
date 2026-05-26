import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

export interface Experience {
  type: "work" | "experience";
  title: string;
  organization: string;
  period: string;
  highlight?: string;
  description: string;
  tags: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  gradient: string;
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  type: "professional" | "personal";
  highlights: string[];
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

type SocialIcon = ComponentType<{ size?: number; className?: string }>;

export interface Social {
  icon: SocialIcon;
  href: string;
  label: string;
}

export interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface Highlight {
  label: string;
  emphasis?: boolean;
}
