"use client";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <div className="mx-6 my-10 flex gap-4 flex-col items-center md:items-start md:flex-row 2xl:mx-36 2xl:gap-16 ">
        <Image
          className="rounded-[10%] opacity-75 "
          src="/images/about-image2.jpg"
          alt="image"
          width={500}
          height={500}
          priority
        />

        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hello, moi c&apos;est Alexandre
          </h2>

          <p className="md:text-base lg:text-lg 2xl:text-2xl ">
            Autodidacte, mon parcours en tant que développeur web a commencé de
            manière à travers des projets personnels et des cours en ligne.
            <br />
            <br />
            J&apos;ai suivi fait le choix de suivre une formation de 9 mois chez
            OpenClassrooms, où j&apos;ai acquis des compétences sur des
            technologies comme React, Redux, Sass, ou Node.js, afin de créer des
            applications web performantes, intuitive et conviviale. Je suis
            toujours enthousiaste à l&apos;idée de me lancer dans de nouveaux
            projets, d&apos;explorer de nouvelles technologies et de collaborer
            avec des esprits créatifs.
            <br />
            <br />
            N&apos;hésitez pas à consulter mon portfolio pour découvrir mes
            réalisations. Si vous êtes intéressé par une collaboration ou si
            vous souhaitez simplement discuter de projets, je serais ravi
            d&apos;échanger avec vous !
          </p>

          <div className="flex flex-col md:flex-row gap-2">
            <Link
              href="/#contact"
              className="text-center inline-flex items-center justify-center px-6 py-3 w-full md:w-fit rounded-full bg-gradient-to-r from-primary-400 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact
            </Link>
            <Link
              target="_blank"
              href="/docs/CV-Alexandre.pdf"
              className="text-center px-1 inline-block py-1 w-full md:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <span className=" block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
