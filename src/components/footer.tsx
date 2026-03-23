import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-16">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8 opacity-50" />
        <div className="flex items-center justify-center">
          <p className="font-mono text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohammed Farhan K C. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
