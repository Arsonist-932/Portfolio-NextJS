import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const ProjectModal = ({ onClose, project }) => {
  return (
    <>
      <div
        className="fixed top-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50 w-full text-black"
        onClick={(e) => {
          onClose();
          e.stopPropagation();
        }}
      >
        <div
          className="mx-6 p-4 min-w-[300px] md:max-w-[700px] h-[500px] sm:h-auto bg-white text-sm rounded-lg overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button>
            <XMarkIcon
              onClick={onClose}
              className="h-8 text-red-500 hover:text-red-700 absolute top-1 right-1"
            />
          </button>

          <div className="w-full">
            <Image src={project.banner} alt="Banner" width={500} height={500} />
          </div>

          <div className="flex flex-col gap-4 my-4">
            <div>
              <h3 className="uppercase font-extrabold bg-gradient-to-br from-[#080808e5] to-primary-900 text-white text-center rounded-2xl mb-2">
                Présentation
              </h3>
              <p className="px-3">{project.presentation}</p>
            </div>
            <div>
              <h3 className="uppercase font-extrabold bg-gradient-to-br from-[#080808e5] to-primary-900 text-white text-center rounded-2xl mb-2">
                Objectif
              </h3>
              <p className="px-3">{project.objectif}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {project.technologies.map((item, index) => (
                <li key={index} className="list-none ">
                  <p className="block px-3 py-2 bg-gradient-to-r from-primary-300 to-secondary-500 rounded-2xl text-white">
                    {item}
                  </p>
                </li>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <Link
              href={project.gitUrl}
              target="_blank"
              className="block px-5 py-2 bg-gradient-to-br from-[#080808e5] to-primary-900 rounded-xl text-white"
            >
              Github
            </Link>
            <Link
              href={project.previewUrl}
              target="_blank"
              className="block px-5 py-2 bg-gradient-to-br from-[#080808e5] to-primary-900 rounded-xl overflow-hidden text-white"
            >
              Lien vers le site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
