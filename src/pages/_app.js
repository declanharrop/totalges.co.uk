import { ApolloProvider } from '@apollo/client';
import CookieConsent from 'react-cookie-consent';
import NProgress from 'nprogress';
import { Router } from 'next/router';
import Script from 'next/script';
import client from '../../apollo-client';
import Globalstyle from '../styles/Global.styles';
import Typography from '../styles/Typography.styles';
import '../styles/nprogress.css';
import Header from '../Components/Header/Header';
import { MenuProvider } from '../Context/MenuContext';
import Footer from '../Components/Footer/Footer';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MenuProvider>
        {/* <Head /> */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P3CSG59');
      `}
        </Script>

        <Globalstyle />
        <Typography />

        <Header />
        <Component {...pageProps} />
        <Footer />
        {/* <LowerNav /> */}

        <CookieConsent
          location="bottom"
          buttonText="I Agree"
          cookieName="Power and Control - Cookie Consent - PAC ELECTRICAL"
          style={{
            background: 'var(--navy-75)',
            color: 'white',
            boxShadow: 'var(--bs-l)',
            fontSize: '15px',
            fontWeight: '500',
            padding: '0px',
          }}
          buttonStyle={{
            background: 'white',
            color: 'var(--navy)',
            fontSize: '14px',
            padding: '8px 16px',
            borderRadius: '4px',
          }}
          expires={150}
        >
          By using this website you agree to the use of cookies to enhance the
          user experience.
        </CookieConsent>
      </MenuProvider>
    </ApolloProvider>
  );
}

export default MyApp;
