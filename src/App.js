// import React, { useState } from 'react';
import './styles.css';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurBusiness from './pages/OurBusiness';
import ProjectReferences from './pages/ProjectReferences';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

const App = () => {
  // const [isMenuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  return (
    <div className="app">
      <Header />
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