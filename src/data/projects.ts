export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  gradient: string;
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  type: "professional" | "personal";
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "d2d-water-distribution",
    title: "D2D Water Distribution",
    description:
      "Odoo 12 to 16 migration with real-time delivery tracking, Google Maps vehicle routing, and automated invoice processing via OCR.",
    longDescription:
      "A comprehensive water distribution management system built for a Dubai-based company. Executed a complete migration of both codebase and data from Odoo 12 to Odoo 16, ensuring system integrity, data consistency, and seamless operational transition. The system handles order management, delivery tracking, payment synchronization, and automated invoice generation.",
    tags: ["Odoo", "Python", "Flutter", "Google Maps", "OCR", "PostgreSQL"],
    gradient: "from-violet-600/20 to-indigo-600/20",
    githubUrl: null,
    liveUrl: null,
    featured: true,
    type: "professional",
    highlights: [
      "Migrated codebase and data from Odoo 12 to Odoo 16 with zero downtime",
      "Built RESTful APIs for salesman mobile app with real-time order, delivery, and payment synchronization",
      "Integrated Google Maps for vehicle tracking, route visualization, and smart vehicle assignment",
      "Implemented Google Documents OCR to extract data from PDF invoices and auto-generate vendor bills",
    ],
  },
  {
    slug: "atlal-driving-institute",
    title: "ATLAL Driving Institute",
    description:
      "Custom Odoo 18 ERP solution automating student registration, scheduling, fee management, and real-time reporting dashboards.",
    longDescription:
      "Designed and implemented a fully customized Odoo 18 ERP solution to streamline all operations of a driving institute in Dubai. The system covers student, instructor, and administrative workflows with automated processes and real-time analytics.",
    tags: ["Odoo 18", "Python", "PostgreSQL", "ERP"],
    gradient: "from-cyan-600/20 to-teal-600/20",
    githubUrl: null,
    liveUrl: null,
    featured: true,
    type: "professional",
    highlights: [
      "Automated student registration, class scheduling, and fee management workflows",
      "Built reporting and analytics dashboards for student performance, instructor productivity, and financials",
      "Optimized database queries and system architecture for scalability and regulatory compliance",
      "Streamlined administrative workflows, reducing manual operations significantly",
    ],
  },
  {
    slug: "odoo-rest-api",
    title: "odoo-rest-api",
    description:
      "Open-source Python library on PyPI — a decorator-based REST API framework for Odoo with FastAPI-like DX and Swagger UI.",
    longDescription:
      "An open-source Python library published on PyPI that brings a FastAPI-like developer experience to Odoo. It enables developers to build REST APIs using decorators, with automatic controller generation, request parsing, ORM serialization, and interactive Swagger documentation — all without leaving the Odoo ecosystem.",
    tags: ["Python", "Odoo", "PyPI", "OpenAPI", "Swagger"],
    gradient: "from-orange-600/20 to-rose-600/20",
    githubUrl: "https://github.com/mdfarhankc/odoo_rest_api",
    liveUrl: null,
    featured: true,
    type: "personal",
    highlights: [
      "Decorator-based routing (@api.get, @api.post, etc.) with dynamic controller generation",
      "Automatic request parsing using Python introspection",
      "Standardized JSON response handling and exception mapping",
      "Automatic serialization for Odoo ORM recordsets to JSON",
      "OpenAPI 3.0 generation with interactive Swagger UI at /docs",
      "Published on PyPI with modern packaging standards (pyproject.toml)",
    ],
  },
  {
    slug: "chatseek-ai",
    title: "ChatSeek AI Chatbot",
    description:
      "Production-ready AI chatbot with FastAPI, React, Ollama LLM streaming, JWT auth, and WebSocket messaging — deployed via Docker Compose.",
    longDescription:
      "A complete production-ready chatbot platform built with clean architecture principles (SOLID, repository pattern, service layer). Features real-time LLM-powered conversations with streaming responses, secure authentication, and a modern React frontend with rich UI features.",
    tags: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "LLM"],
    gradient: "from-emerald-600/20 to-lime-600/20",
    githubUrl: "https://github.com/mdfarhankc/ChatSeekAI",
    liveUrl: null,
    featured: true,
    type: "personal",
    highlights: [
      "Integrated Ollama LLM for real-time streaming responses with fallback and retry logic",
      "Secure JWT authentication with refresh tokens, role-based access, and session management",
      "Modern UI with Shadcn UI — collapsible sidebar, message threading, markdown rendering, syntax highlighting",
      "WebSocket-based streaming and modular API design",
      "Deployed via Docker Compose for reproducible and scalable environments",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}
