import React from "react";
import "./qualification.css";

const educationData = [
  {
    title: "ALX School of Software Engineering",
    school: "ALX Africa",
    description:
      "Software Engineering Program (Fullstack Development, Systems Engineering)",
    period: "2023",
  },
  {
    title: "Web Development Certification",
    school: "FreeCodeCamp",
    description:
      "Responsive Web Design & JavaScript Algorithms and Data Structures",
    period: "2020",
  },
  {
    title: "Bachelor of Science in Computer Science",
    school: "Cross River State University of Technology",
    description: "",
    period: "2017",
  },
];

const experienceData = [
  {
    title: "Full Stack Developer",
    company: "Justiguid",
    description: "Full Stack Development (Python, React)",
    period: "2023 – present",
  },
  {
    title: "Full stack Engineer",
    company: "Sentenel",
    description: "Python & React Applications",
    period: "2023",
  },
  {
    title: "Frontend Engineer",
    company: "Picture-Stock",
    description: "React, JavaScript, and CSS",
    period: "2023",
  },
];

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__grid">
          {/* Education Column */}
          <div className="qualification__content">
            <h3 className="qualification__section-title">
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </h3>
            <div className="qualification__timeline">
              {educationData.map((education, index) => (
                <div className="qualification__data" key={index}>
                  <div>
                    <h3 className="qualification__title">{education.title}</h3>
                    <span className="qualification__subtitle">
                      {education.school}
                      {education.description && (
                        <div className="qualification__description">
                          {education.description}
                        </div>
                      )}
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>{" "}
                      {education.period}
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    {index !== educationData.length - 1 && (
                      <span className="qualification__line"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="qualification__content">
            <h3 className="qualification__section-title">
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </h3>
            <div className="qualification__timeline">
              {experienceData.map((experience, index) => (
                <div className="qualification__data" key={index}>
                  <div>
                    <h3 className="qualification__title">{experience.title}</h3>
                    <span className="qualification__subtitle">
                      {experience.company} • {experience.description}
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>{" "}
                      {experience.period}
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    {index !== experienceData.length - 1 && (
                      <span className="qualification__line"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
