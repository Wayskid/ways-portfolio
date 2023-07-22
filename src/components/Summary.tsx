import { FiClock } from "react-icons/fi";
import "../scss/summary.scss";
import SecHeader from "./SecHeader";
import { BiCertification, BiTrophy } from "react-icons/bi";
import { SiPolymerproject } from "react-icons/si";
import Reveal from "./Reveal Animations/Reveal";

export default function Summary() {
  return (
    <div id="summary">
      <SecHeader secTitle="Summary" />
      <div className="summaryGrid">
        <Reveal>
          <>
            <FiClock />
            <p className="summaryTitle">Work Hours</p>
            <p className="summaryValue">3685</p>
          </>
        </Reveal>
        <Reveal>
          <>
            <SiPolymerproject />
            <p className="summaryTitle">Projects</p>
            <p className="summaryValue">41</p>
          </>
        </Reveal>
        <Reveal>
          <>
            <BiCertification />
            <p className="summaryTitle">Certifications</p>
            <p className="summaryValue">5</p>
          </>
        </Reveal>
        <Reveal>
          <>
            <BiTrophy />
            <p className="summaryTitle">Awards</p>
            <p className="summaryValue">2</p>
          </>
        </Reveal>
      </div>
    </div>
  );
}
