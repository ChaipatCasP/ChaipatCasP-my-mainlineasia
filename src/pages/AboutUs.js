import React from "react";
// import banner_en from "../assets/images/banner-en.jpg";
// import banner_th from "../assets/images/banner-th.jpg";
import { useTranslation } from "react-i18next"; // หากใช้ i18next

import "./AboutUs.css";
import Train from "../assets/images/bg.jpeg";
import vector1 from "../assets/images/Vector-1.png";
import vector2 from "../assets/images/Vector-2.png";
import vector3 from "../assets/images/Vector-3.png";

const AboutUs = () => {
  const { t } = useTranslation();

  // const images = {
  //   en: banner_en,
  //   th: banner_th,
  // };

  return (
    <div>
      <div className="aboutus-container">
        <img src={Train} alt="bg" className="aboutus-image" />
        <div className="aboutus-text">
          <div style={{ display: "flex" }}>
            <div style={{ width: "30%" }}>
              <h2>{t("about")}</h2>
            </div>

            <div style={{ width: "65%", textAlign: "left" }}>
              {t("about_Detail")}
            </div>

            <div style={{ width: "5%" }}></div>
          </div>

          <div className="aboutus-items">
            <div className="aboutus-item">
              <div
                style={{
                  border: "solid 1px",
                  height: "130px",
                  paddingTop: "25px",
                }}
              >
                <label style={{ fontSize: "30px", width: "700" }}>
                  {t("about_Card1")}
                </label>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <img src={vector1} alt="card" />
              </div>
              <div style={{ padding: "10px" }}>
                <label style={{ fontSize: "14px", fontWeight: "400" }}>
                  {t("about_Card1_footer")}
                </label>
              </div>
            </div>

            <div className="aboutus-item">
              <div
                style={{
                  border: "solid 1px",
                  height: "130px",
                  paddingTop: "25px",
                }}
              >
                <label style={{ fontSize: "30px", width: "700" }}>
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

            <div className="aboutus-item">
              <div
                style={{
                  border: "solid 1px",
                  height: "130px",
                  paddingTop: "25px",
                }}
              >
                <label style={{ fontSize: "30px", width: "700" }}>
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

          {/* <h1>{t("hometxtbanner")}</h1> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;