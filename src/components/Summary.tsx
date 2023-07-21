import { FiAward, FiClock } from "react-icons/fi";
import "../scss/summary.scss";
import SecHeader from "./SecHeader";
import { GrCertificate, GrClock, GrFormClock } from "react-icons/gr";
import { BiAward, BiCertification, BiTime, BiTrophy } from "react-icons/bi";
import { SiClockify, SiPolymerproject } from "react-icons/si";
import { AiFillClockCircle } from "react-icons/ai";

export default function Summary() {
  return (
    <div id="summary">
      <SecHeader secTitle="Summary" />
      <div className="summaryGrid">
        <div>
          <FiClock/>
          <p className="summaryTitle">Work Hours</p>
          <p className="summaryValue">3685</p>
        </div>
        <div>
          <SiPolymerproject/>
          <p className="summaryTitle">Projects</p>
          <p className="summaryValue">41</p>
        </div>
        <div>
          <BiCertification/>
          <p className="summaryTitle">Certifications</p>
          <p className="summaryValue">5</p>
        </div>
        <div>
          <BiTrophy/>
          <p className="summaryTitle">Awards</p>
          <p className="summaryValue">2</p>
        </div>
      </div>
    </div>
  );
}
