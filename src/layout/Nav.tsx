import { Variants, motion } from "framer-motion";
import "../scss/nav.scss";
import { useState, useContext } from "react";
import logo from "../assets/img/waysLogo.png";
import { BiX } from "react-icons/bi";
import { FiGithub, FiMenu } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import AppContext from "../context/AppContext";

export default function Navigation() {
  const { introInView } = useContext(AppContext);

  const [showNavMenu, setShowNavMenu] = useState(false);

  const showNavVariants: Variants = {
    showNav: {
      backgroundColor: "#02010ecc",
      top: -100,
      transition: {
        type: "easeIn",
      },
      transitionEnd: {
        position: "fixed",
        top: 0,
      },
    },
    hideNav: {
      position: "absolute",
    },
  };

  const navMenuVariant: Variants = {
    showNavMenu: {
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      opacity: 1,
      visibility: "visible",
      transition: {
        transitionDelay: 0.2,
        duration: 0.8,
        type: "spring",
      },
    },
    hideNavMenu: {
      top: "3rem",
      height: "50px",
      width: "50px",
      opacity: 0,
      transitionEnd: {
        visibility: "hidden",
      },
    },
  };

  const navLinksVariant: Variants = {
    showNavLinks: {
      translateX: 0,
      opacity: 1,
      transition: {
        transitionDelay: 1.5,
        type: "ease",
      },
    },
    hideNavLinks: {
      translateX: 400,
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={showNavVariants}
      animate={introInView ? "hideNav" : "showNav"}
      className="nav"
    >
      <div className="navWrap">
        <img src={logo} alt="Ways" />
        <div className="burger">
          {showNavMenu ? (
            <div
              className="closeMenu"
              onClick={() => setShowNavMenu(!showNavMenu)}
            >
              <BiX />
            </div>
          ) : (
            <div className="menu" onClick={() => setShowNavMenu(!showNavMenu)}>
              <FiMenu />
            </div>
          )}
          <motion.div
            layout
            variants={navMenuVariant}
            animate={showNavMenu ? "showNavMenu" : "hideNavMenu"}
            className="navMenu"
          >
            <div className="waysMade">
              <p>
                <span className="madeBy">Made by</span>
                <span className="ways">Ways</span>
              </p>
              <div>
                <FiGithub /> <GrLinkedin />
              </div>
            </div>
            <motion.ul
              variants={navLinksVariant}
              animate={showNavMenu ? "showNavLinks" : "hideNavLinks"}
              transition={{ transitionDelay: 0.5 }}
              className="menuLinks"
            >
              <a onClick={() => setShowNavMenu(!showNavMenu)} href="#skills">
                Expertise
              </a>
              <a onClick={() => setShowNavMenu(!showNavMenu)} href="#projects">
                Projects
              </a>
              <a onClick={() => setShowNavMenu(!showNavMenu)} href="#summary">
                Summary
              </a>
              <a onClick={() => setShowNavMenu(!showNavMenu)} href="#contact">
                Contact
              </a>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
