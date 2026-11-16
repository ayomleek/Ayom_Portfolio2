import "./Footer.css";

function Footer() {
  const cd = "</>";

  return (
    <footer className="footers">
      <div className="footercontent">
        <div className="footerbrand">
          <a className="footer-logo-link" href="#home" aria-label="Ayom Leek home">
            <img src="/images/logo.svg" alt="Ayom Leek" />
          </a>
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
          <a href="#abouts1">About</a>
          <a href="#resume">Resume</a>
          <a href="#projectss1">Portfolio</a>
          <a href="#services">Services</a>
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
  );
}

export default Footer;
