import React from 'react';
import banner_en from '../assets/images/banner-en.jpg'
import banner_th from '../assets/images/banner-th.jpg'
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Home = () => {
  const { t, i18n } = useTranslation();

  // const changeLanguage = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  const images = {
    en: banner_en,
    th: banner_th,
  };

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={i18n.language} />
        <title>My Multilingual Page</title>
        <meta name="description" content="This is a multilingual website." />
      </Helmet>

      <div>
        <div className="page home">
          <header className="banner">
            <h1>{t('welcome')}</h1>
          </header>

          <p>{t('description')}</p>
          <img
            src={images[i18n.language]}
            alt="Company Logo" className="logo"
            // alt="Language specific banner" 
            style={{ width: '100%', height: 'auto' }}
          />
          {/* <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('th')}>ไทย</button> */}
        </div>
      </div>

    </HelmetProvider>
  );
};

export default Home;