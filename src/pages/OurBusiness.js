import React from 'react';
import "./OurBusiness.css";
// import { useTranslation } from "react-i18next"; // หากใช้ i18next

// import Train from "../assets/images/Train.png";


const OurBusiness = () => {
  // const { t } = useTranslation();

  // const images = {
  //   en: banner_en,
  //   th: banner_th,
  // };

  return (
    <div className="ourbusiness-container">
      <div className="ourbusiness-header">
        <div>
          <label
            style={{
              color: "rgba(74, 102, 172, 1)",
              fontWeight: "bold",
              fontSize: "35px",
            }}
          >
            Our Business
          </label>
        </div>

        <div className="ourbusiness-header-details">
          <div style={{ paddingBottom: "25px" }}>
            <label>
              Our company develops complete solutions for railway power supply
              systems, energy storage technology, and EV charging stations to
              support the transportation and energy industries.
            </label>
          </div>

          <div style={{ paddingBottom: "25px" }}>
            <label>
              Mainline Asia is a leading provider of power supply systems for
              railway infrastructure in Thailand. We offer services from design
              and installation to the management of power systems for different
              types of rail networks, including high-speed rail, subways, and
              light rail. We also provide solutions for maintenance depots and
              substations.
            </label>
          </div>

          <div>
            <label>Our business is divided into three main areas:</label>
          </div>

          <div style={{ paddingBottom: "25px" }}>
            <label>
              1.Rail Power Supply (Power systems for railway infrastructure),
              2.Energy Storage (Solutions for storing and managing energy) and
              3.EV Charging (Charging station solutions for electric vehicles)
            </label>
          </div>
        </div>
      </div>

      <div className="ourbusiness-footer-one">
        <div className="ourbusiness-footer-one-item">
          <label>Overhead Catenary Systems (OCS)</label>
        </div>

        <div className="ourbusiness-footer-one-item">
          <label>Third Rail Systems</label>
        </div>
      </div>

      <div className="ourbusiness-footer">
        <div className="ourbusiness-footer-item">
          <label>Traction Substations</label>
        </div>
      </div>

      <div className="ourbusiness-footer-one">
        <div className="ourbusiness-footer-item">
          <label>Residential Energy Storage Solutions</label>
        </div>

        <div className="ourbusiness-footer-item">
          <label>Utility Energy Storage Solutions</label>
        </div>
      </div>

      <div className="ourbusiness-footer">
        <div className="ourbusiness-footer-item">
          <label>Smart and Fast-Charging Stations</label>
        </div>
      </div>
    </div>
  );
};
export default OurBusiness;