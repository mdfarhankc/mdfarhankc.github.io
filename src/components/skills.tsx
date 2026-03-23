"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative px-6 py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Skills & Tools
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My <span className="text-primary">tech stack</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + catIndex * 0.15 }}
            >
              <h3 className="mb-6 text-lg font-semibold text-foreground">
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
                      className="cursor-default px-4 py-2 text-sm transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
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
