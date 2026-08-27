import { useEffect, useMemo, useState } from "react";

const links = {
  email: "mailto:yueying002@e.ntu.edu.sg",
  github: "https://github.com/YueyingZhu",
  orcid: "https://orcid.org/0009-0004-9890-9809",
  cv: "https://github.com/YueyingZhu/CV_20260827",
};

const arc = [
  ["01", "Robust perception", "Understand when robot perception fails in the wild."],
  ["02", "Scalable robot data", "Collect synchronized, useful experience from real systems."],
  ["03", "Generalizable manipulation", "Ground task intent in geometry and real-world interaction."],
  ["04", "Self-improving embodied models", "Close the loop between deployment, diagnosis, and learning."],
];

const projects = [
  {
    number: "01",
    kicker: "Accepted · ICARCV 2026",
    title: "Failure-aware VIO/SLAM in subterranean environments",
    summary:
      "A systematic benchmark of visual–inertial odometry under sensor degradation, miscalibration, and dynamic occlusion, built to reveal where modern estimators break.",
    details: [
      "Four filtering-, optimization-, and learning-based systems",
      "Nine perturbation factors across 11 intensity levels and three seeds",
      "Docker, ROS 1, RViz, calibration, and trajectory evaluation tooling",
    ],
    tags: ["VIO", "SLAM", "Robustness", "Benchmarking"],
    image: "/assets/slam-nine-case-comparison.png",
    imageAlt:
      "Nine trajectory comparisons between a stereo-inertial pipeline and ORB-SLAM3 across challenging egocentric sequences",
  },
  {
    number: "02",
    kicker: "Robotics internship · Ant Group",
    title: "UMI platform for real-world demonstration collection",
    summary:
      "An end-to-end ROS 2 collection system that synchronizes three camera streams, PICO controller poses, gripper commands, and recording state for real-robot demonstrations.",
    details: [
      "Persistent ROS-to-web monitoring and one-command startup",
      "15 Hz pose telemetry, 15 FPS video, and structured health logs",
      "Built for a live Inclusion 2026 demonstration",
    ],
    tags: ["ROS 2", "UMI", "Teleoperation", "Robot Data"],
  },
  {
    number: "03",
    kicker: "Ongoing · Lead project",
    title: "Task-oriented conditional grasping on real robots",
    summary:
      "An ongoing study of how local, fine-grained geometric cues can determine task-conditioned grasp orientation and support reliable execution on physical robots.",
    details: [
      "Leading problem formulation and experimental design",
      "Building the data, baselines, and real-robot evaluation plan",
      "Manuscript in preparation; no results claimed before validation",
    ],
    tags: ["Grasping", "Geometry", "Manipulation", "Real Robot"],
  },
];

const publications = [
  {
    year: "2026",
    status: "Accepted · ICARCV",
    title:
      "Benchmarking Visual-Inertial Odometry in Subterranean Environments under Sensor Degradation, Miscalibration, and Dynamic Occlusion",
    authors: "Yueying Zhu, Xiang Li, Thien-Minh Nguyen, Shenghai Yuan",
  },
  {
    year: "2026",
    status: "Under review · AAAI-27",
    title:
      "Geometry-Aware Condition Routing for Dynamic 3D-Consistent Video Re-rendering",
    authors: "Yueying Zhu (second author), et al.",
  },
  {
    year: "2023",
    status: "AINIT",
    title: "Distracted Driver Detection with MobileVGG Network",
    authors: "Yueying Zhu",
  },
  {
    year: "2022",
    status: "IEEE ICDSCA",
    title: "Design of Hardware Acceleration of Matched Filter for Retinal Vessel Enhancement",
    authors: "Yueying Zhu, Wenke Ji, Chenfei Liao",
  },
];

const experiences = [
  {
    period: "2026 — Present",
    role: "Robotics Research Intern · Embodied Intelligence",
    place: "Ant Group · China",
    copy:
      "Building UMI demonstration collection and production-grade egocentric stereo SLAM infrastructure.",
  },
  {
    period: "2024 — 2026",
    role: "M.Sc. Research · Robot Perception",
    place: "Nanyang Technological University · Singapore",
    copy:
      "Failure-aware VIO/SLAM benchmarking; dissertation submitted and degree conferral expected in December 2026.",
  },
  {
    period: "2020 — 2024",
    role: "B.Sc. Automation · Avionics and Control",
    place: "Nanjing University of Aeronautics and Astronautics",
    copy: "Graduated with an 86/100 average and rank 15/218.",
  },
];

const directions = [
  ["ledger", "Research Ledger"],
  ["field", "Field Systems"],
  ["future", "Embodied Future"],
];

