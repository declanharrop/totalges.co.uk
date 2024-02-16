import StandardPageSection from '../Components/PageSections/StandardPageSection';
import Hero from '../Components/Hero/Hero';
import Head from '@/Elements/Head';

export default function Contact() {
  return (
    <div className="contact">
      <Head
        title="Contact Us - Total Green Energy Solutions"
        description="Thank you for considering Total Green Energy Solutions as your partner in transforming your living spaces. We are excited to hear from you and assist you in creating the home of your dreams."
        url="https://totalges.co.uk/contact-us"
      />
      <Hero height="20vh" src="/images/solar/solar2.jpg">
        <h1>Contact Us</h1>
      </Hero>
      <StandardPageSection
        data={{
          title: "We'd love to hear from you!",
          text: [
            'Thank you for considering Total Green Energy Solutions as your partner in transforming your living spaces. We are excited to hear from you and assist you in creating the home of your dreams.',
            'Our dedicated team is here to address all your home improvement needs and provide personalised solutions that align with your vision and preferences. Whether you have questions about our products, want to schedule a consultation, or need expert advice, feel free to get in touch using the contact form below, or give us a call.',
            "We look forward to connecting with you and beginning the journey towards elevating your home and enhancing your life. Your dream home awaits – let's make it a reality together!",
          ],
        }}
      />
      <h3 style={{ marginTop: '-80px' }}>Call Us: </h3>
      <a href="tel:+441159305858">
        <h2> 0115 930 5858</h2>
      </a>
      <h3 style={{ marginTop: '40px' }}>Email Us:</h3>
      <a href="mailto:info@totalges.uk">
        <h5>info@totalges.uk</h5>
      </a>
    </div>
  );
}
