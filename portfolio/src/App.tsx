import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (localStorage.theme === 'dark') return true;
    if (localStorage.theme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  useEffect(() => {
  const skull = skullRef.current;

  if (!skull) return;

  const moveSkull = (e: MouseEvent) => {
    gsap.to(skull, {
      x: e.clientX - 20,
      y: e.clientY - 20,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  window.addEventListener('mousemove', moveSkull);

  return () => {
    window.removeEventListener('mousemove', moveSkull);
  };
}, []);

  const [name] = useState('Victoria');

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // PROJECT DATA
  const projects = [
  {
    id: 1,
    title: 'Infoskærm',
    image: '/images/infoskaerm.png',
    description: 'Skærm for TECHCOLLEGE media afdeling der viser vejr, tid/dato, lokaler, bustider, nyheder og kantinens menu',
    tech: ['React', 'TypeScript', 'CSS', 'HTML'],
    github: 'https://github.com/victoria0848/xmas.infoboard',
    live: ''
  },
  {
    id: 2,
    title: 'Portfolio',
    image: '/images/portfolio.png',
    description: 'Min egen portfolio side bygget fra første prøve med Tailwind.',
    tech: ['React', 'Tailwind', 'HTML'],
    github: 'https://github.com/victoria0848/portfolio',
    live: ''
  },
  {
    id: 3,
    title: 'To Do App',
    image: '/images/todoapp.png', 
    description: 'Projekt med eget design i Figma, hvor jeg lavede min første web app.',
    tech: ['JavaScript', 'SCSS', 'HTML'],
    github: 'https://github.com/victoria0848/MytodoApp',
    live: ''
  }
  ];

  // MODAL STATE
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const skullRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<string | null>(null);

   const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_zj02ixl',
        'template_fx6mtrh',
        formRef.current,
        'b4sgUMEkv-LYlxBE_'
      )
      .then(
        () => {
          setStatus('Besked sendt!');
          formRef.current?.reset();
        },
        () => {
          setStatus('Noget gik galt, prøv igen.');
        }
      );
  };

  return (
    <>

    {/* SKULL BOY */}
    <img
      ref={skullRef}
      src="/images/0525.png"
      alt="Skull"
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] opacity-80"
    />

    {/* HEADER */}
      <header className="bg-white dark:bg-gray-950 shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl font-bold text-purple-600 dark:text-purple-400"
          >
            Portfolio
          </a>

          <ul className="flex gap-8 text-sm font-medium text-purple-700 dark:text-gray-300">
            <li><a href="#about">Om mig</a></li>
            <li><a href="#projects">Projekter</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-gray-200 rounded-full text-sm font-medium"
          >
            {darkMode ? 'Light mode' : 'Dark mode'}
          </button>
        </nav>
      </header>

      <main className="min-h-screen font-sans antialiased">
        {/* HERO */}
        <section className="bg-linear-to-br from-purple-600 to-white-700 dark:from-purple-950 dark:to-black text-white py-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-5xl font-bold">Hej, jeg hedder {name}</h2>
            <button
              onClick={scrollToProjects}
              className="mt-8 bg-white text-purple-600 px-8 py-4 rounded-2xl"
            >
              Se mine projekter
            </button>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 bg-white dark:bg-gray-950">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Mine projekter
          </h2>

          <ul className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <li key={project.id}>
                <article
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 h-full flex flex-col"
                >
                  <img
                    src={project.image}
                    className="w-full h-56 object-cover group-hover:scale-110 transition"
                  />

                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {project.tech.join(', ')}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>

            <img
              src={selectedProject.image}
              className="w-full h-64 object-cover rounded-xl"
            />

            <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
              {selectedProject.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {selectedProject.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {selectedProject.tech.map((t: string) => (
                <span key={t} className="bg-purple-200 px-3 py-1 rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                className="bg-gray-900 text-white px-4 py-2 rounded-xl"
              >
                GitHub
              </a>

              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  className="bg-purple-600 text-white px-4 py-2 rounded-xl"
                >
                  Live demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      {/* CONTACT */}
        <section id="contact" className="bg-purple-300 dark:bg-black py-20">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-700 dark:text-white">
              Kontakt mig
            </h2>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full p-4 rounded-2xl bg-purple-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Besked
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full p-4 rounded-2xl bg-purple-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 rounded-2xl"
              >
                Send besked
              </button>

              {status && <p className="text-center">{status}</p>}
            </form>
          </div>
        </section>
      </main>
      

      <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-950">
        stylet med tailwind 2026
      </footer>
    </>
  );
}

export default App;