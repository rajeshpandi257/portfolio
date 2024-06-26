import React, { useState } from "react";
import "./header.css";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, SetActiveNav] = useState();
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Rajesh
        </a>
        <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav_link active_link" : "nav_link"
                }
                onClick={() => SetActiveNav("#home")}
              >
                <i className="uil uil-house-user nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav_link active_link" : "nav_link"
                }
                onClick={() => SetActiveNav("#about")}
              >
                <i className="uil uil-file nav_icon"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills" ? "nav_link active_link" : "nav_link"
                }
                onClick={() => SetActiveNav("#skills")}
              >
                <i className="uil uil-book nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#education"
                className={
                  activeNav === "#education"
                    ? "nav_link active_link"
                    : "nav_link"
                }
                onClick={() => SetActiveNav("#education")}
              >
                <i className="uil uil-briefcase-alt nav_icon"></i>Education
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact" ? "nav_link active_link" : "nav_link"
                }
                onClick={() => SetActiveNav("#contact")}
              >
                <i className="uil uil-phone nav_icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-bars "></i>
        </div>
      </nav>
    </header>

    
  );
};

export default Header;