function ExternalLinks({ compact = false }) {
  return (
    <div className={`external-links ${compact ? "compact" : ""}`} aria-label="Contact links">
      <a href={links.email}>Email</a>
      <a href={links.cv} target="_blank" rel="noreferrer">CV repository</a>
      <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={links.orcid} target="_blank" rel="noreferrer">ORCID</a>
    </div>
  );
}

function DirectionSwitcher({ active, onChange }) {
  return (
    <aside className="direction-switcher" aria-label="Choose homepage design direction">
      <span>Preview</span>
      {directions.map(([id, label]) => (
        <button
          key={id}
          className={active === id ? "active" : ""}
          type="button"
          onClick={() => onChange(id)}
          aria-pressed={active === id}
        >
          {label}
        </button>
      ))}
    </aside>
  );
}

function Nav({ brand, inverse = false }) {
  return (
    <nav className={`site-nav ${inverse ? "inverse" : ""}`} aria-label="Primary navigation">
      <a className="brand" href="#top">{brand}</a>
      <div>
        <a href="#research">Research</a>
        <a href="#publications">Publications</a>
        <a href="#experience">Experience</a>
        <a href={links.cv} target="_blank" rel="noreferrer">CV</a>
      </div>
    </nav>
  );
}

function PublicationList({ condensed = false }) {
  return (
    <div className={`publication-list ${condensed ? "condensed" : ""}`}>
      {publications.map((paper) => (
        <article className="publication" key={paper.title}>
          <span className="pub-year">{paper.year}</span>
          <div>
            <h3>{paper.title}</h3>
            <p>{paper.authors}</p>
          </div>
          <span className="pub-status">{paper.status}</span>
        </article>
      ))}
    </div>
  );
}

function ExperienceList() {
  return (
    <div className="experience-list">
      {experiences.map((item) => (
        <article key={item.role}>
          <span>{item.period}</span>
          <h3>{item.role}</h3>
          <strong>{item.place}</strong>
          <p>{item.copy}</p>
        </article>
      ))}
    </div>
  );
}

