import React from "react";
// import banner_en from "../assets/images/banner-en.jpg";
// import banner_th from "../assets/images/banner-th.jpg";
import { useTranslation } from "react-i18next"; // หากใช้ i18next

import "./Home.css";
import Train from "../assets/images/Train.png";

const Home = () => {
  const { t, i18n } = useTranslation();

  // const images = {
  //   en: banner_en,
  //   th: banner_th,
  // };

  return (
    <div>

      <div className="hero">
        <img src={Train} alt="bg" className="hero-image" />

        {/* <img src={images[i18n.language]}  className="hero-image" /> */}

        <div className="hero-text">
          <h1>{t("hometxtbanner")}</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
