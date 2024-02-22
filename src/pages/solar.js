import StandardPageSection from '@/Components/PageSections/StandardPageSection';
import Hero from '../Components/Hero/Hero';
import ImagePageSection from '@/Components/PageSections/ImagePageSection';

export default function SolarPage() {
  return (
    <div>
      <Hero src="/images/solar/solar6.gif">
        <h1>Solar PV Installations</h1>
      </Hero>
      <h2
        style={{
          margin: '50px auto 0',
          maxWidth: '800px',
        }}
      >
        How does Solar work?
      </h2>
      <iframe
        style={{ margin: '20px auto -100px', maxWidth: '560px' }}
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/ZzCjZb8mFwM?si=zlplkkXzvuKT75JD"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      <StandardPageSection
        data={{
          title: '',
          text: [
            'Total Green Energy Solutions are committed to delivering design, expert advice and service to all of our customers. With many years’ experience in the mechanical, electrical and heating industry, our commitment to providing the best product and service before, during and after an installation is second to none.',
          ],
        }}
      />
      <div className="flex-container">
        <div className="item">
          <h3>Save and Earn Money</h3>
          <p>
            Not only will you save money from your solar panel installation you
            will also get paid for any exported electricity too meaning nothing
            you produce will go to waste.
          </p>
        </div>
        <div className="item">
          <h3>Reduce Air Pollution</h3>
          <p>
            By installing solar panels onto your property, you will reduce the
            amount of Co2 in the air and our dependance on burning fossil fuels
            for powering homes for generations to come.
          </p>
        </div>
        <div className="item">
          <h3>No Maintenance Required</h3>
          <p>
            Solar panel installations don't have any moving parts which means
            there is very little maintenance involved in the upkeep of your
            panels, you may need to get them cleaned every few years.
          </p>
        </div>
        <div className="item">
          <h3>Increase Property Value</h3>
          <p>
            Renewable energy is what all houses will be expected to have in the
            future meaning you are future proofing your home while potentially
            increasing the value of your property and desirability to a buyer.
          </p>
        </div>
      </div>
      <ImagePageSection
        data={{
          image: { url: '/images/solar/solar2.jpg' },
          title: 'Customized Solutions',
          content: {
            html: ` <p>We understand that every home and homeowner is unique. That's why we take the time to assess your specific needs and tailor a solar solution that maximizes energy production and savings for your property.</p>`,
          },
        }}
      />
      <div className="why-choose">
        <h2>Why Choose Total Green Energy Solutions</h2>
        <p>
          When you choose Total Green Energy Solutions, you're choosing a
          partner you can trust to deliver high-quality solar solutions that
          meet your needs, save you money, and help create a more sustainable
          future for our planet.
        </p>
      </div>
    </div>
  );
}
