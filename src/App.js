// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurBusiness from './pages/OurBusiness';
import ProjectReferences from './pages/ProjectReferences';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';

const App = () => (
  <div className="app">
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#business">Our Business & Services</a></li>
        <li><a href="#projects">Project References</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
    <div id="home"><Home /></div>
    <div id="about"><AboutUs /></div>
    <div id="business"><OurBusiness /></div>
    <div id="projects"><ProjectReferences /></div>
    <div id="careers"><Careers /></div>
    <div id="contact"><ContactUs /></div>
  </div>
);

// Render the app
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
