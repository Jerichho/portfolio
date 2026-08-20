import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          id="about-heading"
          title="About"
          subtitle="Recent graduate with hands-on project experience across the stack."
        />
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            I recently graduated from DePaul University with a B.S. in Computer Science
            and a Software Development concentration. Most of my experience comes from
            building real projects — from teacher-facing web dashboards to API backends,
            RAG systems, and automated testing tooling.
          </p>
          <p>
            On the frontend, I have spent significant time on UI structure, navigation,
            forms, and layout work in project settings, including a Jinja2 teacher dashboard.
            On the backend, I have worked with FastAPI, SQLAlchemy, SQLite and PostgreSQL,
            authentication, and AI integrations. I also have coursework and project experience
            in software testing, distributed systems, and systems-level programming.
          </p>
          <p>
            I regularly use AI-assisted development tools such as Cursor, GitHub Copilot, and
            Claude to move faster while staying focused on readable, reliable code. I am
            interested in roles where I can keep building clean, user-focused software and
            keep learning.
          </p>
        </div>
      </div>
    </section>
  );
}
