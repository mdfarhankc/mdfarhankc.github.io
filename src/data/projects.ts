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
    showReadme?: boolean;
    image?: string;
}

export const projects: Project[] = [
    {
        slug: "fastapi-fullauth",
        title: "FastAPI FullAuth",
        description:
            "Open-source async authentication library for FastAPI on PyPI - JWT rotation with reuse detection, OAuth2, WebAuthn passkeys, and opt-in RBAC. Composable design: apps only get the tables, routes, and imports they actually use.",
        longDescription:
            "A production-grade async authentication and authorization library for FastAPI, published to PyPI. Built around a composable opt-in philosophy - the abstract user adapter exposes only core CRUD, with role, permission, OAuth, and passkey support layered as separate mixins. Routers auto-skip when the adapter doesn't implement their mixin, and model submodules register their tables only when explicitly imported, so a personal-finance wallet app gets just users + refresh tokens while a SaaS gets the full RBAC + OAuth + passkey surface from the same library. Security hardening was driven by systematic audits - refresh-token rotation uses atomic compare-and-swap with reuse-replay detection, OAuth auto-link is gated on email_verified, passkey ceremonies enforce user verification and clone detection via sign-count CAS, and lockout responses don't leak account-existence signal.",
        tags: ["Python", "FastAPI", "PyPI", "Open Source", "Pydantic", "SQLModel", "SQLAlchemy", "OAuth2", "WebAuthn", "JWT", "Argon2id", "Async",
        ],
        gradient: "from-sky-600/20 to-blue-600/20",
        githubUrl: "https://github.com/mdfarhankc/fastapi-fullauth",
        liveUrl: "https://pypi.org/project/fastapi-fullauth/",
        featured: true,
        type: "personal",
        highlights: [
            "Composable opt-in architecture - abstract user adapter plus four optional mixins (Role, Permission, OAuth, Passkey); routers auto-skip when the adapter lacks the matching mixin, and model submodules register their tables only when imported via lazy __getattr__ so an email/password-only app gets exactly two tables and nothing else",
            "JWT access/refresh tokens with atomic compare-and-swap rotation - concurrent refresh calls with the same token can no longer both succeed, and CAS failure triggers family-wide revocation as reuse-replay detection; Argon2id and bcrypt password hashing with transparent rehashing on login and explicit 72-byte rejection to prevent silent bcrypt truncation",
            "OAuth2 social login (Google, GitHub) with verified-email gating to block account takeover via unverified provider emails, plus WebAuthn / Passkey passwordless authentication with user-verification enforcement, userHandle binding validation, and sign-count compare-and-swap to detect cloned authenticators",
            "Pluggable adapters for SQLModel and SQLAlchemy using composable mixins, with Redis and in-memory backends for token blacklist, account lockout, rate limiting, and passkey challenge stores; multi-worker safety verified by emitting a startup warning when any backend is memory-only in what looks like a production deployment",
            "Fully type-annotated with a PEP 561 py.typed marker so consumer mypy, pyright, and IDE language servers get real types on every import; core API is a generic FullAuth[UserSchema, CreateUserSchema] with PEP 696 defaults so apps extend by passing their schema types at instantiation rather than subclassing - no inheritance required",
            "Six typed event hooks (after_register, after_login, after_oauth_register/login, send_verification_email, send_password_reset_email) plus a constructor-level custom JWT-claims builder, modular routers (auth, profile, verify, admin, oauth, passkey), CSRF middleware, security-headers middleware, and 49 environment-configurable settings driven by Pydantic BaseSettings with FULLAUTH_ env prefix",
            "Distributed on PyPI with MkDocs documentation, 188 async pytest tests, multi-version CI on Python 3.10–3.14, OIDC-based PyPI publishing (no stored secrets), and a bundled in-wheel LLM agent skill (SKILL.md plus 12 reference files) so AI coding assistants apply the library's composable-opt-in conventions automatically",
        ],
        showReadme: true,
        // image: "/projects/fastapi-fullauth.png",
    },
    {
        slug: "resumecraft",
        title: "ResumeCraft",
        description:
            "Open-source Python library on PyPI - generate professional Word and PDF resumes from a single JSON or YAML file, with first-class FastAPI/Flask/Django integration.",
        longDescription:
            "A Python library and CLI that turns a single JSON or YAML file into a polished Word document or PDF resume. Designed for both standalone use and embedding in web apps. Features strict Pydantic validation, style presets, ATS-friendly output, and a clean factory-method API for in-memory exports from web request handlers.",
        tags: ["Python", "PYPI", "Open Source", "Typer", "CLI", "Pydantic", "PyPI", "python-docx", "docx2pdf", "watchfiles", "pyyaml"],
        gradient: "from-fuchsia-600/20 to-purple-600/20",
        githubUrl: "https://github.com/mdfarhankc/resumecraft",
        liveUrl: "https://pypi.org/project/resumecraft/",
        featured: true,
        type: "personal",
        highlights: [
            "Renders polished DOCX or PDF resumes from JSON or YAML - auto-bold keywords inside bullet points, right-aligned dates via tab stops, clickable hyperlinks for email and project URLs, and smart page breaks that keep section headings with their content",
            "Pydantic v2 strict validation rejects field-name typos via extra='forbid', enforces non-empty contact fields (location, email, phone), validates section_order against allowed names, rejects duplicates, and surfaces friendly error messages with full field paths",
            "Style system without raw RGB - 7 fonts (Calibri, Arial, Garamond, Georgia, Helvetica, Times, Cambria), 6 color themes (black, navy, forest, maroon, slate, royal), 3 spacing presets, plus an ATS-friendly mode that strips tab stops, colored tech lines, and bordered headings for cleaner ATS parsing",
            "Section-oriented architecture - a SECTION_REGISTRY dispatches to 9 self-contained Section classes (Header, Summary, Experience, Projects, Skills, Education, Certifications, Awards, Languages); adding a new section type only adds a class, no modification of the builder needed",
            "Multi-format factories (from_jsonfile, from_json, from_bytes, from_dict, from_yamlfile, from_yaml) plus to_docx_bytes() / to_pdf_bytes() for in-memory streaming responses in FastAPI, Flask, or Django - handles UTF-8 BOM and rejects binary input cleanly",
            "CLI commands build / validate / init / watch with friendly error messages instead of Python tracebacks; watch mode defaults to PDF output to avoid the file-lock issue when editing live next to an open Word window",
            "Custom section ordering and renamed headings via JSON, JSON Schema shipped at the repo root for $schema editor autocomplete in VS Code/IntelliJ, and an _version metadata key on init templates for tracking which library version produced the file",
            "Published on PyPI with full type hints (py.typed), mypy --strict clean, ruff-linted, 100+ pytest tests at 94% coverage, CI across Python 3.10–3.14 on Linux and Windows, Dependabot for dependency updates, and Codecov for coverage reporting",
        ],
        showReadme: true,
    },
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
        featured: false,
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
        featured: false,
        type: "professional",
        highlights: [
            "Automated student registration, class scheduling, and fee management workflows",
            "Built reporting and analytics dashboards for student performance, instructor productivity, and financials",
            "Optimized database queries and system architecture for scalability and regulatory compliance",
            "Streamlined administrative workflows, reducing manual operations significantly",
        ],
    },
    {
        slug: "odoo_rest_api",
        title: "odoo-rest-api",
        description:
            "Open-source Python library on PyPI - a decorator-based REST API framework for Odoo with FastAPI-like DX and Swagger UI.",
        longDescription:
            "An open-source Python library published on PyPI that brings a FastAPI-like developer experience to Odoo. It enables developers to build REST APIs using decorators, with automatic controller generation, request parsing, ORM serialization, and interactive Swagger documentation - all without leaving the Odoo ecosystem.",
        tags: ["Python", "Odoo", "PyPI", "OpenAPI", "Swagger"],
        gradient: "from-orange-600/20 to-rose-600/20",
        githubUrl: "https://github.com/mdfarhankc/odoo_rest_api",
        liveUrl: null,
        featured: false,
        type: "personal",
        highlights: [
            "Decorator-based routing (@api.get, @api.post, etc.) with dynamic controller generation",
            "Automatic request parsing using Python introspection",
            "Standardized JSON response handling and exception mapping",
            "Automatic serialization for Odoo ORM recordsets to JSON",
            "OpenAPI 3.0 generation with interactive Swagger UI at /docs",
            "Published on PyPI with modern packaging standards (pyproject.toml)",
        ],
        showReadme: true,
    },
    {
        slug: "ChatSeekAI",
        title: "ChatSeek AI Chatbot",
        description:
            "Production-ready AI chatbot with FastAPI, React, Ollama LLM streaming, JWT auth, and WebSocket messaging - deployed via Docker Compose.",
        longDescription:
            "A complete production-ready chatbot platform built with clean architecture principles (SOLID, repository pattern, service layer). Features real-time LLM-powered conversations with streaming responses, secure authentication, and a modern React frontend with rich UI features.",
        tags: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "LLM"],
        gradient: "from-emerald-600/20 to-lime-600/20",
        githubUrl: "https://github.com/mdfarhankc/ChatSeekAI",
        liveUrl: null,
        featured: false,
        type: "personal",
        highlights: [
            "Integrated Ollama LLM for real-time streaming responses with fallback and retry logic",
            "Secure JWT authentication with refresh tokens, role-based access, and session management",
            "Modern UI with Shadcn UI - collapsible sidebar, message threading, markdown rendering, syntax highlighting",
            "WebSocket-based streaming and modular API design",
            "Deployed via Docker Compose for reproducible and scalable environments",
        ],
        showReadme: true,
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
