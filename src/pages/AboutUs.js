import React from "react";
// import banner_en from "../assets/images/banner-en.jpg";
// import banner_th from "../assets/images/banner-th.jpg";
import { useTranslation } from "react-i18next"; // หากใช้ i18next

import "./AboutUs.css";
import Train from "../assets/images/bg.jpeg";
import vector1 from "../assets/images/Vector-1.png";
import vector2 from "../assets/images/Vector-2.png";
import vector3 from "../assets/images/Vector-3.png";
import { Link } from "react-router-dom"; 

const AboutUs = () => {
  const { t } = useTranslation();

  // const images = {
  //   en: banner_en,
  //   th: banner_th,
  // };

  return (
    <div>
      <div className="aboutus-container">
        <div className="aboutus-text">
          <div
            style={{
              display: "flex",
              textAlign: "center",
              paddingTop: "100px",
            }}
          >
            <div style={{ width: "40%", padding: "50px 30px 0 30px" }}>
              <h2 style={{ color: "rgba(74, 102, 172, 1)" }}>{t("about")}</h2>
              <div style={{ padding: "20px" }}>{t("about_Detail")}</div>
            </div>

            <div style={{ width: "55%", textAlign: "left" }}>
              <img src={Train} alt="bg" />
            </div>

            <div style={{ width: "5%" }}></div>
          </div>

          <div style={{ display: "flex", textAlign: "center" }}>
            <div style={{ width: "40%", padding: "50px 30px 0 30px" }}>
              <h2 style={{ color: "rgba(74, 102, 172, 1)" }}>
                {t("ourvision")}
              </h2>
            </div>

            <div style={{ width: "55%", textAlign: "left" }}>
              <div style={{ padding: "20px" }}>{t("ourvision_Detail")}</div>
            </div>

            <div style={{ width: "5%" }}></div>
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
            <h1 style={{ color: "rgba(74, 102, 172, 1)" }}>Core Value</h1>
          </div>

          <div className="aboutus-items-no-img">
            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> Innovation </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label>
                  We foster a culture of continuous improvement, leveraging the
                  latest research and technological advancements to create
                  forward-looking solutions.
                </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> Integrity </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label>
                  Ethical business practices and transparent communication form
                  the foundation of our relationships with customers, partners,
                  and employees.
                </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> Sustainability </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label>
                  Every project is approached with a focus on reducing carbon
                  emissions, promoting renewable energy usage, and minimizing
                  environmental impact.
                </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> Collaboration </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label>
                  We believe in close partnerships with clients, suppliers, and
                  industry stakeholders to ensure seamless project execution and
                  shared success.
                </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> Customer-Centricity </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label>
                  Our solutions are designed around the unique needs of each
                  client, providing tailored services and dedicated support.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;