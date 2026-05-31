"use client";

import { motion } from "motion/react";
import { Award, Briefcase, GraduationCap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
import { useFadeInView } from "@/lib/use-fade-in-view";
import { experiences } from "@/data/experiences";

export function Experience() {
  const { ref, isInView } = useFadeInView();

  return (
    <section id="experience" className="relative overflow-hidden px-6 py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:md:block"
      >
        <div className="bg-primary/5 absolute top-1/3 right-1/4 h-125 w-125 rounded-full blur-[150px]" />
      </div>

      {/* Shooting stars */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden overflow-hidden dark:block"
      >
        <div
          className="absolute top-[15%] left-[10%] h-px w-32 bg-gradient-to-r from-foreground/40 to-transparent"
          style={{ animation: "shooting-star 3s ease-out 0s infinite" }}
        />
        <div
          className="absolute top-[35%] left-[55%] h-px w-24 bg-gradient-to-r from-foreground/30 to-transparent"
          style={{ animation: "shooting-star 3s ease-out 5s infinite" }}
        />
        <div
          className="absolute top-[8%] left-[70%] h-px w-20 bg-gradient-to-r from-foreground/25 to-transparent"
          style={{ animation: "shooting-star 3s ease-out 9s infinite" }}
        />
      </div>

      <div ref={ref} className="relative mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Experience & Education"
          title={
            <>
              My <span className="text-primary">journey</span>
            </>
          }
          isInView={isInView}
          className="mb-16"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="bg-border absolute top-0 bottom-0 left-6 w-px md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {experiences.map((item, i) => {
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
                    <div className="border-primary bg-background h-3 w-3 rounded-full border-2" />
                    <div className="bg-primary/30 absolute h-3 w-3 animate-ping rounded-full" />
                  </div>

                  {/* Spacer for mobile */}
                  <div className="w-10 shrink-0 md:hidden" />

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}
                  >
                    <Card className="border-border/50 bg-card/50 hover:border-primary/30 hover:shadow-primary/5 backdrop-blur-sm transition-all hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="bg-primary/10 rounded-lg p-1.5">
                            {item.type === "work" ? (
                              <Briefcase className="text-primary h-4 w-4" />
                            ) : (
                              <GraduationCap className="text-primary h-4 w-4" />
                            )}
                          </div>
                          <span className="text-muted-foreground font-mono text-xs">
                            {item.period}
                          </span>
                        </div>

                        <h3 className="mb-1 text-lg font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-primary mb-3 text-sm font-medium">
                          {item.organization}
                        </p>
                        {"highlight" in item && item.highlight && (
                          <div className="mb-3">
                            <Badge className="gap-1 border-amber-500/20 bg-amber-500/10 text-amber-500">
                              <Award className="h-3 w-3" />
                              {item.highlight}
                            </Badge>
                          </div>
                        )}
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
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
