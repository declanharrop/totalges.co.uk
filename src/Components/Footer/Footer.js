import React from 'react';
import { FooterStyles } from './Footer.styles';
import Contact from './Contact';
import Sitemap from './Sitemap';
import Accreds from './Accreds';
// import FinanceBanner from './FinanceBanner';

export default function Footer() {
  return (
    <FooterStyles>
      {/* <FinanceBanner /> */}
      <Accreds />
      <Contact />
      <Sitemap />
      <div className="lower">
        <div className="copyright">
          <p>
            © {new Date().getFullYear()} Total Home Improvements. Use of this
            site constitutes acceptance of our Privacy Policy. The material on
            this site may not be reproduced, distributed, transmitted, cached or
            otherwise used, except with prior written permission of Total Home
            Improvements.
          </p>
          <div className="dhweblogo">
            <a href="https://dhweb.dev" target="_blank" rel="noreferrer">
              <img src="/logo/dhwebdev.svg" alt="DH Web Logo" />
            </a>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}
