import { useState, useEffect } from "react";

import Navbar from "./components/NavBar";
import Contact from "./components/Contact";

import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";

import SkullTrail from "./components/SkullTrail";
import Particles from "./components/Particles";

import { projects, type Project } from "./data/projects";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (localStorage.theme === "dark") return true;
    if (localStorage.theme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Particles />
      <SkullTrail />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        {/* HERO */}
        <section className="bg-linear-to-br from-purple-600 to-white-700 dark:from-purple-950 dark:to-black text-white py-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-5xl font-bold">
              Hej, jeg hedder Victoria
            </h1>

            <p className="mt-4 text-lg">
              Webudvikler studerende.
            </p>

            <button
              onClick={scrollToProjects}
              className="mt-8 bg-white text-purple-600 px-8 py-4 rounded-2xl"
            >
              Se mine projekter
            </button>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Mine projekter
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() =>
                  setSelectedProject(project)
                }
              />
            ))}
          </div>
        </section>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() =>
              setSelectedProject(null)
            }
          />
        )}

        <Contact />
      </main>

      <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-950">
        Stylet med Tailwind 2026
      </footer>
    </>
  );
}

export default App;