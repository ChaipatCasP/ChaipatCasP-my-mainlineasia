import React from 'react';
import "./OurBusiness.css";
import { useTranslation } from "react-i18next"; // หากใช้ i18next
import vector1 from "../assets/images/Vector-1.png";
import vector2 from "../assets/images/Vector-2.png";
import vector3 from "../assets/images/Vector-3.png";
import { Link } from "react-router-dom";

const OurBusiness = () => {
  const { t } = useTranslation();

  return (
    <div className="ourbusiness-container">

      <div className="ourbusiness-header">
        <div>
          <label className="ourbusiness-header-header">
            {t("ourbusiness")}
          </label>
        </div>

        <div className="ourbusiness-header-details">
          <div style={{ paddingBottom: "25px" }}>
            <label>{t("ourbusiness_detail1")}</label>
          </div>

          <div style={{ paddingBottom: "25px" }}>
            <label>{t("ourbusiness_detail2")}</label>
          </div>

          <div>
            <label>{t("ourbusiness_detail3")}</label>
          </div>

          <div style={{ paddingBottom: "10px" }}>
            <label>{t("ourbusiness_detail4")}</label>
          </div>
        </div>
      </div>

      <div className="ourbusiness-details">
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
      </div>


    </div>
  );
};
export default OurBusiness;