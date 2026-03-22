import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-16">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8 opacity-50" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">Tailwind CSS</span> &{" "}
            <span className="text-primary">Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
