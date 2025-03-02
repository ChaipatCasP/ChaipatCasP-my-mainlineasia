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

import storagesystem from "../assets/images/storagesystem.png";
import storagesystem2 from "../assets/images/storagesystem2.png";
import storagesystem3 from "../assets/images/storagesystem3.png";
import storagesystem4 from "../assets/images/storagesystem4.png";

import iTrailer from "../assets/images/iTrailer.png";
import iMChargerX from "../assets/images/iMChargerX.png";
import iACharge from "../assets/images/iACharge.png";
import iCabinet from "../assets/images/iCabinet.png";






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

      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <div className="product-txt-header">
          <label className="ourbusiness-header-header">
            Product : Energy Storage Solutions
          </label>
        </div>

        <div className="energy_storage">
          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">
                Residential Energy Storage Solutions All-in-one system uses
                flexible battery modular design and integrates inverter, EMS,
                and UPS management systems to create an efficient, safe and
                intelligent residential ESS.
              </label>
            </div>

            <div className="energy_storage-item-img">
              <img src={storagesystem} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">
                Industrial and Commercial (C&I) Energy Storage Solutions 218kWh
                battery energy storage capacity, built-in PCS/BMS, real-time
                monitoring and management of power information through the
                network, small footprint, easy to install and expand, It
                provides an economical, flexible and efficient solution for
                applications with high requirements on grid continuity, peak
                shaving and valley filling and backup power supply, etc.
              </label>
            </div>

            <div className="energy_storage-item-img">
              <img src={storagesystem2} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">
                Utility Energy Storage Solutions Utility ESS can customize
                container packaging of various sizes based on requests, using
                safe and efficient lithium-iron batteries, integrating
                communication, monitoring systems, power conversion systems,
                fire protection and auxiliary systems. The product has the
                advantages of high integration, flexible configuration, full
                functions, convenient installation and debugging.
              </label>
            </div>

            <div className="energy_storage-item-img">
              <img src={storagesystem3} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">
                2MWh large capacity container energy storage charging station,
                equipped with 6 car charging guns at the same time can output
                200kW charging power, also provides a variety of industrial
                power output interface, modular container design, can be quickly
                transported to different occasions, flexible use.
              </label>
            </div>

            <div className="energy_storage-item-img">
              <img src={storagesystem4} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">
                With 200 kWh of storage and 180 kW charging power, iTrailer is
                versatile for stationary, towed, or in-vehicle use. It serves as
                a charger for electric vehicles, an emergency power source, and
                a backup power supply. Its industrial power outlets offer
                reliable electricity for various applications.
              </label>
            </div>

            <div className="energy_storage-item-img">
              <img src={iTrailer} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail" style={{ paddingTop: "10px" }}>
                iMChargerX is a mobile DC fast charger, It offers 60 kW of
                charging power for one, or 30 kW for two fast charging outlets
                simultaneously. It is equipped with a user-friendly 21-inch
                touchscreen and RFID reader. iMChargerX is suitable for charging
                all types of electric vehicles, cars, trucks, buses, marine and
                off-highway vehicles.
              </label>
            </div>

            <div
              className="energy_storage-item-img"
              style={{ marginTop: "60px" }}
            >
              <img src={iMChargerX} alt="bg" style={{ height: "130px" }} />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">
                Integrated energy storage and charging integrated charging
                robot, built-in 106kWh battery capacity, 80kW charging power,
                equipped with intelligent robot arm, automatic identification
                access charging, can complete automatic car search, automatic
                navigation, automatic access charging, automatic return to
                recharge and etc.
              </label>
            </div>

            <div className="energy_storage-item-img" style={{ marginTop: "40px" }}>
              <img src={iACharge} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
            <label className="detail" style={{ paddingTop: "10px" }}>
                Built-in 110kWh energy storage battery capacity, support single
                gun 180kW double gun 90kW charging output power, equipped with
                industrial electrical interface output, supports PV input
                recharge, can quickly land photovoltaic energy storage charging
                station, greatly reduce the cost of site construction.
              </label>
            </div>

            <div className="energy_storage-item-img" style={{ marginTop: "50px" }}>
              <img src={iCabinet} alt="bg" style={{height:'130px'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurBusiness;