import "../scss/footer.scss";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import WaysLogo from "../assets/img/logo.png";

export default function Footer() {
  return (
    <footer>
      <img src={WaysLogo} alt="logo" />
      <div className="socials">
        <a
          href="https://github.com/Wayskid"
          className="footerIconWrapper"
          target="_blank"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/richard-irinyemi-8a75a6190"
          className="footerIconWrapper"
          target="_blank"
        >
          <GrLinkedinOption />
        </a>
        <a
          href="https://twitter.com/irinyemialabi"
          className="footerIconWrapper"
          target="_blank"
        >
          <FiTwitter />
        </a>
      </div>
      <div className="copyRight">
        IRINYEMI RICHARD <span>&copy;2022</span>
      </div>
    </footer>
  );
}
