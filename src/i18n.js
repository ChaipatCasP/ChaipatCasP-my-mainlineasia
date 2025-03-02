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
      about_Detail:
        "Mainline Asia found in 2020 is a forward-thinking company" +
        "specializing in sustainable energy solutions for modern" +
        "transportation and infrastructure. With a commitment to innovation" +
        "and environmental responsibility, we provide cutting-edge" +
        "technology and systems that power the future of mobility and" +
        "energy storage.",

      about_Card1: "High-Performance Railway Power Supply",
      about_Card1_footer:
        "To design and deliver systems that ensure operational efficiency and sustainability.",
      about_Card2: "Advanced Energy Storage",
      about_Card2_footer:
        "To develop and implement battery systems that enhance renewable energy integration and grid stability.",
      about_Card3: "Robust EV Charging Networks",
      about_Card3_footer:
        "To build scalable charging infrastructure that meets the demands of the electric vehicle revolution.",

      ourvision :"Our Vistion",
      ourvision_Detail:"To lead the Southeast Asia transition towards sustainable energy systems by delivering reliable, innovative, and efficient solutions for railway power supply, energy storage, and EV charging infrastructure.",
      ourbusiness: "Our Business & Services",
      refprojects: "Project References",
      careers: "Careers",
      contact: "Contact Us",
      hometxtbanner: "Connect to public electric trains.",
    },
  },
  th: {
    translation: {
      welcome: "ยินดีต้อนรับสู่เว็บไซต์ของเรา!",
      description: "สำรวจเนื้อหาของเราในภาษาไทย",
      home: "หน้าแรก",
      
      about: "เกี่ยวกับเรา",
      about_Detail:
        "Mainline Asia ที่ก่อตั้งในปี 2020 เป็นบริษัทที่มีความคิดก้าวหน้า" +
        "เชี่ยวชาญในการแก้ปัญหาพลังงานที่ยั่งยืนเพื่อความทันสมัย" +
        "การคมนาคมและโครงสร้างพื้นฐาน ด้วยความมุ่งมั่นในการสร้างสรรค์นวัตกรรม" +
        "และความรับผิดชอบต่อสิ่งแวดล้อม เรามอบความล้ำสมัย" +
        "เทคโนโลยีและระบบที่ขับเคลื่อนอนาคตแห่งการขับเคลื่อนและ" +
        "การจัดเก็บพลังงาน",

      about_Card1: "ระบบจ่ายพลังงานสำหรับรถไฟความเร็วสูง",
      about_Card1_footer:
        "ออกแบบและพัฒนาโซลูชันที่ช่วยให้การเดินรถไฟมีประสิทธิภาพสูงสุด พร้อมส่งเสริมความยั่งยืนในระยะยาว",
      about_Card2: "ระบบกักเก็บพลังงานขั้นสูง",
      about_Card2_footer:
        "พัฒนาและนำแบตเตอรี่มาใช้เพื่อเสริมประสิทธิภาพของพลังงานหมุนเวียนและช่วยรักษาเสถียรภาพของโครงข่ายไฟฟ้า",
      about_Card3: "โครงข่ายสถานีชาร์จรถยนต์ไฟฟ้า",
      about_Card3_footer:
        "สร้างโครงสร้างพื้นฐานด้านการชาร์จที่สามารถขยายตัวได้ รองรับการเติบโตของยานยนต์ไฟฟ้าในอนาคต",

      ourvision :"วิสัยทัศน์ของเรา",
      ourvision_Detail:"เพื่อเป็นผู้นำการเปลี่ยนแปลงในเอเชียตะวันออกเฉียงใต้ไปสู่ระบบพลังงานที่ยั่งยืนโดยมอบโซลูชันที่เชื่อถือได้ สร้างสรรค์ และมีประสิทธิภาพสำหรับแหล่งจ่ายไฟทางรถไฟ การจัดเก็บพลังงาน และโครงสร้างพื้นฐานการชาร์จรถยนต์ไฟฟ้า",
      ourbusiness: "ธุรกิจและบริการของเรา",
      refprojects: "ตัวอย่างโครงการ",
      careers: "ร่วมงานกับเรา",
      contact: "ติดต่อเรา",
      hometxtbanner: "เชื่อมต่อรถไฟฟ้าโดยสารสาธารณะด้วยพลังงานไฟฟ้า",
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