import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // ใช้ดึงค่า ID จาก URL
import { useTranslation } from "react-i18next"; // หากใช้ i18next

import "./AboutUsRailway.css";
import Train from "../assets/images/bg.jpeg";

const AboutUsRailway = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // ดึง id จาก URL
    const searchParams = new URLSearchParams(location.search);
    const sectionId = searchParams.get("id");

    // ถ้ามี id ให้เลื่อนลงไปยัง div ที่ตรงกับ id
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.style.display = "block"; // เปิดการแสดงผลถ้า display: none;
        element.scrollIntoView({ behavior: "smooth" }); // เลื่อนลงอย่างนุ่มนวล
      }
    }
  }, [location]);

  return (
    <div>
      <div id="1" style={{ display: "none" }}>
        <div className="aboutus-railway">
          <div className="aboutus-railway1">
            <h2 style={{ color: "rgba(74, 102, 172, 1)" }}>
              {t("highperformance_railway_power_supply_header")}
            </h2>
            <div className="aboutus-railway1-details">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <label style={{ paddingBottom: "10px" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {t("highperformance_railway_power_supply_detail1")}
                </label>

                <label style={{ paddingBottom: "10px" }}>
                  {t("highperformance_railway_power_supply_detail2")}
                </label>

                <label style={{ paddingBottom: "10px" }}>
                  {t("highperformance_railway_power_supply_detail3")}
                </label>

                <label style={{ paddingBottom: "10px" }}>
                  {t("highperformance_railway_power_supply_detail4")}
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <label>{t("tractionsubstations")}</label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  {t("tractionsubstations_detail_about1")}
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  {t("tractionsubstations_detail_about2")}
                </label>
              </div>
            </div>
          </div>

          <div className="aboutus-railway2">
            <img src={Train} alt="bg" />
          </div>

          <div className="aboutus-railway3"></div>
        </div>
      </div>

      <div id="2" style={{ display: "none" }}>
        <div className="aboutus-railway">
          <div className="aboutus-railway1">
            <h2 style={{ color: "rgba(74, 102, 172, 1)" }}>
              {t("AdvancedEnergyStorage")}
            </h2>
            <div className="aboutus-railway1-details">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <label style={{ paddingBottom: "10px" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {t("AdvancedEnergyStorage_detail1")}
                </label>
                <label>{t("tractionsubstations")}</label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  {t("AdvancedEnergyStorage_detail2")}
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  {t("AdvancedEnergyStorage_detail3")}
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  {t("AdvancedEnergyStorage_detail4")}
                </label>
              </div>
            </div>
          </div>

          <div className="aboutus-railway2">
            <img src={Train} alt="bg" />
          </div>

          <div className="aboutus-railway3"></div>
        </div>
      </div>
      <div id="3" style={{ display: "none" }}>
        <div className="aboutus-railway">
          <div className="aboutus-railway1">
            <h2 style={{ color: "rgba(74, 102, 172, 1)" }}>
              {t("RobustEVChargingNetworks")}
            </h2>
            <div className="aboutus-railway1-details">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <label style={{ paddingBottom: "10px" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {t("RobustEVChargingNetworks_detail1")}
                </label>
                <label>{t("tractionsubstations")}</label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  {t("RobustEVChargingNetworks_detail2")}
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  {t("RobustEVChargingNetworks_detail3")}
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  {t("RobustEVChargingNetworks_detail4")}
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  {t("RobustEVChargingNetworks_detail5")}
                </label>
              </div>
            </div>
          </div>

          <div className="aboutus-railway2">
            <img src={Train} alt="bg" />
          </div>

          <div className="aboutus-railway3"></div>
        </div>
      </div>

      <div>&nbsp;</div>
    </div>
  );
};

export default AboutUsRailway;
