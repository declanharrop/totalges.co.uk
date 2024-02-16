import StandardPageSection from '../Components/PageSections/StandardPageSection';
import Hero from '../Components/Hero/Hero';
import Head from '@/Elements/Head';

export default function About() {
  return (
    <div className="about">
      <Head
        title="About Us - Total Green Energy Solutions"
        description="At Total Green Energy Solutions, our mission is to make your home a haven of comfort and style, providing you with the kind of service that you truly deserve. With an unwavering commitment to excellence, we fit and install a comprehensive range of top-quality products, elevating your living experience to new heights."
        url="https://totalges.co.uk/about-us"
      />
      <Hero src="/images/headers/FlushCasement.jpg">
        <h1>About us</h1>
      </Hero>
      <StandardPageSection
        data={{
          title: 'About Total Green Energy Solutions',
          text: [
            'At Total Green Energy Solutions, our mission is to make your home a haven of comfort and style, providing you with the kind of service that you truly deserve. With an unwavering commitment to excellence, we fit and install a comprehensive range of top-quality products, elevating your living experience to new heights.',
            "From the moment you choose Total Green Energy Solutions, you're assured of receiving the highest standards in home upgrades. Our expert team specializes in crafting and installing premium-grade Windows, Doors, and Roofline Products. Enjoy improved energy efficiency, enhanced security, and a visually stunning facade that complements your home's unique character.",
            'Creating beautiful spaces for year-round enjoyment is our forte, and our selection of Conservatories, Conservatory Upgrades, Canopies, Carports, Verandas, and Awnings will redefine how you embrace the outdoors. Each of our offering s is designed to harmonize with your lifestyle, making your home an oasis of relaxation and entertainment.',
          ],
        }}
      />
    </div>
  );
}
