import React from 'react';
import "./OurBusiness.css";
// import { useTranslation } from "react-i18next"; // หากใช้ i18next

import rpsrailpowersystem from "../assets/images/rpsrailpowersystem.png";
import rehau from "../assets/images/rehau.png";
import edacec from "../assets/images/edacec.png";
import stemmann from "../assets/images/stemmann.png";
import cembre from "../assets/images/cembre.png";
import Pantograph from "../assets/images/Pantograph.png";
import MasterController from "../assets/images/MasterController.png";
import EnergyMeter from "../assets/images/EnergyMeter.png";


import RoofMountingSwitch from "../assets/images/RoofMountingSwitch.png";
import HVDCorACIntegratingsystem  from "../assets/images/HVDCorACIntegratingsystem.png";
import CurrentVoltageSensor from "../assets/images/CurrentVoltageSensor.png";
import ACCircuitBreaker  from "../assets/images/ACCircuitBreaker.png";
import SurgeArrestor from "../assets/images/SurgeArrestor.png";
import Contactors from "../assets/images/Contactors.png";
import RailCurrentCollector from "../assets/images/RailCurrentCollector.png";
import GroundContacts from "../assets/images/GroundContacts.png";



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
          <label className="ourbusiness-header-header">Our Business</label>
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

      <div style={{ textAlign: "center" }}>
        <label className="ourbusiness-header-header">
          Product : Railway Electrification
        </label>

        <div className="ourbusiness-footer-three">
          <div className="ourbusiness-footer-item">
            <div className="ourbusiness-footer-item-txt">
              <label className="header">Overhead Catenary Systems (OCS)</label>
              <label className="detail">
                High-quality overhead lines and catenary components engineered
                for efficiency and durability in high-speed, metro, and light
                rail systems.
              </label>
            </div>

            <div className="ourbusiness-footer-item-img img">
              <img src={rpsrailpowersystem} alt="bg" className="img" />
            </div>
          </div>

          <div className="ourbusiness-footer-item">
            <div className="ourbusiness-footer-item-txt">
              <label className="header">Third Rail Systems</label>
              <label className="detail">
                Advanced third-rail designs and protective covers that deliver
                safe, continuous power for urban and suburban transit networks.
              </label>
            </div>

            <div className="ourbusiness-footer-item-img img">
              <img src={rehau} alt="bg" className="img" />
            </div>
          </div>

          <div className="ourbusiness-footer-item">
            <div className="ourbusiness-footer-item-txt">
              <label className="header">Traction Substations</label>
              <label className="detail-two">
                High-efficiency solutions for reliable power conversion and
                distribution.
              </label>

              <label className="detail-two">
                Switchgear, breakers, and protective relays specifically
                engineered for railway power networks.
              </label>
            </div>

            <div className="ourbusiness-footer-item-img img">
              <img src={edacec} alt="bg" className="img" />
            </div>
          </div>
        </div>

        <div className="ourbusiness-footer-two">
          <div className="ourbusiness-footer-item">
            <div className="ourbusiness-footer-item-txt">
              <label className="header">Traction Substations</label>
              <label className="detail">
                Flexible, safe solutions for supplying power to trains during
                depot maintenance or staging operations.
              </label>
            </div>

            <div className="ourbusiness-footer-item-img img">
              <img src={stemmann} alt="bg" className="img" />
            </div>
          </div>

          <div className="ourbusiness-footer-item">
            <div className="ourbusiness-footer-item-txt">
              <label className="header">
                Auxiliary Components & Accessories
              </label>
              <label className="detail">
                High-quality conductors and connectors for efficient energy
                transfer and reduced line losses. Rail Bonding material.
              </label>
            </div>

            <div className="ourbusiness-footer-item-img img">
              <img src={cembre} alt="bg" className="img" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <div className="product-txt-header">
          <label className="ourbusiness-header-header">
            Product : Rolling Stock Components
          </label>
          <div className="ourbusiness-header-details">
            <label>
              Mainline Asia we offers a wide range of electrical component part
              from our product partner for AC rail vehicles and DC rail vehicles
              , such as EMU trains, high-speed trains and metro. Our main
              product consist of Pantograph / 3Rail Current connector, ground
              Contracts, Roof Mounting Switch, AC or DC Circuit breaker, Surge
              Arrestor, Voltage Sensor, Energy meter and Master Controller.
            </label>
          </div>
        </div>

        <div className="ourbusiness-product">
          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>Pantograph</label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={Pantograph} alt="bg" />
            </div>
          </div>

          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>Master Controller</label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={MasterController} alt="bg" />
            </div>
          </div>

          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>Energy Meter</label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={EnergyMeter} alt="bg" />
            </div>
          </div>

          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>Roof Mounting Switch</label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={RoofMountingSwitch} alt="bg" />
            </div>
          </div>

          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>HV DC or AC Integrating system </label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={HVDCorACIntegratingsystem} alt="bg" />
            </div>
          </div>

          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>Current / Voltage Sensor</label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={CurrentVoltageSensor} alt="bg" />
            </div>
          </div>

          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>AC Circuit Breaker</label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={ACCircuitBreaker} alt="bg" />
            </div>
          </div>

          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>Surge Arrestor</label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={SurgeArrestor} alt="bg" />
            </div>
          </div>

          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>Contactors</label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={Contactors} alt="bg" />
            </div>
          </div>

          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>3Rail Current Collector</label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={RailCurrentCollector} alt="bg" />
            </div>
          </div>

          <div className="ourbusiness-product-item">
            <div className="ourbusiness-product-item-txt">
              <label>Ground Contacts</label>
            </div>

            <div className="ourbusiness-product-item-img">
              <img src={GroundContacts} alt="bg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurBusiness;