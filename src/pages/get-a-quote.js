import styled from 'styled-components';
import Hero from '../Components/Hero/Hero';
import Head from '@/Elements/Head';

const GetAQuoteStyles = styled.div`
  h3 {
    margin: 40px auto 0;
    max-width: 800px;
  }
  iframe {
    margin: 20px auto 0;
    padding: 0 10px 40px;
    width: 100%;
    max-width: 1000px;
    height: 1500px;
  }
`;
export default function GetAQuote() {
  return (
    <>
      <Head
        title="Get a Quote - Total Green Energy Solutions"
        description=""
        url="https://totalges.uk/get-a-quote"
      />
      <GetAQuoteStyles>
        <Hero height="20vh" src="/images/solar/solar3.jpg">
          <div className="decorated-title">
            <h1>Get a Quote</h1>
          </div>
        </Hero>
        <iframe
          title="Get a Quote - Electrical"
          src="https://forms.clickup.com/9012005378/f/8cjgjg2-592/U97SUVQTG433862TGM"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
          Loading…
        </iframe>
      </GetAQuoteStyles>
    </>
  );
}
