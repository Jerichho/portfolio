import Image from "next/image";
import { isResumeAvailable } from "@/lib/resume";

const GITHUB_URL = "https://github.com/Jerichho";
const LINKEDIN_URL = "https://www.linkedin.com/in/jericho-guiang/";

const primaryButtonClass =
  "inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full hover:from-blue-600 hover:to-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors motion-safe:transform motion-safe:hover:scale-105 shadow-md";

const secondaryButtonClass =
  "inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-full hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors motion-safe:transform motion-safe:hover:scale-105 shadow-md";

export default function Hero() {
  const resumeAvailable = isResumeAvailable();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-8 mx-auto w-fit">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-30 motion-reduce:opacity-0"
            aria-hidden="true"
          />
          <Image
            src="/profilepic.jpeg"
            alt="Jericho Guiang"
            width={220}
            height={220}
            className="rounded-full shadow-2xl relative z-10 border-4 border-white"
            priority
          />
        </div>

        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          Jericho Guiang
        </h1>
        <p className="text-xl sm:text-2xl text-gray-800 font-medium mb-4">
          Software Engineer building backend, AI-powered, and modern web applications.
        </p>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          B.S. in Computer Science from DePaul University with a Software Development
          concentration. Interested in frontend, full-stack, backend, and AI application roles.
          I enjoy building useful software and working with modern AI-assisted development
          workflows.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#projects" className={primaryButtonClass}>
            View Projects
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButtonClass}
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButtonClass}
          >
            LinkedIn
          </a>
          {resumeAvailable ? (
            <a href="/resume.pdf" className={secondaryButtonClass} download>
              Resume
            </a>
          ) : (
            <span
              className={`${secondaryButtonClass} opacity-60 cursor-not-allowed`}
              title="Add public/resume.pdf to enable this download"
              aria-disabled="true"
            >
              Resume (add PDF)
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
