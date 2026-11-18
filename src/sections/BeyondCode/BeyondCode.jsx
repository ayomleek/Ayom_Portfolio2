import "./BeyondCode.css";
import coachingImage from "../../assets/images/presenting.jpg";
import certificateImage from "../../assets/images/IMG_1539.jpg";
import classroomImage from "../../assets/images/IMG_0464.JPG";
import { useEffect, useState } from "react";

const carouselImages = [
    { src: coachingImage, alt: "Presenting digital skills to a group of learners" },
    { src: certificateImage, alt: "Receiving a certificate of completion" },
    { src: classroomImage, alt: "Learners practicing digital skills in a computer lab" },
];

function Beyondcodes() {
    const aboutcolor = ['gold', 'yellow', 'white']
    const [colorr, setcolorr] = useState(0);
    const [activeImage, setActiveImage] = useState(0);
    useEffect(() => {
        const venom = setInterval(() => {
            setcolorr(prev => (prev + 1) % aboutcolor.length)

        }, 1000);
        return () => clearInterval(venom);

    }, [])
    useEffect(() => {
        const rotation = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (rotation.matches) return undefined;

        const carouselTimer = setInterval(() => {
            setActiveImage(prev => (prev + 1) % carouselImages.length);
        }, 5000);

        return () => clearInterval(carouselTimer);
    }, [])
    return (
        <>
            <section className="beyondcodesection" id="beyondcode">
                <div className="beyondcodediv">
                    <div className="beyond-content-grid">
                        <div className="beyond-carousel" role="region" aria-label="Digital learning image carousel">
                            <img
                                key={activeImage}
                                className="beyond-carousel-image"
                                src={carouselImages[activeImage].src}
                                alt={carouselImages[activeImage].alt}
                            />
                            <div className="beyond-carousel-indicators">
                                {carouselImages.map((image, index) => (
                                    <button
                                        key={image.src}
                                        type="button"
                                        className={`beyond-carousel-indicator${activeImage === index ? " is-active" : ""}`}
                                        aria-label={`Show image ${index + 1}`}
                                        aria-pressed={activeImage === index}
                                        onClick={() => setActiveImage(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="beyond-copy-card">
                            <div className="beyondname">
                                <div
                                    className="carrerDotss wess"
                                    style={{ backgroundColor: aboutcolor[colorr] }}
                                ></div>
                                <h4 className="passionname">Technology &amp; Passion</h4>
                            </div>
                            <h1 className="beyodsme">Information Technology Coach_</h1>
                            <p className="beyondcodedescrip">ICT coaching, for me, goes beyond teaching software and tools.
                                It is about equipping people with the digital skills to learn, create, and thrive in a
                                technology-driven world. Whether I am guiding beginners through their first lines of code
                                or helping learners build real projects, I focus on hands-on learning that builds
                                confidence and independence.</p>

                            <p className="beyondcodedescrip">My work as an ICT Coach at Learning Lions also complements
                                my career as a developer, as teaching sharpens my own technical understanding and
                                communication skills. I continually learn from new technologies, education resources,
                                and learner feedback to deliver more effective and inclusive digital education.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Beyondcodes;