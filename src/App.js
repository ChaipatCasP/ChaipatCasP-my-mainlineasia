import React, { Suspense, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurBusiness = lazy(() => import("./pages/OurBusiness"));
const Product = lazy(() => import("./pages/Product"));
const ProjectReferences = lazy(() => import("./pages/ProjectReferences"));
const Careers = lazy(() => import("./pages/Careers"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUsRailway = lazy(() => import("./pages/AboutUsRailway"));


const App = () => {

  const { i18n } = useTranslation();

  useEffect(() => {
    // ตรวจสอบภาษาใน localStorage หรือ cookie
    const lang = localStorage.getItem("i18nextLng") || "en";
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);


  return (
    <Router>
      <div className="app">
        <Header key={i18n.language} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about-railway" element={<AboutUsRailway />} />
            <Route path="/business" element={<OurBusiness />} />
            <Route path="/product" element={<Product />} />
            <Route path="/projects" element={<ProjectReferences />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;