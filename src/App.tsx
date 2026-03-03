import { Routes, Route } from "react-router-dom";
import PortfolioV5 from "./variants/PortfolioV5";
import {
  personalInfo as fsPersonalInfo,
  projects as fsProjects,
  experience as fsExperience,
  openSource as fsOpenSource,
  skills as fsSkills,
} from "./data/portfolio-fullstack";

function App() {
  return (
    <Routes>
      {/* Frontend Developer — default */}
      <Route
        path="/"
        element={
          <PortfolioV5
            variant="frontend"
            switchLabel="Full Stack"
            switchTo="/_"
          />
        }
      />

      {/* Full Stack Developer */}
      <Route
        path="/_"
        element={
          <PortfolioV5
            personalInfo={fsPersonalInfo}
            projects={fsProjects}
            experience={fsExperience}
            openSource={fsOpenSource}
            skills={fsSkills}
            variant="fullstack"
            switchLabel="Frontend"
            switchTo="/"
          />
        }
      />
    </Routes>
  );
}

export default App;
