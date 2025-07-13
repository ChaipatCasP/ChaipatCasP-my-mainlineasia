import "./ContactUs.css";
import { useTranslation } from "react-i18next"; // หากใช้ i18next

import twitter from "../assets/icon/twitter-b.png";
import linkedin from "../assets/icon/linkedin-b.png";
import facebook from "../assets/icon/facebook-b.png";
import phone from "../assets/icon/viber.png";
import mail from "../assets/icon/email.png";
import map from "../assets/icon/map.png";
import youlogo from "../assets/youlogo.png";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="page-contact">
      <div className="contact-2">
        <iframe
          // src="https://www.google.com/maps/embed?..."
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.0534705718824!2d100.58387997431976!3d13.895750986511267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e282e885a75ead%3A0x47da195a160941e1!2zNDI1IOC4li4g4LiB4Liz4LmB4Lie4LiH4LmA4Lie4LiK4LijIDYg4LmB4LiC4Lin4LiH4LiU4Lit4LiZ4LmA4Lih4Li34Lit4LiHIOC5gOC4guC4leC4lOC4reC4meC5gOC4oeC4t-C4reC4hyDguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMgMTAyMTA!5e0!3m2!1sth!2sth!4v1741165833922!5m2!1sth!2sth"
          title="Company Location"
          className="map"
        ></iframe>

        {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.0534705718824!2d100.58387997431976!3d13.895750986511267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e282e885a75ead%3A0x47da195a160941e1!2zNDI1IOC4li4g4LiB4Liz4LmB4Lie4LiH4LmA4Lie4LiK4LijIDYg4LmB4LiC4Lin4LiH4LiU4Lit4LiZ4LmA4Lih4Li34Lit4LiHIOC5gOC4guC4leC4lOC4reC4meC5gOC4oeC4t-C4reC4hyDguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMgMTAyMTA!5e0!3m2!1sth!2sth!4v1741165833922!5m2!1sth!2sth"
        width="400"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      </div>

      <div className="contact-1">
        <div>
          <div className="contact-logo">
            <div>
              <img src={youlogo} alt="bg" style={{ width: "150px" }} />
            </div>

            <div
              className="contact-logo-text"
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "10px",
                textUnderlinePosition: "unset",
              }}
            >
              <label
                className="my-text"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Mainline{" "}
              </label>
              <label
                className="my-text"
                style={{ color: "red", fontWeight: "bold" }}
              >
                {" "}
                Asia
              </label>
            </div>
          </div>

          <div className="footer-contact">
            <label className="item1-header my-text">
              Mainline Asia Co.,Ltd
            </label>
            <label className="item1-detail my-text">{t("address1")}</label>
            <label className="item1-detail my-text">{t("address2")}</label>
          </div>

          <div className="footer-contact">
            <div style={{ display: "flex", paddingBottom: "10px" }}>
              <img className="footer-img-right" src={phone} alt="phone" />
              <label
                className="my-text"
                style={{ paddingTop: "2px", paddingLeft: "10px" }}
              >
                +66 803811160 (คุณสุดใจ)
              </label>
            </div>

            <div
              className="my-text"
              style={{ display: "flex", paddingBottom: "10px" }}
            >
              <img className="footer-img-right" src={mail} alt="mail" />
              <label style={{ paddingTop: "1px", paddingLeft: "10px" }}>
                mainline_asia@hotmail.com
              </label>
            </div>

            <div
              className="my-text"
              style={{ display: "flex", paddingBottom: "10px" }}
            >
              <img className="footer-img-right" src={map} alt="map" />
              <label style={{ paddingTop: "2px", paddingLeft: "10px" }}>
                www.mainline-asia.com
              </label>
            </div>
          </div>

          {/* <h4 className='FollowUs'>Follow Us</h4> */}

          {/* <div className="social-item">
            <img
              className="social-img"
              src={twitter}
              alt="twitter"
              href="https://facebook.com"
            />
            <img
              className="social-img"
              src={linkedin}
              alt="linkedin"
              href="https://instagram.com"
            />
            <img
              className="social-img"
              src={facebook}
              alt="facebook"
              href="https://twitter.com"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
