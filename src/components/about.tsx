"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Briefcase, Rocket, Layers } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "3+" },
  { icon: Rocket, label: "Projects Delivered", value: "20+" },
  { icon: Code2, label: "Technologies", value: "15+" },
  { icon: Layers, label: "Full Stack Apps", value: "10+" },
];

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
              I&apos;m Mohammed Farhan K C, a Full Stack Developer from Kannur,
              India. I specialize in turning ideas into digital reality —
              crafting tailored solutions that align with your goals and help
              businesses achieve new heights.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently working as a Python Developer at{" "}
              <span className="font-medium text-foreground">
                AST Solutions LLC
              </span>{" "}
              since March 2023. Previously, I worked as a Python Full Stack
              Developer at{" "}
              <span className="font-medium text-foreground">
                Quest Innovative Solutions
              </span>{" "}
              (June 2022 – January 2023).
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I hold a Bachelor of Computer Application from Jamia Hamdard. My
              stack spans Python ecosystems (Django, FastAPI, Flask, Odoo) to
              modern frontend (React, Next.js, Flutter) and databases
              (PostgreSQL, MongoDB, MySQL).
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
