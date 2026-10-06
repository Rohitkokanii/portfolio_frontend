import React from "react";

export default function SkillsGrid({ skills }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;

    card.style.setProperty("--mouse-x", "-999px");
    card.style.setProperty("--mouse-y", "-999px");
  };

  return (
    <div className="row g-4">
      {Object.entries(skills).map(([key, value]) => (
        <div key={key} className="col-12 col-md-6 col-xl-3">
          <div
            className="skill-card h-100"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Mouse glow */}
            <div className="skill-card-shadow" />

            <div className="skill-card-content">
              {/* Category */}
              <h6 className="skill-heading">
                <span>{key}</span>
              </h6>

              {/* Skills */}
              <div className="skills-list">
                {value.map((item, i) => (
                  <div className="skill-item" key={i}>
                    {/* Logo */}
                    <div className="skill-logo">
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        loading="lazy"
                      />
                    </div>

                    {/* Name */}
                    <span className="skill-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
