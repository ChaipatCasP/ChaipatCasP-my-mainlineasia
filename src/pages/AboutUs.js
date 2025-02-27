import React from "react";
// import banner_en from "../assets/images/banner-en.jpg";
// import banner_th from "../assets/images/banner-th.jpg";
// import { useTranslation } from "react-i18next"; // หากใช้ i18next

import "./AboutUs.css";
import Train from "../assets/images/bg.jpeg";
import vector1 from "../assets/images/Vector-1.png";
import vector2 from "../assets/images/Vector-2.png";
import vector3 from "../assets/images/Vector-3.png";

const AboutUs = () => {
  // const { t, i18n } = useTranslation();

  // const images = {
  //   en: banner_en,
  //   th: banner_th,
  // };

  return (
    <div>
      <div className="aboutus-container">
        <img src={Train} alt="bg" className="aboutus-image" />

        {/* <img src={images[i18n.language]}  className="hero-image" /> */}

        <div className="aboutus-text">
          <div style={{ display: "flex" }}>
            <div style={{ width: "30%" }}>
              <h2>About Us</h2>
            </div>

            <div style={{ width: "65%", textAlign: "left" }}>
              Mainline Asia found in 2020 is a forward-thinking company
              specializing in sustainable energy solutions for modern
              transportation and infrastructure. With a commitment to innovation
              and environmental responsibility, we provide cutting-edge
              technology and systems that power the future of mobility and
              energy storage.
            </div>

            <div style={{ width: "5%" }}></div>
          </div>

          <div className="aboutus-items">
            <div className="aboutus-item">
              <div
                style={{
                  border: "solid 1px",
                  height: "130px",
                  paddingTop: "25px",
                }}
              >
                <label style={{ fontSize: "30px", width: "700" }}>
                  High-Performance Railway Power Supply
                </label>
              </div>
              <div style={{ paddingTop: "80px" }}>
                <img src={vector1} alt="card" />
              </div>
              <div>
                <label style={{ fontSize: "14px", fontWeight: "400" }}>
                  To design and deliver systems that ensure operational
                  efficiency and sustainability.
                </label>
              </div>
            </div>

            <div className="aboutus-item">
              <div
                style={{
                  border: "solid 1px",
                  height: "130px",
                  paddingTop: "25px",
                }}
              >
                <label style={{ fontSize: "30px", width: "700" }}>
                  Advanced Energy Storage
                </label>
              </div>
              <div style={{ paddingTop: "80px" }}>
                <img src={vector2} alt="card"/>
              </div>
              <div>
                <label style={{ fontSize: "14px", fontWeight: "400" }}>
                  To develop and implement battery systems that enhance
                  renewable energy integration and grid stability.
                </label>
              </div>
            </div>

            <div className="aboutus-item">
              <div
                style={{
                  border: "solid 1px",
                  height: "130px",
                  paddingTop: "25px",
                }}
              >
                <label style={{ fontSize: "30px", width: "700" }}>
                  Robust EV Charging Networks
                </label>
              </div>
              <div style={{ paddingTop: "80px" }}>
                <img src={vector3} alt="card"/>
              </div>
              <div>
                <label style={{ fontSize: "14px", fontWeight: "400" }}>
                  To build scalable charging infrastructure that meets the
                  demands of the electric vehicle revolution.
                </label>
              </div>
            </div>
          </div>

          {/* <h1>{t("hometxtbanner")}</h1> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


// import React from "react";
// import section from "../assets/images/section.png";
// import "./AboutUs.css";


// const AboutUs = () => (
//   <section id="about" className="about-us">
//     <div style={{ display: "flex", width: "100%" }}>
//       <div style={{ width: "30%" }}>
//         <h2>About Us</h2>
//       </div>
//       <div style={{ width: "70%" }}>
//         <h2>About Usssss</h2>
//       </div>
//     </div>

//     <h2>About Uss</h2>

//     <div className="about-us-cards">
//       <div className="about-us-card">
//         <img src={section} alt="about" />
//       </div>
//       <div className="about-us-card">
//         <img src={section} alt="about" />
//       </div>
//       <div className="about-us-card">
//         <img src={section} alt="about" />
//       </div>

//       <div className="about-us-card">
//         <img src={section} alt="about" />
//       </div>
//       <div className="about-us-card">
//         <img src={section} alt="about" />
//       </div>
//       <div className="about-us-card">
//         <img src={section} alt="about" />
//       </div>
//       <div className="about-us-card">
//         <img src={section} alt="about" />
//       </div>
//       <div className="about-us-card">
//         <img src={section} alt="about" />
//       </div>
//     </div>
//   </section>
// );

// export default AboutUs;
