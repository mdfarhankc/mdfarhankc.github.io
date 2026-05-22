"use client";

import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
import { useFadeInView } from "@/lib/use-fade-in-view";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const { ref, isInView } = useFadeInView();

  return (
    <section id="skills" className="relative px-6 py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="bg-primary/5 absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills & Tools"
          title={
            <>
              My <span className="text-primary">tech stack</span>
            </>
          }
          isInView={isInView}
          className="mb-16"
        />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + catIndex * 0.15 }}
            >
              <h3 className="text-foreground mb-6 text-lg font-semibold">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + catIndex * 0.15 + skillIndex * 0.05,
                    }}
                  >
                    <Badge
                      variant="outline"
                      className="hover:border-primary/50 hover:bg-primary/10 hover:text-primary cursor-default px-4 py-2 text-sm transition-all"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
