import React from 'react';
import { ContactStyles } from './Footer.styles';
import Accreds from './Accreds';

export default function Contact() {
  return (
    <ContactStyles>
      <div className="contact-grid">
        <div className="address">
          <h3>Total Green Energy Solutions</h3>
          <p>Goodhill Court</p>
          <p>Hallam Fields Industrial Estate</p>
          <p>Ilkeston</p>
          <p>DE7 4RT</p>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <div className="contact-section">
            <p className="title">Phone:</p>
            <a href="tel:+441159305858" className="call-click">
              <p>0115 930 5858</p>
            </a>
          </div>
          <div className="contact-section">
            <p className="title">Email:</p>
            <a href="mailto:info@totalges.co.uk" className="email-click">
              <p>info@totalges.co.uk</p>
            </a>
          </div>
        </div>
      </div>
      {/* <Accreds /> */}
    </ContactStyles>
  );
}
