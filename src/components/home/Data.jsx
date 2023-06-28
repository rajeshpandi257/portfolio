import React from "react";
import wave from "../../assets/img/wave.svg";
const Data = () => {
  return (
    <div className="home_data" src={wave}>
      {/* <img  alt="" /> */}
      <h1 className="home_title">Rajesh Kannan</h1>
      <h3 className="home_subtitle">Front-end Web Developer</h3>
      <p className="home_description">
        I am Fresher and looking for an front end developer role.I am very
        passinate and dedicated to my work
      </p>
      <a href="#contact" className="button button_flex home_button">
        <span></span>
        Contact Me
      </a>
    </div>
  );
};

export default Data;
