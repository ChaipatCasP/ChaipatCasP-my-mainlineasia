import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom"; // ใช้ดึงค่า ID จาก URL

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
        <div
          style={{ display: "flex", textAlign: "center", paddingTop: "100px" }}
        >
          <div style={{ width: "50%", padding: "0 30px 0 30px" }}>
            <h2 style={{ color: "rgba(74, 102, 172, 1)" }}>High-Performance Railway Power Supply
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <label style={{ paddingBottom: "10px" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We
                  develop turnkey railway solution with a completed system of
                  traction power supply , power rail , overhead catenary and
                  stinger system including maintenance work.
                </label>

                <label style={{ paddingBottom: "10px" }}>
                  Overhead Catenary Systems (OCS): Reliable power distribution
                  for high-speed, metro, and light rail systems.
                </label>

                <label style={{ paddingBottom: "10px" }}>
                  Third Rail Systems: Efficient power supply for urban metro
                  networks.
                </label>

                <label style={{ paddingBottom: "10px" }}>
                  Stinger Systems: Powering trains during maintenance in depots
                  and workshops.
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
                <label>Traction Substations:</label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  • Design & Engineering: Customized solutions that convert
                  incoming high-voltage AC power to the specific AC or DC
                  voltage needed for railway traction.
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  • Key Components: Includes transformers, rectifiers,
                  switchgear, and protective devices to ensure safe and stable
                  power distribution.
                </label>
              </div>
            </div>
          </div>

          <div style={{ width: "45%", textAlign: "left" }}>
            <img src={Train} alt="bg" />
          </div>

          <div style={{ width: "5%" }}></div>
        </div>
      </div>

      <div id="2" style={{ display: "none" }}>
        <div
          style={{ display: "flex", textAlign: "center", paddingTop: "100px" }}
        >
          <div style={{ width: "50%", padding: "0 30px 0 30px" }}>
            <h2 style={{ color: "rgba(74, 102, 172, 1)" }}>Advanced Energy Storage</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <label style={{ paddingBottom: "10px" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Provides
                  customized energy storage solutions with a complete battery
                  value chain and solid capabilities across manufacturing,
                  distribution with our partner for all solution
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
                <label>Traction Substations:</label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  • Residential Energy Storage Solutions.
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  • Utility Energy Storage Solutions.
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  • Industrial and Commercial (C&I) Energy Storage Solutions.
                </label>
              </div>
            </div>
          </div>

          <div style={{ width: "45%", textAlign: "left" }}>
            <img src={Train} alt="bg" />
          </div>

          <div style={{ width: "5%" }}></div>
        </div>
      </div>

      <div id="3" style={{ display: "none" }}>
        <div
          style={{ display: "flex", textAlign: "center", paddingTop: "100px" }}
        >
          <div style={{ width: "50%", padding: "0 30px 0 30px" }}>
            <h2 style={{ color: "rgba(74, 102, 172, 1)" }}>Robust EV Charging Networks</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <label style={{ paddingBottom: "10px" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Provides customized EV Charger solutions with a complete solution.
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
                <label>Traction Substations:</label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  • Fast-Charging Stations: Compatibility with all major EV models.
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  • Smart Charging Solutions: IoT-enabled monitoring, billing, and load  management.
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  • Green Energy Integration: Options for on-site solar or wind power to reduce carbon footprint.
                </label>
                <label style={{ paddingLeft: "20px", paddingTop: "15px" }}>
                  • Tailored Implementations: Urban, highway, and fleet charging solutions for diverse customer requirements.
                </label>
              </div>
            </div>
          </div>

          <div style={{ width: "45%", textAlign: "left" }}>
            <img src={Train} alt="bg" />
          </div>

          <div style={{ width: "5%" }}></div>
        </div>
      </div>

      <div>&nbsp;</div>
    </div>
  );
};

export default AboutUsRailway;
