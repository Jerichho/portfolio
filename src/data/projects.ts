export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  frontendFocus?: boolean;
  featured: boolean;
}

export const featuredProjects: Project[] = [
  {
    id: "oral-exam-grader",
    title: "AI Oral Exam Grader",
    description:
      "Senior capstone oral exam grading system with separate teacher and student workflows. My primary contribution was the teacher-facing dashboard and UI.",
    highlights: [
      "Teacher dashboard architecture, login/signup UI, role selection, and Manage Students",
      "Exams, Analytics, Settings, and Notifications pages, plus a resizable/collapsible sidebar",
      "SPA-style navigation with fetch() and DOM replacement using Jinja2, HTML, CSS, and JavaScript (not React)",
      "Exam management UI, UI debugging, and some API testing / backend work",
      "The project used Together.ai for LLM-backed grading; I contributed to integration work but did not own the full LLM implementation",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Jinja2",
      "HTML",
      "CSS",
      "JavaScript",
      "SQLAlchemy",
      "SQLite",
      "PostgreSQL",
      "Together.ai",
    ],
    githubUrl: "https://github.com/Jerichho/capstone-1-9",
    frontendFocus: true,
    featured: true,
  },
  {
    id: "enterprise-rag",
    title: "Enterprise Knowledge Platform",
    description:
      "Internal knowledge assistant for retrieving grounded answers from company documents.",
    highlights: [
      "Document ingestion, chunking, and embedding pipeline",
      "Vector search with pgvector and grounded answers with citations",
      "Provider interfaces and REST API backend",
      "Authentication, role-based access control, Docker, and GitHub Actions CI",
    ],
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Docker",
      "LangChain",
      "REST APIs",
      "RAG",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/Jerichho/Enterprise-Knowledge-Management-Platform-",
    featured: true,
  },
  {
    id: "testing-agent",
    title: "AI-Assisted Software Testing Agent",
    description:
      "Testing automation agent built with the Model Context Protocol to support iterative test workflows.",
    highlights: [
      "Run Maven tests and parse JaCoCo coverage reports",
      "Identify uncovered methods and generate JUnit test templates",
      "Re-run tests with Git automation",
      "Specification-based testing tool and AI-assisted code review",
    ],
    technologies: ["Python", "MCP", "Java", "Maven", "JUnit", "JaCoCo", "Git"],
    featured: true,
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems Portfolio",
    description:
      "Coursework demonstrating networking and distributed systems fundamentals on Linux cloud VMs.",
    highlights: [
      "Multithreaded TCP Hangman server and TCP messenger",
      "Kafka cluster work with producer/consumer architecture",
      "Sockets, concurrency, and fault tolerance / replication concepts",
    ],
    technologies: ["Java", "Python", "TCP Sockets", "Kafka", "Linux"],
    featured: true,
  },
  {
    id: "stock-trading-engine",
    title: "Java Stock Trading Engine",
    description:
      "Semester-long object-oriented software engineering project modeling a stock exchange.",
    highlights: [
      "ProductBook / ProductBookSide order book modeling",
      "Order, Quote, and Tradable abstractions",
      "SOLID principles and patterns: Factory, Singleton, Facade, Flyweight, Observer, DTO, MVC",
    ],
    technologies: ["Java"],
    featured: true,
  },
];

export const additionalProjects: Project[] = [
  {
    id: "software-testing",
    title: "Software Testing & Developer Tooling",
    description:
      "Coursework and tooling projects focused on automated testing, static analysis, and CI workflows.",
    highlights: [
      "Spoon static analysis and regression test selection",
      "JUnit, JaCoCo, Playwright, and GitHub Actions",
      "Maven builds, Checkstyle, and mutation testing (PIT) exposure",
    ],
    technologies: [
      "JUnit",
      "Maven",
      "Playwright",
      "JaCoCo",
      "GitHub Actions",
      "Spoon",
    ],
    featured: false,
  },
];
