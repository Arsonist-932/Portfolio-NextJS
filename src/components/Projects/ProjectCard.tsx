import { FaRegEye } from "react-icons/fa6";

const ProjectCard = ({ imgUrl, title, onClick }: ProjectCardProps) => {
  return (
    <div>
      <div
        className="cards-overlay"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay" onClick={onClick}>
          <h3>{title}</h3>

          <div className="icon-eye relative">
            <FaRegEye />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  onClick: () => void;
}
