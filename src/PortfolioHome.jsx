import { useEffect, useState } from "react";
import pdf4 from "./assets/visva_resume.pdf"
import "./PortfolioHome.css";
import "./section1.css";
import img1 from "./assets/IMG_0464.JPG";
import Education from "./Education";
import Experience from "./Expirence";
import imgs1 from "./assets/bikespare1.png"
import Skillss from "./skill";
import Projects from "./project";
import Services from "./Services";
import Aboutme from "./about";
import Beyondcodes from "./beyondcode";
import Contacts from "./contact";
import ThemeToggle from "./ThemeToggle";


function Homepage() {
    const [menubar, setmenubar] = useState(0);
    const names = ["Software Developer_", "Web Developer_"]
    const [named, setnamed] = useState(0);
    useEffect(() => {
        const vars = setInterval(() => {
            setnamed(preve => (preve + 1) % names.length)

        }, 2500);
        return () => clearInterval(vars)
    }, [])
    const colors = ["yellow", "gold", "white", "black"];
    const [indexx, setindexx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setindexx(prevIndex => (prevIndex + 1) % colors.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section className="port-body" id="home">

                <nav className="navbar">
                    <a className="name" href="#home" aria-label="Ayom Leek home">
                        <img src="/logo.svg" alt="" />
                    </a>
                    <ul className="ul-list">
                        <li className="lists"><a href="#abouts1" className="anchor">About</a></li>
                        <li className="lists"><a href="#education" className="anchor">Education</a></li>
                        <li className="lists"><a href="#exps" className="anchor">Experience</a></li>
                        <li className="lists"><a href="#projectss1" className="anchor">Portfolio</a></li>
                        <li className="lists"><a href="#services" className="anchor">Services</a></li>
                        <li className="lists"><a href="#beyondcode" className="anchor">Beyond the Code</a></li>
                        <li className="lists contact" style={{ color: colors[indexx] }}>
                            <a href="#contactss" className="anchor">Contact</a>
                        </li>
                    </ul>
                    <div className="navbar-controls">
                        <ThemeToggle />
                        <button
                            className="icon-bar"
                            type="button"
                            aria-label={menubar === 0 ? "Open navigation menu" : "Close navigation menu"}
                            aria-expanded={menubar === 1}
                            aria-controls="mobile-navigation"
                            onClick={() => setmenubar(current => current === 0 ? 1 : 0)}
                        >
                            <span className="material-icons" aria-hidden="true">{menubar === 0 ? "menu" : "close"}</span>
                        </button>
                    </div>
                </nav>
                {menubar === 1 && (<div className="menusbar" id="mobile-navigation"> <ul className="vv">
                    <li className="xx"><a href="#abouts1" className="anchor" onClick={() => setmenubar(0)}>About</a></li>
                    <li className="xx"><a href="#education" className="anchor" onClick={() => setmenubar(0)}>Education</a></li>
                    <li className="xx"><a href="#exps" className="anchor" onClick={() => setmenubar(0)}>Experience</a></li>
                    <li className="xx"><a href="#projectss1" className="anchor" onClick={() => setmenubar(0)}>Portfolio</a></li>
                    <li className="xx"><a href="#services" className="anchor" onClick={() => setmenubar(0)}>Services</a></li>
                    <li className="xx"><a href="#beyondcode" className="anchor" onClick={() => setmenubar(0)}>Beyond the Code</a></li>
                    <li className="xx contact" style={{ color: colors[indexx] }}>
                        <a href="#contactss" className="anchor" onClick={() => setmenubar(0)}>Contact</a>
                    </li>
                </ul>

                </div>)}
                <section
                    className="section1"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${img1}")`
                    }}
                >
                    <div className="section1dev1">
                        <h1 className="section1namess">Hi, I'm Ayom Leek</h1>
                        <h2 className="dominname"  >{names[named]}</h2>
                        <h5 className="tagline">
                            Turning complex problems into impactful software with clean code,
                            thoughtful design, and scalable solutions.
                        </h5>
                        <div className="resumePROJECTS">
                            <a href="#projectss1">
                                <div className="ViewProjects">
                                    View Projects <span className="material-icons project-button-icon" aria-hidden="true">open_in_new</span>
                                </div>
                            </a>
                            <a href={pdf4} download="Ayom_Leek_CV.pdf">
                                <div className="resume">
                                    Download CV <span className="material-icons" id="spans1" aria-hidden="true">download</span>
                                </div>
                            </a>
                        </div>
                    </div>

                </section>
                <div className="expo"></div>
                <Aboutme />
                <Education />
                <Experience />
                <Skillss />
                <Projects images={imgs1} />
                <Services />
                <Beyondcodes />
                <Contacts />


            </section>
        </>
    );
}

export default Homepage;