function Ledger() {
  return (
    <div className="page ledger" id="top">
      <Nav brand="Research Ledger" />
      <header className="ledger-hero">
        <div>
          <p className="eyebrow">Robotics · Embodied Intelligence · 2027 PhD Applicant</p>
          <h1>Yueying Zhu</h1>
          <h2>Robotics &amp; Embodied Intelligence Researcher</h2>
          <p className="hero-statement">
            I build perception, data, and learning systems that help robots acquire real-world experience and improve under changing environments.
          </p>
          <ExternalLinks />
        </div>
        <div className="hero-note">
          <p>
            My work connects robust robot perception, large-scale real-world data collection, and task-conditioned manipulation.
          </p>
          <p>
            I am completing an M.Sc. in Electrical and Electronic Engineering at NTU. My dissertation has been submitted, with degree conferral expected in December 2026.
          </p>
          <p className="availability">Seeking Spring/Fall 2027 Robotics PhD opportunities.</p>
        </div>
      </header>

      <section className="research-arc" aria-labelledby="ledger-arc">
        <p className="section-label" id="ledger-arc">Research arc</p>
        <div>
          {arc.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <main id="research" className="ledger-projects">
        <p className="section-label">Selected research</p>
        {projects.map((project) => (
          <article className={`ledger-project ${project.image ? "" : "text-only"}`} key={project.number}>
            <div className="project-copy">
              <span className="project-number">{project.number}</span>
              <p className="project-kicker">{project.kicker}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            {project.image && (
              <figure>
                <img src={project.image} alt={project.imageAlt} />
                <figcaption>Real nine-case trajectory comparison from the egocentric stereo SLAM evaluation pipeline.</figcaption>
              </figure>
            )}
          </article>
        ))}
      </main>

      <section id="publications" className="section-block">
        <p className="section-label">Publications &amp; manuscripts</p>
        <PublicationList />
      </section>
      <section id="experience" className="section-block">
        <p className="section-label">Experience &amp; education</p>
        <ExperienceList />
      </section>
      <Footer />
    </div>
  );
}

function Field() {
  return (
    <div className="page field" id="top">
      <aside className="field-sidebar">
        <a className="field-brand" href="#top">FIELD<br />SYSTEMS</a>
        <p>YUEYING ZHU</p>
        <span>Robotics &amp;<br />Embodied AI</span>
        <div className="side-links">
          <a href="#research">Work</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href={links.cv} target="_blank" rel="noreferrer">CV</a>
        </div>
        <ExternalLinks compact />
        <strong>Seeking Robotics PhD opportunities for Spring/Fall 2027.</strong>
      </aside>
      <div className="field-main">
        <header className="field-hero">
          <p>Robotics in changing environments</p>
          <h1>Robots learn in the world,<br />not in the benchmark.</h1>
          <h2>I build robust perception and real-world data systems for robots that must keep working when conditions change.</h2>
          <ExternalLinks />
        </header>
        <main id="research" className="field-notes">
          {projects.map((project) => (
            <article className={`field-note ${project.image ? "" : "text-only"}`} key={project.number}>
              <div className="field-note-header">
                <span>FIELD NOTE {project.number}</span>
                <small>{project.kicker}</small>
              </div>
              <div className="field-note-grid">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                {project.image && (
                  <figure>
                    <img src={project.image} alt={project.imageAlt} />
                    <figcaption>SE(3)-aligned deployment trajectories: stereo-inertial reconstruction compared with ORB-SLAM3.</figcaption>
                  </figure>
                )}
              </div>
            </article>
          ))}
        </main>
        <section id="publications" className="field-bottom-grid">
          <div>
            <p className="field-section-label">Selected publications</p>
            <PublicationList condensed />
          </div>
          <div>
            <p className="field-section-label">Technical focus</p>
            <dl className="focus-list">
              <div><dt>Perception</dt><dd>VIO/SLAM, calibration, failure diagnosis</dd></div>
              <div><dt>Data systems</dt><dd>ROS 2, synchronized capture, monitoring</dd></div>
              <div><dt>Manipulation</dt><dd>Task-conditioned grasping, real-robot evaluation</dd></div>
              <div><dt>Engineering</dt><dd>C++, Python, Docker, Linux, CUDA</dd></div>
            </dl>
          </div>
        </section>
        <section id="experience" className="field-experience">
          <p className="field-section-label">Experience &amp; education</p>
          <ExperienceList />
        </section>
        <Footer />
      </div>
    </div>
  );
}

function Future() {
  return (
    <div className="page future" id="top">
      <Nav brand="Embodied Future" />
      <header className="future-hero">
        <p className="eyebrow">PhD applicant · Spring/Fall 2027</p>
        <h1>Building robots that<br />learn from deployment.</h1>
        <p>
          My work connects robust spatial perception, scalable real-world demonstration collection, and task-conditioned manipulation toward self-improving embodied models.
        </p>
        <ExternalLinks />
      </header>

      <section id="research" className="future-evidence">
        <div>
          <p className="section-label">Research evidence</p>
          <h2>Failure-aware VIO/SLAM in the wild.</h2>
          <p>
            The accepted ICARCV benchmark studies when state-estimation systems fail under sensor degradation, miscalibration, and dynamic occlusion—and turns those failures into measurable engineering evidence.
          </p>
          <span>Accepted · ICARCV 2026</span>
        </div>
        <figure>
          <img src="/assets/slam-nine-case-comparison.png" alt={projects[0].imageAlt} />
          <figcaption>Nine real sequences from a production-oriented stereo SLAM evaluation suite.</figcaption>
        </figure>
      </section>

      <section className="future-projects">
        <p className="section-label">Featured projects</p>
        <div>
          {projects.map((project) => (
            <article key={project.number}>
              <span className="future-number">{project.number}</span>
              <p className="project-kicker">{project.kicker}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="future-publications">
        <p className="section-label">Publications &amp; manuscripts</p>
        <PublicationList />
      </section>
      <section id="experience" className="future-experience">
        <p className="section-label">Experience &amp; education</p>
        <ExperienceList />
      </section>
      <section className="future-contact">
        <h2>Let’s build robots that improve through experience.</h2>
        <div>
          <p>Based in China / Singapore. Open to PhD opportunities worldwide for 2027 entry.</p>
          <ExternalLinks />
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <span>© 2026 Yueying Zhu</span>
      <span>Research, systems, and real robots.</span>
    </footer>
  );
}

export function App() {
  const initial = useMemo(() => {
    const requested = new URLSearchParams(window.location.search).get("view");
    return directions.some(([id]) => id === requested) ? requested : "ledger";
  }, []);
  const [direction, setDirection] = useState(initial);

  useEffect(() => {
    document.documentElement.dataset.direction = direction;
    document.title = `Yueying Zhu · ${directions.find(([id]) => id === direction)?.[1]}`;
  }, [direction]);

  const changeDirection = (next) => {
    setDirection(next);
    const url = new URL(window.location.href);
    url.searchParams.set("view", next);
    window.history.replaceState({}, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <DirectionSwitcher active={direction} onChange={changeDirection} />
      {direction === "ledger" && <Ledger />}
      {direction === "field" && <Field />}
      {direction === "future" && <Future />}
    </>
  );
}
