import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <section className="education section" id="education">
      <h2 className="section__title edu_underline">My Qualifications</h2>
      <span className="section__subtitle"></span>
      <span>
        <div className="education_container container">
          {/* <div className="education_tabs">
            <div className="education_button education_active button--flex">
              <i className="uil uil-graduation qualification_icon">Education</i>
            </div>
          </div> */}
          <div className="education__section">
            <div className="education_content">
              <div className="education_data">
                <div>
                  <h3 className="education_title">MCA</h3>
                  <span className="education_subtitle">
                    Jamal Mohamed <br /> College
                  </span>
                  <div className="education_calander">
                    <i className="uil uil-calendar-alt">2021-2023</i>
                  </div>
                </div>
                <div>
                  <span className="education_round"></span>
                  <span className="education_line"></span>
                </div>
              </div>

              <div className="education_data">
                <div></div>
                <div>
                  <span className="education_round"></span>
                  <span className="education_line"></span>
                </div>
                <div>
                  <h3 className="education_title">BCA</h3>
                  <span className="education_subtitle">
                    Jamal Mohamed <br /> Colloege
                  </span>
                  <div className="education_calander">
                    <i className="uil uil-calendar-alt">2018-2021</i>
                  </div>
                </div>
              </div>

              <div className="education_data">
                <div>
                  <h3 className="education_title">HSC</h3>
                  <span className="education_subtitle">
                    St.Arulanander. <br />
                    Hr .Sec.School
                  </span>
                  <div className="education_calandar">
                    <i className="uil uil-calendar-alt">2017-2018</i>
                  </div>
                </div>
                <div>
                  <span className="education_round"></span>
                  <span className="education_line"></span>
                </div>
              </div>
              <div className="education_data">
                <div></div>
                <div>
                  <span className="education_round"></span>
                  <span className="education_line"></span>
                </div>
                <div>
                  <h3 className="education_title">SSLC</h3>
                  <span className="education_subtitle">
                    St.Arulanander.
                    <br />
                    Hr .Sec.School
                  </span>
                  <div className="education_calandar-alt">
                    <i className="uil uil-calendar-alt">2016-2017</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </section>
  );
};

export default Education;
