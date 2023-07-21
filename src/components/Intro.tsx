import "../scss/intro.scss";
import myImg from "../assets/img/myImg.png";
import resume from "../assets/resume.pdf";
import IconBackground from "./iconBackground/IconBackground";
import { useInView } from "framer-motion";
import { useRef, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { ReducerActionTypes } from "../types/ReducerActionTypes";
import { FiGithub } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import AppBtn from "./appBtn/AppBtn";
import Reveal, { SlideIn } from "./Reveal Animations/Reveal";

export default function Intro() {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: false, amount: 0.4 });
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (isInView) {
      dispatch({ type: ReducerActionTypes.ACTIVE_NAV, payload: "intro" });
    }
  }, [isInView]);

  return (
    <div id="intro">
      <>
        <IconBackground />
        <div className="introBody">
          <Reveal className="info">
            <>
              <p className="jobTitle">Frontend Developer</p>
              <div>
                <p className="myName">RICHARD IRINYEMI</p>
                <p className="location">currently in Hull, UK</p>
              </div>
              <p className="writeUp">
                I craft artistic, eye-catching and scalable frontend products,
                while writing clean codes.
              </p>
              <div className="introBtns">
                <AppBtn
                  label="Resume"
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  target="_blank"
                  href={resume}
                />
                <AppBtn
                  label="Projects"
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  href="#projects"
                />
              </div>
            </>
          </Reveal>
          <SlideIn className="myImg">
            <>
              <img src={myImg} alt="me" />
              <div className="socialIcons">
                <a href="https://github.com/Wayskid" target="_blank">
                  <FiGithub className="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/richard-irinyemi-8a75a6190"
                  target="_blank"
                >
                  <GrLinkedin className="linkedin" />
                </a>
              </div>
              <div></div>
            </>
          </SlideIn>
          <div className="scrollDown"></div>
        </div>
      </>
    </div>
  );
}
