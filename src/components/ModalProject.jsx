import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const ProjectModal = ({ onClose, project }) => {
  return (
    <>
      <div
        className="fixed top-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50 w-full text-white"
        onClick={(e) => {
          onClose();
          e.stopPropagation();
        }}
      >
        <div
          className="mx-6 p-4 py-8 min-w-[300px] md:max-w-[700px] h-[600px] sm:h-auto bg-black text-sm rounded-lg overflow-y-auto relative font-kaushan font-black"
          onClick={(e) => e.stopPropagation()}
        >
          <button>
            <XMarkIcon
              onClick={onClose}
              className="h-8 text-red-500 hover:text-red-700 absolute top-1 right-1"
            />
          </button>

          <div className="w-full">
            <Image
              src={project.banner}
              alt="Banner"
              width={700}
              height={500}
              priority
            />
          </div>

          <div className="flex flex-col gap-6 my-4">
            <div className="font-kaushan">
              <h3 className="uppercase font-extrabold text-xl text-red-600 text-center mb-2">
                Présentation
              </h3>
              <p className="px-3 text-lg">{project.presentation}</p>
            </div>
            <div>
              <h3 className="mb-2 text-center uppercase font-extrabold text-xl text-red-600">
                Objectif
              </h3>
              <p className="px-3 text-lg">{project.objectif}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {project.technologies.map((item, index) => (
                <li key={index} className="list-none ">
                  <p className="block px-3 py-2  border border-red-500 rounded text-orange-600 cursor-default">
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
              className="block px-5 py-2  border border-orange-500 bg-[#000000] text-red-600 rounded-xl hover:border-slate-800 hover:text-red-400"
            >
              Github
            </Link>
            <Link
              href={project.previewUrl}
              target="_blank"
              className="block px-5 py-2 border border-orange-500 bg-[#000000] text-red-600 rounded-xl hover:border-slate-800 hover:text-red-400"
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
