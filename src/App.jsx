import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";
import ProjectDetail from "./components/work/ProjectDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <Home />
              <About />
              <Skills />
              <Qualification />
              <Work />
              <Contact />
            </main>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      <ScrollUp />
    </Router>
  );
};

export default App;
