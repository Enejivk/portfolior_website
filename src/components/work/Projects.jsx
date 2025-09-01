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
          <div className="project__card premium">
            <div className="project__image__container">
              <img
                src={project.image}
                alt={project.name}
                className="project__img"
              />
              <div className="project__overlay">
                <span className="view__details">View Details</span>
              </div>
            </div>

            <div className="project__data">
              <div className="project__header">
                <h3 className="project__title">{project.name}</h3>
                <div className="project__category">
                  <span>{project.category}</span>
                </div>
              </div>

              <p className="project__description">{project.description}</p>

              <div className="project__tech">
                <h4 className="tech__title">Technologies</h4>
                <ul className="tags">
                  {project.stacks.slice(0, 4).map((stack, i) => (
                    <li key={i}>{stack}</li>
                  ))}
                  {project.stacks.length > 4 && (
                    <li className="more__tag">+{project.stacks.length - 4}</li>
                  )}
                </ul>
              </div>

              <div className="project__links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__button"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="uil uil-globe"></i> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__button project__button--outlined"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="uil uil-github"></i> GitHub
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
