import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ProjectTypes } from "../types/InitialStateTypes";

export default function ProjectCard({ project }: { project: ProjectTypes }) {
  return (
    <li className="projectCard">
      <a href="">
        <img src={project.appImg} alt="" />
      </a>
      <div className="projectCardBottom">
        <div className="projectCardText">
          <p className="projectTitle">{project.title}</p>
          <p className="projectName">{project.name}</p>
        </div>
        <div className="projectCardSeeMore">
          <div className="seeMoreWrap">
            <p className="projectDes">{project.description}</p>
            <p className="builtWith">{project.builtWith}</p>
            <div className="projectBtns">
              <a
                href={project.visitApp}
                target="_blank"
                className="projectSiteBtn"
              >
                Visit App <MdKeyboardDoubleArrowRight />
              </a>
              <a
                href={project.viewCode}
                target="_blank"
                className="projectGithubBtn"
              >
                View Code
                <MdKeyboardDoubleArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
