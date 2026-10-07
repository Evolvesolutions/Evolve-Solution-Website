import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaCheck, FaGithub } from "react-icons/fa6";
import placeholderGalleryOne from "../assets/about1.jpg";
import placeholderGalleryTwo from "../assets/about2.jpg";
import { projects } from "../data/projects";
import "./LovixApp.css";

export default function LovixApp() {
  const [searchParams] = useSearchParams();
  const [lightboxImage, setLightboxImage] = useState(null);
  const projectId = searchParams.get("id") || "lovix-app";
  const project = projects.find((item) => item.id === projectId);

  useEffect(() => {
    if (!lightboxImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightboxImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  if (!project) {
    return (
      <main className="lovix-page">
        <section className="lovix-not-found">
          <p className="lovix-eyebrow">EVOLVESOLUTION / PROJECTS</p>
          <h1>Project not found</h1>
          <Link to="/projects" className="lovix-back-button">
            <FaArrowLeft aria-hidden="true" /> Back to Projects
          </Link>
        </section>
      </main>
    );
  }

  const titleParts = project.name.split(" ");
  const gallery = project.gallery?.length
    ? project.gallery
    : [
      { src: project.image, caption: "Project overview", alt: `${project.name} overview` },
      { src: placeholderGalleryOne, caption: "Product experience concept", alt: "Product experience concept placeholder" },
      { src: placeholderGalleryTwo, caption: "Responsive interface concept", alt: "Responsive interface concept placeholder" },
    ];

  return (
    <main className="lovix-page">
      <section className="lovix-hero">
        <div className="lovix-hero-copy">
          <Link to="/projects" className="lovix-back-link">
            <FaArrowLeft aria-hidden="true" /> Back to Projects
          </Link>
          <p className="lovix-eyebrow">EVOLVESOLUTION / PROJECT {project.number}</p>
          <h1>
            {titleParts[0]}{" "}
            {titleParts.length > 1 && <span>{titleParts.slice(1).join(" ")}</span>}
          </h1>
          <p className="lovix-category">{project.category} <i /> Digital Project</p>
          <p className="lovix-lede">{project.description}</p>
          {(project.githubUrl || project.liveUrl) && (
            <div className="lovix-hero-actions">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lovix-project-link"
                >
                  <FaGithub aria-hidden="true" /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lovix-project-link"
                >
                  Live Demo <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>

        <Motion.div
          className="lovix-hero-image"
          initial={{ opacity: 0, y: 24, rotateY: -5 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={project.image} alt={project.imageAlt} />
          <div className="lovix-hero-shade" />
          <div className="lovix-app-window" aria-hidden="true">
            <div className="lovix-window-bar"><span /><span /><span /><b>{project.previewLabel}</b></div>
            <div className="lovix-window-content">
              <div className="lovix-app-mark">{project.previewMark}</div>
              <small>{project.previewEyebrow}</small>
              <strong>{project.previewTitle}</strong>
              <p>{project.name}</p>
              <div className="lovix-window-panels"><i /><i /><i /></div>
            </div>
          </div>
          <span className="lovix-image-caption">{project.category.toUpperCase()} / EVOLVESOLUTION</span>
        </Motion.div>
      </section>

      <section className="lovix-overview">
        <div className="lovix-section-title">
          <p className="lovix-eyebrow">THE PROJECT</p>
          <h2>{project.overviewHeading}</h2>
        </div>
        <div className="lovix-overview-copy">
          {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="lovix-objective">
        <div className="lovix-objective-number">{project.number.slice(0, 2)} / OBJECTIVE</div>
        <div>
          <h2>{project.objective}</h2>
          <p>{project.problem}</p>
        </div>
      </section>

      <section className="lovix-details-grid">
        <div className="lovix-feature-panel">
          <p className="lovix-eyebrow">PROJECT EXPERIENCE</p>
          <h2>Key features</h2>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}><FaCheck aria-hidden="true" /><span>{feature}</span></li>
            ))}
          </ul>
          <div className="lovix-ux-note">
            <span className="lovix-ux-mark" aria-hidden="true"><i /><b /><em /></span>
            <div><strong>My role</strong><p>{project.role}</p></div>
          </div>
        </div>

        <div className="lovix-tech-panel">
          <p className="lovix-eyebrow">TECHNOLOGY & DELIVERY</p>
          <h2>Project technology</h2>
          <div className="lovix-tech-list">
            {project.technologies.map((technology, index) => (
              <div className="lovix-tech-item" key={technology}>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{technology}</strong>
              </div>
            ))}
          </div>
          <div className="lovix-development-notes">
            <h3>Project role</h3>
            <p>{project.role}</p>
          </div>
        </div>
      </section>

      <section className="lovix-gallery-section">
        <div className="lovix-gallery-heading">
          <div><p className="lovix-eyebrow">VISUAL DIRECTION</p><h2>Project gallery</h2></div>
          {!project.gallery?.length && (
            <p>Project gallery images are not available yet. These visuals are shown as a temporary fallback.</p>
          )}
        </div>
        <div className="lovix-gallery-grid">
          {gallery.map((item, index) => (
            <Motion.figure
              className={`lovix-gallery-item lovix-gallery-item-${index + 1}`}
              key={`${item.caption}-${item.src}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.09 }}
            >
              <button
                className="lovix-gallery-image-button"
                type="button"
                onClick={() => setLightboxImage(item)}
                aria-label={`View ${item.caption} image larger`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
              </button>
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{item.caption}</figcaption>
            </Motion.figure>
          ))}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="lovix-lightbox"
          role="presentation"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="lovix-lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label={lightboxImage.caption}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lovix-lightbox-close"
              type="button"
              onClick={() => setLightboxImage(null)}
              aria-label="Close image"
            >
              &times;
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              loading="lazy"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
            <p>{lightboxImage.caption}</p>
          </div>
        </div>
      )}

      <section className="lovix-bottom-nav">
        <Link to="/projects" className="lovix-back-button"><FaArrowLeft aria-hidden="true" /> Back to Projects</Link>
        <span>EVOLVESOLUTION <i /> DIGITAL PROJECTS</span>
      </section>
    </main>
  );
}
