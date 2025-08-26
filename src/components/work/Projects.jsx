import { Link } from "react-router-dom";
import "./work.css";

const Projects = ({ projects }) => {
  console.log("Projects received in Projects component:", projects);

  if (!projects || projects.length === 0) {
    return (
      <div className="work__container container">
        <p className="no__projects">
          No projects to display. Check back later!
        </p>
      </div>
    );
  }

  return (
    <div className="work__container container grid">
      {projects.map((project, index) => (
        <Link
          to={`/project/${project.id}`}
          className="project__card__link"
          key={index}
        >
          <div className="project__card">
            <img
              src={project.image}
              alt={project.name}
              className="project__img"
            />

            <div className="project__data">
              <h3 className="project__title">{project.name}</h3>
              <p className="project__description">{project.description}</p>

              <ul className="tags">
                {project.stacks.map((stack, i) => (
                  <li key={i}>{stack}</li>
                ))}
              </ul>

              <div className="project__links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__button"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__button"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
