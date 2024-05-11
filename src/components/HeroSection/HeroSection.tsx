"use client";
import "./HeroSection.scss";
import { FaChevronDown } from "react-icons/fa6";

import { TypeAnimation } from "react-type-animation";
import IconSocials from "../IconSocials";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container lg:mx-40">
          <div className="text-animation">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1>
                <span>Hello, I&apos;m</span>
                <br></br>
                <TypeAnimation
                  sequence={[
                    "Alexandre",
                    1000,
                    "Web Developer",
                    1000,
                    "Passionné",
                    1000,
                  ]}
                  wrapper="p"
                  speed={40}
                  repeat={Infinity}
                />
              </h1>
            </motion.div>
          </div>

          <div className="social">
            <ul>
              <IconSocials width={45} height={45} />
            </ul>
          </div>

          <div className="button-container">
            <Link href="/#about">
              <span className="sr-only">Lien vers la section A Propos</span>
              <FaChevronDown size={30} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
