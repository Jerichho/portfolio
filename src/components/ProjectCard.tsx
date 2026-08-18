import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = project.githubUrl || project.liveDemoUrl;

  return (
    <article
      className={`flex flex-col h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-shadow hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 ${
        project.frontendFocus ? "ring-1 ring-blue-100" : ""
      }`}
    >
      <div
        className={`px-6 py-5 border-b border-gray-100 ${
          project.frontendFocus
            ? "bg-gradient-to-r from-blue-50 to-indigo-50"
            : "bg-gray-50"
        }`}
      >
        {project.frontendFocus ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">
            Frontend-focused work
          </p>
        ) : null}
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-col flex-1 p-6">
        {project.highlights.length > 0 ? (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              {project.frontendFocus ? "My UI contributions" : "Highlights"}
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2 mt-auto mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-xs px-2.5 py-1 rounded-full text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasLinks ? (
          <div className="flex flex-wrap gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full hover:from-blue-600 hover:to-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors"
              >
                GitHub
              </a>
            ) : null}
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
