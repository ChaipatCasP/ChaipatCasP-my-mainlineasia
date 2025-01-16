import React from "react";
import logoimg from "../assets/logo.jpg";
import "./AboutUs.css";

const AboutUs = () => (
  
  <section id="about" className="about-us">
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet...</p>
    <div className="sections">
      <div className="section">Section 1</div>
      <div className="section">Section 2</div>
      <div className="section">Section 3</div>
    </div>
  </section>

  // <div className="page about">
  //   <h2>About Us</h2>
  //   <p>We have been operating for over 10 years...</p>
  //   <p>Follow us on <a href="https://facebook.com">Facebook</a> and <a href="https://instagram.com">Instagram</a>.</p>
  //   <img src={logoimg} alt="About Us" className="about-image" />
  // </div>
);

export default AboutUs;
