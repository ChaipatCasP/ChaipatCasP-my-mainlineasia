import React from 'react';
import logoimg from '../assets/logo.jpg'
import "./Careers.css";

const Careers = () => (
  <div className="page careers">
    <h2>Careers</h2>
    <p>Join our team! We are hiring for positions in various departments.</p>
    <img src={logoimg} alt="Careers" className="careers-image" />
  </div>
);

export default Careers;
