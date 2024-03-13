"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import dataProjects from "@/data/dataProjects";
import ProjectModal from "./ModalProject";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [isOpen, setIsOpen] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = dataProjects.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="mx-6 lg:mx-24">
        <h2 className="text-center text-4xl font-bold text-white">
          Mes Projets
        </h2>

        <div className="text-white flex flex-row justify-center items-center gap-2 pt-12 pb-8">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="React"
            isSelected={tag === "React"}
          />
        </div>

        <div>
          <ul
            ref={ref}
            className="grid md:grid-cols-2 gap-8 md:gap-12 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.3 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  onClick={() => {
                    setIsOpen(project);
                  }}
                />
              </motion.li>
            ))}
          </ul>
        </div>
        {isOpen && (
          <ProjectModal
            onClose={() => {
              setIsOpen(null);
            }}
            project={isOpen}
          />
        )}
      </div>
    </>
  );
};

export default ProjectsSection;
