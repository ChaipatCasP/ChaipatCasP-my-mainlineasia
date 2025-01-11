import React, { useState } from 'react';
import './styles.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurBusiness from './pages/OurBusiness';
import ProjectReferences from './pages/ProjectReferences';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
          <li><a href="#business" onClick={toggleMenu}>Our Business & Services</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Project References</a></li>
          <li><a href="#careers" onClick={toggleMenu}>Careers</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
        </ul>
      </nav>
      <div id="home"><Home /></div>
      <div id="about"><AboutUs /></div>
      <div id="business"><OurBusiness /></div>
      <div id="projects"><ProjectReferences /></div>
      <div id="careers"><Careers /></div>
      <div id="contact"><ContactUs /></div>

      <Footer />
    </div>
  );
};

export default App;