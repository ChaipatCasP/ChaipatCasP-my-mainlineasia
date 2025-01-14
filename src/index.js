import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import i18n from './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <HelmetProvider>
    <Helmet>
      <html lang={i18n.language} />
      <title>My Multilingual Page</title>
      <meta name="description" content="This is a multilingual website." />
      <meta name="keywords" content="SEO, multilingual, website" />
      <meta property="og:locale" content="en_US" />

      {/* <title>{t('metaTitle')}</title>
      <meta name="description" content={t('metaDescription')} />
      <meta property="og:title" content={t('metaTitle')} />
      <meta property="og:description" content={t('metaDescription')} /> */}

    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
