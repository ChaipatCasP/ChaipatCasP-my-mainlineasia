import { useTranslation } from "react-i18next"; // หากใช้ i18next
import "./AboutUs.css";
import BoxActivity from "../components/BoxActivity"

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="aboutus-container">
        <div className="aboutus-text">
          <div className="aboutus-text-header">
            <div className="aboutus-text-header1">
              <h2 style={{ color: "rgba(74, 102, 172, 1)" }}>{t("about")}</h2>
              <div style={{ padding: "20px" }}>{t("about_Detail")}</div>
            </div>

            <div className="aboutus-text-header2">
              {/* <img src={Train} alt="bg" /> */}

              <BoxActivity />
            </div>

            <div className="aboutus-text-header3"></div>
          </div>

          <div className="ourvision">
            <div className="ourvision1">
              <h2 style={{ color: "rgb(56 76 127)" }}>{t("ourvision")}</h2>
            </div>

            <div className="ourvision2">
              <div style={{ padding: "20px" }}>{t("ourvision_Detail")}</div>
            </div>

            <div className="ourvision3"></div>
          </div>

          <div className="ourMission">
            <div className="ourMission1">
              <h2 style={{ color: "rgb(56 76 127)" }}>{t("OurMission")}</h2>
            </div>

            <div className="ourMission2">
              <div className="ourMission2-item">{t("OurMission_Detail1")}</div>
              <div className="ourMission2-item">{t("OurMission_Detail2")}</div>
              <div className="ourMission2-item">{t("OurMission_Detail3")}</div>
            </div>

            <div className="ourMission3"></div>
          </div>


          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <h1 style={{ color: "rgb(165 190 255)" }}>{t("corevalue")}</h1>
          </div>

          <div className="aboutus-items-no-img">
            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> {t("innovation")} </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label> {t("innovation_detail")} </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> {t("integrity")} </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label> {t("integrity_detail")} </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> {t("sustainability")} </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label> {t("sustainability_detail")} </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> {t("collaboration")} </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label> {t("collaboration_detail")} </label>
              </div>
            </div>

            <div className="aboutus-item-no-img">
              <div className="aboutus-item-no-img-header">
                <label> {t("customercentricity")} </label>
              </div>

              <div className="aboutus-item-no-img-footer">
                <label> {t("customercentricity_detail")} </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;