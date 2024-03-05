"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import socialsLink from "@/data/socialsLink";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="lg:mx-40">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <h1 className=" mb-2 text-center lg:text-start text-white font-extrabold text-4xl md:text-5xl lg:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m
              </span>
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
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </h1>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-start gap-3 pt-2">
          {socialsLink.map((item, index) => (
            <ul key={index} className="flex">
              <li>
                <Link href={item.Url} target="_blank">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
            </ul>
          ))}
        </div>

        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 bottom-1 lg:bottom-0 left-1/2">
          <Link
            href="#about"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-center">
              En savoir plus
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
