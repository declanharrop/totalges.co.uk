import React from 'react';
import Link from 'next/link';
import HeroSlider from '@/Components/Hero/HeroSlider';
import StandardPageSection from '@/Components/PageSections/StandardPageSection';
import GridPageSection from '@/Components/PageSections/GridPageSection';
import Head from '@/Elements/Head';

export default function HomePage() {
  return (
    <div>
      <Head />
      <HeroSlider height="70vh" overlayPadding="0 0 5vh">
        <div className="standard-title">
          <h1>Total Green Energy Solutions</h1>
          <Link href="/get-a-quote">
            <button
              type="button"
              style={{ color: `var(--black)` }}
              className="home-getaquote"
            >
              Get a Quote Today
            </button>
          </Link>
        </div>
      </HeroSlider>
      <StandardPageSection
        data={{
          title: 'Welcome to Total Green Energy Solutions',
          text: [
            'We are dedicated to powering homes with clean and sustainable energy solutions. As leaders in the field, we specialise in providing innovative solar solutions to our residential customers. With a commitment to environmental stewardship and a passion for empowering homeowners with renewable energy, we offer a comprehensive range of solar products and services tailored to meet your specific needs.',
            'At Total Green Energy Solutions, we believe in harnessing the power of the sun to create a brighter, greener future for generations to come. Explore our website to learn more about how you can make the switch to solar and join us in shaping a cleaner, more sustainable world.',
          ],
        }}
      />
      <GridPageSection
        title="Explore our Renewable Solutions"
        sections={[
          {
            title: 'Solar PV Installations',
            image: 'images/solar/solar.jpg',
            slug: 'solar',
          },
          {
            title: 'Battery Storage',
            image: 'images/bat/bat1.jpeg',
            slug: 'battery-storage',
          },
        ]}
      />
      <div className="get-started-section" style={{ margin: '100px auto' }}>
        <h2>Start your Solar Journey Today</h2>
        <img src="images/solar/solar7.png" alt="" />
        <h3>Packages starting from £9,495.00</h3>
        <p>
          4Kw Solar Panel System 5Kw's of Battery Storage and a Suitable
          Inverter.
        </p>
        <p>
          <i>HIES Certificate MCS Certificate EPVS Certificate Full Install</i>
        </p>
        <Link href="/get-a-quote">
          <button type="button" className="button-reverse">
            Get a Quote Today
          </button>
        </Link>
      </div>
    </div>
  );
}
