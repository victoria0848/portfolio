import { useState, useEffect } from 'react';

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

  const [name] = useState('Victoria');

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-950 shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Portfolio</h1>
          <div className="flex gap-8 text-sm font-medium text-purple-700 dark:text-gray-300">
            <a href="#about" className="hover:text-gray-600 dark:hover:text-purple-400 transition">Om mig</a>
            <a href="#projects" className="hover:text-gray-600 dark:hover:text-purple-400 transition">Projekter</a>
            <a href="#contact" className="hover:text-gray-600 dark:hover:text-purple-400 transition">Kontakt</a>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-purple-200 dark:bg-purple-800 text-white-800 dark:text-gray-200 rounded-full text-sm font-medium hover:scale-110 transition-all duration-200"
          >
            {darkMode ? 'Lys mode' : 'Mørk mode'}
          </button>
        </nav>
      </header>

      <main className="min-h-screen font-sans antialiased">
        {/* HERO */}
        <section className="bg-gradient-to-br from-purple-600 to-white-700 dark:from-purple-950 dark:to-black text-white py-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Hej, jeg hedder {name}</h2>
            <p className="mt-4 text-xl md:text-2xl opacity-90">Jeg er webudvikler og skal lære Tailwind i den her uge</p>
            <button
              onClick={scrollToProjects}
              className="mt-8 bg-white text-purple-600 dark:bg-purple-800 dark:text-purple-200 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-400 hover:text-white dark:hover:bg-purple-400 hover:scale-105 transition-all duration-300"
            >
              Se mine projekter 
            </button>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-4xl mx-auto px-6 py-20 bg-white dark:bg-gray-950">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Om mig</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://picsum.photos/600/400"
              className="rounded-2xl shadow-xl w-full"
              alt="Profilbillede"
            />
            <div className="space-y-6 text-lg text-gray-900 dark:text-gray-200">
              <p>Jeg er en webudvikler-elev på hovedforløbet og har lige lært Tailwind CSS denne uge.</p>
              <p className="text-gray-600 dark:text-gray-400">
                Jeg bruger utility-klasser fra cheat sheetet til at bygge hurtigt og responsivt.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20 bg-white dark:bg-gray-950">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Mine projekter</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
              >
                <img
                  src={`https://picsum.photos/id/${i + 10}/600/400`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`Projekt ${i}`}
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">Projekt {i}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Bygget med Tailwind + React</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-purple-300 dark:bg-black text-white py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-700 dark:text-white">Kontakt mig</h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Dit navn"
                className="w-full p-4 rounded-2xl bg-purple-200 border dark:bg-purple-300 border-purple-100 dark:border-purple-600 text-white placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Din email"
                className="w-full p-4 rounded-2xl bg-purple-200 dark:bg-purple-300 border border-purple-100 dark:border-purple-600 text-white placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
               placeholder="Besked..."
              rows={5}                   
              className="w-full p-4 rounded-2xl bg-purple-200 dark:bg-purple-300 border  border-purple-100 dark:border-purple-600 text-white placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"  
              />
              <button className="w-full bg-purple-100 dark:bg-purple-700  text-purple-500 dark:text-white hover:text-white hover:bg-purple-500 dark:hover:bg-purple-400 py-4 rounded-2xl font-semibold transition duration-300">
                Send besked
              </button>
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