import "./Contact.css";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";

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
        <Footer />
    </>)
}
export default Contacts;