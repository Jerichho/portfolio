import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { additionalProjects, featuredProjects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          id="projects-heading"
          title="Projects"
          subtitle="Selected coursework and project work with an emphasis on what I built and how."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-0">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {additionalProjects.length > 0 ? (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
              Additional Technical Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto min-w-0">
              {additionalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
