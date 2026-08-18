"use client";

import { useEffect, useId, useState } from "react";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const linkClassName = (isActive: boolean) =>
  `text-sm font-medium transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
    isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
  }`;

export default function Navbar() {
  const mobileMenuId = useId();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const offsets = navItems.map((item) => {
        const sectionId = item.path.replace("#", "");
        const element = document.getElementById(sectionId);
        if (!element) {
          return { id: sectionId, top: Infinity };
        }
        const rect = element.getBoundingClientRect();
        return { id: sectionId, top: Math.abs(rect.top) };
      });

      const current = offsets.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev,
      );
      setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav aria-label="Main navigation" className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
          >
            Jericho Guiang
          </a>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const sectionId = item.path.replace("#", "");
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className={linkClassName(activeSection === sectionId)}
                  aria-current={activeSection === sectionId ? "page" : undefined}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="md:hidden text-gray-700 hover:text-gray-900 p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls={mobileMenuId}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          id={mobileMenuId}
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white rounded-b-lg border border-gray-100 shadow-lg">
            {navItems.map((item) => {
              const sectionId = item.path.replace("#", "");
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    activeSection === sectionId
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  aria-current={activeSection === sectionId ? "page" : undefined}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
