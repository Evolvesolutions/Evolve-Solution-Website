import { useRef } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { projects } from "../data/projects";
import "./Projects.css";

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / bounds.width;
    const pointerY = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty("--project-tilt-x", `${(0.5 - pointerY) * 4}deg`);
    event.currentTarget.style.setProperty("--project-tilt-y", `${(pointerX - 0.5) * 5}deg`);
  };

  const resetPointer = () => {
    cardRef.current?.style.setProperty("--project-tilt-x", "0deg");
    cardRef.current?.style.setProperty("--project-tilt-y", "0deg");
  };

  return (
    <Motion.article
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="project-artwork">
        <img src={project.image} alt={project.imageAlt} />
        <div className="project-artwork-shade" />
        <div className="project-artwork-ui" aria-hidden="true">
          <div className="project-window-bar">
            <span /><span /><span />
            <i>{project.previewLabel}</i>
          </div>
          <div className="project-window-body is-app-preview">
            <div className="app-preview-sidebar"><b>{project.previewMark}</b><span /><span /><span /><span /></div>
            <div className="app-preview-content">
              <small>{project.previewEyebrow}</small>
              <strong>{project.previewTitle}</strong>
              <div className="app-preview-cards"><span /><span /><span /></div>
            </div>
          </div>
        </div>
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-card-body">
        <div className="project-card-heading">
          <h2>{project.name}</h2>
          <span className="project-heading-mark" aria-hidden="true"><FaArrowUpRightFromSquare /></span>
        </div>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-actions">
          <Link
            to={`/project-details.html?id=${encodeURIComponent(project.id)}`}
            className="project-button project-button-primary"
          >
            View Project <FaArrowUpRightFromSquare aria-hidden="true" />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button project-button-secondary"
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button project-button-secondary"
            >
              Live Demo <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </Motion.article>
  );
}

export default function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-atmosphere" aria-hidden="true" />

      <section className="projects-hero">
        <div className="projects-hero-inner">
          <Motion.p
            className="projects-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            OUR PROJECTS
          </Motion.p>
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Building Digital Solutions <span>That Create Real Impact</span>
          </Motion.h1>
          <Motion.p
            className="projects-hero-description"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            Explore our completed digital solutions and technology projects. EvolveSolution develops professional websites, applications, and digital experiences built around real people and business needs.
          </Motion.p>
          <Motion.a
            className="projects-scroll-link"
            href="#project-work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Explore selected work <span aria-hidden="true">↓</span>
          </Motion.a>
        </div>
        <div className="projects-hero-side" aria-hidden="true">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-signal"><span /><span /><span /><span /><span /></div>
          <p>EVOLVE / DIGITAL<br />PORTFOLIO 2025—26</p>
        </div>
      </section>

      <section id="project-work" className="projects-work">
        <div className="projects-section-heading">
          <div>
            <p className="projects-eyebrow">SELECTED WORK <span>· 03 PROJECTS</span></p>
            <h2>Ideas made <span>digital.</span></h2>
          </div>
          <p>Purposeful technology, considered design, and experiences made to work beautifully.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="projects-stats" aria-label="Project statistics">
        <div className="project-stat"><strong>01<span>+</span></strong><p>Completed Projects</p></div>
        <div className="project-stat"><strong>100<span>%</span></strong><p>Client Focus</p></div>
        <div className="project-stat"><strong>24<span>/7</span></strong><p>Digital Support</p></div>
      </section>

      <section className="projects-cta">
        <div className="projects-cta-copy">
          <p className="projects-eyebrow">LET’S BUILD WHAT’S NEXT</p>
          <h2>Have a Project in Mind?</h2>
          <p>Let's build something innovative together.</p>
        </div>
        <Link to="/contact" className="projects-cta-button">
          Contact Us <FaArrowRight aria-hidden="true" />
        </Link>
      </section>

    </main>
  );
}