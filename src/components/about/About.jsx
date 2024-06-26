import React from "react";
import img from "../../assets/undraw_profile_re_4a55.svg";
import resume from "../../assets/Rajesh Kannan-Resume-full stack.pdf";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title about__title about_underline">About Me</h2>
      <div className="about_container container grid">
        {/* <div className="section__subtitle">My Information</div> */}

        <img src={img} alt="" className="about_img" />
        <div className="about_data">
          <p className="about_description">
            I am a front-end developer with a strong foundation in HTML, CSS, JavaScript, and React.js.
            Passionate about creating responsive and user-friendly web applications,
            I am eager to apply my skills and continue learning in a professional environment. 
            I enjoy solving problems and am committed to writing clean, efficient code.
          </p>
          <a download="" href={resume} className="button button--flex">
            <span></span>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
