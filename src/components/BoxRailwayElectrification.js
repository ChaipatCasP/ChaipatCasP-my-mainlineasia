import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import "./BoxRailwayElectrification.css";

import { EffectCube, Pagination } from 'swiper/modules';

import { useTranslation } from "react-i18next"; // หากใช้ i18next

// import rpsrailpowersystem from "../assets/images/rpsrailpowersystem.png";
// import rehau from "../assets/images/rehau.png";
// import edacec from "../assets/images/edacec.png";
// import stemmann from "../assets/images/stemmann.png";
// import cembre from "../assets/images/cembre.png";



  const BoxRailwayElectrification = () => {
    const { t } = useTranslation();
    return (
      <div className="BoxRailwayElectrification-box">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="BoxRailwayElectrification-product-items">
              <div className="BoxRailwayElectrification-product-item">
                <label className="header">{t("overheadcatenarysystems")}</label>
                <label className="detail">
                  {t("overheadcatenarysystems_detail")}
                </label>
                {/* <img src={rpsrailpowersystem} alt="bg" className="img" /> */}
              </div>
              <div className="BoxRailwayElectrification-product-item-footer"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="BoxRailwayElectrification-product-items">
              <div className="BoxRailwayElectrification-product-item">
                <label className="header">{t("thirdrailsystems")}</label>
                <label className="detail">{t("thirdrailsystems_detail")}</label>
                {/* <img src={rehau} alt="bg" className="img" /> */}
              </div>
              <div className="BoxRailwayElectrification-product-item-footer"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="BoxRailwayElectrification-product-items">
              <div className="BoxRailwayElectrification-product-item">
                <label className="header">{t("tractionsubstations")}</label>
                <label className="detail">
                  {t("tractionsubstations_detail1")}{" "}
                  {t("tractionsubstations_detail2")}
                </label>
                {/* <img src={edacec} alt="bg" className="img" /> */}
              </div>
              <div className="BoxRailwayElectrification-product-item-footer"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="BoxRailwayElectrification-product-items">
              <div className="BoxRailwayElectrification-product-item">
                <label className="header">{t("stingerSystems")}</label>
                <label className="detail">
                  {t("tractionsubstations_detail3")}
                </label>
                {/* <img src={stemmann} alt="bg" className="img" /> */}
              </div>
              <div className="BoxRailwayElectrification-product-item-footer"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="BoxRailwayElectrification-product-items">
              <div className="BoxRailwayElectrification-product-item">
                <label className="header">{t("auxiliarycomponents")}</label>
                <label className="detail">
                  {t("auxiliarycomponents_detail")}
                </label>
                {/* <img src={cembre} alt="bg" className="img" /> */}
              </div>
              <div className="BoxRailwayElectrification-product-item-footer"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };

export default BoxRailwayElectrification;

