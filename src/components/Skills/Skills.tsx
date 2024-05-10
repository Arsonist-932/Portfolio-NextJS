import "./Skills.scss";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import data from "../../../public/data.json";
import TabButton from "./TabButton";
import Image from "next/image";

const Skills = () => {
  const [currentTab, setcurrentTab] = useState("Dev");
  const [isVisible, setIsVisible] = useState(false);

  const handleTabChange = (id: string) => {
    setIsVisible(false);
    setTimeout(() => {
      setcurrentTab(id);
      setIsVisible(true);
    }, 10);
  };

  const currentData = data.skills.find(
    (data: SkillsProps) => data.id === currentTab
  );
  const skills = currentData ? currentData.content : [];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="skill-section">
        <h2>Mes Compétences</h2>

        <div className="tab-container">
          {data.skills.map((data: SkillsProps, index: number) => (
            <TabButton
              key={index}
              selectTab={() => handleTabChange(data.id)}
              active={currentTab === data.id}
            >
              {data.id}
            </TabButton>
          ))}
        </div>

        {/* Affichage des compétences avec animation */}
        <div className="skill-icon">
          <AnimatePresence>
            {isVisible &&
              skills.map(
                (item: { title: string; img: string }, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className="list-none"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={70}
                      height={70}
                      priority={true}
                    />
                    <p className=" text-center text-xs p-2">{item.title}</p>
                  </motion.div>
                )
              )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Skills;

interface SkillsProps {
  id: string;
  content: {
    title: string;
    img: string;
  }[];
}
