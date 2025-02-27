import React, { useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next"; // หากใช้ i18next
import LanguageToggle from "./LanguageToggle"
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); 

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // ฟังก์ชันสำหรับเปลี่ยนภาษา
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // เปลี่ยนภาษาใน i18next
  };

  return (
    <nav className="navbar">
      <div className="logo">YOUR LOGO</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>

      <li><Link to="/">{t("home")}</Link></li>
        <li><Link onClick={toggleMenu} to="/about">{t("about")}</Link></li>
        <li><Link onClick={toggleMenu} to="/business">{t("ourbusiness")}</Link></li>
        <li><Link onClick={toggleMenu} to="/projects">{t("refprojects")}</Link></li>
        <li><Link onClick={toggleMenu} to="/careers">{t("careers")}</Link></li>
        <li><Link onClick={toggleMenu} to="/contact">{t("contact")}</Link></li>

        <li style={{cursor:"pointer"}}>
            <LanguageToggle changeLanguage={changeLanguage}/>
        </li>

      </ul>
      {/* ตัวสลับภาษา */}
    </nav>
  );
};

export default Header;
