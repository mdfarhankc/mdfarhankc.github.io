"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    type: "work" as const,
    title: "Python Developer",
    organization: "AST Solutions LLC — Al Qusais, Dubai (Remote)",
    period: "March 2023 — Present",
    highlight: "Best Performer — 2025",
    description:
      "Led development of Odoo-based ERP modules across departments. Designed RESTful APIs with FastAPI and Django. Optimized PostgreSQL and MongoDB databases. Integrated Flutter apps with backend APIs. Containerized deployments with Docker. Implemented unit testing with Pytest and Odoo's test framework.",
    tags: [
      "Python",
      "FastAPI",
      "Django",
      "Odoo",
      "Flutter",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
  },
  {
    type: "work" as const,
    title: "Python Full Stack Developer Intern",
    organization: "Quest Innovative Solutions — Kannur, Kerala",
    period: "June 2022 — January 2023",
    description:
      "Developed responsive web apps using Django and Flask. Built RESTful APIs with DRF and Flask-RESTful. Enhanced performance through code refactoring and query tuning. Implemented automated tests with pytest. Designed authentication and session management modules.",
    tags: ["Python", "Django", "Flask", "DRF", "pytest", "MySQL"],
  },
  {
    type: "education" as const,
    title: "Bachelor of Computer Application",
    organization: "Jamia Hamdard, Delhi University",
    period: "2019 — 2022",
    description:
      "Studied core computer science fundamentals including data structures, algorithms, database management, and software engineering principles.",
    tags: ["Computer Science", "BCA"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/3 h-125 w-125 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Experience & Education
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My <span className="text-primary">journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={`${item.organization}-${item.period}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                    <div className="absolute h-3 w-3 animate-ping rounded-full bg-primary/30" />
                  </div>

                  {/* Spacer for mobile */}
                  <div className="w-10 shrink-0 md:hidden" />

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                      <CardContent className="p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-lg bg-primary/10 p-1.5">
                            {item.type === "work" ? (
                              <Briefcase className="h-4 w-4 text-primary" />
                            ) : (
                              <GraduationCap className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <span className="font-mono text-xs text-muted-foreground">
                            {item.period}
                          </span>
                        </div>

                        <h3 className="mb-1 text-lg font-semibold">
                          {item.title}
                        </h3>
                        <p className="mb-3 text-sm font-medium text-primary">
                          {item.organization}
                        </p>
                        {"highlight" in item && item.highlight && (
                          <div className="mb-3">
                            <Badge className="gap-1 bg-amber-500/10 text-amber-500 border-amber-500/20">
                              <Award className="h-3 w-3" />
                              {item.highlight}
                            </Badge>
                          </div>
                        )}
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty spacer for the other side on desktop */}
                  <div className="hidden w-[calc(50%-2rem)] md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
