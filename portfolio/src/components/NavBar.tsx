type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({
  darkMode,
  setDarkMode,
}: NavbarProps) {
  return (
    <header className="bg-white dark:bg-gray-950 shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold text-purple-600 dark:text-purple-400"
        >
          Portfolio
        </a>

        <ul className="flex gap-8 text-sm font-medium text-purple-700 dark:text-gray-300">
          <li>
            <a href="#about">Om mig</a>
          </li>
          <li>
            <a href="#projects">Projekter</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-gray-200 rounded-full text-sm font-medium"
        >
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </nav>
    </header>
  );
}