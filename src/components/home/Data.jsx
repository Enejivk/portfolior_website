import React from "react";
import { send } from "../../assets/assets";
import TextDecrypt from "../Utils/TextDecrypt";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <TextDecrypt text={"Eneji Victor"} />
      </h1>

      <TypeAnimation
        sequence={[
          "Web Developer",
          3000,
          "React Developer",
          3000,
          "FullStack Developer",
          3000,
          "Python Developer",
          3000,
          "Software Engineer",
        ]}
        cursor={false}
        wrapper="span"
        speed={5}
        className="home__subtitle"
        repeat={Infinity}
      />

      <p className="home__description">
        A passionate Full-Stack Developer specializing in the Typescript(React) and python
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={send} alt="send icon" className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
