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
        <div key={key} className="col-md-6 col-lg-3">
          <div
            className="skill-card h-100"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="skill-card-shadow" />

            <div className="skill-card-content d-flex flex-column justify-content-between">
              <div>
                <h6 className="skill-heading text-uppercase">
                  <span>{key}</span>
                </h6>

                {/* Grid Item Badges */}
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {value.map((item, i) => (
                    <span key={i} className="skill-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
