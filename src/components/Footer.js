import { useTranslation } from "react-i18next"; // หากใช้ i18next
import "../components/Footer.css";
import twitter from "../assets/icon/ant-design_twitter-outlined.png";
import linkedin from "../assets/icon/ant-design_linkedin-filled.png";
import facebook from "../assets/icon/ant-design_facebook-filled.png";

import phone from "../assets/icon/ant-design_phone.png";
import mail from "../assets/icon/ant-design_mail.png";
import map from "../assets/icon/ant-design_map.png";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-items item1">
          <label className="item1-header">Mainline Asia Co.,Ltd</label>
          <label className="item1-detail">{t("address1")}</label>
          <label className="item1-detail">{t("address2")}</label>

          <div className="footer-items social">
            <img className="footer-img-left" src={twitter} alt="twitter Mainline Asia " />
            <img className="footer-img-left" src={linkedin} alt="linkedin Mainline Asia " />
            <img className="footer-img-left" src={facebook} alt="facebook Mainline Asia " />
          </div>
        </div>

        <div className="footer-items item2">
          <div style={{ display: "flex", paddingBottom: "10px" }}>
            <img className="footer-img-right" src={phone} alt="phone Mainline Asia " />
            <label style={{ paddingTop: "2px", paddingLeft: "10px" }}>
              +66 656838126
            </label>
          </div>

          <div style={{ display: "flex", paddingBottom: "10px" }}>
            <img className="footer-img-right" src={mail} alt="mail Mainline Asia " />
            <label style={{ paddingTop: "2px", paddingLeft: "10px" }}>
              mainline_asia@hotmail.com
            </label>
          </div>

          <div style={{ display: "flex", paddingBottom: "10px" }}>
            <img className="footer-img-right" src={map} alt="map Mainline Asia " />
            <label style={{ paddingTop: "2px", paddingLeft: "10px" }}>
              www.mainlineasia.co.th
            </label>
          </div>
        </div>
      </div>

      <div className="footer-botton">
        <div style={{ width: "50%", textAlign: "left" }}>
          <label>copyright © 2025 Mainline Asia Co., Ltd </label>
        </div>
        {/* <div className="footer-botton-right" style={{ width: "50%" }}>
          <div style={{ cursor: "pointer" }}>Cookies Setting</div>
          <div style={{ cursor: "pointer" }}>Terms of Use</div>
          <div style={{ cursor: "pointer" }}>Privacy Notice</div>
        </div> */}
      </div>
    </footer>
  );
};
export default Footer;
