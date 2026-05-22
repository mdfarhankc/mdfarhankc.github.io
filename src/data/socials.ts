import type { ComponentType } from "react";
import { Mail } from "lucide-react";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/brand-icons";

type SocialIcon = ComponentType<{ size?: number; className?: string }>;

export interface Social {
  icon: SocialIcon;
  href: string;
  label: string;
}

export const socials: Social[] = [
  {
    icon: GithubIcon,
    href: "https://github.com/mdfarhankc",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/mdfarhankc",
    label: "LinkedIn",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/md_farhankc",
    label: "Instagram",
  },
  {
    icon: FacebookIcon,
    href: "https://facebook.com/mdfarhankc",
    label: "Facebook",
  },
  {
    icon: Mail,
    href: "mailto:kcfarhan123@gmail.com",
    label: "Email",
  },
];
