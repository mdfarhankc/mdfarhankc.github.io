"use client";

import { CheckCircle2, FileText, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectTabsProps {
  highlights: string[];
  readme: React.ReactNode;
}

export function ProjectTabs({ highlights, readme }: ProjectTabsProps) {
  return (
    <Tabs defaultValue="highlights">
      <TabsList>
        <TabsTrigger value="highlights">
          <Sparkles className="h-3.5 w-3.5" />
          Key Highlights
        </TabsTrigger>
        <TabsTrigger value="readme">
          <FileText className="h-3.5 w-3.5" />
          README
        </TabsTrigger>
      </TabsList>

      <TabsContent value="highlights">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8">
            <ul className="space-y-4">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="readme">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8">{readme}</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
