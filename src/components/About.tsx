import "../scss/about.scss";
import MyImage from "../assets/img/myImg.png";
import { RiTerminalBoxLine } from "react-icons/ri";
import { BiLayerPlus } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import Reveal from "./Reveal";

export default function About() {
  return (
    <div id="about">
      <div className="aboutMe">
        <Reveal divId="About">
          <div className="aboutMeHeader" id="aboutMeHeader">
            <p>Get To Know</p>
            <p>About Me</p>
          </div>
        </Reveal>
        <div className="aboutFlex">
          <Reveal divId="About">
            <div className="imageDiv">
              <img src={MyImage} alt="Me" className="myImg" />
              <div className="imageBack"></div>
            </div>
          </Reveal>
          <div className={`aboutDetails`}>
            <div className="aboutWriteUps">
              <Reveal divId="About">
                <p>
                  Hi, I'm Irinyemi Richard, an ever-improving Frontend developer
                  based in Hull, UK.{" "}
                </p>
              </Reveal>
              <Reveal divId="About">
                <p>
                  "Ever since I typed my first lines of code, I knew the next
                  one would be the best one."
                </p>
              </Reveal>
              <Reveal divId="About">
                <p>
                  A loyal, problem solving employee with high attention to details, whose mission is focused on crafting artistic, eye-catching and
                  scalable frontend products, while writing clean codes.
                </p>
              </Reveal>
            </div>
            <Reveal divId="About">
              <a href="#contact" className="aboutBtn">
                Let's Talk
              </a>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="skills">
        <Reveal divId="About">
          <div className="skill noBorder">
            <div className="iconDiv">
              <CgWebsite className="skillIcon" />
            </div>
            <p className="skillTitle">Frontend</p>
            <p className="skillIntro">
              I love enjoy bringing beautiful, artistic ideas to life in the
              browser by writing clean and maintainable codes
            </p>
            <ul className="skillGrid">
              <li>
                <p>HTML</p>
              </li>
              <li>
                <p>React</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
              <li>
                <p>SASS / SCSS</p>
              </li>
              <li>
                <p>TailWind CSS</p>
              </li>
              <li>
                <p>DaisyUI</p>
              </li>
              <li>
                <p>JavaScript</p>
              </li>
              <li>
                <p>Redux Toolkit</p>
              </li>
              <li>
                <p>TypeScript</p>
              </li>
              <li>
                <p>Git</p>
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal divId="About">
          <div className="skill">
            <div className="iconDiv">
              <RiTerminalBoxLine className="skillIcon" />
            </div>
            <p className="skillTitle">Backend</p>
            <p className="skillIntro">
              Interested in the entire web development spectrum and working on ambitious projects with a team.
            </p>
            <ul className="skillGrid">
              <li>
                <p>NodeJS</p>
              </li>
              <li>
                <p>Express</p>
              </li>
              <li>
                <p>Axios</p>
              </li>
              <li>
                <p>RESTful API</p>
              </li>
              <li>
                <p>MongoDB</p>
              </li>
              <li>
                <p>SQL</p>
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal divId="About">
          <div className="skill">
            <div className="iconDiv">
              <BiLayerPlus className="skillIcon" />
            </div>
            <p className="skillTitle">Design</p>
            <p className="skillIntro">
              I pay attention to little design details resulting in a yearning desire to paint clean fresh designs on
              the web.
            </p>
            <ul className="skillGrid">
              <li>
                <p>UX/UI</p>
              </li>
              <li>
                <p>Web Design</p>
              </li>
              <li>
                <p>Figma</p>
              </li>
              <li>
                <p>Canva</p>
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal divId="About">
          <p className="manyMore">Many more to come...</p>
        </Reveal>
      </div>
    </div>
  );
}
