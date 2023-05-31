import "../scss/about.scss";
import MyImage from "../assets/img/myImg.png";
import { RiTerminalBoxLine } from "react-icons/ri";
import { BiLayerPlus } from "react-icons/bi";
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
                  My mission is focused on crafting artistic, eye-catching and
                  scalable frontend products while writing clean codes, mostly
                  because I enjoy it!
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
              <RiTerminalBoxLine className="skillIcon" />
            </div>
            <p className="skillTitle">Frontend</p>
            <p className="skillIntro">
              I love writing clean and maintainable codes from scratch, and
              enjoy bringing beautiful, artistic ideas to life in the browser
            </p>
            <ul className="skillGrid">
              <li>
                <p>React</p>
              </li>
              <li>
                <p>HTML</p>
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
                <p>TypeScript</p>
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
              I love writing clean codes from scratch, and enjoy bringing
              beautiful, artistic ideas to life in the browser
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
                <p>Mongoose</p>
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
              I love writing clean codes from scratch, and enjoy bringing
              beautiful, artistic ideas to life in the browser
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
