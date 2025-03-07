import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './BoxRollingStockComponents.css';
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



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function BoxRollingStockComponents() {
  return (
    <div className="BoxRollingStockComponents-box">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>Pantograph</label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={Pantograph} alt="bg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>Master Controller</label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={MasterController} alt="bg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>Energy Meter</label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={EnergyMeter} alt="bg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>Roof Mounting Switch</label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={RoofMountingSwitch} alt="bg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>HV DC or AC Integrating system </label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={HVDCorACIntegratingsystem} alt="bg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>Current / Voltage Sensor</label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={CurrentVoltageSensor} alt="bg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>AC Circuit Breaker</label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={ACCircuitBreaker} alt="bg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>Surge Arrestor</label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={SurgeArrestor} alt="bg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>Contactors</label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={Contactors} alt="bg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>3Rail Current Collector</label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={RailCurrentCollector} alt="bg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="BoxRollingStockComponents-product-item">
            <div className="BoxRollingStockComponents-product-item-txt">
              <label>Ground Contacts</label>
            </div>

            <div className="BoxRollingStockComponents-product-item-img">
              <img src={GroundContacts} alt="bg" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}












