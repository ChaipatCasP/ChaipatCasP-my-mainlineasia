import React from 'react';

const ContactUs = () => (
  <div className="page contact">
    <h2>Contact Us</h2>
        {/* ข้อมูลการติดต่อ */}
        <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>123/45 Sukhumvit Road, Bangkok 10260</p>
      <p>Phone: +66 2 123 4567</p>
      <p>Email: contact@yourcompany.com</p>
    </div>
    
    {/* ลิงก์โซเชียล */}
    <div className="footer-social">
      <h4>Follow Us</h4>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
    </div>
    
    <iframe 
      src="https://www.google.com/maps/embed?..."
      title="Company Location"
      className="map"
    ></iframe>
  </div>
);

export default ContactUs;
