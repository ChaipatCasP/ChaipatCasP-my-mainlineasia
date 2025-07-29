import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import th from './locales/th.json';

const resources = {
  en: { translation: en },
  th: { translation: th },
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