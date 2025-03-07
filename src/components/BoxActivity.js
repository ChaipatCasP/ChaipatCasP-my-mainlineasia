import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BoxActivity.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Picture1 from "../assets/aboutusbanner/Picture1.png";
import Picture2 from "../assets/aboutusbanner/Picture2.png";
import Picture3 from "../assets/aboutusbanner/Picture3.png";
import Picture4 from "../assets/aboutusbanner/Picture4.png";
import Picture5 from "../assets/aboutusbanner/Picture5.png";
import Picture6 from "../assets/aboutusbanner/Picture6.jpg";
import Picture7 from "../assets/aboutusbanner/Picture7.png";
import Picture8 from "../assets/aboutusbanner/Picture8.jpg";
import Picture9 from "../assets/aboutusbanner/Picture9.png";
import Picture10 from "../assets/aboutusbanner/Picture10.jpg";


export default function BoxActivity() {
    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //   progressCircle.current.style.setProperty('--progress', 1 - progress);
    //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
  return (
    <>
      <div className="BoxActivity">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={Picture1} alt="bg" /></SwiperSlide>
        <SwiperSlide><img src={Picture2} alt="bg" /></SwiperSlide>
        <SwiperSlide><img src={Picture3} alt="bg" /></SwiperSlide>
        <SwiperSlide><img src={Picture4} alt="bg" /></SwiperSlide>
        <SwiperSlide><img src={Picture5} alt="bg" /></SwiperSlide>
        <SwiperSlide><img src={Picture6} alt="bg" /></SwiperSlide>
        <SwiperSlide><img src={Picture7} alt="bg" /></SwiperSlide>
        <SwiperSlide><img src={Picture8} alt="bg" /></SwiperSlide>
        <SwiperSlide><img src={Picture9} alt="bg" /></SwiperSlide>
        <SwiperSlide><img src={Picture10} alt="bg" /></SwiperSlide>
      
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </>
  );
}

