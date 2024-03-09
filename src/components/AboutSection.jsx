"use client";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <div className="mx-6 my-10 flex gap-4 flex-col items-center md:items-start md:flex-row 2xl:mx-36 2xl:gap-16 ">
        <Image
          className="rounded-[10%] opacity-75 "
          src="/images/about-image2.webp"
          alt="image"
          width={500}
          height={500}
          priority
        />

        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-white mb-2">Qui suis-je ?</h2>

          <p className="md:text-base lg:text-lg 2xl:text-2xl ">
            Je suis un autodidacte passionné par l&apos;informatique, ayant
            suivi une formation intensive de 9 mois axée sur des technologies
            modernes telles que React, Redux, Sass et Node.js.
            <br />
            <br />
            Avec une expertise avancée dans la création d&apos;applications web
            dynamiques et interactives, une maîtrise de Sass pour des styles CSS
            modulaires et maintenables, ainsi qu&apos;une capacité à développer
            des applications côté serveur robustes et évolutives avec Node.js.
            <br />
            <br />
            J&apos;ai travaillé sur divers projets démontrant mes compétences
            dans des contextes réels, notamment des applications web
            interactives et des sites e-commerce.
            <br />
            <br />
            Mon objectif est de continuer à évoluer en tant que développeur web,
            en explorant de nouvelles technologies et en relevant de nouveaux
            défis passionnants.
            <br />
            N&apos;hésitez pas à me contacter pour discuter de collaborations
            potentielles ou pour en savoir plus sur mon travail.
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
