"use client";
import "./AboutSection.scss";

import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-image">
        <Image
          src="/images/about-image2.webp"
          alt="image"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="about-text">
        <h2 className="text-4xl font-bold mb-2">Qui suis-je ?</h2>
        <p>
          Autodidacte passionné par l&apos;informatique, j&apos;ai fait le choix
          de suivre une formation intensive de 9 mois axée sur des technologies
          modernes telles que React, Redux, Sass et Node.js.
        </p>
        <p>
          J&apos;ai travaillé sur divers projets démontrant mes compétences dans
          la création d&apos;application web dynamiques et interactives avec une
          maîtrise de Sass ou Tailwind pour des styles CSS modulaires et
          maintenables dans des contextes réels.
        </p>
        <p>
          N&apos;hésitez pas à me contacter pour discuter de collaborations
          potentielles ou pour en savoir plus sur mon travail.
        </p>

        <div className="about-button">
          <Link href="/#contact" className="button-contact">
            Contact
          </Link>

          <Link
            className="button-download"
            target="_blank"
            href="/docs/CV-Alexandre.pdf"
          >
            <span>Download CV</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
