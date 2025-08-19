import { useState } from "react";
import "./work.css";
import Projects from "./Projects";
import {
  disney,
  exedoestate,
  foodeli,
  gemini,
  modernbank,
  nike,
  shoppingcart,
  smarthost,
  crown,
  dubairealestate,
  shadcndash,
  mode,
  taskly,
  plantly,
} from "../../assets/projects";

const projects = []

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="work section" id="work">
      <h2 className="section__title">Work</h2>
      <span className="section__subtitle">Most recent works</span>
      <div className="work__filters container grid">
        <button
          className={`work__item ${
            selectedCategory === "All" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          ALL
        </button>
        <button
          className={`work__item ${
            selectedCategory === "Fullstack" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("Fullstack")}
        >
          FULLSTACK
        </button>
        <button
          className={`work__item ${
            selectedCategory === "React" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("React")}
        >
          REACT
        </button>
        <button
          className={`work__item ${
            selectedCategory === "Mobile App" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("Mobile App")}
        >
          MOBILE APP
        </button>
      </div>

      <Projects projects={filteredProjects} />
    </section>
  );
};

export default Work;
