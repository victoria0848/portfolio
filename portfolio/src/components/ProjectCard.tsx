type ProjectCardProps = {
  project: any;
  onClick: () => void;
};

export default function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className="cursor-pointer group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 h-full flex flex-col"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover group-hover:scale-110 transition"
      />

      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {project.tech.join(", ")}
        </p>
      </div>
    </article>
  );
}