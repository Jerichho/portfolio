# Jericho Guiang Portfolio

A modern software engineering portfolio built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS** to showcase projects across backend development, AI-powered applications, software testing, distributed systems, and full-stack web development.

The portfolio serves as a central hub for my technical work, highlighting real projects, coursework, and engineering experience as I begin my career as a Software Engineer.

---

## Live Website

> Coming Soon

---

## Features

- Modern responsive single-page portfolio
- Project showcase highlighting real software engineering projects
- Categorized technical skills
- About section with engineering background
- Contact form powered by Next.js API Routes
- Resume download support
- GitHub and LinkedIn integration
- SEO-friendly metadata
- Accessibility improvements
- Mobile-friendly navigation
- Smooth scrolling between sections

---

## Featured Projects

### AI Oral Exam Grader

Senior Capstone project that automates oral exam grading using Large Language Models.

**Highlights**

- Designed and implemented the teacher dashboard
- SPA-style navigation
- Login and signup interfaces
- Role selection workflow
- Student management interface
- Exams, Analytics, Settings, and Notifications pages
- Quick Actions panel
- Responsive sidebar
- Exam management features
- UI improvements and debugging
- Backend API testing
- LLM integration using Together.ai

**Technologies**

- Python
- FastAPI
- PostgreSQL
- SQLAlchemy
- Pydantic
- Jinja2
- Together.ai

---

### Enterprise Knowledge Platform

Enterprise Retrieval-Augmented Generation (RAG) platform for answering questions using company documentation.

**Highlights**

- Document ingestion pipeline
- Embedding generation
- Vector search
- Retrieval-Augmented Generation
- Authentication and authorization
- REST API backend
- Dockerized architecture

**Technologies**

- FastAPI
- PostgreSQL
- pgvector
- Docker
- LangChain
- REST APIs

---

### AI-Assisted Software Testing Agent

Software testing assistant built around the Model Context Protocol (MCP) to automate testing workflows.

**Highlights**

- Execute Maven test suites
- Parse JaCoCo coverage reports
- Identify uncovered methods
- Generate JUnit test templates
- Automate Git workflows
- AI-assisted testing pipeline
- Coverage analysis

**Technologies**

- Python
- Java
- Maven
- MCP
- JUnit
- JaCoCo
- Git

---

### Distributed Systems Projects

Collection of networking and distributed systems coursework.

Topics include

- TCP socket programming
- Multi-threaded client/server applications
- Kafka
- Distributed Hangman
- Linux Virtual Machines
- Concurrency
- Producer/Consumer architecture
- Replication concepts

---

### Stock Trading Engine

Java application simulating a stock exchange developed using object-oriented software engineering principles.

Topics include

- SOLID Principles
- MVC Architecture
- Factory Pattern
- Singleton Pattern
- Observer Pattern
- Facade Pattern
- DTO Pattern
- Object-Oriented Design

---

## Tech Stack

### Languages

- Python
- Java
- JavaScript
- TypeScript
- SQL
- C
- C++
- R

### Frontend

- React
- Next.js
- HTML5
- CSS3
- Tailwind CSS
- Jinja2

### Backend

- FastAPI
- Node.js
- Express
- REST APIs
- SQLAlchemy

### Databases

- PostgreSQL
- MongoDB
- MySQL
- pgvector

### AI

- Retrieval-Augmented Generation (RAG)
- LLM API Integration
- Together.ai
- Prompt Engineering
- Model Context Protocol (MCP)

### Testing & Developer Tooling

<<<<<<< HEAD
- JUnit
- Maven
- Playwright
- JaCoCo
- GitHub Actions
- Checkstyle
- Spoon
- CI/CD

### Cloud & Infrastructure
=======
3. **Resume**

   The Resume button links to `public/resume.pdf`. Keep that filename so the production URL stays `/resume.pdf`.
>>>>>>> cbf6562 (Prepare for deployment)

- AWS
- Docker
- Linux
- Git
- Kafka

---

## Project Structure

```text
src/
├── app/
│   ├── api/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects
│   ├── Contact
│   ├── Navbar
│   └── Shared Components
│
├── data/
│   ├── projects.ts
│   └── skills.ts
│
└── lib/
    └── shared utilities

public/
├── profile image
├── favicon
└── resume.pdf
```

---

## Local Development

### Install dependencies

```bash
npm install
```

### Configure environment variables

Copy the example environment file.

```bash
cp .env.example .env.local
```

Required for the contact form.

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-google-app-password
```

Optional for production metadata.

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

### Run locally

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## Development Commands

| Command | Description |
|----------|-------------|
| npm run dev | Start development server |
| npm run build | Production build |
| npm run start | Run production build locally |
| npm run lint | Run ESLint |

---

## Deployment

This portfolio is optimized for **Vercel**.

### Deploy

1. Push repository to GitHub.
2. Import repository into Vercel.
3. Framework preset is automatically detected as **Next.js**.
4. Configure environment variables.

```
EMAIL_USER
EMAIL_PASS
NEXT_PUBLIC_SITE_URL
```

5. Deploy.

---

## Accessibility

This portfolio includes

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Responsive layouts
- Skip-to-content link
- Reduced motion support
- Accessible forms
- Mobile-friendly navigation

---

## Future Improvements

Planned enhancements include

- Project screenshots
- Live project demos
- Dark mode
- Blog section
- Searchable projects
- Project filtering
- Interactive architecture diagrams
- Analytics dashboard
- Case study pages for major projects

---

## Contact

Feel free to connect with me.

- GitHub: https://github.com/Jerichho
- LinkedIn: https://www.linkedin.com/in/jericho-guiang/

---

## License

This project is intended for portfolio and educational purposes.
