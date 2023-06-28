import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./Home.css";
import Contact from "../contact/Contact";
// import Contact from "../contact/Contact";
import Scroll from "./Scroll";
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Data />
          {/* <Scroll /> */}
        </div>
      </div>
      {/* <Contact /> */}
    </section>
  );
};

export default Home;
