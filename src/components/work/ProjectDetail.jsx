import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../../assets/projects";
import "./projectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const fetchedProject = getProjectById(id);
    setProject(fetchedProject);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <section className="project__detail section">
        <div className="container">
          <div className="loading__spinner">Loading...</div>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="project__detail section">
        <div className="container">
          <div className="project__not__found">
            <h2>Project Not Found</h2>
            <p>Sorry, the project you're looking for doesn't exist.</p>
            <Link to="/#work" className="button button--flex">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="project__detail section">
      <div className="container">
        <Link to="/#work" className="back__button">
          <i className="uil uil-arrow-left"></i> Back to Projects
        </Link>

        <h2 className="section__title">{project.name}</h2>
        <span className="section__subtitle">{project.category}</span>

        {project.videoDemo && (
          <div className="project__detail__video">
            <h3>Video Demo</h3>
            <div className="video__container">
              <iframe
                src={project.videoDemo}
                title={`${project.name} Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="project__detail__content">
          <div className="project__detail__image">
            <img src={project.image} alt={project.name} />
          </div>

          <div className="project__detail__info">
            <div className="project__detail__description">
              <h3>Project Overview</h3>
              <p>{project.longDescription}</p>
            </div>

            <div className="project__detail__features">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <i className="uil uil-check-circle"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project__detail__technologies">
              <h3>Technologies Used</h3>
              <div className="tags detail__tags">
                {project.stacks.map((stack, index) => (
                  <span key={index}>{stack}</span>
                ))}
              </div>
            </div>

            <div className="project__detail__challenges">
              <h3>Challenges & Solutions</h3>
              <p>{project.challenges}</p>
            </div>
          </div>
        </div>

        <div className="project__detail__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--flex"
            >
              <i className="uil uil-github"></i> GitHub Repository
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--flex"
            >
              <i className="uil uil-external-link-alt"></i> Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
