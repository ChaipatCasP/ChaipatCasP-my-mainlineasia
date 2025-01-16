import React from "react";
import section from "../assets/images/section.png";
import "./AboutUs.css";

const AboutUs = () => (
  
  <section id="about" className="about-us">
    <h2>About Us</h2>
    <div className="about-us-cards">
      <div className="about-us-card"><img src={section}/></div>
      <div className="about-us-card"><img src={section}/></div>
      <div className="about-us-card"><img src={section}/></div>
      <div className="about-us-card"><img src={section}/></div>
      <div className="about-us-card"><img src={section}/></div>
      <div className="about-us-card"><img src={section}/></div>
      <div className="about-us-card"><img src={section}/></div>
      <div className="about-us-card"><img src={section}/></div>
      </div>
  </section>
);

export default AboutUs;
