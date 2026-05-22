export interface Experience {
    type: "work" | "experience";
    title: string;
    organization: string;
    period: string;
    highlight?: string;
    description: string;
    tags: string[];
}

export const experiences: Experience[] = [
    {
        type: "work" as const,
        title: "Python Developer",
        organization: "AST Solutions LLC - Al Qusais, Dubai (Remote)",
        period: "March 2023 - Present",
        highlight: "Best Performer - 2025",
        description:
            "Designed and shipped RESTful APIs with FastAPI and Django, backed by PostgreSQL and MongoDB. Led development of Odoo-based ERP modules across departments. Integrated Flutter apps with backend APIs. Containerized deployments with Docker. Implemented unit testing with Pytest and Odoo's test framework.",
        tags: [
            "FastAPI",
            "Python",
            "Django",
            "PostgreSQL",
            "MongoDB",
            "Flutter",
            "Docker",
            "Odoo",
        ],
    },
    {
        type: "work" as const,
        title: "Python Full Stack Developer Intern",
        organization: "Quest Innovative Solutions - Kannur, Kerala",
        period: "June 2022 - January 2023",
        description:
            "Developed responsive web apps using Django and Flask. Built RESTful APIs with DRF and Flask-RESTful. Enhanced performance through code refactoring and query tuning. Implemented automated tests with pytest. Designed authentication and session management modules.",
        tags: ["Python", "Django", "Flask", "DRF", "pytest", "MySQL"],
    },
    {
        type: "experience" as const,
        title: "Bachelor of Computer Application",
        organization: "Jamia Hamdard, Delhi University",
        period: "2019 - 2022",
        description:
            "Studied core computer science fundamentals including data structures, algorithms, database management, and software engineering principles.",
        tags: ["Computer Science", "BCA"],
    },
];
