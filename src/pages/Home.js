import React from 'react';
import logoimg from '../assets/logo.jpg'

const Home = () => (
  <div className="page home">
    <header className="banner">
      <h1>Welcome to Our Company</h1>
    </header>
    <img src={logoimg} alt="Company Logo" className="logo" />
  </div>
);

export default Home;
