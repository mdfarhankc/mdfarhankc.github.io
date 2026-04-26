"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/data/stats";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            About Me
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Passionate about building{" "}
            <span className="text-primary">scalable solutions</span>
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m Mohammed Farhan K C, a versatile Python Full-Stack
              Developer from Kannur, India with 3+ years of experience building
              scalable web and mobile applications. I turn visions into reality
              with high-quality, end-to-end software solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently working as a Python Developer at{" "}
              <span className="font-medium text-foreground">
                AST Solutions LLC
              </span>{" "}
              (Dubai, Remote) since March 2023 - recognized as{" "}
              <span className="font-medium text-primary">
                Best Performer 2025
              </span>
              . Previously interned at{" "}
              <span className="font-medium text-foreground">
                Quest Innovative Solutions
              </span>
              .
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My stack spans Python ecosystems (Django, FastAPI, Flask, Odoo),
              frontend &amp; mobile (React, Flutter), databases (PostgreSQL,
              MongoDB, Redis), and integrations like Whatsapp Cloud, Twilio, and
              Google Documents OCR. I also publish open-source tools on PyPI.
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
                className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
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
                    <div className="rounded-xl bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </motion.div>
                  <p className="text-3xl font-bold">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
