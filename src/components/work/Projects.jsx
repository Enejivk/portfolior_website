import "./work.css";

const Projects = ({ projects }) => {
  return (
    <div className="work__container container grid">
      {projects.map((project, index) => (
        <div className="project__card" key={index}>
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
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project__button"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
