import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      description: "Explore our content in English.",
      home: "Home",
      about: "About Us",
      ourbusiness: "Our Business & Services",
      refprojects: "Project References",
      careers: "Careers",
      contact: "Contact Us",
    },
  },
  th: {
    translation: {
      welcome: "ยินดีต้อนรับสู่เว็บไซต์ของเรา!",
      description: "สำรวจเนื้อหาของเราในภาษาไทย",
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      ourbusiness: "ธุรกิจและบริการของเรา",
      refprojects: "ตัวอย่างโครงการ",
      careers: "ร่วมงานกับเรา",
      contact: "ติดต่อเรา",
    },
  },
};

i18n
  .use(LanguageDetector) // ตรวจจับภาษาของผู้ใช้
  .use(initReactI18next) // สำหรับ React
  .init({
    resources,
    fallbackLng: 'en', // ภาษาเริ่มต้น
    interpolation: {
      escapeValue: false, // ไม่ escape HTML
    },
  });

export default i18n;