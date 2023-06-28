import React from "react";
import "./Skills.css";
import Front from "./Front";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title skills_underline"> My Skills</h2>
      <div className="skills_container container grid">
        <Front />
      </div>
    </section>
  );
};

export default Skills;
