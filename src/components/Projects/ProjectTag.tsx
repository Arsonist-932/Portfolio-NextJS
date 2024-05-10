import React from "react";

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-white border-[#f97316]"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button className={`${buttonStyles}`} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;

export interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected?: boolean | string;
}
