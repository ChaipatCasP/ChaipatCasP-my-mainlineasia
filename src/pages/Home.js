import React from "react";
// import banner_en from "../assets/images/banner-en.jpg";
// import banner_th from "../assets/images/banner-th.jpg";
import { useTranslation } from "react-i18next"; // หากใช้ i18next

import "./Home.css";
import Train from "../assets/images/Train.png";
// import bg2 from "../assets/images/Train.png";

import vector1 from "../assets/images/Vector-1.png";
import vector2 from "../assets/images/Vector-2.png";
import vector3 from "../assets/images/Vector-3.png";

const Home = () => {
  const { t } = useTranslation();

  // const images = {
  //   en: banner_en,
  //   th: banner_th,
  // };

  return (
    <div className="home">
      <div className="hero">
        <img src={Train} alt="bg" className="hero-image" />

        <div className="hero-text">
          <label>{t("hometxtbanner")}</label>
        </div>
      </div>

      <div className="home-aboutus-container">
        {/* <img src={bg2} alt="bg" className="home-aboutus-image" /> */}

        <div className="aboutus-text">
          <div style={{ display: "flex" }}>
            <div style={{ width: "40%" }}>
              <h2>{t("about")}</h2>
            </div>

            <div style={{ width: "55%", textAlign: "left" }}>
              <div style={{ width: "90%" }}>{t("about_Detail")}</div>
            </div>

            <div style={{ width: "5%" }}></div>
          </div>

          <div className="home-aboutus-items">
            <div className="home-aboutus-item">
              <div className="border-header">
                <label className="home-aboutus-item-header">
                  {t("about_Card1")}
                </label>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <img src={vector1} alt="card" />
              </div>
              <div style={{ padding: "10px" }}>
                <label className="home-aboutus-item-footer">
                  {t("about_Card1_footer")}
                </label>
              </div>
            </div>

            <div className="home-aboutus-item">
              <div className="border-header">
                <label className="home-aboutus-item-header">
                  {t("about_Card2")}
                </label>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <img src={vector2} alt="card" />
              </div>
              <div style={{ padding: "10px" }}>
                <label style={{ fontSize: "14px", fontWeight: "400" }}>
                  {t("about_Card2_footer")}
                </label>
              </div>
            </div>

            <div className="home-aboutus-item">
              <div className="border-header">
                <label className="home-aboutus-item-header">
                  {t("about_Card3")}
                </label>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <img src={vector3} alt="card" />
              </div>
              <div style={{ padding: "10px" }}>
                <label style={{ fontSize: "14px", fontWeight: "400" }}>
                  {t("about_Card3_footer")}
                </label>
              </div>
            </div>
          </div>

          <div style={{paddingTop:"20px"}}>
            {/* <h2>{t("service")}</h2> */}
          </div>




        </div>
      </div>
    </div>
  );
};

export default Home;
