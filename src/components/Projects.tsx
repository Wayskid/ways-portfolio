import "../scss/projects.scss";
import { projects } from "../assets/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <ul id="projects">
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </ul>
  );
}
