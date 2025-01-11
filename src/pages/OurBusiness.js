import React from 'react';
import logoimg from '../assets/logo.jpg'


const OurBusiness = () => (
  <div className="page business">
    <h2>Our Business & Services</h2>
    <p>We specialize in various fields including...</p>
    <img src={logoimg} alt="Our Business" className="business-image" />
  </div>
);

export default OurBusiness;
