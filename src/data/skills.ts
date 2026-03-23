interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Backend",
        skills: [
            "Python",
            "Django",
            "FastAPI",
            "Flask",
            "Odoo",
            "Node.js",
            "Express.js",
            "REST APIs",
        ],
    },
    {
        title: "Frontend & Mobile",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Flutter",
            "Tailwind CSS",
            "Bootstrap",
            "HTML/CSS",
        ],
    },
    {
        title: "Databases",
        skills: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
        ],
    },
    {
        title: "Tools & Integrations",
        skills: [
            "Git",
            "Docker",
            "Whatsapp Cloud",
            "Twilio",
            "Google OCR",
            "Power BI",
            "Linux",
        ],
    },
];