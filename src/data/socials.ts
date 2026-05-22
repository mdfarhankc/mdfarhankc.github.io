import { Github, Instagram, Linkedin, Facebook, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Social {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socials: Social[] = [
  {
    icon: Github,
    href: "https://github.com/mdfarhankc",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/mdfarhankc",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/md_farhankc",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/mdfarhankc",
    label: "Facebook",
  },
  {
    icon: Mail,
    href: "mailto:kcfarhan123@gmail.com",
    label: "Email",
  },
];
