import "./contact.css";
import { useEffect, useState } from "react";
function Contacts() {
    const aboutcolor = ['gold', 'yellow', 'white']
    const [colorr, setcolorr] = useState(0);
    useEffect(() => {
        const venom = setInterval(() => {
            setcolorr(prev => (prev + 1) % aboutcolor.length)

        }, 1000);
        return () => clearInterval(venom);

    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name") || "");
        const email = String(formData.get("email") || "");
        const message = String(formData.get("message") || "");
        const subject = `Portfolio inquiry from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

        window.location.href = `mailto:ayomleek@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    let cd="</>"
    return (<>
        <section className="contactsection" id="contactss">
            <div className="contactinner">
                <header className="contactheading">
                    <div className="touch">
                        <div
                            className="carrerDotss wess"
                            style={{ backgroundColor: aboutcolor[colorr] }}
                        ></div>
                        <h4 className="passionname">Get in Touch</h4>
                    </div>
                    <h1>Let&apos;s Collaborate</h1>
                    <p>Curious about working together? Let&apos;s start a conversation.</p>
                </header>

                <div className="contactgrid">
                    <div className="contactformcard">
                        <h2>Reach Out Here</h2>
                        <p>Drop your details and I will get back to you!</p>
                        <form className="contactform" onSubmit={handleSubmit}>
                            <label htmlFor="contact-name">Name</label>
                            <input id="contact-name" name="name" type="text" autoComplete="name" required />

                            <label htmlFor="contact-email">Email</label>
                            <input id="contact-email" name="email" type="email" autoComplete="email" required />

                            <label htmlFor="contact-message">Message</label>
                            <textarea id="contact-message" name="message" rows="5" required></textarea>

                            <button type="submit">
                                Send Message
                                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>

                    <div className="contactinfo">
                        <h2>Get in Touch</h2>
                        <p>I would love to hear from you - reach out anytime:</p>
                        <div className="contactinfoitem">
                            <i className="fa-solid fa-phone" aria-hidden="true"></i>
                            <div>
                                <h3>Contact</h3>
                                <a href="tel:+254792920744">+254792920744</a>
                            </div>
                        </div>
                        <div className="contactinfoitem">
                            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:ayomleek@gmail.com">ayomleek@gmail.com</a>
                            </div>
                        </div>
                        <div className="contactinfoitem">
                            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                            <div>
                                <h3>Location</h3>
                                <p>Kakuma, Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footers">
            <div className="footercontent">
                <div className="footerbrand">
                    <h2 className="footername">Ayom Leek</h2>
                    <p className="footerdescription">
                        Junior web developer passionate about creating clean, functional websites.
                    </p>
                    <div className="footersocials">
                        <a href="https://www.linkedin.com/in/ayom-leek/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/ayomleek" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.facebook.com/@ayom.leek.2025" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                </div>

                <nav className="footerlinks" aria-label="Quick links">
                    <h3>Quick Links</h3>
                    <a href="#exps">Experience</a>
                    <a href="#projectss1">Portfolio</a>
                    <a href="#services">Services</a>
                    <a href="#abouts1">About</a>
                    <a href="#beyondcode">Beyond the Code</a>
                    <a href="#contactss">Contact</a>
                </nav>

                <address className="footercontact">
                    <h3>Contact Info</h3>
                    <a href="mailto:ayomleek@gmail.com">
                        <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                        ayomleek@gmail.com
                    </a>
                    <a href="tel:+254792920744">
                        <i className="fa-solid fa-phone" aria-hidden="true"></i>
                        +254792920744
                    </a>
                    <p>
                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                        Kakuma, Kenya
                    </p>
                </address>
            </div>
            <div className="footerbottom">
                <p>&copy; {new Date().getFullYear()} Ayom Leek. All rights reserved.</p>
                <span>{cd}</span>
            </div>
        </footer>


    </>)
}
export default Contacts;