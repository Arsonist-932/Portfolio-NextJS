import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import dataSkills from "@/data/dataSkills";
import TabButton from "./TabButton";
import Image from "next/image";

const Skills = () => {
  const [tab, setTab] = useState("Dev");
  const [isVisible, setIsVisible] = useState(false);

  const handleTabChange = (id) => {
    setIsVisible(false);
    setTimeout(() => {
      setTab(id);
      setIsVisible(true);
    }, 500);
  };

  const data = dataSkills.find((t) => t.id === tab).content;
  const skills = data.map((skill) => skill);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="mx-6 my-20">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white my-8">
          Mes Compétences
        </h2>
        <div className="flex flex-row justify-center text-lg lg:text-2xl">
          {dataSkills.map((data, index) => (
            <TabButton
              key={index}
              selectTab={() => handleTabChange(data.id)}
              active={tab === data.id}
            >
              {data.title}
            </TabButton>
          ))}
        </div>

        {/* Affichage des compétences avec animation */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 ">
          <AnimatePresence>
            {isVisible &&
              skills.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: index * 0.3 }}
                  className="list-none"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                  />
                  <p className=" text-center text-xs p-2">{item.title}</p>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Skills;
