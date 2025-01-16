import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './i18n'; // import การตั้งค่า i18n ที่เราสร้างไว้

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <title>My Multilingual Page</title>
    <meta name="description" content="This is a multilingual website." />
    <meta name="keywords" content="SEO, multilingual, website" />
    <meta property="og:locale" content="en_US" />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();