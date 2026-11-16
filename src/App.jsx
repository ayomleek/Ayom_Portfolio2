import CanvasCursor from "./components/CanvasCursor/CanvasCursor";
import Header from "./components/Header/Header";
import "./App.css";
import Resume from "./sections/Resume/Resume";
import Skills from "./sections/Skills/Skills";
import Portfolio from "./sections/Portfolio/Portfolio";
import Services from "./sections/Services/Services";
import About from "./sections/About/About";
import BeyondCode from "./sections/BeyondCode/BeyondCode";
import Contact from "./sections/Contact/Contact";
import bikeImage from "./assets/images/bikespare1.png";
import "./components/Header/ThemeToggle.css";

function App() {
  return (
    <>
      <CanvasCursor />
      <section className="port-body" id="home">
        <Header />
        <div className="expo"></div>
        <About />
        <Resume />
        <Skills />
        <Portfolio images={bikeImage} />
        <Services />
        <BeyondCode />
        <Contact />
      </section>
    </>
  );
}

export default App;
