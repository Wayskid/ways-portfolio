import "../scss/projects.scss";
import { projects } from "../assets/projectsData";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <div id="projects">
      <Reveal divId="Portfolio">
        <div className="projectsHeader">
          <p>Here's my recent</p>
          <p>Projects</p>
        </div>
      </Reveal>
      <ul className="projectsGrid">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ul>
      <Reveal divId="Portfolio"></Reveal>
    </div>
  );
}
