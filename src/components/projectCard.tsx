import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg shadow-black overflow-hidden hover:shadow-2xl transition-shadow duration-300 justify-evenly">
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={400}
        className="object-cover w-full"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          {project.description}
        </p>
        <Link
          href={project.link}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Visit Project
        </Link>
      </div>
    </div>
  );
}
