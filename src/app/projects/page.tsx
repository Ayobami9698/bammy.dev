import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Weather-Info",
    description:
      "A weather monitoring website built with Next.js and Tailwind CSS.",
    image: "/Images/cloud.jpg",
    link: "https://bammy-weather-info.netlify.app/",
  },
  {
    title: "Budget-Lens",
    description: "A fully responsive app to manage and monitor my spending.",
    image: "/Images/BudgetLogo.png",
    link: "https://budget-lens.netlify.app/",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-5 py-20 sm:px-8 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
          My Work
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Featured Projects
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
          A collection of projects I have built using modern web technologies,
          with a focus on responsive design and user experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 justify-items-center">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md shadow-black transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black dark:bg-gray-800"
          >
            {/* Image */}
            <div className="relative h-60 w-full overflow-hidden bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-xl font-bold text-gray-900">
                {project.title}
              </h2>

              <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 sm:text-base">
                {project.description}
              </p>

              {/* Button */}
              <div className="mt-6">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 w-fit"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1 text-blue-600 hover:text-blue-400">
                    Visit Project →
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
