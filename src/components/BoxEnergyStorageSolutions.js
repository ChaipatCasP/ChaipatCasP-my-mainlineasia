import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import "./BoxEnergyStorageSolutions.css";

import { EffectCube, Pagination } from 'swiper/modules';

import { useTranslation } from "react-i18next"; // หากใช้ i18next

import storagesystem from "../assets/images/storagesystem.png";
import storagesystem2 from "../assets/images/storagesystem2.png";
import storagesystem3 from "../assets/images/storagesystem3.png";
import storagesystem4 from "../assets/images/storagesystem4.png";

import iTrailer from "../assets/images/iTrailer.png";
import iMChargerX from "../assets/images/iMChargerX.png";
import iACharge from "../assets/images/iACharge.png";
import iCabinet from "../assets/images/iCabinet.png";


  const BoxEnergyStorageSolutions = () => {
    const { t } = useTranslation();
    return (
      <div className="BoxEnergyStorageSolutions-box">
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
            <div className="BoxEnergyStorageSolutions-product-items">
              <div className="BoxEnergyStorageSolutions-product-item">
                <label className="detail">
                  {t("energystoragesolutions1")}
                </label>
                <img src={storagesystem} alt="bg" className="img" />
              </div>
              <div className="BoxEnergyStorageSolutions-product-item-footer"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="BoxEnergyStorageSolutions-product-items">
              <div className="BoxEnergyStorageSolutions-product-item">
                <label className="detail">
                  {t("energystoragesolutions2")}
                </label>
                <img src={storagesystem2} alt="bg" className="img" />
              </div>
              <div className="BoxEnergyStorageSolutions-product-item-footer"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="BoxEnergyStorageSolutions-product-items">
              <div className="BoxEnergyStorageSolutions-product-item">
                <label className="detail">
                  {t("energystoragesolutions3")}
                </label>
                <img src={storagesystem3} alt="bg" className="img" />
              </div>
              <div className="BoxEnergyStorageSolutions-product-item-footer"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="BoxEnergyStorageSolutions-product-items">
              <div className="BoxEnergyStorageSolutions-product-item">
                <label className="detail">
                  {t("energystoragesolutions4")}
                </label>
                <img src={storagesystem4} alt="bg" className="img" />
              </div>
              <div className="BoxEnergyStorageSolutions-product-item-footer"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="BoxEnergyStorageSolutions-product-items">
              <div className="BoxEnergyStorageSolutions-product-item">
                <label className="detail">
                  {t("energystoragesolutions5")}
                </label>
                <img src={iTrailer} alt="bg" className="img" />
              </div>
              <div className="BoxEnergyStorageSolutions-product-item-footer"></div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="BoxEnergyStorageSolutions-product-items">
              <div className="BoxEnergyStorageSolutions-product-item">
                <label className="detail">
                  {t("energystoragesolutions6")}
                </label>
                <img src={iMChargerX} alt="bg" className="img" />
              </div>
              <div className="BoxEnergyStorageSolutions-product-item-footer"></div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="BoxEnergyStorageSolutions-product-items">
              <div className="BoxEnergyStorageSolutions-product-item">
                <label className="detail">
                  {t("energystoragesolutions7")}
                </label>
                <img src={iACharge} alt="bg" className="img" />
              </div>
              <div className="BoxEnergyStorageSolutions-product-item-footer"></div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="BoxEnergyStorageSolutions-product-items">
              <div className="BoxEnergyStorageSolutions-product-item">
                <label className="detail">
                  {t("energystoragesolutions8")}
                </label>
                <img src={iCabinet} alt="bg" className="img" />
              </div>
              <div className="BoxEnergyStorageSolutions-product-item-footer"></div>
            </div>
          </SwiperSlide>

     
        </Swiper>

    
      </div>
    );
  };

export default BoxEnergyStorageSolutions;

