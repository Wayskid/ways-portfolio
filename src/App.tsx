import Home from "./pages/Home";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";
import logoVideo from "./assets/img/waysLogoAnim.mp4";

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
          <Nav />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
