import "../scss/home.scss";
// import About from "../components/About";
// import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Summary from "../components/Summary";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="home">
      <Intro />
      <Skills />
      <Projects />
      <Summary />
      <Contact />
    </div>
  );
}
