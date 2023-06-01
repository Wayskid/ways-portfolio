import "../scss/intro.scss";
import CV from "../assets/resume.pdf";
import IconBackground from "./iconBackground/IconBackground";
import { AiOutlineArrowRight } from "react-icons/ai";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <div id="intro">
      <Reveal>
        <div className="introBody">
          <h1 className="name">Irinyemi Richard</h1>
          <p className="jobTitle">Front-End Developer</p>
          <div className="introBtns">
            <a href={CV} download className="homeDownloadBtn">
              Download CV
            </a>
            <a href="#about" className="viewWorkBtn">
              View my work
              <AiOutlineArrowRight className="arrowRight" />
            </a>
          </div>
        </div>
      </Reveal>
      <IconBackground />
    </div>
  );
}
