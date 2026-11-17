import { useEffect, useRef, useState } from "react";
import "./Resume.css";


// Education entries.
const education = [
  {
    institution: "Power Learn Project (PLP)",
    category: "Software engineering",
    icon: "terminal",
    program: "Software Engineering Course",
    qualification: "Software engineering studies (in progress)",
    location: "Kakuma - Kenya",
    dates: "08/2026 - Present",
    focus: "Learning Python, Dart, MySQL, and other software engineering tools.",
  },
  {
    institution: "Learning Lions",
    category: "Web development",
    icon: "code",
    program: "Web Development - Bootcamp",
    qualification: "Front-end Web Development",
    location: "Loropio - Kenya",
    dates: "01/2026 - 03/2026",
    focus: "HTML, CSS, JavaScript, responsive layouts, and modern front-end workflows.",
  },
  {
    institution: "Learning Lions",
    category: "Digital skills",
    icon: "smartphone",
    program: "Mobile Leap Programme",
    qualification: "Digital Skills Training",
    location: "Loropio - Kenya",
    dates: "11/2025 - 12/2025",
    focus: "Practical digital skills, mobile-first thinking, and confident use of online tools.",
  },
  {
    institution: "Finn Church Aid (FCA) Kenya",
    category: "Digital marketing & employability",
    icon: "campaign",
    program: "Digital Marketing & Employability Skills Training",
    qualification:
      "Completed in partnership with the Ajira Digital Program and SIR (Solidarity Initiative for Refugees)",
    location: "Kakuma - Kenya",
    dates: "10/2025 - 03/2026",
    focus:
      "SEO, social media management, content creation, digital branding, Google Analytics, work-life skills, print management, and financial literacy.",
  },
  {
    institution: "Internet Society",
    category: "Networking",
    icon: "hub",
    program: "Fundamentals of Designing and Deploying Computer Networks",
    qualification: "Completed training on network design and deployment strategies",
    location: "Kakuma - Kenya",
    dates: "09/2025 - 11/2025",
    focus: "Network fundamentals, planning, connectivity, and deployment considerations.",
  },
  {
    institution: "Don Bosco Technical Institute",
    category: "Computer applications",
    icon: "computer",
    program: "Computer Applications Training",
    qualification: "Completed training in essential software and digital tools",
    location: "Kakuma - Kenya",
    dates: "01/2025 - 07/2025",
    focus: "Foundational computer applications, productivity tools, and everyday digital workflows.",
  },
];

function EducationSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className={`education-section ${visible ? "is-visible" : ""}`}
      aria-labelledby="education-title"
    >
      <div className="education-container">
        <header className="education-heading">
          <p className="education-eyebrow">
            <span className="education-status-dot" aria-hidden="true" />
            Growing one skill at a time
          </p>
          <h2 id="education-title">Education</h2>
          <p className="education-intro">
            A learning journey rooted in curiosity, branching into technology,
            design, and the digital skills I use every day.
          </p>
        </header>

        <div className="education-tree" aria-label="Education timeline">
          <div className="education-tree-trunk" aria-hidden="true" />
          <div className="education-tree-roots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <ol className="education-list">
            {education.map((item, index) => (
              <li
                className="education-branch"
                key={`${item.institution}-${item.program}`}
                style={{ "--branch-index": index }}
              >
                <span className="education-node" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </span>
                <article className="education-card">
                  <div className="education-card-top">
                    <span className="education-category">
                      <span className="education-category-icon material-icons" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span>{item.category}</span>
                    </span>
                    <time>{item.dates}</time>
                  </div>
                  <h3>{item.institution}</h3>
                  <h4>{item.program}</h4>
                  <p className="education-qualification">{item.qualification}</p>
                  <div className="education-meta">
                    <span className="education-location">
                      <span className="material-icons" aria-hidden="true">
                        place
                      </span>
                      {item.location}
                    </span>
                  </div>
                  <div className="education-details">
                    <p>
                      <strong>Learning focus</strong>
                      {item.focus}
                    </p>
                    <p className="education-placeholder">{item.note}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// Experience entries section.
function ExperienceSection() {
  const colorss = ["aliceblue", "white", "gold"];
  const [changes, setchanges] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timess = setInterval(() => {
      setchanges((prevs) => (prevs + 1) % colorss.length);
    }, 1000);

    return () => clearInterval(timess);
  }, []);

  useEffect(() => {
    const observers = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observers.observe(sectionRef.current);
    }

    return () => observers.disconnect();
  }, []);

  return (
    <section
      id="exps"
      ref={sectionRef}
      className={`section2 ${visible ? "show" : ""}`}
      aria-labelledby="experience-title"
    >
      <div className="container1">
        <h4 className="carrerjourny">
          <div
            className="carrerDots vs"
            style={{ backgroundColor: colorss[changes] }}
          ></div>
          Development Journey_
        </h4>

        <h2 className="expirence1" id="experience-title">Experience</h2>
        <div className="expbox">
          <div className="expbox1 exps">
            <h1 className="title1">ICT Coach</h1>
            <p className="experience-type">Part-time</p>
            <h3 className="compamy1">Learning Lions, Loropio -Kenya</h3>
            <ul className="descriptionul1">
              <li className="desli1">Guided learners in building digital literacy and confidently using information and communication technologies.</li>
              <li className="desli1">Led practical computer and online learning activities, adapting support to learners with different skill levels.</li>
              <li className="desli1">Helped learners troubleshoot common device, software, and connectivity issues.</li>
              <li className="desli1">Encouraged safe, responsible, and effective use of digital tools during training sessions.</li>
            </ul>
            <h5 className="dates1">November 2025 – Ongoing</h5>
            <a href="/documents/oneyesCertificate.pdf" target="_blank" rel="noreferrer">
              <h6 className="certificate1">View Certificate</h6>
            </a>
          </div>
          <div className="expbox2 exps">
            <h1 className="title2">Front-end Developer</h1>
            <p className="experience-type">Intern</p>
            <h3 className="compamy2">Codveda Technologies, Nairobi - Kenya</h3>
            <ul className="descriptionul2">
              <li className="desli2">Assisted in implementing user-friendly and visually engaging website interfaces.</li>
              <li className="desli2">Worked on improving website layouts, responsiveness, and cross-browser compatibility.</li>
              <li className="desli2">Collaborated with other team members to troubleshoot issues and implement frontend improvements.</li>
              <li className="desli2">Used Git and version control to manage code and track project changes.</li>
            </ul>
            <h5 className="dates1">March 2025 – April 2025</h5>
            <a href="/documents/zidioacertificate.pdf" target="_blank" rel="noreferrer">
              <h6 className="certificate2">View Certificate</h6>
            </a>
          </div>
          <div className="expbox3 exps">
            <h1 className="title3">Data Entry</h1>
            <p className="experience-type">Intern</p>
            <h3 className="compamy3">Don Bosco Technical Institute, Kakuma - Kenya</h3>
            <ul className="descriptionul3">
              <li className="desli3">Maintained high accuracy and attention to detail while managing and organizing data records.</li>
              <li className="desli3">Applied strong organizational and analytical skills to review, sort, and interpret information effectively.</li>
              <li className="desli3">Ensured data integrity by verifying entries and following quality control procedures.</li>
              <li className="desli3">Handled data responsibly to support efficient workflows and reliable reporting.</li>
            </ul>
            <h5 className="dates2">05/2025 – 07/2025</h5>
            <a href="/documents/srishtiCErtificate.pdf" target="_blank" rel="noreferrer">
              <h6 className="certificate3">View Certificate</h6>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" aria-label="Resume">
      {/* Keep education and experience as separately styled, directly linkable subsections. */}
      <EducationSection />
      <ExperienceSection />
    </section>
  );
}

export default Resume;
