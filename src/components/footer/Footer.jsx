import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Rajesh</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              about
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="footer_link">
              Education
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://instagram.com/rkp_dev?igshid=ZGUzMzM3NWJiOQ=="
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rajesh-kannan-367647203"
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/rajeshpandi257"
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer_copy">Rajeshpandi.All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
