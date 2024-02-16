/* eslint-disable react/destructuring-assignment */
import NextHead from 'next/head';

const defaultDescription =
  ' At Total Green Energy Solutions we believe in harnessing the power of the sun to create a brighter, greener future for generations to come. Explore our website to learn more about how you can make the switch to solar and join us in shaping a cleaner, more sustainable world.';
const defaultOGURL = 'https://totalges.uk';
const defaultOGImage = 'https://totalges.uk/images/solar/solar6.gif';
const defaultOGType = 'website';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    {props.title ? (
      <title>{props.title}</title>
    ) : (
      <title>Total Green Energy Solutions</title>
    )}
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/favicon.ico" />
    <link rel="mask-icon" href="/static/favicon.ico" color="var(--navy)" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    {props.title ? (
      <meta property="og:title" content={props.title} />
    ) : (
      <meta property="og:title" content="Total Home Improvements" />
    )}
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:type" content={props.ogType || defaultOGType} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

export default Head;
