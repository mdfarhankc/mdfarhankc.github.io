"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

export function useFadeInView() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return { ref, isInView };
}
