import React from "react";
import img from "../../assets/undraw_profile_re_4a55.svg";
import resume from "../../assets/resume-rajesh.pdf";
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
            I am fresher and I am looking for an front end developer role.I have
            a good knowledge in frond-end technologies like
            HTML,CSS,Javasctipt,React js,Bootstrap.I am very passinate about my
            work and vert hard working.I have attached my resume for your
            verifications
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
