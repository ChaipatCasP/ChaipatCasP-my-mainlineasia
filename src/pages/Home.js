import React from "react";
import { useTranslation } from "react-i18next"; // หากใช้ i18next

import "./Home.css";
import Train from "../assets/images/Train.png";
import electric from "../assets/icon/electric-car.png";
import train from "../assets/icon/train-1.png";
import lighting from "../assets/icon/lighting.png";
import BoxRailwayElectrification from "../components/BoxRailwayElectrification"
import BoxRollingStockComponents from "../components/BoxRollingStockComponents"
import BoxEnergyStorageSolutions from "../components/BoxEnergyStorageSolutions"



const Home = () => {
  const { t } = useTranslation();

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
                  {t("railway")}
                </label>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <img src={train} alt="card" className="card-img" />
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
                  {t("energystorage")}
                </label>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <img src={electric} alt="card" className="card-img" />
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
                  {t("evcharger")}
                </label>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <img src={lighting} alt="card" className="card-img" />
              </div>
              <div style={{ padding: "10px" }}>
                <label style={{ fontSize: "14px", fontWeight: "400" }}>
                  {t("about_Card3_footer")}
                </label>
              </div>
            </div>
          </div>

          <div style={{ paddingTop: "20px" }}>
            {/* <h2>{t("service")}</h2> */}
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "white", paddingTop: "10px" }}>
        <div className="textdiv">
          <div>
            <BoxRailwayElectrification />
          </div>

          <div>
            <BoxEnergyStorageSolutions />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "white", paddingTop: "80px" }}>
        <BoxRollingStockComponents/>
      </div>



    </div>
  );
};

export default Home;
