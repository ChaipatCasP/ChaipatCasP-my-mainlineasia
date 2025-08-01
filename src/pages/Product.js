import React from "react";
import "./Product.css";
import { useTranslation } from "react-i18next"; // หากใช้ i18next

import Picture23 from "../assets/images/Picture23.jpg";
import Picture24 from "../assets/images/Picture24.jpg";
import Picture25 from "../assets/images/Picture25.jpg";
import Picture26 from "../assets/images/Picture26.jpg";
import Picture27 from "../assets/images/Picture27.jpg";

import Pantograph from "../assets/images/Pantograph.png";
import MasterController from "../assets/images/MasterController.png";
import EnergyMeter from "../assets/images/EnergyMeter.png";
import RoofMountingSwitch from "../assets/images/RoofMountingSwitch.png";
import HVDCorACIntegratingsystem from "../assets/images/HVDCorACIntegratingsystem.png";
import CurrentVoltageSensor from "../assets/images/CurrentVoltageSensor.png";
import ACCircuitBreaker from "../assets/images/ACCircuitBreaker.png";
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


const Product = () => {
  const { t } = useTranslation();

  return (
    <div className="product">
      <div className="product-container" style={{ textAlign: "center" }}>
        <div className="product-items" style={{ paddingTop: "80px" }}>
          <label className="product-header">
            {t("railwayelectrification")}
          </label>
        </div>

        <div className="container-1">
          <div className="container-1-product-item">
            <div className="product-footer-item-txt">
              <label className="header">{t("overheadcatenarysystems")}</label>
              <label className="detail">
                {t("overheadcatenarysystems_detail")}
              </label>
            </div>

            <div className="product-footer-item-img">
              <img src={Picture26} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-1-product-item">
            <div className="product-footer-item-txt">
              <label className="header">{t("thirdrailsystems")}</label>
              <label className="detail">{t("thirdrailsystems_detail")}</label>
            </div>

            <div className="product-footer-item-img img">
              <img src={Picture23} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-1-product-item">
            <div className="product-footer-item-txt">
              <label className="header">{t("tractionsubstations")}</label>
              <label className="detail">
                {t("tractionsubstations_detail1")}{" "}
                {t("tractionsubstations_detail2")}
              </label>
            </div>

            <div className="product-footer-item-img img">
              <img src={Picture27} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-1-product-item">
            <div className="product-footer-item-txt">
              <label className="header">{t("stingerSystems")}</label>
              <label className="detail">
                {t("tractionsubstations_detail3")}
              </label>
            </div>

            <div className="product-footer-item-img img">
              <img src={Picture24} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-1-product-item">
            <div className="product-footer-item-txt">
              <label className="header">{t("auxiliarycomponents")}</label>
              <label className="detail">
                {t("auxiliarycomponents_detail")}
              </label>
            </div>

            <div className="product-footer-item-img img">
              <img src={Picture25} alt="bg" className="img" />
            </div>
          </div>
        </div>

        <div className="product-items" style={{ marginTop: "5px" }}>
          <label className="product-header">
            {t("rollingstockcomponents")}
          </label>
        </div>

        <div className="container-2">

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">{t("Pantograph")}</label>
            </div>
            <div className="product-footer-item-img">
              <img src={Pantograph} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">Master Controller</label>
            </div>
            <div className="product-footer-item-img">
              <img src={MasterController} alt="bg" className="img" style={{ width: "300%" }} />
            </div>
          </div>

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">Energy Meter</label>
            </div>
            <div className="product-footer-item-img">
              <img src={EnergyMeter} alt="bg" className="img" style={{ width: "300%" }} />
            </div>
          </div>

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">Roof Mounting Switch</label>
            </div>
            <div className="product-footer-item-img">
              <img src={RoofMountingSwitch} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">HV DC or AC Integrating system</label>
            </div>
            <div className="product-footer-item-img">
              <img src={HVDCorACIntegratingsystem} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">Current / Voltage Sensor</label>
            </div>
            <div className="product-footer-item-img">
              <img src={CurrentVoltageSensor} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">AC Circuit Breaker</label>
            </div>
            <div className="product-footer-item-img">
              <img src={ACCircuitBreaker} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">Surge Arrestor</label>
            </div>
            <div className="product-footer-item-img">
              <img src={SurgeArrestor} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">Contactors</label>
            </div>
            <div className="product-footer-item-img">
              <img src={Contactors} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">3Rail Current Collector</label>
            </div>
            <div className="product-footer-item-img">
              <img src={RailCurrentCollector} alt="bg" className="img" />
            </div>
          </div>

          <div className="container-2-product-item">
            <div className="product-footer-item-txt">
              <label className="header">Ground Contacts</label>
            </div>
            <div className="product-footer-item-img">
              <img src={GroundContacts} alt="bg" className="img" />
            </div>
          </div>

        </div>

        <div className="product-items" style={{ paddingTop: "20px" }}>
          <label className="product-header">
            {t("energystoragesolutions")}
          </label>
        </div>

        <div className="product-items">
          <div className="energy_storage">
            <div className="product-item">
              <div className="product-footer-item-txt">
                <label className="detail">
                  {t("energystoragesolutions1")}
                </label>
              </div>

              <div className="product-footer-item-img">
                <img
                  src={storagesystem}
                  alt="bg"
                  style={{ width: "200px" }}
                />
              </div>
            </div>

            <div className="product-item">
              <div className="product-footer-item-txt">
                <label className="detail">
                  {t("energystoragesolutions2")}
                </label>
              </div>

              <div className="product-footer-item-img">
                <img
                  src={storagesystem2}
                  alt="bg"
                  style={{ width: "200px" }}
                />
              </div>
            </div>

            <div className="product-item">
              <div className="product-footer-item-txt">
                <label className="detail">
                  {t("energystoragesolutions3")}
                </label>
              </div>

              <div className="product-footer-item-img">
                <img
                  src={storagesystem3}
                  alt="bg"
                  style={{ width: "200px" }}
                />
              </div>
            </div>

            <div className="product-item">
              <div className="product-footer-item-txt">
                <label className="detail">
                  {t("energystoragesolutions4")}
                </label>
              </div>

              <div className="product-footer-item-img">
                <img src={storagesystem4} alt="bg" />
              </div>
            </div>

            <div className="product-item">
              <div className="product-footer-item-txt">
                <label className="detail">
                  {t("energystoragesolutions5")}
                </label>
              </div>

              <div className="product-footer-item-img">
                <img src={iTrailer} alt="bg" style={{ width: "200px" }} />
              </div>
            </div>

            <div className="product-item">
              <div className="product-footer-item-txt">
                <label className="detail">
                  {t("energystoragesolutions6")}
                </label>
              </div>

              <div className="product-footer-item-img">
                <img src={iMChargerX} alt="bg" />
              </div>
            </div>

            <div className="product-item">
              <div className="product-footer-item-txt">
                <label className="detail">
                  {t("energystoragesolutions7")}
                </label>
              </div>

              <div className="product-footer-item-img">
                <img src={iACharge} alt="bg" />
              </div>
            </div>

            <div className="product-item">
              <div className="product-footer-item-txt">
                <label className="detail">
                  {t("energystoragesolutions8")}
                </label>
              </div>

              <div className="product-footer-item-img">
                <img src={iCabinet} alt="bg" style={{ width: "150px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
