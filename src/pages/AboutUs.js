import React from "react";
// import banner_en from "../assets/images/banner-en.jpg";
// import banner_th from "../assets/images/banner-th.jpg";
import { useTranslation } from "react-i18next"; // หากใช้ i18next

import "./AboutUs.css";
import vector1 from "../assets/images/Vector-1.png";
import vector2 from "../assets/images/Vector-2.png";
import vector3 from "../assets/images/Vector-3.png";
import { Link } from "react-router-dom"; 

import BoxActivity from "../components/BoxActivity"



const AboutUs = () => {
  const { t } = useTranslation();

  // const images = {
  //   en: banner_en,
  //   th: banner_th,color: rgb(165 190 255);
  // };

  return (
    <div>
      <div className="aboutus-container">
        <div className="aboutus-text">
          <div className="aboutus-text-header">
            <div className="aboutus-text-header1">
              <h2 style={{ color: "rgba(74, 102, 172, 1)" }}>{t("about")}</h2>
              <div style={{ padding: "20px" }}>{t("about_Detail")}</div>
            </div>

            <div className="aboutus-text-header2">
              {/* <img src={Train} alt="bg" /> */}

              <BoxActivity />
            </div>

            <div className="aboutus-text-header3"></div>
          </div>

          <div className="ourvision">
            <div className="ourvision1">
              <h2 style={{ color: "rgb(56 76 127)" }}>{t("ourvision")}</h2>
            </div>

            <div className="ourvision2">
              <div style={{ padding: "20px" }}>{t("ourvision_Detail")}</div>
            </div>

            <div className="ourvision3"></div>
          </div>

          <div className="ourMission">
            <div className="ourMission1">
              <h2 style={{ color: "rgb(56 76 127)" }}>{t("OurMission")}</h2>
            </div>

            <div className="ourMission2">
              <div className="ourMission2-item">{t("OurMission_Detail1")}</div>
              <div className="ourMission2-item">{t("OurMission_Detail2")}</div>
              <div className="ourMission2-item">{t("OurMission_Detail3")}</div>
            </div>

            <div className="ourMission3"></div>
          </div>

          <div className="aboutus-items">
            <Link to="/about-railway?id=1" className="link-button">
              <div className="aboutus-item" id="1">
                <div className="border-header">
                  <label className="aboutus-item-header">
                    {t("about_Card1")}
                  </label>
                </div>
                <div style={{ paddingTop: "30px" }}>
                  <img src={vector1} alt="card" />
                </div>
                <div style={{ padding: "10px" }}>
                  <label className="aboutus-item-footer">
                    {t("about_Card1_footer")}
                  </label>
                </div>
              </div>
            </Link>

            <Link to="/about-railway?id=2" className="link-button">
              <div className="aboutus-item" id="2">
                <div className="border-header">
                  <label className="aboutus-item-header">
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
            </Link>

            <Link to="/about-railway?id=3" className="link-button">
              <div className="aboutus-item" id="3">
                <div className="border-header">
                  <label className="aboutus-item-header">
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
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <h1 style={{ color: "rgb(165 190 255)" }}>{t("corevalue")}</h1>
          </div>

          <div className="aboutus-items-no-img">
            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> {t("innovation")} </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label> {t("innovation_detail")} </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> {t("integrity")} </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label> {t("integrity_detail")} </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> {t("sustainability")} </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label> {t("sustainability_detail")} </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> {t("collaboration")} </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label> {t("collaboration_detail")} </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> {t("customercentricity")} </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label> {t("customercentricity_detail")} </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;