import Reveal from "../components/Reveal";
import AppContext from "../context/AppContext";
import "../scss/nav.scss";
import { useContext } from "react";

export default function Navigation() {
  const { state } = useContext(AppContext);
  return (
    <div className="nav">
      <Reveal>
        <div className="navWrap">
          <a href="#about">
            <p>About</p>
            <div
              className={`${state.activeNav === "About" && "navBorder"}`}
            ></div>
          </a>
          <a href="#projects">
            <p>Portfolio</p>
            <div
              className={`${state.activeNav === "Portfolio" && "navBorder"}`}
            ></div>
          </a>
          <a href="#contact">
            <p>Contact</p>
            <div
              className={`${state.activeNav === "Contact" && "navBorder"}`}
            ></div>
          </a>
        </div>
      </Reveal>
    </div>
  );
}
