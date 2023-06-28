import React from "react";
import Back from "./Back";
import html from "../../assets/img/download.png";
import css from "../../assets/img/download (1).png";
import js from "../../assets/img/images.png";
import react from "../../assets/img/images.jpg";
import boot from "../../assets/img/download.jpg";
import git from "../../assets/img/images (1).png";
const Front = () => {
  return (
    <div>
      <div className="skills_content">
        <h3 className="skills_title">Front End Technology</h3>
        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">HTML</h3>
                <span className="skills_level">Advanced</span>
              </div>
              <img src={html} alt="" className="skills_icon" />
            </div>

            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">CSS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <img src={css} alt="" className="skills_icon" />
            </div>

            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">JAVASCRIPT</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <img src={js} alt="" className="skills_icon" />
            </div>

            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">REACT JS</h3>
                <span className="skills_level">Basics</span>
              </div>
              <img src={react} alt="" className="skills_icon" />
            </div>
          </div>

          <div className="skills_group">
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">BOOTSTRAP</h3>
                <span className="skills_level">Basics</span>
              </div>
              <img src={boot} alt="" className="skills_icon" />
            </div>

            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">GIT/GITHUB</h3>
                <span className="skills_level">Basics</span>
              </div>
              <img src={git} alt="" className="skills_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
