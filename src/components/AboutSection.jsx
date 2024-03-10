"use client";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="mx-6 my-12 lg:mx-40 xl:mx-60 flex flex-col md:flex-row lg:justify-center items-center">
      {/* IMAGE */}
      <div className="md:w-2/3 lg:w-1/2 mb-6 md:mb-0 md:mr-6">
        <Image
          className="rounded-[10%] opacity-75 object-cover"
          src="/images/about-image2.webp"
          alt="image"
          width={500}
          height={500}
          priority
        />
      </div>

      {/* TEXTE */}
      <div className="md:w-1/2 lg:w-2/3 text-center md:text-left">
        <h2 className="text-4xl font-bold text-white mb-2">Qui suis-je ?</h2>

        <p className="text-sm lg:text-lg mb-4">
          Autodidacte passionné par l&apos;informatique, j&apos;ai fait le choix
          de suivre une formation intensive de 9 mois axée sur des technologies
          modernes telles que React, Redux, Sass et Node.js.
        </p>

        <p className="text-sm lg:text-lg mb-4">
          J&apos;ai travaillé sur divers projets démontrant mes compétences dans
          la création d&apos;application web dynamiques et interactives avec une
          maîtrise de Sass ou Tailwind pour des styles CSS modulaires et
          maintenables dans des contextes réels.
        </p>

        <p className="text-sm lg:text-lg mb-4">
          N&apos;hésitez pas à me contacter pour discuter de collaborations
          potentielles ou pour en savoir plus sur mon travail.
        </p>

        {/* BOUTONS */}
        <div className="flex flex-col md:flex-row justify-center text-white">
          <Link
            href="/#contact"
            className="inline-block px-6 py-3 mb-2 md:mb-0 md:mr-2 w-full md:w-auto rounded-full bg-gradient-to-r from-primary-400 to-secondary-500"
          >
            Contact
          </Link>

          <Link
            target="_blank"
            href="/docs/CV-Alexandre.pdf"
            className="inline-block px-1 py-1 w-full md:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
