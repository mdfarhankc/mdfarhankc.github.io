import { Code2, Briefcase, Rocket, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { icon: Briefcase, label: "Years Experience", value: "3+" },
  { icon: Rocket, label: "Projects Delivered", value: "20+" },
  { icon: Code2, label: "Technologies", value: "15+" },
  { icon: Layers, label: "Full Stack Apps", value: "10+" },
];

export interface Highlight {
  label: string;
  emphasis?: boolean;
}

export const highlights: Highlight[] = [
  { label: "3+ years experience" },
  { label: "3 OSS libs on PyPI" },
  { label: "Currently learning Go" },
  { label: "Best Performer 2025", emphasis: true },
];
