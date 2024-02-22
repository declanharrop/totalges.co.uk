import Link from 'next/link';
import { SitemapStyles } from './Footer.styles';

export default function Sitemap() {
  return (
    <SitemapStyles>
      <h3>Sitemap</h3>
      <div className="sitemap-grid">
        <div className="section">
          <div className="title">
            <h5>Total</h5>
          </div>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <a href="totalhomeimprovements.co.uk">Other Services</a>
            {/* <Link href="/news">News</Link> */}
            {/* <Link href="/case-studies">Case Studies</Link> */}
            <Link href="/reviews">Reviews</Link>
            <Link href="/get-a-quote">Get a Quote</Link>
            <Link href="/information/privacy-policy">Privacy Policy</Link>
            <Link href="/information/terms-and-conditions">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="section">
          <div className="title">
            <h5>Green Energy Solutions</h5>
          </div>
          <div className="links">
            <Link href="/solar">Solar PV</Link>
            <Link href="/about">Battery Storage</Link>
          </div>
        </div>
      </div>
    </SitemapStyles>
  );
}
