import React from 'react';
import "./OurBusiness.css";
import { useTranslation } from "react-i18next"; // หากใช้ i18next

// import rpsrailpowersystem from "../assets/images/rpsrailpowersystem.png";
// import rehau from "../assets/images/rehau.png";
// import edacec from "../assets/images/edacec.png";
// import stemmann from "../assets/images/stemmann.png";
// import cembre from "../assets/images/cembre.png";
// import Pantograph from "../assets/images/Pantograph.png";
// import MasterController from "../assets/images/MasterController.png";
// import EnergyMeter from "../assets/images/EnergyMeter.png";


// import RoofMountingSwitch from "../assets/images/RoofMountingSwitch.png";
// import HVDCorACIntegratingsystem  from "../assets/images/HVDCorACIntegratingsystem.png";
// import CurrentVoltageSensor from "../assets/images/CurrentVoltageSensor.png";
// import ACCircuitBreaker  from "../assets/images/ACCircuitBreaker.png";
// import SurgeArrestor from "../assets/images/SurgeArrestor.png";
// import Contactors from "../assets/images/Contactors.png";
// import RailCurrentCollector from "../assets/images/RailCurrentCollector.png";
// import GroundContacts from "../assets/images/GroundContacts.png";

// import storagesystem from "../assets/images/storagesystem.png";
// import storagesystem2 from "../assets/images/storagesystem2.png";
// import storagesystem3 from "../assets/images/storagesystem3.png";
// import storagesystem4 from "../assets/images/storagesystem4.png";

// import iTrailer from "../assets/images/iTrailer.png";
// import iMChargerX from "../assets/images/iMChargerX.png";
// import iACharge from "../assets/images/iACharge.png";
// import iCabinet from "../assets/images/iCabinet.png";






const OurBusiness = () => {
  const { t } = useTranslation();

  // const images = {
  //   en: banner_en,
  //   th: banner_th,
  // };

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

          <div style={{ paddingBottom: "25px" }}>
            <label>{t("ourbusiness_detail4")}</label>
          </div>
        </div>
      </div>

      {/* <div style={{ textAlign: "center" }}>
        <label className="ourbusiness-header-header">
          {t("product")} : {t("railwayelectrification")}
        </label>

        <div className="ourbusiness-footer-three">
          <div className="ourbusiness-footer-item">
            <div className="ourbusiness-footer-item-txt">
              <label className="header">{t("overheadcatenarysystems")}</label>
              <label className="detail">
                {t("overheadcatenarysystems_detail")}
              </label>
            </div>

            <div className="ourbusiness-footer-item-img img">
              <img src={rpsrailpowersystem} alt="bg" className="img" />
            </div>
          </div>

          <div className="ourbusiness-footer-item">
            <div className="ourbusiness-footer-item-txt">
              <label className="header">{t("thirdrailsystems")}</label>
              <label className="detail">{t("thirdrailsystems_detail")}</label>
            </div>

            <div className="ourbusiness-footer-item-img img">
              <img src={rehau} alt="bg" className="img" />
            </div>
          </div>

          <div className="ourbusiness-footer-item">
            <div className="ourbusiness-footer-item-txt">
              <label className="header">{t("tractionsubstations")}</label>
              <label className="detail-two">
                {t("tractionsubstations_detail1")}
              </label>

              <label className="detail-two">
                {t("tractionsubstations_detail2")}
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
              <label className="header">{t("tractionsubstations")}</label>
              <label className="detail">
                {t("tractionsubstations_detail3")}
              </label>
            </div>

            <div className="ourbusiness-footer-item-img img">
              <img src={stemmann} alt="bg" className="img" />
            </div>
          </div>

          <div className="ourbusiness-footer-item">
            <div className="ourbusiness-footer-item-txt">
              <label className="header">{t("auxiliarycomponents")}</label>
              <label className="detail">
                {t("auxiliarycomponents_detail")}
              </label>
            </div>

            <div className="ourbusiness-footer-item-img img">
              <img src={cembre} alt="bg" className="img" />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <div className="product-txt-header">
          <label className="ourbusiness-header-header">
            {t("product")} : {t("rollingrtockromponents")}
          </label>
          <div className="ourbusiness-header-details">
            <label>{t("rollingrtockromponents_detail")}</label>
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
      </div> */}

      {/* <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <div className="product-txt-header">
          <label className="ourbusiness-header-header">
            {t("product")} : {t("energystoragesolutions")}
          </label>
        </div>

        <div className="energy_storage">
          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">{t("energystoragesolutions1")}</label>
            </div>

            <div className="energy_storage-item-img">
              <img src={storagesystem} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">{t("energystoragesolutions2")}</label>
            </div>

            <div className="energy_storage-item-img">
              <img src={storagesystem2} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">{t("energystoragesolutions3")}</label>
            </div>

            <div className="energy_storage-item-img">
              <img src={storagesystem3} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">{t("energystoragesolutions4")}</label>
            </div>

            <div className="energy_storage-item-img">
              <img src={storagesystem4} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail">{t("energystoragesolutions5")}</label>
            </div>

            <div className="energy_storage-item-img">
              <img src={iTrailer} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail" style={{ paddingTop: "10px" }}>
                {t("energystoragesolutions6")}
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
              <label className="detail">{t("energystoragesolutions7")}</label>
            </div>

            <div
              className="energy_storage-item-img"
              style={{ marginTop: "40px" }}
            >
              <img src={iACharge} alt="bg" />
            </div>
          </div>

          <div className="energy_storage-item">
            <div className="energy_storage-item-txt">
              <label className="detail" style={{ paddingTop: "10px" }}>
                {t("energystoragesolutions8")}
              </label>
            </div>

            <div
              className="energy_storage-item-img"
              style={{ marginTop: "50px" }}
            >
              <img src={iCabinet} alt="bg" style={{ height: "130px" }} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default OurBusiness;