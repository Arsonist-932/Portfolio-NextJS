import "./style/ModalProject.scss";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const ProjectModal = ({ onClose, project }: ModalProjectProps) => {
  return (
    <>
      <div
        className="modal-project"
        onClick={(e: MouseClickEvent) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <div
          className="content text-sm"
          onClick={(e: MouseClickEvent) => e.stopPropagation()}
        >
          <button onClick={onClose}>
            <FaXmark size={25} />
          </button>

          <Image
            src={project.banner}
            alt="Banner"
            width={700}
            height={700}
            priority
          />

          <div className="text-container">
            <div className="presentation">
              <h3>Présentation</h3>
              <p>{project.presentation}</p>
            </div>

            <div className="objectif">
              <h3>Objectif</h3>
              <p>{project.objectif}</p>
            </div>

            <div className="skills-container">
              {project.technologies.map((item: string, index: number) => (
                <li key={index} className="list-none">
                  <p>{item}</p>
                </li>
              ))}
            </div>
          </div>

          <div className="links-container">
            <Link href={project.gitUrl} target="_blank">
              Github
            </Link>

            <Link href={project.previewUrl} target="_blank">
              Lien vers le site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;

type MouseClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
interface ModalProjectProps {
  onClose: () => any;
  project: Project;
}

interface Project {
  banner: string;
  presentation: string;
  objectif: string;
  technologies: string[];
  gitUrl: string;
  previewUrl: string;
}
