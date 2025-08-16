const Social = () => {
  return (
    <div className="home__social">
      <a
        href="www.linkedin.com/in/enejivic"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-linkedin"></i>
        <span className="home__social-tooltip">LinkedIn</span>
      </a>
      <a
        href="https://github.com/enejivk"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-github-alt"></i>
        <span className="home__social-tooltip">GitHub</span>
      </a>
      <a
        href="mailto:enejivic@gmai.com"
        rel="noopener noreferrer"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-envelope"></i>
        <span className="home__social-tooltip">Email</span>
      </a>
    </div>
  );
};

export default Social;
