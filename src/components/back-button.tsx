"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Route } from "next";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
  fallbackHref: Route;
  variant?: "ghost" | "outline";
  size?: "sm" | "default";
  children: ReactNode;
}

export function BackButton({
  fallbackHref,
  variant = "outline",
  size = "default",
  children,
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <Button variant={variant} size={size} onClick={handleClick}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      {children}
    </Button>
  );
}
