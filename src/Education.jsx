import { useEffect, useRef, useState } from "react";
import "./Education.css";

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

function Education() {
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

export default Education;
