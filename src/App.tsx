import Home from "./pages/Home";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";
import logoVideo from "./assets/img/waysLogoAnim.mp4";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {showLogo ? (
        <video
          width="250px"
          height="auto"
          className="logoVideo"
          src={logoVideo}
          autoPlay
          loop
          muted={true}
        />
      ) : (
        <>
          <AnimatedCursor
            innerSize={8}
            outerSize={45}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "#cc2a21",
            }}
            outerStyle={{
              border: "3px solid #cc2a21",
            }}
            showSystemCursor={true}
            trailingSpeed={1}
          />
          <Nav />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
