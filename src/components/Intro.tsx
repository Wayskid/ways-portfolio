import "../scss/intro.scss";
import myImg from "../assets/img/myImg.png";
import resume from "../assets/resume.pdf";
import IconBackground from "./iconBackground/IconBackground";
import { FiGithub } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import AppBtn from "./appBtn/AppBtn";
import Reveal, { SlideIn } from "./Reveal Animations/Reveal";
import { useInView } from "framer-motion";
import { useRef, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";

export default function Intro() {
  const { setIntroInView } = useContext(AppContext);

  const divRef = useRef(null);
  const isInView = useInView(divRef, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      setIntroInView(true);
    } else {
      setIntroInView(false);
    }
  }, [isInView]);

  return (
    <div id="intro" ref={divRef}>
      <>
        <IconBackground />
        <div className="introBody">
          <Reveal className="info">
            <>
              <p className="jobTitle">
                Hi, I'm <span className="myName">Richard</span> <br /> Front End
                Developer
                <p className="location">Hull, UK</p>
              </p>
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
