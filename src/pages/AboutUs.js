import React from 'react';
import logoimg from '../assets/logo.jpg'


const AboutUs = () => (
  <div className="page about">
    <h2>About Us</h2>
    <p>We have been operating for over 10 years...</p>
    <p>Follow us on <a href="https://facebook.com">Facebook</a> and <a href="https://instagram.com">Instagram</a>.</p>
    <img src={logoimg} alt="About Us" className="about-image" />
  </div>
);

export default AboutUs;
