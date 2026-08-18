import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 px-4 bg-gray-50/80">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          id="skills-heading"
          title="Skills"
          subtitle="Technologies and tools I have used in coursework and project work."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
