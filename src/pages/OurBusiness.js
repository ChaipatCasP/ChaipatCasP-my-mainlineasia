import React from 'react';
import "./OurBusiness.css";
import { useTranslation } from "react-i18next"; // หากใช้ i18next

const OurBusiness = () => {
  const { t } = useTranslation();

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

          <div style={{ paddingBottom: "10px" }}>
            <label>{t("ourbusiness_detail4")}</label>
          </div>
        </div>
      </div>

    </div>
  );
};
export default OurBusiness;