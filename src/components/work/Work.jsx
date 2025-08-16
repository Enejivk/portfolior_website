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

const projects = [
  {
    name: "Plantly",
    description:
      "A plant care app built with React Native and Expo. Users can add plants, track watering frequency, and mark them as watered.",
    stacks: ["React Native", "Expo Image Picker"],
    link: "https://expo.dev/accounts/sayyidmarvan/projects/plantly/builds/1a432503-c30b-4e75-8c43-46b2bef55ab9",
    github: "https://github.com/sayyidmarvanvt/plantly",
    image: plantly,
    category: "Mobile App",
  },

  {
    name: "Taskly",
    description:
      "A simple shopping list app built with React Native and Expo. Includes local CRUD, a countdown timer, haptic feedback, and persistent storage using AsyncStorage.",
    stacks: ["React Native", "Expo", "Expo Haptics"],
    link: "https://expo.dev/accounts/sayyidmarvan/projects/taskly/builds/dd703e8e-e73f-4dc3-ae04-fad77cb8501d",
    github: "https://github.com/sayyidmarvanvt/taskly",
    image: taskly,
    category: "Mobile App",
  },
  {
    name: "Exedo Estate",
    description:
      "A MERN-based property listing platform with secure login, and CRUD functionality for real estate listings. Designed for efficient property management.",
    stacks: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
    link: "https://real-estate-mhee.onrender.com",
    github: "https://github.com/sayyidmarvanvt/Exedo-estate",
    image: exedoestate,
    category: "Fullstack",
  },
  {
    name: "Foodeli",
    description:
      "A MERN stack food ordering app with authentication, Stripe payments, cart management, and responsive user interface for smooth ordering experience.",
    stacks: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    link: "https://foodeli-frontend.onrender.com/",
    github: "https://github.com/sayyidmarvanvt/Foodeli",
    image: foodeli,
    category: "Fullstack",
  },
  {
    name: "Mode – Project Management App",
    description:
      "A Linear-inspired project tracker built with Next.js App Router. Includes auth, CRUD for issues, PostgreSQL backend, and clean Tailwind UI.",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    link: "https://mode-tau-ruddy.vercel.app",
    github: "https://github.com/sayyidmarvanvt/mode-FM",
    image: mode,
    category: "Fullstack",
  },
  {
    name: "Luxury Dubai Real Estate",
    description:
      "Real estate UI built with Next.js and V0, showcasing premium Dubai properties. Includes responsive design and clean Tailwind-styled layout.",
    stacks: ["Next.js", "V0"],
    link: "https://v0-luxury-dubai-real-estate.vercel.app",
    github: "https://github.com/sayyidmarvanvt/Luxury-Dubai-RealEstate",
    image: dubairealestate,
    category: "Fullstack",
  },
  {
    name: "Crown Clothing",
    description:
      "A full-stack e-commerce app with Stripe payment, Firebase authentication, and a serverless backend hosted on Netlify. Optimized for real use.",
    stacks: ["React", "Redux Toolkit", "Stripe", "Firebase", "Netlify"],
    link: "https://crown-clothing-be9922.netlify.app/",
    github: "https://github.com/sayyidmarvanvt/crwn-clothing-v2",
    image: crown,
    category: "Fullstack",
  },
  {
    name: "Shadcn UI Dashboard",
    description:
      "A modern admin dashboard using Shadcn UI and Next.js. Includes basic layout, cards, tables, and static content to demonstrate component reuse.",
    stacks: ["Next.js", "Shadcn UI"],
    link: "https://dashboard-schadcn.vercel.app",
    github: "https://github.com/sayyidmarvanvt/Dashboard-schadcn",
    image: shadcndash,
    category: "Fullstack",
  },

  // {
  //   name: "EventPlanner360",
  //   description:
  //     "EventPlanner360 is a full-stack web application designed to help users plan and manage events efficiently. It allows users to create, update, and manage events, guests, and schedules, providing a seamless experience for event planning.",
  //   stacks: ["React", "Node.js", "Express.js", "MongoDB", "Nodemailer", "JWT"],
  //   link: "https://eventplanner-frontend-sdjb.onrender.com/",
  //   github: "https://github.com/sayyidmarvanvt/CBT-CIP",
  //   image: "path_to_image",
  //   category: "Fullstack",
  // },

  // {
  //   name: "Mentorow Technology Website",
  //   description:
  //     "Developed a dynamic website using Node.js, Express.js, and React.js. Designed and animated engaging UI components using Framer Motion, reducing bounce rate by 20%.",
  //   stacks: ["Node.js", "Express.js", "Tailwind CSS", "Framer Motion", "React.js", "MongoDB", "Context API"],
  //   link: "https://footer-mu.vercel.app/",
  //   github: "https://github.com/sayyidmarvanvt/Footer",
  //   image: "path_to_image",
  //   category: "Fullstack",
  // },

  {
    name: "SmartHost",
    description:
      "A business site for an architecture firm, using React with animated Framer Motion navbar and contact form integration with Nodemailer.",
    stacks: ["React", "Framer Motion"],
    link: "http://www.smarthost.org.uk",
    github: "https://github.com/sayyidmarvanvt/jmk",
    image: smarthost,
    category: "React",
  },
  {
    name: "Disney+ Clone",
    description:
      "Clone of Disney+ streaming UI built with React, Axios, and TMDB API. Includes routing, styled-components, and basic movie info fetch.",
    stacks: ["React", "TMDB API"],
    link: "https://disney-clone-sable-one.vercel.app",
    github: "https://github.com/sayyidmarvanvt/Disney-clone",
    image: disney,
    category: "React",
  },
  {
    name: "ModernBank",
    description:
      "A clean UI demo for a digital banking site built with React and Tailwind. Focuses on clean UX, layout consistency, and mobile responsiveness.",
    stacks: ["React", "Tailwind CSS"],
    link: "https://modern-bankapp.vercel.app/",
    github: "https://github.com/sayyidmarvanvt/modern-bankapp",
    image: modernbank,
    category: "React",
  },
  {
    name: "Gemini",
    description:
      "An AI prompt app using Gemini API and Context API for state. Features simple chat-like interaction and dynamic text response rendering.",
    stacks: ["React", "Gemini API"],
    link: "https://gemini-kappa-azure.vercel.app/",
    github: "https://github.com/sayyidmarvanvt/Gemini",
    image: gemini,
    category: "React",
  },
  {
    name: "Small Shopping Cart",
    description:
      "A basic e-commerce cart built with React and Tailwind. Lets users add, remove, and view items in a functional shopping cart layout.",
    stacks: ["React", "Tailwind CSS"],
    link: "https://small-shopping-cart-peach.vercel.app",
    github: "https://github.com/sayyidmarvanvt/small-shopping-cart",
    image: shoppingcart,
    category: "React",
  },
  {
    name: "Nike Poster",
    description:
      "A Nike landing page UI built in React to showcase a marketing poster layout. Focuses on typography, layout, and call-to-action design.",
    stacks: ["React"],
    link: "https://nike-front-dusky.vercel.app",
    github: "https://github.com/sayyidmarvanvt/nike-front",
    image: nike,
    category: "React",
  },
];

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
