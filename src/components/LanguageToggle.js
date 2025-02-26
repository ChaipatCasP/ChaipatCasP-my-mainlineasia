import { useState } from "react";
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import img_en from "../assets/us.png";
import img_th from "../assets/th.png";

const LanguageToggle = ({ changeLanguage }) => {
  const [selectedLang, setSelectedLang] = useState("en");

  const languages = [
    { key: "en", label: "English", img: img_en },
    { key: "th", label: "ไทย", img: img_th },
  ];

  const handleMenuClick = (e) => {
    setSelectedLang(e.key);
    changeLanguage(e.key);
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
