"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  isInView?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  isInView = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={cn(align === "center" && "text-center", className)}
    >
      <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-6 text-lg text-muted-foreground",
            align === "center" ? "mx-auto max-w-xl" : "max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
