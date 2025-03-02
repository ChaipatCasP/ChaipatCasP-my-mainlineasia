import React, { useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next"; // หากใช้ i18next
import LanguageToggle from "./LanguageToggle"
import { Link } from "react-router-dom";
import youlogo from "../assets/youlogo.png";

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
      <div className="logo"><Link to="/" style={{display:'flex',flexDirection:'row'}}>
        <img src={youlogo} alt="bg" style={{ width: "80px", height: "30px" }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "13px",
            paddingLeft: "5px",
          }}
        >
          <label>Mainline </label>
          <label style={{ color: "red" }}> Asia</label>
        </div>

        </Link> 
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link onClick={toggleMenu} to="/">
            {t("home")}
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/about">
            {t("about")}
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/business">
            {t("ourbusiness")}
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/projects">
            {t("refprojects")}
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/careers">
            {t("careers")}
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/contact">
            {t("contact")}
          </Link>
        </li>

        <li style={{ cursor: "pointer" }}>
          <LanguageToggle changeLanguage={changeLanguage} toggleMenu={toggleMenu}/>
        </li>
      </ul>
      {/* ตัวสลับภาษา */}
    </nav>
  );
};

export default Header;
