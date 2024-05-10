"use client";
import "./style/ProjectSection.scss";

import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import data from "../../../public/data.json";
import ProjectModal from "./ModalProject";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [isOpen, setIsOpen] = useState<Project | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = data.projects.filter((project: Project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="projects-container">
        <h2>Mes Projets</h2>

        <div className="filterbar">
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
          <ul ref={ref} className="projects">
            {filteredProjects.map((project: Project, index: number) => (
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

interface Project {
  id: number;
  title: string;
  image: string;
  banner: string;
  client: string;
  presentation: string;
  objectif: string;
  technologies: string[];
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}
