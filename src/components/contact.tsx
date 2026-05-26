"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { useFadeInView } from "@/lib/use-fade-in-view";
import { socials } from "@/data/socials";

export function Contact() {
  const { ref, isInView } = useFadeInView();
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
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="bg-primary/5 absolute bottom-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Get In Touch"
          title={
            <>
              Let&apos;s launch something{" "}
              <span
                className="from-foreground/60 via-foreground to-foreground/60 bg-linear-to-r bg-size-[200%_auto] bg-clip-text text-transparent"
                style={{ animation: "shimmer 3s ease-in-out infinite" }}
              >
                great
              </span>
            </>
          }
          subtitle="Every great mission starts with a conversation. Let's start ours."
          isInView={isInView}
          className="mb-16"
        />

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="border-border/50 bg-card/50 h-full backdrop-blur-sm">
              <CardContent className="flex h-full flex-col p-6 sm:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-1 flex-col gap-5"
                >
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-foreground text-sm font-medium"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-lg border px-4 py-2.5 text-sm transition-all focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-foreground text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-lg border px-4 py-2.5 text-sm transition-all focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-foreground text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 flex-1 resize-none rounded-lg border px-4 py-2.5 text-sm transition-all focus:ring-2 focus:outline-none"
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
                  className="text-muted-foreground hover:text-foreground flex items-center gap-3 transition-colors"
                >
                  <div className="bg-primary/10 rounded-lg p-2.5">
                    <Mail className="text-primary h-4 w-4" />
                  </div>
                  <span className="text-sm">kcfarhan123@gmail.com</span>
                </a>

                <div className="text-muted-foreground flex items-center gap-3">
                  <div className="bg-primary/10 rounded-lg p-2.5">
                    <MapPin className="text-primary h-4 w-4" />
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
                      className="border-border text-muted-foreground hover:border-primary/50 hover:text-primary flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all"
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
