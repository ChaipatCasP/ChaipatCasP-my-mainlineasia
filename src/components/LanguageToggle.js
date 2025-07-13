import { useState, useEffect } from "react";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import img_en from "../assets/us.png";
import img_th from "../assets/th.png";
import { useTranslation } from "react-i18next";

const LanguageToggle = ({ changeLanguage, toggleMenu }) => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language || "en");

  useEffect(() => {
    const preloadImages = () => {
      [img_en, img_th].forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, []);


  useEffect(() => {
    setSelectedLang(i18n.language || "en");
  }, [i18n.language]);

  const languages = [
    { key: "en", label: "English", img: img_en },
    { key: "th", label: "ไทย", img: img_th },
  ];

  const handleMenuClick = (e) => {
    setSelectedLang(e.key);
    changeLanguage(e.key);
    toggleMenu();
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {languages.map((lang) => (
        <Menu.Item key={lang.key}>
          <img src={lang.img} alt={lang.key} className="language-img" style={{ width: 20, marginRight: 8 }} />
          {lang.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Space className="language-toggle">
        <img src={languages.find((lang) => lang.key === selectedLang)?.img} alt={selectedLang} className="language-img" style={{ width: 20 }} />
        {languages.find((lang) => lang.key === selectedLang)?.label}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default LanguageToggle;