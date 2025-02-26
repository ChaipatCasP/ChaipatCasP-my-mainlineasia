import React, { useState } from "react";
import "./Header.css";
import img_en from "../assets/us.png";
import img_th from "../assets/th.png";
import { useTranslation } from "react-i18next"; // หากใช้ i18next
import LanguageToggle from "./LanguageToggle"

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
        <li>
          <a href="#home" onClick={toggleMenu}>
            {t("home")}
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            {t("about")}
          </a>
        </li>
        <li>
          <a href="#business" onClick={toggleMenu}>
            {t("ourbusiness")}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            {t("refprojects")}
          </a>
        </li>
        <li>
          <a href="#careers" onClick={toggleMenu}>
            {t("careers")}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            {t("contact")}
          </a>
        </li>
        <li>
          <a href="#home">
          {/* <div className="language-toggle">
              <button onClick={() => changeLanguage("en")}>
                <img src={img_en} alt="en" className="language-img" /> อังกฤษ
              </button>
              <button onClick={() => changeLanguage("th")}>
                <img src={img_th} alt="th" className="language-img" /> ไทย
              </button>
            </div> */}
            <LanguageToggle changeLanguage={changeLanguage}/>
          </a>
        </li>
      </ul>
      {/* ตัวสลับภาษา */}
    </nav>
  );
};

export default Header;
