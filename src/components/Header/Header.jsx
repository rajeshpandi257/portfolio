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

    //     <header>
    //     <div class="header">
    //        <div class="container">
    //           <div class="row">
    //              <div class="col-xl-5 col-lg-5 col-md-9 col-sm-9">
    //                 <nav class="navigation navbar navbar-expand-md navbar-dark ">
    //                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
    //                    <span class="navbar-toggler-icon"></span>
    //                    </button>
    //                    <div class="collapse navbar-collapse" id="navbarsExample04">
    //                       <ul class="navbar-nav mr-auto">
    //                          <li class="nav-item active">
    //                             <a class="nav-link" href="index.html"> Home  </a>
    //                          </li>
    //                          <li class="nav-item">
    //                             <a class="nav-link" href="#about">About</a>
    //                          </li>
    //                          <li class="nav-item">
    //                             <a class="nav-link" href="#service">Service</a>
    //                          </li>
    //                          <li class="nav-item">
    //                             <a class="nav-link" href="#customer">Customer</a>
    //                          </li>
    //                          <li class="nav-item">
    //                             <a class="nav-link" href="#contact">Contact Us</a>
    //                          </li>
    //                       </ul>
    //                    </div>
    //                 </nav>
    //              </div>
    //              <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col logo_section">
    //                 <div class="full">
    //                    <div class="center-desk">
    //                       <div class="logo">
    //                          <a href="index.html"><img src="images/logo.png" alt="#" /></a>
    //                       </div>
    //                    </div>
    //                 </div>
    //              </div>
    //              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5">
    //                 <ul class="email">
    //                    <li><a href="#">Call: (+71) 1234567890</a></li>
    //                    <li><a href="#">Email: demo@gmail.com</a></li>
    //                    <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
    //                 </ul>
    //              </div>
    //           </div>
    //        </div>
    //     </div>
    //  </header>
  );
};

export default Header;
