"use client";

import { projects } from "../data/projects";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="py-20 px-5 max-w-6xl mx-auto mt-8"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-white ">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-evenly">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
