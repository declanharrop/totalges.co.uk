import styled from 'styled-components';

export const FooterStyles = styled.div`
  .lower {
    max-width: 600px;
    margin: 40px auto 10px;
    padding: 10px;
    color: gray;
    p {
      font-size: 1.4rem;
    }
    .dhweblogo {
      margin-top: 20px;
      img {
        width: 80px;
      }
    }
  }
  .accreds {
    margin-top: 50px;
    img {
      max-width: 160px;
    }
  }
`;

export const SitemapStyles = styled.div`
  background: var(--black);
  padding: 50px 0;
  color: white;
  h3 {
    margin-bottom: 30px;
  }
  .sitemap-grid {
    max-width: 1000px;
    padding: 0 10px;
    grid-gap: 10px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .section {
    text-align: left;
    margin-top: 10px;
    h5 {
      margin-bottom: 16px;
      letter-spacing: 0.1rem;
      font-size: 1.7rem;
      font-weight: 600;
      border-bottom: 2px solid white;
      display: inline-block;
      width: 100%;
    }
    .links {
      display: flex;
      flex-direction: column;
      a {
        color: white;
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 8px;
        &:hover {
          color: var(--orange);
          text-decoration: underline;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .sitemap-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 440px) {
    .sitemap-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const LogoSectionStyles = styled.div`
  .logo-container {
    max-width: 1200px;
    margin: 70px auto;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  img {
    width: 260px;
  }
  @media screen and (max-width: 900px) {
    img {
      width: 200px;
    }
  }
  @media screen and (max-width: 680px) {
    .logo-container {
      gap: 10px;
      margin: 40px auto;
    }
    img {
      width: 140px;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      width: 90px;
    }
  }
`;

export const ContactStyles = styled.div`
  max-width: 1000px;
  margin: 50px auto 20px;
  .accreds {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
    img {
      max-width: 100px;
    }
  }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
    text-align: left;
    h3 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }
  .address {
    padding: 10px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 3px;
  }
  .contact-info {
    background: rgba(0, 0, 0, 0.03);
    border-radius: 3px;
    padding: 10px;
    .title {
      font-weight: 600;
      font-size: 2.2rem;
      letter-spacing: 0.2rem;
    }
    a {
      &:hover {
        text-decoration: underline;
        color: var(--orange);
      }
    }
    p {
      font-size: 2rem;
      letter-spacing: 0rem;
      hyphens: auto;
    }
  }
  @media screen and (max-width: 500px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
`;
