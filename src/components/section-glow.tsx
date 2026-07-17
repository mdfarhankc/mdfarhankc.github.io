import { cn } from "@/lib/utils";

type GlowVariant = "top-right" | "top-left" | "center" | "bottom";

// Shared emerald ambient glow. Renders the same in light and dark so every
// section reads from one palette instead of the old day/night split.
const POSITIONS: Record<GlowVariant, string> = {
  "top-right": "top-1/4 right-1/4 h-125 w-125",
  "top-left": "top-1/4 left-10 h-96 w-96",
  center: "top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 h-125 w-125 -translate-x-1/2",
};

export function SectionGlow({
  variant = "center",
  className,
}: {
  variant?: GlowVariant;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={cn(
          "absolute rounded-full opacity-30 blur-3xl",
          POSITIONS[variant],
          className,
        )}
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--primary) 16%, transparent), transparent)",
        }}
      />
    </div>
  );
}
