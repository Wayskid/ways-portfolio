import "../scss/home.scss";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="home">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
