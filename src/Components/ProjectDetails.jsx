import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaCheck } from "react-icons/fa6";
import foundationImage from "../assets/modern-office.avif";
import communityImage from "../assets/collaboration-group-young-modern-people-smart-casual-wear-discussing-something-smiling-working-creative-office-144907464.webp";
import digitalImage from "../assets/about2.jpg";
import "./ProjectDetails.css";

const features = [
  "Clear presentation of the foundation's mission and programs",
  "Events and community activities surfaced for visitors",
  "Gallery and volunteer information in an accessible structure",
  "Donation initiatives with clear, action-oriented pathways",
];

const technologies = ["HTML", "CSS", "JavaScript", "React"];
const gallery = [
  { image: foundationImage, label: "Foundation site concept" },
  { image: communityImage, label: "Community and volunteer experience" },
  { image: digitalImage, label: "Responsive digital experience" },
];

export default function ProjectDetails() {
  return (
    <main className="project-detail-page">
      <section className="project-detail-hero">
        <div className="project-detail-hero-copy">
          <Link to="/projects" className="project-back-link">
            <FaArrowLeft aria-hidden="true" /> Back to Projects
          </Link>
          <p className="project-detail-eyebrow">EVOLVESOLUTION / PROJECT 01</p>
          <h1>Blessings Foundation <span>Trust</span></h1>
          <p className="project-detail-category">Web Development <i /> Community Platform</p>
          <p className="project-detail-lede">
            A considered digital home for the foundation's mission, programs, people, and ways to make a difference.
          </p>
          <div className="project-detail-hero-actions">
            <button
              type="button"
              className="project-live-button"
              disabled
              title="The live project URL has not been provided yet."
            >
              Live Project <FaArrowUpRightFromSquare aria-hidden="true" />
            </button>
            <span className="project-live-note">Live link not configured</span>
          </div>
        </div>

        <motion.div
          className="project-detail-hero-art"
          initial={{ opacity: 0, y: 24, rotateY: -5 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={foundationImage} alt="Visual concept for the Blessings Foundation Trust website" />
          <div className="detail-art-overlay" />
          <div className="detail-browser-mockup" aria-hidden="true">
            <div className="detail-browser-bar"><span /><span /><span /><b>BLESSINGS FOUNDATION</b></div>
            <div className="detail-browser-content">
              <div className="detail-brand-mark">BF</div>
              <small>COMMUNITY · PURPOSE · IMPACT</small>
              <strong>Building a brighter future together.</strong>
              <div className="detail-browser-buttons"><i>Our mission</i><i>Get involved</i></div>
            </div>
          </div>
          <span className="detail-image-caption">DIGITAL EXPERIENCE / 2025</span>
        </motion.div>
      </section>

      <section className="project-detail-overview">
        <div className="project-overview-heading">
          <p className="project-detail-eyebrow">THE PROJECT</p>
          <h2>Purpose, made <span>easy to find.</span></h2>
        </div>
        <div className="project-overview-copy">
          <p>
            Blessings Foundation Trust is a professional foundation website designed to present the organization's mission, programs, events, gallery, volunteer activities, and donation initiatives through a clean and user-friendly digital platform.
          </p>
          <p>
            The experience brings essential information together in a clear structure, helping supporters, volunteers, and community members understand the foundation's work and find meaningful ways to participate.
          </p>
        </div>
      </section>

      <section className="project-objective-band">
        <div className="objective-index">01 / OBJECTIVE</div>
        <div>
          <h2>Connect people to the work that matters.</h2>
          <p>
            Create a welcoming, responsive online presence that communicates the organization's purpose, builds trust, and makes programs, events, volunteering, and donation opportunities straightforward to explore.
          </p>
        </div>
      </section>

      <section className="project-detail-content-grid">
        <div className="project-features-panel">
          <p className="project-detail-eyebrow">WHAT IT INCLUDES</p>
          <h2>Key features</h2>
          <ul>
            {features.map((feature) => (
              <li key={feature}><FaCheck aria-hidden="true" /><span>{feature}</span></li>
            ))}
          </ul>
        </div>
        <div className="project-tech-panel">
          <p className="project-detail-eyebrow">BUILT WITH</p>
          <h2>Technologies</h2>
          <div className="project-detail-tech-list">
            {technologies.map((technology, index) => (
              <div className="project-tech-item" key={technology}>
                <span>0{index + 1}</span><strong>{technology}</strong>
              </div>
            ))}
          </div>
          <div className="project-responsive-note">
            <span className="responsive-device-mark" aria-hidden="true"><i /><b /></span>
            <div><strong>Responsive by design</strong><p>Layouts adapt smoothly across desktop, tablet, and mobile screens.</p></div>
          </div>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="project-gallery-heading">
          <div><p className="project-detail-eyebrow">VISUAL DIRECTION</p><h2>Project gallery</h2></div>
          <p>Visual concepts illustrating the project's community-first digital experience.</p>
        </div>
        <div className="project-detail-gallery">
          {gallery.map((item, index) => (
            <motion.figure
              className={`project-gallery-item${index === 0 ? " foundation-shot" : ""}`}
              key={item.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={item.image} alt={item.label} />
              <figcaption><span>0{index + 1}</span>{item.label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="project-detail-bottom-nav">
        <Link to="/projects" className="project-back-button"><FaArrowLeft aria-hidden="true" /> Back to Projects</Link>
        <span>EVOLVESOLUTION <i /> DIGITAL PROJECTS</span>
      </section>
    </main>
  );
}