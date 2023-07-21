import "../scss/projects.scss";
import { projects } from "../assets/projectsData";
import ProjectCard from "./ProjectCard";
import { useInView } from "framer-motion";
import { useRef, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { ReducerActionTypes } from "../types/ReducerActionTypes";
import SecHeader from "./SecHeader";
import Reveal from "./Reveal Animations/Reveal";

export default function Projects() {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: false, amount: "some" });
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (isInView) {
      dispatch({ type: ReducerActionTypes.ACTIVE_NAV, payload: "projects" });
    }
  }, [isInView]);
  return (
    <ul id="projects">
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </ul>
  );
}
