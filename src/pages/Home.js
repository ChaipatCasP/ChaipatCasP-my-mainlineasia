import React from "react";
// import banner_en from "../assets/images/banner-en.jpg";
// import banner_th from "../assets/images/banner-th.jpg";
// import { useTranslation } from "react-i18next";
import "./Home.css";
import Train from "../assets/images/Train.png";

const Home = () => {
  // const { t, i18n } = useTranslation();

  // const images = {
  //   en: banner_en,
  //   th: banner_th,
  // };

  return (
    <div>
      {/* <html lang={i18n.language} />
      <title>My Multilingual Page</title>
      <meta name="description" content="This is a multilingual website." /> */}

      <div className="hero">
        <img src={Train} alt="bg" className="hero-image" />

        {/* <img src={images[i18n.language]}  className="hero-image" /> */}

        <div className="hero-text">
          <h1>เชื่อมต่อรถไฟฟ้าโดยสารสาธารณะด้วยพลังงานไฟฟ้า</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
