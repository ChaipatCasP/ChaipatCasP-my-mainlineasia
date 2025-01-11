import React from 'react';

const ContactUs = () => (
  <div className="page contact">
    <h2>Contact Us</h2>
    <p>Call us at 123-456-7890 or visit our office:</p>
    <iframe 
      src="https://www.google.com/maps/embed?..."
      title="Company Location"
      className="map"
    ></iframe>
  </div>
);

export default ContactUs;
