import React, { useEffect, useRef } from "react";
import "./App.css";

function Section({
  title,
  description,
  tags,
  image,
  theme,
  isFinal = false,
  isProject = false,
  link,
  buttons,
  id,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      },
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const sectionClass = `split-section ${theme} ${isProject ? "floating-section" : ""} ${isFinal ? "final" : ""}`;

  return (
    <section className={sectionClass} id={id} ref={sectionRef}>
      <div className="split-content">
        <h1>{title}</h1>
        <p>{description}</p>

        {tags && (
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}

        {buttons && (
          <div className="button-group">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                aria-label={btn.label}
                {...(btn.download ? { download: true } : {})}
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}

        {link && !buttons && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            aria-label="Check it out"
          >
            Check it out →
          </a>
        )}
      </div>

      <div className={`split-image ${isProject ? "floating-card" : ""}`}>
        <img src={image} alt={title} />
      </div>
    </section>
  );
}

export default Section;
