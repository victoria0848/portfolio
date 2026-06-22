type ProjectModalProps = {
  project: any;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          ✕
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl"
        />

        <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
          {project.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="bg-purple-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="bg-gray-900 text-white px-4 py-2 rounded-xl"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}