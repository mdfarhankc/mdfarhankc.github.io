import dynamic from "next/dynamic";

import { Hero } from "@/components/hero";

const About = dynamic(() => import("@/components/about").then((m) => m.About));
const Experience = dynamic(() =>
  import("@/components/experience").then((m) => m.Experience),
);
const Skills = dynamic(() =>
  import("@/components/skills").then((m) => m.Skills),
);
const Projects = dynamic(() =>
  import("@/components/projects").then((m) => m.Projects),
);
const Contact = dynamic(() =>
  import("@/components/contact").then((m) => m.Contact),
);

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
