"use client";

import { motion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { useFadeInView } from "@/lib/use-fade-in-view";
import { stats } from "@/data/stats";

export function About() {
  const { ref, isInView } = useFadeInView();

  return (
    <section id="about" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About Me"
          title={
            <>
              Passionate about building{" "}
              <span className="text-primary">scalable solutions</span>
            </>
          }
          align="left"
          isInView={isInView}
          className="mb-16"
        />

        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m Mohammed Farhan K C, a versatile Python Full-Stack
              Developer from Kannur, India with 3+ years of experience building
              scalable web and mobile applications. I turn visions into reality
              with high-quality, end-to-end software solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently working as a Python Developer at{" "}
              <span className="text-foreground font-medium">
                AST Solutions LLC
              </span>{" "}
              (Dubai, Remote) since March 2023 - recognized as{" "}
              <span className="text-primary font-medium">
                Best Performer 2025
              </span>
              . Previously interned at{" "}
              <span className="text-foreground font-medium">
                Quest Innovative Solutions
              </span>
              .
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My core is FastAPI and the broader Python ecosystem (Django,
              Flask, Odoo), with frontend &amp; mobile (React, Flutter),
              databases (PostgreSQL, MongoDB, Redis), and integrations like
              Whatsapp Cloud, Twilio, and Google Documents OCR. I also publish
              open-source tools on PyPI, and I&apos;m currently picking up Go,
              microservices, and AWS on the side.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, label, value }, i) => (
              <Card
                key={label}
                className="group border-border/50 bg-card/50 hover:border-primary/30 hover:shadow-primary/5 backdrop-blur-sm transition-all hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.5 + i * 0.1,
                    }}
                  >
                    <div className="bg-primary/10 rounded-xl p-3">
                      <Icon className="text-primary h-6 w-6" />
                    </div>
                  </motion.div>
                  <p className="text-3xl font-bold">{value}</p>
                  <p className="text-muted-foreground text-sm">{label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
