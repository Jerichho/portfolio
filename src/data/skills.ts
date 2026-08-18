export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL", "C", "C++", "R"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Jinja2"],
  },
  {
    name: "Backend",
    items: ["FastAPI", "Node.js", "Express", "REST APIs", "SQLAlchemy"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "pgvector"],
  },
  {
    name: "Testing / Developer Tooling",
    items: [
      "JUnit",
      "Maven",
      "Playwright",
      "JaCoCo",
      "GitHub Actions",
      "Checkstyle",
      "Spoon",
      "MCP",
    ],
  },
  {
    name: "Cloud / Infrastructure",
    items: ["AWS", "Docker", "Linux", "Git", "CI/CD", "Kafka"],
  },
  {
    name: "AI / Applied AI",
    items: [
      "LLM API integration",
      "RAG",
      "Together.ai",
      "Prompt engineering",
      "AI-assisted software development",
    ],
  },
];
