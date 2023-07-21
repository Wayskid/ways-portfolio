import { FiExternalLink } from "react-icons/fi";
import { ProjectTypes } from "../types/InitialStateTypes";
import SecHeader from "./SecHeader";
import Reveal, { SlideIn } from "./Reveal Animations/Reveal";
import { useEffect, useState } from "react";

export default function ProjectCard({ project }: { project: ProjectTypes }) {
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoop(!loop);
    }, 10000);
  });

  return (
    <div className="projectCard">
      <SecHeader secTitle={`Project 0${project.id}`} />
      <div className="projectCardBody">
        <SlideIn className="imgSlideIn">
          <a href={project.visitApp} className="imgWrap">
            <img src={project.appImg} alt={project.description.toString()} />
          </a>
        </SlideIn>
        <Reveal className="projectCardText">
          <>
            <div>
              <p className="projectName">{project.name}</p>
              <p className="projectTitle">{project.title}</p>
            </div>
            <p className="projectDes">{project.description}</p>
            <p className="builtWith">
              Built With: <span>{project.builtWith}</span>
            </p>
            <div className="projectBtns">
              <a
                href={project.viewCode}
                target="_blank"
                className="projectGithubBtn"
              >
                View Code
                <FiExternalLink />
              </a>
              <a
                href={project.visitApp}
                target="_blank"
                className="projectSiteBtn"
              >
                Live Demo <FiExternalLink />
              </a>
            </div>
          </>
        </Reveal>
      </div>
      {/* </div> */}
    </div>
  );
}
