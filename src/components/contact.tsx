"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { socials } from "@/data/socials";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mkoqadly", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="relative px-6 py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Get In Touch
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s work <span className="text-primary">together</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Have a project in mind or just want to chat? I&apos;m always open to
            discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex h-full flex-col p-6 sm:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-1 flex-col gap-5"
                >
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="flex-1 resize-none rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "sending" || status === "sent"}
                    className="w-full"
                  >
                    {status === "sending" && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {status === "sent" && (
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                    )}
                    {status === "idle" && <Send className="mr-2 h-4 w-4" />}
                    {status === "error" && <Send className="mr-2 h-4 w-4" />}
                    {status === "idle" && "Send Message"}
                    {status === "sending" && "Sending..."}
                    {status === "sent" && "Message Sent!"}
                    {status === "error" && "Failed - Try Again"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col gap-5 p-6 sm:p-8">
                <h3 className="text-lg font-semibold">Contact Info</h3>

                <a
                  href="mailto:kcfarhan123@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">kcfarhan123@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Kannur, India</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col gap-5 p-6 sm:p-8">
                <h3 className="text-lg font-semibold">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                    >
                      <Icon size={16} />
                      {label}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
