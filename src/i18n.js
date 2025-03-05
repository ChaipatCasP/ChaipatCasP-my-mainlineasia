import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      description: "Explore our content in English.",
      home: "Home",
      railway:"Railway",
      energystorage:"Energy Storage",
      evcharger:"EV Charger",
 
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
      ourvision: "Our Vision",
      ourvision_Detail:
        "To lead the Southeast Asia transition towards sustainable energy systems by delivering reliable, innovative, and efficient solutions for railway power supply, energy storage, and EV charging infrastructure.",
      OurMission: "Our Mission",
      OurMission_Detail1:
        "• High-Efficiency Railway Power Systems: Design and deliver systems that ensure operational efficiency and sustainability.",
      OurMission_Detail2:
        "• Advanced Energy Storage: Develop battery systems that enhance the integration of renewable energy and ensure grid stability.",
      OurMission_Detail3:
        "• Robust EV Charging Network: Create scalable charging infrastructure to meet the demands of future electric vehicles.",
      ourbusiness: "Our Business & Services",
      ourbusiness_detail1:
        "Our company develops complete solutions for railway power supply systems, energy storage technology, and EV charging stations to support the transportation and energy industries.",
      ourbusiness_detail2:
        "Mainline Asia is a leading provider of power supply systems for railway infrastructure in Thailand. We offer services from design and installation to the management of power systems for different types of rail networks, including high-speed rail, subways, and light rail. We also provide solutions for maintenance depots and substations.",
      ourbusiness_detail3: "Our business is divided into three main areas:",
      ourbusiness_detail4:
        " 1.Rail Power Supply (Power systems for railway infrastructure), 2.Energy Storage (Solutions for storing and managing energy) and 3.EV Charging (Charging station solutions for electric vehicles)",
      product: "Product",
      railwayelectrification: "Railway Electrification",
      overheadcatenarysystems: "Overhead Catenary Systems (OCS)",
      overheadcatenarysystems_detail:
        "High-quality overhead lines and catenary components engineered for efficiency and durability in high-speed, metro, and light rail systems.",
      thirdrailsystems: "Third Rail Systems",
      thirdrailsystems_detail:
        "Advanced third-rail designs and protective covers that deliver safe, continuous power for urban and suburban transit networks.",
      tractionsubstations: "Traction Substations",
      tractionsubstations_detail1:
        "High-efficiency solutions for reliable power conversion and distribution.",
      tractionsubstations_detail2:
        "Switchgear, breakers, and protective relays specifically engineered for railway power networks.",
      tractionsubstations_detail3:
        "Flexible, safe solutions for supplying power to trains during depot maintenance or staging operations.",
      auxiliarycomponents: "Auxiliary Components & Accessories",
      auxiliarycomponents_detail:
        "High-quality conductors and connectors for efficient energy transfer and reduced line losses. Rail Bonding material.",
      rollingrtockromponents: "Rolling Stock Components",
      rollingrtockromponents_detail:
        "Mainline Asia we offers a wide range of electrical component part from our product partner for AC rail vehicles and DC rail vehicles , such as EMU trains, high-speed trains and metro. Our main product consist of Pantograph / 3Rail Current connector, ground Contracts, Roof Mounting Switch, AC or DC Circuit breaker, Surge Arrestor, Voltage Sensor, Energy meter and Master Controller.",
      energystoragesolutions: "	Energy Storage Solutions",

      energystoragesolutions1:
        "Residential Energy Storage Solutions All-in-one system uses flexible battery modular design and integrates inverter, EMS, and UPS management systems to create an efficient, safe and intelligent residential ESS.",
      energystoragesolutions2:
        "Industrial and Commercial (C&I) Energy Storage Solutions 218kWh battery energy storage capacity, built-in PCS/BMS, real-time monitoring and management of power information through the network, small footprint, easy to install and expand, It provides an economical, flexible and efficient solution for applications with high requirements on grid continuity, peak shaving and valley filling and backup power supply, etc.",
      energystoragesolutions3:
        "Utility Energy Storage Solutions Utility ESS can customize container packaging of various sizes based on requests, using safe and efficient lithium-iron batteries, integrating communication, monitoring systems, power conversion systems, fire protection and auxiliary systems. The product has the advantages of high integration, flexible configuration, full functions, convenient installation and debugging.",
      energystoragesolutions4:
        "2MWh large capacity container energy storage charging station, equipped with 6 car charging guns at the same time can output 200kW charging power, also provides a variety of industrial power output interface, modular container design, can be quickly transported to different occasions, flexible use.",
      energystoragesolutions5:
        "With 200 kWh of storage and 180 kW charging power, iTrailer is versatile for stationary, towed, or in-vehicle use. It serves as a charger for electric vehicles, an emergency power source, and a backup power supply. Its industrial power outlets offer reliable electricity for various applications.",
      energystoragesolutions6:
        "iMChargerX is a mobile DC fast charger, It offers 60 kW of charging power for one, or 30 kW for two fast charging outlets simultaneously. It is equipped with a user-friendly 21-inch touchscreen and RFID reader. iMChargerX is suitable for charging all types of electric vehicles, cars, trucks, buses, marine and off-highway vehicles.",
      energystoragesolutions7:
        "Integrated energy storage and charging integrated charging robot, built-in 106kWh battery capacity, 80kW charging power, equipped with intelligent robot arm, automatic identification access charging, can complete automatic car search, automatic navigation, automatic access charging, automatic return to recharge and etc.",
      energystoragesolutions8:
        "Built-in 110kWh energy storage battery capacity, support singlegun 180kW double gun 90kW charging output power, equipped with industrial electrical interface output, supports PV input recharge, can quickly land photovoltaic energy storage charging station, greatly reduce the cost of site construction.",
      refprojects: "Project References",
      careers: "Careers",
      contact: "Contact Us",
      hometxtbanner: "Seamless Energy Solution for Smart Mobility",
      service: "Service",
      corevalue: "Core Value",
      innovation: "Innovation",
      innovation_detail:
        "We foster a culture of continuous improvement, leveraging the latest research and technological advancements to create forward-looking solutions.",
      integrity: "Integrity",
      integrity_detail:
        "Ethical business practices and transparent communication form the foundation of our relationships with customers, partners, and employees.",
      sustainability: "Sustainability",
      sustainability_detail:
        "Every project is approached with a focus on reducing carbon emissions, promoting renewable energy usage, and minimizing environmental impact.",
      collaboration: "Collaboration",
      collaboration_detail:
        "We believe in close partnerships with clients, suppliers, and industry stakeholders to ensure seamless project execution and shared success.",
      customercentricity: "Customer-Centricity",
      customercentricity_detail:
        "Cour solutions are designed around the unique needs of each client, providing tailored services and dedicated support.",
    },
  },
  th: {
    translation: {
      welcome: "ยินดีต้อนรับสู่เว็บไซต์ของเรา!",
      description: "สำรวจเนื้อหาของเราในภาษาไทย",
      home: "หน้าแรก",
      railway:"Railway",
      energystorage:"Energy Storage",
      evcharger:"EV Charger",
      
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
      ourvision: "วิสัยทัศน์ของเรา",
      ourvision_Detail:
        "เพื่อเป็นผู้นำการเปลี่ยนแปลงในเอเชียตะวันออกเฉียงใต้ไปสู่ระบบพลังงานที่ยั่งยืนโดยมอบโซลูชันที่เชื่อถือได้ สร้างสรรค์ และมีประสิทธิภาพสำหรับแหล่งจ่ายไฟทางรถไฟ การจัดเก็บพลังงาน และโครงสร้างพื้นฐานการชาร์จรถยนต์ไฟฟ้า",
      OurMission: "พันธกิจของเรา",
      OurMission_Detail1:
        "• ระบบจ่ายพลังงานทางรถไฟที่มีประสิทธิภาพสูง: ออกแบบและส่งมอบระบบที่มั่นใจได้ถึงประสิทธิภาพในการดำเนินงานและความยั่งยืน",
      OurMission_Detail2:
        "• การจัดเก็บพลังงานขั้นสูง: พัฒนาระบบแบตเตอรี่ที่เพิ่มความสามารถในการรวมพลังงานหมุนเวียนและสร้างเสถียรภาพให้กับกริด",
      OurMission_Detail3:
        " • เครือข่ายสถานีชาร์จ EV ที่แข็งแกร่ง: สร้างโครงสร้างพื้นฐานการชาร์จที่ขยายได้เพื่อตอบสนองความต้องการของยานยนต์ไฟฟ้าในอนาคต",
      ourbusiness: "ธุรกิจและบริการของเรา",
      ourbusiness_detail1:
        "บริษัทของเราพัฒนาโซลูชั่นที่สมบูรณ์แบบสำหรับระบบจ่ายไฟฟ้าทางรถไฟ เทคโนโลยีการจัดเก็บพลังงาน และสถานีชาร์จ EV เพื่อสนับสนุนอุตสาหกรรมการขนส่งและพลังงาน",
      ourbusiness_detail2:
        "Mainline Asia เป็นผู้ให้บริการชั้นนำด้านระบบจ่ายไฟฟ้าสำหรับโครงสร้างพื้นฐานทางรถไฟในประเทศไทย เราให้บริการตั้งแต่การออกแบบและติดตั้งไปจนถึงการจัดการระบบจ่ายไฟฟ้าสำหรับเครือข่ายทางรถไฟประเภทต่างๆ รวมถึงรถไฟความเร็วสูง รถไฟใต้ดิน และรถไฟฟ้ารางเบา นอกจากนี้ เรายังให้บริการโซลูชันสำหรับศูนย์ซ่อมบำรุงและสถานีไฟฟ้าอีกด้วย",
      ourbusiness_detail3: "ธุรกิจของเราแบ่งออกเป็น 3 ส่วนหลัก:",
      ourbusiness_detail4:
        " 1. แหล่งจ่ายไฟราง (ระบบไฟฟ้าสำหรับโครงสร้างพื้นฐานทางรถไฟ) 2. การจัดเก็บพลังงาน (โซลูชันสำหรับการจัดเก็บและจัดการพลังงาน) และ 3. การชาร์จรถยนต์ไฟฟ้า (โซลูชันสถานีชาร์จสำหรับยานยนต์ไฟฟ้า)",
      product: "ผลิตภัณฑ์",
      railwayelectrification: "การจ่ายไฟฟ้าทางรถไฟ",
      overheadcatenarysystems: "ระบบโซ่เหนือศีรษะ (OCS)",
      overheadcatenarysystems_detail:
        "สายส่งไฟฟ้าและส่วนประกอบสายส่งไฟฟ้าคุณภาพสูงที่ออกแบบมาเพื่อประสิทธิภาพและความทนทานในระบบความเร็วสูง รถไฟฟ้าใต้ดิน และรถไฟฟ้ารางเบา",
      thirdrailsystems: "ระบบรางที่สาม",
      thirdrailsystems_detail:
        "การออกแบบรางที่สามขั้นสูงและฝาครอบป้องกันที่ส่งพลังงานที่ปลอดภัยและต่อเนื่องให้กับเครือข่ายขนส่งในเขตเมืองและชานเมือง",
      tractionsubstations: "สถานีไฟฟ้าแรงดึง",
      tractionsubstations_detail1:
        "โซลูชันประสิทธิภาพสูงสำหรับการแปลงและการจ่ายพลังงานที่เชื่อถือได้",
      tractionsubstations_detail2:
        "สวิตช์เกียร์ เบรกเกอร์ และรีเลย์ป้องกันที่ออกแบบมาโดยเฉพาะสำหรับเครือข่ายไฟฟ้าทางรถไฟ",
      tractionsubstations_detail3:
        "โซลูชันที่ยืดหยุ่นและปลอดภัยสำหรับการจ่ายไฟให้รถไฟระหว่างการบำรุงรักษาสถานีหรือการปฏิบัติการจัดเตรียม",
      auxiliarycomponents: "ส่วนประกอบและอุปกรณ์เสริม",
      auxiliarycomponents_detail:
        "ตัวนำและขั้วต่อคุณภาพสูงสำหรับการถ่ายโอนพลังงานอย่างมีประสิทธิภาพและลดการสูญเสียของสาย วัสดุยึดราง",
      rollingrtockromponents: "ส่วนประกอบสต็อกกลิ้ง",
      rollingrtockromponents_detail:
        "Mainline Asia เรานำเสนอชิ้นส่วนไฟฟ้าหลากหลายประเภท จากพันธมิตรผลิตภัณฑ์ของเราสำหรับยานพาหนะไฟฟ้ากระแสสลับและยานพาหนะไฟฟ้ากระแสตรง เช่น รถไฟ EMU รถไฟความเร็วสูงและรถไฟฟ้าใต้ดิน ผลิตภัณฑ์หลักของเราประกอบด้วยขั้วต่อไฟฟ้าแบบแพนโทกราฟ/3Rail สัญญาสายดิน สวิตช์ติดตั้งบนหลังคา เบรกเกอร์ไฟฟ้ากระแสสลับหรือไฟฟ้ากระแสตรง อุปกรณ์ป้องกันไฟกระชาก เซ็นเซอร์แรงดันไฟฟ้า มิเตอร์วัดพลังงาน และตัวควบคุมหลัก",
      energystoragesolutions: "โซลูชั่นการจัดเก็บพลังงาน",
      energystoragesolutions1:
        "โซลูชันการจัดเก็บพลังงานสำหรับที่อยู่อาศัย ระบบออลอินวันใช้การออกแบบโมดูลาร์แบตเตอรี่แบบยืดหยุ่นและบูรณาการอินเวอร์เตอร์ EMS และระบบจัดการ UPS เพื่อสร้าง ESS สำหรับที่อยู่อาศัยที่มีประสิทธิภาพ ปลอดภัย และชาญฉลาด",
      energystoragesolutions2:
        "โซลูชันการจัดเก็บพลังงานสำหรับอุตสาหกรรมและเชิงพาณิชย์ (C&I) ความจุการจัดเก็บพลังงานจากแบตเตอรี่ 218kWh, PCS/BMS ในตัว, การตรวจสอบและจัดการข้อมูลพลังงานแบบเรียลไทม์ผ่านเครือข่าย ขนาดเล็ก ติดตั้งและขยายได้ง่าย มอบโซลูชันที่ประหยัด ยืดหยุ่นและมีประสิทธิภาพสำหรับการใช้งานที่มีความต้องการสูงเกี่ยวกับความต่อเนื่องของกริด การลดจุดสูงสุดและการเติมหุบเขา และแหล่งจ่ายไฟสำรอง ฯลฯ",
      energystoragesolutions3:
        "โซลูชันการจัดเก็บพลังงานของยูทิลิตี้ ESS สามารถปรับแต่งบรรจุภัณฑ์คอนเทนเนอร์ในขนาดต่างๆ ตามความต้องการ โดยใช้แบตเตอรี่ลิเธียมไอออนที่ปลอดภัยและมีประสิทธิภาพ ผสานรวมระบบการสื่อสาร ระบบตรวจสอบ ระบบแปลงพลังงาน ระบบป้องกันอัคคีภัย และระบบเสริม ผลิตภัณฑ์นี้มีข้อดีของการผสานรวมสูง การกำหนดค่าที่ยืดหยุ่น ฟังก์ชันครบครัน ติดตั้งและแก้ไขข้อบกพร่องได้อย่างสะดวก",
      energystoragesolutions4:
        "สถานีชาร์จพลังงานเก็บพลังงานแบบคอนเทนเนอร์ความจุขนาดใหญ่ 2MWh ติดตั้งปืนชาร์จรถยนต์ 6 ตัวพร้อมกัน สามารถจ่ายพลังงานชาร์จ 200kW นอกจากนี้ยังมีอินเทอร์เฟซเอาต์พุตพลังงานอุตสาหกรรมที่หลากหลาย การออกแบบคอนเทนเนอร์แบบแยกส่วน สามารถขนส่งไปยังโอกาสต่างๆ ได้อย่างรวดเร็ว ใช้งานได้อย่างยืดหยุ่น",
      energystoragesolutions5:
        "ด้วยความจุ 200 kWh และกำลังชาร์จไฟ 180 kW iTrailer จึงใช้งานได้หลากหลายทั้งแบบจอดอยู่กับที่ ลากจูง หรือในรถ นอกจากนี้ยังทำหน้าที่เป็นเครื่องชาร์จสำหรับยานยนต์ไฟฟ้า แหล่งพลังงานสำรอง และแหล่งจ่ายไฟฟ้าสำรองอีกด้วย เต้ารับไฟฟ้าสำหรับอุตสาหกรรมให้พลังงานไฟฟ้าที่เชื่อถือได้สำหรับการใช้งานต่างๆ",
      energystoragesolutions6:
        "iMChargerX คือเครื่องชาร์จ DC แบบเคลื่อนที่เร็ว ซึ่งให้พลังงานในการชาร์จ 60 กิโลวัตต์สำหรับ 1 เครื่อง หรือ 30 กิโลวัตต์สำหรับ 2 ช่องชาร์จเร็วพร้อมกัน มาพร้อมหน้าจอสัมผัสขนาด 21 นิ้วที่ใช้งานง่ายและเครื่องอ่าน RFID iMChargerX เหมาะสำหรับการชาร์จยานยนต์ไฟฟ้าทุกประเภท รถยนต์ รถบรรทุก รถประจำทาง เรือ และยานยนต์นอกทางหลวง",
      energystoragesolutions7:
        "หุ่นยนต์ชาร์จแบบกักเก็บพลังงานและชาร์จไฟแบบบูรณาการ มีความจุแบตเตอรี่ในตัว 106kWh กำลังชาร์จ 80kW พร้อมแขนหุ่นยนต์อัจฉริยะ การระบุการเข้าถึงการชาร์จอัตโนมัติ สามารถค้นหารถอัตโนมัติ นำทางอัตโนมัติ การเข้าถึงการชาร์จอัตโนมัติ กลับเพื่อชาร์จอัตโนมัติ และอื่นๆ อีกมากมาย",
      energystoragesolutions8:
        "แบตเตอรี่สำรองพลังงานความจุ 110kWh ในตัว รองรับพลังงานปืนเดี่ยว 180kW ปืนคู่ 90kW พร้อมเอาต์พุตอินเทอร์เฟซไฟฟ้าอุตสาหกรรม รองรับการชาร์จอินพุต PV สามารถลงสถานีชาร์จพลังงานโซลาร์เซลล์ได้อย่างรวดเร็ว ช่วยลดต้นทุนการก่อสร้างไซต์ได้อย่างมาก",
      refprojects: "ตัวอย่างโครงการ",
      careers: "ร่วมงานกับเรา",
      contact: "ติดต่อเรา",
      hometxtbanner: "เชื่อมต่อรถไฟฟ้าโดยสารสาธารณะด้วยพลังงานไฟฟ้า",
      service: "บริการของเรา",
      corevalue: "ค่านิยมหลัก",
      innovation: "นวัตกรรม",
      innovation_detail:
        "เราส่งเสริมวัฒนธรรมของการปรับปรุงอย่างต่อเนื่องโดยใช้ประโยชน์จากการวิจัยและความก้าวหน้าทางเทคโนโลยีล่าสุดเพื่อสร้างโซลูชั่นที่มองไปข้างหน้า",
      integrity: "ความซื่อสัตย์",
      integrity_detail:
        "แนวทางปฏิบัติทางธุรกิจที่มีจริยธรรมและการสื่อสารที่โปร่งใสเป็นรากฐานของความสัมพันธ์ของเรากับลูกค้า พันธมิตร และพนักงาน",
      sustainability: "ความยั่งยืน",
      sustainability_detail:
        "โครงการทุกโครงการมีแนวทางที่เน้นการลดการปล่อยคาร์บอน ส่งเสริมการใช้พลังงานหมุนเวียน และลดผลกระทบต่อสิ่งแวดล้อมให้เหลือน้อยที่สุด",
      collaboration: "การทำงานร่วมกัน",
      collaboration_detail:
        "เราเชื่อมั่นในการร่วมมืออย่างใกล้ชิดกับลูกค้า ซัพพลายเออร์ และผู้มีส่วนได้ส่วนเสียในอุตสาหกรรม เพื่อให้มั่นใจว่าการดำเนินโครงการจะราบรื่นและประสบความสำเร็จร่วมกัน",
      customercentricity: "การเน้นลูกค้าเป็นศูนย์กลาง",
      customercentricity_detail:
        "โซลูชั่นของเราได้รับการออกแบบโดยคำนึงถึงความต้องการเฉพาะของลูกค้าแต่ละราย โดยมอบบริการเฉพาะและการสนับสนุนเฉพาะ",
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