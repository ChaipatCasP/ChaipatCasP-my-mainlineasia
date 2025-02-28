import React from "react";
import "../components/Footer.css";
import twitter from "../assets/icon/ant-design_twitter-outlined.png";
import linkedin from "../assets/icon/ant-design_linkedin-filled.png";
import facebook from "../assets/icon/ant-design_facebook-filled.png";

import phone from "../assets/icon/ant-design_phone.png";
import mail from "../assets/icon/ant-design_mail.png";
import map from "../assets/icon/ant-design_map.png";



const Footer = () => (
  <footer className="footer">

    <div className="footer-container">
      <div className="footer-items" style={{ width: "70%", paddingLeft: "100px" }}>

        <label style={{ fontSize: "24px", fontWeight: "bold" }}> Mainline Asia Co.,Ltd </label>
        <label>425 Kamphaeng Phet Rd. 6, Don Mueang,</label>
        <label>Don Mueang District, Bangkok 10210, Thailand</label>

        <div style={{ display: "flex", paddingTop: "20px" }}>
          <img className="footer-img-left" src={twitter} alt="twitter" />
          <img className="footer-img-left" src={linkedin} alt="linkedin" />
          <img className="footer-img-left" src={facebook} alt="facebook" />
        </div>


      </div>
      <div className="footer-items" style={{ width: "30%" }}>


        <div style={{ display: "flex",paddingBottom:"20px" }}>
          <img className="footer-img-right" src={phone} alt="phone" />
          <label style={{paddingTop:"13px",paddingLeft:"10px"}}>+66 656838126</label>
        </div>

        <div style={{ display: "flex",paddingBottom:"20px" }}>
          <img className="footer-img-right" src={mail} alt="mail" />
          <label style={{paddingTop:"13px",paddingLeft:"10px"}}>mainline_asia@hotmail.com</label>

        </div>


        <div style={{ display: "flex",paddingBottom:"20px" }}>
          <img className="footer-img-right" src={map} alt="map" />
          <label style={{paddingTop:"13px",paddingLeft:"10px"}}>www.mainlineasia.co.th</label>

        </div>

      </div>
    </div>



  </footer>
);

export default Footer;
