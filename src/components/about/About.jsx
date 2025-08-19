import "./about.css";
import { files, resume, work2 } from "../../assets/assets";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
      
        <img src={work2} alt="" className="about__img" />
        
        <div className="about__data">
          <p className="about__description">
            I am a passionate Python and React JavaScript developer, I bring a
            versatile set of skills in building fast, scalable, and
            user friendly applications.
          </p>
          <a
            download="SayyidMarvanVT_Resume.pdf"
            href={resume}
            className="button button--flex"
          >
            Download CV
            <img src={files} alt="" className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
