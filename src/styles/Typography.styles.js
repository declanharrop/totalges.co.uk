import { createGlobalStyle } from 'styled-components';

// Industry Inc Base
// font-family: "industry-inc-base", sans-serif;
// font-weight: 400;
// font-style: normal;

// Industry Inc Inline
// font-family: "industry-inc-inline", sans-serif;
// font-weight: 400;
// font-style: normal;

// Industry Inc Outline
// font-family: "industry-inc-outline", sans-serif;
// font-weight: 400;
// font-style: normal;

// font-family: scandia-web, sans-serif;
// font-weight: 300;
// font-weight: 400;
// font-weight: 400i;
// font-weight: 500;
// font-weight: 700;
// font-weight: 700i;

const Typography = createGlobalStyle`
  h1 {
    font-family: 'industry-inc-base', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0.5rem;
    font-size: 4rem;
    line-height: 1.2;
    text-transform: uppercase;
  }
  .decorated-title {
    max-width: 1000px;
    h1 {
      margin: -10px 0 0 20px;
    }
    p {
      font-size: 2rem; 
      margin: 10px 0 -4px 20px;
    }
    border-left: 2px solid white;
  }
  h2 {
    font-family: 'industry-inc-base', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    letter-spacing: 0.3rem;
    font-size: 3.6rem;
    line-height: 1.2;
    text-transform: uppercase;
  }
  h3 {
    font-family: 'industry-inc-base', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    letter-spacing: 0.2rem;
    font-size: 2.6rem;
    line-height: 1.2;
    text-transform: uppercase;
  }
  h4 {
    margin: 10px 0;
    font-size: 2.2rem;
    letter-spacing: 0.3rem;
    line-height: 1.4;
    font-weight: 400;
    text-transform: uppercase;
  }
  h5 {
    margin: 10px 0;
    letter-spacing: 0.2rem;
    font-size: 2rem;
    line-height: 1.4;
    font-weight:400;
    text-transform: uppercase;
  }
  a {
    font-family: 'scandia-web', sans-serif;
    letter-spacing: 0.1rem;
    &:hover {
      color: var(--orange)
    }
  }
  p {
    letter-spacing: 0.1rem;
    line-height: 1.5;
    font-size: 1.7rem;
    font-weight: 500;
  }
  ul {
    list-style-type: none;
  }
  span {
    font-size: 1.8rem;
    line-height: 1.6;
  }
  li {
    font-weight: 500;
    letter-spacing: 0.2rem;
    font-family: scandia-web, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-transform: uppercase;
    list-style-type: none;
  }
  .sm-grey {
    color: var(--grey);
    font-size: 1.5rem;
    margin: 10px 0;
    letter-spacing: 0.03rem;
    font-weight: 500;
  }
  @media screen and (max-width: 900px) {
    h1 {
      font-size: 2.6rem;
      letter-spacing: 0.1rem;
    }
    h2 {
      font-size: 2.4rem;
    }
    h3 {
      font-size: 2.2rem;
    }
    h4 {
      font-size: 2rem;
    }
    h5 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.6rem;
    }
    span {
      font-size: 1.8rem;
    }
  }
`;

export default Typography;
