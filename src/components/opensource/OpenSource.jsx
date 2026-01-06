import React from "react";
import "./opensource.css";

const contributions = [
  {
    id: 1,
    company: "Bubble.AI",
    badge: "YC S26",
    role: "Full-Stack Engineer",
    period: "Dec 2025",
    color: "#6366f1",
    items: [
      {
        text: "Mobile-responsive conversion improving accessibility across devices",
        prLink: "https://github.com/bubble-ai/pr-link-1",
      },
      {
        text: "Text-to-speech feature for AI voice prompts",
        prLink: "https://github.com/bubble-ai/pr-link-2",
      },
      {
        text: "Codebase refactoring for maintainability",
        prLink: "https://github.com/bubble-ai/pr-link-3",
      },
    ],
  },
  {
    id: 2,
    company: "Zulip",
    badge: "Chat Platform",
    role: "Full-Stack Engineer",
    period: "Nov 2025",
    color: "#22c55e",
    items: [
      {
        text: "Inactive user messaging layout improvements",
        prLink: "https://github.com/zulip/pr-link-1",
      },
      {
        text: "Role-based access control refinements",
        prLink: "https://github.com/zulip/pr-link-2",
      },
    ],
  },
  {
    id: 3,
    company: "Cap",
    badge: "15K+ Users",
    role: "Full-Stack Engineer",
    period: "Sept 2025",
    color: "#f43f5e",
    stack: ["React.js", "S3", "PostgreSQL", "Tailwind"],
    items: [
      {
        text: "UI overlap and padding fixes",
        prLink: "https://github.com/cap/pr-link-1",
      },
      {
        text: "macOS Tahoe cursors implementation",
        prLink: "https://github.com/cap/pr-link-2",
      },
      {
        text: "Timeline editor precision split-mode",
        prLink: "https://github.com/cap/pr-link-3",
      },
    ],
  },
];

const OpenSource = () => {
  return (
    <section className="opensource section" id="opensource">
      <h2 className="section__title">Open Source</h2>
      <span className="section__subtitle">Community Contributions</span>

      <div className="opensource__container container">
        <div className="opensource__timeline">
          {contributions.map((project, index) => (
            <div
              className="opensource__item"
              key={project.id}
              style={{ "--accent": project.color }}
            >
              <div className="opensource__marker">
                <span className="opensource__dot"></span>
                {index !== contributions.length - 1 && (
                  <span className="opensource__line"></span>
                )}
              </div>

              <div className="opensource__content">
                <div className="opensource__header">
                  <div className="opensource__title-group">
                    <h3 className="opensource__company">{project.company}</h3>
                    <span className="opensource__badge">{project.badge}</span>
                  </div>
                  <div className="opensource__meta">
                    <span className="opensource__role">{project.role}</span>
                    <span className="opensource__period">
                      <i className="uil uil-calendar-alt"></i> {project.period}
                    </span>
                  </div>
                </div>

                {project.stack && (
                  <div className="opensource__stack">
                    {project.stack.map((tech, i) => (
                      <span className="opensource__tech" key={i}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="opensource__prs">
                  {project.items.map((item, i) => (
                    <a
                      href={item.prLink}
                      className="opensource__pr"
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="uil uil-arrow-right"></i>
                      <span>{item.text}</span>
                      <i className="uil uil-external-link-alt opensource__external"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/Enejivk"
          className="opensource__github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github-alt"></i>
          <span>View all contributions on GitHub</span>
          <i className="uil uil-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default OpenSource;
