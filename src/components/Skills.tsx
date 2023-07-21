import "../scss/skills.scss";
import { useInView } from "framer-motion";
import { useRef, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { ReducerActionTypes } from "../types/ReducerActionTypes";
import { SlideIn } from "./Reveal Animations/Reveal";
import SecHeader from "./SecHeader";
import { AiOutlineCode, AiOutlineCodepen } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";

export default function Skills() {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: false, amount: "some" });
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (isInView) {
      dispatch({ type: ReducerActionTypes.ACTIVE_NAV, payload: "skills" });
    }
  }, [isInView]);

  return (
    <div id="skills" ref={divRef}>
      <SecHeader secTitle="Expertise" />
      <div className="skillsGrid">
        <SlideIn className="skill">
          <>
            <AiOutlineCode />
            <p className="skillTitle">Frontend</p>
            <ul className="skillGrid">
              <div>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </div>
              <div>
                <li>React</li>
                <li>SASS</li>
                <li>TailWind</li>
                <li>DaisyUI</li>
              </div>
              <div>
                <li>Redux</li>
                <li>TypeScript</li>
                <li>Git</li>
              </div>
            </ul>
          </>
        </SlideIn>
        <SlideIn className="skill">
          <>
            <HiOutlineCode />
            <p className="skillTitle">Backend</p>
            <ul className="skillGrid">
              <div>
                <li>NodeJS</li>
                <li>Express</li>
                <li>Axios</li>
              </div>
              <div>
                <li>MongoDB</li>
                <li>API</li>
                <li>SQL</li>
              </div>
            </ul>
          </>
        </SlideIn>
        <SlideIn className="skill">
          <>
            <AiOutlineCodepen />
            <p className="skillTitle">Design</p>
            <ul className="skillGrid">
              <div>
                <li>Web Design</li>
                <li>Figma</li>
                <li>Canva</li>
              </div>
            </ul>
          </>
        </SlideIn>
      </div>
    </div>
  );
}
