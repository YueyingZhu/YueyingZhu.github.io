const links = {
  email: "mailto:yueying002@e.ntu.edu.sg",
  github: "https://github.com/YueyingZhu",
  orcid: "https://orcid.org/0009-0004-9890-9809",
  cv: "https://github.com/YueyingZhu/CV_20260827",
};

const publications = [
  {
    year: "2026",
    venue: "ICARCV 2026 · Accepted",
    title:
      "Benchmarking Visual-Inertial Odometry in Subterranean Environments under Sensor Degradation, Miscalibration, and Dynamic Occlusion",
    authors: "Yueying Zhu, Xiang Li, Thien-Minh Nguyen, Shenghai Yuan",
    note:
      "A controlled study of representative VIO systems under sensor degradation, calibration drift, and dynamic occlusion in subterranean environments.",
  },
  {
    year: "2026",
    venue: "AAAI 2027 · Under review",
    title:
      "Geometry-Aware Condition Routing for Dynamic 3D-Consistent Video Re-rendering",
    authors: "Yueying Zhu (second author)",
  },
  {
    year: "2023",
    venue: "AINIT 2023",
    title: "Distracted Driver Detection with MobileVGG Network",
    authors: "Yueying Zhu",
  },
  {
    year: "2022",
    venue: "IEEE ICDSCA 2022",
    title:
      "Design of Hardware Acceleration of Matched Filter for Retinal Vessel Enhancement",
    authors: "Yueying Zhu",
  },
];

const research = [
  {
    period: "2026 — Present",
    title: "Real-world robot data collection",
    context: "Robotics Research Internship · Ant Group",
    description:
      "Built a UMI-based collection system for synchronized camera streams, controller poses, gripper commands, and recording state. The system includes ROS 2 data acquisition, monitoring, and repeatable startup tooling.",
  },
  {
    period: "2026 — Present",
    title: "Egocentric SLAM for a production pipeline",
    context: "Robotics Research Internship · Ant Group",
    description:
      "Developed and maintained the SLAM component of an egocentric production pipeline, with emphasis on reliable sensor handling, evaluation, and deployment integration.",
  },
  {
    period: "Ongoing",
    title: "Task-conditioned grasping on real robots",
    context: "Lead project · Manuscript in preparation",
    description:
      "Leading the formulation and real-robot evaluation of task-conditioned grasping using fine-grained geometric cues. Results and media will be added after validation and approval for release.",
  },
  {
    period: "2024 — 2026",
    title: "Failure analysis for visual-inertial odometry and SLAM",
    context: "M.Sc. research · Nanyang Technological University",
    description:
      "Studied when visual-inertial state estimators fail under sensor noise, miscalibration, occlusion, and challenging underground conditions; developed reproducible ROS and Docker evaluation pipelines.",
  },
];

const education = [
  {
    period: "2024 — 2026",
    degree: "M.Sc. in Electrical and Electronic Engineering",
    school: "Nanyang Technological University, Singapore",
    detail:
      "Major in Control and Computer Automation. Dissertation submitted; degree conferral expected in December 2026.",
  },
  {
    period: "2020 — 2024",
    degree: "B.Sc. in Automation",
    school:
      "Nanjing University of Aeronautics and Astronautics, Nanjing, China",
    detail: "Avionics and control. Average: 86/100; rank: 15/218.",
  },
];

function HeaderLink({ href, children }) {
  const external = href.startsWith("http");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function App() {
  return (
    <div className="site-shell" id="top">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="nav-name" href="#top">Yueying Zhu</a>
        <div className="nav-links">
          <a href="#publications">Publications</a>
          <a href="#research">Research</a>
          <a href="#education">Education</a>
          <HeaderLink href={links.cv}>CV</HeaderLink>
        </div>
      </nav>

      <main>
        <header className="profile">
          <p className="profile-kicker">Robotics · Embodied Intelligence</p>
          <h1>Yueying Zhu</h1>
          <p className="profile-role">
            M.Sc. candidate at Nanyang Technological University<br />
            Robotics Research Intern at Ant Group
          </p>
          <div className="profile-copy">
            <p>
              I work on robot perception and manipulation, with current projects in robust visual-inertial odometry, real-world robot data collection, egocentric SLAM, and task-conditioned grasping.
            </p>
            <p>
              I am applying to Robotics PhD programs for Spring or Fall 2027. My longer-term research interests include robot foundation models and systems that improve from their own deployment experience.
            </p>
          </div>
          <div className="contact-links" aria-label="Contact and profiles">
            <HeaderLink href={links.email}>Email</HeaderLink>
            <HeaderLink href={links.cv}>CV</HeaderLink>
            <HeaderLink href={links.github}>GitHub</HeaderLink>
            <HeaderLink href={links.orcid}>ORCID</HeaderLink>
          </div>
        </header>

        <Section id="interests" title="Research Interests">
          <p className="interest-line">
            Robot perception, embodied intelligence, real-world robot data, visual-inertial odometry and SLAM, and task-oriented manipulation.
          </p>
        </Section>

        <Section id="publications" title="Publications & Manuscripts">
          <div className="publication-list">
            {publications.map((paper) => (
              <article className="publication" key={paper.title}>
                <div className="publication-year">{paper.year}</div>
                <div>
                  <h3>{paper.title}</h3>
                  <p className="authors">{paper.authors}</p>
                  <p className="venue">{paper.venue}</p>
                  {paper.note && <p className="publication-note">{paper.note}</p>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="research" title="Research Experience">
          <div className="research-list">
            {research.map((item) => (
              <article className="research-item" key={item.title}>
                <div className="item-period">{item.period}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p className="item-context">{item.context}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.degree}>
                <div className="item-period">{item.period}</div>
                <div>
                  <h3>{item.degree}</h3>
                  <p className="item-context">{item.school}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </main>

      <footer>
        <span>© 2026 Yueying Zhu</span>
        <span>Last updated August 2026</span>
      </footer>
    </div>
  );
}
