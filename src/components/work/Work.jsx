import { useState, useEffect } from "react";
import "./work.css";
import Projects from "./Projects";
import { projects } from "../../assets/projects.js";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects || []);

  useEffect(() => {
    console.log("All projects:", projects);
    const filtered =
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    console.log("Filtered projects:", filtered);
    setFilteredProjects(filtered);
  }, [selectedCategory]);

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
      </div>

      <Projects projects={filteredProjects} />
    </section>
  );
};

export default Work;
